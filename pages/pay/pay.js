// pages/pay/pay.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: {},
    typeArr: ['面对面交易', '快递发货'], 
    buy_mode: '',  //购买方式，0为面对面，1为快递发货
    region: '',
    userName: '',
    phone: '',
    address: '',
    price: '33'
  },
  //inputFun
  inputFun: function (e) {
    var value = e.detail.value;
    var type = e.currentTarget.dataset.type
    // console.log(value)
    // console.log(type)
    this.setData({
      [type]: value
    })
  },
  // 选择购买方式
  bindPickerChange: function (e) {
    this.setData({
      buy_mode: e.detail.value
    })
  },
  // 选择收件地址
  bindPickerRegion: function (e) {
    console.log(e.detail.value)
    this.setData({
      region: e.detail.value[0]+' '+e.detail.value[1]+' '+e.detail.value[2]
    })
  },
  // 支付
  buyFun: function () {
    if (this.data.buy_mode == '') {
      wx.showToast({
        title: '请选择购买方式',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if (this.data.buy_mode == 1 && this.data.userName == '') {
      wx.showToast({
        title: '姓名不能为空！',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if (this.data.buy_mode == 1 && this.data.phone == '') {
      wx.showToast({
        title: '手机号码不能为空！',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if (this.data.buy_mode == 1 && this.data.address == '') {
      wx.showToast({
        title: '请选择地区！',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if (this.data.buy_mode == 1 && this.data.userName == '') {
      wx.showToast({
        title: '请输入详细地址！',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    var that = this;
    wx.showModal({
      title: '',
      content: '是否确定支付'+that.data.price+'元',
      success(res) {
        wx.showModal({
          title: '支付成功',
          success (res) {
            wx.showLoading({
              title: '购买成功，返回',
            })
            setTimeout(() => {
              wx.switchTab({
                url: '../cart/cart',
              })
            }, 2000);
          }
        });
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let that = this;
    that.setData({
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
    // this.setData({
    //   goodDetail: [
    //     {
    //       id: "001",
    //       title: "RICK AND MORDY S01",
    //       price: "33"
    //     }
    //   ]
    // })
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