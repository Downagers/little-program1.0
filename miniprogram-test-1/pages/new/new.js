Page({
  /**
  * 页面的初始数据
  */
  data: {
    releaseFocus: false,
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {

  },
  /**
  * 点击回复
  */
  bindReply: function (e) {
    this.setData({
      releaseFocus: true
    })
  }
})