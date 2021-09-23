import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Project files
import OrderDetail from "./pages/OrderDetail";
import OrderPage from "./pages/OrderPage";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/order-detail/" component={OrderDetail} />
          <Route path="/" exact component={OrderPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
