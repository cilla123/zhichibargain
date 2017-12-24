var app      = getApp();

var pageData = {
  data: {"classify1":{"type":"classify","style":"font-size:30.46875rpx;height:82.03125rpx;line-height:82.03125rpx;opacity:1;background-color:rgb(255, 255, 255);color:rgb(136, 136, 136);;margin-top:0;margin-left:auto;","content":[{"customFeature":{"index_value":"\u6d41\u884c","action":"refresh-list","refresh_object":"list-931426768110","index_segment":"category"},"text":"\u6d41\u884c","content":"","parentCompid":"classify1","style":"","itemType":null,"itemParentType":"classify","itemIndex":0,"eventParams":"{\"refresh_object\":\"list-931426768110\",\"index_segment\":\"category\",\"index_value\":\"\\u6d41\\u884c\",\"comp_id\":null,\"parent_comp_id\":\"classify1\",\"item_index\":0,\"type\":null,\"parent_type\":\"classify\"}","eventHandler":"tapRefreshListHandler"},{"customFeature":{"index_value":"\u70ed\u9500","action":"refresh-list","refresh_object":"list-931426768110","index_segment":"category"},"text":"\u70ed\u9500","content":"","parentCompid":"classify1","style":"","itemType":null,"itemParentType":"classify","itemIndex":1,"eventParams":"{\"refresh_object\":\"list-931426768110\",\"index_segment\":\"category\",\"index_value\":\"\\u70ed\\u9500\",\"comp_id\":null,\"parent_comp_id\":\"classify1\",\"item_index\":1,\"type\":null,\"parent_type\":\"classify\"}","eventHandler":"tapRefreshListHandler"},{"customFeature":{"index_value":"\u65b0\u54c1","action":"refresh-list","refresh_object":"list-931426768110","index_segment":"category"},"text":"\u65b0\u54c1","content":"","parentCompid":"classify1","style":"","itemType":null,"itemParentType":"classify","itemIndex":2,"eventParams":"{\"refresh_object\":\"list-931426768110\",\"index_segment\":\"category\",\"index_value\":\"\\u65b0\\u54c1\",\"comp_id\":null,\"parent_comp_id\":\"classify1\",\"item_index\":2,\"type\":null,\"parent_type\":\"classify\"}","eventHandler":"tapRefreshListHandler"},{"customFeature":{"action":"refresh-list","refresh_object":"list-931426768110","index_segment":"category","index_value":"\u4ef7\u683c"},"text":"\u4ef7\u683c","content":"","parentCompid":"classify1","style":"","itemType":null,"itemParentType":"classify","itemIndex":3,"eventParams":"{\"refresh_object\":\"list-931426768110\",\"index_segment\":\"category\",\"index_value\":\"\\u4ef7\\u683c\",\"comp_id\":null,\"parent_comp_id\":\"classify1\",\"item_index\":3,\"type\":null,\"parent_type\":\"classify\"}","eventHandler":"tapRefreshListHandler"}],"customFeature":{"mode":"1","selected":"0","selectedColor":"rgb(127, 76, 230)"},"animations":[],"page_form":"","compId":"classify1"},"goods_list2":{"type":"goods-list","style":"background-color:rgb(243, 243, 243);margin-top:4.6875rpx;opacity:1;color:rgb(102, 102, 102);font-size:32.8125rpx;height:auto;margin-left:auto;","content":"","customFeature":{"lineBackgroundColor":"rgb(255, 255, 255)","lineBackgroundImage":"","margin":0,"lineHeight":"230","imgWidth":"140","imgHeight":"170","vesselAutoheight":1,"height":"300px","form":"goods","mode":1,"name":"\u5546\u54c1\u5217\u8868","ifUseContact":true,"isIntegral":true,"isShoppingCart":true,"id":"list-931426768110"},"animations":[],"page_form":"","compId":"goods_list2","parentCompid":"goods_list2","list_style":"background-color:rgb(255, 255, 255);height:539.0625rpx;margin-left:auto;","img_style":"width:328.125rpx;height:398.4375rpx;margin-left:auto;","title_width":{"width":"398.4375rpx"},"param":"{\"id\":\"list-931426768110\",\"form\":\"goods\",\"goods_type\":0,\"page\":1,\"app_id\":\"HDp19SpV6L\",\"is_count\":0,\"is_integral\":1}"},"has_tabbar":0,"page_hidden":true,"page_form":"gdfz","top_nav":{"navigationBarBackgroundColor":"#000000","navigationBarTextStyle":"white","navigationBarTitleText":"\u6f6e\u6d41\u7a7f\u642d"}},
    need_login: false,
    page_router: 'page10016',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [{"compid":"goods_list2","param":{"id":"list-931426768110","form":"goods","goods_type":0,"page":1,"app_id":"HDp19SpV6L","is_count":0,"is_integral":1}}],
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
