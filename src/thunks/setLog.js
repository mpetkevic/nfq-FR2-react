import { setLogAction } from '../actions/logActions';

export const setLog = (logAcion) => (dispatch) => {
  const date = new Date();
  const day = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const logMsg = `${day} ${time}: ${logAcion}`;

  const log = dispatch(setLogAction(logMsg))
  return log;
}