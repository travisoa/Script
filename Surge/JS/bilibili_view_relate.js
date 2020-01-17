/*
surge4:
http-response https://app.bilibili.com/x/v2/view\?access_key requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/travisoa/Script/master/Surge/JS/bilibili_view_relate.js
*/


let body = $response.body
body=JSON.parse(body)
body['data']['relates'].forEach((element, index)=> {
   if(element.hasOwnProperty('is_ad')||!element.hasOwnProperty('aid')){      
      body['data']['relates'].splice(index,1)  
    }
})
delete body['data']['cms']
body=JSON.stringify(body)
$done({body})

//by:onewayticket255

