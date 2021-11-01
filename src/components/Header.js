import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <h1 className="navbar-brand">Bookstore CMS</h1>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" activeClassName="active" exact>Books</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/categories" activeClassName="active" exact>Categories</NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
