/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PayloadAction } from '@reduxjs/toolkit';
import news from '../mocks/newsMocks';
import { SAVE_NEWS } from '../actions/ActionTypes';


// const initialState: string[] = [];

// const newsData = (state = initialState, action: PayloadAction<string>) => {
//   switch (action.type) {
//     case SAVE_NEWS:
//       return { ...state, store: action.payload };
//     default:
//       return state;
//   }
// };


const initialState = {
  news,
};

const newsData = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'save_news':
      return state;
    default:
      return state;
  }
};

export default newsData;
