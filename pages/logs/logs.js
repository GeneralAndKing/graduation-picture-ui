//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    value6: "",
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  myInput: function(event) {
    this.setData({
      myData: event.detail.detail.value6
    })
  }
})
