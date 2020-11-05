import React from 'react';

function ParcelListItem({ parcel }) {
  const { status, parcel_id, location_name, user_name } = parcel;

  return (
    <div>
      <span>{`Parcel ID: ${parcel_id}`}</span>
      <span>{`User Name: ${user_name}`}</span>
      <span>{`Location Name: ${location_name}`}</span>
      <span>{`Status: ${status}`}</span>
    </div>
  );
}

export default ParcelListItem;
