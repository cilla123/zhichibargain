var app      = getApp();

var pageData = {
  data: {"picture1":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:421.875rpx;width:750rpx;margin-left:auto;margin-right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58e5b16f2210a.jpg","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"page_form":"","compId":"picture1","parentCompid":"picture1"},"classify2":{"type":"classify","style":"font-size:30.46875rpx;height:82.03125rpx;line-height:82.03125rpx;opacity:1;background-color:rgb(255, 255, 255);color:rgb(136, 136, 136);;margin-top:11.71875rpx;margin-left:auto;","content":[{"customFeature":{"index_value":"","action":"inner-link","page-link":"page10018"},"text":"\u95e8\u5e97\u4fe1\u606f","content":"","parentCompid":"classify2","style":"","itemType":null,"itemParentType":"classify","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10018\\\/page10018\",\"is_redirect\":1}","eventHandler":"tapInnerLinkHandler"},{"customFeature":{"index_value":"","action":"inner-link","page-link":"page10010"},"text":"\u610f\u89c1\u53cd\u9988","content":"","parentCompid":"classify2","style":"","itemType":null,"itemParentType":"classify","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10010\\\/page10010\",\"is_redirect\":1}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"mode":"1","selected":"1","selectedColor":"rgb(127, 76, 230)"},"animations":[],"page_form":"","compId":"classify2"},"form_vessel3":{"type":"form-vessel","style":"background-color:rgba(0, 0, 0, 0);opacity:1;margin-left:auto;","content":[{"type":"input-ele","style":"margin-left:82.03125rpx;width:585.9375rpx;height:82.03125rpx;margin-right:auto;opacity:1;","content":"","customFeature":{"placeholder":"\u8bf7\u8f93\u5165\u4f60\u7684\u59d3\u540d","segment":"mz","ifMust":false},"animations":[],"compId":"data.content[0]","formCompid":"form_vessel3","segment_required":0,"parentCompid":"form_vessel3"},{"type":"input-ele","style":"margin-top:11.71875rpx;margin-left:82.03125rpx;width:585.9375rpx;height:82.03125rpx;margin-right:auto;opacity:1;","content":"","customFeature":{"placeholder":"\u8bf7\u8f93\u5165\u4f60\u7684\u8054\u7cfb\u65b9\u5f0f","segment":"lxfs","ifMust":false},"animations":[],"compId":"data.content[1]","formCompid":"form_vessel3","segment_required":0,"parentCompid":"form_vessel3"},{"type":"textarea-ele","style":"margin-top:11.71875rpx;opacity:1;border-radius:0;width:585.9375rpx;height:234.375rpx;margin-left:82.03125rpx;line-height:70.3125rpx;margin-right:auto;","content":"","customFeature":{"placeholder":"\u8bf7\u8f93\u5165\u5185\u5bb9","segment":"nr","ifMust":false},"animations":[],"compId":"data.content[2]","formCompid":"form_vessel3","segment_required":0,"parentCompid":"form_vessel3"},{"type":"grade-ele","style":"margin-top:23.4375rpx;opacity:1;margin-left:178.125rpx;margin-right:auto;background-color:rgb(255, 255, 255);width:386.71875rpx;height:53.90625rpx;","content":"","customFeature":{"icon":"star"},"animations":[],"compId":"data.content[3]","formCompid":"form_vessel3","segment_required":0,"parentCompid":"form_vessel3","titleStyle":""},{"type":"form-button","style":"background-color:rgb(127, 76, 230);border-color:rgb(34, 34, 34);border-radius:7.03125rpx;border-style:none;color:rgb(255, 255, 255);font-size:32.8125rpx;height:82.03125rpx;line-height:82.03125rpx;margin-left:82.03125rpx;margin-right:auto;margin-top:23.4375rpx;opacity:1;text-align:center;width:585.9375rpx;","content":"\u786e\u5b9a","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","segment":"submit-btn"},"animations":[],"compId":"data.content[4]","parentCompid":"form_vessel3"}],"customFeature":{"form":"yjfk","link":"-1","source":"none"},"animations":[],"page_form":"","compId":"form_vessel3","form":"yjfk","field_info":[],"formCompid":"form_vessel3"},"has_tabbar":0,"page_hidden":true,"page_form":"","top_nav":{"navigationBarBackgroundColor":"#000000","navigationBarTextStyle":"white","navigationBarTitleText":"\u610f\u89c1\u53cd\u9988"}},
    need_login: false,
    page_router: 'page10010',
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
