import React from "react";
import Map from "./Map";

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
