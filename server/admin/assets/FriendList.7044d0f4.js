import{q as _}from"./el-button.f1281533.js";import{E as m,a as f,b as F}from"./el-table-column.a10e8468.js";import"./el-tag.0d0c3f17.js";import"./el-tooltip.b2f056e0.js";import"./el-scrollbar.60a3ac4c.js";import{i,a as h}from"./request.48431868.js";import{d as B,r as C,o as b,c as g,k as e,A as o,z as D,B as r}from"./index.3ff6739a.js";const E={class:"categoryList"},x=D("h2",null,"\u53CB\u94FE\u5217\u8868",-1),w=r(" \u7F16\u8F91 "),y=r(" \u5220\u9664 "),L=B({__name:"FriendList",setup(k){const u=C([]);async function n(){const a=await i.get("/friends");u.value=a.data}n();function c(a){F.confirm(`\u786E\u5B9A\u5220\u9664\u5206\u7C7B "${a.name}"`,"Warning",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(async()=>{await i.delete(`/friends/${a._id}`),h({type:"success",message:"\u5220\u9664\u6210\u529F!"}),n()})}return(a,A)=>{const t=m,s=_,d=f;return b(),g("div",E,[x,e(d,{data:u.value},{default:o(()=>[e(t,{prop:"_id",label:"ID",width:"220"}),e(t,{prop:"name",label:"\u7F51\u7AD9\u540D\u79F0"}),e(t,{prop:"headImg",label:"\u7F51\u7AD9\u5934\u50CF"}),e(t,{prop:"address",label:"\u7F51\u7AD9\u5730\u5740"}),e(t,{prop:"description",label:"\u7F51\u7AD9\u63CF\u8FF0"}),e(t,{prop:"mail",label:"\u8054\u7CFB\u65B9\u5F0F"}),e(t,{fixed:"right",label:"\u64CD\u4F5C",width:"180"},{default:o(l=>[e(s,{type:"text",size:"small",onClick:p=>a.$router.push(`/category/edit/${l.row._id}`)},{default:o(()=>[w]),_:2},1032,["onClick"]),e(s,{type:"text",size:"small",onClick:p=>c(l.row)},{default:o(()=>[y]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}}});export{L as default};
