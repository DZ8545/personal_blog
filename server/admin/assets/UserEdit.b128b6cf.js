import{q as F}from"./el-button.93f8741e.js";import{E as B,a as w}from"./el-form-item.ecc51464.js";/* empty css                 */import{E,i as r,a as c}from"./request.76a67f09.js";import{d as v,r as V,o as g,c as y,z as C,X as D,k as a,A as t,B as b}from"./index.ce8038d0.js";const h={class:"edit"},x=b("\u4FDD\u5B58"),A=v({__name:"UserEdit",props:["id"],setup(d){const s=d,e=V({account:"",password:""}),m=async()=>{e.value.account?s.id?(await r.put(`/users/${s.id}`,e.value),c({showClose:!0,message:"\u4FEE\u6539\u6210\u529F!",type:"success"})):(await r.post("/users",{...e.value,signal:"\u6697\u53F7",identityNumber:"5472"}),c({showClose:!0,message:"\u4FDD\u5B58\u6210\u529F!",type:"success"})):c.error("\u8BF7\u586B\u5165\u5185\u5BB9\uFF01\uFF01\uFF01")};async function p(){const o=await r.get(`/userId/${s.id}`);e.value={account:o.data.account,password:o.data.password}}return s.id&&p(),(o,u)=>{const i=E,l=B,_=F,f=w;return g(),y("div",h,[C("h2",null,D(d.id?"\u7F16\u8F91":"\u521B\u5EFA")+"\u7528\u6237",1),a(f,{"label-width":"120px"},{default:t(()=>[a(l,{label:"\u8D26\u53F7"},{default:t(()=>[a(i,{size:"large",modelValue:e.value.account,"onUpdate:modelValue":u[0]||(u[0]=n=>e.value.account=n)},null,8,["modelValue"])]),_:1}),a(l,{label:"\u5BC6\u7801"},{default:t(()=>[a(i,{size:"large",modelValue:e.value.password,"onUpdate:modelValue":u[1]||(u[1]=n=>e.value.password=n)},null,8,["modelValue"])]),_:1}),a(l,null,{default:t(()=>[a(_,{type:"primary",onClick:m},{default:t(()=>[x]),_:1})]),_:1})]),_:1})])}}});export{A as default};
