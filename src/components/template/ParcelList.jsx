import React, { useContext, useEffect, useState } from 'react';
import ParcelDataContext from '../../Contexts/ParcelData';
import ParcelListItem from '../organisms/ParcelListItem';

function ParcelList() {
  const { parcelData, setParcelData } = useContext(ParcelDataContext);
  const [isLoading, setIsLoading] = useState(true);

  const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

  useEffect(() => {
    if (parcelData.length === 0) {
      const fetchData = async () => {
        try {
          const response = await fetch(endpoint, { mode: 'cors' });
          const parsedData = await response.json();
          setParcelData(parsedData);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [parcelData.length, setParcelData]);

  const parcels = parcelData.map(parcel => (
    <ParcelListItem key={parcel.id} parcel={parcel} />
  ));

  return <div>{isLoading ? 'Loading...' : parcels}</div>;
}

export default ParcelList;
