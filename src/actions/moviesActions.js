import * as types from './types';
import {setLog} from '../thunks/setLog';

export const setMovieList = (list) => ({
  type: types.SET_MOVIE_LIST,
  list,
});

export const setLike = (id, title) => (dispatch) => {
  dispatch(setLog(`Liked Movie: ${title}`));
  dispatch({
    type: types.SET_LIKE,
    id
  })
}

export const unsetLike = (id,title) => (dispatch) => {
  dispatch(setLog(`Unliked Movie: ${title}`));
  dispatch({
    type: types.UNSET_LIKE,
    id
  })
}

