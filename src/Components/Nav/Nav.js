import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <p>Navigation stuff</p>
      <Link to="/">Homepage </Link><br></br>
    </div>
  )
}

export default Nav;