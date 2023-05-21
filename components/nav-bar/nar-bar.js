// components/nav-bar/nar-bar.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true 
},
  properties: {
       
        title:{
            type:String,
            value:"导航标题"
        }
  },


  data: {
    statusHeight:20

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick(){
        
    }
  }
})
