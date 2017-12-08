// pages/product/list.js
var MemberMgr = require("../../classes/MemberMgr.js");
var StorageMgr = require("../../classes/StorageMgr.js");
var Util = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "type":"all",
    member:{},
    displaytype:"",
    items:[],
    activeitem:0
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

    var items=[];
    var nowtime=new Date().getTime();
    items.push({
      id:1,
      img:"../../images/product.png",
      title:"爱国者超薄便携通用乌龙奶盖茶",
      price: 9999.00,
      oriprice:14100,
      allstore: 20,
      reminder: 7,
      starttime: "2017-12-9",
      endtime: "2017-12-31",
      starttime_s: Util.timecutting("2017-12-9"),
      endtime_s: Util.timecutting("2017-12-31")
    });
    items.push({
      id: 2,
      img: "../../images/product.png",
      title: "爱国者超薄便携通用乌龙奶盖茶",
      price: 9999.00,
      oriprice: 14100,
      allstore: 20,
      reminder: 20,
      starttime: "2017-12-10",
      endtime: "2017-12-31",
      starttime_s: Util.timecutting("2017-12-10"),
      endtime_s: Util.timecutting("2017-12-31")
    });
    items.push({
      id: 3,
      img: "../../images/product.png",
      title: "爱国者超薄便携通用乌龙奶盖茶",
      price: 9999.00,
      oriprice: 14100,
      allstore: 20,
      reminder: 20,
      starttime: "2017-12-10",
      endtime: "2017-12-31",
      starttime_s: Util.timecutting("2017-12-10"),
      endtime_s: Util.timecutting("2017-12-31")
    });

    that.setData({ member: member, items: items, displaytype: displaytype });
    this.count();
    this.goroundtimer=setInterval(function(){
      that.count();
    },1000);
  },
  count(){
    var that=this;
    var items = that.data.items;
    var ty = that.data.type;
    var activeitem = 0;
    for (var i = 0; i < items.length; i++) {
      items[i].starttime_s = Util.timecutting(items[i].starttime);
      items[i].endtime_s = Util.timecutting(items[i].endtime);
      if ((items[i].endtime_s.reminder > 0) && (ty == 'all' || (ty == 'going' && items[i].starttime_s.reminder < 0) || (ty == 'coming' && items[i].starttime_s.reminder > 0))) {
        activeitem++;
      }
    }
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