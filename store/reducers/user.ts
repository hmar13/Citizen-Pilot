import { PayloadAction } from '@reduxjs/toolkit';
import { userData } from '../mock';

const initialState = {
<<<<<<< HEAD
  userData: userData
=======
  userData,
>>>>>>> 6a7f28645c415aa4ab698dac550d8a48b8233091
};

export const user = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'userData':
      return state;
  }
  return state;
};
