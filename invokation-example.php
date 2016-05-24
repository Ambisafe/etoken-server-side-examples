<?php
# get balance
$address = '0xe2942418b2d87a1d88cce66d0b11c7ef16a72971';
$balance = `node get-balance.js $address\n`;
echo "balance: $balance";

#send transaction to regular address
$destination = '0xe2942418b2d87a1d88cce66d0b11c7ef16a72971';
$amount = 1.12;
$txid = `node send-tx.js $destination`;
echo "transaction hash: $txid";


#send transaction to icap address
$destination = 'INST2314ACCT234234';
$amount = 1.12;
$txid = `node send-tx.js $destination`;
echo "second transaction hash: $txid";
