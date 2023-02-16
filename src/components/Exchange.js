import React from "react";

function Exchange() {
  return (
    <div className="fade show">
      <div className="frontpage_right_site">
        <div className="mobile_menu"></div>
        <div className="orderbook_exchange_page">
          <div className="orderbook_exchange_title">
            <h1>ORDER BOOK EXCHANGES</h1>
          </div>
          <div className="orderbook_exchange_single_box">
            <div className="orderbook_exchangesb_title">
              <p>
                DEMEX: cosmos carbon chain <span>NOT LIVE</span>
              </p>
            </div>
            <div className="orderbook_exchangesb_contents">
              <div className="orderbook_exchangesbcons_left">
                <img
                  src={require("../assets/images/orderbook-exchange.png")}
                  alt=""
                />
              </div>
              <div className="margin_trade_box token_bridge_box orderbook_exchangesbcons_right">
                <h3>Trading Pairs</h3>
                <div className="margin_trade_boxp">
                  <p>swth/Gemzs</p>
                  <p>bnb/Gemzs</p>
                  <p>busd/Gemzs</p>
                  <p>btc/Gemzs</p>
                  <p>eth/Gemzs</p>
                </div>
                <div className="nft_staking_btns margin_trade_btn lend_and_borrow_btn">
                  <a href="#">Trade now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="orderbook_exchange_single_box">
            <div className="orderbook_exchangesb_title">
              <p>
                OPEN SERUM: SOLANA chain <span>NOT LIVE</span>
              </p>
            </div>
            <div className="orderbook_exchangesb_contents">
              <div className="orderbook_exchangesbcons_left">
                <img
                  src={require("../assets/images/orderbook-exchange.png")}
                  alt=""
                />
              </div>
              <div className="margin_trade_box token_bridge_box orderbook_exchangesbcons_right">
                <h3>Trading Pairs</h3>
                <div className="margin_trade_boxp">
                  <p>swth/Gemzs</p>
                  <p>bnb/Gemzs</p>
                  <p>busd/Gemzs</p>
                  <p>btc/Gemzs</p>
                  <p>eth/Gemzs</p>
                </div>
                <div className="nft_staking_btns margin_trade_btn lend_and_borrow_btn">
                  <a href="#">Trade now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="orderbook_exchange_single_box">
            <div className="orderbook_exchangesb_title">
              <p>
                CEX: will be announced <span>NOT LIVE</span>
              </p>
            </div>
            <div className="orderbook_exchangesb_contents">
              <div className="orderbook_exchangesbcons_left">
                <img
                  src={require("../assets/images/orderbook-exchange.png")}
                  alt=""
                />
              </div>
              <div className="margin_trade_box token_bridge_box orderbook_exchangesbcons_right">
                <h3>Trading Pairs</h3>
                <div className="margin_trade_boxp">
                  <p>swth/Gemzs</p>
                  <p>bnb/Gemzs</p>
                  <p>busd/Gemzs</p>
                  <p>btc/Gemzs</p>
                  <p>eth/Gemzs</p>
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

export default Exchange;
