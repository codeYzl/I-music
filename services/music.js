import {Musicrequest} from "./index"

export function getMusicbanner(type = 0) {//默认type=0 PC端
  return Musicrequest.get(
    {
      url: '/banner',
      data:{
        type
      }
    }
  )
}
export function getPlayListdetail(id) {
    return Musicrequest.get({
      url:"/playlist/detail",
      data:{
        id
      }
    })
}
export function getSongMenuList(cat="全部",limit=6,offset=6){
  return Musicrequest.get({
      url:'/top/playlist',
      data:{
        cat,
        limit,
        offset
      }
  })
}
export function getsongMenuTag() {
  return Musicrequest.get({
    url: '/playlist/hot'
  })  
}