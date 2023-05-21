# i-music 小程序   by coderyzl

>简介： 基于仿网易云api的轻音乐小程序  (http://cloud-music.pl-fe.cn/) 
>
>上线github地址 [codeYzl/I-music: 轻音乐小程序 (github.com)](https://github.com/codeYzl/I-music)
>
>后期使用云开发管理歌曲收藏，评论功能
>
>deadline马上到了先交个已完成部分的说明文档

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

### main-music

音乐首页

包含音乐图片轮播图，歌单推荐，热歌榜，巅峰榜，可以跳转到每个模块的详情页面

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

## 组件开发

+---components ----------------------------组件
|   +---menu-area 
|   +---menu-item
|   +---ranking-item --------排名组件
|   +---section-header
|   +---song-item 
|   \---video-item --------MV组件

#### area-hear组件

![image-20230520233610344](C:\Users\11657\AppData\Roaming\Typora\typora-user-images\image-20230520233610344.png)



将首页的推荐部分的了解更多封装成组件

使用`vant`快速开发

####  menu-area组件



![image-20230520233032923](C:\Users\11657\AppData\Roaming\Typora\typora-user-images\image-20230520233032923.png)

#### rank-item组件

实现排行榜模块的封装![image-20230520233521289](C:\Users\11657\AppData\Roaming\Typora\typora-user-images\image-20230520233521289.png)

#### 自定义导航栏开发nav-bar 

使用**插槽**来动态的修改导航栏的内容

微信小程序中使用多个插槽需要修改组件的options

```json
options:{
    multipleSlots: true 
}
```



将默认值”导航栏“设置为`none`，如果没有插槽将导航栏显示

```css
.default{
    display: none;
}

.slot:empty + .default{
    display: flex;
}

```



