export default ({ levelId, examLang, levels }) => {
  //   console.log(level, examLang);
  let chosenLevel = levels.find((l) => l._id == levelId);
  let questions = chosenLevel?.questions.map((question) => {
    return {
      _id: question?._id,
      question: question?.value[examLang],
      correct_answer: question?.correct_answer[examLang],
      incorrect_answers: question?.wrong_answers?.map((wrongAns) => wrongAns[examLang]),
    };
  });

  return { questions, numberOfMinutes: chosenLevel?.numberOfMinutes };
};
