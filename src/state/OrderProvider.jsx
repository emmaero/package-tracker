// NPM files
import React, { useEffect } from "react";
import OrderReducer from "./OrderReducer";
import { useContext, useReducer } from "react";

//script
import STORAGE_KEY from "../scripts/storageKey";

const OrderContext = React.createContext(null);
export function OrderProvider(props) {
  // Global state
  const [order, dispatch] = useReducer(OrderReducer, loadOrder(STORAGE_KEY));
  useEffect(() => saveOrder(STORAGE_KEY, order), [order]);
  return (
    <OrderContext.Provider value={{ order, dispatch }}>
      {props.children}
    </OrderContext.Provider>
  );
}
export function useOrder() {
  const context = useContext(OrderContext);

  return context;
}
function loadOrder(key) {
  return JSON.parse(localStorage.getItem(key));
}

function saveOrder(key, order) {
  localStorage.setItem(key, JSON.stringify(order));
}
