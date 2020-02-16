//app.js
App({
  onLaunch: function () {
    //云开发环境的初始化
    wx.cloud.init({
      env:"zhangrong-qwpg8"
    })
  },
  globalData: {
    userInfo: null
  }
})