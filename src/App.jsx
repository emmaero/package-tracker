import React from "react"; // not neccesary to import since React v17
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Project files
import OrderDetail from "./pages/OrderDetail";
import OrderPage from "./pages/OrderPage";
import HomePage from "./pages/HomePage";
import "./styles/style.css";

// even if the default componet made from Create React App exports in 2 lines, refactor it to be single line using export default function App(){}
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/orders" component={OrderPage} />
          <Route path="/order-detail/:parcel_id" component={OrderDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
