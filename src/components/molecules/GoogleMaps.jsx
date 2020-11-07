// React Libraries
import React from 'react';
// GoogleMapsReact Component
import GoogleMapReact from 'google-map-react';

// Quick map marker, details below*
const MapMarker = () => (
  <i style={{ fontSize: '32pt' }} className="fas fa-map-marker-alt"></i>
);

function GoogleMaps({ latitude, longitude }) {
  const mapSettings = { center: { lat: latitude, lng: longitude }, zoom: 12 };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
        defaultCenter={mapSettings.center}
        defaultZoom={mapSettings.zoom}>
        <MapMarker lat={latitude} lng={longitude} />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMaps;

/* Some quick Notes: 
The google api expects a "center" object with the properties "lat" and "lng", hence
the usage of the mapSettings object.

The styling height/width has to be set here to fill the parent container or the map
will collapse. It's a google thing. Sorry Eduardo 🙈

More info: https://www.npmjs.com/package/google-map-react

MapMarker: I'm using font-awesome for the marker. For whatever reason I can not 
alter the font size outside the component, I can however alter other properties such as 
colour. The size is thus hard-coded until I find the solution. 
*/
