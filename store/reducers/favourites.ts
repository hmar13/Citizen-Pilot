/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { PayloadAction } from '@reduxjs/toolkit';
import favourites from '../mocks/favouriteMocks';
import { SAVE_FAVOURITES } from '../actions/ActionTypes';



// const initialState = {
//   favourites: null
// };

// const myFavourites = (state = initialState, action: PayloadAction<string>) => {
//   switch (action.type) {
//     case SAVE_FAVOURITES:
//       return { ...state, favourites: action.payload };
//     default:
//       return state;
//   }
// };


const initialState = {
  favourites,
};

const myFavourites = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case SAVE_FAVOURITES:
      return state;
    default:
      return state;
  }
};

export default myFavourites;
