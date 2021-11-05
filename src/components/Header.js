import React from 'react';
import { NavLink } from 'react-router-dom';
import user from './user-svgrepo-com.svg';

const Header = () => (
  <nav>
    <h1 className="navbar-brand">Bookstore CMS</h1>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/">Books</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/categories">Categories</NavLink>
      </li>
    </ul>
    <img className="user-icon" src={user} alt="user" />
  </nav>
);

export default Header;
