/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { PayloadAction } from '@reduxjs/toolkit';
import projects from '../mocks/projectMocks';
import { SAVE_PROJECTS } from '../actions/ActionTypes';


const initialState = {
  projects,
};

const cityProjects = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case SAVE_PROJECTS:
      return state;
    default:
      return state;
  }
};

export default cityProjects;
