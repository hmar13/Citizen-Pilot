/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PayloadAction } from '@reduxjs/toolkit';
// import { SAVE_REPORT } from '../actions/ActionTypes';
import { USER_LOGIN, SET_LOADING } from '../actions/ActionTypes';
import { userData } from '../mock';


const initialState = {
  user: null,
  isLoggedIn: false
};

const user = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, state: action.payload };
    case SET_LOADING:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};


// const initialState = {
//   userData,
// };

// const user = (state = initialState, action: PayloadAction<string>) => {
//   switch (action.type) {
//     // will this eventually be user login?
//     case 'userData':
//       return state;
//     case USER_LOGIN:
//       return state;
//     default:
//       return state;
//   }
// };

export default user;
