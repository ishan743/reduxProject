import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // import Link component
import MovieList from "./movielist";
import SearchBox from "./searchbox";


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
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [page,setpage]=useState(1);
  const API_KEY = "22b2654f35249d3635c5043b01d86875";
const SEARCH_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;


async function fetchgeneres(){
    let response= await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    response=await response.json();
    setGenres(response.genres);
    // console.log(response);
}
async function updategenres(){
    let response= await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&with_genres=${selectedGenre}`
      );
      response=await response.json();
      setMovies(response.results);
}
useEffect(()=>fetchgeneres, []);

  useEffect(() => {
    updategenres();
    // console.log("TEST");
  }, [selectedGenre]);
   const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(SEARCH_API );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchData();
  }, [page]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setSearchTerm(e.target.elements.searchInput.value);
    setpage(page+1);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center justify-content-between mt-4 mb-4">

        <h1>Movies</h1>
        <div>
          {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
          <button onClick={getMovieRequest}>Search</button> */}
          <form onSubmit={handleOnSubmit}>
            {/* <input type="text" name="searchInput" /> */}
            <button type="submit">Next</button>
          </form>
          <Link to="/search">
            <button>Search Movies</button>
          </Link>
          <br/>
          <label>
        Filter by genre:
        <select value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </label>
          {/* add Link component */}
        </div>
      </div>
        <MovieList movies={movies} type="a" />
      {/* <div className="row">
      </div> */}
    </div>
  );
};

export default Search;
