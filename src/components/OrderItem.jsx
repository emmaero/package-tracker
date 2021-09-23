import React from "react";
import { Link } from "react-router-dom";
import { useOrder } from "../state/OrderProvider";

export default function OrderItem({ item }) {
  // Global state
  const { dispatch } = useOrder();

  const {parcel_id, status, sender } = item;
  function setOrder(parcelInfo) {
    dispatch({ type: "setOrder", parcelInfo });
  }
  return (
    <div className="order-item">
      <div className="icon-section">
        <div className="icon-wrapper"></div>
        <div className="order-sender">
          <p>{parcel_id}</p>
          <h3>{sender}</h3>
        </div>
      </div>
      <div>
        <h3>{status}</h3>
        <Link to={`/order-detail`}>
          <button className="button-main" onClick={() => setOrder(item)}>
            View details
          </button>
        </Link>
      </div>
    </div>
  );
}
