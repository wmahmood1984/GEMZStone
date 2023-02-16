import React from "react";

function LendAndBorrow() {
  return (
    <div className="fade show">
      <div className="frontpage_right_site">
        <div className="mobile_menu"></div>
        <div className="margin_trade_upto5x_contents_all">
          <div className="margin_trade_title">
            <h1>LENDING PROTOCOL</h1>
          </div>
          <div className="margin_trade_image_and_box">
            <div className="margin_trade_img">
              <img
                src={require("../assets/images/land-and-borrow.png")}
                alt=""
              />
            </div>
            <div className="margin_trade_box margin_trade_box2">
              <h3>LENDING PROTOCOL</h3>
              <div className="nft_staking_btns lend_and_borrow_btn">
                <a href="#">LEND AND BORROW</a>
              </div>
            </div>
          </div>
          <div className="nft_staking_contents margin_trade_contents">
            <p>
              THE PERMISSIONLESS PORTAL ENABLES USERS TO LEND GEMZS TOKENS FOR
              INTEREST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LendAndBorrow;
