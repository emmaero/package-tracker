import { useState, useEffect } from "react";
import { useOrder } from "../state/OrderProvider";
import savedData from "../data/sampleData.json";
import WelcomeInfo from "../components/WelcomeInfo";

export default function HomePage() {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const { orders, dispatch } = useOrder();
  const URL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  function saveOrders(orderList) {
    dispatch({ type: "setOrder", orderList });
  }

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return savedData;
        }
      })
      .then((json) => {
        saveOrders(json);
        setLoadingStatus(false);
      })
      .catch((error) => {
        console.log("error data:", error);
      });
  }, []);

  return (
    <div className="home-page">
      <nav>
        <span className="logo">InstaPaket</span>
      </nav>

      {/* Here you dont handle an error scenario -1 */}
      {/* Example here the app just hangs up if the server is down or if i simulate that by disabling the wifi */}
      <div className="home-page-body">
        {loadingStatus ? (
          <p>Loading...</p>
        ) : (
          <WelcomeInfo name={orders[0].user_name} />
        )}
      </div>
    </div>
  );
}
