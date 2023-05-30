// pages/main-profile/main-pofile.js
Page({
    data:{
        userInfo:{},
        islogin: false,
        tabs:[

            {name:"我的收藏",type:"fav"},
            {name:"我的喜欢",type:"like"},
            {name:"历史记录",type:"history"}
        ]
    },
    onLoad(){
        const openid = wx.getStorageSync('openid')
        const userInfo = wx.getStorageInfoSync('userinfo')
        this.setData({islogin: !!openid})
        if(this.data.islogin){
            this.setData({userInfo})
        }
    },
    // ==================用户登录=======================
     async onUserLogin(){
         const res = await wx.getUserProfile({
            desc: "获取您的头像和昵称",
          
        })
        this.setData({userInfo: res.userInfo})
        /// 获取openid
        const info = await wx.cloud.callFunction({
            name:"login"
        });
        
        const openid = info.result.openid
       // console.log(info);
        // //缓存到本地
        wx.setStorageSync('openid', openid)
        wx.setStorageSync('userinfo', this.data.userInfo)
        this.setData({islogin:true})
       
    }

})