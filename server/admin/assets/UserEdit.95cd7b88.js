import{q as F}from"./el-button.76cc9050.js";import{E as B,a as E}from"./el-form-item.2e6474dc.js";/* empty css                 */import{E as v,i as n,a as r}from"./request.44c15a3c.js";import{d as w,r as V,o as g,c as y,z as C,X as D,k as t,A as a,B as b}from"./index.0a7e8a72.js";const h={class:"edit"},x=b("\u4FDD\u5B58"),I=w({__name:"UserEdit",props:["id"],setup(i){const u=i,e=V({account:"",password:""}),m=async()=>{e.value.account?(u.id?(await n.put(`/users/${u.id}`,e.value),r({showClose:!0,message:"\u4FEE\u6539\u6210\u529F!",type:"success"})):(await n.post("/users",{...e.value,signal:"\u6697\u53F7",identityNumber:"5472"}),r({showClose:!0,message:"\u4FDD\u5B58\u6210\u529F!",type:"success"})),e.value.account=""):r.error("\u8BF7\u586B\u5165\u5185\u5BB9\uFF01\uFF01\uFF01")};async function p(){const c=await n.get(`/users/${u.id}`);e.value=c.data}return u.id&&p(),(c,s)=>{const d=v,o=B,_=F,f=E;return g(),y("div",h,[C("h2",null,D(i.id?"\u7F16\u8F91":"\u521B\u5EFA")+"\u7528\u6237",1),t(f,{"label-width":"120px"},{default:a(()=>[t(o,{label:"\u8D26\u53F7"},{default:a(()=>[t(d,{size:"large",modelValue:e.value.account,"onUpdate:modelValue":s[0]||(s[0]=l=>e.value.account=l)},null,8,["modelValue"])]),_:1}),t(o,{label:"\u5BC6\u7801"},{default:a(()=>[t(d,{size:"large",modelValue:e.value.password,"onUpdate:modelValue":s[1]||(s[1]=l=>e.value.password=l)},null,8,["modelValue"])]),_:1}),t(o,null,{default:a(()=>[t(_,{type:"primary",onClick:m},{default:a(()=>[x]),_:1})]),_:1})]),_:1})])}}});export{I as default};
