// pages/music-player/music-player.js
import { getsongMenuTag } from "../../services/music"
import {getSongDetail,getSongLyric} from "../../services/player"
import {parseLyric} from "../../utils/parse-lyric"
import playerStore from "../../store/playerStore"
const audio = wx.createInnerAudioContext()
const app = getApp()
Page({
  data: {
    id: 0,
    currentSong:{},
    lyricInfos: {},
    statusBarHeight:20,
    currentPage: 0,
    contentHeight: 500,
    currentTime:0,
    durationTime:0,
    sliderValue:0,
    isplay: true,
    currentLyricText: "",
    currentIndex: 0 ,
    lyricScrollTop: 0,
    playSongIndex: 0,
    playSongList: [],
    firstPlay: true,
    playMode: 0,
    ImgSrc: "play_order",
    playMode: 0
  },
    onLoad(options) {
        const id = options.id
        this.setupPlaySong(id)
        //计算屏幕高度
        const info = wx.getSystemInfoSync()
        const contentHeight = info.screenHeight - info.statusBarHeight - 44
        this.setData({ contentHeight })
        this.setData({statusBarHeight:info.statusBarHeight})
         // 获取store共享数据做上一首下一首的播放列表
        playerStore.onStates(["playSongList","playSongIndex"],this.getSongPlayList)
    },
    // ======================播放歌曲========================
    setupPlaySong(id){
        this.setData({id})
        //根据拿到的id获取歌曲的详情数据
        getSongDetail(id).then(res=>{
                this.setData({
                    currentSong : res.songs[0], //歌名和id信息
                    durationTime : res.songs[0].dt // 总时长获取
                })
        })
        //2. 请求歌词数据
        getSongLyric(id).then(res=>{
            this.setData({lyric: res.lrc})
            const lrcString = res.lrc.lyric
            const lyricInfos = parseLyric(lrcString) //将歌曲的字符串形式解析得到{text，time}
            this.setData({lyricInfos})
        })
         //播放当前歌曲
        audio.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
        audio.autoplay = true
        //第一次加载时启动监听
        if(this.data.firstPlay){
            this.data.firstPlay = false
            //监听播放进度条
            audio.onTimeUpdate(()=>{   
                // 记录当前时间
                this.setData({currentTime: audio.currentTime *1000})
                const sliderValue = this.data.currentTime / this.data.durationTime*100 //进度条计算
                this.setData({sliderValue: sliderValue})
                if(!this.data.lyricInfos.length) return
                // 定位歌词位置

                let index = this.data.lyricInfos.length - 1;          
                for(let i = 0;i < this.data.lyricInfos.length;i++){
                    const info = this.data.lyricInfos[i]
                    if(info.time > audio.currentTime * 1000){
                        index = i - 1
                        break;
                    }
                }
                if(index === this.data.currentIndex) return
                const currentLyricText = this.data.lyricInfos[index].text
                this.setData({currentLyricText,currentIndex: index,lyricScrollTop: 35 * index})
                audio.onWaiting(()=>{
                    audio.pause()
                })
                audio.onCanplay(()=>{
                    audio.play()
                })
            }),
            //监听播放结束 自动播放下一首
            audio.onEnded(()=>{
                if(this.data.playMode === 0) this.onNextTap() //顺序播放自动切换下一首
                else if(this.data.playMode === 1)   this.onSingerPlay()// 单曲循环
                else this.onRandomPlay()
            })
        } 
    },
    // bindchange ：轮播图滑动时
    onSwiperChange(event){
        this.setData({currentPage: event.detail.current})
    },
    onSwichNav(event){
       const index = event.currentTarget.dataset.index
       this.setData({
           currentPage:index
       })
      // console.log(event);
     //  console.log(2);
    },
    onSliderChange(event){
       //得到点击的位置
       const now = event.detail.value
       //计算跳转的位置
       const currentTime = now / 100 * this.data.durationTime
       //设置进度条的时间
       audio.seek(currentTime /1000)
       this.setData({currentTime})
    },
    //切换播放模式
    onChangePlayMode(){
        // 0,1,2 表示顺序播放， 单曲循环， 随机播放
        let playMode = this.data.playMode
        let ImgSrc = ""
        if(playMode === 0){
            ImgSrc = "play_repeat"
            this.setData({ImgSrc})
           
        }else if(playMode === 1){
           ImgSrc = "play_random"
            this.setData({ImgSrc})
        }else{
            ImgSrc = "play_order"
            this.setData({ImgSrc})
        }
        playMode = (playMode  + 1)% 3
        this.setData({playMode})
        
    },
    onPause(){
       if(this.data.isplay){
            audio.pause()
            this.setData({isplay: false})
       } else{
           audio.play()
           this.setData({isplay: true})
       }
    },
    onPrevTap(){
        let index = this.data.playSongIndex
        const mod = this.data.playSongList.length
        index = ((index - 1) % mod + mod) % mod 
        const nextSong = this.data.playSongList[index]
        this.setupPlaySong(nextSong.id) 
        playerStore.setState("playSongIndex",index)
    },
    onNextTap(){
        let index = this.data.playSongIndex
        const length = this.data.playSongList.length
        index = (index + 1) % length 
        const nextSong = this.data.playSongList[index]
        this.setData({currentSong: {},sliderValue:0,currentTime: 0,durationTime: 0})
        console.log(index);
        this.setupPlaySong(nextSong.id)
        playerStore.setState("playSongIndex",index)
    },
    onSingerPlay(){
        let index = this.data.playSongIndex
        const length = this.data.playSongList.length
        const nextSong = this.data.playSongList[index]
        this.setData({currentSong: {},sliderValue:0,currentTime: 0,durationTime: 0})
        console.log(index);
        this.setupPlaySong(nextSong.id)
        playerStore.setState("playSongIndex",index)
    },
    onRandomPlay(){
        let index = this.data.playSongIndex
        const length = this.data.playSongList.length
        const nextSong = this.data.playSongList[index]
        this.setData({currentSong: {},sliderValue:0,currentTime: 0,durationTime: 0})
        console.log(index);
        this.setupPlaySong(nextSong.id)
    
        playerStore.setState("playSongIndex",index)
    },
    //======================== store共享数据获取========================
    getSongPlayList({playSongList,playSongIndex}){
     if(playSongList){
         this.setData({playSongList})
     }
     if(playSongIndex !== undefined){
         this.setData({playSongIndex})
     }
    },
    onUnload(){
        playerStore.offStates(["playSongList","playSongIndex"],this.getSongPlayList)
    }
})