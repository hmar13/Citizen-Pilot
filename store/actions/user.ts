import { SAVE_REPORT } from '../actions/ActionTypes';
import { USER_LOGIN } from '../actions/ActionTypes';
import problemInterface from '../../interfaces/problemInterface';

// MOES EXAMPLE
// import { fetchUserData } from '../../services/Apiclient';

// export function fetchUser (email: string, password: string) {
//   return function (dispatch) {
//     fetchUserData(email, password)
//       .then((user) => {
//         dispatch(userLogin(user));
//       })
//       .finally(() => {
//         dispatch(setLoading(false));
//       });
//   };
// }


export const userLogin = (user: string) => ({
  type: USER_LOGIN,
  payload: user
});


