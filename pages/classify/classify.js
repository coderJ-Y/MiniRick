// pages/classify/classify.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList: [
      {name: '搞笑', id: '001'}, 
      {name: '科幻', id: '002'}, 
      {name: '悬疑', id: '003'}, 
      {name: '恐怖',id: '004'}, 
      {name: '冒险', id: '005'},
      {name: '爱情', id: '006'},
    ],
    goodList: [],
    default: '',
    imageSrc: null
  },

  // 选择
  selected: function(event) {
    this.setData({
      default: event.currentTarget.dataset.name,
    })
    // console.log(this.data)
  },
  // 发布按钮
  goAddGood () {
    wx.showLoading({
      title: '加载中',
      success(res) {
        wx.navigateTo({
          url: '../add/add',
        })
      }
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imageSrc: app.globalData.imageSrc
    })
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