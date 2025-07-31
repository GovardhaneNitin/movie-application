import React, { Component } from "react";
import SearchBox from "./searchbox";
import MovieCard from "./moviecardlist";
import { movies } from "./movies";
import GenreFilter from "./GenreFilter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      genreFilter: "All",
      movies: movies,
    };
  }

  searchChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleGenreChange = (genre) => {
    this.setState({ genreFilter: genre });
  };

  getUniqueGenres = () => {
    const genres = this.state.movies.map((movie) => movie.genre);
    return [...new Set(genres)];
  };

  render() {
    const { searchValue, genreFilter, movies } = this.state;
    const filted_movies = movies.filter((movie) => {
      const matchesSearch = movie.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesGenre = genreFilter === "All" || movie.genre === genreFilter;
      return matchesSearch && matchesGenre;
    });

    return (
      <div className="tc">
        <h1 className="tc bg-black white sticky-top">Blockbuster Movies</h1>
        <SearchBox onSearchChange={this.searchChange} />
        <GenreFilter
          genres={this.getUniqueGenres()}
          onGenreChange={this.handleGenreChange}
          selectedGenre={genreFilter}
        />
        <MovieCard movies={filted_movies} />
      </div>
    );
  }
}
export default App;
