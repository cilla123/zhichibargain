var app      = getApp();

var pageData = {
  data: {"picture1":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:398.4375rpx;width:750rpx;margin-left:auto;margin-right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_59003f110873a.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"page_form":"","compId":"picture1","parentCompid":"picture1"},"free_vessel2":{"type":"free-vessel","style":"width:750rpx;height:738.28125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:32.8125rpx;font-weight:bold;height:89.0625rpx;width:714.84375rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:17.578125rpx;top:30.46875rpx;margin-right:0;right:auto;","content":"TO.1   \u7537\u795e\u5973\u795e\u4eec\u8bfb\u4e66\u5fd9 \u4f60\u8fd8\u5728\u7ee7\u7eed\u505a\u6587\u76f2\uff1f","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:7.03125rpx;border-style:none;height:351.5625rpx;width:703.125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:91.40625rpx;right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff1e0945f52.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel2"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:82.03125rpx;width:82.03125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:51.5625rpx;top:117.1875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58fdbc9727f9e.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:152.34375rpx;top:117.1875rpx;margin-right:0;","content":"\u677e\u8338\u90e8\u957f","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(241, 194, 50);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:152.34375rpx;top:164.0625rpx;margin-right:0;","content":"\u8d44\u6df1LifeStyle\u7f16\u8f91","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;width:621.09375rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:86.71875rpx;top:217.96875rpx;margin-right:0;","content":"\u521a\u521a\u8fc7\u53bb\u76844\u670823\u65e5\u662f\u201c\u4e16\u754c\u8bfb\u4e66\u65e5\u201d\uff0c\u4f60\u4eca\u5e74\u8bfb\u8fc7\u51e0\u672c\u4e66\u4e86\uff1f\u9605\u8bfb\u8fd9\u4ef6\u4e8b\u542c\u8d77\u6765\u9ad8\u5927\u4e0a\u7684\u4e8b\u513f\uff0c\u5f88\u591a\u5a31\u4e50\u660e\u661f\u7684\u7537\u795e\u5973\u795e\u4e5f\u5728\u505a\uff01","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10013"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10013\\\/page10013\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:7.03125rpx;border-style:none;height:234.375rpx;width:703.125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:468.75rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff216a44417.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10013"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel2","itemType":"picture","itemParentType":"free-vessel","itemIndex":6,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10013\\\/page10013\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel2"},"free_vessel3":{"type":"free-vessel","style":"width:750rpx;height:850.78125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:4.6875rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:32.8125rpx;font-weight:bold;height:89.0625rpx;width:714.84375rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:17.578125rpx;top:30.46875rpx;margin-right:0;right:auto;","content":"TO.2   \u4e00\u4e2a\u751f\u6d3b\u5c0f\u611f\u609f\uff0c\u8ba9\u4f60\u7406\u89e3\u201c\u6df7\u642d\u201d\u3002","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel3","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:7.03125rpx;border-style:none;height:351.5625rpx;width:703.125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:91.40625rpx;right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff1e0945f52.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel3"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:82.03125rpx;width:82.03125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:51.5625rpx;top:117.1875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58fdbc623299a.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel3"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:152.34375rpx;top:117.1875rpx;margin-right:0;","content":"\u96c0\u6591\u83c7\u83c7","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel3","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(241, 194, 50);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:152.34375rpx;top:164.0625rpx;margin-right:0;","content":"\u8d44\u6df1\u65f6\u88c5\u7f16\u8f91","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel3","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;width:621.09375rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:86.71875rpx;top:217.96875rpx;margin-right:0;","content":"   \u670d\u88c5\u642d\u914d\u4e2d\uff0c\u201c\u6df7\u642d\u201d\u8fd9\u4e2a\u8bcd\u51fa\u73b0\u7684\u9891\u7387\u7279\u522b\u9ad8\u3002\u5f88\u591a\u4eba\u4ee5\u4e3a\u6df7\u642d\uff0c\u5c31\u662f\u5404\u79cd\u98ce\u683c\u7684\u5355\u54c1\u642d\u5728\u8eab\u4e0a\uff0c\u4f46\u641e\u4e0d\u597d\u5c31\u6210\u4e86\u201c\u4e71\u642d\u201d\u3002\u603b\u6709\u59d1\u5a18\u95ee\u6211\uff1a\u201c\u5230\u5e95\u4ec0\u4e48\u662f\u6df7\u642d\uff1f","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10009"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel3","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10009\\\/page10009\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:7.03125rpx;border-style:none;height:234.375rpx;width:703.125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:468.75rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff2393b4131.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10009"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":6,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10009\\\/page10009\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel3"},"has_tabbar":0,"page_hidden":true,"page_form":"gdfz","top_nav":{"navigationBarBackgroundColor":"#000000","navigationBarTextStyle":"white","navigationBarTitleText":"\u4eca\u65e5\u70ed\u70b9  \u8868\u5355"}},
    need_login: false,
    page_router: 'page10012',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      dynamicClassifyGroupidsParams: [],
      videoListComps: [],
      videoProjectComps: [],
      returnToVersionFlag: true,
  requesting: false,
  requestNum: 1,
  modelChoose: [],
  modelChooseId: '',
  modelChooseName: [],
  onLoad: function (e) {
    // if (app.globalData.app_data) {
    //   app.onPageLoad(e);
    // } else {
    //   app.sendRequest({
    //     url: '/index.php?r=AppData/detail',
    //     success: function (res) {
    //       let app_data = JSON.parse(res.data.app_data);

    //       app.globalData.app_data = app_data;
    //       app.onPageLoad(e);
    //     }
    //   })
    // } 
    app.onPageLoad(e);
  },
  dataInitial: function () {
    app.pageDataInitial();
  },
  onShareAppMessage: function (e) {
    return app.onPageShareAppMessage(e);
  },
  onShow: function () {
    app.onPageShow();
  },
  reachBottomFuc: [],
  onReachBottom: function () {
    app.onPageReachBottom( this.reachBottomFuc );
  },
  onUnload: function () {
    app.onPageUnload();
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function () {
    app.suspensionBottom();
  },
  pageScrollFunc: function (e) {
    app.pageScrollFunc(e);
  },
  dynamicVesselScrollFunc: function (e) {
    app.dynamicVesselScrollFunc(e);
  },
  goodsScrollFunc: function (e) {
    app.goodsScrollFunc(e);
  },
  takeoutStyleScrollFunc: function(e){
    app.takeoutStyleScrollFunc(e);
  },
  franchiseeScrollFunc: function (e) {
    app.franchiseeScrollFunc(e);
  },
  seckillScrollFunc: function (e) {
    app.seckillScrollFunc(e);
  },
  videoScrollFunc: function (e) {
    app.videoScrollFunc(e);
  },
  carouselVideoClose: function(e) {
    app.carouselVideoClose(e);
  },
  changeCount: function (e) {
    app.changeCount(e);
  },
  inputChange: function (e) {
    app.inputChange(e);
  },
  bindDateChange: function (e) {
    app.bindDateChange(e);
  },
  bindTimeChange: function (e) {
    app.bindTimeChange(e);
  },
  bindSelectChange: function (e) {
    app.bindSelectChange(e);
  },
  bindScoreChange: function (e) {
    app.bindScoreChange(e);
  },
  submitForm: function (e) {
    app.submitForm(e);
  },
  udpateVideoSrc: function (e) {
    app.udpateVideoSrc(e);
  },
  tapMapDetail: function (e) {
    app.tapMapDetail(e);
  },
  uploadFormImg: function (e) {
    app.uploadFormImg(e);
  },
  deleteUploadImg: function (e) {
    app.deleteUploadImg(e);
  },
  listVesselTurnToPage: function (e) {
    app.listVesselTurnToPage(e);
  },
  dynamicVesselTurnToPage: function (e) {
    app.dynamicVesselTurnToPage(e);
  },
  userCenterTurnToPage: function (e) {
    app.userCenterTurnToPage(e);
  },
  turnToGoodsDetail: function (e) {
    app.turnToGoodsDetail(e);
  },
  turnToFranchiseeDetail: function (e) {
    app.turnToFranchiseeDetail(e);
  },
  turnToSeckillDetail: function (e) {
    app.turnToSeckillDetail(e);
  },
  sortListFunc: function (e) {
    app.sortListFunc(e);
  },
  bbsInputComment: function (e) {
    app.bbsInputComment(e);
  },
  bbsInputReply: function (e) {
    app.bbsInputReply(e);
  },
  uploadBbsCommentImage: function (e) {
    app.uploadBbsCommentImage(e);
  },
  uploadBbsReplyImage: function (e) {
    app.uploadBbsReplyImage(e);
  },
  deleteCommentImage: function (e) {
    app.deleteCommentImage(e);
  },
  deleteReplyImage: function (e) {
    app.deleteReplyImage(e);
  },
  bbsPublishComment: function (e) {
    app.bbsPublishComment(e);
  },
  clickBbsReplyBtn: function (e) {
    app.clickBbsReplyBtn(e);
  },
  bbsPublishReply: function (e) {
    app.bbsPublishReply(e);
  },
  searchList: function (e) {
    app.searchList(e);
  },
  selectLocal: function (e) {
    app.selectLocal(e);
  },
  cancelCity: function (e) {
    app.cancelCity(e);
  },
  bindCityChange: function (e) {
    app.bindCityChange(e);
  },
  submitCity: function (e) {
    app.submitCity(e);
  },
  openTakeoutLocation: function (e) {
    app.openTakeoutLocation(e);
  },
  callTakeout: function (e) {
    app.callTakeout(e);
  },
  getMoreAssess: function (e) {
    app.getMoreAssess(e);
  },
  changeEvaluate: function (e) {
    app.changeEvaluate(e)
  },
  deleteAllCarts: function (e) {
    app.deleteAllCarts(e);
  },
  clickCategory: function (e) {
    app.clickCategory(e);
  },
  goodsListMinus: function (e) {
    app.goodsListMinus(e);
  },
  goodsListPlus: function (e) {
    app.goodsListPlus(e);
  },
  cartListMinus: function (e) {
    app.cartListMinus(e);
  },
  cartListPlus: function (e) {
    app.cartListPlus(e);
  },
  changeAssessType: function (e) {
    app.changeAssessType(e);
  },
  showShoppingCartPop: function (e) {
    app.showShoppingCartPop(e);
  },
  hideShoppingCart: function (e) {
    app.hideShoppingCart(e);
  },
  showGoodsDetail: function (e) {
    app.showGoodsDetail(e);
  },
  hideDetailPop: function (e) {
    app.hideDetailPop(e);
  },
  hideModelPop: function (e) {
    app.hideModelPop(e);
  },
  chooseModel: function (e) {
    app.chooseModel(e);
  },
  sureChooseModel: function (e) {
    app.sureChooseModel(e);
  },
  clickChooseComplete: function (e) {
    app.clickChooseComplete(e);
  },
  reLocalAddress: function(e){
    app.reLocalAddress(e);
  },
  tapGoodsTradeHandler: function (e) {
    app.tapGoodsTradeHandler(e);
  },
  tapVideoHandler: function(e){
    app.tapVideoHandler(e);
  },
  tapVideoPlayHandler: function(e){
    app.tapVideoPlayHandler(e);  
  },
  tapVideoHandler: function(e){
    app.tapVideoHandler(e);
  },
  tapInnerLinkHandler: function (e) {
    app.tapInnerLinkHandler(e);
  },
  tapToPluginHandler: function (e) {
    app.tapToPluginHandler(e);
  },
  tapPhoneCallHandler: function (e) {
    app.tapPhoneCallHandler(e);
  },
  tapRefreshListHandler: function (e) {
    app.tapRefreshListHandler(e);
  },
  tapGetCouponHandler: function (e) {
    app.tapGetCouponHandler(e);
  },
  tapCommunityHandler: function (e) {
    app.tapCommunityHandler(e);
  },
  tapPageShareHandler:function(e) {
    app.tapPageShareHandler(e);
  },
  turnToCommunityPage: function (e) {
    app.turnToCommunityPage(e);
  },
  tapToFranchiseeHandler: function (e) {
    app.tapToFranchiseeHandler(e);
  },
  tapToTransferPageHandler: function () {
    app.tapToTransferPageHandler();
  },
  tapToSeckillHandler: function (e) {
    app.tapToSeckillHandler(e);
  },
  tapToPromotionHandler: function () {
    app.tapToPromotionHandler();
  },
  tapToCouponReceiveListHandler: function () {
    app.tapToCouponReceiveListHandler();
  },
  tapToRechargeHandler: function () {
    app.tapToRechargeHandler();
  },
  tapToXcx: function (e) {
    app.tapToXcx(e);
  },
  tapFranchiseeLocation: function (e) {
    app.tapFranchiseeLocation(e);
  },
  showAddShoppingcart: function (e) {
    app.showAddShoppingcart(e);
  },
  hideAddShoppingcart: function () {
    app.hideAddShoppingcart();
  },
  selectGoodsSubModel: function (e) {
    app.selectGoodsSubModel(e);
  },
  resetSelectCountPrice: function () {
    app.resetSelectCountPrice();
  },
  // 电商
  clickGoodsMinusButton: function (e) {
    app.clickGoodsMinusButton();
  },
  clickGoodsPlusButton: function (e) {
    app.clickGoodsPlusButton();
  },
  sureAddToShoppingCart: function () {
    app.sureAddToShoppingCart();
  },
  sureAddToBuyNow: function () {
    app.sureAddToBuyNow();
  },
  // 到店
  clickTostoreMinusButton: function (e) {
    app.clickTostoreMinusButton(e);
  },
  clickTostorePlusButton: function (e) {
    app.clickTostorePlusButton(e);
  },
  readyToPay: function () {
    app.readyToTostorePay();
  },
  getValidateTostore: function () {
    app.getValidateTostore();
  },
  goToShoppingCart: function () {
    app.goToShoppingCart();
  },
  getCartList: function () {
    app.getTostoreCartList();
  },
  stopPropagation: function () {
  },
  turnToSearchPage:function (e) {
    app.turnToSearchPage(e);
  },
  previewImage: function (e) {
    var dataset = e.currentTarget.dataset;
    app.previewImage({
      current : dataset.src,
      urls: dataset.previewImgarr,
    });
  },
  // 悬浮窗回到顶部
  scrollPageTop: function () {
    app.pageScrollTo(0);
  },
  // 悬浮窗跳页面
  suspensionTurnToPage: function (e) {
    app.suspensionTurnToPage(e);
  },
  // 跳转到大转盘
  tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  // 跳转到砸金蛋
  tapToGoldenEggs: function (e) {
    app.tapToGoldenEggs(e);
  },
  // 跳转到刮刮乐
  tapToScratchCard: function (e) {
    app.tapToScratchCard(e);
  },
  keywordList:{},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  // 文字组件跳到地图
  textToMap: function(e) {
    app.textToMap(e);
  },
  tapDynamicClassifyFunc: function(e){
    app.tapDynamicClassifyFunc(e);
  },
  // 跳转到视频详情
  turnToVideoDetail : function(e) {
    app.turnToVideoDetail(e);
  },
  // 单个视频组件播放视频
  startPlayVideo : function(e) {
    app.startPlayVideo(e);
  },
  // 视频播放报错
  videoError: function(e) {
    app.showModal({
      content: e.detail.errMsg
    });
  }
};
Page(pageData);
