/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SAVE_REPORT } from '../actions/ActionTypes';
import { USER_LOGIN } from '../actions/ActionTypes';
import { USER_REGISTER } from '../actions/ActionTypes';

import { PayloadAction } from '@reduxjs/toolkit';
import { userData } from '../mock';

const initialState = {
  userData,
};

const user = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    // will this eventually be user login?
    case 'userData':
      return state;
    case USER_LOGIN:
      return state;
    case USER_REGISTER:
      return state;
    case SAVE_REPORT:
      return state;
    default:
      return state;
  }
};

export default user;
