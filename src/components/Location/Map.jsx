import React from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";

export default function Map({ coordinates, location }) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBFwsfZ3HAaqMgyd3cwSK9noUYpDOnDjhY" }}
        defaultCenter={coordinates}
        defaultZoom={15}
      >
        <MapMarker
          lat={coordinates.lat}
          lng={coordinates.lng}
          text={location}
        />
      </GoogleMapReact>
    </div>
  );
}
