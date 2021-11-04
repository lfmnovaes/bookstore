import React from 'react';
import { NavLink } from 'react-router-dom';

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
  </nav>
);

export default Header;
