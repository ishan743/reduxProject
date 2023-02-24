import React, { useState ,useEffect} from "react";
import { useSelector } from "react-redux";
import MovieList from "./movielist";

const Wishlist = () => {
  const temp = useSelector((state) => state.AddRemove);
  const [mystate, setmystate] = useState(temp);
  console.log(mystate);
//   // Sort by year in ascending order
  const sortedResultsAsc = mystate.slice().sort((a, b) => {
    return parseInt(a.release_date) - parseInt(b.release_date);
  });
  useEffect(() => {
    setmystate(temp);
  }, [temp]);

  const sortedMoviesVoteAverage = mystate.slice().sort((a, b) => {
    return b.vote_average - a.vote_average;
  });

//   // Sort by release_date in descending order
  const sortedResultsDesc = mystate.slice().sort((a, b) => {
    return parseInt(b.release_date) - parseInt(a.release_date);
  });
  function handleCategoryChange(e) {
    let val = e.target.value;
    let newarr;
    if(val=="increasing" ||val=="decreasing"){
        if(val=="increasing"){
            newarr=sortedResultsAsc;
        }
        else{newarr=sortedResultsDesc;}
        // console.log(newarr);
    }
    else{
        newarr = temp.filter((ele) => ele.Type == val);
    }
    setmystate(newarr);
  }
  return (
    <>
      <h1>Wishlist</h1>
      {/* <label>Category</label>
      <select onChange={handleCategoryChange}>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select> */}
      <label>Sort by Year</label>
      <select onChange={handleCategoryChange}>
        <option value="increasing">increasing</option>
        <option value="decreasing">decreasing</option>
      </select>
        <MovieList movies={mystate} type="b" />
      <div className="row">
      </div>
    </>
  );
};

export default Wishlist;
