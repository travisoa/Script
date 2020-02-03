var obj = JSON.parse($response.body);
obj['originalTransactionId'] = "20000625420102";
obj['subscriptionState'] = "trial";
obj['isInGracePeriod'] = false;
obj['subscriptionExpirationDate'] = "17:48 25/11/2099";
obj['isDocuments6User'] = true;
obj['isEligibleForIntroPeriod'] = false;
obj['subscriptionAutoRenewStatus'] = "autoRenewOff";
obj['subscriptionReceiptId'] = "1530908572000";


$done({body: JSON.stringify(obj)});


/*
var obj= {
  "originalTransactionId" : "20000625420102",
  "subscriptionState" : "trial",
  "isInGracePeriod" : false,
  "subscriptionExpirationDate" : "17:48 25/11/2099",
  "isDocuments6User" : true,
  "isEligibleForIntroPeriod" : false,
  "subscriptionAutoRenewStatus" : "autoRenewOff",
  "subscriptionReceiptId" : "1530908572000"
};

$done({body: JSON.stringify(obj)});
*/

// Descriptions