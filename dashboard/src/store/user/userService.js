/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable */

import axios from "axios";
import { api_url } from "../../utils/base_url";

export const createUserService = async (args) => {
  try {
    let { name, phone, email } = args?.user;
    let { questionsAndAnswers, totalQuestions, correctAnswers, timeTaken, level, fullTime } = args;
    let result = {
      ...args,
      timeTaken,
      correctAnswers,
      totalQuestions,
      questionsAndAnswers,
      levelId: level?.id,
      levelName: level?.name,
      fullTime,
    };

    let userFormData = { name, phone, email, result, fullTime: result?.fullTime };

    const response = await axios.post(`${api_url}/users`, { userFormData });
    return response.data;
  } catch (e) {
    console.log(`err=>`, e);
  }
};
