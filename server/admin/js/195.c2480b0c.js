"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[195],{3195:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var n=a(5789),i=(a(6905),a(5264)),l=(a(6809),a(9007),a(3396)),r=a(7763),s=a(4870),o=a(5867),c=a(568);const d={class:"categoryList"},u=(0,l._)("h2",null,"友链列表",-1),m=(0,l.Uk)(" 编辑 "),p=(0,l.Uk)(" 删除 ");var f={setup(e){const t=(0,s.iH)([]);async function a(){const e=await r.Z.get("/friends");t.value=e.data}function f(e){o.T.confirm(`确定删除分类 "${e.name}"`,"Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await r.Z["delete"](`/friends/${e._id}`);(0,c.z8)({type:"success",message:"删除成功!"}),a()}))}return a(),(e,a)=>{const r=n.$Y,s=i.mi,o=n.eI;return(0,l.wg)(),(0,l.iD)("div",d,[u,(0,l.Wm)(o,{data:t.value},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{prop:"_id",label:"ID",width:"220"}),(0,l.Wm)(r,{prop:"name",label:"网站名称"}),(0,l.Wm)(r,{prop:"headImg",label:"网站头像"}),(0,l.Wm)(r,{prop:"address",label:"网站地址"}),(0,l.Wm)(r,{prop:"description",label:"网站描述"}),(0,l.Wm)(r,{prop:"mail",label:"联系方式"}),(0,l.Wm)(r,{fixed:"right",label:"操作",width:"180"},{default:(0,l.w5)((t=>[(0,l.Wm)(s,{type:"text",size:"small",onClick:a=>e.$router.push(`/category/edit/${t.row._id}`)},{default:(0,l.w5)((()=>[m])),_:2},1032,["onClick"]),(0,l.Wm)(s,{type:"text",size:"small",onClick:e=>f(t.row)},{default:(0,l.w5)((()=>[p])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])}}};const w=f;var W=w}}]);
//# sourceMappingURL=195.c2480b0c.js.map