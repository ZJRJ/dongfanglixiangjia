// pages/huxingDetail/huxingDetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [],
    louPanName: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var params = app.globalData.layoutId;
    var louPanName = app.globalData.louPanName;
    
    this.setData({
      louPanName: louPanName
    })
    console.log(louPanName)
    console.log(params)
    this.getData(params);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  getData(params) {
    var that = this;
    var surl = "https://house.hnshengen.com/mobile/LouPanInfo/layoutInfo";
    wx.request({
      url: surl,
      method: 'get',
      data: {
        layoutId: params
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data)

        that.setData({
          detail: res.data.data
        })
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})