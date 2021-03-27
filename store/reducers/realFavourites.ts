import { PayloadAction } from '@reduxjs/toolkit';
import { SAVE_FAVOURITES } from '../actions/ActionTypes';



const initialState = {};

const realFavourites = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case SAVE_FAVOURITES:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};



export default realFavourites;
