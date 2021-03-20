import { combineReducers } from 'redux';
import { user } from './reducers/user';
import { cityContacts } from './reducers/contacts';


// Combining both reducers
const reducers = combineReducers({
  user,
  cityContacts,
});

export default reducers;
