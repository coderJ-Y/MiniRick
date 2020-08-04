// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: null,
    CartList: [], //购物车列表
    changeCheck: [], //存放的id
    totalPrice: 0,
    checkAll: false, //全选
  },
  // 跳转支付页面
  gotoPay: function () {
    if (this.data.totalPrice <= 0) {
      return wx.showToast({
        title: '订单金额不能为0！',
        icon: 'none'
      })
    }
    wx.navigateTo({
      url: '../pay/pay',
    })
  },

  //跳转商品详情页面 
  gotoDetail: function () {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      imageSrc: app.globalData.imageSrc
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      CartList: [{
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
          theNum: "1"
        },
        {
          id: "03",
          icon: "http://img.llzj.vrdete.com/rick/jerryImg.png",
          name: 'RICK AND MORDT S03',
          title: '敬享瑞克和莫蒂第三季精彩剧情',
          price: "4500",
          specification: "送：JERRY等比大小公仔 *1",
          theNum: "1"
        },
        {
          id: "04",
          icon: "http://img.llzj.vrdete.com/rick/ruthImg.jpg",
          name: 'RICK AND MORDT S04',
          title: '敬享瑞克和莫蒂第四季精彩剧情',
          price: "3300",
          specification: "送：RUTH等比大小公仔 *1",
          theNum: "1"
        },
        {
          id: "05",
          icon: "http://img.llzj.vrdete.com/rick/summerImg.jpg",
          name: 'RICK AND MORDT S05',
          title: '敬享瑞克和莫蒂第五季精彩剧情',
          price: "3300",
          specification: "送：SUMMER等比大小公仔 *1",
          theNum: "1"
        },
      ]
    })

  },
  //改变单选框状态
  change: function(event) {
    let that = this;
    let id = event.currentTarget.dataset.id;
    // 获取当前选中id
    let index = that.data.changeCheck.indexOf(id);
    // 判断数组里是否有该值
    if (index >= 0) {
      that.data.changeCheck.splice(index, 1);
      that.setData({
        changeCheck: that.data.changeCheck,
        checkAll: false
      });
    } else {
      that.data.changeCheck.push(id);
      that.setData({
        changeCheck: that.data.changeCheck,
      });
      if (that.data.changeCheck.length == that.data.CartList.length) {
        that.setData({
          checkAll: true
        })
      }
    }
    this.getTotalPrice();
    console.log(that.data.changeCheck)
  },

  // //改变全选框状态
  chooseAll: function() {
    let that = this;
    if (that.data.checkAll) {
      // 如果现在是全选，取反并清空存放的id
      that.setData({
        checkAll: false,
        changeCheck: [] //清空存放的id
      })

    } else {
      that.setData({
        checkAll: true,
        changeCheck: [] //清空存放的id
      });
      that.data.CartList.forEach(item => {
        that.data.changeCheck.push(item.id);
        that.setData({
          changeCheck: that.data.changeCheck
        })
      });
    }
    this.getTotalPrice();
    console.log(that.data.changeCheck)
  },


  // 商品数量减一
  minusCount: function(event) {
    const item = event.currentTarget.dataset.item;
    const index = event.currentTarget.dataset.index;
    console.log(event.currentTarget.dataset)
    let carts = this.data.CartList;
    let theNum = parseInt(item.theNum);
    // 判断
    if (theNum <= 1) {

    } else {
      theNum = theNum - 1;
    }
    carts[index].theNum = theNum;
    this.setData({
      CartList: carts
    });
    this.getTotalPrice();
  },


  // 商品数量加一
  addCount: function(event) {
    const item = event.currentTarget.dataset.item;
    const index = event.currentTarget.dataset.index;
    console.log(event.currentTarget.dataset)
    let carts = this.data.CartList;
    let theNum = parseInt(item.theNum) + 1;

    if (theNum > 5) {

    } else {
      carts[index].theNum = theNum;
    }
    this.setData({
      CartList: carts
    });
    this.getTotalPrice();
  },

  // 计算全部选中价格
  getTotalPrice() {
    let that = this;
    let total = 0;
    that.data.CartList.forEach(item => {
      if (that.data.changeCheck.indexOf(item.id) >= 0) {
        total += item.price * item.theNum
      }
    })
    that.setData({
      totalPrice: total
    })
    console.log(that.data.totalPrice)
  },

  // 删除商品
  onDel: function(event) {
    // debugger
    let that = this;
    let id = event.currentTarget.dataset.id;
    let cart = that.data.CartList.findIndex(function(item){ return item.id === id})
    // let index = that.data.changeCheck.indexOf(id);
    that.data.CartList.splice(cart, 1);
    that.setData({
      CartList: that.data.CartList
    });
    // if (cart >= 0) {
    //   that.data.CartList.splice(cart, 1);
    //   that.setData({
    //     CartList: that.data.CartList
    //   });
    // }
    // console.log(id);
    // console.log(cart);
    this.getTotalPrice();
    console.log(that.data.CartList)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})