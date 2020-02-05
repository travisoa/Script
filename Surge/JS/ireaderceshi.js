
var obj = JSON.parse($response.body);

//obj['body']['fee_info']['book_type'] = 0;
//obj['body']['fee_info']['original_price'] = 0;
//obj['body']['is_recharged'] = true;
obj['body']['fee_info']['is_recharged'] = true;
obj['body']['fee_info']['is_recharging_needed'] = false;
//obj['body']['fee_info']['price_per_unit'] = 0;
obj['body']['fee_info']['vouchers_balance'] = 9999;
obj['body']['fee_info']['coin_balance'] = 9999;
//obj['body']['fee_info']['is_book_vip'] = true;
//obj['body']['fee_info']['is_vip_used'] = true;
//obj['body']['fee_info']['price'] = 0;
$done({body: JSON.stringify(obj)});


/*
{
  "msg" : "OK",
  "code" : 0,
  "body" : {
    "is_ad_free" : 0
  }
}
*/