
        //使用方法，下面两句复制到page的js文件的头部，然后你猜
        //var KanproductApi=require('/apis/kanproduct.js');
        //var kanproductApi=new KanproductApi();
        var APIConfig=require('../ApiConfig.js');
        var apiconfig = new APIConfig();
class KanproductApi
{
   //
    list(searchcondition_json,callback, showLoading = true){
					if(showLoading){
						apiconfig.ShowLoading();
					}
                  wx.request({
                    url: apiconfig.ServerUrl+'/kanproduct/list', 
                    data:searchcondition_json,
                    method:'POST',
                    dataType:'json',
                    header: {
                      'content-type': 'application/x-www-form-urlencoded'
                    },
                    success: function (res) {
                      if(callback!=null){
                        callback(res.data);
                      }
                    },
                    fail:function(res){
                      console.log(res);
                      callback(false);
                    },
                    complete:function(res){
                      console.log(res);
					  
						if(showLoading){
							apiconfig.CloseLoading();
						}
                    }
                  })
  };

  detail(searchcondition_json, callback, showLoading = true) {
    if (showLoading) {
      apiconfig.ShowLoading();
    }
    wx.request({
      url: apiconfig.ServerUrl + '/kanproduct/detail',
      data: searchcondition_json,
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

  evaluate(json, callback, showLoading = true) {
    if (showLoading) {
      apiconfig.ShowLoading();
    }
    wx.request({
      url: apiconfig.ServerUrl + '/kanproduct/evaluate',
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
module.exports = KanproductApi;
