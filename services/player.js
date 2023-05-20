import {Musicrequest} from "./index"
export function getSongDetail(ids){
    return Musicrequest.get({
        url: "/song/detail",
        data:{
            ids
        }
    })
}

export function getSongLyric(id){
    return Musicrequest.get({
        url: "/lyric",
        data: {
            id
        }
    })
}