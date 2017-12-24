class MemberMgr {
  
  constructor(){
  }
  static getMember(){
    //console.log(this.name);
    var app = getApp();
    console.log("memberinfo");
    console.log(app.globalData.userInfo);

    var member={
      usertoken: app.globalData.userInfo.user_token,
      name: app.globalData.userInfo.nickname,
      shortname: app.globalData.userInfo.nickname.substr(0, 8) + (app.globalData.userInfo.nickname.length>8?"...":""),
      mobile: app.globalData.userInfo.phone,
      photo: app.globalData.userInfo.cover_thumb
    };
    return member;
  }
  static getDefaultDeliveryAddress(id){
    return {name:"夏黑",contact:"18888888888",address:"宁夏自治区广东人不会打字"};
  }
}

module.exports = MemberMgr;