import { useWeb3React } from "@web3-react/core";
import { formatEther } from "ethers/lib/utils";
import { async } from "q";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Web3 from "web3";
import { Layout } from "../../components";
import ListItem from "../../components/listItem";
import { tokenLockLauncherAbi, tokenLocklauncherAdd } from "../../config";
import { shortAddress } from "../../web3/helpers";


const LockDetails = () => {
   const days = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"]

  function dateFormat(string) {
    var day = new Date(string).getDay();
    var date = new Date(string).getUTCDate();
    var month = new Date(string).getUTCMonth() + 1;
    var _year1 = new Date(string).getUTCFullYear();
    var hours = new Date(string).getUTCHours();
    var formatedHours = hours / 10 > 1 ? `${hours}` : `0${hours}`;
    var minutes = new Date(string).getUTCMinutes();
    var formatedMinutes = minutes / 10 > 1 ? `${hours}` : `0${hours}`;
    console.log("string", day);
    return `${days[day]} ${date}:${month}:${_year1}  UTC ${formatedHours}:${formatedMinutes}`;
  }

  const { account,library, chainId} = useWeb3React();
  const web3 = chainId ? new Web3(Web3.givenProvider) :  new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/2d0256aba07e4704add58fd0713e24d5"))
  const myContract = chainId ?  new web3.eth.Contract(tokenLockLauncherAbi, tokenLocklauncherAdd[`${chainId}`])
  : new web3.eth.Contract(tokenLockLauncherAbi, tokenLocklauncherAdd[`5`])

  const {params} = useParams()
  const {state} = useLocation()
  const [stateA,setState] = useState()


  
  useEffect(()=>{
    const abc = async ()=>{
      if(state){
        setState(state)
      }else{
        const data = await myContract.methods.getArray().call()
        const fdata = data.filter(item=>item._contract==params)
        console.log("data in lp lock",data)

        setState(fdata[0])
      }
    };
    abc();
  }, []);

  const tableHead = [
    "Wallet",
    "Amount",
    // "Cycle(d)",
    // "Cycle Release(%)",
    // "TGE(%)",
    "Unlock time(UTC)",
    "",
  ];
  const lockList = [
    {
      wallet: `${stateA && stateA.user}`,
      amount: `${stateA && Number(formatEther(stateA.amount)).toFixed(4)}`,
      cycle: "729",
      cycleRealese: "1",
      tge: "10",
      unlock: `${stateA && dateFormat(Number(stateA.time * 1000))}`,
    },
  ];

  console.log("data in list", stateA);

  return (
    <Layout>
      <div className=" px-6 mt-28  mb-20 ">
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  ">
          <p className="p-4  border-b dark:border-lightDark">Lock Info</p>
          <div className="p-4">
            <div className="grid gap-y-4 mt-4">
              <ListItem
                title={" Current Locked Amount"}
                desc={
                  stateA &&
                  `${Number(formatEther(stateA.amount)).toFixed(4)} ${
                    stateA.symbol
                  } `
                }
              />
              {/* <ListItem title={"Current Values Locked"} desc={"$0"} />{" "} */}
              <ListItem
                linkable={true}
                refA={
                  stateA && chainId == "97"
                    ? `https://testnet.bscscan.com/token/${
                        stateA && stateA.token
                      }`
                    : `https://goerli.etherscan.io/token/${
                        stateA && stateA.token
                      }`
                }
                title={"Token Address"}
                desc={stateA && shortAddress(stateA.token)}
                color={"primary"}
              />{" "}
              <ListItem
                title={"Token Name"}
                desc={`${stateA && stateA.name}`}
              />
              <ListItem
                title={"Token Symbol"}
                desc={`${stateA && stateA.symbol}`}
              />
              {/* <ListItem title={"Token Decimal"} desc={"18"} /> */}
            </div>
          </div>
        </div>{" "}
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  mt-7 ">
          <p className="p-4  border-b dark:border-lightDark">Lock records</p>
          <div className="p-4 overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  {tableHead.map((val, i) => (
                    <th key={i} className={`${"text-left"} text-sm`}>
                      {val}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lockList.map((token, index) => (
                  <tr key={index} className=" border-b dark:border-lightDark ">
                    <td className="py-4">
                      <p>{shortAddress(token.wallet)}</p>
                    </td>{" "}
                    <td className="py-4 ">{token.amount}</td>
                    {/* <td className="py-4 ">{token.cycle}</td>
                    <td className="py-4 ">{token.cycleRealese}</td>
                    <td className="py-4 ">{token.tge}</td> */}
                    <td className="py-4 ">{token.unlock}</td>
                    <td className="py-4 text-right">
                      <Link
                        to="/token_list/lock_record"
                        state={stateA}
                        className="text-primary-400"
                      >
                        View
                      </Link>
                    </td>{" "}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LockDetails;
