import OrderItem from "../components/OrderItem";
import truck from "../assets/image/cherry-truck.png";
import { useOrder } from "../state/OrderProvider";

export default function OrderScreen() {
  const { orders } = useOrder();

  const orderList = orders.map((item) => (
    <OrderItem key={item.id} item={item} />
  ));
  return (
    <div className="page">
      <header>
        <nav>
          <span className="logo">InstaPaket</span>
        </nav>
        <div className="header-container">
          <div className="titles">
            <h1>Deliveries for </h1>
            <h2 className="reciever_name">{orders[0].user_name}</h2>
          </div>
          <img src={truck} alt="package truck" />
        </div>
      </header>
      <div className="container order-list">{orderList}</div>
    </div>
  );
}
