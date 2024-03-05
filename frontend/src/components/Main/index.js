import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { setLevel } from "./../../store/exam/examlSlice";
import { setUserData } from "./../../store/user/userSlice";
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

import mindImg from "../../images/mind.svg";

import { shuffle } from "../../utils";

import formatExam from "../../utils/formatExam";

const Main = ({ startQuiz }) => {
  const dispatch = useDispatch();
  let { levels } = useSelector((s) => s.exam);
  const [category, setCategory] = useState(null);
  const [examLang, setExamLang] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [job, setJob] = useState(null);

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  let allFieldsSelected = false;
  if (category && examLang) {
    allFieldsSelected = true;
  }
  const fetchData = () => {
    dispatch(setUserData({ name, phone, email }));
    if (!allFieldsSelected) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields must be filled.",
      });
      return;
    }
    setProcessing(true);
    const { questions: results, numberOfMinutes } = formatExam({
      levels,
      levelId: category,
      examLang,
    });

    results.forEach((element) => {
      element.options = shuffle([element.correct_answer, ...element.incorrect_answers]);
    });

    setProcessing(false);
    startQuiz(results, numberOfMinutes * 60);
  };

  return (
    <Container>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Image src={mindImg} />
            <Item.Content>
              <Item.Header>
                <h1>The Joodah Quiz</h1>
              </Item.Header>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Error!</Message.Header>
                  {error.message}
                </Message>
              )}
              <Divider />
              <p> Full Name </p>
              <Input
                value={name}
                onChange={(_, { value }) => {
                  setName(value);
                }}
                className="w-100"
                placeholder="Name..."
              />
              <Divider />

              <p> Phone Number </p>
              <Input
                value={phone}
                onChange={(_, { value }) => {
                  setPhone(value);
                }}
                className="w-100"
                placeholder="Phone..."
              />

              <Divider />
              <p> Email Adress </p>
              <Input
                value={email}
                onChange={(_, { value }) => {
                  setEmail(value);
                }}
                className="w-100"
                placeholder="Email..."
              />
              <Divider />
              <p> Job </p>
              <Input className="w-100" placeholder="Job..." />
              <Divider />
              <Item.Meta>
                <p>which position are you applying for ?</p>
                <Dropdown
                  fluid
                  selection
                  name="category"
                  placeholder="Select Quiz Category"
                  header="Select Quiz Category"
                  options={levels.map((level) => {
                    return {
                      key: level?._id,
                      text: `${level?.level_en} - ${level?.level_ar}`,
                      value: level?._id,
                    };
                  })}
                  value={category}
                  onChange={(_, e) => {
                    console.log(e);
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

                <p>Please select the language of the exam.</p>
                <Dropdown
                  fluid
                  selection
                  name="language"
                  placeholder="Select Language"
                  header="Select Language"
                  options={[
                    { key: `ar`, text: `Arabic`, value: `ar` },
                    { key: `en`, text: `English`, value: `en` },
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
                  labelPosition="left"
                  content={processing ? "Processing..." : "Start Now"}
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
