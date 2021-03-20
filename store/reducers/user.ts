import { PayloadAction } from '@reduxjs/toolkit';
import { userData } from '../mock';

const initialState = {
  userData,
};

export const user = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'userData':
      return state;
  }
  return state;
};
