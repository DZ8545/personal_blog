import{q as p}from"./el-button.4ac3fd03.js";import{E as m,a as f,b as h}from"./el-table-column.fe684e1f.js";import"./el-tag.a2fd0a19.js";import"./el-tooltip.b2f056e0.js";import"./el-scrollbar.643955c4.js";import{i,a as B}from"./request.df4c2867.js";import{d as E,r as b,o as C,c as g,k as t,A as o,z as x,B as c}from"./index.82681b0b.js";const w={class:"categoryList"},k=x("h2",null,"\u6587\u7AE0\u5217\u8868",-1),y=c(" \u7F16\u8F91 "),A=c(" \u5220\u9664 "),M=E({__name:"ArticleList",setup($){const s=b([]);async function l(){const e=await i.get("/articlesAll");s.value=e.data}l();function r(e){h.confirm(`\u786E\u5B9A\u5220\u9664\u6587\u7AE0 "${e.title}"`,"Warning",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(async()=>{await i.delete(`/articles/${e._id}`),B({type:"success",message:"\u5220\u9664\u6210\u529F!"}),l()})}return(e,v)=>{const a=m,n=p,_=f;return C(),g("div",w,[k,t(_,{data:s.value},{default:o(()=>[t(a,{prop:"_id",label:"ID",width:"220"}),t(a,{prop:"categories",label:"\u5206\u7C7B"}),t(a,{prop:"title",label:"\u6807\u9898"}),t(a,{fixed:"right",label:"\u64CD\u4F5C",width:"180"},{default:o(u=>[t(n,{type:"text",size:"small",onClick:d=>e.$router.push(`/article/edit/${u.row._id}`)},{default:o(()=>[y]),_:2},1032,["onClick"]),t(n,{type:"text",size:"small",onClick:d=>r(u.row)},{default:o(()=>[A]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}}});export{M as default};
