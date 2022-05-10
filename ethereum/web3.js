import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // In the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // On the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://polygon-mainnet.infura.io/v3/bf611fe1ab374dcfa9bdd1eec6e450af"
  );
  web3 = new Web3(provider);
}

export default web3;
