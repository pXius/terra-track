// React Libraries
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
// Components
import ParcelListItem from '../organisms/ParcelListItem';
//State
import { parcelListState } from '../../state/parcelListState-atom';

function ParcelList() {
  const [parcelListData, setParcelListData] = useRecoilState(parcelListState);
  const [isLoading, setIsLoading] = useState(true);

  const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, { mode: 'cors' });
        const parsedData = await response.json();
        setParcelListData(parsedData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setParcelListData]); // Reason for setParcelListData => https://github.com/facebook/react/issues/14920

  // Create an array of parcelListItems from the fetch data
  const parcels = parcelListData.map(parcel => (
    <ParcelListItem key={parcel.id} parcel={parcel} />
  ));

  return <div>{isLoading ? 'Loading...' : parcels}</div>;
}

export default ParcelList;
