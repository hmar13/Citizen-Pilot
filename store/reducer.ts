import { combineReducers } from 'redux';
import { user } from './reducers/user';
import { cityContacts } from './reducers/contacts';
import { cityProjects } from './reducers/projects';
import { myFavourites } from './reducers/favourites';

// Combining both reducers
export const reducers = combineReducers({
  user: user,
  cityContacts: cityContacts,
  cityProjects: cityProjects,
  myFavourites: myFavourites,
});

export type RootState = ReturnType<typeof reducers>;
