/*
surge4:
http-response https://api.bilibili.com/pgc/player/api/playurl requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/travisoa/Script/master/Surge/JS/bilibili_playurl.js
*/


//https://api.bilibili.com/pgc/player/api/playurl

const url = $request.url

function getParams(key) {
    const regex = new RegExp(`${key}=(\\d*?)&`)
    const tmp = regex.exec(url)
    return tmp ? tmp[1] : null
}

const api = `https://bilibili.mlyx.workers.dev/?cid=${getParams('175285400')}&ep_id=${getParams('317784')}`

$httpClient.get(api, (error, response, body) => {
    if (error || response.status == 404) {
        $notification.post('获取播放链接失败', '使用原始链接', 'biliplus未收录此资源或服务器错误')
        $done({})
    }
    else {
        $notification.post('获取播放链接成功', '使用大会员链接', 'success')
        $done({ body })
    }
})


//by:onewayticket255