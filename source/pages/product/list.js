// pages/product/list.js
var MemberMgr = require("../../classes/MemberMgr.js");
var ProductMgr = require("../../classes/ProductMgr.js");
var StorageMgr = require("../../classes/StorageMgr.js");
var MerchantMgr = require("../../classes/MerchantMgr.js");
var Util = require("../../utils/util.js");


var KanproductApi=require('../../apis/kanproduct.js');
var kanproductApi=new KanproductApi();


Page({
  /**
   * 页面的初始数据
   */
  data: {
    "type":"all",
    member:{},
    displaytype:"",
    items:[],
    activeitem:0,
    bordercase:{},
  },
  setLs(){
    wx.setStorage({
      key: 'ls',
      data: 'hellop',
    });
  },
  changeType(e){
    var t=e.currentTarget.id;
    this.setData({ "type": t });
    this.count();
  },
  changeDisplayType(e){
    var displaytype = this.data.displaytype=="list"?"grid":"list";
    var storageMgr = new StorageMgr();
    storageMgr.setValue("list_displaytype", displaytype);
    this.setData({ displaytype: displaytype});
  },
  gotoDetail(e){
    var id=e.currentTarget.id;
    wx.navigateTo({
      url: 'detail?id='+id,
    })
  },
  gotoMyOrder(){
    wx.navigateTo({
      url: '../order/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var member=MemberMgr.getMember(1);

    var storageMgr=new StorageMgr();
    var displaytype = storageMgr.getValue("list_displaytype");
    console.log(displaytype);
    if(displaytype==""){
      displaytype="list";
    }
    var app_id = MerchantMgr.getAppId();
    kanproductApi.list({ zhichiapp_id: app_id,orderby:"seq desc,starttime"},function(data){
      var items = data;
      console.log(items);
      that.setData({ items: items});
      that.count(true);
      that.goroundtimer = setInterval(function () {
        that.count();
      }, 1000);
    });
    
    var broadcase = ProductMgr.getProductKanjiaBroadcase();

    that.setData({ member: member, displaytype: displaytype, broadcase: broadcase});
  },
  count(amountcut=false){
    var that=this;
    var items = that.data.items;
    var ty = that.data.type;
    var activeitem = 0;
    for (var i = 0; i < items.length; i++) {
      if (amountcut){
        items[i].lowprice_str = Util.amountcutting(items[i].lowprice);
      }
      items[i].starttime_s = Util.timecutting(items[i].starttime);
      items[i].endtime_s = Util.timecutting(items[i].endtime);
      if ((items[i].endtime_s.reminder > 0) && (ty == 'all' || (ty == 'going' && items[i].starttime_s.reminder < 0) || (ty == 'coming' && items[i].starttime_s.reminder > 0))) {
        activeitem++;
      }
    }
    //console.log(items);
    that.setData({ items: items, activeitem: activeitem });
  },
  goroundtimer:null,
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