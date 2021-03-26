import { Dispatch } from 'redux';
import { USER_LOGIN, SAVE_FAVOURITES, SET_LOADING } from '../actions/ActionTypes';
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

// export function fetchFavourites (userID: number) {
//   return function (dispatch: Dispatch) {
//     getUserFavourites(userID)
//       .then((favourites: []) => {
//         dispatch(setFavourites(favourites));
//       })
//   };
// }


export const userLogin = (user: any) => ({
  type: USER_LOGIN,
  payload: user
});

export function setLogin(isLoggedIn: boolean) {
  return {
    type: SET_LOADING,
    payload: isLoggedIn
  };
}


export const setFavourites = (favourites: string) => ({
  type: SAVE_FAVOURITES,
  payload: favourites,

});
