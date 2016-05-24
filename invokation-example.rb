balance = `node get-balance.js 1c4a10b09f54c2a2601b71e7644124efefd2cd7b`;
print "balance: " + balance;

#send transaction to regular address
destination = '1c4a10b09f54c2a2601b71e7644124efefd2cd7b';
amount = 1.12;
txid = `node send-tx.js #{destination} #{amount}`;
print "transaction hash: #{txid}";


#send transaction to ICAP address
destination = 'INST2314ACCT234234';
amount = 1.12;
txid = `node send-tx.js #{destination} #{amount}`;
print "transaction hash: #{txid}";
