import { setLogAction } from '../actions/logActions';
import moment from 'moment';

export const setLog = (logAcion) => (dispatch) => {
  const newDate = moment().format('YYYY-MM-DD HH:mm:ss');
  const logMsg = `${newDate}: ${logAcion}`;

  const log = dispatch(setLogAction(logMsg))
  return log;
}