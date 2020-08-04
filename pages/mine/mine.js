// pages/mine/mine.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    showAuth: true
  },
  
  // 获得授权
  auth: function (e) {
    // var userinfo = JSON.stringify(e.detail.userInfo);
    // console.log(userinfo)
    this.setData({
      userInfo: e.detail.userInfo,
      showAuth: false
    })
  },

  // 跳转订单页
  gotoOrder: function () {
    wx.navigateTo({
      url: '../order/order',
    })
  },

  // 跳转地址管理页
  gotoAddress: function () {
    wx.navigateTo({
      url: '../address/address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 必须在用户已经授权之后调用
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo,
                showAuth: false
              })
            }
          })
        }
      }
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