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
      lowprice: 99.00,
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
      lowprice: 99.00,
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
      lowprice: 99.00,
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
      lowprice: 99.00,
      oriprice: 14100,
      allstore: 20,
      reminder: 20,
      starttime: "2017-12-10 0:00:0",
      endtime: "2017-12-31 23:59:59",
      deliveryamount:0,
      specs:[
        { id: 1, name: "尺码", options: [{ display: "大", value: "L" }, { display: "中", value: "M" }, { display: "小", value: "S" }], value: "" },
        { id: 2, name: "颜色", options: [{ display: "纯金", value: "T" }, { display: "铂金", value: "PT" }, { display: "白银", value: "S" }], value: "" },
        { id: 3, name: "款式", options: [{ display: "淑女", value: "L" }, { display: "小清新", value: "M" }, { display: "妖艳贱货", value: "S" }],value:"" }
      ]
    };
    return item;
  }
  static getProductKanjiaStatus(member_id, product_id) {
    //Todo:调用获取砍价状态
    return "P";
  }
  static getProductKanjiaPrice(member_id, product_id) {
    //Todo:调用获取砍价状态
    return 3530;
  }
  static getProductKanjiaBroadcase(){
    return {membername:"小黑妹",money:99.00}
  }
}

module.exports = ProductMgr;