import { PayloadAction } from '@reduxjs/toolkit';
import { SET_VOTES } from '../actions/ActionTypes';

const initialState: any = [];

const votes = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case SET_VOTES:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

export default votes;