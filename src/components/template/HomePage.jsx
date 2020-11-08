// React Libraries
// React Libraries
import React from 'react';
import { useHistory } from 'react-router-dom';
// Components
import { Button } from 'semantic-ui-react';

function HomePage() {
  const history = useHistory();
  return (
    <div className="body home-body">
      <Button onClick={() => history.push('/parcels')} className="start-button">
        TRACK
      </Button>
    </div>
  );
}

export default HomePage;
