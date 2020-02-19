//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
        title: "2020年长春工业大学化工工程学院调剂信息", //名称
        province: "吉林省", //学校省份
        category: "理学", //专业门类
        profession: "高分子化学与物理", //专业
        direction: "暂无", //研究方向
        time: "2020-02-17", //时间
      },
      {
        title: "2020年长春工业大学化工工程学院调剂信息", //名称
        province: "吉林省", //学校省份
        category: "理学", //专业门类
        profession: "高分子化学与物理", //专业
        direction: "暂无", //研究方向
        time: "2020-02-17", //时间
      },
      {
        title: "2020年长春工业大学化工工程学院调剂信息", //名称
        province: "吉林省", //学校省份
        category: "理学", //专业门类
        profession: "高分子化学与物理", //专业
        direction: "暂无", //研究方向
        time: "2020-02-17", //时间
      },
      {
        title: "2020年长春工业大学化工工程学院调剂信息", //名称
        province: "吉林省", //学校省份
        category: "理学", //专业门类
        profession: "高分子化学与物理", //专业
        direction: "暂无", //研究方向
        time: "2020-02-17", //时间
      }
    ],
    window_width: 0,
    window_height: 0,
    cion_width: 0,
    cion_height: 0,
    select_year: '0',
  },
  changTab: function (e) {
    this.setData({
      select_year: e.currentTarget.dataset.index,
    })
  },
  //跳转 “筛选” 页面
  changfilter: function (e) {
    wx.navigateTo({
      url: '../indexPages/filter/filter?id=1',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          data: 'test'
        })
      }
    })
  },
  //跳转 “查看详情” 页面
  toDetail: function (e) {
    wx.navigateTo({
      url: '../indexPages/detail/detail?id=1',
    })
  },
  //跳转 “发布调剂信息” 页面
  addItem: function (e) {
    wx.navigateTo({
      url: '../indexPages/additem/additem',
    })
  },
  onLoad: function () {
    let that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        let windowWidth = res.windowWidth;
        let windowHeight = res.windowHeight;
        that.setData({
          window_width: windowWidth,
          window_height: windowHeight,
          cion_width: windowWidth - 10,
          cion_height: windowHeight - 88,
        });
      }
    });
    //   if (app.globalData.userInfo) {
    //     this.setData({
    //       userInfo: app.globalData.userInfo,
    //       hasUserInfo: true
    //     })
    //   } else if (this.data.canIUse) {
    //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //     // 所以此处加入 callback 以防止这种情况
    //     app.userInfoReadyCallback = res => {
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   } else {
    //     // 在没有 open-type=getUserInfo 版本的兼容处理
    //     wx.getUserInfo({
    //       success: res => {
    //         app.globalData.userInfo = res.userInfo
    //         this.setData({
    //           userInfo: res.userInfo,
    //           hasUserInfo: true
    //         })
    //       }
    //     })
    //   }
    // },
    // getUserInfo: function (e) {
    //   console.log(e)
    //   app.globalData.userInfo = e.detail.userInfo
    //   this.setData({
    //     userInfo: e.detail.userInfo,
    //     hasUserInfo: true
    //   })
  }
})