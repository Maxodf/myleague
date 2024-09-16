import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <div className='centerDiv'>
        <h1>Bienvenue sur MyLeague !</h1>
        <p><b>Le projet :</b> Une app pour suivre les scores de ton club sportif français.</p>
        <br />
        <h2>Choisis ton sport :</h2>
      <Link to="/football-americain">Football Américain</Link>
     </div>
    </div>
  );
};

export default Home;
