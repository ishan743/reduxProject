import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { AddToWishlist, RemoveFromWishlist } from '../actions';
import { useEffect } from 'react';

const MovieList = (props) => {
	// const mystate=useSelector((state)=>state.AddRemove);
	const dispatch=useDispatch();
	// console.log(mystate);
	// useEffect(() => {
	// 	console.log(mystate);
	// }, [mystate]);
	return (
		<>
			{props.movies.map((movie, index) => (
				
				<div className='image-container d-flex justify-content-start m-3' key={movie.imdbID} >
					<img src={movie.Poster} alt='movie'/>

					<div
						// onClick={()=>{run(movie)}}
						className='overlay d-flex align-items-center justify-content-center'
					>
						{
							props.type=='a'?<button onClick={()=>dispatch(AddToWishlist(movie))}>Add</button>:<button>Can not Add</button>
						}
						{
							props.type=='b'?<button onClick={()=>dispatch(RemoveFromWishlist(movie))}>Remove</button>:<button>Can not Remove</button>
						}
						
						



					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
