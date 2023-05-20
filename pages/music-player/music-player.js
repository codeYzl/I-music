// pages/music-player/music-player.js
import { getsongMenuTag } from "../../services/music"
import {getSongDetail,getSongLyric} from "../../services/player"
Page({
  data: {
    id: 0,
    currentSong:{},
    lyric:"",
    statusHeight:20
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
    
   }
})