import React, { Component } from "react";
import { MovieComponent } from "./components/movieComponent";
import { SelectMovieComponent } from "./components/selectMovieComponent";
import { movies$ } from "./movies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieCategories: () => {
        let categories = this.state.movies.map((movie) => movie.category)
        categories = categories.filter((x, i, a) => a.indexOf(x) == i)
        return categories

      }
    };
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

  generateMoviesComponent() {
    return this.state.movies.map((movie) => {
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
          <label for="pet-select">Choose a pet:</label>
          <SelectMovieComponent  movieCategories={this.state.movieCategories()} />
        </section>
        <section>{this.generateMoviesComponent()}</section>
      </div>
    );
  }
}

export default App;
