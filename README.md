# i-music С����   by coderyzl

>��飺 ���ڷ�������api��������С����  (http://cloud-music.pl-fe.cn/) 
>
>����github��ַ [codeYzl/I-music: ������С���� (github.com)](https://github.com/codeYzl/I-music)
>
>����ʹ���ƿ�����������ղأ����۹���
>
>deadline���ϵ����Ƚ�������ɲ��ֵ�˵���ĵ�

###  �ļ����ṹ

+---assets    -------------------------------��̬��Դ
|   +---icons -------ͼ��
|   +---music ------ ����ͼƬ
|   +---player 
|   \---tabbar
+---components ----------------------------���
|   +---menu-area 
|   +---menu-item
|   +---ranking-item --------�������
|   +---section-header
|   +---song-item 
|   \---video-item --------MV���
+---miniprogram_npm ------------------npm����
+---node_modules---------------npmģ��
+---pages-----------------------------------ҳ��
|   +---detail-menu  ------ ��������ҳ
|   +---detail-search ------ ��������ҳ
|   +---detail-song  -------- ��������ҳ
|   +---detail-video -------- mv����ҳ
|   +---main-music --------- ������ҳ
|   \---main-video ------------��Ƶ��ҳ
+---services ��װ�Ĺ��ܺ���
+---store -------- �������ݿ�
\---utils



## ҳ��

### main-music

������ҳ

��������ͼƬ�ֲ�ͼ���赥�Ƽ����ȸ���۷�񣬿�����ת��ÿ��ģ�������ҳ��

###  detail-song

>չʾ�������� 
>
>- ���а�
>- �Ƽ�����
>- �赥����

���ݵ����ͬ�������תʱ���ݵ�type������Ⱦ��ͬ������ҳ��չʾ 

`type: raking -> ������`

 `type: recomm -> �Ƽ�����`

 `type: menu -> �赥����`

###  music-player ҳ��

��ȡ����ĸ���

��ȡ�������ŵ��б�����

#### �Զ��嵼��

��`music-player.json`�ļ�������

```json
"navigationStyle": "custom"
```

ѡ���Զ��嵼��

## �������

+---components ----------------------------���
|   +---menu-area 
|   +---menu-item
|   +---ranking-item --------�������
|   +---section-header
|   +---song-item 
|   \---video-item --------MV���

#### area-hear���

![image-20230520233610344](C:\Users\11657\AppData\Roaming\Typora\typora-user-images\image-20230520233610344.png)



����ҳ���Ƽ����ֵ��˽�����װ�����

ʹ��`vant`���ٿ���

####  menu-area���



![image-20230520233032923](C:\Users\11657\AppData\Roaming\Typora\typora-user-images\image-20230520233032923.png)

#### rank-item���

ʵ�����а�ģ��ķ�װ![image-20230520233521289](C:\Users\11657\AppData\Roaming\Typora\typora-user-images\image-20230520233521289.png)

#### �Զ��嵼��������nav-bar 

ʹ��**���**����̬���޸ĵ�����������

΢��С������ʹ�ö�������Ҫ�޸������options

```json
options:{
    multipleSlots: true 
}
```



��Ĭ��ֵ��������������Ϊ`none`�����û�в�۽���������ʾ

```css
.default{
    display: none;
}

.slot:empty + .default{
    display: flex;
}

```



