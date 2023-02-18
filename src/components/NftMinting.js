import { useWeb3React } from "@web3-react/core";
import { Contract } from "ethers";
import { formatEther, formatUnits, parseEther,  } from "ethers/lib/utils";

import React, { useState } from "react";
import { useEffect } from "react";
import { BUSD, GEMZ, GEMZAbi, GEMZIOAbi, GEMZIOU, NFTABI, NFTAdd } from "../config";
import ResponsiveDialog from "../Spinner";
import Web3 from "web3";
import { rpcObj, selectedId } from "../connector";


export const getContract = (library, account, abi, tokenAdd) => {

  const signer = library?.getSigner(account).connectUnchecked();
  var contract = new Contract(tokenAdd, abi, signer);
  return contract;
};


function NftMinting() {
const [balance,setBalance] = useState(0)
const [totalSupply,settotalSupply] = useState(0)
const [open,setOpen] = useState(0)
const [toggle,setToggle] = useState(0)
const [BUSDbalance,setBUSDbalance] = useState(0)
const [GEMZbalance,setGEMZbalance] = useState(0)
const [GEMZIbalance,setGEMZIbalance] = useState(0)
const [BUSD_,setBUSD_] = useState(0)
const [GEMZ_,setGEMZ_] = useState(0)
const [GEMZI_,setGEMZI_] = useState(0)
const web3 = new Web3(new Web3.providers.HttpProvider(rpcObj[selectedId]))
const {library,account,chainId} = useWeb3React()

const contract = new web3.eth.Contract(NFTABI,NFTAdd)
const GEMZContract = new web3.eth.Contract(GEMZAbi,GEMZ)
const IOUContract = new web3.eth.Contract(GEMZIOAbi,GEMZIOU)
const BUSDContract = new web3.eth.Contract(GEMZAbi,BUSD)







useEffect(()=>{
const abc = async ()=>{

  if(account){
    const _bal = await contract.methods.balanceOf(account).call()

    setBalance(formatUnits (_bal,0))
    const _BUSDBal = await BUSDContract.methods.balanceOf(account).call()

    setBUSDbalance(formatEther (_BUSDBal,0))
    const _GEMZbal = await GEMZContract.methods.balanceOf(account).call()
    setGEMZbalance(formatEther (_GEMZbal,0))
    const _GEMZIbalance = await IOUContract.methods.balanceOf(account).call()
    setGEMZIbalance(formatEther (_GEMZIbalance,0))



  }


  const _tSupply = await contract.methods.create_amount().call()
  console.log("Library in minting",_tSupply)
  settotalSupply(formatUnits(_tSupply,0))


}
abc()

},[account,toggle])

const findMax = (val,setVal,Price)=>{
  if(library){
    var max = val / Price <= 10 ?  val / Price :  10
    setVal(max)
 
  }else{
    window.alert("Wallet is not connected")
  }
  

}

const approveBUSD = async ()=>{

  const _BUSDContract = getContract(library,account,GEMZAbi,BUSD)
  const allowance = await BUSDContract.methods.allowance(account,NFTAdd).call()

  if(Number(formatEther(allowance)) >= BUSD_*39){
    MintBUSD()
  }else{
    setOpen(true)
    try {
      const tx1 = await _BUSDContract.approve(NFTAdd,parseEther((BUSD_*39).toString()), {gasLimit:300000})
  
      const receipt = await tx1.wait()
      
      if(receipt){
        setOpen(false)
        setToggle(!toggle)
  //      MintBUSD()
      }
  
  
    } catch (error) {
      console.log("error in approval",error)
      setOpen(false)
    }
  }


 
}
const approveGEMZ = async ()=>{

  const _GEMZContract = getContract(library,account,GEMZAbi,GEMZ)
  const allowance = await GEMZContract .methods.allowance(account,NFTAdd).call()

  if(Number(formatEther(allowance)) >= GEMZ_*200){
     MintGEMZ()
  }else{


  setOpen(true)
  try {
    const tx1 = await _GEMZContract.approve(NFTAdd,parseEther((GEMZ_*200).toString()), {gasLimit:300000})

    const receipt = await tx1.wait()
    console.log("receipt ",receipt)  
    if(receipt){
      setOpen(false)
      setToggle(!toggle)
//      MintGEMZ()
    }


  } catch (error) {
    console.log("error in approval",error)
    setOpen(false)
  }
}
}
const approveGEMZI = async ()=>{

  const _IOUContract = getContract(library,account,GEMZIOAbi,GEMZIOU)
  const allowance = await IOUContract.methods.allowance(account,NFTAdd).call()

  if(Number(formatEther(allowance)) >= GEMZ_*200){
     MintGEMZ()
  }else{
  setOpen(true)
  try {
    const tx1 = await _IOUContract.approve(NFTAdd,parseEther((GEMZI_*300).toString()), {gasLimit:300000})

    const receipt = await tx1.wait()
    
    if(receipt){
      setOpen(false)
      setToggle(!toggle)
//      MintGemzI()
    }


  } catch (error) {
    console.log("error in approval",error)
    setOpen(false)
  }
}
}
const MintBUSD = async ()=>{
  const _contract = getContract(library,account,NFTABI,NFTAdd)
  setOpen(true)
  try {
    const tx1 = await _contract.mint_busd(BUSD_.toString(),{gasLimit:300000})

    const receipt = await tx1.wait()
    
    if(receipt){
      setOpen(false)
      setToggle(!toggle)
    }


  } catch (error) {
    console.log("error in approval",error)
    setOpen(false)
  }
}
const MintGEMZ = async ()=>{
  const contract = getContract(library,account,NFTABI,NFTAdd)
  setOpen(true)
  try {
    const tx1 = await contract.mint_gemzs(GEMZ_.toString(),{gasLimit:300000})

    const receipt = await tx1.wait()
    
    if(receipt){
      setOpen(false)
      setToggle(!toggle)
    }


  } catch (error) {
    console.log("error in approval",error)
    setOpen(false)
  }
}

const MintGemzI = async ()=>{
  const contract = getContract(library,account,NFTABI,NFTAdd)
  setOpen(true)
  try {
    const tx1 = await contract.mint_gemzsiou(GEMZI_.toString(), {gasLimit:300000})

    const receipt = await tx1.wait()
    
    if(receipt){
      setOpen(false)
      setToggle(!toggle)
    }


  } catch (error) {
    console.log("error in approval",error)
    setOpen(false)
  }
}

  console.log("Library", library);
  console.log("Account", account);
  console.log("Chain", chainId);




  return (
    <div className="fade show">
      <div className="frontpage_right_site">
        <div className="mobile_menu"></div>
        <div className="nft_minting_main">
          <div className="nft_minting_main_title">
            <h3>NFT MINTING</h3>
          </div>
          <div className="nft_minting_cleft_title">
            <p>MY NFTs: {balance && balance}</p>
          </div>
          <div className="nft_minting_contents_main">
            <div className="nft_minting_contents">
              <div className="nft_minting_cleft">
                <div className="nft_minting_cleft_middle">
                  <div className="nft_minting_cleft_ml">
                    <div className="nft_minting_cleft_ml_p">
                      <p>BUSD</p>
                    </div>
                    <div className="nft_minting_cleft_ml_add_remove">
                      <a onClick={()=>{
                        if(BUSD_-1>=0){
                          setBUSD_(BUSD_=>BUSD_-1)
                        }       
                        }}>
                        <img
                          src={require("../assets/images/mines.png")}
                          alt=""
                        />
                      </a>
                      <input 
                      onChange={(e)=>{setBUSD_(e.target.value)}}
                      value={BUSD_}
                      type="text" />
                      <a onClick={
                        ()=>{
                          if(BUSD_+1<=10){
                            setBUSD_(BUSD_=>BUSD_+1)
                          }

                          }}>
                        <img
                          src={require("../assets/images/plus.png")}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="nft_minting_cleft_ml_btns">
                      <a href="#"
                      onClick={()=>{findMax(BUSDbalance,setBUSD_,39)}}
                      >MAX</a>
                      <a 
                      onClick={approveBUSD}
                      href="#">MINT</a>
                    </div>
                    <div className="nft_minting_cleft_middle_btns mftmcmbtns1">
                      <a href="#">
                        39 BUSD/NFT
                        <br />
                        <span>Purchase limit: 10</span>
                      </a>
                    </div>
                  </div>
                  <div className="nft_minting_cleft_ml">
                    <div className="nft_minting_cleft_ml_p">
                      <p>GEMZS</p>
                    </div>
                    <div className="nft_minting_cleft_ml_add_remove">
                    <a onClick={()=>{
                        if(GEMZ_-1>=0){
                          setGEMZ_(GEMZ_=>GEMZ_-1)
                        }       
                        }}>
                        <img
                          src={require("../assets/images/mines.png")}
                          alt=""
                        />
                      </a>
                      <input
                      onChange={(e)=>{setGEMZ_(e.target.value)}} 
                      value={GEMZ_}
                      type="text" />
                      <a onClick={
                        ()=>{
                          if(GEMZ_+1<=10){
                            setGEMZ_(GEMZ_=>GEMZ_+1)
                          }

                          }}>
                        <img
                          src={require("../assets/images/plus.png")}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="nft_minting_cleft_ml_btns">
                    <a href="#"
                      onClick={()=>{findMax(GEMZbalance,setGEMZ_,200)}}
                      >MAX</a>
                      <a 
                       onClick={approveGEMZ}
                      href="#">MINT</a>
                    </div>
                    <div className="nft_minting_cleft_middle_btns">
                      <a href="#">
                        200 GEMZS/NFT
                        <br />
                        <span>Purchase limit: 10</span>
                      </a>
                    </div>
                  </div>
                  <div className="nft_minting_cleft_ml">
                    <div className="nft_minting_cleft_ml_p">
                      <p>GEMZS-IOU</p>
                    </div>
                    <div className="nft_minting_cleft_ml_add_remove">
                    <a onClick={()=>{
                        if(GEMZI_-1>=0){
                          setGEMZI_(GEMZI_=>GEMZI_-1)
                        }       
                        }}>
                        <img
                          src={require("../assets/images/mines.png")}
                          alt=""
                        />
                      </a>
                      <input 
                      onChange={(e)=>{setGEMZI_(e.target.value)}}
                      value={GEMZI_}
                      type="text" />
                      <a onClick={
                        ()=>{
                          if(GEMZI_+1<=10){
                            setGEMZI_(GEMZI_=>GEMZI_+1)
                          }

                          }}>
                        <img
                          src={require("../assets/images/plus.png")}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="nft_minting_cleft_ml_btns">
                    <a href="#"
                      onClick={()=>{findMax(GEMZIbalance,setGEMZI_,200)}}
                      >MAX</a>
                      <a 
                       onClick={approveGEMZI}
                      href="#">MINT</a>
                    </div>
                    <div className="nft_minting_cleft_middle_btns">
                      <a href="#">
                        300 GEMZS-IOU/NFT
                        <br />
                        <span>Purchase limit: 10</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nft_minting_cleft_bbtn">
                  <a href="#">{totalSupply && totalSupply}/1200 Total NFT</a>
                </div>
                {/* <div class="nft_minting_cleft_middle_btns">
                      <a href="#">0/500 Total NFT</a>
                      <a href="#">90 BUSD/NFT<br>50 GEMZS/NFT<br>Purchase limit: 10</a>
                      </div> */}
              </div>
              <div className="nft_minting_cright">
                <div className="nft_minting_cright_img">
                  <img
                    src={require("../assets/images/gamestone-nft.png")}
                    alt=""
                  />
                </div>
                <div className="nft_minting_cright_contents">
                  <p>GEMZSTONE NFT</p>
                  <p>GS- 49767893</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nft_minting_cons_and_btns">
          <div className="nft_minting_cab_contents">
            <p>The NFTs gives you access to many perks within the platform.</p>
          </div>
          <div className="right_site_title_contents">
            <ol>
              <li>The NFT makes the holder an ADVISOR to the project.</li>
              <li>The NFT is stakeable and can earn more rewards.</li>
              <li>
                The NFT gives access to many private Group within the platform.
              </li>
              <li>The NFT can be traded in the open market.</li>
              <li>The NFT can be used for voting.</li>
              <li>The NFT gives access to the platform metaverses.</li>
              <li>The NFT gives access to token gated contents.</li>
              <li>NFT Holders will be able to mine out GEMZS TOKEN.</li>
            </ol>
          </div>
          <div className="fprs_fairlaunch_btns htbwhitelisted_btns">
            <span>
              <a href="#">PINKSALE FAIRLAUNCH BSC</a>
            </span>
            <a href="#">CHECK WHITELIST SHEET</a>
          </div>
        </div>
      </div>

      <ResponsiveDialog open={open}></ResponsiveDialog>
    </div>
  );
}

export default NftMinting;
