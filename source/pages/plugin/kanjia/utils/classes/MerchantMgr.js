class MerchantMgr {
  constructor() {
  }
  static getSelfDeliveryPosition(){
    //var items=[];
    //items.push();
    return { province: "台湾省", address: "台湾省哈哈哈哈哈", contact: "131111111" };
  }
  static getAppId(){
    var app=getApp();
    console.log(app.getAppId());
    return app.getAppId();
  }
}

module.exports = MerchantMgr;