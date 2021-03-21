/* eslint-disable import/prefer-default-export */
import { SAVE_REPORT } from '../actions/ActionTypes';
import problemInterface from '../../interfaces/problemInterface';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const addNewReport = (savedReport: problemInterface[]) => ({
  type: SAVE_REPORT,
  payload: {
    savedReport,
  },
});

export default addNewReport;
