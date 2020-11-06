// React Libraries
import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Styling
import './css/style.css';
import 'semantic-ui-css/semantic.min.css';
// Components
import Header from './components/organisms/Header';
import HomePage from './components/template/HomePage';
import ParcelList from './components/template/ParcelList';
import Parcel from './components/template/ParcelPage';
// import Footer from './components/organisms/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <RecoilRoot>
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
          {/* <Footer /> */}
        </RecoilRoot>
      </Router>
    </div>
  );
}

export default App;
