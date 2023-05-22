import rankingStore from "../../store/rankingStore"
import recommendStore from "../../store/recommendStore"
import {getPlayListdetail} from '../../services/music'
import playerStore from "../../store/playerStore"
Page({
  data:{
    type:"ranking",
    key:"newRanking",
    songInfos:{

    },
    id: 0
  },
  onLoad(options){
    // 1.确定获取数据的多种类型
    //type: raking -> 榜单数据
    //type: recomm -> 推荐数据
    //type: menu -> 歌单数据
    const type = options.type
    // this.data.type = type
    this.setData({type})
    if(type === 'ranking'){
        const key = options.key
       // console.log(key);
        rankingStore.onState(key,this.handleranking)
    }else if(type=== 'recommend'){
        recommendStore.onState("recommendSongs",this.handleranking)
    }else if(this.data.type === "menu"){
        const id = options.id
        this.data.id = id
        this.fechMenuSong();

        
    }
    },
    async fechMenuSong(){
       const res = await getPlayListdetail(this.data.id)
      this.setData({songInfos: res.playlist})
    },
    handleranking(value){
        this.setData({songInfos : value})
        if(this.data.type="recommend") value.name="推荐歌曲"
        wx:wx.setNavigationBarTitle({
          title: value.name,
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    },
    onSongItemTap(){
        playerStore.setState("playSongList",this.data.songInfos.tracks)
    },
    onUnload(){
        if(this.data.type === "ranking"){
            rankingStore.offState(this.data.key,this.handleranking)
        }else if(this.data.type === "recommend"){
            recommendStore.offState("recommendSongs",this.handleranking)
        }
    }
})