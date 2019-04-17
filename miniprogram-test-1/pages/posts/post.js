var postsData = require('../../data/posts-data.js')
var menuData = require('../../datas/menu-data.js')

Page({
  data: {
  },
  onLoad: function(options) {
    //相当于在页面初始化data里面设值
    this.setData({
      posts_key: postsData.postList,
      menu_list: menuData.menu_list
    });
  },

  onReady: function () {
    this.menu = this.selectComponent("#menu");
  },

  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log("onPostTap");
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  },

  handleMenu: function (event) {
    //这里的detail就是在自定义组件中定义的menuEventDetail
    var item = event.detail.item;
    Logger.v("item", item);
    wx.showToast({
      title: '新建' + item.name,
    })
  }
})