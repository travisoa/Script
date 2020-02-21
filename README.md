# QuantunmultX规则脚本整理，纯属自用！
签到脚本需先登录相应网站，获取cookies,然后禁用即可！获取网站如下：
百度贴吧：https://tieba.baidu.com/index/tbwise/feed?shownew=1
网易云音乐：https://music.163.com/m
腾讯视频： 
1. 先把`*.video.qq.com`加到`[MITM]`
2. 再配置重写规则:
   - Surge: 把两条远程脚本放到`[Script]`
   - QuanX: 把`videoqq.cookie.js`和`videoqq.js`传到`On My iPhone - Quantumult X - Scripts` (传到 iCloud 相同目录也可, 注意要打开 quanx 的 iCloud 开关)
3. 获取 Cookie:
   - 手机浏览器访问: https://film.qq.com/
   - 随便选 1 部电影观看
4. 系统提示: `获取Cookie: 成功` （如果不提示获取成功, 点自己头像退出登录, 重新登录下应该就能获取）
5. 最后就可以把第 1 条脚本注释掉了

> 第 1 条脚本是用来获取 cookie 的, 用浏览器访问一次获取 cookie 成功后就可以删掉或注释掉了, 但请确保在`登录成功`后再获取 cookie.

> 第 2 条脚本是签到脚本, 每天`00:00:10`执行一次.

## 说明 （移动端网页版）

1. 先把`v.qq.com`加到`[MITM]`
2. 手机浏览器访问下: https://film.qq.com/ 随便选 1 部电影观看
3. 手机浏览器访问下: http://v.qq.com/x/bu/mobile_checkin 页面提示提示`签到成功`, 系统提示: `获取Cookie: 成功` （为保成功率，请刷新一下页面再获取一次）
4. 运行下签到脚本看是否提示
5. 最后就可以把第 1 条脚本注释掉了
京东：https://bean.m.jd.com（点击签到）
爱奇艺:打开app即可

# 项目来源，特别感谢
@Nobyda(https://github.com/NobyDa)
@langkhach270389(https://github.com/langkhach270389)
@yichahucha(https://github.com/yichahucha)
@onewayticket255(https://github.com/onewayticket255)