import delivered from "../assets/icons/check-solid.svg";
import onTheWay from "../assets/icons/truck-solid.svg";
import readyForPickup from "../assets/icons/box-solid.svg";
import orderInfoReceived from "../assets/icons/paper-plane-solid.svg";

export function iconChooser(status) {
  switch (status) {
    case "ready-for-pickup":
      return readyForPickup;
    case "on-the-way":
      return onTheWay;
    case "delivered":
      return delivered;
    case "order-info-received":
      return orderInfoReceived;
    default:
      return "";
  }
}
export function statusStringConverter(status) {
  switch (status) {
    case "ready-for-pickup":
      return 'Ready for pickup';
    case "on-the-way":
      return 'On the way';
    case "delivered":
      return 'delivered';
    case "order-info-received":
      return 'Order info received';
    default:
      return "";
  }
}
