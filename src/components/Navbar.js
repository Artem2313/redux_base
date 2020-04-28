import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
      <div className="container">
        <Link className="logo" to="/">Latest Posts</Link>
        <ul className="navbar">
          <li><NavLink exact to="/">Latest Posts</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>          
        </ul>
      </div>
    </div> 
  )
}

export default withRouter(Navbar)