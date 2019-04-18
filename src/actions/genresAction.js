import * as types from './types';
import {setLog} from '../thunks/setLog';

export const setGenreList = (list) => ({
  type: types.SET_GENRES_LIST,
  list,
});

export const setActiveGenre = (id, name) => {
  
  return function (dispatch) {
    dispatch(setLog(`Set Genre to: ${name}`))
    dispatch({
      type: types.SET_ACTIVE_GENRE,
      id
    })
  }
}