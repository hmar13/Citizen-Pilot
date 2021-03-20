import { PayloadAction } from '@reduxjs/toolkit';
import { projects } from '../mocks/projectMocks';

const initialState = {
  projects: projects,
};

export const cityProjects = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case 'projects':
      return state;
  }
  return state;
};
