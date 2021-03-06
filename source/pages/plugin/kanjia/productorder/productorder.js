// pages/product/order.js
var MemberMgr = require("../utils/classes/MemberMgr.js"); 
var ProductMgr = require("../utils/classes/ProductMgr.js");
var MerchantMgr = require("../utils/classes/MerchantMgr.js");
var Util = require("../utils/utils/util.js");



var KanproductApi = require('../utils/apis/kanproduct.js');
var kanproductApi = new KanproductApi();

var KanorderApi = require('../utils/apis/kanorder.js');
var kanorderApi = new KanorderApi();


var WechatApi = require('../utils/apis/wechat.js');
var wechatApi = new WechatApi();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    selectmodel:"",
    member: {},
    order:{},
    product: {},
    kanfriends: [],
    kanprice: 0,
    status:"P",
    comment:"",
    address:{id:"0"},
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
  gotoSelectAddress() {
    wx.navigateTo({
      url: '../../../myAddress/myAddress?id='+this.data.address.id,
    })
  },
  goSubmit(){
    //应判断地址是否选择
    
    var that=this;
    console.log(this.data.selectmodel);
      var json={
        member_id: this.data.member.id,
        session_key: this.data.member.session_key,
        zhichiapp_id: this.data.app_id,
        order_id: this.data.id,
        models: this.data.selectmodel,
        comment: this.data.comment,
        addressid:this.data.address.id
      };
      kanorderApi.submit(json, function (data) {
        if(data.code!="0"){
          wx.showModal({
            title: '下单失败',
            content: data.result,
            showCancel:false
          })
        }else{

          var json = {
            zhichiapp_id: that.data.app_id,
            order_id: that.data.id,
            session_key: that.data.member.session_key
          };
          wechatApi.pay(json, function (pdata) {
            wx.requestPayment({
              timeStamp: pdata.timeStamp,
              nonceStr: pdata.nonceStr,
              package: pdata.package,
              signType: pdata.signType,
              paySign: pdata.paySign,
              success: function (res) {
                wx.redirectTo({
                  url: '../../../goodsOrderDetail/goodsOrderDetail?detail=' + pdata.orderno,
                })
              },
              fail:function(res){
                wx.redirectTo({
                  url: '../order/order',
                })
              }
            })
          });
        }
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    var selectmodel = options.selectmodel;
    console.log(selectmodel);
    var member = MemberMgr.getMember();
    //var delivery = MemberMgr.getDefaultDeliveryAddress();
    var selfdeliveryposition = MerchantMgr.getSelfDeliveryPosition();



    
    var member = MemberMgr.getMember();
    var app_id = MerchantMgr.getAppId();




    var KanorderApi = require('../utils/apis/kanorder.js');
    var kanorderApi = new KanorderApi();


    kanorderApi.useraddresslist({ zhichiapp_id: app_id, session_key: member.session_key }, function (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].is_default == "1") {
          that.setData({ address: address });
        }
      }
    });

    kanorderApi.detail({ id: id, zhichiapp_id: app_id }, function (data) {
      if (data.id == undefined) {
        wx.redirectTo({
          url: 'list'
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

      that.setData({ product: product, status: status, id: id, order: order });

      that.getKanPrice();
    });




    this.setData({ member: member,  selfdeliveryposition: selfdeliveryposition, selectmodel: selectmodel, app_id: app_id});
    

  },
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