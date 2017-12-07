class MemberMgr {
  constructor(){
  }
  static getMember(id){
    //console.log(this.name);
    var member={
      id:1,
      name:"小黑妹"
    };
    return member;
  }
}

module.exports = MemberMgr;