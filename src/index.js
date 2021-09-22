import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { OrderProvider } from "./state/OrderProvider";

ReactDOM.render(
  <React.StrictMode>
    <OrderProvider>
      <App />
    </OrderProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
