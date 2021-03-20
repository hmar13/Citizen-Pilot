import { userData } from '../mocks';

const initialState = userData;

export const user = (state = initialState, action) => {
  switch (action.type) {
    case 'userData':
      return state;
  }
};
