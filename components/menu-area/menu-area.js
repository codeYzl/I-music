// components/menu-area/menu-area.js
Component({
  properties: {
    title:{
      type:"String",
      value:"默认歌单"
    },
    menuList:{
      type: Array,
      value: []
    }
  },
  data: {

  },
  methods: {
    onmore(){
      wx.navigateTo({
        url: '/pages/detail-menu/detail-menu',
      })
    }
  }
})
