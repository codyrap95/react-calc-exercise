import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const fetchedData = (data: []) => {
    setMovies(data);
    console.log(data);
  };
  return (
    <React.Fragment>
      <Counter fetchedData={fetchedData} />
      <MovieList movies={movies} />
    </React.Fragment>
  );
}

export default App;
