"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[398],{2925:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(3396),l=t(7139);const r={class:"title"};var s=(0,n.aZ)({props:["title","subTitle"],setup(e){return(a,t)=>((0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("h1",null,(0,l.zw)(e.title),1),(0,n._)("p",null,(0,l.zw)(e.subTitle),1)]))}}),u=t(89);const i=(0,u.Z)(s,[["__scopeId","data-v-1a75a244"]]);var o=i},398:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});var n=t(4131),l=(t(3069),t(2866)),r=t(2925),s=t(3396),u=t(4870),i=t(9952),o=t(678);const c={class:"knowledgeSummary"},p={class:"demo-pagination-block"},v={key:1,class:"noData"};var d=(0,s.aZ)({setup(e){const a=(0,u.qj)({knowledgeSummary:["知识总结","善于总结，善于进步","articlesOfKnowledgeSummary",4],studyNote:["学习笔记","好记性不如烂笔头","articlesOfStudyNote",5],codeSharing:["代码分享","善于分享，善于进步","articlesOfCodeSharing",2],informalEssay:["随笔","记录生活，记录更美的你","articlesOfInformalEssay",3]}),t=(0,u.iH)([]),d=(0,u.iH)(1),g=(0,u.iH)(9),m=(0,u.iH)(0),y=(0,o.yj)();async function f(){const e=(d.value-1)*g.value,n=await i.Z.get(`/${a[`${y.params.type}`][2]}/${e}`);t.value=n.data}async function w(){const e=await i.Z.get(`/articlesNumber/${a[`${y.params.type}`][3]}`);m.value=e.data}(0,s.m0)((()=>{y.params.type&&(f(),w())})),f(),w();const k=()=>{f()};return(e,i)=>{const o=r.Z,y=l.Z,f=n.R;return(0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(o,{title:(0,u.SU)(a)[`${e.$route.params.type}`][0],subTitle:(0,u.SU)(a)[`${e.$route.params.type}`][1]},null,8,["title","subTitle"]),t.value.toString()?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s.Wm)(y,{articles:t.value},null,8,["articles"]),(0,s._)("div",p,[(0,s.Wm)(f,{currentPage:d.value,"onUpdate:currentPage":i[0]||(i[0]=e=>d.value=e),"page-size":g.value,"onUpdate:page-size":i[1]||(i[1]=e=>g.value=e),layout:"prev, pager, next, jumper",total:m.value,onCurrentChange:k},null,8,["currentPage","page-size","total"])])],64)):(0,s.kq)("",!0),t.value.toString()?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("h1",v,"暂无数据"))])}}}),g=t(89);const m=(0,g.Z)(d,[["__scopeId","data-v-cc74d502"]]);var y=m}}]);
//# sourceMappingURL=398.1669aece.js.map