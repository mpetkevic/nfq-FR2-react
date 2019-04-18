import axios from 'axios';
import { endpoints } from '../../config';
import { setMovieList } from '../actions/moviesActions';
import {setLog} from './setLog';

export const getMovieList = () => (dispatch) => {

  const movieList = axios
    .get(endpoints.mostPopularMovies())
    .then((res) => dispatch(setMovieList(res.data.results)))
    .catch((error) => console.log(error));
  const log = dispatch(setLog('Movie List Loaded'));
  return movieList, log;
}
