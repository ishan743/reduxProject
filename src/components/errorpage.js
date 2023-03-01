import React from 'react';

const Errorpage = () => {
    return (
        <div>
            <div class="container">
      <div class="header">
        <h1>Oops!</h1>
      </div>
      <div class="content">
        <h2>Something went wrong.</h2>
        <p>We're sorry, but there was an error processing your request. Please try again later.</p>
        <a href="/" class="button">Go Back</a>
      </div>
    </div>
        </div>
    );
}

export default Errorpage;
