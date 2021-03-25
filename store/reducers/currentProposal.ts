import { PayloadAction } from '@reduxjs/toolkit';
import { SAVE_PROPOSALS, UPVOTE_PROPOSAL } from '../actions/ActionTypes';

// const initialState = {
//   proposals: null,
//   id: null,
//   votes: null,
// };


// const Proposals = (state = initialState, action: PayloadAction<any>) => {
//   switch (action.type) {
//     case SAVE_PROPOSALS:
//       return { ...state, proposals: action.payload };

//     case UPVOTE_PROPOSAL:
//       return { ...state, proposals: action.payload };


//     default:
//       return state
//   }
// };



const initialState = [{
  id: 1,
  title: 'Build more benches and make our parks more beautiful',
  description: 'benches!! love to sit down, and its helpful for the older types, also maybe a bin next to the benches?',
  location: 'everywhere',
  img: 'https://source.unsplash.com/kOi3ZejUA4s/200x200',
  votes: 0,
},
{
  id: 2,
  title: 'Wildflower meadow',
  description: 'During 2020, residents from the Upper District of New Town showed their support for turning lot 405—an area of undeveloped land—into a wildflower meadow to help beautify the area and provide prosperous conditions for wild bees.  The project would require money to be taken from the citizen’s participatory budget to clear the land and resow it with flora that’s best suited for bees.  A project of this scale is expected to take two weeks to enact. If it’s successful, further plots of land may be considered for use as bee-friendly wild flower meadows in future.',
  location: 'Upper District',
  img: 'https://s3.eu-west-2.amazonaws.com/growinginteractive/blog/wildflower-meadow-2x.jpg',
  votes: 0,
},
]



const Proposals = (state = initialState, action: PayloadAction<any>) => {
  switch (action.type) {
    case SAVE_PROPOSALS:
      return state;
    case UPVOTE_PROPOSAL:
      const newState = [...state]
      newState.forEach(proposal => {
        if (proposal.id === action.payload.id) {
          votes: action.payload.votes;
        }
      })
      return (newState);
    default:
      return state
  }
};

export default Proposals;