import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Icon,
  Message,
  Menu,
  Header,
} from "semantic-ui-react";
import he from "he";

import Countdown from "../Countdown";
import { getLetter } from "../../utils";

const Quiz = ({ data, countdownTime, endQuiz }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSlectedAns, setUserSlectedAns] = useState(null);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);

  useEffect(() => {
    if (questionIndex > 0) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [questionIndex]);

  const handleItemClick = (e, { name }) => {
    setUserSlectedAns(name);
    let point = 0;
    if (name === he.decode(data[questionIndex].correct_answer)) {
      point = 1;
    }

    setQuestionsAndAnswers((p) => {
      return [
        ...p?.filter((ele) => ele?._id !== he.decode(data[questionIndex]?._id)),
        {
          _id: he.decode(data[questionIndex]?._id),
          question: he.decode(data[questionIndex]?.question),
          user_answer: name,
          correct_answer: he.decode(data[questionIndex]?.correct_answer),
          point,
        },
      ];
    });
    setCorrectAnswers(correctAnswers + point);
  };

  const handleNext = () => {
    if (questionIndex === data.length - 1) {
      console.log({
        totalQuestions: data.length,
        correctAnswers,
        timeTaken,
        questionsAndAnswers,
      });
      return endQuiz({
        totalQuestions: data.length,
        correctAnswers,
        timeTaken,
        questionsAndAnswers,
      });
    }

    setQuestionIndex(questionIndex + 1);
    setUserSlectedAns(null);
  };

  const handlePrev = () => {
    if (questionIndex > 0) {
      setUserSlectedAns(null);
      setQuestionIndex(questionIndex - 1);
    }
  };

  const timeOver = (timeTaken) => {
    console.log({
      totalQuestions: data.length,
      correctAnswers,
      timeTaken,
      questionsAndAnswers,
    });
    return endQuiz({
      totalQuestions: data.length,
      correctAnswers,
      timeTaken,
      questionsAndAnswers,
    });
  };
  const uniqueOptions = {};

  return (
    <Item.Header>
      <Container>
        <Segment>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Extra>
                  <Header as="h1" block floated="left">
                    <Icon name="info circle" />
                    <Header.Content>
                      {`Question No.${questionIndex + 1} of ${data.length}`}
                    </Header.Content>
                  </Header>
                  <Countdown
                    countdownTime={countdownTime}
                    timeOver={timeOver}
                    setTimeTaken={setTimeTaken}
                  />
                </Item.Extra>
                <br />
                <Item.Meta>
                  <Message size="huge" floating>
                    <b>{`Q. ${he.decode(data[questionIndex]?.question)}`}</b>
                  </Message>
                  <br />
                  <Item.Description>
                    <h3>Please choose one of the following answers:</h3>
                  </Item.Description>
                  <Divider />
                  <Menu vertical fluid size="massive">
                    {data[questionIndex].options
                      .filter((option) => {
                        const id = option;
                        if (!uniqueOptions[id]) {
                          uniqueOptions[id] = true;
                          return true;
                        }

                        return false;
                      })
                      .map((option, i) => {
                        const letter = getLetter(i);
                        const decodedOption = he.decode(option);

                        return (
                          <Menu.Item
                            key={decodedOption}
                            name={decodedOption}
                            active={userSlectedAns === decodedOption}
                            onClick={handleItemClick}
                          >
                            <b style={{ marginRight: "8px" }}>{letter}</b>
                            {decodedOption}
                          </Menu.Item>
                        );
                      })}
                  </Menu>
                </Item.Meta>
                <Divider />
                <Item.Extra>
                  <Button
                    primary
                    content="Next"
                    onClick={handleNext}
                    floated="right"
                    size="big"
                    icon="right chevron"
                    labelPosition="right"
                  />
                  <Button
                    primary
                    content="Previous"
                    onClick={handlePrev}
                    floated="left"
                    size="big"
                    icon="left chevron"
                    labelPosition="left"
                    disable={questionIndex}
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <br />
      </Container>
    </Item.Header>
  );
};

Quiz.propTypes = {
  data: PropTypes.array.isRequired,
  countdownTime: PropTypes.number.isRequired,
  endQuiz: PropTypes.func.isRequired,
};

export default Quiz;
