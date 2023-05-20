import {HYEventStore} from "hy-event-store"
import {getPlayListdetail} from "../services/music"
const recommendStore = new HYEventStore({
    state: {
        recommendSongs:{}
    },
    actions:{
      fetchRecommendSongs(ctx){
        getPlayListdetail(3778678).then(res=>{
            ctx.recommendSongs = res.playlist
        })
      }
    }
  }
)
export default recommendStore
