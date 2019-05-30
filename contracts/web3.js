import Web3 from 'web3';

if (window.ethereum) {
  window.web3 = new Web3(ethereum);
  try {
    // Request account access if needed
    ethereum.enable();
  } catch (error) {
    console.log("Connect to eth failed!");
  }
} else if (window.web3) {
  window.web3 = new Web3(web3.currentProvider);
} else {
  console.log(
    'Non-Ethereum browser detected. You should consider trying MetaMask!'
  );
}
console.log(web3);
export default web3;
