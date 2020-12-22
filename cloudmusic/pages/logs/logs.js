Page({
  data: {
    tabs: [
      {
        id: 0,
        name: "个性推荐",
        isActive: true,
      },
      {
        id: 1,
        name: "歌单",
        isActive: false,
      },
      {
        id: 2,
        name: "主播电台",
        isActive: false,
      },
      {
        id: 3,
        name: "排行榜",
        isActive: false,
      },
    ],
  },
  handleItemChange(e) {
    this.data.tabs.map((item) => {
      if (item.id == e.detail.index) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
    this.setData({
      tabs: this.data.tabs,
    });
  },
  onLoad: function () {},
  save() {
    //不管什么数据，最终都会调用toString()将数据转换成字符串存进去
    wx.setStorage({
      key: "userInfo",
      data: {name:"zhangsan",age:123},
    });
  },
});
