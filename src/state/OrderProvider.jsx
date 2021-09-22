import React from "react";
import OrderReducer from "./OrderReducer";
import { useContext, useReducer } from "react";

const OrderContext = React.createContext(null);
export function OrderProvider(props) {
  const [order, dispatch] = useReducer(OrderReducer, {});
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
