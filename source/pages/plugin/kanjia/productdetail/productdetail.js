// pages/product/detail.js
var WxParse = require('../../../../components/wxParse/wxParse.js');

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
    app_id:"",
    member: {},
    product: {id:0},
    broadcase: {},
    showdescription: false,
    showevaluate:false,
    evaluate:[]
  },
  tryKanjia(){
    
  },
  perviewimg(e){
    var imgs=[];
    for (var i = 0; i < this.data.evaluate.length;i++){
      for (var j = 0; j < this.data.evaluate[i].assess_info.img_arr.length; j++) {
        imgs.push(this.data.evaluate[i].assess_info.img_arr[j]);
      }
    }
    wx.previewImage({
      current:e.currentTarget.id,
      urls: imgs,
    })
  },
  clickshowevaluate(){
    var that=this;
    if (this.data.showevaluate==false){
      kanproductApi.evaluate({product_id:this.data.product.id,zhichiapp_id:this.data.app_id},function(data){
        
        that.setData({ showevaluate: true, evaluate:data });
      });
    }else{
      this.setData({ showevaluate:false});
    }
  },
  tryAddToCart() {

    var json = {
      member_id: this.data.member.id,
      membername: this.data.member.name,
      membermobile: this.data.member.mobile,
      membercover: this.data.member.photo,
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
  bindShowDescription(){
    this.setData({showdescription:!this.data.showdescription});
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
          url: '../index/index'
        });
        return;
      } 
      product.lowprice_str = Util.amountcutting(product.lowprice);
      WxParse.wxParse('wxParseDescription', 'html', product.detail.description, that, 10);
      
      that.setData({ product: product, status: status });
      that.count();
      that.goroundtimer = setInterval(function () {
        that.count();
      }, 1000);
    });


    var broadcase = ProductMgr.getProductKanjiaBroadcase();

    this.setData({ member: member, broadcase: broadcase, app_id: app_id });

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