/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */

import { PayloadAction } from '@reduxjs/toolkit';
import { userData } from '../mock';

const initialState = {
  userData,
};

const user = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'userData':
      return state;
    default:
      return state;
  }
};

export default user;
