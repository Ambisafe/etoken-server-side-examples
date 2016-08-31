<?php
$tx = json_decode(file_get_contents('php://input'), TRUE);
echo "transaction hash: {$tx['transactionHash']}";
echo "transaction comment: {$tx['eventData']['reference']}";
echo "currency: {$tx['eventData']['symbol']}";
echo "amount: {$tx['eventData']['value']}";
echo "from: {$tx['eventData']['from']}";
echo "to: {$tx['eventData']['to']}";
