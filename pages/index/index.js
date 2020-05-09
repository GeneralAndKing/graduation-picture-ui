//index.js
//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 班长入口
   */
  master: function () {
    wx.navigateTo({
      url: '../albumCode/albumCode'
    })
  },

  /**
   * 学生入口
   */
  student: function () {
    wx.navigateTo({
      url: '../studentPage/studentPage'
    })
  },
  // 学生入口
  login: () => {
    wx.login({
      success: res => {
        wx.setClipboardData({
          data: res.code,
          success: () => {
            wx.showToast({
              title: 'code 已经复制到剪贴板', // 标题
              icon: 'none', // 图标类型，默认success
              duration: 3000 // 提示窗停留时间，默认1500ms
            })
          }
        })
      }
    })
  },
  //以下是自带的请求头像和用户名的函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 获取微信用户信息
   */
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})