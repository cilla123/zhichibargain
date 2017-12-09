class ProductMgr {
  constructor() {
  }
  static getProductList(){
    var items = [];
    var nowtime = new Date().getTime();
    items.push({
      id: 1,
      img: "../../images/product.png",
      title: "爱国者超薄便携通用乌龙奶盖茶",
      price: 9999.00,
      oriprice: 14100,
      allstore: 20,
      reminder: 7,
      starttime: "2017-12-9 0:00:0",
      endtime: "2017-12-31 23:59:59"
    });
    items.push({
      id: 2,
      img: "../../images/product.png",
      title: "爱国者超薄便携通用乌龙奶盖茶",
      price: 9999.00,
      oriprice: 14100,
      allstore: 20,
      reminder: 20,
      starttime: "2017-12-10 0:00:0",
      endtime: "2017-12-31 23:59:59"
    });
    items.push({
      id: 3,
      img: "../../images/product.png",
      title: "爱国者超薄便携通用乌龙奶盖茶",
      price: 9999.00,
      oriprice: 14100,
      allstore: 20,
      reminder: 20,
      starttime: "2017-12-10  0:00:0",
      endtime: "2017-12-31 23:59:59"
    });
    return items;
  }
  static getProduct(member_id, product_id){
    //Todo:调用获取砍价状态
    var item = {
      id: 3,
      img: "../../images/product.png",
      cover: "../../images/product.png",
      title: "爱国者超薄便携通用乌龙奶盖茶",
      price: 9999.00,
      oriprice: 14100,
      allstore: 20,
      reminder: 20,
      starttime: "2017-12-10 0:00:0",
      endtime: "2017-12-1 23:59:59",
      deliveryamount:0
    };
    return item;
  }
  static getProductKanjiaStatus(member_id, product_id) {
    //Todo:调用获取砍价状态
    return "N";
  }
  static getProductKanjiaBroadcase(){
    return {membername:"小黑妹",money:9999.00}
  }
}

module.exports = ProductMgr;