balance = `node get-balance.js 0xe2942418b2d87a1d88cce66d0b11c7ef16a72971`;
print "balance: " + balance;

#send transaction to regular address
destination = '0xe2942418b2d87a1d88cce66d0b11c7ef16a72971';
amount = 1.12;
txid = `node send-tx.js #{destination} #{amount}`;
print "transaction hash: #{txid}";


#send transaction to ICAP address
destination = 'INST2314ACCT234234';
amount = 1.12;
txid = `node send-tx.js #{destination} #{amount}`;
print "second transaction hash: #{txid}";
