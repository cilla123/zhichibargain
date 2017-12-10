// pages/product/detail.js

var MemberMgr = require("../../classes/MemberMgr.js");
var ProductMgr = require("../../classes/ProductMgr.js");
var Util = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   * status: N:未发起砍价
   */
  data: {
    member: {},
    status: "N",
    product: {},
    broadcase:{},
    addtocart: true,
    count:1,
    selectedoptionstr:""
  },
  countminus(){
    var count=this.data.count;
    count--;
    if(count<1){
      count=1;
    }
    this.setData({count:count});
  },
  countplus() {
    var count = this.data.count;
    count++;
    if (count >this.data.product.reminder) {
      count = this.data.product.reminder;
    }
    this.setData({ count: count });
  },
  optionSelect(e){
    var product=this.data.product;
    var id=e.currentTarget.id.split("_");
    var optionid = id[0];
    var optionvalue = id[1];

    for(var i=0;i<product.specs.length;i++){
      if (product.specs[i].id==optionid){
        product.specs[i].value = optionvalue;
      }
    }
    this.setData({ product: product });
    this.updateselectedoptionstr();
  },
  updateselectedoptionstr(){
    var selectedoptionstr="";
    var product = this.data.product;
    for (var i = 0; i < product.specs.length; i++) {
      if (product.specs[i].value!="") {
        for (var j = 0; j < product.specs[i].options.length;j++){
          if (product.specs[i].value == product.specs[i].options[j].value){
            selectedoptionstr += '"' + product.specs[i].options[j].display+'"';
          }
        }
      }
    }
    this.setData({ selectedoptionstr: selectedoptionstr });
  },
  tryAddToCart(){
    this.setData({addtocart:true});
  },
  closeAddToCart() {
    this.setData({ addtocart: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var id = options.id;
    var member = MemberMgr.getMember();
    var product = ProductMgr.getProduct(id);
    var status = ProductMgr.getProductKanjiaStatus(member.id, product.id);
    var broadcase = ProductMgr.getProductKanjiaBroadcase();

    this.setData({ member: member, product: product, status: status, broadcase: broadcase });
    this.count();
    this.goroundtimer = setInterval(function () {
      that.count();
    }, 1000);
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