import{q as p}from"./el-button.6479bf2e.js";import{E as f,a as B,b as h}from"./el-table-column.6dfce3b3.js";import"./el-tag.52d9ea9e.js";import"./el-tooltip.b2f056e0.js";import"./el-scrollbar.2a8fb754.js";import{i as s,a as b}from"./request.699a24cc.js";import{d as C,r as E,o as x,c as g,k as e,A as o,z as w,B as c}from"./index.5ab3fc77.js";const y={class:"categoryList"},A=w("h2",null,"\u8BC4\u8BBA\u5217\u8868",-1),k=c(" \u5220\u9664 "),D=c("\u5168\u5220"),I=C({__name:"CommentList",setup(T){const l=E([]);async function n(){const t=await s.get("/comments");l.value=t.data}n();async function i(t){h.confirm(`\u786E\u5B9A\u5220\u9664\u6587\u7AE0 "${t.name}"`,"Warning",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{r(t),b({type:"success",message:"\u5220\u9664\u6210\u529F!"}),n()})}async function r(t){await s.delete(`/comments/${t._id}`)}async function m(){await s.delete("/commentsAll"),n()}return(t,v)=>{const a=f,u=p,_=B;return x(),g("div",y,[A,e(_,{data:l.value},{default:o(()=>[e(a,{prop:"_id",label:"ID",width:"220"}),e(a,{prop:"name",label:"\u6635\u79F0"}),e(a,{prop:"remark",label:"\u5185\u5BB9"}),e(a,{prop:"parent",label:"\u7236\u8BC4\u8BBA"}),e(a,{fixed:"right",label:"\u64CD\u4F5C",width:"180"},{default:o(d=>[e(u,{type:"text",size:"small",onClick:F=>i(d.row)},{default:o(()=>[k]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(u,{onClick:m},{default:o(()=>[D]),_:1})])}}});export{I as default};
