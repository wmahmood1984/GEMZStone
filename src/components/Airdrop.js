import React, { useEffect, useState } from "react";
import "../airdrop-assets/css/style.css";
import "../airdrop-assets/css/responsive.css";

import "../airdrop-assets/css/normalize.css";
import { useWeb3React } from "@web3-react/core";

import { aidrDropAdd, airDropAbi, GEMZ, GEMZAbi, GEMZIOAbi, GEMZIOU } from "../config";

import ResponsiveDialog from "../Spinner";
import { formatEther, formatUnits } from "ethers/lib/utils";
import { Contract } from "ethers";
import Web3 from "web3";
import { rpcObj, selectedId } from "../connector";


export const getContract = (library, account, abi, tokenAdd) => {

  const signer = library?.getSigner(account).connectUnchecked();
  var contract = new Contract(tokenAdd, abi, signer);
  return contract;
};

function Airdrop() {
const [balance,setBalance] = useState(0)
const [toggle,setToggle] = useState(0)
const [open,setOpen] = useState(0)
const [Ibalance,setIBalance] = useState(0)
const [wbalance,setWBalance] = useState(0)
const [uEarnings,setuEarnings] = useState(0)
const [wIbalance,setwIBalance] = useState(0)
const [noOfParticipants,setnoOfParticipants] = useState(0)
const {chainId,library,account} = useWeb3React()
const web3 = new Web3(new Web3.providers.HttpProvider(rpcObj[selectedId]))
const contract = new web3.eth.Contract(airDropAbi,aidrDropAdd)
const GEMZContract = new web3.eth.Contract(GEMZAbi,GEMZ)
const IOUContract = new web3.eth.Contract(GEMZIOAbi,GEMZIOU)


useEffect (() => {
  const abc = async ()=>{
    
    const _bal = await GEMZContract.methods.balanceOf(aidrDropAdd).call()
    const _Ibal = await IOUContract.methods.balanceOf(aidrDropAdd).call()
    setBalance(Number(formatEther(_bal)).toFixed(2))
    setIBalance(Number(formatEther(_Ibal)).toFixed(2))
    if(account){
      const _wbal = await GEMZContract.methods.balanceOf(account).call()
      const _wIbal = await IOUContract.methods.balanceOf(account).call()
      setWBalance(Number(formatEther(_wbal)).toFixed(2))
      setwIBalance(Number(formatEther(_wIbal)).toFixed(2))
      const _earnings = await contract.methods.userEarnings(account).call()
      setuEarnings(Number(formatEther(_earnings)).toFixed(2))
    }





    const _participants = await contract.methods.getNumberOfParticipants().call()
    setnoOfParticipants(formatUnits(_participants,0))

  }

  abc()
}, [toggle,account])



const _approve = async ()=>{
 const _contract = getContract(library,account,airDropAbi,aidrDropAdd)



  setOpen(true)
  try {
    const tx1 = await _contract.addMe({gasLimit:300000})

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



const _claim = async ()=>{
  const _contract = getContract(library,account,airDropAbi,aidrDropAdd)
  setOpen(true)
  try {
    const tx1 = await _contract.claimRewards({gasLimit:300000})

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


console.log("balance",balance,Ibalance,noOfParticipants)


  return (
    <div>
      <div>
        {/*==========================  Start Simple Task Section  ==========================*/}
        <div className="simple_task_main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="simple_task">
                  <div className="banner_image">
                    <img
                      src={require("../airdrop-assets/images/banner1.png")}
                      alt=""
                    />
                  </div>
                  {/* <div class="simple_task_title">
                          <h1>AIRDROP</h1>
                      </div>
                      <div class="simple_task_contents_all">
                          <div class="simple_task_content_title">
                              <h2>SIMPLE TASK</h2>
                          </div>
                          <div class="simple_task_contents">
                              <div class="smptscon_left smptscon_leftde">
                                  <a href="#">
                                      <span>Join Telegram</span>
                                      <img src={require("../airdrop-assets/images/telegram.png")} alt="">
                                  </a>
                              </div>
                              <div class="smptscon_middle">
                                  <p>Check if you qualified for the Airdrop</p>
                              </div>
                              <div class="smptscon_left smptscon_right">
                                  <a href="#">
                                      <span>Follow and like twitter</span>
                                      <img src={require("../airdrop-assets/images/twitter.png")} alt="">
                                  </a>
                              </div>
                          </div>
                      </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==========================  End Simple Task Section  ==========================*/}
        {/*==========================  Start CLAIM AIRDROP Section  ==========================*/}
        <div className="claim_airdrop_main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="claim_airdrop">
                  <div className="claim_airdrop_title">
                    <center>
                      <h1>
                        COMPLETE THE TASK OF JOINING OUR TELEGRAM, FOLLOW, LIKE
                        AND COMMENT ON OUR TWITTER CORRECTLY THEN START
                        CLAIMING.
                      </h1>
                    </center>
                    <center>
                      <h3>
                        Airdrop and Claim available only for 60 Days. 50,000
                        Gemzs to be shared amongst all participants.First come
                        First Serve formula.
                      </h3>
                    </center>
                  </div>
                  <div className="claim_airdrop_btns claim_airdrop_btns_top">
                    <div className="claim_airdropbtn_left claim_airdropbtn_left_top">
                      <p>TASK</p>
                    </div>
                    <center>
                      <div className="claim_airdropbtn_right claim_airdropbtn_right_top">
                        <a href="#">
                          Telegram{" "}
                          <img
                            src={require("../airdrop-assets/images/telegram.png")}
                            alt=""
                          />
                        </a>
                        <a href="#">
                          Twitter{" "}
                          <img
                            src={require("../airdrop-assets/images/twitter.png")}
                            alt=""
                          />
                        </a>
                      </div>
                    </center>
                  </div>
                  <div className="claim_airdrop_contents_all">
                    <div className="claim_airdrop_contents_mw">
                      <div className="claim_airdrop_tbtn">
                        <a
                          href="https://docs.google.com/spreadsheets/d/1Ty1eQtpuEIffRlwz7Nc4PeSjiRi2wJy7PJGWHdciOtw/edit?usp=sharing"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Check Qualification List
                        </a>
                      </div>
                      <div className="claim_airdrop_contents">
                        <div className="claim_airdrop_content_title">
                          <h1>
                            CLAIM AIRDROP(3% of max supply){" "}
                            <span>[GEMZS IOU]</span>
                          </h1>
                        </div>
                        <div className="claim_airdrop_contents_single">
                          <div className="claiconsi_p">
                            <p>Airdrop Balance</p>
                          </div>
                          <div className="claiconsi_p">
                            <p>{Ibalance && Ibalance} GEMZS IOU</p>
                          </div>
                        </div>
                        <div className="claim_airdrop_contents_single">
                          <div className="claiconsi_p">
                            <p>Airdrop Participants</p>
                          </div>
                          <div className="claiconsi_p">
                            <p>{noOfParticipants && noOfParticipants} Users</p>
                          </div>
                        </div>
                        <div className="claim_airdrop_contents_single">
                          <div className="claiconsi_p">
                            <p>Wallet Balance</p>
                          </div>
                          <div className="claiconsi_p">
                            <p>{wIbalance && wIbalance} GEMZS IOU</p>
                          </div>
                        </div>
                        <div className="claim_airdrop_contents_single">
                          <div className="claiconsi_p">
                            <p>Wallet Balance</p>
                          </div>
                          <div className="claiconsi_p">
                            <p>{wbalance && wbalance} GEMZS</p>
                          </div>
                        </div>
                      </div>
                      <div className="claim_airdrop_btns">
                        <div className="claim_airdropbtn_left">
                          <p>{uEarnings && uEarnings}</p>
                        </div>
                        <div className="claim_airdropbtn_right">
                          <a onClick={_approve}>Approve/Join</a>
                          <a onClick={_claim}>Claim</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==========================  End CLAIM AIRDROP Section  ==========================*/}
        {/*==========================  Start REDEEM AIRDROP Section  ==========================*/}
        <div className="redeem_airdrop_main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="redeem_airdrop">
                  <div className="redeem_airdrop_title">
                    <h1>
                      YOU CAN REDEEM GEMZS AFTER FAIRLAUNCH END. BUT CAN CLAIM
                      GEMZS NFT NOW.
                    </h1>
                  </div>
                  <div className="redeem_airdrop_contents_all">
                    <div className="redeem_airdrop_content_title">
                      <h1>REDEEM AIRDROP</h1>
                      <center>
                        <h3>
                          <a href="../nft-minting" target="_blank">
                            REDEEM AIRDROP FOR NFT AT MINTING PAGE (20 GEMZS
                            IOU/NFT)
                          </a>
                        </h3>
                      </center>
                    </div>
                    <div className="redeem_airdrop_contents">
                      <div className="redaircon_cont_first">
                        <div className="redaircon_cont">
                          <div className="redaircon_cont_title">
                            <p>50</p>
                          </div>
                          <div className="redaircon_cont_box">
                            <p>GEMZS IOU</p>
                          </div>
                          <div className="redaircon_cont_amount redaircon_cont_amount1">
                            {/* <span>Amount</span> */}
                            <input type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="redaircon_arrow">
                        <img
                          src={require("../airdrop-assets/images/arrow-right.png")}
                          alt=""
                        />
                      </div>
                      <div className="redaircon_cont">
                        <div className="redaircon_cont_title">
                          <p>4</p>
                        </div>
                        <div className="redaircon_cont_box">
                          <p>GEMZS</p>
                        </div>
                        <div className="redaircon_cont_amount">
                          <a href="#">REDEEM</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==========================  End REDEEM AIRDROP Section  ==========================*/}
      </div>
      <ResponsiveDialog open={open}/>
    </div>
  );
}

export default Airdrop;
