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
// State
import { themeState } from './state/theme-atom';
//Style
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/js_theming/themes';
import { GlobalStyles } from './styles/js_theming/global';

function App() {
  const theme = useRecoilValue(themeState);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <Router>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/parcels">
              <ParcelList />
            </Route>
            <Route path="/parcel/:id" exact>
              <Parcel />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
