import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <h1 className="navbar-brand">Bookstore CMS</h1>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" exact>Books</Link>
      </li>
      <li className="nav-item">
        <Link to="/categories" exact>Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
