const createInstance = require("./helper/contractInstance");

let web3;
let contract;
let from;
let privateKey =
  "571d973eefab0044b40ee3393d7a5198698950d985b717196b3151015b1c5dfa";
const triToken = "0xcC457Eb76F2687068E20E0d298ad010D79E863CC";

const _createInstance = async () => {
  let web3Obj = await createInstance(triToken);
  web3 = web3Obj.web3;
  contract = web3Obj.contract;

  const account = await web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts.wallet.add(account);
  from = account.address;
};

const callStablizer = async () => {
  await _createInstance();

  const txData = contract.methods.updatePairBalance().encodeABI();

  const tx = {
    from,
    to: triToken,
    data: txData,
    gas: 2000000,
    gasPrice: web3.utils.toWei("10", "gwei"),
  };

  // Sign the transaction
  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
  // // Send the transaction
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log("callStablizer ~ receipt:", receipt);
};

module.exports = callStablizer;
