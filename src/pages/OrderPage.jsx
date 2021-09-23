import React, { Fragment, useState, useEffect } from "react";
import OrderItem from "../components/OrderItem";
import truck from "../assets/image/cherry-truck.png";
import savedData from "../data/sampleData.json";

export default function OrderScreen() {
  const [orders, setOrders] = useState([]);
  const URL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return savedData;
        }
      })
      .then((list) => setOrders(list));
  }, []);
  const orderList = orders.map((item) => (
    <OrderItem key={item.id} item={item} />
  ));
  return (
    <Fragment>
      <header>
        <nav>
          <span className="logo">InstaPaket</span>
        </nav>
        <div className="header-container">
          <div className="titles">
            <h1>Deliveries for </h1>
          </div>
          <img src={truck} alt="package truck" />
        </div>
      </header>
      <div className="container order-list">{orderList}</div>
    </Fragment>
  );
}
