import React, { useState, useEffect } from 'react';

const API_KEY = '22b2654f35249d3635c5043b01d86875';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="searchInput" />
        <button type="submit">Search</button>
      </form>
      <div className="movie-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title} Poster`} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span>{movie.release_date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
