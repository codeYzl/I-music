// components/section-header/area-header.js
Component({
  properties: {
    title: {
      type: "String",
      value:"默认标题",
    },
    hasMore:{
        type:"boolean",
        value:"true"
      }
    },
    methods: {
      onMoreTap(){
        this.triggerEvent("moreclick")
      }
    }
  }
)
