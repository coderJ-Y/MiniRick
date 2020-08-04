// pages/detail/detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: null
  },
  
  goPrePage () {
    wx.navigateBack({
      delta: 1
    })
  },
  goHome () {
    wx.switchTab({
      url: '../index/index',
    })
  },
  callPhone: function () {
    var _phone = '10056'
    wx.showModal({
      title: '拨打电话',
      content: '是否拨打' + _phone,
      success (res) {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: '_phone',
          })
        }else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  gotoCart () {
    wx.switchTab({
      url: '../cart/cart',
    })
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