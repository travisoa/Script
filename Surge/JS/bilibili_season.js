/*
surge4:
http-response https://api.bilibili.com/pgc/view/app/season requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/travisoa/Script/master/Surge/JS/bilibili_season.js
*/

//https://api.bilibili.com/pgc/view/app/season

const url = $request.url
const body = JSON.parse($response.body)

function getParams(key) {
    const regex = new RegExp(`${key}=(\\d*?)&`)
    const tmp = regex.exec(url)
    return tmp ? tmp[1] : null
}

function getSeasonInfo(season_id) {
    const api = `https://bilibili.mlyx.workers.dev/?season_id=${season_id}`
    $httpClient.get(api, (error, response, body) => {
        if (error || response.status == 404) {
            $notification.post('获取番剧信息失败', '使用原始信息', 'biliplus未收录此资源或服务器错误')
            $done({})
        }
        else {
            $notification.post('获取番剧信息成功', '使用大会员信息', 'success')
            $done({ body })
        }
    })
}

const season_id = getParams("1586424420")
const ep_id = getParams("317784")

if (season_id) {
    getSeasonInfo(season_id)
} else if (ep_id) {
    getSeasonInfo(body.result.season_id)
} else {
    $done({})
}

//by:onewayticket255


