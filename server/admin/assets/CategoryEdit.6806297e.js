import{q as F}from"./el-button.f9d9f15b.js";import{E as B,a as E}from"./el-form-item.75b62526.js";/* empty css                 */import{E as g,i as s,a as u}from"./request.982d0bf4.js";import{d as v,r as y,o as h,c as w,z as C,X as D,k as t,A as o,B as V}from"./index.fef1696d.js";const x={class:"edit"},k=V("\u4FDD\u5B58"),$=v({__name:"CategoryEdit",props:["id"],setup(l){const a=l,e=y({name:""}),c=async()=>{e.value.name?(a.id?(await s.put(`/categories/${a.id}`,e.value),u({showClose:!0,message:"\u4FEE\u6539\u6210\u529F!",type:"success"})):(await s.post("/categories",e.value),u({showClose:!0,message:"\u4FDD\u5B58\u6210\u529F!",type:"success"})),e.value.name=""):u.error("\u8BF7\u586B\u5165\u5185\u5BB9\uFF01\uFF01\uFF01")};async function m(){const n=await s.get(`/categories/${a.id}`);e.value=n.data}return a.id&&m(),(n,i)=>{const d=g,r=B,p=F,_=E;return h(),w("div",x,[C("h2",null,D(l.id?"\u7F16\u8F91":"\u521B\u5EFA")+"\u5206\u7C7B",1),t(_,{"label-width":"120px"},{default:o(()=>[t(r,{label:"\u540D\u79F0"},{default:o(()=>[t(d,{size:"large",modelValue:e.value.name,"onUpdate:modelValue":i[0]||(i[0]=f=>e.value.name=f)},null,8,["modelValue"])]),_:1}),t(r,null,{default:o(()=>[t(p,{type:"primary",onClick:c},{default:o(()=>[k]),_:1})]),_:1})]),_:1})])}}});export{$ as default};
