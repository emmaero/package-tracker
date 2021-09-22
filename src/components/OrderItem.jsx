import React from "react";
import { Link } from "react-router-dom";
import { useOrder } from "../state/OrderProvider";

export default function OrderItem({ item }) {
  // Global state
  const { order, dispatch } = useOrder();

  const { id, parcel_id, status, sender } = item;
  function setOrder(parcelInfo) {
    dispatch({ type: "setOrder", parcelInfo });
  }
  return (
    <div key={id}>
      <div>
        <h3>{parcel_id}</h3>
        <h3>{status}</h3>
      </div>
      <div>
        <p>{sender}</p>
        <Link to={`/order-detail/${id}`}>
          <button className="button-main" onClick={() => setOrder(item)}>
            View details
          </button>
        </Link>
      </div>
    </div>
  );
}
