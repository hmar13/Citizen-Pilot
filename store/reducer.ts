import { combineReducers } from 'redux';
import user from './reducers/user';
import realNews from './reducers/realNews';
import realContacts from './reducers/realContacts'
import realProjects from './reducers/realProjects'
import realProposals from './reducers/realProposals'
import realFavourites from './reducers/realFavourites'
import votes from './reducers/votes'

export const reducers = combineReducers({
  user,
  realNews,
  realContacts,
  realProjects,
  realProposals,
  realFavourites,
  votes
});

export type RootState = ReturnType<typeof reducers>;
