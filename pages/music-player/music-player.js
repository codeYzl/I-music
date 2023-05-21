// pages/music-player/music-player.js
import { getsongMenuTag } from "../../services/music"
import {getSongDetail,getSongLyric} from "../../services/player"

const audio = wx.createInnerAudioContext()
const app = getApp()
Page({
  data: {
    id: 0,
    currentSong:{},
    lyric:"",
    statusHeight:20,
    currentPage: 0,
    contentHeight: 500,
    currentTime:0,
    durationTime:0,
    sliderValue:0
  },
  onLoad(options) {
        const id = options.id
        
        this.setData({id})
        //根据拿到的id获取歌曲的详情数据
        getSongDetail(id).then(res=>{
                this.setData({
                    currentSong : res.songs[0],
                    durationTime : res.songs[0].dt
                })
        })
        //2. 请求歌词数据
        getSongLyric(id).then(res=>{
            this.setData({lyric: res.lrc})
        })
        //播放当前歌曲
        audio.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
        audio.autoplay = true
        
        //监听播放进度条
        audio.onTimeUpdate(()=>{   
            //1.记录当前时间
            this.setData({currentTime: audio.currentTime *1000})
            const sliderValue = this.data.currentTime / this.data.durationTime*100 //进度条计算
            this.setData({sliderValue: sliderValue})
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