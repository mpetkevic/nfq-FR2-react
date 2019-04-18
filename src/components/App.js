import React from 'react';
import Card from './Card';
import { getImageUrl } from '../../config';
import { connect } from 'react-redux';
import { getMovieList } from '../thunks/getMovieList';
import { getGenreList } from '../thunks/getGenreList';
import { setActiveGenre } from '../actions/genresAction';
import { setLike, unsetLike } from '../actions/moviesActions';

class App extends React.Component {
  componentDidMount() {
    this.props.onGetMovieList()
    this.props.onGetGenresList()
  }


  render() {
    const { movieList, hearted, genreList, activeGenre, onSetActiveGenre, onSetLike, onUnsetLike, logs } = this.props;
    console.log(logs)
    const movies = activeGenre !== null ?
      movieList.filter(movie => {
        if(movie.genre_ids.includes(activeGenre)){
          return movie;
        }
      }).map(listItem => (
        <Card
          key={listItem.id}
          id={listItem.id}
          backgroundImage={getImageUrl(listItem.backdrop_path)}
          title={listItem.original_title}
          releaseDate={listItem.release_date}
          score={listItem.vote_average}
          votes={listItem.vote_count}
          description={listItem.overview}
          onLike={hearted.includes(listItem.id) ? onUnsetLike : onSetLike}
          hearted={hearted.includes(listItem.id)}
        />
      )) : movieList.map(listItem => (
        <Card
          key={listItem.id}
          id={listItem.id}
          backgroundImage={getImageUrl(listItem.backdrop_path)}
          title={listItem.original_title}
          releaseDate={listItem.release_date}
          score={listItem.vote_average}
          votes={listItem.vote_count}
          description={listItem.overview}
          onLike={hearted.includes(listItem.id) ? onUnsetLike : onSetLike}
          hearted={hearted.includes(listItem.id)}
        />
      ))

    const genres = genreList.map(genre => {
      return <span
        key={genre.id}
        className='genre'
        onClick={() => onSetActiveGenre(genre.id, genre.name)}
      >{genre.name}</span>
    })
    return (
      <div>
        {genres}
        <span
          className='genre'
          onClick={() => onSetActiveGenre(null, 'All')}
        >All</span>
        {movies}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieList: state.movies.list,
  hearted: state.movies.hearted,
  genreList: state.genres.list,
  activeGenre: state.genres.activeGenre,
  logs: state.logs.logs
});

const mapDispatchToProps = (dispatch) => ({
  onGetMovieList: () => dispatch(getMovieList()),
  onGetGenresList: () => dispatch(getGenreList()),
  onSetActiveGenre: (id, name) => dispatch(setActiveGenre(id, name)),
  onSetLike: (id,title) => dispatch(setLike(id,title)),
  onUnsetLike: (id,title) => dispatch(unsetLike(id,title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
