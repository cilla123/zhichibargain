
var app = getApp()

Page({
  data: {
    selectAddressId: '',
    orderId: '',
    addressList: [],
    afterInitial: false,
    isFromBack: false,
    from: '',
    fromAddAdress: false,
    showNewAddressDialog: true,
    address_id: '',
    changeLocal: 0,
    localAddress: '',
    selectProCityDirs: true,
    address_info: {
      name: '',
      contact: '',
      province: {
        text: '',
        id: ''
      },
      city: {
        text: '',
        id: ''
      },
      district: {
        text: '',
        id: ''
      },
      detailAddress: '',
      sex: 1,
      label: 3,
    },
    selectRegion: [0,0,0],
    selectRegionId: [0,0,0]
  },
  subShopId: '',
  onLoad: function(options){
    var that = this,
        selectAddressId = options.id,
        orderId = options.oid,
        preTakeout = options.preTakeout,
        locateAddress = options.locateAddress,
        localLatLng = app.globalData.takeoutAddressInfoByLatLng,
        changeLocal = options.changeLocal,
        from = options.from;
    this.getArea(0, function(res){
      let initData = [{id: 0, name: '请选择', city:[{
        id: 0, name: '请选择', dirstrict:[{
          id: 0, name: '请选择'
        }]
      }]}]
      initData = initData.concat(res)
      that.setData({
        province: initData
      })
    });
    this.locateAddress = locateAddress;
    this.setData({
      orderId: orderId,
      preTakeout: preTakeout,
      changeLocal: changeLocal,
      localAddress: locateAddress,
      localLatLng: localLatLng
    })
    this.subShopId = options.sub_shop_id || '';
    if (changeLocal == 1) {
    this.getLocation();
    }
    this.getAddressList(selectAddressId, orderId, from)
  },
  onShow: function(){
    if(this.data.isFromBack){
      var that = this;
    } else {
      this.setData({
        isFromBack: true
      })
    };
  },
  showProDialog:function(){
    this.setData({
      selectProCityDirs: false,
      regionStr: this.oldRegionStr || ''
    })
    this.region = this.data.selectRegion;
    this.regionid = this.data.selectRegionId;
    this.oldRegionStr = this.data.regionStr;
  },
  changeRegion: function(e){
    let that = this;
    let province = this.data.province;
    let value = e.detail.value;
    if (!province[value[0]].city) {
      this.getArea(province[value[0]].id, function (res) {
        province[value[0]].city = res;
        that.getArea(province[value[0]].city[0].id, function (res) {
          province[value[0]].city[0].dirstrict = res;
          that.setData({
            province: province,
            selectRegion: [value[0], 0, 0],
            selectRegionId: [province[value[0]].id, province[value[0]].city[0].id, province[value[0]].city[0].dirstrict[0].id],
            regionStr: [province[value[0]].name, province[value[0]].city[0].name, province[value[0]].city[0].dirstrict[0].name]
          })
        })
      })
    }else{
      if (!province[value[0]].city[value[1]].dirstrict) {
        this.getArea(province[value[0]].city[value[1]].id, function (res) {
          province[value[0]].city[value[1]].dirstrict = res;
          that.setData({
            province: province,
            selectRegion: [value[0], value[1], 0],
            selectRegionId: [province[value[0]].id, province[value[0]].city[value[1]].id, province[value[0]].city[value[1]].dirstrict[0].id],
            regionStr: [province[value[0]].name, province[value[0]].city[value[1]].name, province[value[0]].city[value[1]].dirstrict[0].name]
          })
        })
      }else{
        that.setData({
          selectRegion: [value[0], value[1], value[2]],
          selectRegionId: [province[value[0]].id, province[value[0]].city[value[1]].id, province[value[0]].city[value[1]].dirstrict[value[2]].id],
          regionStr: [province[value[0]].name, province[value[0]].city[value[1]].name, province[value[0]].city[value[1]].dirstrict[value[2]].name]
        })
      }
    }
  },
  getArea: function(id, callBack){
    let that = this;
    app.sendRequest({
      url: '/index.php?r=Region/getRegionList',
      data: {pid: id},
      success:function(res){
        res.data = res.data.reverse()
        callBack(res.data);
      }
    })
  },
  hideProCityDirs: function(){
    let that = this;
    setTimeout(() => {
      that.setData({
        selectRegionId: this.regionid,
        selectProCityDirs: true,
        regionStr: this.oldRegionStr || ""
      })
    }, 2000);
  },
  submitRegion:function(){
    let that = this;
    setTimeout(function(){
      that.setData({
        selectProCityDirs: true
      })
      that.oldRegionStr = that.data.regionStr
      if (that.data.searchInput) {
        app.sendRequest({
          url: '/index.php?r=Map/suggestion&keyword=',
          data: {
            keyword: that.data.regionStr.join('') + that.data.searchInput,
            region: that.data.regionStr[1]
          },
          success: function (res) {
            that.setData({
              searchInput: that.data.searchInput,
              searchAddress: res.data
            })
          }
        })
      }
    },2000)
  },
  getAddressList: function (selectAddressId, orderId, from){
    let that = this;
    let takeoutLocate = app.globalData.takeoutLocate;
    let shopInfo = app.globalData.takeoutShopInfo
    let addressList = [];
    let hasInDistance = true;
    app.sendRequest({
      url: '/index.php?r=AppShop/addressList',
      success: function(res){
        let address = res.data;
        for(var i = 0, j = address.length-1 ; i <= j; i++){
          if (from == 'takeout') {
            address[i].is_distance = app.calculationDistanceByLatLng(shopInfo.latitude, shopInfo.longitude, address[i].latitude, address[i].longitude) < shopInfo.deliver_distance ? 1 : 0;
          }
          if (address[i].is_distance == 0) {
            hasInDistance = false;
          }
          addressList.push(address[i]);
        }
        if (selectAddressId || orderId || from) {
        that.setData({
          addressList: addressList,
          selectAddressId: selectAddressId,
          orderId: orderId,
          afterInitial: true,
            from: from,
            hasInDistance: hasInDistance
    })
        }else{
          that.setData({
            addressList: addressList,
            hasInDistance: hasInDistance
          })
        }
      }
      })
  },
  getLocation: function () {
    let that = this;
    app.getLocation({
      success:function (res) {
        if (!that.locateAddress) {
          app._getAddressByLatLng({
            lat: res.latitude,
            lng: res.longitude
          }, function (data) {
            that.setData({
              localLatLng: { lat: res.latitude, lng: res.longitude},
              localAddress: data.data.formatted_addresses.recommend
            })
            that.locateAddress = data.data.formatted_addresses.recommend;
            that.nearbyAddress({
              lat: res.latitude,
              lng: res.longitude,
              keyword: that.locateAddress
            })
          })
        }else{
          that.nearbyAddress({
            lat: res.latitude,
            lng: res.longitude,
            keyword: that.locateAddress
          })
        }
      },
      fail:function (res) {
      }
    })
  },
  searchAddress:function (e) {
    let that =this;
    if (!this.data.regionStr) {
      app.showModal({
        content: '请先选择所在省市'
      })
      return;
    }
    if (e.detail.value.trim() != '') {
      clearTimeout(this.searchFunc);
      this.searchFunc = setTimeout(function(){
        app.sendRequest({
          url: '/index.php?r=Map/suggestion&keyword=',
          data:{
            keyword: that.data.regionStr.join('')+ e.detail.value,
            region: that.data.regionStr[1]
          },
          success: function (res) {
            that.setData({
              searchInput : e.detail.value,
              searchAddress: res.data
            })
          }
        })
      },1000)
    }else{
      that.setData({
        searchAddress: []
      })
    }
  },
  relocate:function (e) {
    let that = this;
    this.setData({
      localAddress: ''
    })
    app.getLocation({
      success: function (res) {
        app._getAddressByLatLng({
          lat: res.latitude,
          lng: res.longitude
        }, function(data){
          that.setData({
            localLatLng: data.data,
            localAddress: data.data.formatted_addresses.recommend
          })
          that.nearbyAddress({
            lat: res.latitude,
            lng: res.longitude,
            keyword: data.data.formatted_addresses.recommend
          })
        })
      }
    })
  },
  selectTakeoutRelocate:function(e){
    let info = e.currentTarget.dataset.info
    app.globalData.takeoutLocate = {
      lat: info.latitude,
      lng: info.longitude
    }
    app.turnBack();
  },
  turnBackPage: function (e) {
    let addressDetail = e.currentTarget.dataset.addressinfo;
    if (this.data.fromAddAdress) {
      this.setData({
        fromAddAdress: false,
        'address_info.province.text': addressDetail.ad_info ? addressDetail.ad_info.province : addressDetail.province ,
        'address_info.city.text': addressDetail.ad_info ? addressDetail.ad_info.city : addressDetail.city,
        'address_info.district.text': addressDetail.ad_info ? addressDetail.ad_info.district : addressDetail.district,
        'address_info.detailAddress': addressDetail.title || addressDetail.address_component.street,
        'showNewAddressDialog': false
      })
    }else{
      app.globalData.takeoutLocate = addressDetail.location;
      app.turnBack();
    }
  },
  turnBackAddress:function(e){
    let addressDetail = e.currentTarget.dataset.addressinfo;
    let regionId = this.data.selectRegionId;
    this.setData({
      fromAddAdress: false,
      'address_info.province.id': regionId[0],
      'address_info.city.id': regionId[1],
      'address_info.district.id': regionId[2],
      'address_info.province.text': addressDetail.ad_info ? addressDetail.ad_info.province : addressDetail.province,
      'address_info.city.text': addressDetail.ad_info ? addressDetail.ad_info.city : addressDetail.city,
      'address_info.district.text': addressDetail.ad_info ? addressDetail.ad_info.district : addressDetail.district,
      'address_info.detailAddress': addressDetail.title,
      'showNewAddressDialog': false
    })
  },
  addAddress : function(){
    var _this = this;
    app.chooseAddress({
      success : function(res){
        app.sendRequest({
          method : 'post',
          url : '/index.php?r=AppShop/AddWxAddress',
          data : {
            detailInfo : res.detailInfo || '',
            cityName : res.cityName || '',
            provinceName : res.provinceName || '',
            UserName : res.userName || '',
            telNumber : res.telNumber || '',
            district : res.district || '',
            countyName : res.countyName || ''
          },
          success : function(){
            _this.getAddressList(undefined, undefined, _this.data.from)
          }
        })
      }
    })
  },
  deleteAddress: function(e){
    var that = this,
        deleteId = e.target.dataset.id;

    app.showModal({
      content: '确定要删除地址？',
      showCancel: true,
      confirmText: '确定',
      cancelText: '取消',
      confirm: function(){
        app.sendRequest({
          url: '/index.php?r=AppShop/delAddress',
          data: {
            address_id: deleteId
          },
          success: function(res){
            var addressList = that.data.addressList;

            for (var i = 0; i <= addressList.length - 1; i++) {
              if(addressList[i].id == deleteId){
                addressList.splice(i, 1);
              }
            }
            that.setData({
              addressList: addressList
            })
          }
        })
      }
    })
  },
  selectAddress: function(e){
    var addressId = e.currentTarget.dataset.id,
        // orderId = this.data.orderId,
        that = this,
        pages = getCurrentPages(),
        prePage = pages[pages.length - 2],
        addressList = this.data.addressList;

    this.setData({
      selectAddressId: addressId
    })

    // if(orderId){
    //   // 修改订单详情地址
    //   app.sendRequest({
    //     url: '/index.php?r=AppShop/setAddress',
    //     data: {
    //       order_id: orderId,
    //       address_id: addressId,
    //       sub_shop_app_id: that.subShopId
    //     },
    //     success: function(res){
    //       that.changeFreightWay();
    //     }
    //   });

    // } else {
      // 修改结算页面地址

      for (var i = addressList.length - 1; i >= 0; i--) {
        if(addressList[i].id == addressId){
          prePage.setData({
            selectAddress: addressList[i]
          });
        }
      };
      app.turnBack();
    // }
  },
  nearbyAddress: function (option) {
    let that = this;
    app.sendRequest({
      url: '/index.php?r=Map/searchAreaInfo',
      data: {
        keyword: option.keyword,
        boundary: 'nearby('+option.lat+','+option.lng+',2000)'
      },
      success: function (res) {
        that.setData({
          'nearbyAddress': res.data
        })
      }
    })
  },
  changeFreightWay:function(){
    var _this = this;
    app.sendRequest({
      url: '/index.php?r=AppShop/ChangeOrder',
      data: {
        order_id: _this.data.orderId,
        sub_shop_app_id: _this.subShopId
      },
      success: function (res) {
        let router = 'orderDetail';
        let url = '/pages/' + router + '/' + router + '?detail=' + res.data[0].form_data.order_id +'&franchisee=' + _this.subShopId;
        app.turnToPage(url, true);
      }
    });
  },
  // 编辑地址
  editAddress: function(e){
    let _this = this;
    app.sendRequest({
      url: '/index.php?r=AppShop/GetAddressById',
      data: {
        address_id: e.currentTarget.dataset.id,
      },
      success: function (res) {
        _this.setData({
          address_id: e.currentTarget.dataset.id,
          showNewAddressDialog: false,
          address_info: res.data.address_info
        })
      }
    });
    // app.turnToPage('/pages/addAddress/addAddress?id='+addressId);
  },
  //新增地址
  addNewAddress: function(){
    this.setData({
      showNewAddressDialog: false
    })
  },
  cancelAddAddress: function(){
    let address = {
                    name: '',
                    contact: '',
                    province: {
                      text: '',
                      id: '',
                    },
                    city: {
                      text: '',
                      id: '',
                    },
                    district: {
                      text: '',
                      id: '',
                    },
                    detailAddress: '',
                    sex: 1,
                    label: 0,
                  };
    this.setData({
      showNewAddressDialog: true,
      address_info: address
    })
  },
  addAdressName: function(e){
    this.setData({
      'address_info.name': e.detail.value
    })
  },
  addAdressContact: function (e) {
    this.setData({
      'address_info.contact': e.detail.value
    })
  },
  addAdressDetailAddress: function (e) {
    this.setData({
      'address_info.detailAddress': e.detail.value
    })
  },
  selectAddressLabel: function(e){
    this.setData({
      'address_info.label': e.currentTarget.dataset.label
    })
  },
  selectAddressSex: function(e){
    this.setData({
      'address_info.sex': e.currentTarget.dataset.sex
    })
  },
  addSelectAddress: function(){
    this.setData({
      showNewAddressDialog: true,
      fromAddAdress: true
    })
  },
  sureAddAddress: function(){
    let _this = this;
    let addressInfo = _this.data.address_info;
    let addressId = _this.data.address_id;
    if (!addressInfo.name){
      app.showModal({
        content: '联系人不能为空',
      })
      return;
    }
    if (!addressInfo.contact) {
      app.showModal({
        content: '电话不能为空',
      })
      return;
    }
    if (!/^1[0-9]{10}/.test(addressInfo.contact)) {
      app.showModal({
        content: '请填写正确的手机号',
      })
      return;
    }
    if (!addressInfo.detailAddress) {
      app.showModal({
        content: '补充信息不能为空',
      })
      return;
    }
    app.sendRequest({
      url: '/index.php?r=AppShop/addAddress',
      method: 'post',
      data: {
        address_info: addressInfo,
        address_id: addressId,
        is_default: 0
      },
      success: function (res) {
        app.showToast({
          title: '保存成功'
        })
        _this.setData({
          showNewAddressDialog: true,
          searchAddress: []
        })
        _this.getAddressList(undefined, undefined, _this.data.from)
      }
    });
  }
})
