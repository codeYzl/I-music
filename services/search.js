import {yzlRequest} from './index'

export function getHotSearch() {
  return yzlRequest.get({
     url: "/search/hot",
     data: {
         
     }
  })
}

export function getSuggestSearch(keywords) {
  return yzlRequest.get({
        url: "/search/suggest",
        data: {
            keywords
        }
    }
  )
}

export function getSearchResult(keywords) {
    return yzlRequest.get({
        url: "/search",
        data: {
            keywords
        }
    }
  )
}