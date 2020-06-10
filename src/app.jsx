import React, { Component } from "react";
import { MovieComponent } from "./components/movieComponent";
import { SelectMovieComponent } from "./components/selectMovieComponent";
import { PaginationComponent } from "./components/paginationConponent";

import { movies$ } from "./movies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      limit: 3,
      page: 1,
    };
  }

  movieCategories() {
    let categories = this.state.movies.map((movie) => movie.category);
    categories = categories.filter((x, i, a) => a.indexOf(x) == i);
    return categories;
  }

  paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  componentDidMount() {
    movies$.then((movies) => {
      this.setState({ movies: movies });
    });
  }

  onDeleteClicked(movieId) {
    let movies = this.state.movies;
    let movieIndex = movies.findIndex((movie) => {
      return movie.id == movieId;
    });
    if (movieIndex > -1) {
      movies.splice(movieIndex, 1);
    }
    this.setState({ movies: movies });
  }

  onLikeClicked(movieId) {
    let movies = this.state.movies;
    const movie = movies.find((movie) => {
      return movie.id == movieId;
    });
    movie.likes = movie.likes + 1;
    this.setState({ movies: movies });
  }

  onDislikeClicked(movieId) {
    let movies = this.state.movies;
    const movie = movies.find((movie) => {
      return movie.id == movieId;
    });
    movie.dislikes = movie.dislikes + 1;
    this.setState({ movies: movies });
  }

  // pagination

  onNextClicked(e) {
    let pageMax = this.state.movies.length / this.state.limit
    let page = this.state.page
    if (page + 1 > pageMax) {
      return 
    }
    page = page + 1
    this.setState({ page: page });

  }

  onPreviousClicked(e) {
    let page = this.state.page;
    if (page == 1) {
      return
    }
    page = page - 1
    this.setState({ page: page });
  }

  onPaginationAmountSelected(e) {
    this.setState({ 
      page: 1,
      limit: e.target.value 
    });
  }

  generateMoviesComponent() {
    const movies = this.state.movies;
    const page = this.state.page;
    const limit = this.state.limit;
  
    return this.paginate(movies, limit, page).map((movie) => {
      return (
        <MovieComponent
          movie={movie}
          key={movie.id}
          onDeleteClicked={this.onDeleteClicked.bind(this)}
          onDislikeClicked={this.onDislikeClicked.bind(this)}
          onLikeClicked={this.onLikeClicked.bind(this)}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <section>
<<<<<<< Updated upstream
<<<<<<< HEAD
          <label for="pet-select">Choose a category:</label>
=======
          <label for="pet-select">Choose a pet:</label>
>>>>>>> 1bea7a4cd7f551e92b0b62cfc9b1ef989126f099
          <SelectMovieComponent  movieCategories={this.state.movieCategories()} />
=======
          <label for="pet-select">Choose a movie category:</label>
          <SelectMovieComponent movieCategories={this.movieCategories()} />
>>>>>>> Stashed changes
        </section>
        <section>{this.generateMoviesComponent()}</section>
        <PaginationComponent
          onPreviousClicked={this.onPreviousClicked.bind(this)}
          onPaginationAmountSelected={this.onPaginationAmountSelected.bind(this)}
          onNextClicked={this.onNextClicked.bind(this)}
        />
      </div>
    );
  }
}

export default App;
