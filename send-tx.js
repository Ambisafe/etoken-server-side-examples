var config = require('./config.js');
window = {
  opts: {
    'gethUrl': config.gethNode
  }
};
var EToken = require('etoken-lib');
EToken.setPrivateKey(config.privateKey[1] === 'x' ? config.privateKey.slice(2) : config.privateKey);
var sender = EToken.privateToAddress(config.privateKey[1] === 'x' ? config.privateKey : '0x' + config.privateKey);
var asset = EToken.web3.eth.contract(config.abi).at(config.address);
var destination = process.argv[2];
var amount = EToken.web3.toBigNumber(process.argv[3]).mul(Math.pow(10, config.baseUnit));
if (amount.decimalPlaces() !== 0) {
  throw "Provide " + amount.decimalPlaces() + " less fractional digits in the amount: " + amount.valueOf() + " . Only " + config.baseUnit + " fractional digits allowed.";
}
var handler = function(err, tx) {
  if (err) {
    throw err;
  }
  console.log(tx);
};
if (EToken.web3.isAddress(destination)) {
  asset.transfer(destination, amount, {from: sender, gas: 200000, gasPrice: EToken.web3.toWei(20, 'gwei')}, handler);
} else {
  if (destination.length !== 13
    && !(destination.length === 16 && destination.slice(0, 3) === config.icapAssetCode)
    && !(destination.length === 20 && destination.slice(4, 3) === config.icapAssetCode))
  {
    throw "Invalid ICAP format. It should be 13, 16, or 20 chars long: INSTCLIENT123, " + config.icapAssetCode + "INSTCLIENT123, " + EToken.web3.eth.iban.fromBban(config.icapAssetCode + "INSTCLIENT123").toString() + ".";
  }
  var icap = destination.length === 20 ? destination :
    destination.length === 16 ? EToken.web3.eth.iban.fromBban(destination).toString() :
    EToken.web3.eth.iban.fromBban(config.icapAssetCode + destination).toString();
  asset.transferToICAP(icap, amount, {from: sender, gas: 250000, gasPrice: EToken.web3.toWei(20, 'gwei')}, handler);
}
