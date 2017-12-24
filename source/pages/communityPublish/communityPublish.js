
var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    communityId: '',
    articleData : {
      title : '',
      text : '',
      imgs : [],
      category_id : '',
      phone: '',
      latitude: '',
      longitude: ''
    },
    address: '',
    category : [],
    categoryIndex : 0 ,
    picker_value : '全部',
    theme_color : '#00b6f8',
    require_loc: false,
    require_phone: false
  },
  onLoad: function(options){
    let communityId = options.detail;
    let article_id = options.articleId;

    this.setData({
      communityId: communityId ,
      articleId : article_id || ''
    });

    this.getThemeColor( communityId );
    this.getCategory();

  },
  submitData : function(event) {
    let that = this,
        title = that.data.articleData.title,
        text = that.data.articleData.text,
        latitude = that.data.articleData.latitude,
        longitude = that.data.articleData.longitude,
        phone = that.data.articleData.phone,
        need_loc = that.data.require_loc,
        need_phone = that.data.require_phone;

    if( !title ){
      app.showModal({content : '请填写标题'});
      return ;
    }
    if( !text ){
      app.showModal({content : '请填写话题内容'});
      return ;
    }
    if (need_loc && !latitude && !longitude) {
      app.showModal({ content: '请获取当前位置' });
      return;
    }
    if (need_phone && !phone) {
      app.showModal({ content: '请输入手机号码' });
      return;
    }

    let url = '/index.php?r=AppSNS/AddArticle';
    let article_id = that.data.articleId;

    if(article_id){
      url = '/index.php?r=AppSNS/UpdateArticle';
    }

    app.sendRequest({
      url: url,
      data: {
        article_id : article_id,
        section_id : that.data.communityId , //版块id
        category_id : that.data.articleData.category_id, //分类id 可不传
        title : title ,
        text : text ,
        imgs : that.data.articleData.imgs ,
        is_carousel : 0, //是否开启轮播 1为开启 0不开启
        top_flag :  0, //是否置顶 1为置顶 0不置顶
        hot_flag: 0, //是否精品 1是 0否
        phone: phone,
        latitude: latitude,
        longitude: longitude
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          app.showToast({
            title : '发布成功' , 
            success : function(){
              app.turnBack();
            }
          });
          app.globalData.communityPageRefresh = true;
          app.globalData.communityUsercenterRefresh = true;
        }
      }
    });
  },
  bindTitleInput : function(event) {
    let val = event.detail.value;
    this.setData({
      'articleData.title' : val
    });
  },
  bindTextInput : function(event) {
    let val = event.detail.value;
    this.setData({
      'articleData.text' : val
    });
  },
  bindPhoneInput: function (event) {
    let val = event.detail.value;
    this.setData({
      'articleData.phone': val
    });
  },
  changeCategory: function (event) {
    let that = this,
    cateId = event.target.dataset.id,
    cateIdx = event.target.dataset.index;

    this.setData({
      categoryIndex: cateIdx,
      'articleData.category_id': cateId
    });
  },
  uploadImg : function(){
    var that = this,
        imgs = that.data.articleData.imgs;

    app.chooseImage(function(imageUrls){
      imgs = imgs.concat(imageUrls);
      that.setData({
        'articleData.imgs' : imgs
      });
    } , 9);
  },
  deleteImg : function(event){
    var index = event.currentTarget.dataset.index,
        imgs = this.data.articleData.imgs;

    imgs.splice(index , 1);
    this.setData({
      'articleData.imgs' : imgs
    });
  },
  getCategory : function() {
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetCategoryByPage',
      data: {
        section_id : that.data.communityId ,
        page: 1 ,
        page_size: 100
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data,
              newdata = [{id: '' , name: '全部'}].concat(info);
          that.setData({
            category: newdata
          });
          let article_id = that.data.articleId;
          if(article_id){
            that.getArticle(article_id);
          }
        }
      }
    });
  },
  getThemeColor : function( section_id ) {
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetSectionByPage',
      data: {
        page:  1 ,
        section_id : section_id
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data[0];

          that.setData({
            theme_color: info.theme_color,
            require_loc: +info.require_location,
            require_phone: +info.require_phone
          });
        }
      }
    });
  },
  getArticle : function(article_id) {
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetArticleByPage',
      data: {
        article_id: article_id
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data[0],
              newdata = {};

          newdata['articleData.title'] = info.title;
          newdata['articleData.text'] = info.content.text;
          newdata['articleData.imgs'] = info.content.imgs || [];
          newdata['articleData.phone'] = info.phone;
          newdata['articleData.category_id'] = info.category_id;
          newdata['articleData.latitude'] = info.latitude;
          newdata['articleData.longitude'] = info.longitude;

          that.getLocByLatAndLng(info.latitude, info.longitude, function (data) {
            that.setData({ address: data.address });
          })

          let category = that.data.category;
          for (var i = 0; i < category.length; i++) {
            if(category[i].id == info.category_id){
              newdata['categoryIndex'] = i;
              break;
            }
          }

          that.setData(newdata);
        }
      }
    });
  },
  getAddress: function () {
    let that = this;
    if (that.data.address) {
      return;
    }
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        let latitude = res.latitude,
        longitude = res.longitude;

        that.setData({
          'articleData.latitude': latitude,
          'articleData.longitude': longitude
        });

        that.getLocByLatAndLng(latitude, longitude, function (data) {
          that.setData({address: data.address});
        })
      },
      fail: function () {
        app.showToast({title: '获取定位失败'});
      }
    })
  },
  getLocByLatAndLng: function (lat, lng, cb) {
    app.sendRequest({
      url: '/index.php?r=Map/GetAreaInfoByLatAndLng',
      data: {
        latitude: lat,
        longitude: lng
      },
      method: 'post',
      success: function (data) {
        if (data.status == 0 && typeof cb == 'function') {
          cb(data.data);
        }
      }
    })
  }
})
