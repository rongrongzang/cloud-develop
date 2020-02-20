// pages/indexPages/filter/filter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province_hidden: true,
    province_list_a: [{
        index: "0",
        name: "内蒙古"
      },
      {
        index: "1",
        name: "北京市"
      },
      {
        index: "2",
        name: "天津市"
      },
      {
        index: "3",
        name: "河北省"
      },
      {
        index: "4",
        name: "山西省"
      },
      {
        index: "5",
        name: "辽宁省"
      },
      {
        index: "6",
        name: "吉林省"
      },
      {
        index: "7",
        name: "黑龙江"
      },
      {
        index: "8",
        name: "上海市"
      },
      {
        index: "9",
        name: "江苏省"
      },
      {
        index: "10",
        name: "浙江省"
      },
      {
        index: "11",
        name: "安徽省"
      },
      {
        index: "12",
        name: "福建省"
      },
      {
        index: "13",
        name: "江西省"
      },
      {
        index: "14",
        name: "山东省"
      },
      {
        index: "15",
        name: "河南省"
      },
      {
        index: "16",
        name: "湖北省"
      },
      {
        index: "17",
        name: "湖南省"
      },
      {
        index: "18",
        name: "广东省"
      },
      {
        index: "19",
        name: "重庆省"
      },
      {
        index: "20",
        name: "四川省"
      }
    ],
    province_list_b: [{
        index: "21",
        name: "内蒙古"
      },
      {
        index: "22",
        name: "广西"
      },
      {
        index: "23",
        name: "海南省"
      },
      {
        index: "24",
        name: "贵州省"
      },
      {
        index: "25",
        name: "云南省"
      },
      {
        index: "26",
        name: "西藏"
      },
      {
        index: "27",
        name: "甘肃省"
      },
      {
        index: "28",
        name: "青海省"
      },
      {
        index: "29",
        name: "宁夏"
      },
      {
        index: "30",
        name: "新疆"
      }
    ],
    province_id: "", //省份id
    province_name: "", //省份name
    college_attr: "", //院校属性
    learn_method: "", //学习方式
    province_type: "", //专业门类
  },
  switchProvince: function (e) {
    let province_hidden = !this.data.province_hidden
    this.setData({
      province_hidden: province_hidden,
    })
  },
  //选择 省份
  checkProvince: function (e) {
    let province_list = this.data.province_list_a.concat(this.data.province_list_b)
    this.setData({
      province_id: province_list[e.currentTarget.dataset.province].index,
      province_name: province_list[e.currentTarget.dataset.province].name
    })
    console.log(this.data.province_name)
  },
  //选择 院校属性
  checkCollegeAttr: function (e) {
    this.setData({
      college_attr: e.currentTarget.dataset.attr,
    })
  },
  //选择 学习方式
  checkLearnMethod: function (e) {
    this.setData({
      learn_method: e.currentTarget.dataset.method,
    })
  },
  //选择 专业门类
  checkType: function (e) {
    this.setData({
      province_type: e.currentTarget.dataset.type,
    })
  },
  clearBtn: function (e) {
    this.setData({
      province_id: "",
      province_name: "",
      college_attr: "",
      learn_method: "",
      province_type: ""
    })
  },
  submitBtn: function (e) {
    // province_id: "", //省份id
    // province_name: "", //省份name
    // college_attr: "", //院校属性
    // learn_method: "", //学习方式
    // province_type: "", //专业门类
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