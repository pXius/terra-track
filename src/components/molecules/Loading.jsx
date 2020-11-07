// React Libraries
import React from 'react';
// Components
import { Dimmer, Loader } from 'semantic-ui-react';

function Loading() {
  return (
    <>
      <Dimmer active>
        <Loader size="huge">Loading</Loader>
      </Dimmer>
    </>
  );
}

export default Loading;
