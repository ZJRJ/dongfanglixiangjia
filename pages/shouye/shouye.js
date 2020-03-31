// pages/shouye/shouye.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '', //搜索的内容
    videoPlay: null, //视频播放
    dataList: [], //视频播放
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    navSwiperList: [{
        "title": "买新房",
        "url": '/images/file_5b46f8c8a637a.png',
        'id': 1
      },
      {
        "title": "买二手房",
        "url": '/images/file_5b46f8c8bd137.png',
        'id': 2
      },
      {
        "title": "找租房",
        "url": '/images/file_5b46f9e6732a4.png',
        'id': 3
      },
      {
        "title": "商铺",
        "url": '/images/file_5b46fb235c49b.png',
        'id': 4
      },
      {
        "title": "好视频",
        "url": '/images/file_5b5198296d135.png',
        'id': 5
      },
      {
        "title": "我要卖房",
        "url": '/images/file_5b46fecbf2838.png',
        'id': 6
      },
      {
        "title": "我要出租",
        "url": '/images/file_5b46ffe172eb0.png',
        'id': 7
      },
      {
        "title": "写字楼",
        "url": '/images/file_5b4700baa08fb.png',
        'id': 8
      },
      {
        "title": "经纪人",
        "url": '/images/file_5b47022320f26.png',
        'id': 9
      },
      {
        "title": "排行榜",
        "url": '/images/file_5b5198273d9fb.png',
        'id': 10
      }
    ],
    msgList: [{
        title: '不能大涨更不许大跌，房价调控进入维稳模式'
      },
      {
        title: '楼市焦虑蔓延，专家：房价上升空间已不大'
      }
    ],
    imgList: [{
        imgSrc: "/common/images/hot_1.png",
        icon: "iconsousuoremenfenlei",
        msg: "热门活动"
      },
      {
        imgSrc: "/common/images/hot_2.png",
        icon: "icongongjijin",
        msg: "我要找房"
      },
      {
        imgSrc: "/common/images/hot_3.png",
        icon: "iconjisuanqiicon",
        msg: "房贷计算"
      },
      {
        imgSrc: "/common/images/hot_4.png",
        icon: "icontuijian",
        msg: "我要推荐"
      }
    ],
    // 数据容器
    houseList: [

    ],
    // 轮播图
    navList: [],
    //上拉加载下一页
    page: 1, //当前页数
    pageSize: 10, // 一页的数据量
    isLastPage: false, //当前是否最后一页
    tips: '上拉加载更多', //页尾提示信息
  },

  // 点击cover播放，其它视频结束
  videoPlay: function(e) {
    var _index = e.currentTarget.dataset.id
    this.setData({
      _index: _index
    })
    //停止正在播放的视频
    var videoContextPrev = wx.createVideoContext(_index + "")
    videoContextPrev.stop();

    setTimeout(function() {
      //将点击视频进行播放
      var videoContext = wx.createVideoContext(_index + "")
      videoContext.play();
      $('video').css({
        'display': "block"
      })
    }, 500)
  },
  // 模拟数据加载
  getData: function(params) {
    var that = this;
    var result;
    wx.showLoading({
      title: '加载中',
    })



    // var result = [


    //   {
    //     'louPanName': '昌建君悦府11 ',//项目名称
    //     'picUrlList': [//项目banner
    //       {
    //         picUrl: "https://img.zhichiwangluo.com/zcimgdir/album/file_5de8bdd71df62.jpg",
    //         sort: 0
    //       },
    //       {
    //         picUrl: "http://housecollection.oss-cn-beijing.aliyuncs.com/loupan-picture/louPan/1578124678261_553.jpg",
    //         sort: 1
    //       },
    //     ],
    //     'price': 6000,//单价

    //     'houseType': '三室两厅',//户型
    //     'houseArea': '80-120',//面积
    //     'sum': 6000,//想买人数
    //     'fitmentType': ['普通住宅','海景高层','花园洋房'],
    //     'remark':'高品质明星盘,注册成为经纪人,宅在家赚佣金',
    //     'status':1,// 1在售 2待售
    //     'fitmentType2': '毛坯房',//类型2
    //     'projectBuild': '10#/15#/18#',//在售楼房
    //     'projectTime': '2020',//交房时间
    //     'address': '漯河市人民路与解放路东北角',//项目地址
    //     "jingjiren": [{ //经纪人信息
    //       "name": '张梦飞', //姓名
    //       "photo": 'https://img.zhichiwangluo.com/zcimgdir/album/file_5e0039be6ee1e.jpg', //头像
    //       "phone": "17127844659" //电话
    //     }],
    //     "lunboList": [ //轮播列表
    //       { "url": "https://pic4.ajkimg.com/display/xinfang/a36b3f3d58c69a9a996534db28ca99c8/156x117x50@2x.jpg?t=5" },
    //       { "url": "https://pic4.ajkimg.com/display/xinfang/a36b3f3d58c69a9a996534db28ca99c8/156x117x50@2x.jpg?t=5" },
    //       { "url": "https://pic4.ajkimg.com/display/xinfang/a36b3f3d58c69a9a996534db28ca99c8/156x117x50@2x.jpg?t=5" }
    //     ],
    //     "houseDescripe": [ //房源描述
    //       {
    //         "sldz": "漯河市人民路与解放路东北角", //售楼地址
    //         "zxqk": "毛坯,公共部分精装",//装修情况
    //         "jzlx": "普通住宅,公寓,别墅,商铺",//建筑类型
    //         "jzlb": " 联排,多层,小高层,高层,超高层",//建筑类别
    //         "zxkp": "2018年8月12号",//最新开盘
    //         "jfsj": "2021年6月",//交房时间
    //         "cq": "70年",//产权
    //         "rjl": "2.5",//容积率
    //         "lhl": "48%",//绿化率
    //         "kfs": "河南天鑫置业有限公司",//开发商
    //         "wygs": "河南润嘉物业服务有限公司",//物业公司
    //         "wyf": "住宅：1.1元/m²/月", //物业费
    //         "zdmj": "50373㎡",//占地面积
    //         "jzmj": "500000㎡",//建筑面积
    //         "ghhs": "6000户",//规划户数
    //         "cwzs": "5489",//车位总数
    //         "cwb": "1:1.1"//车位比
    //       }
    //     ]
    //   }

    // ];
    console.log(params)
    var condition = params ? params : '';
    console.log(condition)
    wx.request({
      url: 'https://house.hnshengen.com/mobile/LouPanInfo/getAllLouPan',
      method: 'GET',
      data: {
        page: 1,
        limit: 10,
        condition: condition
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {

        var arr = res.data.data;
        for (var i = 0; i < arr.length; i++) {
          var str = arr[i].lightSpot;
          var ss = str.split(",");
          arr[i].lightSpot = ss;
        }
        console.log(arr);
        result = arr;
        setTimeout(function() {
          wx.hideLoading();
          that.setData({
            houseList: result
          })
          app.globalData.houseList = result;

          var newData = {};
          if (arr.length < that.data.pageSize) {
            // 没有数据了，已经是最后一页
            newData.isLastPage = true;
            newData.tips = "已显示全部啦";
            that.setData(newData);
          }
        }, 500)
      }
    })
    wx.request({
      url: 'https://house.hnshengen.com/mobile/LouPanInfo/indexLunBo',
      method: 'get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          navList: res.data.data
        })
      }
    })


  },
  //搜索框文本内容显示
  inputBind: function(event) {
    this.setData({
      inputValue: event.detail.value
    })
    console.log('bindInput' + this.data.inputValue)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.getData();
    wx.hideShareMenu();
    //获取用户信息
    wx.getUserInfo({
      success: function(res) {
        // debugger;
        console.log(res);
        // that.data.userInfo = res.userInfo;

        // that.setData({
        //   userInfo: that.data.userInfo
        // })
      }
    })
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
    // 最后一页了，取消下拉功能
    if (this.data.isLastPage) {
      return
    }
    this.setData({
      page: this.data.page + 1
    });
    console.log(this.data.isLastPage)
    console.log(this.data.page)
    this.getData(this.data.page)
  },
  requestVideos: function() {
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    var app = getApp();

    // wx.request({
    //   url= 'test.php', //仅为示例，并非真实的接口地址
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   method: "POST",
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success:function(res) {
    // var res = {
    //   'status': 200,
    //   'data': [{
    //       'louPanName': '碧桂园沙河珑湾', //项目名称
    //       // 'picUrlList': 'https://img.zhichiwangluo.com/zcimgdir/album/file_5de8bdd71df62.jpg', //项目图片
    //       'picUrlList': [{
    //           picUrl: "https://img.zhichiwangluo.com/zcimgdir/album/file_5de8bdd71df62.jpg",
    //           sort: 0
    //         },
    //         {
    //           picUrl: "http://housecollection.oss-cn-beijing.aliyuncs.com/loupan-picture/louPan/1578124678261_553.jpg",
    //           sort: 1
    //         },
    //       ],
    //       'price': 6000,
    //       'sum': 6000, //想买人数//单价
    //       'houseType': '三室两厅', //户型
    //       'houseArea': '80-120', //户型面积
    //       'fitmentType': ['普通住宅', '海景高层', '花园洋房'],
    //       'remark': '靓盘好卖',
    //       'status': 1, // 1在售 2售罄
    //       'fitmentType2': '毛坯房',
    //       'projectBuild': '10#/15#/18#',
    //       'projectTime': '2020',
    //       'address': '漯河市郾城区太行山路与黄河西路交汇处东北角',
    //       "jingjiren": [{
    //         "name": '张梦飞',
    //         "photo": 'https://img.zhichiwangluo.com/zcimgdir/album/file_5e0039be6ee1e.jpg',
    //         "phone": "17127844659"
    //       }],
    //       "houseDescripe": [{
    //         "sldz": "漯河市郾城区太行山路与黄河西路交汇处东北角",
    //         "zxqk": "毛坯,公共部分精装",
    //         "jzlx": "普通住宅,公寓,别墅,商铺",
    //         "jzlb": " 联排,多层,小高层,高层,超高层",
    //         "zxkp": "2018年8月12号",
    //         "fgsj": "2021年6月",
    //         "cq": "70年",
    //         "rjl": "2.5",
    //         "lhl": "48%",
    //         "kfs": "河南天鑫置业有限公司",
    //         "wygs": "河南润嘉物业服务有限公司",
    //         "wyf": "住宅：1.1元/m²/月",
    //         "zdmj": "50373㎡",
    //         "jzmj": "500000㎡",
    //         "ghhs": "6000户",
    //         "cwzs": "5489",
    //         "cwb": "1:1.1"
    //       }]
    //     },
    //     {
    //       'louPanName': '荣盛锦绣江南',
    //       // 'picUrlList': 'https://img.zhichiwangluo.com/zcimgdir/album/file_5de8bdd71df62.jpg',
    //       'picUrlList': [{
    //           picUrl: "https://img.zhichiwangluo.com/zcimgdir/album/file_5de8bdd71df62.jpg",
    //           sort: 0
    //         },
    //         {
    //           picUrl: "http://housecollection.oss-cn-beijing.aliyuncs.com/loupan-picture/louPan/1578124678261_553.jpg",
    //           sort: 1
    //         },
    //       ],
    //       'price': 6000,
    //       'sum': 6000, //想买人数
    //       'houseType': '三室两厅',
    //       'houseArea': '80-120',
    //       'fitmentType': ['普通住宅', '海景高层', '花园洋房'],
    //       'remark': '靓盘好卖',
    //       'status': 1, // 1在售 2售罄
    //       'fitmentType2': '毛坯房',
    //       'projectBuild': '10#/15#/18#',
    //       'projectTime': '2020',
    //       'address': '漯河市郾城区邙山路与淞江路交会处东南角',
    //       "jingjiren": [{
    //         "name": '张梦飞',
    //         "photo": 'https://img.zhichiwangluo.com/zcimgdir/album/file_5e0039be6ee1e.jpg',
    //         "phone": "17127844659"
    //       }],
    //       "houseDescripe": [{
    //         "sldz": "漯河市郾城区邙山路与淞江路交会处东南角",
    //         "zxqk": "毛坯,公共部分精装",
    //         "jzlx": "普通住宅,公寓,别墅,商铺",
    //         "jzlb": " 联排,多层,小高层,高层,超高层",
    //         "zxkp": "2018年8月12号",
    //         "fgsj": "2021年6月",
    //         "cq": "70年",
    //         "rjl": "2.5",
    //         "lhl": "48%",
    //         "kfs": "河南天鑫置业有限公司",
    //         "wygs": "河南润嘉物业服务有限公司",
    //         "wyf": "住宅：1.1元/m²/月",
    //         "zdmj": "50373㎡",
    //         "jzmj": "500000㎡",
    //         "ghhs": "6000户",
    //         "cwzs": "5489",
    //         "cwb": "1:1.1"
    //       }]
    //     },
    //     {
    //       'louPanName': '泰威书香水岸 ',
    //       // 'picUrlList': 'https://img.zhichiwangluo.com/zcimgdir/album/file_5de8bdd71df62.jpg',
    //       'picUrlList': [{
    //           picUrl: "https://img.zhichiwangluo.com/zcimgdir/album/file_5de8bdd71df62.jpg",
    //           sort: 0
    //         },
    //         {
    //           picUrl: "http://housecollection.oss-cn-beijing.aliyuncs.com/loupan-picture/louPan/1578124678261_553.jpg",
    //           sort: 1
    //         },
    //       ],
    //       'price': 6000,
    //       'sum': 6000, //想买人数
    //       'houseType': '三室两厅',
    //       'houseArea': '80-120',
    //       'fitmentType': ['普通住宅', '海景高层', '花园洋房'],
    //       'remark': '靓盘好卖',
    //       'status': 1, // 1在售 2售罄
    //       'fitmentType2': '毛坯房',
    //       'projectBuild': '10#/15#/18#',
    //       'projectTime': '2020',
    //       'address': '漯河市海河路与太行山路交汇处向西200米路南',
    //       "jingjiren": [{
    //         "name": '张梦飞',
    //         "photo": 'https://img.zhichiwangluo.com/zcimgdir/album/file_5e0039be6ee1e.jpg',
    //         "phone": "17127844659"
    //       }],
    //       "houseDescripe": [{
    //         "sldz": "漯河市海河路与太行山路交汇处向西200米路南",
    //         "zxqk": "毛坯,公共部分精装",
    //         "jzlx": "普通住宅,公寓,别墅,商铺",
    //         "jzlb": " 联排,多层,小高层,高层,超高层",
    //         "zxkp": "2018年8月12号",
    //         "fgsj": "2021年6月",
    //         "cq": "70年",
    //         "rjl": "2.5",
    //         "lhl": "48%",
    //         "kfs": "河南天鑫置业有限公司",
    //         "wygs": "河南润嘉物业服务有限公司",
    //         "wyf": "住宅：1.1元/m²/月",
    //         "zdmj": "50373㎡",
    //         "jzmj": "500000㎡",
    //         "ghhs": "6000户",
    //         "cwzs": "5489",
    //         "cwb": "1:1.1"
    //       }]
    //     }
    //   ]
    // };

    setTimeout(function() {

      if (res.status !== 200) {
        app.showError()
      } else {
        wx.hideLoading();
        var newData = {};
        debugger;
        if (res.data.length < that.data.pageSize) {
          // 没有数据了，已经是最后一页
          newData.isLastPage = true;
          newData.tips = "已显示全部啦";
        }
        // 追加数据
        newData.houseList = that.data.houseList.concat(res.data);
        app.globalData.houseList = that.data.houseList.concat(res.data);
        that.setData(newData);
      }
    }, 500)

    //   }
    // })

  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 点击事件的处理
   */
  list: function(e) {

    var id = e.currentTarget.dataset.id;
    var title = e.currentTarget.dataset.title;

    console.log(id);

    if (id == 5) {
      var url = "/pages/videoList/videoList";
      wx.navigateTo({
        url: url
      })
    }
    if (id == 9) {
      var url = "/pages/agent/agent";
      wx.navigateTo({
        url: url
      })
    }
    if (id > 4) {
      return;
    }
    var url = "/pages/houseList/houseList?id=" + id + "&title=" + title;
    wx.navigateTo({
      url: url
    })

  },
  detail: function(e) {

    var louPanId = e.currentTarget.dataset.index;
    app.globalData.louPanId = louPanId;
    // debugger;
    console.log(louPanId);
    var url = "/pages/detail/detail";
    wx.navigateTo({
      url: url
    })

  },
  /**
   * 搜索执行按钮
   */
  query: function(event) {

    var that = this
    console.log(this.data.inputValue)
    that.getData(this.data.inputValue);
    /**
     * 提问帖子搜索API
     * keyword string 搜索关键词 ; 这里是 this.data.inputValue
     * start int 分页起始值 ; 这里是 0
     */
    // wx.request({
    //   url: 'https://localhost/proj_online_class/server/public/index.php/forum/forum/get_issue_search/' + this.data.inputValue + /0/,
    //   data: {
    //     inputValue: this.data.inputValue
    //   },
    //   method: 'GET',
    //   success: function(res) {
    //     console.log(res.data)
    //     var searchData = res.data
    //     that.setData({
    //       searchData
    //     })


    //     /**
    //      * 设置 模糊搜索
    //      */
    //     if (!that.data.inputValue) {
    //       //没有搜索词 友情提示
    //       wx.showToast({
    //         title: '请重新输入',
    //         image: '../../picture/tear.png',
    //         duration: 2000,
    //       })
    //     } else if (searchData.search.length == 0) {
    //       //搜索词不存在 友情提示
    //       wx.showToast({
    //         title: '关键词不存在',
    //         image: '../../picture/tear.png',
    //         duration: 2000,
    //       })
    //     } else {
    //       //提取题目关键字 与搜索词进行匹配
    //       var searchIndex = searchData.search.length
    //       var d = 0;
    //       for (var i = 0; i <= searchIndex - 1; i++) {
    //         /**
    //          * 根据关键词 跳转到 search搜索页面
    //          */
    //         wx.navigateTo({
    //           url: '../search/search',
    //         })
    //       }
    //     }



    //   }
    // })
  }
})