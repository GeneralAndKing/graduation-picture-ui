//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //角色选择后跳转页面
  roleSelection: function() {
    this.setData({
      motto: "选择了班长"
    })
    wx.navigateTo({
      url: '../logs/logs?data=' + this.data.motto
    })
  },
  //测试
  test: function() {
    this.setData({
      motto: "选择了成员"
    })
    wx.request({
      url: 'https://xxx.com/user/delete',
      success:function(res){
        console.log('https://xxx.com/user/delete',res);
      }
    })
    wx.navigateTo({
      url: '../logs/logs?data=' + this.data.motto
    })
  },
  //以下是自带的请求头像和用户名的函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
