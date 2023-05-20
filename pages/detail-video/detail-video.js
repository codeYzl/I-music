// pages/detail-video/detail-video.js
import {getMvURL,getMvInfo, getMvRelate} from "../../services/video"
Page({
  data:{
    id:0,
    mvUrl: "",
    mvInfo: {},
    mvrelate: {}
  },
  onLoad(options){
    const id = options.id
    this.setData({id})
    this.fectchMVurl()
    this.fetchMvInfo()
    this.fetchMvRelate()
  },
  async fectchMVurl(){
    const res = await getMvURL(this.data.id)
    this.setData({mvUrl: res.data.url})
  },
  async fetchMvInfo(){
    const res = await getMvInfo(this.data.id)
   this.setData({mvInfo: res.data})
  },
  async fetchMvRelate(){
    const res = await getMvRelate(this.data.id)
    this.setData({mvrelate: res.data})
  }
})