/*
Mitm = i.weread.qq.com

http-response ^https:\/\/i\.weread\.qq\.com\/pay\/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/hello1983/surge4/master/surge%204/surge-js/weixin/dushu/wxds.js,script-update-interval=0
*/

var obj = JSON.parse($response.body);
obj ={ "expiredTime":1888726173,"expired":0,"isPaying":1,"permanent":1,"day":0}
$done({body: JSON.stringify(obj)});