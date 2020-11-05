import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="nav-bar">
      <span>
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </span>
      <ul>
        <li>Dark Mode</li>
      </ul>
    </header>
  );
}

export default Header;
