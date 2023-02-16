import React from "react";

function NftStaking() {
  return (
    <div className="fade show">
      <div className="frontpage_right_site">
        <div className="mobile_menu"></div>
        <div className="nft_staking_contents_all">
          <div className="nft_staking_title">
            <h1>NFT STAKING SOLANA CHAIN</h1>
          </div>
          <div className="nft_staking_img">
            <img src={require("../assets/images/nft-staking.png")} alt="" />
          </div>
          <div className="nft_staking_btns">
            <a href="#">BRIDGE NFT TO SOLANA</a>
            <a href="#">STAKE NFT</a>
          </div>
          <div className="nft_staking_contents">
            <p>
              THE PERMISSIONLESS PORTAL ENABLES USERS TO STAKE NFT TO EARN
              TOKENS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftStaking;
