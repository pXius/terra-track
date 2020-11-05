// React Core
// React Libraries
import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();
  return (
    <div className="body home-body">
      <button onClick={() => history.push('/parcels')} className="start-button">
        Track
      </button>
    </div>
  );
}

export default HomePage;
