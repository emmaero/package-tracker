// NPM files
import React, { useEffect } from "react";
import OrderReducer from "./OrderReducer";
import { useContext, useReducer} from "react";
import savedData from "../data/sampleData.json"

//script
import STORAGE_KEY from "../scripts/storageKey";

const OrderContext = React.createContext(null);
export function OrderProvider(props) {

  // Global state
  const [orders, dispatch] = useReducer(OrderReducer, loadOrder(STORAGE_KEY));
   const URL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  // useEffect(() => saveOrder(STORAGE_KEY, order), [order]);
    useEffect(() => {
      fetch(URL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return savedData;
          }
        })
        .then((list) => saveOrder(STORAGE_KEY, list));
    }, [orders]);
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
