"use strict";(self["webpackChunkvue_emo_back"]=self["webpackChunkvue_emo_back"]||[]).push([[5415],{5415:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%",height:"calc(100% - 2px)"}},[a("div",{staticClass:"left",staticStyle:{width:"160px",background:"#ffffff",height:"100%",float:"left","overflow-x":"hidden","overflow-y":"auto","border-top":"2px solid rgb(0 0 0 / 5%)"}},[a("emo-submenu",{attrs:{subMenuData:e.subMenuData,defaultActiveIndex:e.activeIndex}})],1),a("router-view")],1)},n=[],i=a(4665),r=a(4394),s={name:"EmoDelivery",data(){return{subMenuData:[],activeIndex:""}},computed:(0,i.Se)(["navData"]),created(){this.getSubMenuData(),this.$router.push(this.activeIndex)},methods:{getSubMenuData(){this.navData.forEach((e=>{if("delivery"==e.name)return this.subMenuData=e.children,void(this.activeIndex=e.children[0].submenu[0].path)})),this.subMenuData.forEach((e=>{e.submenu.forEach((e=>{this.$router.addRoute("delivery",{path:e.path,component:()=>a(1480)("./views"+e.component+".vue"),meta:{title:e.submenuTitle}})}))}))}},components:{EmoSubmenu:r.Z}},o=s,c=a(1001),h=(0,c.Z)(o,u,n,!1,null,"e2e929fc",null),d=h.exports}}]);
//# sourceMappingURL=5415.f72ea827.js.map