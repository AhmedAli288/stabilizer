const createInstance = require("./helper/contractInstance");
const stablizer = require("./callStablizer");

let web3;
let contract;

const SyncHex =
  "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1";

const _createInstance = async (contract_address) => {
  let web3Obj = await createInstance(contract_address);
  web3 = web3Obj.web3;
  contract = web3Obj.contract;
};

const subscriber = async () => {
  pairAdd = "0x96fF2f5110ece74793c23cbAF5E177a9F25094D4"; // Simple

  await _createInstance(pairAdd);

  console.log("subsciber started listening for logs");

  await web3.eth.subscribe(
    "logs",
    {
      address: pairAdd,
      topics: [SyncHex],
    },
    async function (error, events) {
      console.log("current events:", events);
      stablizer();
    }
  );
};

subscriber();
