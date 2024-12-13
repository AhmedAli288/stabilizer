const Web3 = require("web3");
const ethers = require("ethers");

const injectedWeb3 = {
  getRPC: async () => {
    return new Web3(
      new Web3.providers.HttpProvider(
        "https://data-seed-prebsc-1-s1.binance.org:8545/"
      )
    );
  },
  getSocket: async () => {
    return await new Web3(
      new Web3.providers.WebsocketProvider(
        "wss://mainnet.infura.io/ws/v3/335d7bd80d5747f482a8c603c4beae14"
      )
    );
  },
  getEthersSocket: async () => {
    return new ethers.WebSocketProvider(
      "wss://mainnet.infura.io/ws/v3/335d7bd80d5747f482a8c603c4beae14"
    );
  },
};

module.exports = injectedWeb3;
