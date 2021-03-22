/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { PayloadAction } from '@reduxjs/toolkit';
import favourites from '../mocks/favouriteMocks';

const initialState = {
  favourites,
};

const myFavourites = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'favourites':
      return state;
    default:
      return state;
  }
};

export default myFavourites;
