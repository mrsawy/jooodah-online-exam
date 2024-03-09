import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

import Layout from "../Layout";
import Loader from "../Loader";
import Main from "../Main";
import Quiz from "../Quiz";
import Result from "../Result";

import { getExamData } from "../../store/exam/examlSlice";
import { createUser, setResultData as setResultDataRedux } from "./../../store/user/userSlice";

const App = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n?.language

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [data, setData] = useState(null);
  const [countdownTime, setCountdownTime] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [isQuite, setIsQuite] = useState(null);

  const onQuite = () => {
    setIsQuite(true);
  };
  const { currentLevel } = useSelector((s) => s?.exam);
  const { user } = useSelector((s) => s?.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExamData());
  }, []);
  const startQuiz = (data, countdownTime) => {
    setLoadingMessage({
      title: t("Loading your quiz..."),
      message: t("It won't be long!"),
    });
    setCountdownTime(countdownTime);
    setData(data);
    setIsQuizStarted(true);
  };

  const endQuiz = (resultData, options) => {
    if (
      resultData?.questionsAndAnswers?.length !== resultData?.totalQuestions &&
      !options?.timeOver
    ) {
      Swal.fire({
        icon: "error",
        title: `${t(`Error`)}!`,
        text: t("Please Answer All Questions."),
      });
      return;
    }

    dispatch(setResultDataRedux({ level: currentLevel, ...resultData }));
    dispatch(createUser({ level: currentLevel, ...resultData, user }));
    setLoading(true);
    setLoadingMessage({
      title: t("Fetching your results..."),
      message: t("Just a moment!"),
    });
    setTimeout(() => {
      setIsQuizStarted(false);
      setIsQuizCompleted(true);
      setResultData(resultData);
      setLoading(false);
    }, 2000);
  };

  return (
    <Layout>
      {loading && <Loader {...loadingMessage} />}
      {!loading && !isQuizStarted && !isQuizCompleted && <Main startQuiz={startQuiz} />}
      {!loading && isQuizStarted && !isQuite && (
        <Quiz onQuite={onQuite} data={data} countdownTime={countdownTime} endQuiz={endQuiz} />
      )}
      {((!loading && isQuizCompleted) || isQuite) && <Result {...resultData} />}
    </Layout>
  );
};

export default App;
