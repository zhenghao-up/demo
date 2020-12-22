// pages/demo2/demo2.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   * options 可以获取到页面载入时的参数信息
   */
  onLoad: function (options) {
    console.log(options);
    //获取事件频道
    const eventChannel = this.getOpenerEventChannel();
    //通过事件频道收取上一个页面传递的数据
    eventChannel.on("acceptDataFromOpenerPage", function (data) {
      console.log(data);
    });
  },
  onHide: function () {
    console.log("onHide");
  },
  onUnload: function () {
    console.log("onUnload");
    //获取事件频道
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit("someEvent", { name: "xiaoming" });
  },
});
