import { useHistory } from "react-router-dom";
import { useOrder } from "../state/OrderProvider";
import Location from "../components/Location/Location";
import { convertToDateText } from "../scripts/stringDateConverter";

export default function OrderDetail({ match }) {
  const { parcel_id } = match.params;
  const { orders } = useOrder();
  const order = orders.find((item) => item.parcel_id === parcel_id);
  const { sender, location_name, last_updated, notes, eta } = order;
  const history = useHistory();
  function goToPreviousPath() {
    history.goBack();
  }
  return (
    <div className="page">
      <header>
        <nav>
          <span className="logo">InstaPaket</span>
        </nav>
        <h2 className="margin-left">Order Detail</h2>
      </header>
      <div className="container order-page-content">
        <button className="button-main" onClick={goToPreviousPath}>
          Back
        </button>
        <div className="detail-content">
          <div className="order-detail">
            <h3>Delivery from</h3>
            <h2>{sender}</h2>
            <h3>Location</h3>
            <h2>{location_name}</h2>
            <h3>Arriving</h3>
            <h2>{convertToDateText(eta)}</h2>
            <h3>Last updated</h3>
            <h2>{convertToDateText(last_updated)}</h2>
            <p>{notes}</p>
          </div>
          <Location item={order} />
        </div>
      </div>
    </div>
  );
}
