// 引入SDK核心类
import QQMapWX from '../../utils/qqmap-wx-jssdk.js';
// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'HJLBZ-RICKW-3GNRN-REOYD-4DJ3J-3NFEN' // 必填
});

const app = getApp()
Page({
  data: {
    userInfo: {},
    openId: '',
    checkOutFlag: false,
    state:0,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    var that = this;
    console.log(this.data.userInfo)
    console.log(app.globalData.userInfo)
    //userInfo有数据
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {

      wx.getUserInfo({ //在老的版本中是可以直接调用授权接口并获取用户信息
        success: (res) => {
          console.log(res.userInfo)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.onAuthLocation();

    wx.login({
      success(res) {
        console.log(res);
        var code = res.code
        wx.request({
          url: 'https://house.hnshengen.com/mobile/wx/code2session',
          method: "get",
          data: {
            code
          },
          success: function(res) {
            console.log(res.data);

            that.setData({
              openId: res.data.openid
            })
            that.checkUser(res.data.openid);
            wx.getUserInfo({
              success: function(res) {
                that.setData({
                  nickName: res.userInfo.nickName,
                  avatarUrl: res.userInfo.avatarUrl,
                })
              },
              fail: function() {
                // fail
                console.log("获取失败！")
              },
              success: function(res) {
                console.log(res)
                console.log("获取用户信息成功！");
                app.globalData.userInfo = res.userInfo;
                that.setData({
                  userInfo: res.userInfo
                })
                console.log(app.globalData.userInfo)
              }
            })


            that.setData(res.data);
          },
          error: function(res) {
            console.log(res)
          }
        })
      }
    })
  },
  checkUser(openId) {
    var that = this;
    var surl = "https://house.hnshengen.com/mobile/user/userInfo";
    wx.request({
      url: surl,
      method: 'get',
      data: {
        openId: openId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log('是否在数据库', res.data.code)
        if (res.data.code !== 401) {
          that.setData({
            checkOutFlag: true
          })
          app.globalData.userInfo = res.data.data;
          that.goShouYe();
        } else {
          // that.goShouYe();
          
        }
        // that.goShouYe();
      }
      
    })
  },
  saveUser(obj) {
    debugger;
    var that = this;
    var surl = "https://house.hnshengen.com/mobile/user/saveUserInfo";
    wx.request({
      url: surl,
      method: 'get',
      data: obj,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {

        if (res.data.code !== 401) {
          that.setData({
            checkOutFlag: true
          })
        } else {
          app.globalData.userInfo.userId = res.data.data
        }
      }
    })
  },
  //信息授权点击了允许
  getUserInfo: function(e) {
    var that = this;
    // debugger
    console.log(e);
    if (e.detail.userInfo) {
      e.detail.userInfo.openId = that.data.openId;
      app.globalData.userInfo = e.detail.userInfo
      that.setData({
        userInfo: e.detail.userInfo,
      })

      console.log(e.detail.userInfo);
      // return;
      that.saveUser(e.detail.userInfo)
      that.goShouYe();
    }else{
      that.goShouYe();
    }
  },
  // 跳转到首页
  goShouYe() {
    // return;
    var url = "/pages/shouye/shouye";
    wx.reLaunch({
      url: url
    })
  },
  //位置授权
  onAuthLocation() {
    wx.authorize({
      scope: 'scope.userLocation',
      success: (res) => {
        // console.log('成功：', res)
        this.onGetLocation(); //获取位置
      },
      fail: (res) => {
        console.log('失败：', res)
      },
    })
  },
  //获取位置
  onGetLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude
        var longitude = res.longitude
        // console.log('latitude', latitude)
        // console.log('latitude', longitude)

        //根据经纬度获取所在城市
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function(res) {
            // console.log(res)
            console.log(res.result.address_component.city)
          }
        });
        // console.log('成功：', res)
      },
      fail: (res) => {
        console.log('失败：', res)
      },
    })
  },
  // 获取用户手机号
  getPhoneNumber(e) {
    var that = this;
    console.log(e.detail.errMsg == "getPhoneNumber:ok");
    console.log("encryptedData----", e.detail.encryptedData);
    console.log(that.data.session_key, "that.data.session_key");
    console.log(e.detail.uid, "uid");
    console.log(e.detail.iv, "iv");
    if (e.detail.errMsg == "getPhoneNumber:ok") {
      wx.request({
        url: 'https://house.hnshengen.com/mobile/wx/decryptData',
        data: {
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv,
          sessionKey: that.data.session_key
        },
        method: "get",
        success: function(res) {
          var result = JSON.parse(res.data);
          console.log(result.phoneNumber);
          var obj={
            phoneNumber: result.phoneNumber
          }
          // app.globalData.userInfo.phoneNumber = result.phoneNumber
          app.globalData.userInfo = obj;
          console.log(app.globalData.userInfo)
          that.setData({
            state: 1
          })
          // console.log(res);
          
        }
      })
    }else{
      app.globalData.userInfo.phoneNumber = '';
        that.setData({
          state: 1
        })
    }
  },
  //授权面板
  gotoSetting() {
    wx.openSetting({
      success: (res) => {
        console.log(res)
      }
    })
  },
})