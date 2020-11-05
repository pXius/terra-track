import React, { useContext } from 'react';

function ParcelListItem({ parcel }) {
  // const { parcelData, setParcelData } = useContext(ParcelDataContext);

  const { id, status, parcel_id, sender, location_name, user_name } = parcel;

  return (
    <div>
      <span>{`Parcel ID: ${parcel_id}`}</span>
      <span>{`User Name: ${user_name}`}</span>
    </div>
  );
}

export default ParcelListItem;
