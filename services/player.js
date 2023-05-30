import { yzlRequest } from "./index"

export function getSongDetail(ids) {
  return yzlRequest.get({
    url: "/song/detail",
    data: {
      ids
    }
  })
}

export function getSongLyric(id) {
  return yzlRequest.get({
    url: "/lyric",
    data: {
      id
    }
  })
}
