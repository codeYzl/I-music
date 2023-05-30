// app.js
App({
  globalData:{
    screenWidth:375,
    screenHeight:667,
    statusScreen :20,
    contentHeight:500
    },
    onLaunch(){
        wx.getSystemInfo({
            success:(res=>{
                this.globalData.statusScreen = res.statusBarHeight
                this.globalData.contentHeight = res.screenHeight - res.statusBarHeight - 44
            })
        })

        wx.cloud.init({
            env: "cloud1-1gbbqbald4bd85c5"
        })
       
    }
})
