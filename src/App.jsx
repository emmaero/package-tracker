import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Project files
import OrderDetail from "./pages/OrderDetail";
import OrderScreen from "./pages/OrderScreen";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="logo">InstaPaket</h1>
      </header>
      <Router>
        <Switch>
          <Route path="/order-detail/" component={OrderDetail} />
          <Route path="/" exact component={OrderScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
