import { UPVOTE_PROPOSAL } from '../actions/ActionTypes';


// import { postVote } from '../services/Apiclient';


// export function addVote (id: number) {
//   return function (dispatch) {
//     postVote(id)
//       .then((proposals: []) => {
//         dispatch(propAction(proposals));
//       })
//   };
// }

// TODO: what do we need here? do we get all of the proposals back?
export const propAction = (proposals: []) => ({
  type: UPVOTE_PROPOSAL,
  payload: proposals
})


