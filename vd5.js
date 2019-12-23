var obj = JSON.parse($response.body); 
obj['pendingRenewalInfo']['isAutoRenewEnabled'] = true;
obj['latestExpirationDateMs'] = 1587631226000; 
$done({body: JSON.stringify(obj)});