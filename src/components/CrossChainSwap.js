import React from "react";

function CrossChainSwap() {
  return (
    <div className="fade show">
      <div className="frontpage_right_site">
        <div className="mobile_menu"></div>
        <div className="margin_trade_upto5x_contents_all">
          <div className="margin_trade_title trade_bridge_title">
            <h1>CROSS CHAINSWAP</h1>
          </div>
          <div className="margin_trade_image_and_box">
            <div className="margin_trade_img crosschain_swap_img">
              <img
                src={require("../assets/images/crosschain-swap.png")}
                alt=""
              />
            </div>
            <div className="margin_trade_box token_bridge_box">
              <h3>Swap to and fro diffrent chains we operate</h3>
              <div className="margin_trade_boxp">
                <p>BSC&lt;&gt;POLYGON</p>
                <p>BSC&lt;&gt;FANTOM</p>
                <p>BSC&lt;&gt;AVALANCHE</p>
                <p>BSC&lt;&gt;ARBRITRUM</p>
              </div>
              <div className="nft_staking_btns margin_trade_btn lend_and_borrow_btn">
                <a href="#">Swap now</a>
              </div>
            </div>
          </div>
          <div className="nft_staking_contents margin_trade_contents">
            <p>
              THE PORTAL ENABLES USERS TO SWAP GEMZS TOKENS TO AND FRO CHAINS
              THAT WE SUPPORT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrossChainSwap;
