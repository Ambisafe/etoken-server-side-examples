var Web3 = require('web3');
var web3 = new Web3();
var walletAddress = process.argv[2];
var eToken = web3.eth.contract([{"constant":true,"inputs":[{"name":"_holder","type":"address"}],"name":"getHolderId","outputs":[{"name":"","type":"uint256"}],"type":"function"}])
.at('0x3fce483a0236ba36869e4e82151006045e7d3331');
web3.setProvider(new web3.providers.HttpProvider('https://node.ambisafe.co'));
var res = eToken.getHolderId.call(walletAddress).valueOf();
if (res === '0') {
  console.error(walletAddress + " was never known to eToken.");
  process.exit(1);
} else {
  console.log(res);
  process.exit();
}