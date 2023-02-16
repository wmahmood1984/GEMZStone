/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Home() {
  return (
    <div>
      <div className="fade show">
        {/*///////////////////////// Start 'Home' Tab Contents /////////////////////////*/}
        <div className="frontpage_right_site">
          <div className="right_site_self_maining border_style">
            <h2>
              SELF MINING <br />
              63% OF UNMINED SUPPLY ALLOCATED TO THE COMMUNITY
            </h2>
            <div className="right_site_self_maining_middle">
              <div className="rssmm_f">
                <ul>
                  <li># No Mining rig required</li>
                  <li># Zero and No Staking requirement needed.</li>
                  <li># Different Flexible method to choose from.</li>
                  <li># All you need is a BSC wallet Address</li>
                  <li>
                    # A project that gives a usecase/life to any dead token and
                    project
                  </li>
                </ul>
                <img
                  src={require("../assets/images/self-maining.gif")}
                  alt=""
                />
              </div>
              <div className="right_site_self_maining_btns">
                <a
                  href="./self-mining"
                  id="start_mining_btn"
                  className="border_style"
                >
                  START MINING
                </a>
                <a href="#" className="border_style">
                  PINKSALE FAIRLAUNCH BSC
                </a>
                <a
                  href="https://docs.google.com/spreadsheets/d/1tKCk53Hm8qUtlNhl9pVEDfG4bNfygKtvIEWPrCYy0qM/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="border_style"
                >
                  CHECK WHITELIST SHEET
                </a>
              </div>
            </div>
          </div>
          <div className="right_site_exchange_all">
            <div className="right_site_exchange">
              <div className="right_site_exchange_single right_site_exchange_single1st">
                <p>
                  The Gemzstone Project is born out of the idea of wanting to be
                  the go to shop for anything Decentralized Finance.
                </p>
                <p>
                  We aim to make our presence felt in at least 3 chains. BSC,
                  Polygon and Solana for now.More chains will be added as
                  usecases are created.
                </p>
              </div>
              <div className="right_site_exchange_single border_style">
                <h5>EXCHANGE</h5>
                <p>
                  There is an orderbook dex where Gemzstone token can be traded
                  in diffrent markets
                </p>
                <a href="./exchange" id="exchange_btn">
                  Trade
                </a>
              </div>
              <div className="right_site_exchange_single border_style">
                <h5>FAIR LAUNCH</h5>
                <p>
                  To make the project launch as fair as possible. A fair launch
                  will been conducted for price discovery.{" "}
                </p>
                <a href="./fair-launch" id="join_fair_launch_btn">
                  Join fair Launch
                </a>
              </div>
              <div className="right_site_exchange_single rscslbtn border_style">
                <h4>PREDICTIONS GAME APPS</h4>
                <a href="#">PREDICT $ WIN</a>
              </div>
            </div>
            <div className="right_site_exchange right_site_exchange2">
              <div className="right_site_exchange_single right_site_exchange_single1st">
                <p>
                  The Gemzstone Project aims to give every coins and token in
                  the crypto space most especially dead and forgotten token some
                  use case.
                </p>
                <p>
                  The project seeks to launch in a fair and transparent manner.{" "}
                  <br />
                  Join us to build <br />
                  THE GEMZSTONE PROJECT.
                </p>
              </div>
              <div className="right_site_exchange_single border_style">
                <h5>SWAP $ LP</h5>
                <p>
                  Make use of our AMM Dex for quick swaping and Liquidity
                  Provision
                </p>
                <a href="swap-lp" id="swap_btn">
                  swap
                </a>
              </div>
              <div className="right_site_exchange_single border_style">
                <h5>CROSS CHAIN SWAPS</h5>
                <p>
                  Make use of our CROSS CHAIN SWAP for swapping tokens from one
                  chain to another.
                </p>
                <a href="./cross-chainswap" id="chain_swaps_btn">
                  Launch
                </a>
              </div>
              <div className="right_site_exchange_single rscslbtn rscslbtn2 border_style">
                <a href="./margin-trade-gemzs" id="margin_trade_btn">
                  Margin Trading GEMZS
                </a>
                <a href="./lend-borrow-gemzs" id="lending_borrowing_btn">
                  Lending and Borrowing GEMZS
                </a>
              </div>
            </div>
          </div>
          <div className="right_site_tokenbridge">
            <div className="right_site_tokenbridge_left">
              <div className="right_site_exchange">
                <div className="right_site_exchange_single border_style">
                  <h5>TOKEN BRIDGE</h5>
                  <p>
                    The GEMZSTONE PROJECT is a MULTIchain project so this tool
                    is needed to bridge our tokens to and fro chains we are
                    connected to.
                  </p>
                  <a href="token-bridge" id="token_bridge_btn">
                    Bridge
                  </a>
                </div>
                <div className="right_site_exchange_single border_style">
                  <h5>ARBRITAGE OPPORTUNITY</h5>
                  <p>
                    Our bridged asset will definitly trade on the chain there
                    are. you will want to keep an eye on the prices for any
                    price change
                  </p>
                  <a href="arb-opportunity" id="arb_oppertunity_btn">
                    Check now
                  </a>
                </div>
                <div className="right_site_exchange_single border_style">
                  <h5>NFT MINTING</h5>
                  <p>
                    Mint our special edition NFT and gain Access to our
                    Metaverse and Token gated Contents
                  </p>
                  <a href="nft-minting" id="nft_mining_btn">
                    Mint
                  </a>
                </div>
                <div className="right_site_exchange_single border_style">
                  <h5>NFT MARKET</h5>
                  <p>
                    A place to buy and sell your NFT for any token of your
                    choice
                  </p>
                  <a href="nft-market" id="nft_market_btn">
                    Go to Market
                  </a>
                </div>
              </div>
            </div>
            <div className="right_site_tokenbridge_right border_style">
              <div className="right_site_tokenbridge_right_contents ">
                <div className="rstrc_title">
                  <h5>TOKENOMICS AND USECASE</h5>
                </div>
                <div className="rstrc_contents">
                  <p>Total Supply: 1,500,000 (100%)</p>
                  <p className="rstrcc_mt">Distribution</p>
                  <p>Fair launch:200,000. (~13%)</p>
                  <p>
                    Admin/dev: 0. Admin/Dev will have to buy from the market and
                    mine like every other user. (0%)
                  </p>
                  <p>Airdrop: 50,000. (~3%)</p>
                  <p>Staking Allocations: 200,000. (~13%)</p>
                  <p>Initial Developement/marketing: 100,000. (~7%)</p>
                  <p>
                    Unmined tokens: 950,000 to be mined by the community. (~63%)
                  </p>
                </div>
                <div className="rstrc_title rstrc_title2">
                  <h5>
                    USECASE:The tokens will be needed to access many of the
                    platform products.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="right_site_metaverse">
            <div className="right_site_exchange_single rsmet_bs border_style">
              <h5>TOKEN GATED CONTENT</h5>
              <p>
                Well if you have our limited NFT collection. Then you can enjoy
                the perks and benefits within this zone
              </p>
              <a href="./token-gated-contents" id="token_gated_contents_btn">
                ENJOY
              </a>
            </div>
            <div className="right_site_metaverse_right border_style">
              <div className="rsmr_left">
                <h4>METAVERSE</h4>
                <p>
                  We have some metaverses spaces where only token holders can go
                  to enjoy some perks. Its a must visit to our metaverse spaces
                </p>
                <a href="./metaverse" id="metaverse_btn">
                  EXPLORE
                </a>
              </div>
              <div className="fsmr_right">
                {/*<img src={require("../assets/images/metaverse.png" alt="">*/}
                {/*<video width="100%" height="100%" controls>
                    <source src={require("../assets/images/blox.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                    </video>*/}
                <iframe
                  title="Hello"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/19ckvj6Vvtw"
                />
              </div>
            </div>
          </div>
          <div className="right_site_lock">
            <div className="right_site_exchange_single rsmet_bs rslobox border_style">
              <h4>LOCKED STAKING</h4>
              <p>Get APY up to 180%</p>
              <a href="./staking" id="locked_staking_btn">
                STAKE GEMZS
              </a>
            </div>
            <div className="right_site_exchange_single rsmet_bs rslobox border_style">
              <h4>NFT STAKING</h4>
              <p>Users will be able to stake their NFTs for more reward</p>
              <a href="./nft-staking" id="nft_staking_btn">
                STAKE NFT
              </a>
            </div>
            <div className="rslockboxs rslobox border_style">
              <h4>ROADMAP</h4>
              <h4>
                <br />
              </h4>
              <p>
                <a
                  href={require("../assets/images/1.pdf")}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Phase One
                </a>
              </p>
              <p>
                <a
                  href={require("../assets/images/2.pdf")}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Phase Two
                </a>
              </p>
              <p>
                <a
                  href={require("../assets/images/3.pdf")}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Phase Three
                </a>
              </p>
              <p>
                <a
                  href={require("../assets/images/4.pdf")}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Phase Four
                </a>
              </p>
              <p>
                <a
                  href={require("../assets/images/5.pdf")}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Phase Five
                </a>
              </p>
              <p>
                <a
                  href={require("../assets/images/6.pdf")}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Phase Six
                </a>
              </p>
              <p className="rslockboxs_mm">
                <br />
              </p>
              <p>
                <br />
              </p>
              <p className="rslockboxs_mm">
                <br />
              </p>
            </div>
            <div className="rslockboxs rslobox border_style">
              <h4>SMART CONTRACTS AND AUDITS</h4>
              <h4>
                <br />
              </h4>
              <p>
                <a href="#">All Deployed Contracts</a>
              </p>
              <p className="rslockboxs_mm">
                <br />
              </p>
              <p>
                <br />
              </p>
              <p className="rslockboxs_mm">
                <br />
              </p>
            </div>
            <div className="rslockboxs rslobox border_style">
              <h4>TRANSPARENCY REPORT</h4>
              <h4>
                <br />
              </h4>
              <p>
                <a href="#" rel="noopener noreferrer" target="_blank">
                  Admin Wallet
                </a>
              </p>
              <p className="rslockboxs_mm">
                <br />
              </p>
              <p>
                <br />
              </p>
              <p className="rslockboxs_mm">
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
