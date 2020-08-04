// pages/orderdetail/orderdetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: null,
    list: 
    [
      {
        id: "01",
        icon: "http://img.llzj.vrdete.com/rick/rickImg.jpg",
        name: 'RICK AND MORDT S01',
        title: '敬享瑞克和莫蒂第一季精彩剧情，讲述RICK和MORDY的精彩外空冒险旅程。',
        price: "3300",
        specification: "送：RICK等比大小公仔 *1",
        theNum: "1"
      },
      {
        id: "02",
        icon: "http://img.llzj.vrdete.com/rick/mordyImg.jpg",
        name: 'RICK AND MORDT S02',
        title: '敬享瑞克和莫蒂第二季精彩剧情',
        price: "4300",
        specification: "送：MORDY等比大小公仔 *1",
        theNum: "3"
      },
      {
        id: "03",
        icon: "http://img.llzj.vrdete.com/rick/jerryImg.png",
        name: 'RICK AND MORDT S03',
        title: '敬享瑞克和莫蒂第三季精彩剧情',
        price: "4500",
        specification: "送：JERRY等比大小公仔 *1",
        theNum: "2"
      },
    ],
    price: '252'
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