import { ethers } from "ethers";
import Abi from "./abi.json";

export const getProposalsContract = (provider) =>
  new ethers.Contract(
    import.meta.env.VITE_votepoll_contract_address,
    Abi,
    provider
  );
