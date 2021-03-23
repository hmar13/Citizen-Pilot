import { PayloadAction } from '@reduxjs/toolkit';
import  currentProposalMock  from '../mocks/currentPropsalMocks';


const initialState = [{
  id: 1,
  title: 'build more benches',
  description: 'benches!! love to sit down, and its helpful for the older types, also maybe a bin next to the benches?',
  location: 'everywhere',
  img: 'https://source.unsplash.com/kOi3ZejUA4s/200x200',
  votes: 0,
},
{
  id: 2,
  title: 'build less benches',
  description: 'less benches!! we hate seeing people sat down enjoying them selfs! remove the benches',
  location: 'less places',
  img: 'https://source.unsplash.com/kOi3ZejUA4s/200x200',
  votes: 0,
},
]




const Proposals = (state = initialState, action: PayloadAction<any>) => {
  switch (action.type) {
    case 'currentProposal':
      return state;
    case 'Increment':
      const newState = [...state]
      newState.forEach(proposal => {
        if (proposal.id === action.payload.id) {
         proposal.votes + 1;
        }
      })
      return (newState);
    default:
      return state 
  }
};

export default Proposals;