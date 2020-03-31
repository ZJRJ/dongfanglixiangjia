// pages/personInfo/personInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(app.globalData.userInfo)
    that.setData({
      userInfo: app.globalData.userInfo
    })
  },
  //信息授权点击了允许
  getUserInfo: function (e) {
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
    } else {
    }
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

  },
  detail: function () {
    console.log('11981');
    var url = "/pages/mingpianjia/mingpianjia";
    wx.navigateTo({
      url: url
    })
  }
})