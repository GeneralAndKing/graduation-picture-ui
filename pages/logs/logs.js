//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    lastData: "",
    value6: "",
    logs: []
  },
  onLoad: function (option) {
    this.setData({
      lastData: option.data,
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    console.log("上个页面数据：" + this.data.lastData)
  },
  myInput: function(event) {
    this.setData({
      value6: event.detail.detail.value
    })
  },
  sure: function() {
    console.log("当前输入的相册码是=" + this.data.value6)
  }
})
