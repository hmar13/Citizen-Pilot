import { PayloadAction } from '@reduxjs/toolkit';
import { favourites } from '../mocks/favouriteMocks';

const initialState = {
  favourites: favourites,
};

export const myFavourites = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'favourites':
      return state;
  }
  return state;
};
