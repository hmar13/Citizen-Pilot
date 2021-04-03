import { PayloadAction } from '@reduxjs/toolkit';
import { SAVE_CONTACTS } from '../actions/ActionTypes';


const initialState = {};

const realContacts = (state = initialState, action: PayloadAction<[]>) => {
  switch (action.type) {
    case SAVE_CONTACTS:
      return { ...state, state: action.payload };

    default:
      return state;
  }
};


export default realContacts;
