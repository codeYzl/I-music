// pages/main-video/main-video.js
import {getTopMV} from "../../services/video"
Page({
  data:{
    //视频列表数组
    videoList:[],
    offset: 0,
    hasMore: true    
  },

  onLoad(){
    //发送网络请求
    this.fecthTopMV();
  },
  //发送网络请求的仿佛
  async fecthTopMV(){
    // getTopMV().then(res =>{
    //   this.setData({videoList: res.data})
    // })
    const res = await  getTopMV(this.data.offset)
    const newVideoList = [...this.data.videoList,...res.data]
    this.setData({videoList:newVideoList})
    this.data.offset = this.data.videoList.length
    this.data.hasMore = res.hasMore
    
  },
  onReachBottom(){
    if(!this.data.hasMore) return
    this.fecthTopMV()
  },
 async onPullDownRefresh(){
    this.setData({videoList : []})
    this.data.offset = 0
    this.hasMore=true
    await this.fecthTopMV()
    wx.stopPullDownRefresh()
  },
  //------------------界面事件监听--------------------------
  onVideoitemTap(event){
    const item = event.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/detail-video/detail-video?id=${item.id}`,
    })
  }
})