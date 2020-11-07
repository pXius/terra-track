// React Libraries
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
// Custom JS Functions & Variables
import { objectSort, objectReverseSort } from '../../js/functions/sorterFunctions';
import { objectFilter } from '../../js/functions/filterFunction';
// Components
import ParcelListItem from '../molecules/ParcelListItem';
import { Button } from 'semantic-ui-react';
import FilterButton from '../atoms/FilterButton';
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

  /* This function will filter the displayed parcel list based on the delivery
     status filter button. On each change the list will be re-sorted by parcel_id.
     Here's the catch, it's made to be passed down to the FilterButton component */

  function dropDownChange(filterType) {
    let filteredArray;
    if (filterType === 'all') {
      filteredArray = parcelListData;
    } else {
      filteredArray = objectFilter(parcelListData, 'status', filterType);
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
      <div>
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
        <FilterButton callback={dropDownChange} />
      </div>

      {isLoading ? 'Loading...' : jsxParcels}
    </div>
  );
}

export default ParcelList;
