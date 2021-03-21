import { combineReducers } from 'redux';
import user from './reducers/user';
import cityContacts from './reducers/contacts';
import cityProjects from './reducers/projects';
import myFavourites from './reducers/favourites';
import reportProblem from './reducers/report';

// Combining both reducers
export const reducers = combineReducers({
  user,
  cityContacts,
  cityProjects,
  myFavourites,
  reportProblem,
});

export type RootState = ReturnType<typeof reducers>;
