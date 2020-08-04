// 数据接口

var host = "http://localhost/seller/api";
var imgHost = "http://localhost/seller/public";
var config = {
  host,
  imgHost,
  uploadUrl: `${host}/Login/upload`,  //上传图片
}

module.exports = config