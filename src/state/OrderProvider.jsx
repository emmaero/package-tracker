// NPM files
import React, { useEffect } from "react";
import OrderReducer from "./OrderReducer";
import { useContext, useReducer } from "react";

//script
import STORAGE_KEY from "../scripts/storageKey";
// const STORAGE_KEY = process.env.REACT_APP_ORDER_API;
const OrderContext = React.createContext(null);
export function OrderProvider(props) {
  // Global state
  const [orders, dispatch] = useReducer(OrderReducer, loadOrder(STORAGE_KEY));
  useEffect(() => saveOrder(STORAGE_KEY, orders), [orders]);

  return (
    <OrderContext.Provider value={{ orders, dispatch }}>
      {props.children}
    </OrderContext.Provider>
  );
}
export function useOrder() {
  const context = useContext(OrderContext);

  return context;
}
function loadOrder(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

function saveOrder(key, orders) {
  sessionStorage.setItem(key, JSON.stringify(orders));
}
