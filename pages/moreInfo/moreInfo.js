// pages/moreInfo/moreInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      'louPanName': '漯河东方今典 ', //项目名称
      'picUrlList': [ //项目banner
        {
          picUrl: "https://img.zhichiwangluo.com/zcimgdir/album/file_5de8bdd71df62.jpg",
          sort: 0
        },
        {
          picUrl: "http://housecollection.oss-cn-beijing.aliyuncs.com/loupan-picture/louPan/1578124678261_553.jpg",
          sort: 1
        },
      ],
      'price': 6000, //单价

      'houseType': '三室两厅', //户型
      'houseArea': '80-120', //面积
      'sum': 6000, //想买人数
      'fitmentType': ['普通住宅', '海景高层', '花园洋房'],
      'remark': '高品质明星盘,注册成为经纪人,宅在家赚佣金',
      'status': 1, // 1在售 2待售
      'fitmentType2': '毛坯房', //类型2
      'projectBuild': '10#/15#/18#', //在售楼房
      'projectTime': '2020', //交房时间
      'projectLocation': '漯河市人民路与解放路东北角', //项目地址
      "jingjiren": [{ //经纪人信息
        "name": '张梦飞', //姓名
        "photo": 'https://img.zhichiwangluo.com/zcimgdir/album/file_5e0039be6ee1e.jpg', //头像
        "phone": "17127844659" //电话
      }],
      "lunboList": [ //轮播列表
        {
          "url": "https://pic4.ajkimg.com/display/xinfang/a36b3f3d58c69a9a996534db28ca99c8/156x117x50@2x.jpg?t=5"
        },
        {
          "url": "https://pic4.ajkimg.com/display/xinfang/a36b3f3d58c69a9a996534db28ca99c8/156x117x50@2x.jpg?t=5"
        },
        {
          "url": "https://pic4.ajkimg.com/display/xinfang/a36b3f3d58c69a9a996534db28ca99c8/156x117x50@2x.jpg?t=5"
        }
      ],
      // 周边
      around:
      {
        'bank': '农业银行、工商银行、建设银行、中国银行、中原银行、河南农村信用社等',
        'community': '社区居委会、快递云贵、消防设施、健身器材',
        'hospital': '漯河医专第三附属医院、城市二级综合医院、漯河骨科医院',
        'school': '源汇区第二实验小学、漯河15中学、漯河北大附中、北大附属实验中学（北大直属）',
        'market': '盛鑫红场、漯河望泽生活广场、奥特莱斯购物广场、建材城',
      }
      ,
      // 预售证
      allowId: [
        {
          'id': '20190726',
          'time': '2019-07-26',
          'remark': '2#'
        },
        {
          'id': '20190726',
          'time': '2019-07-26',
          'remark': '3#'
        },
        {
          'id': '20190726',
          'time': '2019-07-26',
          'remark': '4#'
        }
      ],
      "houseDescripe": [ //房源描述
        {
          'des': '漯河东方今典·境界为东方今典集团房地产板块进驻漯河的开山之作，位于澧河上游河湾，东起王屋山路、西至太白山路，480亩品质大盘，总建筑面积约100万方，坐享高铁出行、生态河景两大红利。项目整体规划涵盖阔景高层、墅质洋房、综合商业中心、2000㎡自建幼儿园等城市综合体，外拥沙澧河生态公园，内享秀美法式园林，为漯河人民全方位打造品质公园美宅。项目所在西城区域为漯河市城市主要发展方向，在高铁站、市政府等核心机构的聚合作用下，即将成为漯河市新的交通、行政、金融中心和生态宜居城。项目整体设计为法式建筑风格，建筑整体造型典雅持重，外立面采用的是干挂石材及仿石涂料、层次感颇强，同时在流畅的线条与浮体雕刻中洋溢着浪漫情怀。大堂式小区大门、雾森系统、可视对讲系统、暖气管道预留、新风系统、五重安防系统、指纹密码锁、加厚装甲子母门、外窗三层玻璃，断桥铝窗框等配套细节，尽显品质人居风范。下沉式庭院丰富您的生活观景层次，高门阔府大开间美哉畅意生活。移植纯粹法式园林景观，低密社区鲜氧生活，轴心景观彰显尊贵典雅，六大主题花园，喷泉、雕塑点缀，处处不凡。',
          'phone': '0395-6844589',
          'wylb': '墅院洋房，万景高层，商业综合体', //物业类别
          'xmts': '阔景高层、墅质洋房、综合商业中心', //项目特色
          'state': '1',//0预售1在售


          "sldz": "漯河市人民路与解放路东北角", //售楼地址
          "zxqk": "毛坯,公共部分精装", //装修情况
          "jzlx": "普通住宅,公寓,别墅,商铺", //建筑类型
          "jzlb": " 联排,多层,小高层,高层,超高层", //建筑类别
          "zxkp": "2018年8月12号", //最新开盘
          "jfsj": "2021年6月", //交房时间
          "cq": "70年", //产权
          "rjl": "2.5", //容积率
          "lhl": "48%", //绿化率
          "kfs": "河南天鑫置业有限公司", //开发商
          "wygs": "河南润嘉物业服务有限公司", //物业公司
          "wyf": "住宅：1.1元/m²/月", //物业费
          "zdmj": "50373㎡", //占地面积
          "jzmj": "500000㎡", //建筑面积
          "ghhs": "6000户", //规划户数
          "cwzs": "5489", //车位总数
          "cwb": "1:1.1" //车位比
        }
      ]
    },
  },
  getData(params) {
    var that = this;
    var surl = "http://localhost:8091/mobile/LouPanInfo/detail";
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
          detail: res.data.data
        })
      }
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})