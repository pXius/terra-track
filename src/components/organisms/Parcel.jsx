// React Libraries
import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
// State
import { parcelListState } from '../../state/parcelListState-atom';

function Parcel() {
  const { id } = useParams(); // url:id
  const parcelListData = useRecoilValue(parcelListState); // Array of Parcels from List
  const parcel = parcelListData.find(parcel => parcel.parcel_id === id);

  // const {
  //   sender,
  //   location_name,
  //   location_coordinate_latitude,
  //   location_coordinate_longitude,
  //   notes,
  //   last_updated
  // } = data;

  const eta =
    parcel.status !== 'delivered'
      ? `ETA: ${parcel.eta.substring(0, 10)}`
      : null;

  return (
    <div className="body parcel-body">
      <h2>Parcel: {`${parcel.parcel_id}`}</h2>
      <div className="parcel-status">
        <span>Status: {parcel.status}</span>
        <span>{eta}</span>
      </div>
      <div className="parcel-sender">{`Sender: ${parcel.sender}`}</div>
      <div className="parcel-location">
        <span>{`Package Location: ${parcel.location_name}`}</span>
      </div>
    </div>
  );
}

export default Parcel;
