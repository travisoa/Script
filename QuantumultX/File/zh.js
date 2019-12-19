var obj= {
  "masked_phone_number": {
  "national_number": "51****0258",
  "country_code": "1"
 },
 "name": "猫爱吃草",
 "is_unicom_free": false,
 "url": "https://api.zhihu.com/people/66d06e9822f90bd960b42721d968f0a9",
 "gender": 1,
 "is_following_mp_wechat": false,
 "user_type": "people",
 "subscriptions": [
  {
   "appellation": "尊敬的超级会员",
   "name": "svip",
   "has_checked_in": false,
   "title": "盐选会员",
   "checked_in_days": 0,
   "is_active": true,
   "rank": null,
   "alert": "盐选会员2020-04-09 到期",
   "show_recharge_notic": true,
   "contract_id": null,
   "checked_in_url": "https://www.zhihu.com/remix/instabooks",
   "expires_at": 1565971199,
   "package_list": [],
   "is_expired": true,
   "id": "4",
   "available_at": 1565363093
  },
  {
   "appellation": "尊敬的读书会会员",
   "name": "instabook",
   "has_checked_in": false,
   "title": "读书会员",
   "checked_in_days": 0,
   "is_active": true,
   "rank": null,
   "alert": "读书会员 2020-04-09 到期",
   "show_recharge_notic": false,
   "contract_id": null,
   "checked_in_url": "https://www.zhihu.com/remix/instabooks",
   "expires_at": 1586447999,
   "package_list": [],
   "is_expired": false,
   "id": "2",
   "available_at": 1565971199
  }
 ],
 "member_rights": [
  {
   "status": "active",
   "alert": "盐选会员 2020.04.09 到期",
   "available_at": 1565971199,
   "type": "instabook",
   "expire_at": 1586447999,
   "icon": {
    "day": "https://unicom.zhimg.com/pic3.zhimg.com/v2-48cb3988822953bd5c72b072d45461e9_r.png",
    "night": "https://unicom.zhimg.com/pic3.zhimg.com/v2-48cb3988822953bd5c72b072d45461e9_r.png"
   }
  }
 ],
 "url_token": "reseted1553237631503",
 "headline": "",
 "avatar_url": "https://unicom.zhimg.com/pic1.zhimg.com/v2-345f8e13965dbe7e39e60b5bf31391ca_s.jpg",
 "is_bind_phone": true,
 "has_speaker_admin_permission": false,
 "actived": 1522120228,
 "type": "people",
 "id": "66d06e9822f90bd960b42721d968f0a9"
}
};

$done({body: JSON.stringify(obj)});

//