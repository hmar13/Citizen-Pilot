import { combineReducers } from 'redux';
import { user } from './reducers/user';
import { cityContacts } from './reducers/contacts';
import { newsData } from './reducers/news';
import { cityProjects } from './reducers/projects';
import { myFavourites } from './reducers/favourites';

// Combining both reducers
export const reducers = combineReducers({
  user: user,
  cityContacts: cityContacts,
  newsData: newsData,
  cityProjects: cityProjects,
  myFavourites: myFavourites,
});

export type RootState = ReturnType<typeof reducers>;
