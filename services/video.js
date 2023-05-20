import {Musicrequest} from "./index"
//默认参数 offset 0 limit
export function getTopMV( offset = 0,limit = 20) {
    return Musicrequest.get({
      url: "/top/mv",
      data:{
        limit,
        offset
      }
    })
}
export function getMvURL(id){
  return   Musicrequest.get({
    url:"/mv/url",
    data:{
      id
    }
  })
}
export function getMvInfo(mvid) {
  return Musicrequest.get({
    url: "/mv/detail",
    data:{
      mvid
    }
  })
}
export function getMvRelate(id) {
  return Musicrequest.get({
    url: "/related/allvideo",
    data:{id}
  })
}