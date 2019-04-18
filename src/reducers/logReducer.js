import * as types from '../actions/types';

const initialState = {
  logs: [],
}

export default (state= initialState, action) => {
  switch (action.type) {
    case types.SET_LOG:
      return {...state, logs: [...state.logs, action.log]}
    default:
      return state;
  }
}