<?php
# get balance
$address = '0x1ff21eca1c3ba96ed53783ab9c92ffbf77862584';
$balance = `node get-balance.js $address\n`;
echo "balance: $balance";

#send transaction to regular address
$destination = '0x1ff21eca1c3ba96ed53783ab9c92ffbf77862584';
$amount = 1.12;
$txid = `node send-tx.js $destination $amount`;
echo "transaction hash: $txid";

#send transaction to icap address
$destination = 'AMBICLIENT123';
$amount = 1.12;
$txid = `node send-tx.js $destination $amount`;
echo "second transaction hash: $txid";
