import{_ as K,u as z,w as Se,o as se,b as re,d as Q,i as C,J as dt,P as Ge,v as pt,q as He,E as me,Q as Ve,z as mt,R as ft,S as ve,U as Ce,W as vt,X as ht,t as _e,g as gt,L as De,m as _t,Y as bt,a as yt}from"./el-button.4ac3fd03.js";import{c as ee,u as wt,a as It,E as Ye,b as Oe,O as Et,d as Ct,w as Le,F as Mt,e as Tt}from"./el-scrollbar.643955c4.js";import{t as he}from"./el-tooltip.b2f056e0.js";import{a0 as $t,d as G,o as S,S as te,A as u,m as k,Q as ae,a2 as kt,u as $,Y as We,s as St,f as b,c as X,a as Z,b as be,r as T,p as oe,i as A,h as ye,a3 as Ne,H as Ot,P as ie,w as de,a4 as B,k as h,a5 as Nt,a6 as Pt,n as Ue,g as fe,a7 as Bt,y as ke,z as ue,T as Ft,R as we,l as Pe,a8 as Y,v as Rt,x as At,G as Dt,q as pe,L as Lt,B as D,X as zt,_ as Kt,D as Gt,E as Ht}from"./index.82681b0b.js";const je=(...e)=>t=>{e.forEach(o=>{$t(o)?o(t):o.value=t})},Vt={name:"ElCollapseTransition"},Yt=G({...Vt,setup(e){const t=z("collapse-transition"),o={beforeEnter(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0},enter(n){n.dataset.oldOverflow=n.style.overflow,n.scrollHeight!==0?(n.style.maxHeight=`${n.scrollHeight}px`,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom):(n.style.maxHeight=0,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom),n.style.overflow="hidden"},afterEnter(n){n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow},beforeLeave(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.dataset.oldOverflow=n.style.overflow,n.style.maxHeight=`${n.scrollHeight}px`,n.style.overflow="hidden"},leave(n){n.scrollHeight!==0&&(n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0)},afterLeave(n){n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom}};return(n,s)=>(S(),te(We,ae({name:$(t).b()},kt(o)),{default:u(()=>[k(n.$slots,"default")]),_:3},16,["name"]))}});var ge=K(Yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);ge.install=e=>{e.component(ge.name,ge)};const Wt=ge,Ut={name:"ElContainer"},jt=G({...Ut,props:{direction:{type:String}},setup(e){const t=e,o=St(),n=z("container"),s=b(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:o&&o.default?o.default().some(a=>{const r=a.type.name;return r==="ElHeader"||r==="ElFooter"}):!1);return(d,a)=>(S(),X("section",{class:Z([$(n).b(),$(n).is("vertical",$(s))])},[k(d.$slots,"default")],2))}});var Jt=K(jt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const xt={name:"ElAside"},qt=G({...xt,props:{width:{type:String,default:null}},setup(e){const t=e,o=z("aside"),n=b(()=>t.width?o.cssVarBlock({width:t.width}):{});return(s,d)=>(S(),X("aside",{class:Z($(o).b()),style:be($(n))},[k(s.$slots,"default")],6))}});var Je=K(qt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const Qt={name:"ElFooter"},Xt=G({...Qt,props:{height:{type:String,default:null}},setup(e){const t=e,o=z("footer"),n=b(()=>t.height?o.cssVarBlock({height:t.height}):{});return(s,d)=>(S(),X("footer",{class:Z($(o).b()),style:be($(n))},[k(s.$slots,"default")],6))}});var xe=K(Xt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const Zt={name:"ElHeader"},en=G({...Zt,props:{height:{type:String,default:null}},setup(e){const t=e,o=z("header"),n=b(()=>t.height?o.cssVarBlock({height:t.height}):{});return(s,d)=>(S(),X("header",{class:Z($(o).b()),style:be($(n))},[k(s.$slots,"default")],6))}});var qe=K(en,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const tn={name:"ElMain"},nn=G({...tn,setup(e){const t=z("main");return(o,n)=>(S(),X("main",{class:Z($(t).b())},[k(o.$slots,"default")],2))}});var Qe=K(nn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const on=Se(Jt,{Aside:Je,Footer:xe,Header:qe,Main:Qe}),sn=se(Je);se(xe);const ln=se(qe);se(Qe);const an={inheritAttrs:!1};function rn(e,t,o,n,s,d){return k(e.$slots,"default")}var un=K(an,[["render",rn],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const cn={name:"ElCollectionItem",inheritAttrs:!1};function dn(e,t,o,n,s,d){return k(e.$slots,"default")}var pn=K(cn,[["render",dn],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const Xe="data-el-collection-item",Ze=e=>{const t=`El${e}Collection`,o=`${t}Item`,n=Symbol(t),s=Symbol(o),d={...un,name:t,setup(){const r=T(null),l=new Map;oe(n,{itemMap:l,getItems:()=>{const v=$(r);if(!v)return[];const m=Array.from(v.querySelectorAll(`[${Xe}]`));return[...l.values()].sort((i,I)=>m.indexOf(i.ref)-m.indexOf(I.ref))},collectionRef:r})}},a={...pn,name:o,setup(r,{attrs:l}){const f=T(null),v=A(n,void 0);oe(s,{collectionItemRef:f}),ye(()=>{const m=$(f);m&&v.itemMap.set(m,{ref:m,...l})}),Ne(()=>{const m=$(f);v.itemMap.delete(m)})}};return{COLLECTION_INJECTION_KEY:n,COLLECTION_ITEM_INJECTION_KEY:s,ElCollection:d,ElCollectionItem:a}},mn=re({style:{type:Q([String,Array,Object])},currentTabId:{type:Q(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:Q(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:fn,ElCollectionItem:vn,COLLECTION_INJECTION_KEY:Be,COLLECTION_ITEM_INJECTION_KEY:hn}=Ze("RovingFocusGroup"),Fe=Symbol("elRovingFocusGroup"),et=Symbol("elRovingFocusGroupItem"),gn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},_n=(e,t)=>{if(t!=="rtl")return e;switch(e){case C.right:return C.left;case C.left:return C.right;default:return e}},bn=(e,t,o)=>{const n=_n(e.key,o);if(!(t==="vertical"&&[C.left,C.right].includes(n))&&!(t==="horizontal"&&[C.up,C.down].includes(n)))return gn[n]},yn=(e,t)=>e.map((o,n)=>e[(n+t)%e.length]),Re=e=>{const{activeElement:t}=document;for(const o of e)if(o===t||(o.focus(),t!==document.activeElement))return},ze="currentTabIdChange",Ke="rovingFocusGroup.entryFocus",wn={bubbles:!1,cancelable:!0},In=G({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:mn,emits:[ze,"entryFocus"],setup(e,{emit:t}){var o;const n=T((o=e.currentTabId||e.defaultCurrentTabId)!=null?o:null),s=T(!1),d=T(!1),a=T(null),{getItems:r}=A(Be,void 0),l=b(()=>[{outline:"none"},e.style]),f=y=>{t(ze,y)},v=()=>{s.value=!0},m=ee(y=>{var E;(E=e.onMousedown)==null||E.call(e,y)},()=>{d.value=!0}),w=ee(y=>{var E;(E=e.onFocus)==null||E.call(e,y)},y=>{const E=!$(d),{target:U,currentTarget:F}=y;if(U===F&&E&&!$(s)){const x=new Event(Ke,wn);if(F==null||F.dispatchEvent(x),!x.defaultPrevented){const O=r().filter(R=>R.focusable),W=O.find(R=>R.active),N=O.find(R=>R.id===$(n)),q=[W,N,...O].filter(Boolean).map(R=>R.ref);Re(q)}}d.value=!1}),i=ee(y=>{var E;(E=e.onBlur)==null||E.call(e,y)},()=>{s.value=!1}),I=(...y)=>{t("entryFocus",...y)};oe(Fe,{currentTabbedId:Ot(n),loop:ie(e,"loop"),tabIndex:b(()=>$(s)?-1:0),rovingFocusGroupRef:a,rovingFocusGroupRootStyle:l,orientation:ie(e,"orientation"),dir:ie(e,"dir"),onItemFocus:f,onItemShiftTab:v,onBlur:i,onFocus:w,onMousedown:m}),de(()=>e.currentTabId,y=>{n.value=y!=null?y:null}),dt(a,Ke,I)}});function En(e,t,o,n,s,d){return k(e.$slots,"default")}var Cn=K(In,[["render",En],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const Mn=G({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:fn,ElRovingFocusGroupImpl:Cn}});function Tn(e,t,o,n,s,d){const a=B("el-roving-focus-group-impl"),r=B("el-focus-group-collection");return S(),te(r,null,{default:u(()=>[h(a,Nt(Pt(e.$attrs)),{default:u(()=>[k(e.$slots,"default")]),_:3},16)]),_:3})}var $n=K(Mn,[["render",Tn],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const kn=G({components:{ElRovingFocusCollectionItem:vn},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:t}){const{currentTabbedId:o,loop:n,onItemFocus:s,onItemShiftTab:d}=A(Fe,void 0),{getItems:a}=A(Be,void 0),r=Ge(),l=T(null),f=ee(i=>{t("mousedown",i)},i=>{e.focusable?s($(r)):i.preventDefault()}),v=ee(i=>{t("focus",i)},()=>{s($(r))}),m=ee(i=>{t("keydown",i)},i=>{const{key:I,shiftKey:y,target:E,currentTarget:U}=i;if(I===C.tab&&y){d();return}if(E!==U)return;const F=bn(i);if(F){i.preventDefault();let O=a().filter(W=>W.focusable).map(W=>W.ref);switch(F){case"last":{O.reverse();break}case"prev":case"next":{F==="prev"&&O.reverse();const W=O.indexOf(U);O=n.value?yn(O,W+1):O.slice(W+1);break}}Ue(()=>{Re(O)})}}),w=b(()=>o.value===$(r));return oe(et,{rovingFocusGroupItemRef:l,tabIndex:b(()=>$(w)?0:-1),handleMousedown:f,handleFocus:v,handleKeydown:m}),{id:r,handleKeydown:m,handleFocus:v,handleMousedown:f}}});function Sn(e,t,o,n,s,d){const a=B("el-roving-focus-collection-item");return S(),te(a,{id:e.id,focusable:e.focusable,active:e.active},{default:u(()=>[k(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var On=K(kn,[["render",Sn],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Nn=re({trigger:wt.trigger,effect:{...It.effect,default:"light"},type:{type:Q(String)},placement:{type:Q(String),default:"bottom"},popperOptions:{type:Q(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:Q([Number,String]),default:0},maxHeight:{type:Q([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:Q(Object)}}),tt=re({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:pt}}),Pn=re({onKeydown:{type:Q(Function)}}),Bn=[C.down,C.pageDown,C.home],nt=[C.up,C.pageUp,C.end],Fn=[...Bn,...nt],{ElCollection:Rn,ElCollectionItem:An,COLLECTION_INJECTION_KEY:Dn,COLLECTION_ITEM_INJECTION_KEY:Ln}=Ze("Dropdown"),Ie=Symbol("elDropdown"),{ButtonGroup:zn}=He,Kn=G({name:"ElDropdown",components:{ElButton:He,ElButtonGroup:zn,ElScrollbar:Ye,ElDropdownCollection:Rn,ElTooltip:Oe,ElRovingFocusGroup:$n,ElOnlyChild:Et,ElIcon:me,ArrowDown:Ve},props:Nn,emits:["visible-change","click","command"],setup(e,{emit:t}){const o=fe(),n=z("dropdown"),{t:s}=Ct(),d=T(),a=T(),r=T(null),l=T(null),f=T(null),v=T(null),m=T(!1),w=[C.enter,C.space,C.down],i=b(()=>({maxHeight:ft(e.maxHeight)})),I=b(()=>[n.m(O.value)]),y=Ge().value,E=b(()=>e.id||y);function U(){F()}function F(){var g;(g=r.value)==null||g.onClose()}function x(){var g;(g=r.value)==null||g.onOpen()}const O=mt();function W(...g){t("command",...g)}function N(){}function H(){const g=$(l);g==null||g.focus(),v.value=null}function q(g){v.value=g}function R(g){m.value||(g.preventDefault(),g.stopImmediatePropagation())}function le(){t("visible-change",!0)}function c(g){(g==null?void 0:g.type)==="keydown"&&l.value.focus()}function p(){t("visible-change",!1)}return oe(Ie,{contentRef:l,role:b(()=>e.role),triggerId:E,isUsingKeyboard:m,onItemEnter:N,onItemLeave:H}),oe("elDropdown",{instance:o,dropdownSize:O,handleClick:U,commandHandler:W,trigger:ie(e,"trigger"),hideOnClick:ie(e,"hideOnClick")}),{t:s,ns:n,scrollbar:f,wrapStyle:i,dropdownTriggerKls:I,dropdownSize:O,triggerId:E,triggerKeys:w,currentTabId:v,handleCurrentTabIdChange:q,handlerMainButtonClick:g=>{t("click",g)},handleEntryFocus:R,handleClose:F,handleOpen:x,handleBeforeShowTooltip:le,handleShowTooltip:c,handleBeforeHideTooltip:p,onFocusAfterTrapped:g=>{var j,J;g.preventDefault(),(J=(j=l.value)==null?void 0:j.focus)==null||J.call(j,{preventScroll:!0})},popperRef:r,contentRef:l,triggeringElementRef:d,referenceElementRef:a}}});function Gn(e,t,o,n,s,d){var a;const r=B("el-dropdown-collection"),l=B("el-roving-focus-group"),f=B("el-scrollbar"),v=B("el-only-child"),m=B("el-tooltip"),w=B("el-button"),i=B("arrow-down"),I=B("el-icon"),y=B("el-button-group");return S(),X("div",{class:Z([e.ns.b(),e.ns.is("disabled",e.disabled)])},[h(m,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(a=e.referenceElementRef)==null?void 0:a.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:"",pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Bt({content:u(()=>[h(f,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:u(()=>[h(l,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:u(()=>[h(r,null,{default:u(()=>[k(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:u(()=>[h(v,{id:e.triggerId,role:"button",tabindex:e.tabindex},{default:u(()=>[k(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(S(),te(y,{key:0},{default:u(()=>[h(w,ae({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:u(()=>[k(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),h(w,ae({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:u(()=>[h(I,{class:Z(e.ns.e("icon"))},{default:u(()=>[h(i)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):ke("v-if",!0)],2)}var Hn=K(Kn,[["render",Gn],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Vn=G({name:"DropdownItemImpl",components:{ElIcon:me},props:tt,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:t}){const o=z("dropdown"),{role:n}=A(Ie,void 0),{collectionItemRef:s}=A(Ln,void 0),{collectionItemRef:d}=A(hn,void 0),{rovingFocusGroupItemRef:a,tabIndex:r,handleFocus:l,handleKeydown:f,handleMousedown:v}=A(et,void 0),m=je(s,d,a),w=b(()=>n.value==="menu"?"menuitem":n.value==="navigation"?"link":"button"),i=ee(I=>{const{code:y}=I;if(y===C.enter||y===C.space)return I.preventDefault(),I.stopImmediatePropagation(),t("clickimpl",I),!0},f);return{ns:o,itemRef:m,dataset:{[Xe]:""},role:w,tabIndex:r,handleFocus:l,handleKeydown:i,handleMousedown:v}}}),Yn=["aria-disabled","tabindex","role"];function Wn(e,t,o,n,s,d){const a=B("el-icon");return S(),X(we,null,[e.divided?(S(),X("li",ae({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):ke("v-if",!0),ue("li",ae({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:t[0]||(t[0]=r=>e.$emit("clickimpl",r)),onFocus:t[1]||(t[1]=(...r)=>e.handleFocus&&e.handleFocus(...r)),onKeydown:t[2]||(t[2]=(...r)=>e.handleKeydown&&e.handleKeydown(...r)),onMousedown:t[3]||(t[3]=(...r)=>e.handleMousedown&&e.handleMousedown(...r)),onPointermove:t[4]||(t[4]=r=>e.$emit("pointermove",r)),onPointerleave:t[5]||(t[5]=r=>e.$emit("pointerleave",r))}),[e.icon?(S(),te(a,{key:0},{default:u(()=>[(S(),te(Ft(e.icon)))]),_:1})):ke("v-if",!0),k(e.$slots,"default")],16,Yn)],64)}var Un=K(Vn,[["render",Wn],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const ot=()=>{const e=A("elDropdown",{}),t=b(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:t}},jn=G({name:"ElDropdownItem",components:{ElDropdownCollectionItem:An,ElRovingFocusItem:On,ElDropdownItemImpl:Un},inheritAttrs:!1,props:tt,emits:["pointermove","pointerleave","click"],setup(e,{emit:t,attrs:o}){const{elDropdown:n}=ot(),s=fe(),d=T(null),a=b(()=>{var i,I;return(I=(i=$(d))==null?void 0:i.textContent)!=null?I:""}),{onItemEnter:r,onItemLeave:l}=A(Ie,void 0),f=ee(i=>(t("pointermove",i),i.defaultPrevented),Le(i=>{var I;e.disabled?l(i):(r(i),i.defaultPrevented||(I=i.currentTarget)==null||I.focus())})),v=ee(i=>(t("pointerleave",i),i.defaultPrevented),Le(i=>{l(i)})),m=ee(i=>(t("click",i),i.type!=="keydown"&&i.defaultPrevented),i=>{var I,y,E;if(e.disabled){i.stopImmediatePropagation();return}(I=n==null?void 0:n.hideOnClick)!=null&&I.value&&((y=n.handleClick)==null||y.call(n)),(E=n.commandHandler)==null||E.call(n,e.command,s,i)}),w=b(()=>({...e,...o}));return{handleClick:m,handlePointerMove:f,handlePointerLeave:v,textContent:a,propsAndAttrs:w}}});function Jn(e,t,o,n,s,d){var a;const r=B("el-dropdown-item-impl"),l=B("el-roving-focus-item"),f=B("el-dropdown-collection-item");return S(),te(f,{disabled:e.disabled,"text-value":(a=e.textValue)!=null?a:e.textContent},{default:u(()=>[h(l,{focusable:!e.disabled},{default:u(()=>[h(r,ae(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:u(()=>[k(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var st=K(jn,[["render",Jn],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const xn=G({name:"ElDropdownMenu",props:Pn,setup(e){const t=z("dropdown"),{_elDropdownSize:o}=ot(),n=o.value,{focusTrapRef:s,onKeydown:d}=A(Mt,void 0),{contentRef:a,role:r,triggerId:l}=A(Ie,void 0),{collectionRef:f,getItems:v}=A(Dn,void 0),{rovingFocusGroupRef:m,rovingFocusGroupRootStyle:w,tabIndex:i,onBlur:I,onFocus:y,onMousedown:E}=A(Fe,void 0),{collectionRef:U}=A(Be,void 0),F=b(()=>[t.b("menu"),t.bm("menu",n==null?void 0:n.value)]),x=je(a,f,s,m,U),O=ee(N=>{var H;(H=e.onKeydown)==null||H.call(e,N)},N=>{const{currentTarget:H,code:q,target:R}=N;if(H.contains(R),C.tab===q&&N.stopImmediatePropagation(),N.preventDefault(),R!==$(a)||!Fn.includes(q))return;const c=v().filter(p=>!p.disabled).map(p=>p.ref);nt.includes(q)&&c.reverse(),Re(c)});return{size:n,rovingFocusGroupRootStyle:w,tabIndex:i,dropdownKls:F,role:r,triggerId:l,dropdownListWrapperRef:x,handleKeydown:N=>{O(N),d(N)},onBlur:I,onFocus:y,onMousedown:E}}}),qn=["role","aria-labelledby"];function Qn(e,t,o,n,s,d){return S(),X("ul",{ref:e.dropdownListWrapperRef,class:Z(e.dropdownKls),style:be(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:t[0]||(t[0]=(...a)=>e.onBlur&&e.onBlur(...a)),onFocus:t[1]||(t[1]=(...a)=>e.onFocus&&e.onFocus(...a)),onKeydown:t[2]||(t[2]=(...a)=>e.handleKeydown&&e.handleKeydown(...a)),onMousedown:t[3]||(t[3]=(...a)=>e.onMousedown&&e.onMousedown(...a))},[k(e.$slots,"default")],46,qn)}var lt=K(xn,[["render",Qn],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Xn=Se(Hn,{DropdownItem:st,DropdownMenu:lt}),Zn=se(st),eo=se(lt);class to{constructor(t,o){this.parent=t,this.domNode=o,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(t){t===this.subMenuItems.length?t=0:t<0&&(t=this.subMenuItems.length-1),this.subMenuItems[t].focus(),this.subIndex=t}addListeners(){const t=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,o=>{o.addEventListener("keydown",n=>{let s=!1;switch(n.code){case C.down:{this.gotoSubIndex(this.subIndex+1),s=!0;break}case C.up:{this.gotoSubIndex(this.subIndex-1),s=!0;break}case C.tab:{he(t,"mouseleave");break}case C.enter:case C.space:{s=!0,n.currentTarget.click();break}}return s&&(n.preventDefault(),n.stopPropagation()),!1})})}}class no{constructor(t,o){this.domNode=t,this.submenu=null,this.submenu=null,this.init(o)}init(t){this.domNode.setAttribute("tabindex","0");const o=this.domNode.querySelector(`.${t}-menu`);o&&(this.submenu=new to(this,o)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",t=>{let o=!1;switch(t.code){case C.down:{he(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),o=!0;break}case C.up:{he(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),o=!0;break}case C.tab:{he(t.currentTarget,"mouseleave");break}case C.enter:case C.space:{o=!0,t.currentTarget.click();break}}o&&t.preventDefault()})}}class oo{constructor(t,o){this.domNode=t,this.init(o)}init(t){const o=this.domNode.childNodes;Array.from(o).forEach(n=>{n.nodeType===1&&new no(n,t)})}}const so=G({name:"ElMenuCollapseTransition",setup(){const e=z("menu");return{listeners:{onBeforeEnter:o=>o.style.opacity="0.2",onEnter(o,n){ve(o,`${e.namespace.value}-opacity-transition`),o.style.opacity="1",n()},onAfterEnter(o){Ce(o,`${e.namespace.value}-opacity-transition`),o.style.opacity=""},onBeforeLeave(o){o.dataset||(o.dataset={}),vt(o,e.m("collapse"))?(Ce(o,e.m("collapse")),o.dataset.oldOverflow=o.style.overflow,o.dataset.scrollWidth=o.clientWidth.toString(),ve(o,e.m("collapse"))):(ve(o,e.m("collapse")),o.dataset.oldOverflow=o.style.overflow,o.dataset.scrollWidth=o.clientWidth.toString(),Ce(o,e.m("collapse"))),o.style.width=`${o.scrollWidth}px`,o.style.overflow="hidden"},onLeave(o){ve(o,"horizontal-collapse-transition"),o.style.width=`${o.dataset.scrollWidth}px`}}}}});function lo(e,t,o,n,s,d){return S(),te(We,ae({mode:"out-in"},e.listeners),{default:u(()=>[k(e.$slots,"default")]),_:3},16)}var ao=K(so,[["render",lo],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function at(e,t){const o=b(()=>{let s=e.parent;const d=[t.value];for(;s.type.name!=="ElMenu";)s.props.index&&d.unshift(s.props.index),s=s.parent;return d});return{parentMenu:b(()=>{let s=e.parent;for(;s&&!["ElMenu","ElSubMenu"].includes(s.type.name);)s=s.parent;return s}),indexPath:o}}function ro(e){return b(()=>{const o=e.backgroundColor;return o?new ht(o).shade(20).toString():""})}const rt=(e,t)=>{const o=z("menu");return b(()=>o.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":ro(e).value||"","active-color":e.activeTextColor||"",level:`${t}`}))},io=re({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6}}),Me="ElSubMenu";var Ae=G({name:Me,props:io,setup(e,{slots:t,expose:o}){const n=fe(),{indexPath:s,parentMenu:d}=at(n,b(()=>e.index)),a=z("menu"),r=z("sub-menu"),l=A("rootMenu");l||_e(Me,"can not inject root menu");const f=A(`subMenu:${d.value.uid}`);f||_e(Me,"can not inject sub menu");const v=T({}),m=T({});let w;const i=T(!1),I=T(),y=T(null),E=b(()=>c.value==="horizontal"&&F.value?"bottom-start":"right-start"),U=b(()=>c.value==="horizontal"&&F.value||c.value==="vertical"&&!l.props.collapse?Ve:gt),F=b(()=>f.level===0),x=b(()=>e.popperAppendToBody===void 0?F.value:Boolean(e.popperAppendToBody)),O=b(()=>l.props.collapse?`${a.namespace.value}-zoom-in-left`:`${a.namespace.value}-zoom-in-top`),W=b(()=>c.value==="horizontal"&&F.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),N=b(()=>l.openedMenus.includes(e.index)),H=b(()=>{let M=!1;return Object.values(v.value).forEach(L=>{L.active&&(M=!0)}),Object.values(m.value).forEach(L=>{L.active&&(M=!0)}),M}),q=b(()=>l.props.backgroundColor||""),R=b(()=>l.props.activeTextColor||""),le=b(()=>l.props.textColor||""),c=b(()=>l.props.mode),p=Pe({index:e.index,indexPath:s,active:H}),_=b(()=>c.value!=="horizontal"?{color:le.value}:{borderBottomColor:H.value?l.props.activeTextColor?R.value:"":"transparent",color:H.value?R.value:le.value}),P=()=>{var M,L,V;return(V=(L=(M=y.value)==null?void 0:M.popperRef)==null?void 0:L.popperInstanceRef)==null?void 0:V.destroy()},g=M=>{M||P()},j=()=>{l.props.menuTrigger==="hover"&&l.props.mode==="horizontal"||l.props.collapse&&l.props.mode==="vertical"||e.disabled||l.handleSubMenuClick({index:e.index,indexPath:s.value,active:H.value})},J=(M,L=e.showTimeout)=>{var V;M.type!=="focus"&&(l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||e.disabled||(f.mouseInChild.value=!0,w==null||w(),{stop:w}=De(()=>{l.openMenu(e.index,s.value)},L),x.value&&((V=d.value.vnode.el)==null||V.dispatchEvent(new MouseEvent("mouseenter")))))},ne=(M=!1)=>{var L,V;l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||(w==null||w(),f.mouseInChild.value=!1,{stop:w}=De(()=>!i.value&&l.closeMenu(e.index,s.value),e.hideTimeout),x.value&&M&&((L=n.parent)==null?void 0:L.type.name)==="ElSubMenu"&&((V=f.handleMouseleave)==null||V.call(f,!0)))};de(()=>l.props.collapse,M=>g(Boolean(M)));{const M=V=>{m.value[V.index]=V},L=V=>{delete m.value[V.index]};oe(`subMenu:${n.uid}`,{addSubMenu:M,removeSubMenu:L,handleMouseleave:ne,mouseInChild:i,level:f.level+1})}return o({opened:N}),ye(()=>{l.addSubMenu(p),f.addSubMenu(p)}),Ne(()=>{f.removeSubMenu(p),l.removeSubMenu(p)}),()=>{var M;const L=[(M=t.title)==null?void 0:M.call(t),Y(me,{class:r.e("icon-arrow")},{default:()=>Y(U.value)})],V=rt(l.props,f.level+1),ct=l.isMenuPopup?Y(Oe,{ref:y,visible:N.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:E.value,teleported:x.value,fallbackPlacements:W.value,transition:O.value,gpuAcceleration:!1},{content:()=>{var ce;return Y("div",{class:[a.m(c.value),a.m("popup-container"),e.popperClass],onMouseenter:Ee=>J(Ee,100),onMouseleave:()=>ne(!0),onFocus:Ee=>J(Ee,100)},[Y("ul",{class:[a.b(),a.m("popup"),a.m(`popup-${E.value}`)],style:V.value},[(ce=t.default)==null?void 0:ce.call(t)])])},default:()=>Y("div",{class:r.e("title"),style:[_.value,{backgroundColor:q.value}],onClick:j},L)}):Y(we,{},[Y("div",{class:r.e("title"),style:[_.value,{backgroundColor:q.value}],ref:I,onClick:j},L),Y(Wt,{},{default:()=>{var ce;return Rt(Y("ul",{role:"menu",class:[a.b(),a.m("inline")],style:V.value},[(ce=t.default)==null?void 0:ce.call(t)]),[[At,N.value]])}})]);return Y("li",{class:[r.b(),r.is("active",H.value),r.is("opened",N.value),r.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:N.value,onMouseenter:J,onMouseleave:()=>ne(!0),onFocus:J},[ct])}}});const uo=re({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:Q(Array),default:()=>_t([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0}}),Te=e=>Array.isArray(e)&&e.every(t=>pe(t)),co={close:(e,t)=>pe(e)&&Te(t),open:(e,t)=>pe(e)&&Te(t),select:(e,t,o,n)=>pe(e)&&Te(t)&&Lt(o)&&(n===void 0||n instanceof Promise)};var po=G({name:"ElMenu",props:uo,emits:co,setup(e,{emit:t,slots:o,expose:n}){const s=fe(),d=s.appContext.config.globalProperties.$router,a=T(),r=z("menu"),l=z("sub-menu"),f=T(-1),v=T(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),m=T(e.defaultActive),w=T({}),i=T({}),I=b(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),y=()=>{const c=m.value&&w.value[m.value];if(!c||e.mode==="horizontal"||e.collapse)return;c.indexPath.forEach(_=>{const P=i.value[_];P&&E(_,P.indexPath)})},E=(c,p)=>{v.value.includes(c)||(e.uniqueOpened&&(v.value=v.value.filter(_=>p.includes(_))),v.value.push(c),t("open",c,p))},U=(c,p)=>{const _=v.value.indexOf(c);_!==-1&&v.value.splice(_,1),t("close",c,p)},F=({index:c,indexPath:p})=>{v.value.includes(c)?U(c,p):E(c,p)},x=c=>{(e.mode==="horizontal"||e.collapse)&&(v.value=[]);const{index:p,indexPath:_}=c;if(!(p===void 0||_===void 0))if(e.router&&d){const P=c.route||p,g=d.push(P).then(j=>(j||(m.value=p),j));t("select",p,_,{index:p,indexPath:_,route:P},g)}else m.value=p,t("select",p,_,{index:p,indexPath:_})},O=c=>{const p=w.value,_=p[c]||m.value&&p[m.value]||p[e.defaultActive];_?m.value=_.index:m.value=c},W=()=>{var c;const p=Array.from((c=a.value.childNodes)!=null?c:[]).filter(M=>M.nodeName!=="#text"||M.nodeValue),_=64,P=Number.parseInt(getComputedStyle(a.value).paddingLeft,10),g=Number.parseInt(getComputedStyle(a.value).paddingRight,10),j=a.value.clientWidth-P-g;let J=0,ne=0;return p.forEach((M,L)=>{J+=M.offsetWidth||0,J<=j-_&&(ne=L+1)}),ne===p.length?-1:ne},N=(c,p=33.34)=>{let _;return()=>{_&&clearTimeout(_),_=setTimeout(()=>{c()},p)}};let H=!0;const q=()=>{const c=()=>{f.value=-1,Ue(()=>{f.value=W()})};H?c():N(c)(),H=!1};de(()=>e.defaultActive,c=>{w.value[c]||(m.value=""),O(c)}),de(()=>e.collapse,c=>{c&&(v.value=[])}),de(w.value,y);let R;Dt(()=>{e.mode==="horizontal"&&e.ellipsis?R=yt(a,q).stop:R==null||R()});{const c=g=>{i.value[g.index]=g},p=g=>{delete i.value[g.index]};oe("rootMenu",Pe({props:e,openedMenus:v,items:w,subMenus:i,activeIndex:m,isMenuPopup:I,addMenuItem:g=>{w.value[g.index]=g},removeMenuItem:g=>{delete w.value[g.index]},addSubMenu:c,removeSubMenu:p,openMenu:E,closeMenu:U,handleMenuItemClick:x,handleSubMenuClick:F})),oe(`subMenu:${s.uid}`,{addSubMenu:c,removeSubMenu:p,mouseInChild:T(!1),level:0})}ye(()=>{e.mode==="horizontal"&&new oo(s.vnode.el,r.namespace.value)}),n({open:p=>{const{indexPath:_}=i.value[p];_.forEach(P=>E(P,_))},close:U,handleResize:q});const le=c=>{const p=Array.isArray(c)?c:[c],_=[];return p.forEach(P=>{Array.isArray(P.children)?_.push(...le(P.children)):_.push(P)}),_};return()=>{var c,p;let _=(p=(c=o.default)==null?void 0:c.call(o))!=null?p:[];const P=[];if(e.mode==="horizontal"&&a.value){const J=le(_),ne=f.value===-1?J:J.slice(0,f.value),M=f.value===-1?[]:J.slice(f.value);(M==null?void 0:M.length)&&e.ellipsis&&(_=ne,P.push(Y(Ae,{index:"sub-menu-more",class:l.e("hide-arrow")},{title:()=>Y(me,{class:l.e("icon-more")},{default:()=>Y(bt)}),default:()=>M})))}const g=rt(e,0),j=Y("ul",{key:String(e.collapse),role:"menubar",ref:a,style:g.value,class:{[r.b()]:!0,[r.m(e.mode)]:!0,[r.m("collapse")]:e.collapse}},[..._,...P]);return e.collapseTransition&&e.mode==="vertical"?Y(ao,()=>j):j}}});const mo=re({index:{type:Q([String,null]),default:null},route:{type:Q([String,Object])},disabled:Boolean}),fo={click:e=>pe(e.index)&&Array.isArray(e.indexPath)},$e="ElMenuItem",vo=G({name:$e,components:{ElTooltip:Oe},props:mo,emits:fo,setup(e,{emit:t}){const o=fe(),n=A("rootMenu"),s=z("menu"),d=z("menu-item");n||_e($e,"can not inject root menu");const{parentMenu:a,indexPath:r}=at(o,ie(e,"index")),l=A(`subMenu:${a.value.uid}`);l||_e($e,"can not inject sub menu");const f=b(()=>e.index===n.activeIndex),v=Pe({index:e.index,indexPath:r,active:f}),m=()=>{e.disabled||(n.handleMenuItemClick({index:e.index,indexPath:r.value,route:e.route}),t("click",v))};return ye(()=>{l.addSubMenu(v),n.addMenuItem(v)}),Ne(()=>{l.removeSubMenu(v),n.removeMenuItem(v)}),{Effect:Tt,parentMenu:a,rootMenu:n,active:f,nsMenu:s,nsMenuItem:d,handleClick:m}}});function ho(e,t,o,n,s,d){const a=B("el-tooltip");return S(),X("li",{class:Z([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:t[0]||(t[0]=(...r)=>e.handleClick&&e.handleClick(...r))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(S(),te(a,{key:0,effect:e.Effect.DARK,placement:"right","fallback-placements":["left"],persistent:""},{content:u(()=>[k(e.$slots,"title")]),default:u(()=>[ue("div",{class:Z(e.nsMenu.be("tooltip","trigger"))},[k(e.$slots,"default")],2)]),_:3},8,["effect"])):(S(),X(we,{key:1},[k(e.$slots,"default"),k(e.$slots,"title")],64))],2)}var it=K(vo,[["render",ho],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const go={title:String},_o="ElMenuItemGroup",bo=G({name:_o,props:go,setup(){return{ns:z("menu-item-group")}}});function yo(e,t,o,n,s,d){return S(),X("li",{class:Z(e.ns.b())},[ue("div",{class:Z(e.ns.e("title"))},[e.$slots.title?k(e.$slots,"title",{key:1}):(S(),X(we,{key:0},[D(zt(e.title),1)],64))],2),ue("ul",null,[k(e.$slots,"default")])],2)}var ut=K(bo,[["render",yo],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const wo=Se(po,{MenuItem:it,MenuItemGroup:ut,SubMenu:Ae}),Io=se(it),Eo=se(ut),Co=se(Ae);const Mo={},To=e=>(Gt("data-v-cbbf8ed6"),e=e(),Ht(),e),$o=D("\u5185\u5BB9\u7BA1\u7406 "),ko=D("\u5206\u7C7B"),So=D("\u65B0\u5EFA\u5206\u7C7B"),Oo=D("\u5206\u7C7B\u5217\u8868"),No=D("\u6587\u7AE0"),Po=D("\u65B0\u5EFA\u6587\u7AE0"),Bo=D("\u6587\u7AE0\u5217\u8868"),Fo=D("\u8BC4\u8BBA"),Ro=D("\u8BC4\u8BBA\u5217\u8868"),Ao=D("\u53CB\u94FE"),Do=D("\u65B0\u5EFA\u53CB\u94FE"),Lo=D("\u53CB\u94FE\u5217\u8868"),zo=D("\u7528\u6237"),Ko=D("\u65B0\u5EFA\u7528\u6237"),Go=D("\u7528\u6237\u5217\u8868"),Ho={class:"toolbar"},Vo=D("View"),Yo=D("Add"),Wo=D("Delete"),Uo=To(()=>ue("span",null,"Tom",-1));function jo(e,t){const o=B("message"),n=me,s=Io,d=Eo,a=Co,r=wo,l=Ye,f=sn,v=B("setting"),m=Zn,w=eo,i=Xn,I=ln,y=B("router-view"),E=on;return S(),te(E,{class:"layout-container-demo",style:{height:"100vh",border:"1px solid #eee"}},{default:u(()=>[h(f,{width:"200px",style:{"background-color":"rgb(238, 241, 246)"}},{default:u(()=>[h(l,null,{default:u(()=>[h(r,{router:"","default-openeds":["1","3"]},{default:u(()=>[h(a,{index:"1"},{title:u(()=>[h(n,null,{default:u(()=>[h(o)]),_:1}),$o]),default:u(()=>[h(d,null,{title:u(()=>[ko]),default:u(()=>[h(s,{index:"/category/create"},{default:u(()=>[So]),_:1}),h(s,{index:"/category/list"},{default:u(()=>[Oo]),_:1})]),_:1}),h(d,null,{title:u(()=>[No]),default:u(()=>[h(s,{index:"/article/create"},{default:u(()=>[Po]),_:1}),h(s,{index:"/article/list"},{default:u(()=>[Bo]),_:1})]),_:1}),h(d,null,{title:u(()=>[Fo]),default:u(()=>[h(s,{index:"/comment/list"},{default:u(()=>[Ro]),_:1})]),_:1}),h(d,null,{title:u(()=>[Ao]),default:u(()=>[h(s,{index:"/friend/create"},{default:u(()=>[Do]),_:1}),h(s,{index:"/friend/list"},{default:u(()=>[Lo]),_:1})]),_:1}),h(d,null,{title:u(()=>[zo]),default:u(()=>[h(s,{index:"/user/create"},{default:u(()=>[Ko]),_:1}),h(s,{index:"/user/list"},{default:u(()=>[Go]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),h(E,null,{default:u(()=>[h(I,{style:{"text-align":"right","font-size":"12px"}},{default:u(()=>[ue("div",Ho,[h(i,null,{dropdown:u(()=>[h(w,null,{default:u(()=>[h(m,null,{default:u(()=>[Vo]),_:1}),h(m,null,{default:u(()=>[Yo]),_:1}),h(m,null,{default:u(()=>[Wo]),_:1})]),_:1})]),default:u(()=>[h(n,{style:{"margin-right":"8px","margin-top":"1px"}},{default:u(()=>[h(v)]),_:1})]),_:1}),Uo])]),_:1}),h(y)]),_:1})]),_:1})}const Xo=Kt(Mo,[["render",jo],["__scopeId","data-v-cbbf8ed6"]]);export{Xo as default};
