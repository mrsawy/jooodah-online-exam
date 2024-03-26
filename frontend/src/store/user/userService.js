/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable */

import axios from "axios";
import { api_url } from "../../utils/base_url";

export const createUserService = async (args) => {
  // console.log(`createUserService =====>`, args);
  try {
    let { name, phone, email, age, experience, education } = args?.user;
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
      // age,
      // experience,
    };

    let userFormData = {
      name,
      phone,
      email,
      result,
      fullTime: result?.fullTime,
      age,
      experience,
      education,
    };

    const response = await axios.post(`${api_url}/users`, { userFormData });
    return response.data;
  } catch (e) {
    console.log(`err=>`, e);
  }
};
