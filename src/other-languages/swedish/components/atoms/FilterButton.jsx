// React Libraries
import React from 'react';
// Components
import { Dropdown } from 'semantic-ui-react';

function FilterButton({ callback }) {
  function clickHandler(sortType) {
    callback(sortType);
  }
  return (
    <Dropdown text="Filtrera" icon="filter" floating labeled button className="icon">
      <Dropdown.Menu direction={'left'}>
        <Dropdown.Header icon="dolly" content="Filter by Status" />

        <Dropdown.Item onClick={() => clickHandler('all')}>Allt</Dropdown.Item>
        <Dropdown.Item onClick={() => clickHandler('order-info-received')}>
          Orderinformation Mottagen
        </Dropdown.Item>
        <Dropdown.Item onClick={() => clickHandler('ready-for-pickup')}>
          Redo För Insamling
        </Dropdown.Item>
        <Dropdown.Item onClick={() => clickHandler('on-the-way')}>På Väg</Dropdown.Item>
        <Dropdown.Item onClick={() => clickHandler('delivered')}>Levereras</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterButton;
