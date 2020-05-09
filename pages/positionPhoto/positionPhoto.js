// pages/positionPhoto/positionPhoto.js
import { $wuxToast } from '../../dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //传过来的座位数据
    data: "",
    //已选
    selectedArray: [2, 3, 4],
    //人数
    num: 100,
    //行数co
    col: 10,
    //已选的图标
    isIco: "ios-apps",
    //未选的图标
    notIco: "logo-github",
    //全部的图标类型
    typeArray: []
  },

  /**
   * 选择上传照片位置
   * @param {} e 
   */
  selected: function (e) {
    //获取当前选择位置下标
    const index = e.target.dataset.id
    //判定位置是否可选
    for (var j in this.data.selectedArray) {
      if (parseInt(index) == parseInt(this.data.selectedArray[j])) {
        //弹出提示位置被坐
        this.showToastErr()
        return
      }
    }
    console.log(index)
    //初始化全部位置
    var newTypeArray = this.initIco()
    //给选中位置赋值
    newTypeArray[index].name = this.data.isIco
    this.setData({
      typeArray: newTypeArray
    })
  },

  /**
   * 弹出提示信息
   */
  showToastErr() {
    $wuxToast().show({
        type: 'forbidden',
        duration: 1500,
        color: '#fff',
        text: '当前位置被别人占领啦！',
        success: () => console.log('禁止操作')
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始图标值
    var old = this.initIco()
    this.setData({
      data: options.data,
      typeArray: old
    })
    console.log("lastData = " + this.data.data)
    console.log("array=" + this.data.typeArray.length)
  },

  /**
   * 初始图标值 （即已经选中的位置和未选中位置）
   */
  initIco: function () {
    var old = [];
    for (var i = 0; i < this.data.num; i++) {
      var eq = false
      for (var j in this.data.selectedArray) { 
        let index = this.data.selectedArray[j];
        if (parseInt(i) == parseInt(index)) {
          eq = true
          break
        }
      }
      if (eq) {
        old.push({name: this.data.isIco});
      } else {
        old.push({name: this.data.notIco});
      }
    }
    return old
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