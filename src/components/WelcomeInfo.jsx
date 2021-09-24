import React from "react";
import { Link } from "react-router-dom";

export default function WelcomeInfo({ name }) {
  return (
    <div>
      <h2>
        Hi <span className="reciever_name">{name},</span> welcome to insta Packet
      </h2>
      <Link to={"/orders"}>
        <button className="button-home">View orders</button>
      </Link>
    </div>
  );
}
