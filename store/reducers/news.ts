import { PayloadAction } from '@reduxjs/toolkit';
import { news } from '../mocks/newsMocks';

const initialState = {
  news: news,
};

export const newsData = (
  state = initialState,
  action: PayloadAction<string>,
) => {
  switch (action.type) {
    case 'news':
      return state;
  }
  return state;
};
