import React from "react";
import GoogleMapReact from "google-map-react";

import Marker from "./Marker";

export default function Map({ coordinates, location }) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDRH7rjn8Chud0hgDk5JJ3IRAOfD3qsIl8" }}
        defaultCenter={coordinates}
        defaultZoom={15}
      >
        <Marker
          lat={coordinates.lat}
          lng={coordinates.lng}
          text={location}
        />
      </GoogleMapReact>
    </div>
  );
}
