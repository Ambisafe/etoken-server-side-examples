<?php
$tx = $_POST['event'];
echo "transaction hash: {$tx['transactionHash']}";
echo "transaction comment / user account id for ICAP: {$tx['reference']}";
echo "amount: {$tx['value']}";
