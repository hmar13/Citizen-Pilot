import { combineReducers } from 'redux';
import user from './reducers/user';
import cityContacts from './reducers/contacts';
import cityProjects from './reducers/projects';
import myFavourites from './reducers/favourites';
import realNews from './reducers/realNews';
import newsData from './reducers/news';
import Proposals from './reducers/currentProposal'
// Combining both reducers
export const reducers = combineReducers({
  user,
  myFavourites,
  newsData,
  cityContacts,
  cityProjects,
  Proposals,
  realNews
});

export type RootState = ReturnType<typeof reducers>;
