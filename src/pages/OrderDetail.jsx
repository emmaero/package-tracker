import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useOrder } from "../state/OrderProvider";
import Location from "../components/Location/Location";

export default function OrderDetail(props) {
  const { order } = useOrder();
  console.log(order);
  const history = useHistory();
  function goToPreviousPath() {
    history.goBack();
  }
  return (
    <Fragment>
      <header>
        <nav>
          <span className="logo">InstaPaket</span>
        </nav>
      </header>
      <div className="container order-page-content">
        <button className="button-main" onClick={goToPreviousPath}>
          Back
        </button>
        <div className="order-detail">
          <h3>Delivery from</h3>
          <h2>{order.sender}</h2>
          <h3>Location</h3>
          <h2>{order.location_name}</h2>
          <h3>Arriving</h3>
          <h2>{order.eta}</h2>
          <h3>Last updated</h3>
          <h2>{order.last_updated}</h2>
          <p>{order.notes}</p>
          <Location item={order} />
        </div>
      </div>
    </Fragment>
  );
}
