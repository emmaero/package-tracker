import React from "react";
import { useHistory } from "react-router-dom";
import { useOrder } from "../state/OrderProvider";

export default function OrderDetail() {
  const { order } = useOrder();
  console.log(order);
  const history = useHistory();
  function goToPreviousPath() {
    history.goBack();
  }
  return (
    <div>
      <button className="button-main" onClick={goToPreviousPath}>Back</button>
    </div>
  );
}
