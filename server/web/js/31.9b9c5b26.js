"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[31],{1031:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var n=t(4131),u=(t(3069),t(3396)),c=t(8453),l=t(9952),r=t(4870);const s={class:"home"},i={class:"demo-pagination-block"};var o=(0,u.aZ)({setup(e){const a=(0,r.iH)([]),t=(0,r.iH)(1),o=(0,r.iH)(9),v=(0,r.iH)(0);async function p(){const e=(t.value-1)*o.value,n=await l.Z.get(`/articles/${e}`);a.value=n.data}async function g(){const e=await l.Z.get("/articlesNumber/1");v.value=e.data}p(),g();const d=()=>{p()};return(e,l)=>{const r=n.R;return(0,u.wg)(),(0,u.iD)("div",s,[(0,u.Wm)(c.Z,{articles:a.value},null,8,["articles"]),(0,u._)("div",i,[(0,u.Wm)(r,{currentPage:t.value,"onUpdate:currentPage":l[0]||(l[0]=e=>t.value=e),"page-size":o.value,"onUpdate:page-size":l[1]||(l[1]=e=>o.value=e),layout:"prev, pager, next, jumper",total:v.value,onCurrentChange:d},null,8,["currentPage","page-size","total"])])])}}}),v=t(89);const p=(0,v.Z)(o,[["__scopeId","data-v-48b17685"]]);var g=p}}]);
//# sourceMappingURL=31.9b9c5b26.js.map