import React from "react";

function MarginTrade() {
  return (
    <div className="fade show">
      <div className="frontpage_right_site">
        <div className="mobile_menu"></div>
        <div className="margin_trade_upto5x_contents_all">
          <div className="margin_trade_title">
            <h1>MARGIN TRADE UP TO 5X LEVERAGE</h1>
          </div>
          <div className="margin_trade_image_and_box">
            <div className="margin_trade_img">
              <img src={require("../assets/images/margin-trade.png")} alt="" />
            </div>
            <div className="margin_trade_box margin_trade_box2">
              <h3>MARGIN TRADE UP TO 5X</h3>
              <div className="nft_staking_btns margin_trade_btn">
                <a href="#">MARGIN TRADE</a>
              </div>
            </div>
          </div>
          <div className="nft_staking_contents margin_trade_contents">
            <p>
              THE PERMISSIONLESS PORTAL ENABLES USERS TO MARGIN TRADE(LONG AND
              SHORT) GEMZS TOKENS UP TO 5X LEVERAGE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarginTrade;
