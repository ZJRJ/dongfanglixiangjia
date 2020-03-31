//app.js
App({
  onLaunch: function() {
    /* 已授权之后，自动获取用户信息 */

    // 判断是否授权
    wx.getSetting({
      success: (res) => { //箭头函数为了处理this的指向问题	
        if (res.authSetting["scope.userInfo"]) {
          console.log("已授权");
          // 获取用户信息
          wx.getUserInfo({
            success: (res) => { //箭头函数为了处理this的指向问题
              //console.log(res); 用户信息结果
              this.globalData.userInfo = res.userInfo;
              if (this.userInfoReadyCallback) { //当index.js获取到了globalData就不需要回调函数了，所以回调函数需要做做一个判断，如果app.js中有和这个回调函数，那么就对这个函数进行调用，并将请求到的结果传到index.js中
                this.userInfoReadyCallback(res);
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: {},
    userInfoTest: {
      name: '永不言弃',
      sex: '0',
      phoneNumber: '17538132018',
      birthday: '2016-09-01',
      avatar: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2220134554,1179617424&fm=26&gp=0.jpg"
    },
    louPanId: '',
    louPanName: '',
    layoutId: '',
    newsId: ''
  }
})