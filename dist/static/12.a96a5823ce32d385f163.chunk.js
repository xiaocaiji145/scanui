webpackJsonp([12],{122:function(t,e,a){var n=a(3)(a(646),a(647),null,null);t.exports=n.exports},646:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),l=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={name:"plugin-table",data:function(){var t=this;return{searchdata:"",current:1,total:100,selectlist:[],tabledata:[],tablehead:[{title:"插件名称",align:"left",key:"plugname"},{title:"插件描述",key:"plugdesc",sortable:!0},{title:"插件类型",align:"left",key:"plugtype"},{title:"操作",align:"center",width:100,key:"action",render:function(e,a){return e("Button",{props:{icon:"reply",shape:"circle"},on:{click:function(){t.$router.push({name:"task_list",params:{isadd:!0,taskinfo:{task_host:localStorage.projectid,task_args:"-plug="+a.row.plugname,task_name:["pluginscan"]}}})}}},"扫描")}}],showCurrentTableData:!0}},methods:{pluginedit:function(){var t=this,e=this.$refs.selection.getSelection();this.selectlist=[];for(var a in this.tabledata)this.array_contain(e,this.tabledata[a])?this.selectlist.push({plugname:this.tabledata[a].plugname,plugstat:!0}):this.selectlist.push({plugname:this.tabledata[a].plugname,plugstat:!1});l.default.ajax({method:"POST",action:"pluginedit",json:{selectlist:this.selectlist}}).then(function(e){t.$Message.info("更新成功！")}).catch(function(e){t.$Message.error(e)})},pluginsearch:function(t){var e=this;l.default.ajax({method:"POST",action:"pluginsearch",json:{page:t,keyword:this.searchdata}}).then(function(t){e.tabledata=t.ret,e.total=t.total}).catch(function(t){e.$Message.error(t)})},array_contain:function(t,e){for(var a in t)if(t[a].plugname==e.plugname)return!0;return!1}},created:function(){"null"!=localStorage.projectid&&void 0!=localStorage.projectid?this.pluginsearch(1):(this.$Message.error("请先选择当前系统"),this.$router.push({name:"project_index"}))}}},647:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("Button",{attrs:{size:"large"}}),t._v(" "),a("Input",{staticStyle:{width:"300px"},attrs:{slot:"extra",icon:"search",placeholder:"请输入插件名称或描述进行搜索..."},on:{"on-click":function(e){t.pluginsearch(1)}},nativeOn:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.pluginsearch(1)}},slot:"extra",model:{value:t.searchdata,callback:function(e){t.searchdata=e},expression:"searchdata"}})],1),t._v(" "),a("Table",{ref:"selection",attrs:{stripe:"",border:"",size:"small",columns:t.tablehead,data:t.tabledata}}),t._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"left"}},[t._v("共 "+t._s(t.total)+" 条")]),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{"show-elevator":"",current:t.current,total:t.total,"page-size":30},on:{"on-change":t.pluginsearch}})],1)])],1)},staticRenderFns:[]}}});