<?php
# get balance
$address = '1c4a10b09f54c2a2601b71e7644124efefd2cd7b';
$balance = `node get-balance.js $address\n`;
echo "balance: $balance";

#send transaction to regular address
$destination = '1c4a10b09f54c2a2601b71e7644124efefd2cd7b';
$amount = 1.12;
$txid = `node send-tx.js $destination`;
echo "transaction hash: $txid";


#send transaction to icap address
$destination = 'INST2314ACCT234234';
$amount = 1.12;
$txid = `node send-tx.js $destination`;
echo "second transaction hash: $txid";
