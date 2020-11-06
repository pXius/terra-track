import React from 'react';
import { Link } from 'react-router-dom';

function ParcelListItem({ parcel }) {
  const { status, parcel_id, location_name } = parcel;

  return (
    <div className="grid">
      <Link to={`/parcel/${parcel_id}`}>
        <span>{`Parcel ID: ${parcel_id}`}</span>
        <span>{`Location: ${location_name}`}</span>
        <span>{`Status: ${status}`}</span>
      </Link>
    </div>
  );
}

export default ParcelListItem;