import React from "react";
import { Link } from "react-router-dom";
//Project files
import { iconChooser, statusStringConverter } from "../scripts/statusConverter";

export default function OrderItem({ item }) {
  // Global state

  const { parcel_id, status, sender } = item;

  const iconType = iconChooser(status);
  const statusText = statusStringConverter(status);

  return (
    <div className="order-item">
      <div className="icon-section">
        <div className="icon-wrapper">
          <img src={iconType} alt="" />
        </div>
        <div className="order-sender">
          <p>{parcel_id}</p>
          <h3>{sender}</h3>
        </div>
      </div>
      <div>
        <h3>{statusText}</h3>
        <Link to={`/order-detail/${parcel_id}`}>
          <button className="button-main">View details</button>
        </Link>
      </div>
    </div>
  );
}
