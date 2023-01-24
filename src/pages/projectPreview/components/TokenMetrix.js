import { useWeb3React } from "@web3-react/core";
import { Contract } from "ethers";
import { formatEther, formatUnits } from "ethers/lib/utils";
import React, { useEffect, useState } from "react";
import DonutChart from "react-donut-chart";
import Graph from "../../../assets/graph.svg";
import { IERC20, LaunchPadABI, LaunchPadAdd } from "../../../config";


export const getContract = (library, account,tokenAdd,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(tokenAdd,abi, signer);
	return contract;
};

const TokenMetrix = ({data}) => {
  const {account,library,chainId} = useWeb3React()
  const Contract = getContract(library,account,LaunchPadAdd[`${chainId}`],LaunchPadABI)
  const TokenContract = getContract(library,account,data[2][0],IERC20)
  const [allocations,setAllocaitons] = useState()
  const [totalSupply,setTotalSupply] = useState()
  const [decimals,setDecimals] = useState()
  
  useEffect(()=>{
    const abc = async()=>{
    const _alloc = await Contract.getLockContract(data[2][0])
      setAllocaitons(_alloc)

     const tSupply = await TokenContract.totalSupply()
     const tdecimals = await TokenContract.decimals()
      setTotalSupply(tSupply / (10**tdecimals))
      
      setDecimals(tdecimals)
    
    }
    abc()
    
    
  },[])

  function myFunc(total, num) {
    return total + num;
  }


  const allocationAmounts = allocations && allocations.map((v,e)=>{
    console.log((formatUnits(v.Amount,decimals)))
    return (
    {label:v.Title,value:Number(formatUnits(v.Amount,decimals)/ totalSupply*100)}
  )})

  const amountsOnly = allocations && allocations.map((v,e)=>Number(formatEther(v.Amount)*(10**decimals)/1000000000000000000))

  const locked = allocations && amountsOnly.reduce(myFunc)



  allocations && allocationAmounts.push({label:"UnLocked",value:Number((totalSupply-locked)/totalSupply*100)})


  console.log("allocations",allocationAmounts)



  return (
    <div className="bg-dark-400 border border-lightDark rounded-md shadow-xl">
       <div className=" border-b  border-lightDark px-4 py-4">
        <p>Token Metrix</p>
      </div>
      <div className="py-4 flex justify-center  px-4">
     {/* <DonutChart

           
          data={allocations &&  allocationAmounts}
        />; */}
      </div> 
    </div>
  );
};

export default TokenMetrix;
