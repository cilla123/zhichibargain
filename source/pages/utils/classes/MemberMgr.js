class MemberMgr {
  constructor(){
  }
  static getMember(id){
    //console.log(this.name);
    var member={
      id:1,
      name: "小黑妹",
      shortname: "小黑妹".substr(0,8),
      mobile: "13751082562",
      photo: "../../images/product.png"
    };
    return member;
  }
  static getDefaultDeliveryAddress(id){
    return {name:"夏黑",contact:"18888888888",address:"宁夏自治区广东人不会打字"};
  }
}

module.exports = MemberMgr;