import * as types from '../actions/types';

const initialState = {
  list: [],
  hearted: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MOVIE_LIST:
      return {...state, list: action.list};
      break;
    case types.SET_LIKE:
      const liked = [...state.hearted, action.id];
      const uniqueHearted = [...new Set(liked)];
      return {...state, hearted: uniqueHearted};
      break
    case types.UNSET_LIKE:
      const unliked = state.hearted.filter(item => item !== action.id);
      return {...state, hearted: unliked}
    default:
      return state;
  }
}