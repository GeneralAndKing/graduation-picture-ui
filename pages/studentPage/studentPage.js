// pages/studentPage/studentPage.js
import { $wuxKeyBoard } from '../../dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 弹出数字键盘输入相册码
  */
  mangerStudent: () => {
    $wuxKeyBoard().show({
      className: 'className',
      titleText: '安全键盘',
      cancelText: '取消',
      inputText: '输入相册码',
      showCancel: true,
      disorder: false,
      maxlength: 6,
      callback(value) {
          console.log('输入的值=' + value)
          wx.request({
            url: 'https://gak.com/test?value=' + value,
            success: function(res) {
              console.log(res)
              //跳转到选座位上传照片页面，附带全部座位信息、是否入座以及是否上传
              var data = res.data
              wx.navigateTo({
                url: `/pages/positionPhoto/positionPhoto?data=${data}`,
              })
            },
            fail: function(res) {
              console.log(res)
            }
          })
          return  true
      },
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