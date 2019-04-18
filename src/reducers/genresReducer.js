import * as types from '../actions/types';

const initialState = {
  list: [],
  activeGenre: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_GENRES_LIST:
      return {...state, list: action.list};
    case types.SET_ACTIVE_GENRE:
      return {...state, activeGenre:action.id};
    default:
      return state;
  }
}