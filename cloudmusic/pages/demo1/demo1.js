// pages/demo1/demo1.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  //跳转demo2
  goDemo2() {
    wx.navigateTo({
      url: "/pages/demo2/demo2?id=1",
      //跳转页面成功的时候触发
      success: function (res) {
        //通过eventChannel向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
      },
      //用于接收被打开页面向当前页面传递的数据
      events: {
        someEvent: function (data) {
          console.log(data);
        }
      },
    });
  },
});
