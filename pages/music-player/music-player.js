// pages/music-player/music-player.js
import { getsongMenuTag } from "../../services/music"
import {getSongDetail,getSongLyric} from "../../services/player"
Page({
  data: {
    id: 0,
    currentSong:{},
    lyric:"",
    statusHeight:20,
    currentPage: 0,
    contentHeight: 500

  },
  onLoad(options) {
    const id = options.id
    
    this.setData({id})
    //根据拿到的id获取歌曲的详情数据
    getSongDetail(id).then(res=>{
            this.setData({currentSong : res.songs[0]})
    })

    getSongLyric(id).then(res=>{
        this.setData({lyric: res.lrc})
    })
    const info = wx.getSystemInfoSync()
    const contentHeight = info.screenHeight - info.statusBarHeight - 44
    this.setData({ contentHeight })
     
     },
   onSwiperChange(event){
        this.setData({currentPage: event.detail.current})
      // console.log(event);

   },
   onSwichNav(event){
       const index = event.currentTarget.dataset.index
       this.setData({
           currentPage:index
       })
      // console.log(event);
     //  console.log(2);
   }
})