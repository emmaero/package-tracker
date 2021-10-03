import React from "react";

// No need to have this extra componet if everything fits in less than 50 lines
export default function Marker({ text }) {
  const style = {
    display: "flex",
    flexDirection: "column",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={style}>
      <div className="marker">
        <h3>{text}</h3>
      </div>
    </div>
  );
}
