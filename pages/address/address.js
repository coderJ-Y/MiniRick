// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [], //地址列表
  },
  
  //跳转编辑地址页面
  goEditAddress: function () {
    wx.navigateTo({
      url: 'editAddress/editAddress',
    })
  },

  // 跳转添加地址页面
  goaddAddress: function () {
    wx.navigateTo({
      url: 'addAddress/addAddress',
    })
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
    this.setData({
      addressList: [
        {
          id:"0001",
          address: "深圳市RBW公司",
          info: "金容仙",
          tel: '182654'
        },
        {
          id:"0002",
          address: "深圳市CUBE公司",
          info: "文星伊",
          tel: '165255'
        },
        {
          id:"0003",
          address: "深圳市大黑公司",
          info: "丁辉人",
          tel: '120154'
        },
        {
          id:"0004",
          address: "深圳市SM公司",
          info: "华莎",
          tel: '185489'
        },
      ]
    })
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