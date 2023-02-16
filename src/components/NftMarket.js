import React from "react";

function NftMarket() {
  return (
    <div className="fade show">
      <div className="frontpage_right_site">
        <div className="mobile_menu"></div>
        <div className="orderbook_exchange_page nft_market_page">
          <div className="nft_market_single_box">
            <div className="nft_market_single_box_title">
              <h1>OPENSEA NFT MARKETPLACE</h1>
            </div>
            <div className="nft_market_single_box_contents">
              <div className="nft_marketsbcon_img">
                <a href="#">
                  <img src={require("../assets/images/opensea.png")} alt="" />
                </a>
                <p>NOT LIVE</p>
              </div>
              <div className="margin_trade_box token_bridge_box orderbook_exchangesbcons_right nft_market_btnbox">
                <h3>Trading GEMZNFT</h3>
                <div className="nft_staking_btns margin_trade_btn lend_and_borrow_btn">
                  <a href="#">Trade now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="nft_market_single_box">
            <div className="nft_market_single_box_title">
              <h1>GEMZS MARKETPLACE</h1>
            </div>
            <div className="nft_market_single_box_contents">
              <div className="nft_marketsbcon_img nft_marketsbcon_img2">
                <img
                  src={require("../assets/images/orderbook-exchange.png")}
                  alt=""
                />
                <p>NOT LIVE</p>
              </div>
              <div className="margin_trade_box token_bridge_box orderbook_exchangesbcons_right">
                <h3>Trading GEMZNFT</h3>
                <div className="margin_trade_boxp">
                  <p>GEMZNFT</p>
                  <p>BEP20 TOKENS</p>
                </div>
                <div className="nft_staking_btns margin_trade_btn lend_and_borrow_btn">
                  <a href="#">Trade now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftMarket;
