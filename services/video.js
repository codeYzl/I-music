import { yzlRequest } from "./index"

export function getTopMV(offset = 0, limit = 20) {
  return yzlRequest.get({
    url: "/top/mv",
    data: {
      limit,
      offset
    }
  })
}

export function getMVUrl(id) {
  return yzlRequest.get({
    url: "/mv/url",
    data: {
      id
    }
  })
}

export function getMVInfo(mvid) {
  return yzlRequest.get({
    url: "/mv/detail",
    data: {
      mvid
    }
  })
}

export function getMVRelated(id) {
  return yzlRequest.get({
    url: "/related/allvideo",
    data: {
      id
    }
  })
}
