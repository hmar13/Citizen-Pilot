import { combineReducers } from 'redux';
import user from './reducers/user';
import cityContacts from './reducers/contacts';
import cityProjects from './reducers/projects';
import myFavourites from './reducers/favourites';
import reportProblem from './reducers/report';
import newsData from './reducers/news';

// Combining both reducers
export const reducers = combineReducers({
  user,
  cityContacts,
  cityProjects,
  myFavourites,
  reportProblem,
  newsData,
});

export type RootState = ReturnType<typeof reducers>;
