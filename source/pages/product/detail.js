// pages/product/detail.js

var MemberMgr = require("../../classes/MemberMgr.js");
var ProductMgr = require("../../classes/ProductMgr.js");
var MerchantMgr = require("../../classes/MerchantMgr.js");


var KanproductApi = require('../../apis/kanproduct.js');
var kanproductApi = new KanproductApi();        

var KanorderApi = require('../../apis/kanorder.js');
var kanorderApi=new KanorderApi();

var Util = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   * status: N:未发起砍价
   */
  data: {
    member: {},
    product: {id:0},
    broadcase:{},
    addtocart: false,
    count:1,
    selectedoptionstr:""
  },
  tryKanjia(){
    
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

    for (var i in product.detail.model) {
      
      var options = [];
      if (product.detail.model[i].id == optionid){
        product.detail.model[i].value = optionvalue;
      }
    
    }

    this.setData({ product: product });
    this.updateselectedoptionstr();
  },
  updateselectedoptionstr(){
    var selectedoptionstr="";
    var product = this.data.product;
    for (var i in product.detail.model) {
      if (product.detail.model[i].value != "") {
        for (var j = 0; j < product.detail.model[i].subModelId.length; j++) {
          if (product.detail.model[i].value == product.detail.model[i].options[j].value) {
            selectedoptionstr += '"' + product.detail.model[i].options[j].display + '"';
          }
        }
      }
    }
    
    this.setData({ selectedoptionstr: selectedoptionstr });
  },
  tryAddToCart(){

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
          title: '提示',
          content: data.result,
          showCancel: false
        });
      } else {
        wx.redirectTo({
          url: 'kanjia?id=' + data.return,
        })
      }
    });
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
    //id=13;
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
      for (var i in product.detail.model) {
        console.log(product.detail.model[i].subModelId);
        var options = [];
        for (var j = 0; j < product.detail.model[i].subModelId.length; j++) {
          options.push({ display: product.detail.model[i].subModelName[j], value: product.detail.model[i].subModelId[j] });
        }
        product.detail.model[i].options = options;
        product.detail.model[i].value = "";
      }
      
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