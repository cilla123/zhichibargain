// pages/product/list.js
var MemberMgr = require("../utils/classes/MemberMgr.js");
var ProductMgr = require("../utils/classes/ProductMgr.js");
var MerchantMgr = require("../utils/classes/MerchantMgr.js");
var Util = require("../utils/utils/util.js");



var KanproductApi = require('../utils/apis/kanproduct.js');
var kanproductApi = new KanproductApi();

var KanorderApi = require('../utils/apis/kanorder.js');
var kanorderApi = new KanorderApi();

var WechatApi = require('../utils/apis/wechat.js');
var wechatApi=new WechatApi();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    "type": "cut",
    cuttype: "P",
    ordertype:"order_all",
    items_p: [],
    items_finish: [],
    items_myhelp: [],
    items_all: [],
    app_id:""
  },
  changeCutType(e){
    this.setData({ "cuttype": e.currentTarget.id });
  },
  changeType(e){
    this.setData({"type":e.currentTarget.id});
  },
  gotoKanjia(e){
    wx.navigateTo({
      url: '../productkanjia/productkanjia?id='+e.currentTarget.id,
    })
  },
  gotoPay(e) {
    var json={
      zhichiapp_id:this.data.app_id,
      order_id: e.currentTarget.id,
      session_key:this.data.member.session_key
    };
    var that=this;
    wechatApi.pay(json,function(data){
      wx.requestPayment({
        timeStamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: data.signType,
        paySign: data.paySign,
        success:function(res){
          //that.loadingData();
          console.log(data);
          wx.redirectTo({
            url: '../../../goodsOrderDetail/goodsOrderDetail?detail=' + data.orderno,
          })
        }
      })
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var member = MemberMgr.getMember();
    var app_id = MerchantMgr.getAppId();


    that.setData({ member: member, app_id: app_id });
    this.loadingData();
  },
  loadingData(){
    var that = this;
    var member = this.data.member;
    var app_id = this.data.app_id;
    kanorderApi.progress({ member_id: member.id, zhichiapp_id: app_id }, function (data) {
      that.setData({ items_p: data });
    });
    kanorderApi.finish({ member_id: member.id, zhichiapp_id: app_id }, function (data) {
      that.setData({ items_finish: data });
    });
    kanorderApi.myhelp({ member_id: member.id, zhichiapp_id: app_id }, function (data) {
      that.setData({ items_myhelp: data });
    });
    kanorderApi.myhelp({ member_id: member.id, zhichiapp_id: app_id }, function (data) {
      that.setData({ items_all: data });
    });
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
    clearInterval(goroundtimer);
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