import React from "react";

export const MovieComponent = ({
  movie,
  onLikeClicked,
  onDislikeClicked,
  onDeleteClicked,
}) => (
  <div>
    <h1>{movie.title}</h1>
    <span>{movie.category}</span>
    <img src={movie.picture} width="100px" height="auto" />
    <button
      type="button"
      onClick={() => {
        onDeleteClicked(movie.id);
      }}
    >
      delete
    </button>
    <button
      type="button"
      onClick={() => {
        onLikeClicked(movie.id);
      }}
    >
      Like: {movie.likes}
    </button>
    <button
      type="button"
      onClick={() => {
        onDislikeClicked(movie.id);
      }}
    >
      Dislike: {movie.dislikes}
    </button>
  </div>
);
