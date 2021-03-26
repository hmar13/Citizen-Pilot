/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PayloadAction } from '@reduxjs/toolkit';
import news from '../mocks/newsMocks';
import { SAVE_NEWS } from '../actions/ActionTypes';


// const initialState = {
//   news: null,
// };

// const newsData = (state = initialState, action: PayloadAction<string>) => {
//   switch (action.type) {
//     case SAVE_NEWS:
//       return { ...state, news: action.payload };
//     default:
//       return state;
//   }
// };


const initialState = {
  news,
};

const newsData = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case SAVE_NEWS:
      return state;
    default:
      return state;
  }
};

export default newsData;
