import { PayloadAction } from '@reduxjs/toolkit';

import { SAVE_PROJECTS } from '../actions/ActionTypes';


const initialState = {};

const realProjects = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case SAVE_PROJECTS:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};



export default realProjects;
