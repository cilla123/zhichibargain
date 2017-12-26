// pages/product/list.js
var MemberMgr = require("../utils/classes/MemberMgr.js");
var ProductMgr = require("../utils/classes/ProductMgr.js");
var StorageMgr = require("../utils/classes/StorageMgr.js");
var MerchantMgr = require("../utils/classes/MerchantMgr.js");
var Util = require("../utils/utils/util.js");


var KanproductApi=require('../utils/apis/kanproduct.js');
var kanproductApi=new KanproductApi();

var BoardcastApi = require('../utils/apis/boardcast.js');
var boardcastApi=new BoardcastApi();

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
    broadcase:[],
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
      url: '../productdetail/productdetail?id='+id,
    })
  },
  gotoMyOrder(){
    wx.navigateTo({
      url: '../order/order',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var member=MemberMgr.getMember();

    var storageMgr=new StorageMgr();
    var displaytype = storageMgr.getValue("list_displaytype");
    if(displaytype==""){
      displaytype="list";
    }
    var app_id = MerchantMgr.getAppId();
    kanproductApi.list({ zhichiapp_id: app_id,orderby:"seq desc,starttime"},function(data){
      var items = data;
      that.setData({ items: items});
      that.count(true);
      that.goroundtimer = setInterval(function () {
        that.count();
      }, 1000);
    });
    boardcastApi.allsuccess({ zhichiapp_id: MerchantMgr.getAppId()},function(data){
      // var a=[];
      // a.push({ shortname: "11111", oriprice: 100, price: 90 });
      // a.push({ shortname: "22222", oriprice: 100, price: 90 });
      // a.push({ shortname: "33333", oriprice: 100, price: 90 });
      that.setData({ boradcast: data });
    
    });

    that.setData({ member: member, displaytype: displaytype});
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
  goroundtimer: null,
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