// components/song-item-v2/song-item-v2.js
const db = wx.cloud.database()
const favor = db.collection("t_favor")
const like = db.collection("t_like")
Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    },
    index: {
      type: Number,
      value: -1
    }
  },
  methods: {
    onSongItemTap() {
      const id = this.properties.itemData.id
      wx.navigateTo({
        url: `../../packagePlayer/pages/music-player/music-player?id=${id}`,
      })
    },
    onOptionTap(){
        wx.showActionSheet({
          itemList: ["收藏","喜欢"],
          success: (res) =>{
              const index = res.tapIndex
              this.handleOption(index)
          }
        })
    },
    async handleOption(index){
        let res = null
        switch(index){
            case 0: //收藏功能
                res = await favor.add({
                    data: this.properties.itemData
                })
                break
            case 1: //喜欢功能
                res = await like.add({
                    data: this.properties.itemData
                })
                break
        }
        if(res){
            const title = index === 0 ? '收藏' : '喜欢'
            wx.showToast({
              title: `${title}成功`,
            })
        }
    }
  }
})
