// React Libraries
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
// Components
import { Button } from 'semantic-ui-react';
import GoogleMaps from '../molecules/GoogleMaps';
// Functions
import { beautifyJSONStatus } from '../../js/functions/beautifyJSON';
// State
import { parcelListState } from '../../state/parcelListState-atom';

function Parcel() {
  const { id } = useParams(); // url:id
  const parcelListData = useRecoilValue(parcelListState); // Array of Parcels from previous API call.
  const parcel = parcelListData.find(parcel => parcel.parcel_id === id);

  const eta = parcel.status !== 'delivered' ? parcel.eta.substring(0, 10) : null;

  return (
    <div className="body parcel-body">
      <Link to="/parcels">
        <Button circular className="back-button" icon="arrow left" />
      </Link>
      <div className="parcel-page-card effect7 effect8">
        <h2>Parcel: {parcel.parcel_id}</h2>

        <div className="parcel-status">
          <span>
            <span className="pl-head">Status:</span> {beautifyJSONStatus(parcel.status)}
          </span>
          <span>
            <span className="pl-head">ETA:</span> {eta}
          </span>

          <span className="parcel-sender">
            <span className="pl-head">Sender:</span> {parcel.sender}
          </span>
          <span>
            <span className="pl-head">Location:</span> {parcel.location_name}
          </span>
        </div>
        <div className="notes">
          <div className="pl-head">Notes:</div>
          {parcel.notes === null ? 'None' : parcel.notes}
        </div>

        <div className="maps">
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
