import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { setLevel, setPauseTime } from "./../../store/exam/examlSlice";
import { setUserData } from "./../../store/user/userSlice";
import { api_url } from "./../../utils/base_url";
import InstructionModal from "./../InstructionModal";

// import { Input } from 'semantic-ui-react'

import {
  Input,
  Container,
  Segment,
  Item,
  Dropdown,
  Divider,
  Button,
  Message,
} from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import axios from "axios";

import mindImg from "../../images/logo.png";

import { shuffle } from "../../utils";

import formatExam from "../../utils/formatExam";
import NumericInput from "../NumericInput";

const Main = ({ startQuiz }) => {
  const { i18n, t } = useTranslation();
  let currLang = i18n.language;

  const dispatch = useDispatch();
  let { levels } = useSelector((s) => s.exam);
  const [category, setCategory] = useState(null);
  const [examLang, setExamLang] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  let allFieldsSelected = false;
  if (category && examLang) {
    allFieldsSelected = true;
  }
  const fetchData = async () => {
    try {
      dispatch(setUserData({ name, phone, email }));
      if (!allFieldsSelected) {
        Swal.fire({
          icon: "error",
          title: `${t(`Error`)}!`,
          text: t("All fields must be filled."),
        });
        return;
      }
      setProcessing(true);
      const response = await axios.post(`${api_url}/users/check`, { email, phone });
      let result = response.data;
      // console.log(result);
      if (response.status !== 200) {
        Swal.fire({
          icon: "error",
          // title: "Error!",
          title: `${t(`Error`)}!`,
          text: t(`User with the same email or phone already exists`),
        });
        return;
      }
      const {
        questions: results,
        numberOfMinutes,
        pauseTime,
      } = formatExam({
        levels,
        levelId: category,
        examLang,
      });
      // console.log(pauseTime)
      dispatch(setPauseTime(pauseTime));

      results.forEach((element) => {
        element.options = shuffle([element.correct_answer, ...element.incorrect_answers]);
      });

      setProcessing(false);
      startQuiz(results, numberOfMinutes * 60);
    } catch (e) {
      // console.log(`ee==`, e);
      Swal.fire({
        icon: "error",
        title: `${t(`Error`)}!`,
        text: t(`User with the same email or phone already exists`),
      });
      setProcessing(false);
    }
  };

  return (
    <Container>
      <Segment>
        <Item.Group divided>
          <Item>
            <div className="flex flex-col gap-1 justify-start items-start px-2">
              <Item.Image src={mindImg} />
            </div>
            {/* <div>test</div> */}
            <Item.Content>
              <Item.Header>
                <h1>{t(`The_Quiz`)}</h1>
              </Item.Header>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Error!</Message.Header>
                  {error.message}
                </Message>
              )}
              <Divider />
              <p> {t(`Full_Name`)} </p>
              <Input
                value={name}
                onChange={(_, { value }) => {
                  setName(value);
                }}
                className="w-100"
                placeholder={`${t("name")}...`}
              />
              <Divider />

              <p>{t(`Phone_Number`)} </p>

              <NumericInput
                value={phone}
                onChange={({ target }) => {
                  setPhone(target?.value);
                }}
                className="w-100"
                placeholder={`${t("phone")}...`}
              />
              <Divider />
              <p> {t(`Email_Adress`)} </p>
              <Input
                value={email}
                onChange={(_, { value }) => {
                  setEmail(value);
                }}
                className="w-100"
                placeholder={`${t("email")}...`}
              />
              <Divider />
              <Item.Meta>
                <p>{t(`which position are you applying for ?`)}</p>
                <Dropdown
                  fluid
                  selection
                  name="category"
                  placeholder={t("Select Quiz Category")}
                  header={t("Select Quiz Category")}
                  options={levels.map((level) => {
                    return {
                      key: level?._id,
                      text: `${level?.level_en} - ${level?.level_ar}`,
                      value: level?._id,
                    };
                  })}
                  value={category}
                  onChange={(_, e) => {
                    // console.log(e);
                    setCategory(e?.value);
                    dispatch(
                      setLevel({
                        id: e?.value,
                        name: e?.options?.find((o) => o?.key == e?.value).text,
                      })
                    );
                  }}
                  disabled={processing}
                />
                <br />

                <p>{t(`Please_select_the_language_of_the_exam`)}.</p>
                <Dropdown
                  fluid
                  selection
                  name="language"
                  placeholder={t("Select Language")}
                  header={t("Select Language")}
                  options={[
                    { key: `ar`, text: t(`arabic`), value: `ar` },
                    { key: `en`, text: t(`english`), value: `en` },
                  ]}
                  value={examLang}
                  onChange={(e, { value }) => setExamLang(value)}
                  disabled={processing}
                />
              </Item.Meta>
              <Divider />
              <Item.Extra>
                <Button
                  primary
                  size="big"
                  icon="play"
                  labelPosition={currLang == `en` ? "left" : `right`}
                  content={processing ? t("Processing") : t("Start_Now")}
                  onClick={fetchData}
                  disabled={processing}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />
    </Container>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Main;
