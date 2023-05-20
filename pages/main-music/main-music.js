import {getMusicbanner,getSongMenuList} from "../../services/music"
import {getPlayListdetail} from "../../services/music"
import recommendStore from "../../store/recommendStore"
import rankStore from "../../store/rankingStore"
Page({
  data:{
    searchValue:"",
    banners:[],
    swiperimage: 130,
    recommendSongs: [],
    //歌单数据
    hotmenuList:[],
    recommendMenu:[],
    //巅峰榜数据
    rankingInfos:{

    }
  },
  //界面的事件监听
  onclickSearch(){
    wx.navigateTo({
      url: '/pages/detail-search/detail-search',
    })
  },
  onLoad(){
    this.fetchbanner()
    this.fetchSongMenuList()
    //发起action
    recommendStore.onState("recommendSongs",this.handleRecommendSongs)
    recommendStore.dispatch("fetchRecommendSongs",this.handleNewRanking)
    rankStore.onState("newRanking",this.handleNewRanking)
    rankStore.onState("originRanking",this.handleOriginRanking)
    rankStore.onState("upRanking",this.handleUpRanking)
    rankStore.dispatch("getRankingData")
  },
  async fetchbanner(){
       const res = await getMusicbanner()
       this.setData({
         banners: res.banners
       })
  },
  onimageload(){
    //获取组件中的支持的图片高度
    const query = wx.createSelectorQuery();
    //拿到矩形框
    query.select(".banner-image").boundingClientRect
    query.exec((res)=>{
      this.setData({swiperimage: res[0].height})
    })
  },
  onRecommendClick(){
   wx.navigateTo({
     url: '/pages/detail-song/detail-song?type=recommend',
   })
  },
  async fetchSongMenuList(){
     getSongMenuList().then(res=>{
        this.setData({hotmenuList: res.playlists})
     })
     getSongMenuList("华语").then(res=>{
       this.setData({recommendMenu:res.playlists})
     })
  },
  //从store中获取数据
  handleRecommendSongs(value){
    if(!value.tracks) return
      this.setData({recommendSongs : value.tracks.slice(0,6)})
  },
  handleNewRanking(value){
    const newRankingInfos = {...this.data.rankingInfos,newRanking:value}
    this.setData({rankingInfos:newRankingInfos})
  },
  handleOriginRanking(value){
    const newRankingInfos = {...this.data.rankingInfos,originRanking:value}
    this.setData({rankingInfos:newRankingInfos})
  },
  handleUpRanking(value){
    const newRankingInfos = {...this.data.rankingInfos,upRanking:value}
    this.setData({rankingInfos:newRankingInfos})
  },
  onunload(){
    recommendStore.offState("recommendSongs",this.handleRecommendSongs)
  }
})
