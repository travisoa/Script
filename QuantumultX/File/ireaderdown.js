
var obj = JSON.parse($response.body); 
obj['body']['is_recharged'] = true;
obj['body']['fee_info']['is_vip_used'] = true;
obj['body']['fee_info']['price'] = 0;
$done({body: JSON.stringify(obj)});
