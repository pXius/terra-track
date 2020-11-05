import { useState } from 'react';
import ParcelList from './components/template/ParcelList';
import ParcelDataContext from './Contexts/ParcelData';

function App() {
  const [parcelData, setParcelData] = useState([]);
  const parcelDataContext = { parcelData, setParcelData };
  return (
    <div className="App">
      <ParcelDataContext.Provider value={parcelDataContext}>
        <ParcelList />
      </ParcelDataContext.Provider>
    </div>
  );
}

export default App;
