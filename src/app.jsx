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
      categoryFilter: "all",
      limit: 3,
      page: 1,
      isLast: false,
    };
  }

  // statefull cycle
  componentDidMount() {
    movies$.then((movies) => {
      this.setState({ movies: movies });
    });
  }

  // model transform
  movieCategories() {
    let categories = this.state.movies.map((movie) => movie.category);
    categories = categories.filter((x, i, a) => a.indexOf(x) == i);
    return categories;
  }

  movieFilterByCategory() {
    let categoryFilter = this.state.categoryFilter;
    let movies = this.state.movies;

    if (categoryFilter == "all") {
      return movies;
    }

    return movies.filter((movie) => {
      console.log(
        `${movie.category == categoryFilter} = ${
          movie.category
        } ? ${categoryFilter}`
      );
      return movie.category == categoryFilter;
    });
  }

  paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  // Movie component action

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

  // Category filter component action

  onCategorySelected(e) {
    this.setState({
      categoryFilter: e.target.value,
    });
  }

  // Pagination action

  onNextClicked(e) {
    let pageMax = this.state.movies.length / this.state.limit;
    let page = this.state.page;
    if (page + 1 > pageMax) {
      this.setState({ isLast: true });
      return;
    }
    page = page + 1;
    this.setState({ page: page, isLast: false });
  }

  onPreviousClicked(e) {
    let page = this.state.page;
    if (page == 1) {
      return;
    }
    page = page - 1;
    this.setState({ page: page, isLast: false });
  }

  onPaginationLimitSelected(e) {
    this.setState({
      page: 1,
      limit: e.target.value,
    });
  }

  generateMoviesComponent() {
    const movies = this.movieFilterByCategory(this.state.movies);
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
          <label for="pet-select">Choose a movie category:</label>
          <SelectMovieComponent
            movieCategories={this.movieCategories()}
            onCategorySelected={this.onCategorySelected.bind(this)}
          />
        </section>
        <section>{this.generateMoviesComponent()}</section>
        <PaginationComponent
          onPreviousClicked={this.onPreviousClicked.bind(this)}
          onPaginationLimitSelected={this.onPaginationLimitSelected.bind(this)}
          onNextClicked={this.onNextClicked.bind(this)}
          isLast={this.state.isLast}
        />
      </div>
    );
  }
}

export default App;
