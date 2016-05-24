balance = `node get-balance.js 0x53786e5722f854a62783395dcdc27d633a9b063e`;
print "balance: " + balance;

#send transaction to regular address
destination = '0x53786e5722f854a62783395dcdc27d633a9b063e';
amount = 1.12;
txid = `node send-tx.js #{destination} #{amount}`;
print "transaction hash: #{txid}";


#send transaction to ICAP address
destination = 'AMBICLIENT123';
amount = 1.12;
txid = `node send-tx.js #{destination} #{amount}`;
print "second transaction hash: #{txid}";
