//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
  hotLists:[
    {
      img_url:"../images/hotLists/product1.jpg",
      sid:"product1",
      sname:"金枕榴莲",
      price: "128.88"
    },
    {
      img_url: "../images/hotLists/product2.jpg",
      sid: "product2",
      sname: "脐橙",
      price: "78.88"
    },
  ],
  seasonalLists:[],
  clas:1,
  cla:2,
  zannum: 66,
  img_url: "../tabs/zan_01.png"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    debugger
    console.log(this.data.hotLists);
  },
  detail: function (e) {
   var id=e.target.dataset.id;
   console.log(id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
  zan: function () {
    var n = this.data.zannum + 1
    var url = "../tabs/zan_02.png"

    this.setData({
      zannum: n,
      img_url: url
    })

  },
})
