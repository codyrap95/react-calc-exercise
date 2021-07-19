import React from "react";
import classes from "./MovieList.module.css";

export default function MovieList(props) {
  return (
    <ul className={classes.movieList}>
      {props.movies.map((movie) => (
        <li key={movie.episode_id}>{movie.title}</li>
      ))}
    </ul>
  );
}
