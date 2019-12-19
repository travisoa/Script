var obj = JSON.parse($response.body); 
obj['data']['updateTime'] = 1576693162; 
obj['data']['registerTimeStamp'] = 1576693162;
obj['data']['validity'] = "2030-01-19";
obj['data']['validityTimeStamp'] =1895011200; 
obj['data']['userLevel'] = 2; 
$done({body: JSON.stringify(obj)});