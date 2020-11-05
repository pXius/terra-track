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
  //   id,
  //   status,
  //   eat,
  //   parcel_id,
  //   sender,
  //   location_name,
  //   location_coordinate_latitude,
  //   location_coordinate_longitude,
  //   user_phone,
  //   user_name,
  //   notes,
  //   last_updated
  // } = data;

  return (
    <div>
      <h1>This is a Parcel {parcel.parcel_id}</h1>
    </div>
  );
}

export default Parcel;
