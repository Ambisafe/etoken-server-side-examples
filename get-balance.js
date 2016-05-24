var Web3 = require('web3');
var web3 = new Web3();
var config = require('./config.js');
var eToken = web3.eth.contract(config.abi).at(config.address);
web3.setProvider(new web3.providers.HttpProvider(config.gethNode));
console.log(eToken.balanceOf(process.argv[2]).div(Math.pow(10, config.baseUnit)).valueOf());
process.exit();