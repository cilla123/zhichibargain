
        //使用方法，下面两句复制到page的js文件的头部，然后你猜
        //var BoardcastApi=require('/apis/boardcast.js');
        //var boardcastApi=new BoardcastApi();
        var APIConfig=require('../ApiConfig.js');
        var apiconfig = new APIConfig();
class BoardcastApi
{
  allsuccess(json, callback, showLoading = true) {
    if (showLoading) {
      apiconfig.ShowLoading();
    }
    wx.request({
      url: apiconfig.ServerUrl + '/boardcast/allsuccess',
      data: json,
      method: 'POST',
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (callback != null) {
          callback(res.data);
        }
      },
      fail: function (res) {
        callback(false);
      },
      complete: function (res) {

        if (showLoading) {
          apiconfig.CloseLoading();
        }
      }
    })
  }; 
}
module.exports = BoardcastApi;
