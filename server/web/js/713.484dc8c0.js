"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[713],{4147:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3396),u=a(7139);const l={class:"title"};var i=(0,n.aZ)({props:["title","subTitle"],setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("h1",null,(0,u.zw)(e.title),1),(0,n._)("p",null,(0,u.zw)(e.subTitle),1)]))}}),r=a(89);const s=(0,r.Z)(i,[["__scopeId","data-v-8ff8492c"]]);var c=s},1713:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(4131),u=(a(3069),a(9712)),l=a(4147),i=a(3396),r=a(9952),s=a(4870);const c={class:"knowledgeSummary"},o={class:"demo-pagination-block"},v={key:1,class:"noData"};var g=(0,i.aZ)({setup(e){const t=(0,s.iH)([]),a=(0,s.iH)(1),g=(0,s.iH)(9),p=(0,s.iH)(0);async function d(){const e=(a.value-1)*g.value,n=await r.Z.get(`/articlesOfCodeSharing/${e}`);t.value=n.data}async function w(){const e=await r.Z.get("/articlesNumber/2");p.value=e.data}d(),w();const f=()=>{d()};return(e,r)=>{const s=l.Z,d=u.Z,w=n.R;return(0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(s,{title:"代码分享",subTitle:"善于分享，善于进步"}),t.value.toString()?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(d,{articles:t.value},null,8,["articles"]),(0,i._)("div",o,[(0,i.Wm)(w,{currentPage:a.value,"onUpdate:currentPage":r[0]||(r[0]=e=>a.value=e),"page-size":g.value,"onUpdate:page-size":r[1]||(r[1]=e=>g.value=e),layout:"prev, pager, next, jumper",total:p.value,onCurrentChange:f},null,8,["currentPage","page-size","total"])])],64)):(0,i.kq)("",!0),t.value.toString()?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("h1",v,"暂无数据"))])}}}),p=a(89);const d=(0,p.Z)(g,[["__scopeId","data-v-adc1c67c"]]);var w=d}}]);
//# sourceMappingURL=713.484dc8c0.js.map