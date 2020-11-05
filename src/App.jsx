import React from 'react';
import { RecoilRoot } from 'recoil';

import ParcelList from './components/template/ParcelList';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <ParcelList />
      </RecoilRoot>
    </div>
  );
}

export default App;
