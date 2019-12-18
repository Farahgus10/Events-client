import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <p>Navigation stuff</p>
      <Link to="/">Homepage </Link><br></br>
      <Link to={'/mantra'}>Mantra of the day</Link>
    </div>
  )
}

export default Nav;