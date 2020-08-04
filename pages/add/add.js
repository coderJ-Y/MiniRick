// pages/add/add.js
// const uploadUrl = require('../../config').uploadUrl;
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    price: '',
    oldprice: '',
    phone: '',
    photos: [],
    imageSrc: null,
    typeArr: ['商战','搞笑','悬疑','奇幻'],
    cate_mode: '', // 剧集类别方式，0为商战，1为搞笑，2为悬疑，3为奇幻
  },
  bindPickerChange: function(e){
    this.setData({
      cate_mode: e.detail.value
    })
  },
  titleVal: function(e) {
    this.setData({
      title: e.detail.value
    })
  },
  contentVal: function(e) {
    this.setData({
      content: e.detail.value
    })
  },
  priceVal: function(e) {
    this.setData({
      price: e.detail.value
    })
  },
  oldpriceVal: function(e) {
    this.setData({
      oldprice: e.detail.value
    })
  },
  phoneVal: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },


  chooseImg: function () {
    var that = this;
    wx.chooseImage({
      count: 9,
      // sourceType: ['camera','album'],
      success: function (res) {
        if(that.data.photos.length>=9) {
          // 超过9张图
          wx.showToast({
            title: '最多可选9张图',
            icon: 'none',
            duration: 1000,
          })
        }else{
          // 没超过9张图
          var photosArr = that.data.photos;
          // 本地临时文件路径列表
          for(var i=0;i<=res.tempFilePaths.length;i++){
            wx.uploadFile({
              filePath: res.tempFilePaths[i],
              name: 'image',
              url: 'http://img.llzj.vrdete.com', //没有token
              success: function (res) {
                var data = JSON.parse(res.data);
                if(data.code>0){
                  photosArr.push(data.data);
                  that.setData({
                    photos: photosArr
                  })
                  console.log(that.data.photos);
                }else{
                  wx.showToast({
                    title: '上传图片异常',
                    icon: 'none',
                    duration: 2000
                  })
                  return false;
                }
              }
            })
          }
        }
      },
    })
  },

  // 发布按钮
  fabuBtn: function() {
    const that=this;
    if(that.data.title==""){
      wx.showToast({
        title: '请输入剧集名称',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if(that.data.content==""){
      wx.showToast({
        title: '请输剧集简介',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    // if (that.data.photos.length== 0) {
    //   wx.showToast({
    //     title: '请上传商品相关图片',
    //     icon: 'none',
    //     duration: 2000
    //   })
    //   return false;
    // }
    if (that.data.price == "") {
      wx.showToast({
        title: '请输入单价',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if (that.data.oldPrice == "") {
      wx.showToast({
        title: '请输入原价',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if(that.data.phone==""){
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if(that.data.typeArr==null){
      wx.showToast({
        title: '请选择类型',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    wx.showModal({
      // title: '平台只负责发布、展示，与平台本身无关，平台不负任何责任',
      content: '是否确定发布',
      success(res) {
        wx.showLoading({
          title: '正在发布中...',
          icon: 'loading',
          mask: true
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