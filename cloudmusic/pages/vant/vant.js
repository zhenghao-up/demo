// pages/vant/vant.js
Page({
  data: {
    show: false,
  },
  onLoad: function (options) {

  },
  showPopup() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  getData(){
    wx.getStorage({
      key: "userInfo",
      success:function(res){
        console.log(res)
      }
    });
  }
})