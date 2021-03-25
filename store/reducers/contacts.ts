/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { PayloadAction } from '@reduxjs/toolkit';
import contacts from '../mocks/contactMocks';
import { SAVE_CONTACTS } from '../actions/ActionTypes';


const initialState = {
  contacts,
};

const cityContacts = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case SAVE_CONTACTS:
      return state;
    default:
      return state;
  }
};

export default cityContacts;
