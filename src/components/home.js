import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    let mystate=useSelector((state)=>state.AddRemove);
    console.log(mystate);
    return (
        <div>
            <h1>homepage</h1>
        </div>
    );
}

export default Home;
