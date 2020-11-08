// React Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
// Components
import { Checkbox } from 'semantic-ui-react';
// State
import { themeState } from '../../state/theme-atom';

function Header() {
  const [theme, setTheme] = useRecoilState(themeState);

  function themeToggle(event, data) {
    data.checked === true ? setTheme('dark') : setTheme('light');
  }

  return (
    <header className="nav-bar">
      {/* <div className="logo-and-name"> */}
      <Link className="logo-link" to="/">
        <div className="logo" />
        <h1 className="app-name">
          Terra
          <br />
          Track
        </h1>
      </Link>
      <div className="theme-toggle">
        <i className={`moon ${theme === 'light' ? 'outline' : null} icon large `} />
        <Checkbox
          onClick={(event, data) => themeToggle(event, data)}
          className="toggle"
        />
      </div>
    </header>
  );
}

export default Header;
