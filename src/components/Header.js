import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <h1 className="navbar-brand">Bookstore CMS</h1>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/">Books</Link>
      </li>
      <li className="nav-item">
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
