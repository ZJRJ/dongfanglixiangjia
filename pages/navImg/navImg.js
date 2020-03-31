// pages/test/test.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    contentList: [{
      name: '实景图',
      list: [
        'http://chat.hnshengen.com/images/011.jpg',
        'http://chat.hnshengen.com/images/033.jpg',
        'http://chat.hnshengen.com/images/044.jpg',
        'http://chat.hnshengen.com/images/055.jpg'
      ]
    },
    {
      name: '效果图',
      list: [
        'http://chat.hnshengen.com/images/066.jpg',
        'http://chat.hnshengen.com/images/077.jpg',
        'http://chat.hnshengen.com/images/088.jpg',
        'http://chat.hnshengen.com/images/099.jpg',
        'http://chat.hnshengen.com/images/100.jpg',
        'http://chat.hnshengen.com/images/111.jpg',
        'http://chat.hnshengen.com/images/112.jpg',
        'http://chat.hnshengen.com/images/113.jpg',
        'http://chat.hnshengen.com/images/114.jpg'
      ]
    },
    {
      name: '沙盘图',
      list: [
        'http://chat.hnshengen.com/images/088.jpg',
        'http://chat.hnshengen.com/images/099.jpg',
        'http://chat.hnshengen.com/images/100.jpg',
      ]
    },

    {
      name: '交通图',
      list: [
        'http://chat.hnshengen.com/images/022.jpg'
      ]
    },
    {
      name: '建筑图',
      list: [
        'http://chat.hnshengen.com/images/011.jpg',
      ]
    }
    ]
  },
  getStatus(e) {
    this.setData({ status: e.currentTarget.dataset.index })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var params = app.globalData.louPanId;
    this.getData(params);
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
  getData(params) {
    var that = this;
    var surl = "http://localhost:8091/mobile/LouPanInfo/getLouPanPic";
    wx.request({
      url: surl,
      method: 'get',
      data: {
        louPanId: params
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)

        that.setData({
          contentList: res.data.data
        })
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})