// pages/albumCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: "",
    have: false
  },
  inputCode: function (e) {
    this.setData({
      code: e.detail.value
    })
    console.log(e.detail.value)
  },
  mangerAlbum: function () {
    if (this.data.have) {
      // 管理相册界面
      if (this.data.code != "") {
        console.log(this.data.code)
        wx.navigateTo({
          url: '../mangerAlbum/mangerAlbum?code=' + this.data.code
        })
      } else {
        // 隐藏
        this.setData({
          have: false
        })
      }
    } else {
      // 显示
      this.setData({
        have: true
      })
    }
  },
  createAlbum: function () {
    this.setData({
      have: false
    })
    wx.navigateTo({
      url: '../createAlbum/createAlbum'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})