/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { PayloadAction } from '@reduxjs/toolkit';
import { reportedProblem } from '../mocks/reportProblemMock';
import { SAVE_REPORT } from '../actions/ActionTypes';

const initialState = {
  reportedProblem,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reportProblem = (state = initialState, action: PayloadAction<any>) => {
  switch (action.type) {
    case SAVE_REPORT:
      return {
        ...state,
        reportedProblem: action.payload.savedReport,
      };
    default:
      return state;
  }
};

export default reportProblem;
