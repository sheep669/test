"use strict";(self["webpackChunkvue_emo_back"]=self["webpackChunkvue_emo_back"]||[]).push([[9422],{5679:function(e,t,a){a.d(t,{Z:function(){return c}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"emo-table"},[e.isShow?a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","max-width":"250",height:"520","empty-text":"暂无数据"},on:{"selection-change":e.handleSelectionChange}},[e.table_config.checkbox?a("el-table-column",{attrs:{type:"selection",width:"55",fixed:""}}):e._e(),e._l(e.table_config.thead,(function(t){return["slot"===t.type?a("el-table-column",{key:t.prop,attrs:{align:t.align,fixed:t.fixed,label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(a){return[e._t(t.slotName,null,{data:a.row})]}}],null,!0)}):"function"===t.type?a("el-table-column",{key:t.prop,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(l){return[a("el-tag",[e._v(" "+e._s(t.callback&&t.callback(l.row,t.prop)))])]}}],null,!0)}):"aduit"===t.type?a("el-table-column",{key:t.prop,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(l){return["1"===l.row.auditStatus?a("el-tag",{attrs:{type:"info"}},[e._v(" "+e._s(t.callback&&t.callback(l.row)))]):e._e(),"2"===l.row.auditStatus?a("el-tag",{attrs:{type:"warning"}},[e._v(" "+e._s(t.callback&&t.callback(l.row)))]):e._e(),"3"===l.row.auditStatus?a("el-tag",{attrs:{type:"success"}},[e._v(" "+e._s(t.callback&&t.callback(l.row)))]):e._e(),"4"===l.row.auditStatus?a("el-tag",{attrs:{type:"danger"}},[e._v(" "+e._s(t.callback&&t.callback(l.row)))]):e._e()]}}],null,!0)}):"image"===t.type?a("el-table-column",{key:t.prop,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.axios.defaults.baseURL+"/"+t.row.avatar,fit:"fit"}})]}}],null,!0)}):a("el-table-column",{key:t.prop,attrs:{label:t.label,prop:t.prop,width:t.width,fixed:t.fixed,"show-overflow-tooltip":""}})]}))],2):e._e()],1)},s=[],o=(a(6699),{name:"EmoTable",data(){return{table_config:{thead:[],checkbox:""}}},props:{config:{type:Object,default:()=>{}},tableData:{type:Array,default:()=>[]},isShow:{type:Boolean,default:!0}},methods:{handleSelectionChange(e){console.log("复选框",e);let t=[];e&&e.forEach((e=>{t.push(e.id)})),this.$store.dispatch("SETIDS",t)},initConfig(){for(let e in this.config)Object.keys(this.table_config).includes(e)&&(this.table_config[e]=this.config[e])}},watch:{config:{handler(){this.initConfig()},immediate:!0}}}),i=o,r=a(1001),n=(0,r.Z)(i,l,s,!1,null,"7b95ac48",null),c=n.exports},9422:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sys_user_login_log"},[a("el-card",{staticStyle:{margin:"8px"},attrs:{shadow:"always","body-style":"0px"}},[a("div",{staticClass:"filter-form"},[a("el-row",[a("el-col",{attrs:{span:1}},[a("el-tooltip",{attrs:{effect:"dark",content:"刷新表格",placement:"left-start"}},[a("el-button",{attrs:{icon:"el-icon-refresh-right",circle:"",size:"medium"},on:{click:e.refreshTable}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form",{staticClass:"emo-form-inline",attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"登陆用户名"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入登陆用户名"},model:{value:e.request_config.form.username,callback:function(t){e.$set(e.request_config.form,"username",t)},expression:"request_config.form.username"}})],1),a("el-form-item",{attrs:{label:"公司"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入公司"},model:{value:e.request_config.form.companyName,callback:function(t){e.$set(e.request_config.form,"companyName",t)},expression:"request_config.form.companyName"}})],1)],1)],1),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"serachBtn"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.serachData}},[e._v("查询")])],1)]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"batchBtn"},[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.delBatch}},[e._v("批量删除")])],1)]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"pull-right"},[a("el-button",{attrs:{type:"danger",icon:"el-icon-circle-plus-outline"},on:{click:e.handleAdd}},[e._v("添加登陆日志")])],1)])],1)],1),a("emo-table",{attrs:{config:e.table_config,tableData:e.table_data,isShow:e.isShow},scopedSlots:e._u([{key:"operation",fn:function(t){return[a("el-popconfirm",{attrs:{"confirm-button-text":"确认","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除吗?"},on:{confirm:function(a){return e.handleDelete(t.data.id)}}},[a("el-button",{staticStyle:{"margin-left":"4px"},attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])}),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-pagination",{attrs:{"current-page":e.page.current,"page-sizes":[8],"page-size":e.page.size,layout:"total,sizes,prev, pager, next, jumper",total:e.total,"hide-on-single-page":""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.page,"current",t)},"update:current-page":function(t){return e.$set(e.page,"current",t)},"update:pageSize":function(t){return e.$set(e.page,"size",t)},"update:page-size":function(t){return e.$set(e.page,"size",t)}}})],1)],1),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible,fullscreen:!0,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.closeDialog}},[a("el-form",[a("el-form-item",{attrs:{label:"登录用户名 :","label-width":e.formLabelWidth}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入登录用户名"},model:{value:e.dialogConfig.username,callback:function(t){e.$set(e.dialogConfig,"username",t)},expression:"dialogConfig.username"}})],1),a("span",{staticStyle:{color:"red","margin-left":"72px"}},[e._v("* 个人用户 公司名默认为手机号 | 公司用户 公司名可以具体设置")]),a("el-form-item",{staticStyle:{"margin-top":"5px"},attrs:{label:"公司 :","label-width":e.formLabelWidth}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入公司"},model:{value:e.dialogConfig.companyName,callback:function(t){e.$set(e.dialogConfig,"companyName",t)},expression:"dialogConfig.companyName"}})],1),a("el-form-item",{attrs:{label:"IP地址 :","label-width":e.formLabelWidth}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入IP地址"},model:{value:e.dialogConfig.ipAddress,callback:function(t){e.$set(e.dialogConfig,"ipAddress",t)},expression:"dialogConfig.ipAddress"}})],1),a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.doAdd}},[e._v("确认"+e._s(e.dialogTitle))]),a("el-button",{attrs:{type:"primary"},on:{click:e.reset}},[e._v("重置")])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.closeDialog()}}},[e._v("关闭弹窗")])],1)],1)],1)},s=[],o=a(2871),i=a(6051),r=a(5679),n=a(4665),c={name:"SysUserLoginLog",components:{EmoTable:r.Z},data(){return{total:16,page:{current:1,size:8},table_data:[],isShow:!0,dialogTitle:"",dialogFormVisible:!1,formLabelWidth:"120px",dialogConfig:{companyName:"",ipAddress:"",username:""},request_config:{form:{username:"",companyName:""}},table_config:{thead:[{label:"登录日志ID",prop:"id",width:100},{label:"用户名",prop:"username",width:200},{label:"登录时间",prop:"loginTime",width:180},{label:"公司",prop:"companyName",width:200},{label:"IP地址",prop:"ipAddress",width:180},{label:"操作",width:185,type:"slot",align:"center",slotName:"operation"}],checkbox:!0}}},computed:{...(0,n.Se)(["delIds"])},created(){this.getTableData()},beforeDestroy(){this.clearIds()},methods:{...(0,n.OI)(["clearIds"]),reset(){let e=this.dialogConfig;Object.keys(e).forEach((t=>{e[t]=""}))},closeDialog(){this.dialogFormVisible=!1},doAdd(){let e=o.Z.sll.addUrl,t=this.dialogConfig;console.log("data_param",t),(0,i.NJ)(e,t).then((e=>{200==e.data.code&&(this.$message({message:"添加成功",type:"success",duration:1600}),this.dialogFormVisible=!1,this.refreshTable()),400==e.data.code&&this.$message({message:e.data.data.msg,type:"warning",duration:1600})}))},handleAdd(){this.reset(),this.dialogTitle="添加系统用户登入日志",this.dialogFormVisible=!0},handleDelete(e){console.log(e),(0,i.Gg)(o.Z.sll.deleteUrl,e).then((e=>{console.log(e),200===e.data.code&&(this.$message({message:"删除成功",type:"success"}),this.refreshTable())}))},delBatch(){0==this.delIds.length?this.$message({message:"请至少选择一条数据",type:"warning"}):((0,i.NJ)(o.Z.sll.deleteBatchUrl,this.delIds).then((e=>{console.log(e),200===e.data.code&&this.$message({message:"批量删除成功",type:"success"})})),this.refreshTable(),this.clearIds())},serachData(){let e=!1,t={current:1,size:this.page.size},a=this.request_config.form;Object.keys(a).forEach((t=>{null!=!a[t]&&""!=!a[t]||(e=!0)})),e?(0,i.e3)(o.Z.sll.searchOrGetPageList,t,a).then((e=>{if(200==e.data.code){let t=e.data.data.records;0==t.length&&this.$message({message:"没有符合条件的数据",duration:1600,type:"error"}),this.table_data=t,this.total=e.data.data.total}else 400==e.data.code?this.$message({message:e.data.data.msg,type:"warning",duration:1600}):this.$message({message:"请求失败了,请检查网络或者服务器",duration:1600,type:"error"})})):this.$message({message:"亲,你还没有输入任何搜索条件",duration:1600,type:"warning"})},resetSearch(){let e=this.request_config.form;Object.keys(e).forEach((t=>{e[t]=""}))},refreshTable(){this.isShow=!1,this.$nextTick((()=>{this.isShow=!0})),this.getTableData(),this.resetSearch()},getTableData(){(0,i.e3)(o.Z.sll.searchOrGetPageList,this.page,null).then((e=>{200==e.data.code?(this.table_data=e.data.data.records,this.total=e.data.data.total):this.$message({message:"请求失败了,请检查网络或者服务器",duration:1600,type:"error"})}))},handleSizeChange(e){console.log(`每页 ${e} 条`),this.page.size=e},handleCurrentChange(e){let t={current:e,size:this.page.size},a=this.request_config.form;(0,i.e3)(o.Z.sll.searchOrGetPageList,t,a).then((e=>{200==e.data.code?(this.table_data=e.data.data.records,this.total=e.data.data.total):this.$message({message:"请求失败了,请检查网络或者服务器",duration:1600,type:"error"})})),console.log(`当前页: ${e}`)}}},d=c,p=a(1001),g=(0,p.Z)(d,l,s,!1,null,"ee01bb90",null),u=g.exports}}]);
//# sourceMappingURL=9422.54bb6a73.js.map