import{q as p}from"./el-button.6479bf2e.js";import{E as m,a as f,b as h}from"./el-table-column.6dfce3b3.js";import"./el-tag.52d9ea9e.js";import"./el-tooltip.b2f056e0.js";import"./el-scrollbar.2a8fb754.js";import{i as c,a as B}from"./request.699a24cc.js";import{d as C,r as b,o as w,c as x,k as e,A as o,z as E,B as i}from"./index.5ab3fc77.js";const g={class:"categoryList"},k=E("h2",null,"\u5206\u7C7B\u5217\u8868",-1),y=i(" \u7F16\u8F91 "),D=i(" \u5220\u9664 "),M=C({__name:"UserList",setup($){const s=b([]);async function n(){const t=await c.get("/allUsers");s.value=t.data}n();function r(t){h.confirm(`\u786E\u5B9A\u5220\u9664\u7528\u6237 "${t.account}"`,"Warning",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(async()=>{await c.delete(`/users/${t._id}`),B({type:"success",message:"\u5220\u9664\u6210\u529F!"}),n()})}return(t,v)=>{const a=m,u=p,_=f;return w(),x("div",g,[k,e(_,{data:s.value},{default:o(()=>[e(a,{prop:"_id",label:"ID",width:"220"}),e(a,{prop:"account",label:"\u8D26\u53F7"}),e(a,{prop:"password",label:"\u5BC6\u7801"}),e(a,{fixed:"right",label:"\u64CD\u4F5C",width:"180"},{default:o(l=>[e(u,{type:"text",size:"small",onClick:d=>t.$router.push(`/user/edit/${l.row._id}`)},{default:o(()=>[y]),_:2},1032,["onClick"]),e(u,{type:"text",size:"small",onClick:d=>r(l.row)},{default:o(()=>[D]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}}});export{M as default};
