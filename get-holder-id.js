var Web3 = require('web3');
var web3 = new Web3();
var walletAddress = process.argv[2];
var config = require('./config.js');
var eToken = web3.eth.contract(config.abi).at(config.address);
web3.setProvider(new web3.providers.HttpProvider(config.gethNode));
var res = eToken.getHolderId.call(walletAddress).valueOf();
if (res === '0') {
  console.error(walletAddress + " was never known to eToken.");
  process.exit(1);
} else {
  console.log(res);
  process.exit();
}
