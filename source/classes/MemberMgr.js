class MemberMgr {
  constructor(){
  }
  static getMember(id){
    //console.log(this.name);
    var member={
      id:1,
      name: "小黑妹",
      photo: "../../images/product.png"
    };
    return member;
  }
}

module.exports = MemberMgr;