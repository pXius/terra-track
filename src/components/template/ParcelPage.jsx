// React Libraries
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
// Components
import { Button } from 'semantic-ui-react';
import GoogleMaps from '../molecules/GoogleMaps';

// State
import { parcelListState } from '../../state/parcelListState-atom';

function Parcel() {
  const { id } = useParams(); // url:id
  const parcelListData = useRecoilValue(parcelListState); // Array of Parcels from previous API call.
  const parcel = parcelListData.find(parcel => parcel.parcel_id === id);

  const eta =
    parcel.status !== 'delivered' ? `ETA: ${parcel.eta.substring(0, 10)}` : null;

  return (
    <div className="body parcel-body">
      <Link to="/parcels">
        <Button circular icon="arrow left" />
      </Link>
      <h2>Parcel: {`${parcel.parcel_id}`}</h2>
      <div className="parcel-status">
        <span>Status: {parcel.status}</span>
        <span>{eta}</span>
      </div>
      <div className="parcel-sender">{`Sender: ${parcel.sender}`}</div>
      <div className="parcel-location">
        <span>{`Package Location: ${parcel.location_name}`}</span>
        <div style={{ width: '400px', height: '400px' }}>
          <GoogleMaps
            latitude={parcel.location_coordinate_latitude}
            longitude={parcel.location_coordinate_longitude}
          />
        </div>
      </div>
    </div>
  );
}

export default Parcel;
