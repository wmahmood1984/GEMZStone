import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import ProjectOverView from "./components/ProjectOverView";
import Swap from "./components/Swap";
import TokenMetrix from "./components/TokenMetrix";
import Ownerzone from "./components/Ownerzone";
import Information from "./components/Information";
import { useLocation, useParams } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import {Contract, ethers, providers, utils} from "ethers"
import { chainIdSelected, IERC20, IGOAbi, LaunchPadABI, LaunchPadAdd } from "../../config";
import Web3 from "web3";
import Ownerzone2 from "./components/Ownerzone2";
import Information2 from "./components/Information2";




  

const ProjectPreview = () => {
  const {account,library,chainId} = useWeb3React()
  const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/2d0256aba07e4704add58fd0713e24d5"))
  var chain = chainId ? chainId : chainIdSelected
  const myContract = new web3.eth.Contract(LaunchPadABI,LaunchPadAdd[`${chain}`])
  console.log("index",myContract)


  let location = useLocation();


  let {params} = useParams()

  const getIndex = async ()=>{
    const _ind = await myContract.methods.PresaleMapping(params).call()
    console.log("index",_ind)
    return _ind
  }
//  const { Index } = location.state;
   


   const[_data,set_Data] = useState()
  const[sub_data,set_SubData] = useState()
  const[toggle,setToggle] = useState(false)
    const [allocations,setAllocaitons] = useState([])
  const [totalSupply,setTotalSupply] = useState()
  const [decimals,setDecimals] = useState()
  const [entitlement,setEntitlement] = useState()



  useEffect(()=>{
    const abc = async()=>{
      const IndexA = location.state?.Index ? location.state?.Index : await getIndex()
      
      const data = await myContract.methods.getPoolDetails().call()
      set_Data(data[0][IndexA])
      set_SubData(data[1][IndexA])
      console.log("indexA",data) 
      const TokenContract = new web3.eth.Contract(IERC20,data[0][IndexA][2][0])

      const _alloc = await myContract.methods.getLockContract(data[0][IndexA][2][0]).call()
      setAllocaitons(_alloc)

    const tSupply = await TokenContract.methods.totalSupply().call()
    const tdecimals = await TokenContract.methods.decimals().call()
     setTotalSupply(tSupply / (10**tdecimals))
     setDecimals(tdecimals)

     const PreSaleContract = new web3.eth.Contract(IGOAbi,data[0][IndexA][1]) 
     const ent = await PreSaleContract.methods.getEntitlement(account).call()
      setEntitlement(ent / (10**tdecimals))
     }
    abc()
  },[toggle,account])

//  console.log("data in overview ",PreSaleContract)


  



  return (
    <Layout>
     {
     _data && sub_data && 
           <main className="px-4 pb-10 pt-28 grid grid-cols-1 gap-y-4">
             <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
             <ProjectOverView data={_data && _data} sub_data={sub_data && sub_data}/>
             <div className=" flex flex-col">
               <div className="flex-1">
                 <Swap data={_data && _data} toggle={toggle} sub_data={sub_data && sub_data} setToggle={setToggle}/>
               </div>
               <div className="mt-6">
                 <TokenMetrix allocations={allocations} decimals={decimals} totalSupply={totalSupply} dataA={_data && _data} sub_data={sub_data && sub_data}/>
               </div> 
             </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
             {_data && _data[2][1]===account?
              <Ownerzone data={_data && _data} sub_data={sub_data && sub_data}/>:null
             }
             <Information data={_data && _data} sub_data={sub_data && sub_data}/>
             {_data && _data[2][2]===account?
              <Ownerzone2 data={_data && _data} sub_data={sub_data && sub_data}/>:null
             }{sub_data.liquidity == "0" ? 
              <Information2 data={_data && _data} sub_data={sub_data && sub_data} ent={entitlement}/> : null

             }

           </div>  
         </main>
     }  



      
 
    </Layout>
  );
};

export default ProjectPreview;
