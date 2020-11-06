// React Libraries
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
// Custom JS Functions & Variables
import { objectSort, objectReverseSort } from '../../js/functions/sorterFunctions';
import { objectFilter } from '../../js/functions/filterFunction';
import { listFilter } from '../../js/variables/filterMenuObject';
// Components
import ParcelListItem from '../molecules/ParcelListItem';
import { Button, Dropdown } from 'semantic-ui-react';
//State
import { parcelListState } from '../../state/parcelListState-atom';

function ParcelList() {
  // eslint-disable-next-line no-unused-vars
  const [parcelListData, setParcelListData] = useRecoilState(parcelListState);
  const [displayedParcels, setDisplayedParcels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortDirection, setSortDirection] = useState({ parcel_id: 'down' });
  const endpoint = process.env.REACT_APP_SDA8_API;

  // API call to populate parcel arrays.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, { mode: 'cors' });
        const parsedData = await response.json();
        setParcelListData(parsedData);
        setDisplayedParcels(objectSort(parsedData, 'parcel_id'));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [endpoint, setParcelListData]); // Reason for endpoint & setParcelListData => https://github.com/facebook/react/issues/14920

  /* This handler will change the state of the sort direction and call the appropriate
    sorting function to resort the list. A fontAwesome arrow on the sort button monitors the sort direction. */
  function sortHandler(sortType) {
    if (sortDirection[sortType] === 'down') {
      setSortDirection({ [sortType]: 'up' });
      setDisplayedParcels(objectReverseSort(displayedParcels, sortType));
    } else {
      setSortDirection({ [sortType]: 'down' });
      setDisplayedParcels(objectSort(displayedParcels, sortType));
    }
  }

  /* This function will filter the displayed parcel list based on delivery
     status drop-down menu. On each change the list will be re-sorted by parcel_id. */
  function dropDownChange(event, data) {
    let filteredArray;
    if (data.value === 'all') {
      filteredArray = parcelListData;
    } else {
      filteredArray = objectFilter(parcelListData, 'status', data.value);
    }
    setSortDirection({ parcel_id: 'down' });
    setDisplayedParcels(objectSort(filteredArray, 'parcel_id'));
  }

  /* Creates an array of <jsx>parcels</jsx> from the sorted/filtered parcels
     in the displayedParcels array*/
  const jsxParcels = displayedParcels.map(parcel => {
    return <ParcelListItem key={`${parcel.sender}-${parcel.id}`} parcel={parcel} />;
  });
  return (
    <div className="body parcel-list-body">
      <Button onClick={() => sortHandler('parcel_id')}>
        Sort By ID <i className={`fas fa-chevron-${sortDirection['parcel_id']}`} />
      </Button>
      <Button onClick={() => sortHandler('location_name')}>
        Sort By Location{' '}
        <i className={`fas fa-chevron-${sortDirection['location_name']}`} />
      </Button>
      <Button onClick={() => sortHandler('status')}>
        Sort By Status <i className={`fas fa-chevron-${sortDirection['status']}`} />
      </Button>
      <Dropdown
        header="Parcel Status:"
        options={listFilter}
        defaultValue={listFilter[0].value}
        onChange={dropDownChange}
      />
      {isLoading ? 'Loading...' : jsxParcels}
    </div>
  );
}

export default ParcelList;
