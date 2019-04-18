import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import genresReducer from './genresReducer';
import logReducer from './logReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  logs: logReducer
})