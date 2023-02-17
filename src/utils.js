import { Contract } from "ethers";

export const getContract = (library, account, abi, tokenAdd) => {

    const signer = library?.getSigner(account).connectUnchecked();
    var contract = new Contract(tokenAdd, abi, signer);
    return contract;
  };