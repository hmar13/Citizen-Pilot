import { PayloadAction } from '@reduxjs/toolkit';
import { SAVE_PROPOSALS, UPVOTE_PROPOSAL } from '../actions/ActionTypes';

const initialState = {};

const realProposals = (state = initialState, action: PayloadAction<any>) => {
  switch (action.type) {
    case SAVE_PROPOSALS:
      return { ...state, state: action.payload };

    case UPVOTE_PROPOSAL:
      return { ...state, proposals: action.payload };


    default:
      return state
  }
};


export default realProposals;
