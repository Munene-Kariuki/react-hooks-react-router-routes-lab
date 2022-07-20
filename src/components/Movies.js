import React from "react";
import { movies } from "../data";

function Movies() {
  const displayMovies = movies.map((movie) => {
    return (
      <div>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map((genre, index) => {
            return <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
    )
  })
  return (
    <>
      <h1>Movies Page</h1>
      {displayMovies}

    </>
  );
}

export default Movies;
