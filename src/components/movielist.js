import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToWishlist, RemoveFromWishlist } from "../actions";
import { useEffect } from "react";
import "../App.css";

const MovieList = (props) => {
  // const mystate=useSelector((state)=>state.AddRemove);
  const dispatch = useDispatch();
  // console.log(mystate);
  // useEffect(() => {
  // 	console.log(mystate);
  // }, [mystate]);
  return (
    // <>
    // 	{props.movies.map((movie, index) => (

    // 		<div className='image-container d-flex justify-content-start m-3' key={movie.imdbID} >
    // 			<img src={movie.Poster} alt='movie'/>

    // 			<div
    // 				// onClick={()=>{run(movie)}}
    // 				className='overlay d-flex align-items-center justify-content-center'
    // 			>
    				// {
    				// 	props.type=='a'?<button onClick={()=>dispatch(AddToWishlist(movie))}>Add</button>:<button>Can not Add</button>
    				// }
    				// {
    				// 	props.type=='b'?<button onClick={()=>dispatch(RemoveFromWishlist(movie))}>Remove</button>:<button>Can not Remove</button>
    				// }

    // 			</div>
    // 		</div>
    // 	))}
    // </>
    <div className="movie-container">
      {props.movies.map((movie) => (
        <div
          //   className='image-container d-flex justify-content-start m-3'
          className="movie-card"
          key={movie.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
          <div
            // className='overlay d-flex align-items-center justify-content-center'
            className="movie-info"
          >
            <h3>{movie.title}</h3>
            <span>{movie.release_date}</span>
          </div>
		  <div className="movie-buttons">
		  {
    					props.type=='a'?<button onClick={()=>dispatch(AddToWishlist(movie))}>Add</button>:<span></span>
    				}
    				{
    					props.type=='b'?<button onClick={()=>dispatch(RemoveFromWishlist(movie))}>Remove</button>:<span></span>
    				}
			
          {/* <button onClick={() => dispatch(AddToWishlist(movie))}>
            Add to Wishlist
          </button>
          <button onClick={() => dispatch(RemoveFromWishlist(movie))}>
            Remove from Wishlist
          </button> */}
        </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
