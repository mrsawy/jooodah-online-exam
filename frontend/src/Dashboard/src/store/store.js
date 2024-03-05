/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';

import timeReducer from './time/timeSlice';
import mainReducer from './main/mainSlice';
import levelReducer from './level/levelSlice';
import questionSlice from './question/questionSlice';

export const store = configureStore({
  reducer: {
    levels: levelReducer,
    main: mainReducer,
    time: timeReducer,
    questions: questionSlice,
  },
});
