class MemberMgr {
  
  constructor(){
  }
  static getMember(){
    //console.log(this.name);
    var app = getApp();
    console.log("memberinfo");
    console.log(app.globalData);

    var member={
      usertoken: app.globalData.userInfo.user_token,
      name: app.globalData.userInfo.nickname,
      mobile: app.globalData.userInfo.phone,
      photo: app.globalData.userInfo.cover_thumb
    };
    if (app.globalData.userInfo.nickname.length>8){
      member.shortname = app.globalData.userInfo.nickname.substr(0, 8) + (app.globalData.userInfo.nickname.length > 8 ? "..." : "");
    }else{
      member.shortname = app.globalData.userInfo.nickname;
    }
    return member;
  }
  static getDefaultDeliveryAddress(id){
    return {name:"夏黑",contact:"18888888888",address:"宁夏自治区广东人不会打字"};
  }
}

module.exports = MemberMgr;