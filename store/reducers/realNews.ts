/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PayloadAction } from '@reduxjs/toolkit';
import { SAVE_NEWS } from '../actions/ActionTypes';


const initialState = [];

const realNews = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case SAVE_NEWS:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

export default realNews;