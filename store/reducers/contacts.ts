/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { PayloadAction } from '@reduxjs/toolkit';
import { contacts } from '../mocks/contactMocks';

const initialState = {
  contacts,
};

const cityContacts = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'contacts':
      return state;
    default:
      return state;
  }
};

export default cityContacts;
