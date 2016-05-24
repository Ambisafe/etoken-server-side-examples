<?php
$tx = $_POST['event'];
echo "transaction hash: {$tx['transactionHash']}";
echo "transaction comment: {$tx['reference']}";
echo "ICAP: {$tx['icap']}";
echo "amount: {$tx['value']}";
echo "from: {$tx['from']}";
echo "to: {$tx['to']}";
