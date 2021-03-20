/* eslint-disable import/prefer-default-export */
/* eslint-disable default-case */
import { PayloadAction } from '@reduxjs/toolkit';
import { contacts } from '../mock';

const initialState = {
  contacts,
};

export const cityContacts = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'contacts':
      return state;
  }
  return state;
};
