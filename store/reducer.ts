import { combineReducers } from 'redux';
import { user } from './reducers/user';
import { cityContacts } from './reducers/contacts';
// Combining both reducers
export const reducers = combineReducers({
  user: user,
  cityContacts: cityContacts,
});
export type RootState = ReturnType<typeof reducers>