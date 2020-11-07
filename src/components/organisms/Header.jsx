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

  function themeToggle() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <header className="nav-bar">
      <span>
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </span>
      <i className={`moon ${theme === 'light' ? 'outline' : null} icon large`}>
        <Checkbox onClick={() => themeToggle()} className="toggle" />
      </i>
    </header>
  );
}

export default Header;
