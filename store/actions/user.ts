import { Dispatch } from 'redux';
import { USER_LOGIN, SET_LOADING } from '../actions/ActionTypes';
import { fetchUserData } from '../../services/Apiclient';
import { Alert } from 'react-native';


export function fetchUser(username: string, password: string) {
  return function (dispatch: Dispatch) {
    fetchUserData(username, password)
      .then((user) => {
        if (!user.error) {
          dispatch(userLogin(user));
          dispatch(setLogin(true));
        }
        else {
          Alert.alert('Invalid username or password');
        }
      })
      .catch(err => console.error(err));
  };
}

export const userLogin = (userData: any) => ({
  type: USER_LOGIN,
  payload: userData,
});

export function setLogin(isLoggedIn: boolean) {
  return {
    type: SET_LOADING,
    payload: isLoggedIn
  };
}



