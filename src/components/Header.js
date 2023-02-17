/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/normalize.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/fontawesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { Injected, WalletConnect } from "./connector";
import { getContract } from "../utils";
import { GEMZ, GEMZAbi, RouterAbi, RouterAdd } from "../config";
import { formatEther } from "ethers/lib/utils";
import { Contract } from "ethers";
import Web3 from "web3";
import axios from "axios";

var Header = function () {
  const { activate, library,account,chainId } = useWeb3React();
  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    React.useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  };

  const width = useWindowSize()[0];
  const [showMenu, setShowMenu] = useState(true);
  const [showWallet, setShowWallet] = useState(false);
  const [showNft, setShowNft] = useState(false);
  const [exchange, setExchange] = useState(false);
  const [showDefi, setShowDefi] = useState(false);
  const [utilities, setUtilities] = useState(false);
  const [games, setGames] = useState(false);
  const [Cap,setCap] = useState(0)
  const [cir,setCir] = useState(0)
  const [tMiners,setTminers] = useState(0)
  const [wBalance,setWBalance] = useState(0)
  const [allPool,setAllPool] = useState(0)
  const [unMined,setUnMined] = useState(0)
  const [EPD,setEPD] = useState(700)
  const [Price,setPrice] = useState(0)



const web3 = new Web3(Web3.givenProvider)
const GEMZContract = new web3.eth.Contract(GEMZAbi,GEMZ)
const Router = new web3.eth.Contract(RouterAbi,RouterAdd)




useEffect(()=>{
  if(localStorage.getItem("Connected")){
    activate(Injected)
  }
  const abc = async ()=>{
   
    const _cap = await GEMZContract.methods.cap().call()

    setCap(Number(formatEther(_cap)).toFixed(2))
    const _cir = await GEMZContract.methods.totalSupply().call()
   // console.log("data",formatEther(_cir))
    setCir(Number(formatEther(_cir)).toFixed(2))
    setUnMined(Number(formatEther(_cap) - formatEther(_cir) ).toFixed(2))
    var path = ["0x37c281d357e628b0fd4590166d7d34e16003ad8f","0xae13d989dac2f0debff460ac112a837c89baa7cd"]
    const _price = await Router.methods.getAmountsOut("1000000000000000000",path).call()

    const _bnbPrice = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd")
    setPrice((Number(formatEther(_price[1])).toFixed(4) * Number(_bnbPrice.data.binancecoin.usd)).toFixed(6))
  //  console.log("Price in bnb",_bnbPrice)


    if(account){
    const _bal = await GEMZContract.methods.balanceOf(account).call()
    setWBalance(Number(formatEther(_bal)).toFixed(2))
  }
  
  }
  abc()
  
  },[account])




  useEffect(() => {
    width < 1200 ? setShowMenu(false) : setShowMenu(true);
  }, [width]);

  // Toggle NFT
  const toggleNft = () => {
    setShowNft(!showNft);
    setExchange(false);
    setShowDefi(false);
    setUtilities(false);
    setGames(false);
  };

  const toggleExchange = () => {
    setExchange(!exchange);
    setShowNft(false);
    setShowDefi(false);
    setUtilities(false);
    setGames(false);
  };

  const toggleDefi = () => {
    setShowDefi(!showDefi);
    setShowNft(false);
    setExchange(false);
    setUtilities(false);
    setGames(false);
  };

  const toggleUtilities = () => {
    setUtilities(!utilities);
    setShowNft(false);
    setExchange(false);
    setShowDefi(false);
    setGames(false);
  };

  const toggleGames = () => {
    setGames(!games);
    setUtilities(false);
    setShowNft(false);
    setExchange(false);
    setShowDefi(false);
  };

  // console.log("Library", library);
  // console.log("Account", account);
  // console.log("Chain", chainId);

  return (
    <div>
      <title>Gemstone Project</title>

      <div className="main_parent frontpage_main">
        {/*########################################  Start Left Site  ########################################*/}
        {showMenu && width < 1200 && (
          <div className="left_site_main">
            <div
              className="left_site_hide_btn"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              style={{ cursor: "pointer", color: "white", fontSize: "25px" }}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            <div
              className="left_site_tabs nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <div className="logo_main">
                <a href="#">
                  <img
                    src={require("../assets/images/logo.png")}
                    alt="logoImage"
                  />
                </a>
              </div>
              <span
                onClick={() => {
                  setShowWallet(!showWallet);
                }}
                className="lstabs_dropdown"
              >
                {account  ? `${account.slice(0,5)}...${account.slice(-4)}` :"CONNECT WALLET"}
              </span>
              {showWallet && (
                <div>
                  <a
                    onClick={() => {
                      activate(Injected);
                      console.log("clicked");
                      localStorage.setItem("Connected", true);
                    }}
                    className="nav-link btnimgfl metamask"
                  >
                    <img
                      src={require("../assets/images/metamask.png")}
                      alt=""
                    />{" "}
                    METAMASK
                  </a>
                  <a
                    onClick={() => {
                      activate(WalletConnect);
                      console.log("clicked");
                    }}
                    className="nav-link btnimgfl walletconnect"
                  >
                    <img
                      src={require("../assets/images/walletconnect.png")}
                      alt=""
                    />{" "}
                    walletconnect
                  </a>

                </div>
              )}
              <NavLink onClick={() => setShowMenu(false)} to="/">
                Home
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/airdrop">
                AIRDROP
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/fair-launch">
                FAIR LAUNCH
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/gemzs-chatAI">
                GEMZS CHAT AI
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/self-mining">
                SELF MINING
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/staking">
                STAKING UP TO 180% APY
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/fiat-on-ramp">
                FIAT ON RAMP (soon)
              </NavLink>
              <div className="dropdown_container">
                <div className="nft_text" onClick={toggleExchange}>
                  <span className="">EXCHANGE and DEX</span>
                  <span>
                    {exchange ? (
                      <i
                        className="fa-solid fa-chevron-up"
                        style={{ color: "white" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ color: "white" }}
                      ></i>
                    )}
                  </span>
                </div>
                {exchange && (
                  <div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink
                          onClick={() => setShowMenu(false)}
                          to="/swap-lp"
                        >
                          SWAP AND LP
                        </NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink
                          onClick={() => setShowMenu(false)}
                          to="/exchange"
                        >
                          ORDER BOOK DEX
                        </NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        <NavLink
                          onClick={() => setShowMenu(false)}
                          to="/margin-trade-gemzs"
                        >
                          MARGIN TRADE GEMZS UPTO 5X LEVERAGE
                        </NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink
                          onClick={() => setShowMenu(false)}
                          to="/lend-borrow-gemzs"
                        >
                          LEND $ BORROW GEMZS
                        </NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/arb-opportunity" onClick={() => setShowMenu(false)}>
                ARB OPPORTUNITY
              </NavLink>

              <div className="dropdown_container">
                <div className="nft_text" onClick={toggleNft}>
                  <span className="">nft collection</span>
                  <span>
                    {showNft ? (
                      <i
                        className="fa-solid fa-chevron-up"
                        style={{ color: "white" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ color: "white" }}
                      ></i>
                    )}
                  </span>
                </div>
                {showNft && (
                  <div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink
                          onClick={() => setShowMenu(false)}
                          to="/nft-minting"
                        >
                          NFT MINTING
                        </NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        <NavLink
                          onClick={() => setShowMenu(false)}
                          to="/nft-market"
                        >
                          NFT MARKET
                        </NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink
                          onClick={() => setShowMenu(false)}
                          to="/nft-staking"
                        >
                          NFT STAKING
                        </NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="dropdown_container">
                <div className="nft_text" onClick={toggleDefi}>
                  <span className="">defi tools</span>
                  <span>
                    {showDefi ? (
                      <i
                        className="fa-solid fa-chevron-up"
                        style={{ color: "white" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ color: "white" }}
                      ></i>
                    )}
                  </span>
                </div>
                {showDefi && (
                  <div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink
                          onClick={() => setShowMenu(false)}
                          to="/cross-chainswap"
                        >
                          CROSS CHAINSWAP
                        </NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        <NavLink
                          onClick={() => setShowMenu(false)}
                          to="/token-bridge"
                        >
                          TOKEN BRIDGE
                        </NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <NavLink
                onClick={() => setShowMenu(false)}
                to="/token-gated-contents"
              >
                TOKEN GATED CONTENTS
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/metaverse">
                METAVERSE
              </NavLink>

              <div className="dropdown_container">
                <div className="nft_text" onClick={toggleUtilities}>
                  <span className="">UTILITIES</span>
                  <span>
                    {utilities ? (
                      <i
                        className="fa-solid fa-chevron-up"
                        style={{ color: "white" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ color: "white" }}
                      ></i>
                    )}
                  </span>
                </div>
                {utilities && (
                  <div>
                    <div className="nav-child">
                      <span>
                        <NavLink onClick={() => setShowMenu(false)} to="/">
                          Coming Soon
                        </NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="dropdown_container">
                <div className="nft_text" onClick={toggleGames}>
                  <span className="">GAMES AND PREDICTIONS</span>
                  <span>
                    {games ? (
                      <i
                        className="fa-solid fa-chevron-up"
                        style={{ color: "white" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ color: "white" }}
                      ></i>
                    )}
                  </span>
                </div>
                {games && (
                  <div>
                    <div className="nav-child">
                      <span>
                        <NavLink onClick={() => setShowMenu(false)} to="/">
                          Coming Soon
                        </NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                onClick={() => setShowMenu(false)}
                to="/how-to-join-whitelist"
              >
                HOW TO JOIN WHITELIST
              </NavLink>
            </div>
            <div className="left_site_social">
              <ul>
                <li>
                  <a href="#">
                    <img src={require("../assets/images/social1.png")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../assets/images/social2.png")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../assets/images/social3.png")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../assets/images/social4.png")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../assets/images/social5.png")} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {showMenu && width > 1200 && (
          <div className="left_site_main">
            <div
              className="left_site_hide_btn"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              style={{ cursor: "pointer", color: "white", fontSize: "25px" }}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            <div
              className="left_site_tabs nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <div className="logo_main">
                <a href="#">
                  <img
                    src={require("../assets/images/logo.png")}
                    alt="logoImage"
                  />
                </a>
              </div>
              <span
                onClick={() => {
                  setShowWallet(!showWallet);
                }}
                className="lstabs_dropdown"
              >
                {account  ? `${account.slice(0,5)}...${account.slice(-4)}` :"CONNECT WALLET"}
              </span>

              {showWallet && (
                <div>
                  <a
                    onClick={() => {
                      activate(Injected);
                      console.log("clicked");
                      localStorage.setItem("Connected", true);
                    }}
                    className="nav-link btnimgfl metamask"
                  >
                    <img
                      src={require("../assets/images/metamask.png")}
                      alt=""
                    />{" "}
                    METAMASK
                  </a>
                  <a
                    onClick={() => {
                      activate(WalletConnect);
                      console.log("clicked");
                    }}
                    className="nav-link btnimgfl walletconnect"
                  >
                    <img
                      src={require("../assets/images/walletconnect.png")}
                      alt=""
                    />{" "}
                    walletconnect
                  </a>

                </div>
              )}

              <NavLink to="/">Home</NavLink>
              <NavLink to="/airdrop">AIRDROP</NavLink>
              <NavLink to="/fair-launch">FAIR LAUNCH</NavLink>
              <NavLink to="/gemzs-chatAI">GEMZS CHAT AI</NavLink>
              <NavLink to="/self-mining">SELF MINING</NavLink>
              <NavLink to="/staking">STAKING UP TO 180% APY</NavLink>
              <NavLink to="/fiat-on-ramp">FIAT ON RAMP (soon)</NavLink>
              <div className="dropdown_container">
                <div className="nft_text" onClick={toggleExchange}>
                  <span className="">EXCHANGE and DEX</span>
                  <span>
                    {exchange ? (
                      <i
                        className="fa-solid fa-chevron-up"
                        style={{ color: "white" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ color: "white" }}
                      ></i>
                    )}
                  </span>
                </div>
                {exchange && (
                  <div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink to="/swap-lp">SWAP AND LP</NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink to="/exchange">ORDER BOOK DEX</NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        <NavLink to="/margin-trade-gemzs">
                          MARGIN TRADE GEMZS UPTO 5X LEVERAGE
                        </NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink to="/lend-borrow-gemzs">
                          LEND $ BORROW GEMZS
                        </NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/arb-opportunity">ARB OPPORTUNITY</NavLink>
              <div className="dropdown_container">
                <div className="nft_text" onClick={toggleNft}>
                  <span className="">nft collection</span>
                  <span>
                    {showNft ? (
                      <i
                        className="fa-solid fa-chevron-up"
                        style={{ color: "white" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ color: "white" }}
                      ></i>
                    )}
                  </span>
                </div>
                {showNft && (
                  <div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink to="/nft-minting">NFT MINTING</NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        <NavLink to="/nft-market">NFT MARKET</NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink to="/nft-staking">NFT STAKING</NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="dropdown_container">
                <div className="nft_text" onClick={toggleDefi}>
                  <span className="">defi tools</span>
                  <span>
                    {showDefi ? (
                      <i
                        className="fa-solid fa-chevron-up"
                        style={{ color: "white" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ color: "white" }}
                      ></i>
                    )}
                  </span>
                </div>
                {showDefi && (
                  <div>
                    <div className="nav-child">
                      <span>
                        {" "}
                        <NavLink to="/cross-chainswap">CROSS CHAINSWAP</NavLink>
                      </span>
                    </div>
                    <div className="nav-child">
                      <span>
                        <NavLink to="/token-bridge">TOKEN BRIDGE</NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <NavLink to="/token-gated-contents">TOKEN GATED CONTENTS</NavLink>
              <NavLink to="/metaverse">METAVERSE</NavLink>

              <div className="dropdown_container">
                <div className="nft_text" onClick={toggleUtilities}>
                  <span className="">UTILITIES</span>
                  <span>
                    {utilities ? (
                      <i
                        className="fa-solid fa-chevron-up"
                        style={{ color: "white" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ color: "white" }}
                      ></i>
                    )}
                  </span>
                </div>
                {utilities && (
                  <div>
                    <div className="nav-child">
                      <span>
                        <NavLink to="/">Coming Soon</NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="dropdown_container">
                <div className="nft_text" onClick={toggleGames}>
                  <span className="">GAMES AND PREDICTIONS</span>
                  <span>
                    {games ? (
                      <i
                        className="fa-solid fa-chevron-up"
                        style={{ color: "white" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ color: "white" }}
                      ></i>
                    )}
                  </span>
                </div>
                {games && (
                  <div>
                    <div className="nav-child">
                      <span>
                        <NavLink to="/">Coming Soon</NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/how-to-join-whitelist">
                HOW TO JOIN WHITELIST
              </NavLink>
            </div>
            <div className="left_site_social">
              <ul>
                <li>
                  <a href="#">
                    <img src={require("../assets/images/social1.png")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../assets/images/social2.png")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../assets/images/social3.png")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../assets/images/social4.png")} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={require("../assets/images/social5.png")} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/*########################################  End Left Site  ########################################*/}
        {/*########################################  Start Right Site  ########################################*/}
        <div className="right_site_main tab-content" id="v-pills-tabContent">
          <div className="frontpage_right_site frontpage_right_site_top">
            <div className="right_site_title">
              {!showMenu && (
                <div className="mobile_menu">
                  <div onClick={() => setShowMenu(!showMenu)}>
                    <FontAwesomeIcon
                      style={{
                        border: "1px solid white",
                        borderRadius: "4px",
                        width: "30px",
                        height: "27px",
                        fontSize: "20px",
                        padding: "3px",
                      }}
                      class="fa-2xs"
                      icon={faBars}
                    />
                  </div>
                </div>
              )}
              {!showMenu && width > 1200 && (
                <div onClick={() => setShowMenu(!showMenu)}>
                  <FontAwesomeIcon
                    style={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      width: "40px",
                      height: "36px",
                      padding: "5px",
                    }}
                    class="fa-2xs"
                    icon={faBars}
                  />
                </div>
              )}

              <div className="right_site_title_text">
                <h2>THE GEMZSTONE PROJECT</h2>
                <p>
                  The best self mining, zero staking requirement contract and
                  its a project with a usecase for every coin and token. Making
                  use of permissionless protocols and tested open source codes
                  to create a unique product.
                </p>
              </div>
              <div className="right_site_title_contents">
                <div className="right_site_title_contents_boxs_all">
                  <ul>
                    <li>Max supply</li>
                    <li>Wallet Balance</li>
                    <li>All Pool Bal/Unmined Bal</li>
                  </ul>
                  <ul>
                    <li>{Cap} GEMZS</li>
                    <li>{wBalance} GEMZS</li>
                    <li>{allPool}/{unMined} GEMZS</li>
                  </ul>
                  <ul>
                    <li>Cir supply</li>
                    <li>Total Miners</li>
                    <li>Emission per Day</li>
                  </ul>
                  <ul>
                    <li>{cir} GEMZS</li>
                    <li>{tMiners} Miners</li>
                    <li>{EPD} GEMZS</li>
                  </ul>
                </div>
                <div className="right_site_title_contents_single">
                  <p>GEMZS Price: ${Price && Price}</p>
                </div>
                <marquee behavior="scroll" direction="left" id="mymarquee">
                  <p>
                    <span style={{ color: "rgb(85, 57, 130)" }}>
                      <a
                        href="https://github.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Need Ads?
                      </a>
                    </span>
                    <span style={{ color: "rgb(184, 49, 47)" }}>&nbsp;</span>
                    <span style={{ color: "rgb(97, 189, 109)" }}>
                      <strong>Ads 1</strong>
                    </span>
                    <span style={{ color: "rgb(184, 49, 47)" }}>
                      . our product is nice{" "}
                    </span>
                    <span style={{ color: "rgb(163, 143, 132)" }}>
                      <a
                        href="https://github.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        check it.
                      </a>
                    </span>
                    <span style={{ color: "rgb(184, 49, 47)" }}>&nbsp;</span>
                    <span style={{ color: "rgb(44, 130, 201)" }}>
                      <strong>Ads 2</strong>
                    </span>
                    <span style={{ color: "rgb(184, 49, 47)" }}>
                      . our product is nice{" "}
                    </span>
                    <span style={{ color: "rgb(85, 57, 130)" }}>
                      <a
                        href="https://github.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        check it
                      </a>
                    </span>
                    <span style={{ color: "rgb(184, 49, 47)" }}>.&nbsp;</span>
                    <span style={{ color: "rgb(40, 50, 78)" }}>
                      <strong>Ads 3</strong>
                    </span>
                    <span style={{ color: "rgb(184, 49, 47)" }}>
                      . our product is nice{" "}
                    </span>
                    <span style={{ color: "rgb(85, 57, 130)" }}>
                      <a
                        href="https://github.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        check it.
                      </a>
                    </span>
                    <span style={{ color: "rgb(184, 49, 47)" }}>&nbsp;</span>
                    <span style={{ color: "rgb(250, 197, 28)" }}>
                      <strong>Ads 4</strong>
                    </span>
                    <span style={{ color: "rgb(184, 49, 47)" }}>
                      . our product is nice{" "}
                    </span>
                    <span style={{ color: "rgb(85, 57, 130)" }}>
                      <a
                        href="https://github.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        check it.
                      </a>
                    </span>
                    <span style={{ color: "rgb(184, 49, 47)" }}>&nbsp;</span>
                    <span style={{ color: "rgb(85, 57, 130)" }}>
                      <a
                        href="https://github.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Need Ads?
                      </a>
                    </span>
                  </p>
                </marquee>
                <center>
                  <input
                    type="button"
                    defaultValue="Stop Ads"
                    onClick={() => {
                      document.getElementById("mymarquee").stop();
                    }}
                  />
                  <input
                    type="button"
                    defaultValue="Start Ads"
                    onClick={() => {
                      document.getElementById("mymarquee").start();
                    }}
                  />
                </center>
              </div>
            </div>
            {/* main */}
            <div>
              <Outlet />
            </div>

            {/* footer */}
            <div class="right_site_download_app">
              <p>
                DOWNLOAD PWA APPS
                <br />
                <a href="#" rel="noopener noreferrer" target="_blank">
                  ANDROID
                </a>{" "}
                <a href="#" rel="noopener noreferrer" target="_blank">
                  APPLE
                </a>{" "}
                <a href="#" rel="noopener noreferrer" target="_blank">
                  WINDOWS
                </a>{" "}
                <a href="#" rel="noopener noreferrer" target="_blank">
                  LINUX
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
