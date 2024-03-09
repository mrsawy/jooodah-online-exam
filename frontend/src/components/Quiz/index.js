import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { useTranslation } from "react-i18next";
import { Button as PrimeButton } from "primereact/button";
import Swal from "sweetalert2";

import Countdown from "../Countdown";
import { getLetter } from "../../utils";
import { pauseExam, setExamIsPaused } from "../../store/exam/examlSlice";
import PauseModal from "../PauseModal";

const Quiz = ({ data, countdownTime, endQuiz, onQuite }) => {
  const { i18n, t } = useTranslation();

  let currentLang = i18n.language;

  let screenWidth = window.innerWidth;

  const dispatch = useDispatch();
  let { numberOfPausesLeft, examIsPaused, pauseTime } = useSelector((s) => s?.exam);
  // useEffect(() => {
  //   console.log(`numberOfPausesLeft changed ==>`, numberOfPausesLeft);
  // }, [numberOfPausesLeft]);
  // useEffect(() => {
  //   console.log(`examIsPaused changed ==>`, examIsPaused);
  // }, [examIsPaused]);

  let pauseSeconds = pauseTime?.value > 0 ? pauseTime?.value * 60 : 0;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSlectedAns, setUserSlectedAns] = useState([]);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);

  useEffect(() => {
    if (questionIndex > 0) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [questionIndex]);

  const handleItemClick = (e, ansData) => {
    console.log(e, ansData);
    let { name } = ansData;
    // setUserSlectedAns((p) => [...p.filter((ele) => ele?.name !== name), { name }]);
    let point = 0;
    if (name === he.decode(data[questionIndex].correct_answer)) {
      point = 1;
    }

    setQuestionsAndAnswers((p) => {
      let qData = [
        ...p?.filter((ele) => ele?._id !== he.decode(data[questionIndex]?._id)),
        {
          _id: he.decode(data[questionIndex]?._id),
          question: he.decode(data[questionIndex]?.question),
          user_answer: name,
          correct_answer: he.decode(data[questionIndex]?.correct_answer),
          point,
        },
      ];
      setUserSlectedAns(qData.map((d) => ({ name:d?.user_answer  })));

      return qData;
    });
    setCorrectAnswers(correctAnswers + point);
  };

  const handleNext = () => {
    
    if (questionIndex === data.length - 1) {
      return endQuiz({
        totalQuestions: data.length,
        correctAnswers,
        timeTaken,
        questionsAndAnswers,
      });
    }
    setQuestionIndex(questionIndex + 1);
  };
  const handlePrev = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };
  const timeOver = (timeTaken) => {
    return endQuiz(
      {
        totalQuestions: data.length,
        correctAnswers,
        timeTaken,
        questionsAndAnswers,
      },
      { timeOver: true }
    );
  };
  const uniqueOptions = {};
  const handleQuite = () => {
    Swal.fire({
      icon: "question",
      title: t(`Are you sure you want to quite ?`),
      iconHtml: "؟",
      confirmButtonText: t("yes"),
      cancelButtonText: t("no"),
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      // console.log(result);
      if (result.isConfirmed) {
        onQuite();
      }
    });
  };
  return (
    <Item.Header>
      <Container>
        <Segment>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Extra className="text-center flex justify-between items-center flex-wrap  flex-row-reverse">
                  <div className="m-auto flex justify-center items-center  mb-3 lg:mb-0">
                    <Header as="h3" block floated="left" className="m-auto">
                      <Icon name="info circle" />
                      <Header.Content className="m-auto">
                        {`${t(`Question No`)} .${questionIndex + 1} ${t(`of`)} ${data.length}`}
                      </Header.Content>
                    </Header>
                  </div>

                  {numberOfPausesLeft > 0 && !examIsPaused && (
                    <div className="m-auto  mb-3 lg:mb-0 flex flex-col">
                      <label className="text-lg">
                        {t(`pauses_left`)}: {numberOfPausesLeft}
                      </label>
                      <Button
                        className="p-3 "
                        icon
                        labelPosition="left"
                        onClick={() => {
                          dispatch(pauseExam());
                          if (typeof pauseSeconds == `number`) {
                            setTimeout(() => {
                              dispatch(setExamIsPaused(false));
                            }, pauseSeconds * 1000);
                          }
                        }}
                      >
                        <Icon name="pause" />
                        {t(`Pause`)}
                      </Button>
                    </div>
                  )}
                  <div className="m-auto flex gap-6 items-center justify-center flex-wrap ">
                    <Countdown
                      countdownTime={countdownTime}
                      timeOver={timeOver}
                      setTimeTaken={setTimeTaken}
                    />

                    <button onClick={handleQuite} class="ui inverted red button transition-all">
                      {t(`Quite`)}
                    </button>

                    {examIsPaused && (
                      <PauseModal
                        timeOver={() => {
                          // console.log(`pause over`);
                        }}
                        visible={examIsPaused}
                      />
                    )}
                  </div>
                </Item.Extra>
                <br />
                <Item.Meta>
                  <Message size="huge" floating>
                    <b>{`${t(`Q`)}. ${he.decode(data[questionIndex]?.question)}`}</b>
                  </Message>
                  <br />
                  <Item.Description>
                    <h3>{t(`Please choose one of the following answers:`)}</h3>
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
                        const letter = getLetter(i, currentLang);
                        const decodedOption = he.decode(option);

                        return (
                          <Menu.Item
                            key={decodedOption}
                            name={decodedOption}
                            active={userSlectedAns?.map((e) => e?.name).includes(decodedOption)}
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
                  {!(questionIndex + 1 == data.length) ? (
                    <div>
                      <Button
                        primary
                        content={t("Next")}
                        onClick={handleNext}
                        floated="right"
                        size={screenWidth < 600 ? "medium" : `big`}
                        icon="right chevron"
                        labelPosition="right"
                      />
                      <Button
                        primary
                        content={t("Skip")}
                        onClick={handleNext}
                        floated="right"
                        size={screenWidth < 600 ? "medium" : `big`}
                        icon="right chevron"
                        labelPosition="right"
                      />
                    </div>
                  ) : (
                    <div>
                      <Button
                        primary
                        content={t("Finish")}
                        onClick={handleNext}
                        floated="right"
                        size={screenWidth < 600 ? "medium" : `big`}
                        icon="right chevron"
                        labelPosition="right"
                      />
                    </div>
                  )}
                  {questionIndex > 0 && (
                    <Button
                      primary
                      content={t("Previous")}
                      onClick={handlePrev}
                      floated="left"
                      size={screenWidth < 600 ? "medium" : `big`}
                      icon="left chevron"
                      labelPosition="left"
                      disable={questionIndex}
                    />
                  )}
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
