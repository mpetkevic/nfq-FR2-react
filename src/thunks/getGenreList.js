import axios from 'axios';
import { endpoints } from '../../config';
import { setGenreList } from '../actions/genresAction';
import {setLog} from './setLog'

export const getGenreList = () => (dispatch) => {
  const movieList = axios
    .get(endpoints.genres())
    .then((res) => dispatch(setGenreList(res.data.genres)))
    .catch((error) => console.log(error));
  const log = dispatch(setLog('Genre List Loaded'));
  return movieList, log;
}