<?php
# get balance
$address = '0x53786e5722f854a62783395dcdc27d633a9b063e';
$balance = `node get-balance.js $address\n`;
echo "balance: $balance";

#send transaction to regular address
$destination = '0x53786e5722f854a62783395dcdc27d633a9b063e';
$amount = 1.12;
$txid = `node send-tx.js $destination`;
echo "transaction hash: $txid";

#send transaction to icap address
$destination = 'AMBICLIENT123';
$amount = 1.12;
$txid = `node send-tx.js $destination`;
echo "second transaction hash: $txid";
