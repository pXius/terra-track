// React Libraries
import React from 'react';
// Components
import { Dropdown } from 'semantic-ui-react';

function FilterButton({ callback }) {
  function clickHandler(sortType) {
    callback(sortType);
  }
  return (
    <Dropdown text="Filter" icon="filter" floating labeled button className="icon">
      <Dropdown.Menu direction={'left'}>
        <Dropdown.Header icon="dolly" content="Filter by Status" />

        <Dropdown.Item onClick={() => clickHandler('all')}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => clickHandler('order-info-received')}>
          Order Info Received
        </Dropdown.Item>
        <Dropdown.Item onClick={() => clickHandler('ready-for-pickup')}>
          Ready for Pickup
        </Dropdown.Item>
        <Dropdown.Item onClick={() => clickHandler('on-the-way')}>
          On the Way
        </Dropdown.Item>
        <Dropdown.Item onClick={() => clickHandler('delivered')}>Delivered</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterButton;
