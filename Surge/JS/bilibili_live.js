/*
surge4:
http-response https://api.live.bilibili.com/xlive/app-room/v1/index/getInfoByRoom\?access_key requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/travisoa/Script/master/Surge/JS/bilibili_live.js
*/

let body = $response.body
body=JSON.parse(body)
body['data']['activity_banner_info']=null
body=JSON.stringify(body)
$done({body})


//by:onewayticket255