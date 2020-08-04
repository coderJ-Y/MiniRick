//index.js

//获取应用实例
const app = getApp()

Page({
  data: {
    imageSrc: {},
    swiperImg: [
      { url: '../../rick/rick7.jpg'},
      { url: '../../rick/rick6.png'},
      { url: '../../rick/rick3.jpg'},
      { url: '../../rick/rick4.png'},
      { url: '../../rick/rick5.jpg'},
      { url: '../../rick/rick1.jpg'},
    ],
    showImg: [
      {url: '../../rick/a.jpg'},
      {url: '../../rick/b.jpg'},
      {url: '../../rick/c.jpg'},
      {url: '../../rick/d.jpg'},
      {url: '../../rick/e.jpg'},
    ]
  },
  onLoad: function () {
    let that = this;
    that.setData({
      imageSrc: app.globalData.imageSrc,
      
    })
  },
  gotoDetail: function () {
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})
