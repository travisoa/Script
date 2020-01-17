/*
surge4:
http-response https://app.bilibili.com/x/resource/show/tab\?access_key requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/travisoa/Script/master/Surge/JS/bilibili_tab.js
*/

//Customize whitelist
let whitelist = ['追番', '推荐', '直播', '热门', '影视', '拜年祭']

let body = $response.body
body = JSON.parse(body)

body['data']['tab'].forEach((element, index) => {
    if (!(whitelist.includes(element['name']))) { body['data']['tab'].splice(index, 1) }
})

body['data']['bottom'].forEach((element, index) => {
    if (element['pos'] == 4) {
        body['data']['bottom'].splice(index, 1)
    }
})

delete body['data']['top']
body = JSON.stringify(body)
$done({ body }) 




//by:onewayticket255