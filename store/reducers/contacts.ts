import { PayloadAction } from '@reduxjs/toolkit';
import { contacts } from '../mocks/contactMocks';

const initialState = {
  contacts: contacts,
};

export const cityContacts = (
  state = initialState,
  action: PayloadAction<string>,
) => {
  switch (action.type) {
    case 'contacts':
      return state;
  }
  return state;
};
