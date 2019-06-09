//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
  imgUrls: [
    { id: "1", img:'../images/swiper_bg1.jpg',link:""},
    { id: "2", img: '../images/swiper_bg2.jpg', link: "" },
    { id: "3", img: '../images/swiper_bg3.jpg', link: "" },
  ],
  indicatorDots: false,
  autoplay: true,
  interval: 2000,
  duration: 1000,
  toptitle: '本周上榜菜谱',
  hotLists:[
    {
      img_url:"../images/hotLists/product1.jpg",
      sid:"product1",
      sname:"泰国金枕榴莲",
      price: "128.88"
    },
    {
      img_url: "../images/hotLists/product2.jpg",
      sid: "product2",
      sname: "新奇士脐橙",
      price: "78.88"
    },
    {
      img_url: "../images/hotLists/product3.jpg",
      sid: "product3",
      sname: "进口特级火龙果",
      price: "68.88"
    },
    {
      img_url: "../images/hotLists/product4.jpg",
      sid: "product4",
      sname: "菲律宾美人蕉",
      price: "59.88"
    }
  ],
  seasonalLists:[
    {
      img_url: "../images/hotLists/product1.jpg",
      sid: "product1",
      sname: "泰国金枕榴莲",
      price: "128.88"
    },
    {
      img_url: "../images/hotLists/product2.jpg",
      sid: "product2",
      sname: "脐橙",
      price: "78.88"
    },
  ],
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
