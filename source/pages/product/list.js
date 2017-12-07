// pages/product/list.js
var MemberMgr=require("../../classes/MemberMgr.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "type":"all",
    member:{},
    displaytype:"LIST",
    items:[]
  },
  setLs(){
    wx.setStorage({
      key: 'ls',
      data: 'hellop',
    });
  },
  changeType(e){
    var t=e.currentTarget.id;
    this.setData({"type":t});
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var member=MemberMgr.getMember(1);

    var items=[];
    items.push({
      img:"../../images/product.png",
      title:"爱国者超薄便携通用乌龙奶盖茶",
      price: 9999.00,
      oriprice:14100,
      "type":"going",
      reminder: 20,
      starttime: "2017-12-10",
      endtime:"2017-12-31"
    });
    items.push({
      img: "../../images/product.png",
      title: "爱国者超薄便携通用乌龙奶盖茶",
      price: 9999.00,
      oriprice: 14100,
      "type": "coming",
      reminder: 20,
      starttime: "2017-12-10",
      endtime: "2017-12-31"
    });

    that.setData({ member: member,items:items });
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