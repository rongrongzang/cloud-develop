// pages/indexPages/error/error.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    error_type: null,
    error_detail: "",
    error_image: "",
  },
  changType: function (e) {
    this.setData({
      error_type: e.currentTarget.dataset.type,
    })
    console.log(this.data.error_type)
  },
  bindKeyInput: function (e) {
    this.setData({
      error_detail: e.detail.value
    })
  },
  //图片
  uploadErrorImg: function () {
    wx.chooseImage({
      success: chooseResult => {
        this.setData({
          error_image: chooseResult.tempFilePaths[0],
        })
        console.log(chooseResult.tempFilePaths[0])
        //此处须要查询登录状态，所以后期采用 云函数
        // wx.cloud.uploadFile({
        //   // 指定上传到的云路径
        //   cloudPath: 'my-photo.png',
        //   // 指定要上传的文件的小程序临时文件路径
        //   filePath: chooseResult.tempFilePaths[0],
        //   // 成功回调
        //   success: res => {
        //     console.log('上传成功', res)
        //   },
        // })
      },
    })
  },
  submitError: function () {
    console.log(this.data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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