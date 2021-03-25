import { SAVE_REPORT } from '../actions/ActionTypes';
import { USER_LOGIN, SAVE_FAVOURITES, } from '../actions/ActionTypes';
import problemInterface from '../../interfaces/problemInterface';


// import { fetchUserData } from '../../services/Apiclient';

// export function fetchUser (email: string, password: string) {
//   return function (dispatch) {
//     fetchUserData(email, password)
//       .then((user, favourites, votes) => {
//         dispatch(userLogin(user));
//         dispatch(setFavourites(favourites));
//       })
//       .finally(() => {
//         dispatch(setLoading(false));
//       });
//   };
// }

// export function fetchFavourites (userID: number) {
//   return function (dispatch) {
//     getUserFavourites(userID)
//       .then((favourites: []) => {
//         dispatch(setFavourites(favourites));
//       })
//   };
// }


export const userLogin = (user: string) => ({
  type: USER_LOGIN,
  payload: user
});

export const setFavourites = (favourites: string) => ({
  type: SAVE_FAVOURITES,
  payload: favourites,

});
