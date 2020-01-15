
var obj = JSON.parse($response.body);

obj['data']['downloadTicket'] = 9999;
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