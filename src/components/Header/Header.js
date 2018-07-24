import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/persons">Persons</NavLink>
        </li>
        <li>
          <NavLink to="/the-road-to-learn-react">Dive Into The Road To Learn ReactB ook</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
