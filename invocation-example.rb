balance = `node get-balance.js 0x1ff21eca1c3ba96ed53783ab9c92ffbf77862584`;
print "balance: " + balance;

#send transaction to regular address
destination = '0x1ff21eca1c3ba96ed53783ab9c92ffbf77862584';
amount = 1.12;
txid = `node send-tx.js #{destination} #{amount}`;
print "transaction hash: #{txid}";


#send transaction to ICAP address
destination = 'AMBICLIENT123';
amount = 1.12;
txid = `node send-tx.js #{destination} #{amount}`;
print "second transaction hash: #{txid}";
