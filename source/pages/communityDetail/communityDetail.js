
var app = getApp();
var util = require('../../utils/util.js');

Page({
  data: {
    articleId: '',
    articleInfo: {},
    likeLogCount: '',
    likeLogItems: [],
    is_liked: '',
    phoneNumber: '',
    commentWidth: '',
    commentList: [],
    child_comment: [],
    article_style: '',
    getCommentData: {
      page: 1,
      loading: false,
      nomore: false
    },
    commentCount: '',
    imgData: {},
    showAddArticleBtn: true,
    theme_color: '#00b6f8',
    thumbUpBackgroundColor: '#3091f2',
    thumbUpColor: '#fff',
    address: ''
  },
  onLoad: function (options) {
    let articleId = options.detail,
      article_style = options.articleStyle,
      phoneNumber = options.phoneNumber,
      comment_width = options.phoneNumber ? '300rpx' : '400rpx',
      is_liked = options.dataLiked,
      thumbUpBackgroundColor = options.dataLiked == '1' ? '#f2f2f2' : '#3091f2',
      thumbUpColor = options.dataLiked == '1' ? '#3091f2' : '#fff',
      likeLogCount = options.dataLiked == '1' ? '' : '赞';
    this.setData({
      articleId: articleId,
      article_style: article_style,
      phoneNumber: phoneNumber,
      commentWidth: comment_width,
      is_liked: is_liked,
      thumbUpBackgroundColor: thumbUpBackgroundColor,
      thumbUpColor: thumbUpColor,
      likeLogCount: likeLogCount,
    });

    this.getArticleInfo();
    this.getLikeLog();
    this.getComment();

    app.globalData.communityDetailRefresh = false;
  },
  onShow: function () {
    if (app.globalData.communityDetailRefresh) {
      this.setData({
        getCommentData: {
          page: 1,
          loading: false,
          nomore: false
        },
        commentList: []
      });
      app.globalData.communityDetailRefresh = false;
      this.getComment();
    }
  },
  getArticleInfo: function () {
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetArticleByPage',
      data: {
        article_id: that.data.articleId,
        page: 1,
        page_size: 100
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data[0];

          info.title = unescape(info.title.replace(/\\u/g, "%u"));
          info.content_text = info.content.text.replace(/\n|\\n/g, '\n');

          that.setData({
            articleInfo: info,
            is_like: info.is_like
          });
          that.getThemeColor(info.section_id);

          that.getLocByLatAndLng(info.latitude, info.longitude, function (data) {
            that.setData({ address: data.address });
          });
        }
      }
    });
  },
  getLikeLog: function () {
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetLikeLogByPage',
      data: {
        page: 1,
        obj_type: 1,
        obj_id: that.data.articleId,
        page_size: 10
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data;
          res.count = that.data.is_liked == '1' ? res.count : '赞'
          that.setData({
            likeLogCount: res.count,
            likeLogItems: info,
          });
        }
      }
    });
  },
  getComment: function () {
    var that = this,
      sdata = that.data.getCommentData;

    if (sdata.loading || sdata.nomore) {
      return;
    }
    sdata.loading = true;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetCommentByPage',
      data: {
        page: sdata.page,
        article_id: that.data.articleId,
        page_size: 10,
        // article_style : 0          
        article_style: that.data.article_style
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data,
            oldData = that.data.commentList,
            newData = info;

          for (var i = 0; i < newData.length; i++) {
            let item = newData[i],
              likecount = item.like_count;

            item.like_count_text = likecount <= 0 ? '赞' : (likecount > 10000 ? (Math.floor(likecount / 10000) + '万') : likecount);
            item.likeAnimateShow = true;
          }

          newData = oldData.concat(newData);

          that.setData({
            commentList: newData,
            commentCount: res.count,
            'getCommentData.page': sdata.page + 1
          });
        }
        that.setData({
          'getCommentData.loading': false,
          'getCommentData.nomore': res.is_more == 0 ? true : false
        });
      },
      fail: function (res) {
        that.setData({
          'getCommentData.loading': false
        });
      }
    });
  },
  scrollTolower: function (event) {
    this.getComment();
  },
  oldscrolltop: 0,
  scrollEvent: function (event) {
    let scrolltop = event.detail.scrollTop,
      oldscrolltop = this.oldscrolltop;

    if (scrolltop - oldscrolltop > 60) {
      this.oldscrolltop = scrolltop;
      this.setData({
        showAddArticleBtn: false
      });
    } else if (oldscrolltop - scrolltop > 60) {
      this.oldscrolltop = scrolltop;
      this.setData({
        showAddArticleBtn: true
      });
    }
  },
  imgLoad: function (event, ) {
    let owidth = event.detail.width,
      oheight = event.detail.height,
      oscale = owidth / oheight,
      cwidth = 290,
      cheight = 120,
      ewidth, eheight,
      newData = {};

    if (oscale > cwidth / cheight) {
      ewidth = cwidth;
      eheight = cwidth / oscale;
    } else {
      ewidth = cheight * oscale;
      eheight = cheight;
    }

    newData['imgData'] = {
      imgWidth: ewidth * 2.34,
      imgHeight: eheight * 2.34
    }
    this.setData(newData);
  },
  getThemeColor: function (section_id) {
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetSectionByPage',
      data: {
        page: 1,
        section_id: section_id,
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data[0];

          that.setData({
            theme_color: info.theme_color,
          });
        }
      }
    });
  },
  turnReply: function (event) {
    let commentId = event.currentTarget.dataset.id,
      sectionId = event.currentTarget.dataset.sectionid,
      parentCommentId = event.currentTarget.dataset.id,
      articleId = this.data.articleId;

    app.turnToPage('/pages/communityReply/communityReply?sectionId=' + sectionId + '&articleId=' + articleId + '&commentId=' + commentId + '&parentCommentId=' + parentCommentId);
  },
  turnComment: function (event) {
    let sectionId = event.currentTarget.dataset.sectionid,
      commentId = event.currentTarget.dataset.id,
      parentCommentId = event.currentTarget.dataset.parentid,
      articleId = this.data.articleId;

    app.turnToPage('/pages/communityReply/communityReply?sectionId=' + sectionId + '&articleId=' + articleId + '&parentCommentId=' + parentCommentId + '&commentId=' + commentId);
  },
  turnToPublish: function (event) {
    app.turnToPage('/pages/communityPublish/communityPublish?detail=' + this.data.articleInfo.section_id);
  },
  articleLike: function (event) {
    var that = this,
      liked = event.currentTarget.dataset.liked;
    if (liked == '1') {
      app.showToast({ title: '暂不支持取消' });
      return false;
    }
    app.sendRequest({
      url: '/index.php?r=AppSNS/PerformLike',
      data: {
        obj_type: 1,  // obj_type 1-话题 2-评论
        obj_id: that.data.articleId     // obj_id 话题或评论的id
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {

          that.getLikeLog();

          if (liked == 1) {
            that.setData({
              'articleInfo.is_liked': 0,
              thumbUpBackgroundColor: '#3091f2',
              thumbUpColor: '#fff',
              is_liked: '0',
            });
            app.showToast({ title: '点赞取消成功' });
          } else {
            that.setData({
              'articleInfo.is_liked': 1,
              thumbUpBackgroundColor: '#f2f2f2',
              thumbUpColor: '#3091f2',
              is_liked: '1'
            });
            app.showToast({ title: '点赞成功' });
          }

          app.globalData.communityPageRefresh = true;
        }
      }
    });
  },
  commentLike: function (event) {
    var that = this,
      liked = event.currentTarget.dataset.liked,
      id = event.currentTarget.dataset.id,
      index = +event.currentTarget.dataset.index;

    app.sendRequest({
      url: '/index.php?r=AppSNS/PerformLike',
      data: {
        obj_type: 2,  // obj_type 1-话题 2-评论
        obj_id: id     // obj_id 话题或评论的id
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {

          if (liked == 1) {
            var newData = {},
              likecount = +that.data.commentList[index].like_count - 1;
            newData['commentList[' + index + '].is_liked'] = 0;
            newData['commentList[' + index + '].like_count'] = likecount;
            newData['commentList[' + index + '].like_count_text'] = likecount <= 0 ? '赞' : (likecount > 10000 ? (Math.floor(likecount / 10000) + '万') : likecount);
            newData['commentList[' + index + '].likeAnimateShow'] = false;

            that.setData(newData);
            app.showToast({ title: '点赞取消成功' });
          } else {
            var newData = {},
              likecount = +that.data.commentList[index].like_count + 1;
            newData['commentList[' + index + '].is_liked'] = 1;
            newData['commentList[' + index + '].like_count'] = likecount;
            newData['commentList[' + index + '].like_count_text'] = likecount <= 0 ? '赞' : (likecount > 10000 ? (Math.floor(likecount / 10000) + '万') : likecount);
            newData['commentList[' + index + '].likeAnimateShow'] = false;

            that.setData(newData);
            app.showToast({ title: '点赞成功' });
          }
          setTimeout(function () {
            let newData = {};
            newData['commentList[' + index + '].likeAnimateShow'] = true;
            that.setData(newData);
          }, 480);
        }
      }
    });
  },
  previewImage: function (event) {
    let that = this,
      curImg = event.currentTarget.dataset.src;
    app.previewImage({
      current: curImg,
      urls: that.data.articleInfo.content.imgs
    });
  },
  makePhone: function (event) {
    var phoneNumber = this.data.phoneNumber;
    app.makePhoneCall(phoneNumber)
  },
  onShareAppMessage: function (res) {
    let shareTitle = this.data.articleInfo.title;
    let sharePath = util.getCurrentPageUrlWithArgs();
    console.log(shareTitle, sharePath)
    return {
      title: shareTitle,
      path: sharePath,
      success: function (res) {
        app.showToast({ title: '转发成功' });
      },
      fail: function (res) { }
    }
  },
  turnToReport: function(){
    app.turnToPage('/pages/communityReport/communityReport?detail=' + this.data.articleId);
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
