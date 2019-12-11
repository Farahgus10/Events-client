import React from 'react';
import Router from 'react-router-dom';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <Link to={'/mantra'}>Mantra of the day</Link>
    </div>
  )
}

export default Homepage;

