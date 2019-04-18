import * as types from './types';

export const setLogAction = (log) => ({
  type: types.SET_LOG,
  log
})