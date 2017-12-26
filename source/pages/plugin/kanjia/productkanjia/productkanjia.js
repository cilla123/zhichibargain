// pages/product/detail.js
var WxParse = require('../../../../components/wxParse/wxParse.js');

var MemberMgr = require("../utils/classes/MemberMgr.js");
var ProductMgr = require("../utils/classes/ProductMgr.js");
var MerchantMgr = require("../utils/classes/MerchantMgr.js");


var KanproductApi = require('../utils/apis/kanproduct.js');
var kanproductApi = new KanproductApi();

var KanorderApi = require('../utils/apis/kanorder.js');
var kanorderApi = new KanorderApi();

var Util = require("../utils/utils/util.js");

Page({

  /**
   * 页面的初始数据
   * status: N:未发起砍价
   */
  data: {
    id: 0,
    member: {},
    order: {},
    status: "E",
    product: {},
    kanfriends: [],
    kanprice: 0,
    kanprice_str: { b: "0", "s": ".00" },
    broadcase: {},
    bangtype: "rank",
    rankkanfriends: [],
    showmorerankfriends: 0,
    timekanfriends: [],
    showmoretimefriends: 0,
    scolltomiddle: false,
    progressfix: 70.0,
    inshare: false,
    member_kanprice: "",
    inkaning: false,
    inkan: false,
    addtocart: false,
    count: 1,
    selectedoptionstr: "",
    stock:0,
    selectmodel: [],
    showdescription: false
  },
  bindShowDescription() {
    this.setData({ showdescription: !this.data.showdescription });
  },
  scrollmonitor(e) {
    //console.log(e);
    var scrolltop = e.detail.scrollTop;
    var scolltomiddle = scrolltop > 20;
    if (this.data.scolltomiddle != scolltomiddle) {
      this.setData({ scolltomiddle: scolltomiddle });
    }
  },
  changebangtype(e) {
    var bangtype = e.currentTarget.id;
    this.setData({ bangtype: bangtype });
  },
  rankcheckmore() {
    this.setData({ showmorerankfriends: ++this.data.showmorerankfriends });
  },
  timecheckmore() {
    this.setData({ showmoretimefriends: ++this.data.showmoretimefriends });
  },
  goInshare() {
    this.setData({ inshare: true });
  },
  closeShare() {
    this.setData({ inshare: false });
  },
  gokan() {
    var that = this;
    var member = this.data.member;
    kanorderApi.kan({
      order_id: this.data.id, member_id: member.id,
      membername: member.name, memberphoto: member.photo, membermobile: member.mobile
    }, function (data) {
      var inkaning = true;
      var member_kanprice = data.kanprice;
      var member_extraprice = data.extraprice;

      that.setData({ inkaning: inkaning, member_kanprice: member_kanprice, member_extraprice: member_extraprice });
      that.getKanPrice();
      setTimeout(function () {
        var inkaning = false;
        var inkan = true;
        that.setData({ inkaning: inkaning, inkan: inkan });
      }, 3000);
    });
  },
  close() {
    this.setData({ inkan: false });
  },


  countminus() {
    var count = this.data.count;
    count--;
    if (count < 1) {
      count = 1;
    }
    this.setData({ count: count });
  },
  countplus() {
    var count = this.data.count;
    count++;
    if (count > this.data.product.reminder) {
      count = this.data.product.reminder;
    }
    this.setData({ count: count });
  },
  optionSelect(e) {
    var product = this.data.product;
    var id = e.currentTarget.id.split("_");
    var optionid = id[0];
    var optionvalue = id[1];

    for (var i in product.detail.model) {

      var options = [];
      if (product.detail.model[i].id == optionid) {
        product.detail.model[i].value = optionvalue;
      }

    }

    this.setData({ product: product });
    this.updateselectedoptionstr();
  },
  updateselectedoptionstr() {
    var selectedoptionstr = "";
    var selectmodel=[];
    var product = this.data.product;
    for (var i in product.detail.model) {
      if (product.detail.model[i].value != "") {
        for (var j = 0; j < product.detail.model[i].subModelId.length; j++) {
          if (product.detail.model[i].value == product.detail.model[i].options[j].value) {
            selectedoptionstr += '"' + product.detail.model[i].options[j].display + '"';
            selectmodel.push(product.detail.model[i].options[j].value);
          }
        }
      }
    }
    selectmodel.sort(function(a,b){return a>b;});
    var modelstock=null;
    for (var i = 0; i < product.detail.model_items.length;i++){
      var model = product.detail.model_items[i].model.split(",");
      model.sort(function (a, b) { return a > b; });
      if (selectmodel.join(",") == model.join(",")){
        modelstock = product.detail.model_items[i].stock;
        break;
      }
    }
    var stock = modelstock == null ? this.data.product.detail.stock : modelstock
    this.setData({ selectedoptionstr: selectedoptionstr, stock: stock, selectmodel: selectmodel });
  },
  tryKanjia() {
    var modelcount=0;
    for (var i in this.data.product.detail.model){
      modelcount++;
    }
    if (this.data.selectmodel.length < modelcount){
        wx.showModal({
          title: '提示',
          content: '请选择商品规格',
          showCancel:false
        })
    }else{
      if(this.data.stock<=0){
        wx.showModal({
          title: '提示',
          content: '您选择的商品规格库存不足，请重新选择',
          showCancel: false
        })
      }else{
        wx.navigateTo({
          url: '../productorder/productorder?id=' + this.data.id + "&selectmodel=" + this.data.selectmodel.join(","),
        })
      }
    }
    
  },
  bindShowDescription() {
    this.setData({ showdescription: !this.data.showdescription });
  },
  closeAddToCart() {
    this.setData({ addtocart: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    //id=21;
    var member = MemberMgr.getMember();
    var app_id = MerchantMgr.getAppId();

    var KanorderApi = require('../utils/apis/kanorder.js');
    var kanorderApi = new KanorderApi();

    kanorderApi.getmykanprice({ member_id: member.id, order_id: id }, function (data) {
      var member_kanprice = data.kanprice;
      that.setData({ member_kanprice: member_kanprice });
    });

    kanorderApi.detail({ id: id, zhichiapp_id: app_id }, function (data) {
      if (data.id == undefined) {
        wx.redirectTo({
          url: '../index/index'
        });
        return;
      }
      var order = data;
      //order.status="S";
      var id = data.id;
      var status = data.status;

      var product = data.product;
      //product.oriprice = 1000;
      //product.lowprice = 990;
      product.lowprice_str = Util.amountcutting(product.lowprice);
      //product.extrakan="C";
      //product.status='D';
      order.member = member;

      WxParse.wxParse('wxParseDescription', 'html', product.detail.description, that, 10);
      
      for (var i in product.detail.model) {
        var options = [];
        for (var j = 0; j < product.detail.model[i].subModelId.length; j++) {
          options.push({ display: product.detail.model[i].subModelName[j], value: product.detail.model[i].subModelId[j] });
        }
        product.detail.model[i].options = options;
        product.detail.model[i].value = "";
      }


      that.setData({ product: product, status: status, id: id, order: order,stock:product.detail.stock });


      that.count();
      that.goroundtimer = setInterval(function () {
        that.count();
      }, 1000);

      that.getKanPrice();
    });

    var broadcase = ProductMgr.getProductKanjiaBroadcase();

    this.setData({ member: member, broadcase: broadcase });

  },
  goroundtimer: null,
  count() {
    var that = this;
    var product = that.data.product;
    var activeitem = 0;
    product.starttime_s = Util.timecutting(product.starttime);
    product.endtime_s = Util.timecutting(product.endtime);

    that.setData({
      product: product
      , now: new Date().getTime()
      , s: new Date(product.starttime).getTime()
    });


  },
  gotoMyKan() {
    wx.navigateTo({
      url: '../productdetail/productdetail?id=' + this.data.product.id,
    })
  },
  gotoTryPay() {
    //wx.navigateTo({
    //  url: 'order?id=' + this.data.id,
    //})
    if(this.data.product.detail.model_items.length==0){
      wx.navigateTo({
        url: '../productorder/productorder?id=' + this.data.id +"&selectmodel="+this.data.selectmodel.join(","),
      })
    }else{
      this.setData({ addtocart: true });
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  gokanpricetimer: null,
  getKanPrice() {
    var that = this;
    kanorderApi.friends({ order_id: this.data.id }, function (data) {
      var kanfriends = data;
      var kanprice = 0.00;

      for (var i = 0; i < kanfriends.length; i++) {
        kanprice += Number(kanfriends[i].kanprice);
      }

      if (kanprice > (that.data.product.oriprice - that.data.product.lowprice)) {
        kanprice = (that.data.product.oriprice - that.data.product.lowprice);
      }


      var rankkanfriends = kanfriends.sort(function (a, b) {
        return a.kanprice < b.kanprice;
      });
      var timekanfriends = kanfriends.sort(function (a, b) {
        return a.kanprice_date < b.kanprice_date;
      });

      for (var i = 0; i < rankkanfriends.length; i++) {
        rankkanfriends[i].seq = i + 1;
      }
      that.setData({ kanprice: kanprice, kanprice_str: Util.amountcutting(kanprice), kanfriends: kanfriends, rankkanfriends: rankkanfriends, timekanfriends: timekanfriends });
    }, false);


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
    return {
      title: '帮我来砍价',
      path: '/pages/product/kanjia?id=' + this.data.id,
      imageUrl: "http://cmsdev.app-link.org/alucard263096/zhichibargain/api/kanorder/photo?order_id=" + this.data.id,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  sharetomemory: function () {
    wx.downloadFile({
      url: "https://cmsdev.app-link.org/alucard263096/zhichibargain/api/kanorder/photo?order_id=" + this.data.id, //仅为示例，并非真实的资源
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              wx.showToast({
                title: '图片已保存，可分享到朋友圈',
              })
            }
          });
        }
      }
    })

    
  }
})