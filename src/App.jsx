/* eslint-disable react/jsx-pascal-case */
// React Libraries
import React from 'react';
import { useRecoilValue } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Header from './components/organisms/Header';
import HomePage from './components/template/HomePage';
import ParcelList from './components/template/ParcelList';
import Parcel from './components/template/ParcelPage';
import Footer from './components/organisms/Footer';
import ErrorScreen from './components/molecules/ErrorScreen';
// Swedish Components
import HomePage_SE from './other-languages/swedish/components/template/HomePage_SE';
import ParcelList_SE from './other-languages/swedish/components/template/ParcelList_SE';
import Parcel_SE from './other-languages/swedish/components/template/ParcelPage_SE';

// State
import { themeState } from './state/theme-atom';
import { langState } from './state/lang-atom';
//Style
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/js_theming/themes';
import { GlobalStyles } from './styles/js_theming/global';

function App() {
  const lang = useRecoilValue(langState);
  const theme = useRecoilValue(themeState);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <Router>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route path="/" exact>
              {lang === 'en' ? <HomePage /> : <HomePage_SE />}
            </Route>
            <Route path="/parcels">
              {lang === 'en' ? <ParcelList /> : <ParcelList_SE />}
            </Route>
            <Route path="/parcel/:id" exact>
              {lang === 'en' ? <Parcel /> : <Parcel_SE />}
            </Route>
            <Route component={ErrorScreen} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
