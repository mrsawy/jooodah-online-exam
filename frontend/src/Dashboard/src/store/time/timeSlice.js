/* eslint-disable import/no-extraneous-dependencies */
import {
  createSlice,
  //   createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { getTimeService, setTimeService } from './timeService';
// import brandService from "./brandService";

const initialState = {
  time: { from: null, to: null },
  isLoading: false,
  isSuccess: false,
  isError: false,
  timeIsSet: false,
  message: '',
};

export const gettimeThunk = createAsyncThunk('time/gettime', async (_, thunkAPI) => {
  try {
    const time = await getTimeService();
    return time;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const settimeThunk = createAsyncThunk('time/settime', async (args, thunkAPI) => {
  try {
    const time = await setTimeService(args);
    return time;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setTime: (state, action) => {
      const { from, to } = action.payload;
      console.log(from, to);
      state.time = {
        from: from || state.time.from,
        to: to || state.time.to,
      };
    },
    setTimeIsSet: (state, action) => {
      state.timeIsSet = action.payload;
    },
  },
  //   ,
  extraReducers: (builder) => {
    builder
      .addCase(gettimeThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.timeIsSet = false;
      })
      .addCase(gettimeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.time = action?.payload?.timeRange ? action?.payload?.timeRange : { from: null, to: null };
      })
      .addCase(gettimeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.timeIsSet = false;
        state.message = action.error;
      })
      .addCase(settimeThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.timeIsSet = false;
      })
      .addCase(settimeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.timeIsSet = true;
        state.time = action?.payload?.timeRange ? action?.payload?.timeRange : { from: null, to: null };
      })
      .addCase(settimeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.timeIsSet = false;
        state.message = action.error;
      });
  },
});

export default timeSlice.reducer;
export const { settimeIsSet, setTime } = timeSlice.actions;
