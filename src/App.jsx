import { useState } from 'react';
import Parcel from './components/organisms/Parcel';
import ParcelList from './components/template/ParcelList';
import ParcelDataContext from './Contexts/ParcelData';

const { default: HomePage } = require('./components/template/HomePage');

function App() {
  const [parcelData, setParcelData] = useState([]);
  const parcelDataContext = { parcelData, setParcelData };
  return (
    <div className="App">
      <ParcelDataContext.Provider value={parcelDataContext}>
        {/* <Parcel /> */}
        <ParcelList />
      </ParcelDataContext.Provider>
    </div>
  );
}

export default App;
