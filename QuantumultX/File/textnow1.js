var obj = JSON.parse($response.body); 
obj['show_ads'] = false;
obj['premium_calling'] = true;
$done({body: JSON.stringify(obj)});