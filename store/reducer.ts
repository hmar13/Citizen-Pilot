import { combineReducers } from 'redux';
import user from './reducers/user';
import cityContacts from './reducers/contacts';
import reportProblem from './reducers/report';

// Combining both reducers
export const reducers = combineReducers({
  user,
  cityContacts,
  reportProblem,
});

export type RootState = ReturnType<typeof reducers>;
