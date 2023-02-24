import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // import Link component
import MovieList from "./movielist";
import SearchBox from "./searchbox";
const API_KEY = "22b2654f35249d3635c5043b01d86875";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Search = () => {
  // const [movies, setMovies] = useState([]);
  // const [searchValue, setSearchValue] = useState("strange");

  // const getMovieRequest = async () => {
  //   const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   if (responseJson.Search) {
  //     setMovies(responseJson.Search);
  //   }
  // };

  // useEffect(() => {
  //   getMovieRequest(searchValue);
  // }, []);

  // new api code
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(SEARCH_API + searchTerm);
      const data = await response.json();
      setMovies(data.results);
    }
    fetchData();
  }, [searchTerm]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.elements.searchInput.value);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center justify-content-between mt-4 mb-4">
        <h1>Movies</h1>
        <div>
          {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
          <button onClick={getMovieRequest}>Search</button> */}
          <form onSubmit={handleOnSubmit}>
            <input type="text" name="searchInput" />
            <button type="submit">Search</button>
          </form>
          <Link to="/wishlist">
            <button>Wishlist</button>
          </Link>{" "}
          {/* add Link component */}
        </div>
      </div>
        <MovieList movies={movies} type="a" />
    </div>
  );
};

export default Search;
