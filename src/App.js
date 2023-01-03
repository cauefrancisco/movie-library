/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';

//  f2bcdaaf - api key
const API_URL = 'http://www.omdbapi.com?apikey=f2bcdaaf';

// const movieOne = {
//   Title: "Wonder Woman",
//   Year: "2017",
//   imdbID: "tt0451279",
//   Type: "movie",
//   Poster: "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
// }

const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    if(data){
      setMovies(data.Search);
    }
  }
  useEffect(() => {
    searchMovies('Wonder Woman')
  }, []);

  return(
    <div className="app">
      <h1>Movie Library</h1>

      <div className="search">
        <input
        placeholder="Search for movies"
        value={search}
        onChange={(e) => { setSearch(e.target.value)}}
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick={() => {searchMovies(search)}}
        />
      </div>

      {
        movies?.length > 0 ?
        (
      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
        ) : (
          <div className="empty">
            <h2>movies not found! :C</h2>
          </div>
        )
      }

    </div>
  );
}

export default App;
