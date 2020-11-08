// React Libraries
import React from 'react';
import { Link } from 'react-router-dom';
// JS Functions
import { beautifyJSONStatusSE } from '../../../../js/functions/beautifyJSON';

function ParcelListItem({ parcel }) {
  const { status, parcel_id, location_name, sender } = parcel;

  return (
    <Link to={`/parcel/${parcel_id}`}>
      <div className="parcel-item-div">
        <span className="pl-item">
          <div className="pl-head">Paket-ID:</div>
          <div>{parcel_id}</div>
        </span>
        <span className="pl-item">
          <div className="pl-head">Avsändare:</div>
          <div>{sender}</div>
        </span>
        <span className="pl-item">
          <div className="pl-head">Plats:</div>
          <div>{location_name}</div>
        </span>
        <span className="pl-item">
          <div className="pl-head">Status:</div>
          <div>{beautifyJSONStatusSE(status)}</div>
        </span>
      </div>
    </Link>
  );
}

export default ParcelListItem;
