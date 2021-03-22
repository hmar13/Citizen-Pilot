import { PayloadAction } from '@reduxjs/toolkit';
import  currentProposal  from '../mocks/currentPropsalMocks';

const initialState = {
 currentProposal: currentProposal
};

const Proposals = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'currentProposal':
     return state;
  }
  return state;
};

export default Proposals;