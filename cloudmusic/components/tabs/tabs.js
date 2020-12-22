Component({
  /**
   * 父组件传递的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: [],
    },
  },

  /**
   * 组件的自己的初始数据
   */
  data: {
    numberA: 1,
    numberB: 2,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hanldeItemTap(e) {
      this.triggerEvent("ItemChange", { index: e.currentTarget.dataset.index });
    },
  },
  //组件的生命周期
  lifetimes: {
    created: function () {
      //在组件实例刚刚被创建时执行
      console.log("created");
    },
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log("attached");
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log("detached");
    },
  },
  //observers 监听组件数据的变化(包括组件自身的数据已经父亲传递的数据)
  observers: {
    "numberA, numberB": function (numberA, numberB) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
    },
    /*监听所有数据的变化*/
    "**": function () {
      // 每次 setData 都触发
    },
    "tabs":function(t){
      console.log(t,"xxxxxxxxxxxxxxxx")
    }
  },
});
