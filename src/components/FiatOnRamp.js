import React from "react";

function FiatOnRamp() {
  return (
    <div className="fade show">
      <div className="frontpage_right_site">
        <div className="mobile_menu"></div>
        <h3 style={{ textAlign: "center" }}>
          <span style={{ fontSize: "24px" }}>Stay tuned</span>
        </h3>
        <center>
          <p>
            <img
              src={require("../assets/images/comingsoon.jpg")}
              alt=""
              width="100%"
              height="100%"
            />
          </p>
        </center>
      </div>
    </div>
  );
}

export default FiatOnRamp;
