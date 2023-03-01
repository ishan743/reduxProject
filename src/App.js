import React from 'react';
import Test from './components/test';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Search from './components/search';
import Wishlist from './components/wishlist';
import Errorpage from './components/errorpage';

const App = () => {
	return (

		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/test' element={<Test/>}/>
				<Route path='/search' element={<Search/>}/>
				<Route path='/wishlist' element={<Wishlist/>}/>
				<Route path='*' element={<Errorpage/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
