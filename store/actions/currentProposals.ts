import { SAVE_REPORT } from '../actions/ActionTypes';
import Proposals  from '../../interfaces/currentProposals';

const propAction = (id: number) => ({
  type: 'Increment',
  payload: { id }
})


export default propAction;