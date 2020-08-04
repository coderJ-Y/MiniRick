// pages/order/order.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: {},
    stateList: 
    [
      {name: "全部", payState: "", deliverState: ""},
      {name: "待支付", payState: "", deliverState: ""},
      {name: "已付款", payState: "", deliverState: ""},
      {name: "配送中", payState: "", deliverState: ""},
      {name: "退款", payState: "", deliverState: ""},
    ],
    default: "全部",
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

  // 跳转订单详情
  goOrderDetail: function () {
    wx.navigateTo({
      url: '../orderdetail/orderdetail',
    })
  },
  //支付
  buyFun: function () {
    var that = this;
    wx.showModal({
      title: '',
      content: '是否确定支付'+that.data.price+'元',
      success(res) {
        wx.showModal({
          title: '支付成功'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      imageSrc: app.globalData.imageSrc
    })
  },
  //header选择
  selected: function (event) {
    this.setData({
      default: event.currentTarget.dataset.name
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