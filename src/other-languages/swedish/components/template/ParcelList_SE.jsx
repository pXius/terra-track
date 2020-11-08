// React Libraries
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
// Custom JS Functions & Variables
import { objectSort, objectReverseSort } from '../../../../js/functions/sorterFunctions';
import { objectFilter } from '../../../../js/functions/filterFunction';
// Components
import ParcelListItem from '../molecules/ParcelListItem';
import { Button } from 'semantic-ui-react';
import FilterButton from '../atoms/FilterButton';
import Search from '../molecules/Search';
import Loading from '../molecules/Loading';
import ErrorScreen from '../molecules/ErrorScreen';
//State
import { parcelListState } from '../../../../state/parcelListState-atom';

function ParcelList() {
  // eslint-disable-next-line no-unused-vars
  const [parcelListData, setParcelListData] = useRecoilState(parcelListState);
  const [displayedParcels, setDisplayedParcels] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('loading');
  const [sortDirection, setSortDirection] = useState({ parcel_id: 'down' });
  const endpoint = process.env.REACT_APP_SDA8_API;

  // API call to populate parcel arrays.
  useEffect(() => {
    const abortFetch = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, {
          mode: 'cors',
          signal: abortFetch.signal
        });
        const parsedData = await response.json();
        setParcelListData(parsedData);
        setDisplayedParcels(objectSort(parsedData, 'parcel_id'));
        setFetchStatus('success');
      } catch (error) {
        setFetchStatus('error');
        console.log(error);
      }
    };
    fetchData();
    return () => abortFetch.abort();
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
      <div className="filter-and-search">
        <Search
          parcelArray={parcelListData}
          setParcelArray={setDisplayedParcels}
          sortFunction={setSortDirection}
        />
        <FilterButton callback={dropDownChange} />
      </div>
      <div className="sort-buttons">
        <Button className="s-button" onClick={() => sortHandler('parcel_id')}>
          Sortera efter ID{' '}
          <i className={`fas fa-chevron-${sortDirection['parcel_id']}`} />
        </Button>
        <Button
          className="s-button sc-button"
          onClick={() => sortHandler('location_name')}>
          Sortera efter Plats{' '}
          <i className={`fas fa-chevron-${sortDirection['location_name']}`} />
        </Button>
        <Button className="s-button" onClick={() => sortHandler('status')}>
          Sortera efter Status{' '}
          <i className={`fas fa-chevron-${sortDirection['status']}`} />
        </Button>
      </div>
      {fetchStatus === 'loading' && <Loading />}
      {fetchStatus === 'success' && jsxParcels}
      {fetchStatus === 'error' && <ErrorScreen />}
    </div>
  );
}

export default ParcelList;
