class StorageMgr {
  tag="kanjia";
  constructor(){
    
  }

  getValue(key,callback){

    key = this.tag + "_" + key;
    console.log(key);
    if(callback!=undefined){
      wx.getStorage({
        key: key,
        success: function(res) {
          callback(res);
        },
      })
    }else{
      return wx.getStorageSync(key);
    }
  }

  setValue(key,value) {
    key = this.tag + "_" + key;
    console.log(key);
    wx.setStorage({
      key: key,
      data: value,
    });
  }
  

}

module.exports = StorageMgr;