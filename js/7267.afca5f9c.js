"use strict";(self["webpackChunkvue_emo_back"]=self["webpackChunkvue_emo_back"]||[]).push([[7267],{5679:function(e,t,a){a.d(t,{Z:function(){return d}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"emo-table"},[e.isShow?a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","max-width":"250",height:"520","empty-text":"暂无数据"},on:{"selection-change":e.handleSelectionChange}},[e.table_config.checkbox?a("el-table-column",{attrs:{type:"selection",width:"55",fixed:""}}):e._e(),e._l(e.table_config.thead,(function(t){return["slot"===t.type?a("el-table-column",{key:t.prop,attrs:{align:t.align,fixed:t.fixed,label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(a){return[e._t(t.slotName,null,{data:a.row})]}}],null,!0)}):"function"===t.type?a("el-table-column",{key:t.prop,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(l){return[a("el-tag",[e._v(" "+e._s(t.callback&&t.callback(l.row,t.prop)))])]}}],null,!0)}):"aduit"===t.type?a("el-table-column",{key:t.prop,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(l){return["1"===l.row.auditStatus?a("el-tag",{attrs:{type:"info"}},[e._v(" "+e._s(t.callback&&t.callback(l.row)))]):e._e(),"2"===l.row.auditStatus?a("el-tag",{attrs:{type:"warning"}},[e._v(" "+e._s(t.callback&&t.callback(l.row)))]):e._e(),"3"===l.row.auditStatus?a("el-tag",{attrs:{type:"success"}},[e._v(" "+e._s(t.callback&&t.callback(l.row)))]):e._e(),"4"===l.row.auditStatus?a("el-tag",{attrs:{type:"danger"}},[e._v(" "+e._s(t.callback&&t.callback(l.row)))]):e._e()]}}],null,!0)}):"image"===t.type?a("el-table-column",{key:t.prop,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.axios.defaults.baseURL+"/"+t.row.avatar,fit:"fit"}})]}}],null,!0)}):a("el-table-column",{key:t.prop,attrs:{label:t.label,prop:t.prop,width:t.width,fixed:t.fixed,"show-overflow-tooltip":""}})]}))],2):e._e()],1)},r=[],o=(a(6699),{name:"EmoTable",data(){return{table_config:{thead:[],checkbox:""}}},props:{config:{type:Object,default:()=>{}},tableData:{type:Array,default:()=>[]},isShow:{type:Boolean,default:!0}},methods:{handleSelectionChange(e){console.log("复选框",e);let t=[];e&&e.forEach((e=>{t.push(e.id)})),this.$store.dispatch("SETIDS",t)},initConfig(){for(let e in this.config)Object.keys(this.table_config).includes(e)&&(this.table_config[e]=this.config[e])}},watch:{config:{handler(){this.initConfig()},immediate:!0}}}),i=o,n=a(1001),s=(0,n.Z)(i,l,r,!1,null,"7b95ac48",null),d=s.exports},7267:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"auditError"}},[a("emo-table",{attrs:{config:e.table_config,tableData:e.table_data,isShow:e.isShow},scopedSlots:e._u([{key:"operation",fn:function(t){return["5"==e.userinfo.user.userType?a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.reAudit(t.data.id)}}},[e._v("重新审核")]):e._e(),a("el-popconfirm",{attrs:{"confirm-button-text":"确认","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除吗?"},on:{confirm:function(a){return e.handleDelete(t.data.id)}}},[a("el-button",{staticStyle:{"margin-left":"4px"},attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])}),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-pagination",{attrs:{"current-page":e.page.current,"page-sizes":[8],"page-size":e.page.size,layout:"total,sizes,prev, pager, next, jumper",total:e.total,"hide-on-single-page":""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.page,"current",t)},"update:current-page":function(t){return e.$set(e.page,"current",t)},"update:pageSize":function(t){return e.$set(e.page,"size",t)},"update:page-size":function(t){return e.$set(e.page,"size",t)}}})],1)],1)},r=[],o=a(5679),i=a(2871),n=a(6051),s=a(4665),d={name:"AuditError",components:{EmoTable:o.Z},created(){this.getTableData()},computed:{...(0,s.Se)(["delIds"]),...(0,s.rn)("loginModule",["userinfo"]),...(0,s.rn)("status",["audit_status"]),...(0,s.rn)("type",["order_after_sale_type","refund_type"])},methods:{...(0,s.OI)(["clearIds"]),refreshTable(){this.reload()},reload(){this.isShow=!1,this.$nextTick((()=>{this.isShow=!0})),this.getTableData()},reAudit(e){(0,n.Gm)(i.Z.as.reAuditUrl,e).then((e=>{200==e.data.code?(this.$message({message:"操作成功",type:"success",duration:1600}),this.refreshTable()):this.$message({message:"操作失败",type:"error",duration:1600})}))},handleDelete(e){console.log(e),(0,n.Gg)(i.Z.as.deleteUrl,e).then((e=>{console.log(e),200===e.data.code&&(this.$message({message:"删除成功",type:"success"}),this.refreshTable())}))},getTableData(){let e={auditStatus:"4",orderAfterSaleType:"1"};(0,n.e3)(i.Z.as.searchOrGetPageList,this.page,e).then((e=>{200==e.data.code?(this.table_data=e.data.data.records,this.total=e.data.data.total):this.$message({message:"请求失败了,请检查网络或者服务器",duration:1600,type:"error"})}))},handleSizeChange(e){console.log(`每页 ${e} 条`),this.page.size=e},handleCurrentChange(e){let t={current:e,size:this.page.size},a={auditStatus:"4",orderAfterSaleType:"1"};(0,n.e3)(i.Z.as.searchOrGetPageList,t,a).then((e=>{200==e.data.code?(this.table_data=e.data.data.records,this.total=e.data.data.total):this.$message({message:"请求失败了,请检查网络或者服务器",duration:1600,type:"error"})})),console.log(`当前页: ${e}`)}},data(){return{total:16,page:{current:1,size:8},table_data:[],isShow:!0,request_config:{form:{goodsName:null,totalStocks:null,serialNumber:null}},table_config:{thead:[{label:"售后单ID",prop:"id",fixed:"left",width:80},{label:"订单号",prop:"orderNo",width:140},{label:"订单id",prop:"orderId",width:80},{label:"商品id",prop:"goodsId",width:80},{label:"用户id",prop:"userId",width:80},{label:"店铺名称",prop:"storeName",width:180},{label:"商品名称",prop:"goodsName",width:140},{label:"买家姓名",prop:"buyerName",width:100},{label:"审核状态",prop:"auditStatus",type:"aduit",callback:e=>{const t=this.audit_status.filter((t=>t.value==e.auditStatus));if(t&&t.length>0)return t[0].label},width:100},{label:"业务类型",prop:"orderAfterSaleType",width:100,type:"function",callback:(e,t)=>{const a=this.order_after_sale_type.filter((a=>a.value==e[t]));if(a&&a.length>0)return a[0].label}},{label:"退款类型",prop:"refundType",width:100,type:"function",callback:(e,t)=>{const a=this.refund_type.filter((a=>a.value==e[t]));if(a&&a.length>0)return a[0].label}},{label:"申请原因",prop:"reason",width:150},{label:"退货数量",prop:"orderAfterSaleNumber",width:90},{label:"退款金额",prop:"price",width:90},{label:"退款说明",prop:"refundInstruction",width:140},{label:"凭证图片",prop:"images",width:100},{label:"申请时间",prop:"applyTime",width:160},{label:"退货时间",prop:"deliveryTime",width:160},{label:"操作",width:200,type:"slot",align:"center",slotName:"operation",fixed:"right"}],checkbox:!0}}}},c=d,u=a(1001),p=(0,u.Z)(c,l,r,!1,null,"7d2e77a2",null),h=p.exports}}]);
//# sourceMappingURL=7267.afca5f9c.js.map