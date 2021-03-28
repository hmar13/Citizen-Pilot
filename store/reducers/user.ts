import { PayloadAction } from '@reduxjs/toolkit';
import { USER_LOGIN, SET_LOADING } from '../actions/ActionTypes';


const initialState = {
  userData: null,
  isLoggedIn: false
};

const user = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, userData: action.payload };
    case SET_LOADING:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export default user;
