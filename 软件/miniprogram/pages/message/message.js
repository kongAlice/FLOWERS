// 关键功能是数据库读写
Page({

  data: {
    tijiao:true,
    contents: "",
    name:0,
    xuehao:0,
    num: 1,
    numa: 1,
    numb: 1,
    numc: 1,
    numd: 1,
    modalHidden:true,
    modalHidden2:true,
    modalHidden3: true,
    aodalHidden: true,
    aodalHidden2: true,
    aodalHidden3: true,
    bodalHidden: true,
    bodalHidden2: true,
    bodalHidden3: true,
    codalHidden: true,
    codalHidden2: true,
    codalHidden3: true,
    dodalHidden: true,
    dodalHidden2: true,
    dodalHidden3: true,
  },
  //以下一部分是提示框实现，有重复部分实现多个按钮
 tijiao:function()
 {
   this.setData({
     tijiao: false
   })
 },
  back: function () {
    this.setData({
      tijiao: true
    })
  },
  inputname:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  inputnum: function (e) {
    this.setData({
      xuehao: e.detail.value
    })
  }
})