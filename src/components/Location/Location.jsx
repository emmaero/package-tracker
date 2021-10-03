import React from "react";
import Map from "./Map";

// This component can be fused with Map.jsx -1
export default function Location({ item }) {
  const {
    location_coordinate_latitude,
    location_coordinate_longitude,
    location_name,
  } = item;
  const coordinates = {
    lat: location_coordinate_latitude,
    lng: location_coordinate_longitude,
  };
  return (
    <section className="location">
      <Map coordinates={coordinates} location={location_name} />
    </section>
  );
}
