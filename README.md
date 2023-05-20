# i-music 小程序

###  文件树结构

+---assets    -------------------------------静态资源
|   +---icons -------图标
|   +---music ------ 音乐图片
|   +---player 
|   \---tabbar
+---components ----------------------------组件
|   +---menu-area 
|   +---menu-item
|   +---ranking-item --------排名组件
|   +---section-header
|   +---song-item 
|   \---video-item --------MV组件
+---miniprogram_npm ------------------npm依赖
+---node_modules---------------npm模块
+---pages-----------------------------------页面
|   +---detail-menu  ------ 音乐详情页
|   +---detail-search ------ 音乐搜索页
|   +---detail-song  -------- 音乐详情页
|   +---detail-video -------- mv详情页
|   +---main-music --------- 音乐首页
|   \---main-video ------------视频首页
+---services 封装的功能函数
+---store -------- 共享数据库
\---utils



## 页面

###  detail-song

>展示三种数据 
>
>- 排行榜
>- 推荐歌曲
>- 歌单数据

根据点击不同的组件跳转时传递的type类型渲染不同的数据页面展示 

`type: raking -> 榜单数据`

 `type: recomm -> 推荐数据`

 `type: menu -> 歌单数据`

###  music-player 页面

获取点击的歌曲

获取歌曲播放的列表数据

#### 自定义导航

在`music-player.json`文件中配置

```json
"navigationStyle": "custom"
```

选择自定义导航
