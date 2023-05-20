import {HYEventStore} from "hy-event-store"
import {getPlayListdetail} from "../services/music"
const rankIds = {
  newRanking: 3779629,
  originRanking: 3778678,//热歌榜
  upRanking: 19723756
}
const rankStore = new HYEventStore({
  state:{
    newRanking:{},
    originRanking: {},
    upRanking:{}
  },
  actions: {
    getRankingData(ctx){
      for(const key in rankIds){
        const id = rankIds[key]
        getPlayListdetail(id).then(res => {
          ctx[key] = res.playlist
        })
      }
    }
  }
})

export default rankStore