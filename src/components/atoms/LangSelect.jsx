// React Libraries
import React from 'react';
import { useRecoilState } from 'recoil';
// Components
import { Dropdown } from 'semantic-ui-react';
// State
import { langState } from '../../state/lang-atom';

const languageOptions = [
  { key: 'English', text: 'English', value: 'en' },
  { key: 'Swedish', text: 'Swedish', value: 'se' }
];

function LangSelect() {
  const [lang, setLang] = useRecoilState(langState);
  function clickHandler(event, data) {
    setLang(data.value);
  }

  return (
    <Dropdown
      button={true}
      className="icon langButton"
      defaultValue="en"
      // floating
      labeled
      icon="world"
      options={languageOptions}
      text={lang === 'en' ? 'EN' : 'SE'}
      onChange={clickHandler}
    />
  );
}

export default LangSelect;
