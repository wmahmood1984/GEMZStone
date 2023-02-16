import { useEffect } from "react";
import WebFont from "webfontloader";

import Header from "./components/Header";

// import Home from "./pages/Home";
import Fairlaunch from "./components/Fairlaunch";
import GemzChatAI from "./components/GemzChatAI";
import SelfMining from "./components/SelfMining";
import Staking from "./components/Staking";
import MarginTrade from "./components/MarginTrade";
import LendAndBorrow from "./components/LendAndBorrow";
import Exchange from "./components/Exchange";
import CrossChainSwap from "./components/CrossChainSwap";
import TokenBridge from "./components/TokenBridge";
import ArbOpportunity from "./components/ArbOpportunity";
import NftMinting from "./components/NftMinting";
import NftMarket from "./components/NftMarket";
import NftStaking from "./components/NftStaking";
import TokenGatedContents from "./components/TokenGatedContents";
import Metaverse from "./components/Metaverse";
import FiatOnRamp from "./components/FiatOnRamp"; //add images from here
import SwapAndLP from "./components/SwapAndLP";
import HowToJoinWhitelist from "./components/HowToJoinWhitelist";
import Home from "./components/Home";
import Airdrop from "./components/Airdrop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Oxygen", "Inter", "sans-serif", "Chilanka"],
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="airdrop" element={<Airdrop />} />
          <Route path="fair-launch" element={<Fairlaunch />} />
          <Route path="gemzs-chatAI" element={<GemzChatAI />} />
          <Route path="self-mining" element={<SelfMining />} />
          <Route path="staking" element={<Staking />} />
          <Route path="fiat-on-ramp" element={<FiatOnRamp />} />
          <Route path="swap-lp" element={<SwapAndLP />} />
          <Route path="margin-trade-gemzs" element={<MarginTrade />} />
          <Route path="lend-borrow-gemzs" element={<LendAndBorrow />} />
          <Route path="exchange" element={<Exchange />} />
          <Route path="cross-chainswap" element={<CrossChainSwap />} />
          <Route path="token-bridge" element={<TokenBridge />} />
          <Route path="arb-opportunity" element={<ArbOpportunity />} />
          <Route path="nft-minting" element={<NftMinting />} />
          <Route path="nft-market" element={<NftMarket />} />
          <Route path="nft-staking" element={<NftStaking />} />
          <Route path="token-gated-contents" element={<TokenGatedContents />} />
          <Route path="metaverse" element={<Metaverse />} />
          <Route
            path="how-to-join-whitelist"
            element={<HowToJoinWhitelist />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
