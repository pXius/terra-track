// React Libraries
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
// Custom JS Functions
import { objectSort, objectReverseSort } from '../../js/sorterFunctions';
// Components
import ParcelListItem from '../organisms/ParcelListItem';
//State
import { parcelListState } from '../../state/parcelListState-atom';

function ParcelList() {
  // eslint-disable-next-line no-unused-vars
  const [parcelListData, setParcelListData] = useRecoilState(parcelListState);
  const [displayedParcels, setDisplayedParcels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortDirection, setSortDirection] = useState({ parcel_id: 'down' });
  const endpoint = process.env.REACT_APP_SDA8_API;

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

  function sortHandler(sortType) {
    if (sortDirection[sortType] === 'down') {
      setSortDirection({ [sortType]: 'up' });
      setDisplayedParcels(objectReverseSort(displayedParcels, sortType));
    } else {
      setSortDirection({ [sortType]: 'down' });
      setDisplayedParcels(objectSort(displayedParcels, sortType));
    }
  }

  // Creates an array of <jsx>parcels</jsx> from the sorted/filtered parcels.
  const jsxParcels = displayedParcels.map(parcel => {
    return (
      <ParcelListItem key={`${parcel.sender}-${parcel.id}`} parcel={parcel} />
    );
  });

  return (
    <div className="body parcel-list-body">
      <button onClick={() => sortHandler('parcel_id')}>
        Sort By ID {sortDirection['parcel_id']}
      </button>
      <button onClick={() => sortHandler('location_name')}>
        Sort By Location {sortDirection['location_name']}
      </button>
      <button onClick={() => sortHandler('status')}>
        Sort By Status {sortDirection['status']}
      </button>
      {isLoading ? 'Loading...' : jsxParcels}
    </div>
  );
}

export default ParcelList;
