import { SAVE_FAVOURITES } from '../actions/ActionTypes';
import { SAVE_NEWS } from '../actions/ActionTypes';
import { SAVE_CONTACTS } from '../actions/ActionTypes';
import { SAVE_PROJECTS } from '../actions/ActionTypes';


const initialState = {};

const user = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    // will this eventually be user login?
    case 'userData':
      return state;
    case SAVE_FAVOURITES:
      return state;
    case SAVE_NEWS:
      return state;
    case SAVE_CONTACTS:
      return state;
    case SAVE_PROJECTS:
      return state;
    default:
      return state;
  }
};

export default user;