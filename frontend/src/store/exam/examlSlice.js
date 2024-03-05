/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getExamDataService } from "./examService";

const initialState = {
  levels: [],
  answers: [],
  currentQuestions: null,
  currentLevel: null,
  currentExamTime: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  levelIsSet: false,
  message: "",
};

export const getExamData = createAsyncThunk("exam/getExamData", async (_, thunkAPI) => {
  try {
    const level = await getExamDataService();
    return level;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      const { questionId, questionValue, answer, correctAnswer, isCorrect } = action?.payload;
      state.answers
        .filter((answer) => answer.questionId !== questionId)
        .push({
          questionId,
          questionValue,
          correctAnswer,
          answer,
          isCorrect,
        });
    },
    setLevel: (state, action) => {
      state.currentLevel = action.payload;
    },
    setCurrentQuestions: (state, action) => {
      state.currentQuestions = action.payload;
    },

    setCurrentExamTime: (state, action) => {
      state.currentExamTime = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExamData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.msgIsSet = false;
      })
      .addCase(getExamData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.levels = action?.payload ? action?.payload : [];
      })
      .addCase(getExamData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.msgIsSet = false;
        state.message = action.error?.message;
      });
  },
});

export default examSlice.reducer;
export const { setLevelIsSet, setLevel, addLevelItem, deleteLevelItem, editLevelItem } =
  examSlice.actions;