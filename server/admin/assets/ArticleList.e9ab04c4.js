import{q as m}from"./el-button.0759af9c.js";import{E as u,a as f,b as h}from"./el-table-column.76b5795f.js";import"./el-tag.ec05f7f8.js";import"./el-tooltip.b2f056e0.js";import"./el-scrollbar.53a38b07.js";import{i as c,E as b}from"./request.5e4a5c1f.js";import{r as g,o as x,c as w,k as t,B as o,A as B,C as r}from"./index.509da95d.js";const E={class:"categoryList"},k=B("h2",null,"\u6587\u7AE0\u5217\u8868",-1),y=r(" \u7F16\u8F91 "),C=r(" \u5220\u9664 "),M={__name:"ArticleList",setup($){const s=g([]);async function l(){const e=await c.get("/articlesAll");s.value=e.data}l();function _(e){h.confirm(`\u786E\u5B9A\u5220\u9664\u6587\u7AE0 "${e.title}"`,"Warning",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(async()=>{await c.delete(`/articles/${e._id}`),b({type:"success",message:"\u5220\u9664\u6210\u529F!"}),l()})}return(e,v)=>{const a=u,n=m,d=f;return x(),w("div",E,[k,t(d,{data:s.value},{default:o(()=>[t(a,{prop:"_id",label:"ID",width:"220"}),t(a,{prop:"categories",label:"\u5206\u7C7B"}),t(a,{prop:"title",label:"\u6807\u9898"}),t(a,{fixed:"right",label:"\u64CD\u4F5C",width:"180"},{default:o(i=>[t(n,{type:"text",size:"small",onClick:p=>e.$router.push(`/article/edit/${i.row._id}`)},{default:o(()=>[y]),_:2},1032,["onClick"]),t(n,{type:"text",size:"small",onClick:p=>_(i.row)},{default:o(()=>[C]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}}};export{M as default};