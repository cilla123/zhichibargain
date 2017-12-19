
        //使用方法，下面两句复制到page的js文件的头部，然后你猜
        //var KanorderApi=require('/apis/kanorder.js');
        //var kanorderApi=new KanorderApi();
        var APIConfig=require('../ApiConfig.js');
        var apiconfig = new APIConfig();
class KanorderApi
{
  order(json, callback, showLoading = true) {
    if (showLoading) {
      apiconfig.ShowLoading();
    }
    wx.request({
      url: apiconfig.ServerUrl + '/kanorder/order',
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
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading) {
          apiconfig.CloseLoading();
        }
      }
    })
  }; 
  detail(json, callback, showLoading = true) {
    if (showLoading) {
      apiconfig.ShowLoading();
    }
    wx.request({
      url: apiconfig.ServerUrl + '/kanorder/detail',
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
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading) {
          apiconfig.CloseLoading();
        }
      }
    })
  };

  getmykanprice(json, callback, showLoading = true) {
    if (showLoading) {
      apiconfig.ShowLoading();
    }
    wx.request({
      url: apiconfig.ServerUrl + '/kanorder/getmykanprice',
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
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading) {
          apiconfig.CloseLoading();
        }
      }
    })
  };
  kan(json, callback, showLoading = true) {
    if (showLoading) {
      apiconfig.ShowLoading();
    }
    wx.request({
      url: apiconfig.ServerUrl + '/kanorder/kan',
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
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading) {
          apiconfig.CloseLoading();
        }
      }
    })
  };
  friends(json, callback, showLoading = true) {
    if (showLoading) {
      apiconfig.ShowLoading();
    }
    wx.request({
      url: apiconfig.ServerUrl + '/kanorder/friends',
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
        console.log(res);
        callback(false);
      },
      complete: function (res) {
        console.log(res);

        if (showLoading) {
          apiconfig.CloseLoading();
        }
      }
    })
  };
}
module.exports = KanorderApi;
