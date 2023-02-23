import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // import Link component
import MovieList from "./movielist";
import SearchBox from "./searchbox";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("strange");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center justify-content-between mt-4 mb-4">
        <h1>Movies</h1>
        <div>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
          <button onClick={getMovieRequest}>Search</button>
          <Link to="/wishlist"><button>Wishlist</button></Link> {/* add Link component */}
        </div>
      </div>
      <div className="row">
        <MovieList movies={movies} type='a' />
      </div>
    </div>
  );
};

export default Search;
