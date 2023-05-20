import {getSongMenuList,getsongMenuTag} from '../../services/music'
Page({
  data:{
    menuList:[]
  },
  onLoad(){
    this.fetchMenuList()
  },
  async fetchMenuList(){
    const tagRs = await getsongMenuTag()
    const tags =  tagRs.tags
    const allpromise = []
    for(const tag of tags){
        const promise = getSongMenuList(tag.name)
        allpromise.push(promise)
      }
    Promise.all(allpromise).then(res=>{
      this.setData({menuList: res})
     // console.log(res)
    })
  }
})