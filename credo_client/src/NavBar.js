import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul id="nav-bar">
    <li>
      <Link to="/valves">Valves</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
    <li>
      <Link to="/pipes">Pipes</Link>
    </li>
  </ul>
);

export default NavBar;