import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//api key
//6c158506
const API_URL = "https://www.omdbapi.com?apikey=6c158506";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState([""]);
  // async because take sometime to fetch the movie
  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1> Zika Movie Land</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchmovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div classname="empty">
          <h6> search for your favorite movie</h6>
        </div>
      )}
    </div>
  );
}

export default App;
