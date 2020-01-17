/*
surge4:
http-response https://app.bilibili.com/x/v2/space\?access_key requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/travisoa/Script/master/Surge/JS/bilibili_space.js
*/


let url = $request.url
let regex = /vmid=(\d*)/
let vmid = regex.exec(url)
let mid = vmid[1]
let api = `https://space.bilibili.com/ajax/member/getSubmitVideos?mid=${mid}&pagesize=10&order=stow`
$httpClient.get(api, (error, response, body) => {
  if (error) {
    $done({})
  }
  else {
    console.log(body)
    body = JSON.parse(body)
    let info = ""
    body['data']['vlist'].forEach((element, index) => {
      index++
      let scheme = `bilibili://av/${element['aid']}`
      info += index + ": " + element['title'] + "\n" + scheme + "\n"
    })
    $notification.post('收藏排行前10', '长按进入', info)
    $done({})
  }
})

//by:onewayticket255

