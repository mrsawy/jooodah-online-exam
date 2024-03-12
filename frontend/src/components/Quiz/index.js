import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  Container,
  Segment,
  Item,
  Divider,
  // Button,
  Icon,
  Message,
  Menu,
  Header,
} from "semantic-ui-react";
import he from "he";
import { useTranslation } from "react-i18next";
import { Button as PrimeButton } from "primereact/button";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";
import Swal from "sweetalert2";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlined from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import Button from "@mui/material/Button";

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
      setUserSlectedAns(qData.map((d) => ({ name: d?.user_answer })));

      return qData;
    });
    setCorrectAnswers(correctAnswers + point);
  };

  const handleNext = () => {
    if (questionIndex === data?.length - 1) {
      return endQuiz({
        totalQuestions: data?.length,
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
        totalQuestions: data?.length,
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
      if (result.isConfirmed) {
        onQuite();
      }
    });
  };

  const [pauseTimerVis, setPauseTimerVis] = useState(false);
  // const ViewPauseTimer =()=>{

  // }
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

                  <div className="m-auto  mb-3 lg:mb-0 flex flex-col justify-center items-center gap-4">
                    <label className="text-lg">
                      {t(`pauses_left`)}: {numberOfPausesLeft}
                    </label>
                    {numberOfPausesLeft > 0 && (
                      <Button
                        onClick={() => {
                          if (examIsPaused) {
                            Swal.fire({
                              icon: "error",
                              title: `${t(`Error`)}!`,
                              text: t("Exam Is Paused"),
                            });
                            return;
                          }
                          dispatch(pauseExam());
                          if (typeof pauseSeconds == `number`) {
                            setTimeout(() => {
                              dispatch(setExamIsPaused(false));
                            }, pauseSeconds * 1000);
                          }
                        }}
                        sx={{ backgroundColor: `rgb(203 215 225 / var(--tw-bg-opacity))` }}
                        // className=" bg-slate-300 hover:bg-slate-500"
                        variant="outlined"
                        // startIcon={<PauseCircleOutlineRoundedIcon />}
                        endIcon={currentLang == `en` ? null : <PauseCircleOutlineRoundedIcon />}
                        startIcon={currentLang == `ar` ? null : <PauseCircleOutlineRoundedIcon />}
                        className={` float-right ${currentLang == `ar` && "flex gap-3"} mx-3`}
                      >
                        {t(`Pause`)}
                      </Button>
                    )}
                  </div>
                  <div className="m-auto flex gap-6 items-end justify-center flex-wrap ">
                    <Countdown
                      countdownTime={countdownTime}
                      timeOver={timeOver}
                      setTimeTaken={setTimeTaken}
                    />

                    <button onClick={handleQuite} class="ui inverted red button transition-all">
                      {t(`Quite`)}
                    </button>

                    {/* {examIsPaused &&  */}
                    <PauseModal  />
                    {/* } */}
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
                <Item.Extra
                  className={
                    "flex flex-nowrap justify-between " + currentLang == `ar`
                      ? `flex flex-row flex-nowrap justify-between dir-rtl rtl`
                      : `flex flex-row flex-nowrap justify-between dir-rtl rtl`
                  }
                >
                  {!(questionIndex + 1 == data?.length) ? (
                    <div
                      className={
                        "ml-auto flex  gap-3 " + currentLang == `ar` && "justify-content-start"
                      }
                    >
                      <Button
                        onClick={handleNext}
                        variant="contained"
                        endIcon={currentLang == `ar` ? null : <ArrowCircleRightOutlinedIcon />}
                        startIcon={currentLang == `en` ? null : <ArrowCircleRightOutlinedIcon />}
                        className={` float-right ${currentLang == `ar` && "flex gap-3"} mx-3`}
                      >
                        {t("Next")}
                      </Button>
                      <Button
                        onClick={handleNext}
                        variant="contained"
                        endIcon={currentLang == `ar` ? null : <ArrowCircleRightOutlinedIcon />}
                        startIcon={currentLang == `en` ? null : <ArrowCircleRightOutlinedIcon />}
                        className={` float-right ${currentLang == `ar` && "flex gap-3"}`}
                      >
                        {t("Skip")}
                      </Button>
                    </div>
                  ) : (
                    <div
                      className={
                        "ml-auto flex  gap-3 " + currentLang == `ar` && "justify-content-start"
                      }
                    >
                      <Button
                        onClick={handleNext}
                        variant="contained"
                        endIcon={currentLang == `ar` ? null : <CheckCircleOutlineRoundedIcon />}
                        startIcon={currentLang == `en` ? null : <CheckCircleOutlineRoundedIcon />}
                        className={currentLang == `ar` && "flex gap-3"}
                      >
                        {t("Finish")}
                      </Button>
                    </div>
                  )}
                  {questionIndex > 0 && (
                    <div
                      className={"flex " + currentLang == `ar` ? "justify-start" : "justify-end"}
                    >
                      <Button
                        onClick={handlePrev}
                        variant="contained"
                        // startIcon={<ArrowCircleLeftOutlined />}
                        endIcon={currentLang == `en` ? null : <ArrowCircleLeftOutlined />}
                        startIcon={currentLang == `ar` ? null : <ArrowCircleLeftOutlined />}
                        className={`  float-left mr-auto ${currentLang == `ar` && "flex gap-3"}`}
                        disable={questionIndex}
                      >
                        {t("Previous")}
                      </Button>
                    </div>
                  )}
                  {/* ArrowForwardIosOutlinedIcon */}
                  {/* ArrowBackIosNewRoundedIcon */}
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
