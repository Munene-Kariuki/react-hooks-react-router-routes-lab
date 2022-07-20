import React from "react";
import { directors } from "../data";

function Directors() {
  const displayDirectors = directors.map((director) => {
    return (
      <div>
        <h3>Name: {director.name}</h3>
        <p>Movies:</p>
        <ul>
          {director.movies.map((movie) => {
            return<li key={movie}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })
  return (
    <>
      <h1>Directors Page</h1>
      {displayDirectors}
    </>
  );
}

export default Directors;
