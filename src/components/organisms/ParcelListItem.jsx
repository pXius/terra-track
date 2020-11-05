import React, { useContext } from 'react';

function ParcelListItem({ parcel }) {
  // const { parcelData, setParcelData } = useContext(ParcelDataContext);

  const { id, status, parcel_id, sender, location_name, user_name } = parcel;

  return (
    <div>
      <h3>{`Parcel ID: ${parcel_id}`}</h3>
      <h4>{`User Name: ${user_name}`}</h4>
    </div>
  );
}

export default ParcelListItem;
