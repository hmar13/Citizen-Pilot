import { combineReducers } from 'redux';
import { user } from './reducers/user';
import { cityContacts } from './reducers/contacts';
import { newsData } from './reducers/news';

// Combining both reducers
export const reducers = combineReducers({
  user: user,
  cityContacts: cityContacts,
  newsData: newsData,
});
export type RootState = ReturnType<typeof reducers>;
