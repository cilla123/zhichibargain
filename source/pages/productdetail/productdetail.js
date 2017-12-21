// pages/product/detail.js

var MemberMgr = require("../utils/classes/MemberMgr.js");
var ProductMgr = require("../utils/classes/ProductMgr.js");
var MerchantMgr = require("../utils/classes/MerchantMgr.js");


var KanproductApi = require('../utils/apis/kanproduct.js');
var kanproductApi = new KanproductApi();        

var KanorderApi = require('../utils/apis/kanorder.js');
var kanorderApi=new KanorderApi();

var Util = require("../utils/utils/util.js");

Page({

  /**
   * 页面的初始数据
   * status: N:未发起砍价
   */
  data: {
    member: {},
    product: {id:0},
    broadcase:{}
  },
  tryKanjia(){
    
  },

  tryAddToCart() {

    var json = {
      member_id: this.data.member.id,
      membername: this.data.member.name,
      membermobile: this.data.member.mobile,
      zhichiapp_id: MerchantMgr.getAppId(),
      product_id: this.data.product.id
    };
    kanorderApi.order(json, function (data) {
      if (data.code != "0") {
        wx.showModal({
          title: '发起砍价失败',
          content: data.result,
          showCancel: false
        });
      } else {
        wx.navigateTo({
          url: '../productkanjia/productkanjia?id=' + data.return,
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var id = options.id;
    //id=8;
    var member = MemberMgr.getMember();
    var app_id = MerchantMgr.getAppId();


    kanproductApi.detail({zhichiapp_id:app_id,member_id:member.id,id:id},function(data){
      var product = data;
      
      if(product.id==undefined){
        wx.redirectTo({
          url: 'list'
        });
        return;
      } 
      product.lowprice_str = Util.amountcutting(product.lowprice);
      
      
      console.log(product.detail.model);
      that.setData({ product: product, status: status });
      that.count();
      that.goroundtimer = setInterval(function () {
        that.count();
      }, 1000);
    });


    var broadcase = ProductMgr.getProductKanjiaBroadcase();

    this.setData({ member: member,broadcase: broadcase });

  },
  goroundtimer:null,
  count() {
    var that = this;
    var product = that.data.product;
    
    var activeitem = 0;
    product.starttime_s = Util.timecutting(product.starttime);
    product.endtime_s = Util.timecutting(product.endtime);

    that.setData({ product: product
    , now: new Date().getTime()
      , s: new Date(product.starttime).getTime()});

      
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.goroundtimer);
    clearInterval(this.gokanpricetimer);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})