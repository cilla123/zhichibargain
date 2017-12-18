// pages/product/detail.js

var MemberMgr = require("../../classes/MemberMgr.js");
var ProductMgr = require("../../classes/ProductMgr.js");
var MerchantMgr = require("../../classes/MerchantMgr.js");


var KanproductApi = require('../../apis/kanproduct.js');
var kanproductApi = new KanproductApi();

var Util = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   * status: N:未发起砍价
   */
  data: {
    id:0,
    member: {},
    order:{},
    status: "E",
    product: {},
    kanfriends: [],
    kanprice: 0,
    kanprice_str: {b:"0","s":".00"},
    broadcase:{},
    bangtype:"rank",
    rankkanfriends:[],
    showmorerankfriends: 0,
    timekanfriends: [],
    showmoretimefriends: 0,
    scolltomiddle:false,
    progressfix:70.0
  },
  scrollmonitor(e){
    //console.log(e);
    var scrolltop=e.detail.scrollTop;
    var scolltomiddle=scrolltop>20;
    if (this.data.scolltomiddle != scolltomiddle){
      this.setData({ scolltomiddle: scolltomiddle});
    }
  },
  changebangtype(e){
    var bangtype=e.currentTarget.id;
    this.setData({ bangtype: bangtype});
  },
  rankcheckmore(){
    console.log(this.data.showmorerankfriends);
    this.setData({ showmorerankfriends: ++this.data.showmorerankfriends });
    console.log(this.data.showmorerankfriends);
  },
  timecheckmore() {
    this.setData({ showmoretimefriends: ++this.data.showmoretimefriends });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var id = options.id;
    id=18;
    var member = MemberMgr.getMember();
    var app_id = MerchantMgr.getAppId();

    var KanorderApi = require('../../apis/kanorder.js');
    var kanorderApi = new KanorderApi();

    kanorderApi.detail({id:id,zhichiapp_id:app_id},function(data){
      if (data.id == undefined) {
        wx.redirectTo({
          url: 'list'
        });
        return;
      }
      var order=data;
      var id=data.id;
      console.log(id);
      var status=data.status;

      var product=data.product;
      //product.oriprice = 1000;
      //product.lowprice = 990;
      product.lowprice_str = Util.amountcutting(product.lowprice);

      order.member=member;

      that.setData({ product: product, status: status, id: id, order:order });


      that.count();
      that.goroundtimer = setInterval(function () {
        that.count();
      }, 1000);

      that.getKanPrice();
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
  gotoTryPay(){
      wx.navigateTo({
        url: 'order?id='+this.data.id,
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  gokanpricetimer: null,
  getKanPrice(){
    this.ccc++;
    var kanfriends = ProductMgr.getProductKanjiaFriends(this.data.member.id, this.data.product.id);
    var kanprice = 0;

    for(var i=0;i<kanfriends.length;i++){
      kanprice += kanfriends[i].kanprice;
    }

    if (kanprice > (this.data.product.oriprice - this.data.product.lowprice)){
      kanprice=(this.data.product.oriprice-this.data.product.lowprice);
    }


    var rankkanfriends=kanfriends.sort(function(a,b){
      return a.kanprice<b.kanprice;
    });
    var timekanfriends = kanfriends.sort(function (a, b) {
      return a.kanprice_date < b.kanprice_date;
    });

    for (var i = 0; i < rankkanfriends.length; i++) {
      rankkanfriends[i].seq = i + 1;
    }

    this.setData({ kanprice: kanprice, kanprice_str: Util.amountcutting(kanprice), kanfriends: kanfriends, rankkanfriends: rankkanfriends, timekanfriends:timekanfriends});
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