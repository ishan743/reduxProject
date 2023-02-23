import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { AddToWishlist,RemoveFromWishlist } from '../actions/index';

const Test = () => {
	const mystate=useSelector((state)=>state.AddRemove);
	const dispatch=useDispatch();
	return (
		<div>
			test page {mystate}
		<button onClick={()=>dispatch(AddToWishlist(5))}>add</button>
		<button onClick={()=>dispatch(RemoveFromWishlist(5))}>Remove</button>

		</div>
	);
}

export default Test;
