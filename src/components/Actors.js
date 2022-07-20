import React from "react";
import { actors } from "../data";

function Actors() {
  const displayActors = actors.map((actor) => {
    return (
      <div>
        <h3>Name: {actor.name}</h3>
        <p>Movies:</p>
        <ul>
          {actor.movies.map((movie) => {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })
  return (
    <>
      <h1>Actors Page</h1>
      {displayActors}
    </>
  );
}

export default Actors;
