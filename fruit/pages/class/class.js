// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  list:[],
  list1:[],
  clas1:'',
  cid:'',
  list3:[],
  state:-1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  var clas1 = this.data.clas1;
     var cid = this.data.cid;
    
  },
  show:function(e){
    this.setData({
      list3:''
    })
   var cid=e.target.dataset.id
  },
  change:function(e){
    //console.log(e.currentTarget.dataset.key)
   this.setData({
     state:e.currentTarget.dataset.key,
   })
  },
  detail: function (e) {
    var id = e.target.dataset.id;
    //console.log(id)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },
  detailt: function (e) {
    var did = e.target.dataset.id;
    //console.log(did)
   wx.navigateTo({
       url: '/pages/detail/detail?id=' + did,
    })
  },
  search:function(){
    //console.log(44)
   wx.navigateTo({
     url: '/pages/search/search',
   })
  }
})