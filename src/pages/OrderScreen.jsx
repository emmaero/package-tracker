import React, { Fragment, useState, useEffect } from "react";
import OrderItem from "../components/OrderItem";

export default function OrderScreen() {
  const [orders, setOrders] = useState([]);
  const URL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((list) => setOrders(list));
  }, []);
  console.log(orders);
  const orderList = orders.map((item) => (
    <OrderItem key={item.id} item={item} />
  ));
  return <Fragment>{orderList}</Fragment>;
}
