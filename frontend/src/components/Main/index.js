import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SendIcon from "@mui/icons-material/Send";

import Swal from "sweetalert2";
import { setCurrentQuestion, setLevel, setPauseTime } from "./../../store/exam/examlSlice";
import { setUserData } from "./../../store/user/userSlice";
import { api_url } from "./../../utils/base_url";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import countries from "./CountryCodeIntput/countries.json";

// import InstructionModal from "./../InstructionModal";

// import { Input } from 'semantic-ui-react'

import {
  Input,
  Container,
  Segment,
  Item,
  Dropdown,
  Divider,
  // Button,
  Message,
} from "semantic-ui-react";
import Button from "@mui/material/Button";

// import { Button } from 'primereact/button';

import { useTranslation } from "react-i18next";
import axios from "axios";
import * as yup from "yup";
import mindImg from "../../images/logo.png";
import { shuffle } from "../../utils";
import formatExam from "../../utils/formatExam";
import NumericInput from "../NumericInput";
import CountryCodeInput from "./CountryCodeIntput/CountryCodeIntput";
import {setCurrentQuestions} from "./../../store/exam/examlSlice";

const Main = ({ startQuiz }) => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()

      .required("Name is required"),
    firstName: yup
      .string()
      .required("First name is required")
      .matches(/^[A-Za-z\u0600-\u06FF]+$/, "Name can only contain letters"),

    lastName: yup
      .string()
      .required("last Name is required")
      .matches(/^[A-Za-z\u0600-\u06FF]+$/, "Name can only contain letters"),

    phone: yup.string().required("Phone is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    fullPhone: yup
      .string()
      .required("Phone is required")
      .min(12, "Phone must be at least 11 numbers")
      .max(14, "Phone cannot exceed 13 number"),
  });
  const { i18n, t } = useTranslation();
  let currLang = i18n.language;

  const dispatch = useDispatch();
  let { levels  } = useSelector((s) => s.exam);
  const [category, setCategory] = useState(null);
  const [examLang, setExamLang] = useState(null);
  const [name, setName] = useState(``);
  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [phone, setPhone] = useState(null);
  const [fullPhone, setFullPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  let allFieldsSelected = false;
  if (category && examLang) {
    allFieldsSelected = true;
  }
  const fetchData = async () => {
    try {
      const valid = validationSchema.validateSync({
        name,
        email,
        phone,
        fullPhone,
        firstName,
        lastName,
      });
      if (!allFieldsSelected || !valid) {
        Swal.fire({
          icon: "error",
          title: `${t(`Error`)}!`,
          text: t("All fields must be filled."),
        });
        return;
      }
      setProcessing(true);
      const response = await axios.post(`${api_url}/users/check`, { email, phone:fullPhone });
      if (response.status !== 200) {
        Swal.fire({
          icon: "error",
          title: `${t(`Error`)}!`,
          text: t(`User with the same email or phone already exists`),
        });
        return;
      }

      dispatch(setUserData({ name, phone: fullPhone, email }));

      const {
        questions: results,
        numberOfMinutes,
        pauseTime,
      } = formatExam({
        levels,
        levelId: category,
        examLang,
      });
      dispatch(setPauseTime(pauseTime));
      results.forEach((element) => {
        element.options = shuffle([element.correct_answer, ...element.incorrect_answers]);
      });

      setProcessing(false);
      dispatch(setCurrentQuestions(results))
      startQuiz(results, numberOfMinutes * 60);
    } catch (e) {
      if (Array.isArray(e?.errors) && e?.errors?.length > 0) {
        Swal.fire({
          icon: "error",
          title: `${t(`Error`)}!`,
          text: e?.errors?.map((err) => t(`${err}`)).join(` - `),
        });
        setProcessing(false);
        return;
      }
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
            <div className="flex flex-col gap-1 justify-center items-center px-4">
              <Item.Image src={mindImg} />
            </div>
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

              <div className=" flex flex-col lg:flex-row lg:flex-nowrap gap-10">
                <div className="w-100 lg:w-auto">
                  <p> {t(`First Name`)} </p>
                  <Input
                    value={firstName}
                    onChange={(_, { value }) => {
                      setFirstName(value);
                      setName(`${value} ${lastName}`);
                    }}
                    name="fname"
                    className="w-100 lg:w-auto"
                    placeholder={`${t("First Name")}...`}
                  />
                </div>
                <div className="w-100 lg:w-auto">
                  <p> {t(`Family Name`)} </p>
                  <Input

                    value={lastName}
                    onChange={(_, { value }) => {
                      setLastName(value);
                      setName(`${firstName} ${value}`);
                    }}
                    name="lname"
                    placeholder={`${t("Family Name")}...`}
                    className="w-100 lg:w-auto"
                  />
                </div>
              </div>
              <Divider />

              <p>{t(`Phone_Number`)} </p>
              <div className={`flex ${currLang == "ar" ? "flex-row-reverse" : "flex-row"}`}>
                <CountryCodeInput
                  selectedCountry={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.value);
                    setFullPhone(`${e.value[`phone-code`]} ${phone}`);
                  }}
                  className=" min-w-32"
                  countries={countries}
                />
                <NumericInput
                  value={phone}
                  onChange={({ target }) => {
                    setPhone(target?.value);
                    setFullPhone(`${selectedCountry[`phone-code`]} ${target?.value}`);
                  }}
                  className="w-100 numiricPhone"
                  placeholder={`${t("phone")}...`}
                />
              </div>
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
                  onClick={fetchData}
                  disabled={processing}
                  variant="contained"
                  endIcon={currLang == `ar` ? null : <SendIcon />}
                  startIcon={currLang == `en` ? null : <SendIcon />}
                  className={currLang == `ar` && "flex gap-3"}
                >
                  {processing ? t("Processing") : t("Start_Now")}
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />
    </Container>
  );
};

export default Main;
