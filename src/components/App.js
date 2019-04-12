import React from 'react';
import Card from './Card';
import axios from 'axios';
import { endpoints, getImageUrl } from '../../config';

class App extends React.Component {
  state = {
    movieList: [],
    genreList: [],
    activeGenre: null,
  }

  componentDidMount() {
    this.getGenres();
    this.getMovies();
  }

  getMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then((res) => this.setMovieList(res.data.results))
      .catch((error) => console.log(error));
  };

  getGenres = () => {
    axios
      .get(endpoints.genres())
      .then((res) => this.setGenreList(res.data.genres))
      .catch((error) => console.log(error));
  }

  genresFilter = (id) => this.setState({activeGenre: id})
  
  setMovieList = (list) => {
    const movieList = list.map(movie => ({...movie, liked: false}));
    this.setState({movieList})
  };

  setGenreList = (list) => this.setState({genreList: list});

  displayAll = () => this.setState({activeGenre: null});

  toggleClass = (id) => {
    const movieList = this.state.movieList.map(movie => {
      if(movie.id === id) {
        return {...movie, liked: !movie.liked}
      } else {
        return movie
      }
    })
    this.setState({movieList});
  }

  render() {
    const { movieList, genreList, activeGenre } = this.state;
    const filteredMovieList = activeGenre !== null ?
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
          liked={listItem.liked}
          releaseDate={listItem.release_date}
          score={listItem.vote_average}
          votes={listItem.vote_count}
          description={listItem.overview}
          toggleClass={this.toggleClass}
        />
      )) : movieList.map(listItem => (
        <Card
          key={listItem.id}
          id={listItem.id}
          backgroundImage={getImageUrl(listItem.backdrop_path)}
          title={listItem.original_title}
          liked={listItem.liked}
          releaseDate={listItem.release_date}
          score={listItem.vote_average}
          votes={listItem.vote_count}
          description={listItem.overview}
          toggleClass={this.toggleClass}
        />
      ))

    return (
      <div>
        {genreList.map((genre, i) => (
          <span
            key={genre.id}
            className='genre'
            onClick={() =>this.genresFilter(genre.id)}
          >{genre.name}</span>
        ))}
        <span
          className='genre'
          onClick={this.displayAll}
        >ALL</span>
        {filteredMovieList}
      </div>
    );
  }
}

export default App;
