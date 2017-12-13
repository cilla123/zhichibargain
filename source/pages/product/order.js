// pages/product/order.js
var MemberMgr = require("../../classes/MemberMgr.js"); 
var ProductMgr = require("../../classes/ProductMgr.js");
var MerchantMgr = require("../../classes/MerchantMgr.js");
var Util = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    member: {},
    product: {},
    kanfriends: [],
    kanprice: 0,
    status:"P",
    comment:"",
    delivery:{},
    selfdeliveryposition:{},
    deliverytype:"express"
  },
  changeDeliveryType(e){
    var deliverytype = e.currentTarget.id;
    this.setData({ deliverytype: deliverytype });
  },
  commentChange(e){
    var comment=e.detail.value;
    this.setData({ comment: comment});
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    var member = MemberMgr.getMember();
    var product = ProductMgr.getProduct(id);
    var status = ProductMgr.getProductKanjiaStatus(member.id, product.id);
    var delivery = MemberMgr.getDefaultDeliveryAddress();
    var selfdeliveryposition = MerchantMgr.getSelfDeliveryPosition();
    var kanfriends = ProductMgr.getProductKanjiaFriends(this.data.member.id, this.data.product.id);
    var kanprice = 0;

    for (var i = 0; i < kanfriends.length; i++) {
      kanprice += kanfriends[i].kanprice;
    }

    this.setData({ member: member, product: product, status: status, kanfriends, kanprice, delivery: delivery, selfdeliveryposition: selfdeliveryposition});
    

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