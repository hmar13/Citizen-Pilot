import { SAVE_REPORT } from '../actions/ActionTypes';
import { USER_LOGIN, SAVE_FAVOURITES, } from '../actions/ActionTypes';
import problemInterface from '../../interfaces/problemInterface';

// interface Req {
//   user: {
//     id: number;
//     fname: string;
//     lname: string;
//     email: string;
//     createdAt: string;
//     updatedAt: string;
//   },
//   token: string;
// }

// import { fetchUserData } from '../../services/Apiclient';

// export function fetchUser(username: string, password: string) {
//   return function (dispatch) {
//     fetchUserData(username, password)
//       .then((user: Req) => {
//         dispatch(userLogin(user));
//       })
    //     .finally(() => {
    //       dispatch(setLoading(false));
    //     });
  };
}

// export function fetchFavourites (userID: number) {
//   return function (dispatch) {
//     getUserFavourites(userID)
//       .then((favourites: []) => {
//         dispatch(setFavourites(favourites));
//       })
//   };
// }


export const userLogin = (user: Req) => ({
  type: USER_LOGIN,
  payload: user
});

export const setFavourites = (favourites: string) => ({
  type: SAVE_FAVOURITES,
  payload: favourites,

});
