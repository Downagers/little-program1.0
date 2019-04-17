var postsData = require('../../data/posts-data.js')

Page({
  data: {
  },
  onLoad: function (options) {
    //相当于在页面初始化data里面设值
    this.setData({
      posts_key: postsData.postList
    });
  },

  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log("onPostTap");
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  }
})