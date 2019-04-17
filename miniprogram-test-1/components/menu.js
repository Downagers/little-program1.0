
Component({
  //组件暴露出去的属性
  properties: {
    //如果这里属性比较多的话，还可以将它们包裹成一个对象
    menu_list: Array,
  },

  //组件内部使用的属性
  data: {
    showMenu: true
  },

  attached: function () {
    this.setData({
      menu_list: this.data.menu_list
    })
  },
  methods: {
    // 点击新建按钮
    onCreateTap: function () {
      this.setData({
        showMenu: !this.data.showMenu
      })
    },
    // 点击展开的单个按钮
    onItemTap: function (event) {
      var item = event.currentTarget.dataset.item;
      // 微信小程序中是通过triggerEvent来给父组件传递信息的
      //triggerEvent：https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html
      var menuEventDetail = {
        item
      }
      this.triggerEvent('handleMenu', menuEventDetail)
      //menuEventOption是触发事件的选项，包括设置事件是否冒泡之类的，不过这里默认是不冒泡的
      // var menuEventOption = {
      //   
      // }
      // this.triggerEvent('handleMenu', menuEventDetail, menuEventOption)
    }
  }
})