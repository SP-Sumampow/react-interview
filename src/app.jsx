import './app.scss';
import React, { Component } from "react";
import { MovieComponent } from "./components/movieComponent/movieComponent";
import { SelectMovieComponent } from "./components/selectMovieComponent/selectMovieComponent";
import { PaginationComponent } from "./components/paginationComponent/paginationConponent";

import { movies$ } from "./movies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      categoryFilter: "all",
      limit: 4,
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

  moviesInCategory() {
    let categoryFilter = this.state.categoryFilter;
    let movies = this.state.movies;

    if (categoryFilter == "all") {
      return movies;
    }

    return movies.filter((movie) => {
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
    this.setState(
      {
        categoryFilter: e.target.value,
        page: 1,
      },
      () => {
        let pageMax =
          this.moviesInCategory(this.state.movies).length / this.state.limit;
        this.setState({ isLast: 1 > pageMax });
      }
    );
  }

  // Pagination action

  onNextClicked(e) {
    let pageMax =
      this.moviesInCategory(this.state.movies).length / this.state.limit;
    let page = this.state.page;
    page = page + 1;
    this.setState({ page: page });
    if (page + 1 > pageMax) {
      this.setState({ isLast: true });
      return;
    }
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
    this.setState(
      {
        page: 1,
        limit: e.target.value,
      },
      () => {
        let pageMax =
          this.moviesInCategory(this.state.movies).length / this.state.limit;
        this.setState({ isLast: 1 > pageMax });
      }
    );
  }

  generateMoviesComponent() {
    const movies = this.moviesInCategory(this.state.movies);
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
      <div className="container">
        <section className="chooseCathegory">
          <label className="chooseCathegory_title" for="movie-select">Choose a movie category:</label>
          <SelectMovieComponent
            movieCategories={this.movieCategories()}
            onCategorySelected={this.onCategorySelected.bind(this)}
          />
        </section>
        <section className="allMovies">{this.generateMoviesComponent()}</section>
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
