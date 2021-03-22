/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PayloadAction } from '@reduxjs/toolkit';
import news from '../mocks/newsMocks';

const initialState = {
  news,
};

const newsData = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'news':
      return state;
    default:
      return state;
  }
};

export default newsData;
