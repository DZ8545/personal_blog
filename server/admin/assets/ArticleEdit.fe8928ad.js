import{av as Ll,b as Tl,an as Bl,_ as ge,z as hl,u as ie,h as cl,E as ol,w as yl,$ as R,a as Cl,x as Fl,H as zl,G as Ml,i as Dl,B as Pl,as as ql,o as Sl,q as Al}from"./el-button.f1281533.js";import{i as pl,E as Wl,a as Kl}from"./el-form-item.547ce54e.js";/* empty css                 */import{d as fl,s as Rl,C as Nl,i as Hl}from"./el-tag.0d0c3f17.js";import{d as il,E as jl,b as Ql,a as Ul}from"./el-scrollbar.60a3ac4c.js";import{U as _,b as Gl,C as Ol,E as wl,i as fe,a as nl}from"./request.48431868.js";import{d as ue,f as y,o as p,c as L,z as T,m as ee,a as g,u as z,S as F,A as h,k as E,W as j,y as P,b as x,Y as kl,i as $e,an as Le,w as N,g as al,l as Be,ad as ul,a3 as Xl,n as q,v as me,x as sl,X as U,r as M,h as rl,F as vl,ao as ve,ap as tl,L as ml,p as El,a4 as Z,ak as Yl,R as be,al as Te,am as K,aq as Jl,a7 as Zl,T as bl,B as _l}from"./index.3ff6739a.js";const xl=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),en=e=>Ll[e||"default"],ln=e=>({focus:()=>{var l,o;(o=(l=e.value)==null?void 0:l.focus)==null||o.call(l)}}),Il=Tl({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:Bl,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),nn={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},tn={name:"ElTag"},on=ue({...tn,props:Il,emits:nn,setup(e,{emit:l}){const o=e,C=hl(),s=ie("tag"),v=y(()=>{const{type:d,hit:k,effect:c,closable:f,round:O}=o;return[s.b(),s.is("closable",f),s.m(d),s.m(C.value),s.m(c),s.is("hit",k),s.is("round",O)]}),a=d=>{l("close",d)},m=d=>{l("click",d)};return(d,k)=>d.disableTransitions?(p(),L("span",{key:0,class:g(z(v)),style:x({backgroundColor:d.color}),onClick:m},[T("span",{class:g(z(s).e("content"))},[ee(d.$slots,"default")],2),d.closable?(p(),F(z(ol),{key:0,class:g(z(s).e("close")),onClick:j(a,["stop"])},{default:h(()=>[E(z(cl))]),_:1},8,["class","onClick"])):P("v-if",!0)],6)):(p(),F(kl,{key:1,name:`${z(s).namespace.value}-zoom-in-center`,appear:""},{default:h(()=>[T("span",{class:g(z(v)),style:x({backgroundColor:d.color}),onClick:m},[T("span",{class:g(z(s).e("content"))},[ee(d.$slots,"default")],2),d.closable?(p(),F(z(ol),{key:0,class:g(z(s).e("close")),onClick:j(a,["stop"])},{default:h(()=>[E(z(cl))]),_:1},8,["class","onClick"])):P("v-if",!0)],6)]),_:3},8,["name"]))}});var an=ge(on,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const un=yl(an),Vl="ElSelectGroup",Fe="ElSelect";function sn(e,l){const o=$e(Fe),C=$e(Vl,{disabled:!1}),s=y(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),v=y(()=>o.props.multiple?f(o.props.modelValue,e.value):O(e.value,o.props.modelValue)),a=y(()=>{if(o.props.multiple){const b=o.props.modelValue||[];return!v.value&&b.length>=o.props.multipleLimit&&o.props.multipleLimit>0}else return!1}),m=y(()=>e.label||(s.value?"":e.value)),d=y(()=>e.value||e.label||""),k=y(()=>e.disabled||l.groupDisabled||a.value),c=al(),f=(b=[],w)=>{if(s.value){const I=o.props.valueKey;return b&&b.some(A=>Le(R(A,I))===R(w,I))}else return b&&b.includes(w)},O=(b,w)=>{if(s.value){const{valueKey:I}=o.props;return R(b,I)===R(w,I)}else return b===w},V=()=>{!e.disabled&&!C.disabled&&(o.hoverIndex=o.optionsArray.indexOf(c.proxy))};N(()=>m.value,()=>{!e.created&&!o.props.remote&&o.setSelected()}),N(()=>e.value,(b,w)=>{const{remote:I,valueKey:A}=o.props;if(!e.created&&!I){if(A&&typeof b=="object"&&typeof w=="object"&&b[A]===w[A])return;o.setSelected()}}),N(()=>C.disabled,()=>{l.groupDisabled=C.disabled},{immediate:!0});const{queryChange:i}=Le(o);return N(i,b=>{const{query:w}=z(b),I=new RegExp(xl(w),"i");l.visible=I.test(m.value)||e.created,l.visible||o.filteredOptionsCount--}),{select:o,currentLabel:m,currentValue:d,itemSelected:v,isDisabled:k,hoverItem:V}}const rn=ue({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=ie("select"),o=Be({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:C,itemSelected:s,isDisabled:v,select:a,hoverItem:m}=sn(e,o),{visible:d,hover:k}=ul(o),c=al().proxy,f=c.value;a.onOptionCreate(c),Xl(()=>{const{selected:V}=a,b=(a.props.multiple?V:[V]).some(w=>w.value===c.value);q(()=>{a.cachedOptions.get(f)===c&&!b&&a.cachedOptions.delete(f)}),a.onOptionDestroy(f,c)});function O(){e.disabled!==!0&&o.groupDisabled!==!0&&a.handleOptionSelect(c,!0)}return{ns:l,currentLabel:C,itemSelected:s,isDisabled:v,select:a,hoverItem:m,visible:d,hover:k,selectOptionClick:O,states:o}}});function dn(e,l,o,C,s,v){return me((p(),L("li",{class:g([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...a)=>e.hoverItem&&e.hoverItem(...a)),onClick:l[1]||(l[1]=j((...a)=>e.selectOptionClick&&e.selectOptionClick(...a),["stop"]))},[ee(e.$slots,"default",{},()=>[T("span",null,U(e.currentLabel),1)])],34)),[[sl,e.visible]])}var dl=ge(rn,[["render",dn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const cn=ue({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=$e(Fe),l=ie("select"),o=y(()=>e.props.popperClass),C=y(()=>e.props.multiple),s=y(()=>e.props.fitInputWidth),v=M("");function a(){var m;v.value=`${(m=e.selectWrapper)==null?void 0:m.offsetWidth}px`}return rl(()=>{a(),Cl(e.selectWrapper,a)}),{ns:l,minWidth:v,popperClass:o,isMultiple:C,isFitInputWidth:s}}});function pn(e,l,o,C,s,v){return p(),L("div",{class:g([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:x({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ee(e.$slots,"default")],6)}var fn=ge(cn,[["render",pn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function vn(e){const{t:l}=il();return Be({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1})}const mn=(e,l,o)=>{const{t:C}=il(),s=ie("select"),v=M(null),a=M(null),m=M(null),d=M(null),k=M(null),c=M(null),f=M(-1),O=vl({query:""}),V=vl(""),{form:i,formItem:b}=Fl(),w=y(()=>!e.filterable||e.multiple||!l.visible),I=y(()=>e.disabled||(i==null?void 0:i.disabled)),A=y(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!I.value&&l.inputHovering&&n}),S=y(()=>e.remote&&e.filterable?"":e.suffixIcon),ze=y(()=>s.is("reverse",S.value&&l.visible)),he=y(()=>e.remote?300:0),se=y(()=>e.loading?e.loadingText||C("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||C("el.select.noMatch"):l.options.size===0?e.noDataText||C("el.select.noData"):null),B=y(()=>Array.from(l.options.values())),Me=y(()=>Array.from(l.cachedOptions.values())),De=y(()=>{const n=B.value.filter(t=>!t.created).some(t=>t.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ae=hl(),Pe=y(()=>["small"].includes(ae.value)?"small":"default"),qe=y({get(){return l.visible&&se.value!==!1},set(n){l.visible=n}});N([()=>I.value,()=>ae.value,()=>i==null?void 0:i.size],()=>{q(()=>{H()})}),N(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),N(()=>e.modelValue,(n,t)=>{e.multiple&&(H(),n&&n.length>0||a.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",G(l.query))),re(),e.filterable&&!e.multiple&&(l.inputLength=20),!pl(n,t)&&e.validateEvent&&(b==null||b.validate("change").catch(u=>zl()))},{flush:"post",deep:!0}),N(()=>l.visible,n=>{var t,u,r;n?((u=(t=m.value)==null?void 0:t.updatePopper)==null||u.call(t),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(r=a.value)==null||r.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),G(l.query),!e.multiple&&!e.remote&&(O.value.query="",ve(O),ve(V)))):(a.value&&a.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Ae(),q(()=>{a.value&&a.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),o.emit("visible-change",n)}),N(()=>l.options.entries(),()=>{var n,t,u;if(!Ml)return;(t=(n=m.value)==null?void 0:n.updatePopper)==null||t.call(n),e.multiple&&H();const r=((u=k.value)==null?void 0:u.querySelectorAll("input"))||[];Array.from(r).includes(document.activeElement)||re(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Ce()},{flush:"post"}),N(()=>l.hoverIndex,n=>{typeof n=="number"&&n>-1&&(f.value=B.value[n]||{}),B.value.forEach(t=>{t.hover=f.value===t})});const H=()=>{e.collapseTags&&!e.filterable||q(()=>{var n,t;if(!v.value)return;const u=v.value.$el.querySelector("input"),r=d.value,$=en(ae.value||(i==null?void 0:i.size));u.style.height=`${(l.selected.length===0?$:Math.max(r?r.clientHeight+(r.clientHeight>$?6:0):0,$))-2}px`,l.tagInMultiLine=Number.parseFloat(u.style.height)>=$,l.visible&&se.value!==!1&&((t=(n=m.value)==null?void 0:n.updatePopper)==null||t.call(n))})},G=n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(typeof e.filterMethod=="function"||typeof e.remoteMethod=="function")){l.previousQuery=n;return}l.previousQuery=n,q(()=>{var t,u;l.visible&&((u=(t=m.value)==null?void 0:t.updatePopper)==null||u.call(t))}),l.hoverIndex=-1,e.multiple&&e.filterable&&q(()=>{const t=a.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,t):t,ye(),H()}),e.remote&&typeof e.remoteMethod=="function"?(l.hoverIndex=-1,e.remoteMethod(n)):typeof e.filterMethod=="function"?(e.filterMethod(n),ve(V)):(l.filteredOptionsCount=l.optionsCount,O.value.query=n,ve(O),ve(V)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Ce()}},ye=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=a.value.value?"":l.cachedPlaceHolder)},Ce=()=>{const n=B.value.filter(r=>r.visible&&!r.disabled&&!r.states.groupDisabled),t=n.find(r=>r.created),u=n[0];l.hoverIndex=de(B.value,t||u)},re=()=>{var n;if(e.multiple)l.selectedLabel="";else{const u=Se(e.modelValue);(n=u.props)!=null&&n.created?(l.createdLabel=u.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=u.currentLabel,l.selected=u,e.filterable&&(l.query=l.selectedLabel);return}const t=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(u=>{t.push(Se(u))}),l.selected=t,q(()=>{H()})},Se=n=>{let t;const u=tl(n).toLowerCase()==="object",r=tl(n).toLowerCase()==="null",$=tl(n).toLowerCase()==="undefined";for(let Q=l.cachedOptions.size-1;Q>=0;Q--){const W=Me.value[Q];if(u?R(W.value,e.valueKey)===R(n,e.valueKey):W.value===n){t={value:n,currentLabel:W.currentLabel,isDisabled:W.isDisabled};break}}if(t)return t;const Y=u?n.label:!r&&!$?n:"",J={value:n,currentLabel:Y};return e.multiple&&(J.hitState=!1),J},Ae=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(t=>B.value.findIndex(u=>R(u,n)===R(t,n)))):l.hoverIndex=-1:l.hoverIndex=B.value.findIndex(t=>te(t)===te(l.selected))},300)},We=()=>{var n,t;Ke(),(t=(n=m.value)==null?void 0:n.updatePopper)==null||t.call(n),e.multiple&&!e.filterable&&H()},Ke=()=>{var n;l.inputWidth=(n=v.value)==null?void 0:n.$el.getBoundingClientRect().width},Re=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,G(l.query))},Ne=fl(()=>{Re()},he.value),He=fl(n=>{G(n.target.value)},he.value),le=n=>{pl(e.modelValue,n)||o.emit(Ol,n)},je=n=>{if(n.target.value.length<=0&&!ce()){const t=e.modelValue.slice();t.pop(),o.emit(_,t),le(t)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},Qe=(n,t)=>{const u=l.selected.indexOf(t);if(u>-1&&!I.value){const r=e.modelValue.slice();r.splice(u,1),o.emit(_,r),le(r),o.emit("remove-tag",t.value)}n.stopPropagation()},ne=n=>{n.stopPropagation();const t=e.multiple?[]:"";if(typeof t!="string")for(const u of l.selected)u.isDisabled&&t.push(u.value);o.emit(_,t),le(t),l.visible=!1,o.emit("clear")},Oe=(n,t)=>{var u;if(e.multiple){const r=(e.modelValue||[]).slice(),$=de(r,n.value);$>-1?r.splice($,1):(e.multipleLimit<=0||r.length<e.multipleLimit)&&r.push(n.value),o.emit(_,r),le(r),n.created&&(l.query="",G(""),l.inputLength=20),e.filterable&&((u=a.value)==null||u.focus())}else o.emit(_,n.value),le(n.value),l.visible=!1;l.isSilentBlur=t,Ue(),!l.visible&&q(()=>{X(n)})},de=(n=[],t)=>{if(!ml(t))return n.indexOf(t);const u=e.valueKey;let r=-1;return n.some(($,Y)=>Le(R($,u))===R(t,u)?(r=Y,!0):!1),r},Ue=()=>{l.softFocus=!0;const n=a.value||v.value;n&&(n==null||n.focus())},X=n=>{var t,u,r,$,Y;const J=Array.isArray(n)?n[0]:n;let Q=null;if(J!=null&&J.value){const W=B.value.filter(D=>D.value===J.value);W.length>0&&(Q=W[0].$el)}if(m.value&&Q){const W=($=(r=(u=(t=m.value)==null?void 0:t.popperRef)==null?void 0:u.contentRef)==null?void 0:r.querySelector)==null?void 0:$.call(r,`.${s.be("dropdown","wrap")}`);W&&Rl(W,Q)}(Y=c.value)==null||Y.handleScroll()},Ge=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Xe=(n,t)=>{l.options.get(n)===t&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Ye=n=>{n.code!==Dl.backspace&&ce(!1),l.inputLength=a.value.value.length*15+20,H()},ce=n=>{if(!Array.isArray(l.selected))return;const t=l.selected[l.selected.length-1];if(!!t)return n===!0||n===!1?(t.hitState=n,n):(t.hitState=!t.hitState,t.hitState)},pe=n=>{const t=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,q(()=>G(t));else{const u=t[t.length-1]||"";l.isOnComposition=!Gl(u)}},we=()=>{q(()=>X(l.selected))},Je=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),o.emit("focus",n))},ke=()=>{var n;l.visible=!1,(n=v.value)==null||n.blur()},Ze=n=>{q(()=>{l.isSilentBlur?l.isSilentBlur=!1:o.emit("blur",n)}),l.softFocus=!1},_e=n=>{ne(n)},xe=()=>{l.visible=!1},Ee=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Ie=()=>{var n;I.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:l.visible=!l.visible,l.visible&&((n=a.value||v.value)==null||n.focus()))},el=()=>{l.visible?B.value[l.hoverIndex]&&Oe(B.value[l.hoverIndex],void 0):Ie()},te=n=>ml(n.value)?R(n.value,e.valueKey):n.value,ll=y(()=>B.value.filter(n=>n.visible).every(n=>n.disabled)),Ve=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!ll.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const t=B.value[l.hoverIndex];(t.disabled===!0||t.states.groupDisabled===!0||!t.visible)&&Ve(n),q(()=>X(f.value))}};return{optionsArray:B,selectSize:ae,handleResize:We,debouncedOnInputChange:Ne,debouncedQueryChange:He,deletePrevTag:je,deleteTag:Qe,deleteSelected:ne,handleOptionSelect:Oe,scrollToOption:X,readonly:w,resetInputHeight:H,showClose:A,iconComponent:S,iconReverse:ze,showNewOption:De,collapseTagSize:Pe,setSelected:re,managePlaceholder:ye,selectDisabled:I,emptyText:se,toggleLastOptionHitState:ce,resetInputState:Ye,handleComposition:pe,onOptionCreate:Ge,onOptionDestroy:Xe,handleMenuEnter:we,handleFocus:Je,blur:ke,handleBlur:Ze,handleClearClick:_e,handleClose:xe,handleKeydownEscape:Ee,toggleMenu:Ie,selectOption:el,getValueKey:te,navigateOptions:Ve,dropMenuVisible:qe,queryChange:O,groupQueryChange:V,reference:v,input:a,tooltipRef:m,tags:d,selectWrapper:k,scrollbar:c}},gl="ElSelect",bn=ue({name:gl,componentName:gl,components:{ElInput:wl,ElSelectMenu:fn,ElOption:dl,ElTag:un,ElScrollbar:jl,ElTooltip:Ql,ElIcon:ol},directives:{ClickOutside:Nl},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Hl},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:Ul.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:[String,Object],default:Pl},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:[String,Object],default:ql},tagType:{...Il.type,default:"info"},validateEvent:{type:Boolean,default:!0}},emits:[_,Ol,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const o=ie("select"),C=ie("input"),{t:s}=il(),v=vn(e),{optionsArray:a,selectSize:m,readonly:d,handleResize:k,collapseTagSize:c,debouncedOnInputChange:f,debouncedQueryChange:O,deletePrevTag:V,deleteTag:i,deleteSelected:b,handleOptionSelect:w,scrollToOption:I,setSelected:A,resetInputHeight:S,managePlaceholder:ze,showClose:he,selectDisabled:se,iconComponent:B,iconReverse:Me,showNewOption:De,emptyText:ae,toggleLastOptionHitState:Pe,resetInputState:qe,handleComposition:H,onOptionCreate:G,onOptionDestroy:ye,handleMenuEnter:Ce,handleFocus:re,blur:Se,handleBlur:Ae,handleClearClick:We,handleClose:Ke,handleKeydownEscape:Re,toggleMenu:Ne,selectOption:He,getValueKey:le,navigateOptions:je,dropMenuVisible:Qe,reference:ne,input:Oe,tooltipRef:de,tags:Ue,selectWrapper:X,scrollbar:Ge,queryChange:Xe,groupQueryChange:Ye}=mn(e,v,l),{focus:ce}=ln(ne),{inputWidth:pe,selected:we,inputLength:Je,filteredOptionsCount:ke,visible:Ze,softFocus:_e,selectedLabel:xe,hoverIndex:Ee,query:Ie,inputHovering:el,currentPlaceholder:te,menuVisibleOnFocus:ll,isOnComposition:Ve,isSilentBlur:n,options:t,cachedOptions:u,optionsCount:r,prefixWidth:$,tagInMultiLine:Y}=ul(v),J=y(()=>{const D=[o.b()],oe=z(m);return oe&&D.push(o.m(oe)),e.disabled&&D.push(o.m("disabled")),D}),Q=y(()=>({maxWidth:`${z(pe)-32}px`,width:"100%"}));El(Fe,Be({props:e,options:t,optionsArray:a,cachedOptions:u,optionsCount:r,filteredOptionsCount:ke,hoverIndex:Ee,handleOptionSelect:w,onOptionCreate:G,onOptionDestroy:ye,selectWrapper:X,selected:we,setSelected:A,queryChange:Xe,groupQueryChange:Ye})),rl(()=>{v.cachedPlaceHolder=te.value=e.placeholder||s("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(te.value=""),Cl(X,k),e.remote&&e.multiple&&S(),q(()=>{const D=ne.value&&ne.value.$el;if(!!D&&(pe.value=D.getBoundingClientRect().width,l.slots.prefix)){const oe=D.querySelector(`.${C.e("prefix")}`);$.value=Math.max(oe.getBoundingClientRect().width+5,30)}}),A()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(_,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(_,"");const W=y(()=>{var D,oe;return(oe=(D=de.value)==null?void 0:D.popperRef)==null?void 0:oe.contentRef});return{tagInMultiLine:Y,prefixWidth:$,selectSize:m,readonly:d,handleResize:k,collapseTagSize:c,debouncedOnInputChange:f,debouncedQueryChange:O,deletePrevTag:V,deleteTag:i,deleteSelected:b,handleOptionSelect:w,scrollToOption:I,inputWidth:pe,selected:we,inputLength:Je,filteredOptionsCount:ke,visible:Ze,softFocus:_e,selectedLabel:xe,hoverIndex:Ee,query:Ie,inputHovering:el,currentPlaceholder:te,menuVisibleOnFocus:ll,isOnComposition:Ve,isSilentBlur:n,options:t,resetInputHeight:S,managePlaceholder:ze,showClose:he,selectDisabled:se,iconComponent:B,iconReverse:Me,showNewOption:De,emptyText:ae,toggleLastOptionHitState:Pe,resetInputState:qe,handleComposition:H,handleMenuEnter:Ce,handleFocus:re,blur:Se,handleBlur:Ae,handleClearClick:We,handleClose:Ke,handleKeydownEscape:Re,toggleMenu:Ne,selectOption:He,getValueKey:le,navigateOptions:je,dropMenuVisible:Qe,focus:ce,reference:ne,input:Oe,tooltipRef:de,popperPaneRef:W,tags:Ue,selectWrapper:X,scrollbar:Ge,wrapperKls:J,selectTagsStyle:Q,nsSelect:o}}}),gn={class:"select-trigger"},hn=["disabled","autocomplete"],yn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function Cn(e,l,o,C,s,v){const a=Z("el-tag"),m=Z("el-tooltip"),d=Z("el-icon"),k=Z("el-input"),c=Z("el-option"),f=Z("el-scrollbar"),O=Z("el-select-menu"),V=Yl("click-outside");return me((p(),L("div",{ref:"selectWrapper",class:g(e.wrapperKls),onClick:l[22]||(l[22]=j((...i)=>e.toggleMenu&&e.toggleMenu(...i),["stop"]))},[E(m,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:"bottom-start",teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:h(()=>[T("div",gn,[e.multiple?(p(),L("div",{key:0,ref:"tags",class:g(e.nsSelect.e("tags")),style:x(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(p(),L("span",{key:0,class:g([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[E(a,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=i=>e.deleteTag(i,e.selected[0]))},{default:h(()=>[T("span",{class:g(e.nsSelect.e("tags-text")),style:x({maxWidth:e.inputWidth-123+"px"})},U(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(p(),F(a,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:h(()=>[e.collapseTagsTooltip?(p(),F(m,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:h(()=>[T("span",{class:g(e.nsSelect.e("tags-text"))},"+ "+U(e.selected.length-1),3)]),content:h(()=>[T("div",{class:g(e.nsSelect.e("collapse-tags"))},[(p(!0),L(be,null,Te(e.selected.slice(1),(i,b)=>(p(),L("div",{key:b,class:g(e.nsSelect.e("collapse-tag"))},[(p(),F(a,{key:e.getValueKey(i),class:"in-tooltip",closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:w=>e.deleteTag(w,i)},{default:h(()=>[T("span",{class:g(e.nsSelect.e("tags-text")),style:x({maxWidth:e.inputWidth-75+"px"})},U(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(p(),L("span",{key:1,class:g(e.nsSelect.e("tags-text"))},"+ "+U(e.selected.length-1),3))]),_:1},8,["size","type"])):P("v-if",!0)],2)):P("v-if",!0),P(" <div> "),e.collapseTags?P("v-if",!0):(p(),F(kl,{key:1,onAfterLeave:e.resetInputHeight},{default:h(()=>[T("span",{class:g([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(p(!0),L(be,null,Te(e.selected,i=>(p(),F(a,{key:e.getValueKey(i),closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",onClose:b=>e.deleteTag(b,i)},{default:h(()=>[T("span",{class:g(e.nsSelect.e("tags-text")),style:x({maxWidth:e.inputWidth-75+"px"})},U(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),P(" </div> "),e.filterable?me((p(),L("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=i=>e.query=i),type:"text",class:g([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:x({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...i)=>e.handleFocus&&e.handleFocus(...i)),onBlur:l[3]||(l[3]=(...i)=>e.handleBlur&&e.handleBlur(...i)),onKeyup:l[4]||(l[4]=(...i)=>e.managePlaceholder&&e.managePlaceholder(...i)),onKeydown:[l[5]||(l[5]=(...i)=>e.resetInputState&&e.resetInputState(...i)),l[6]||(l[6]=K(j(i=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=K(j(i=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=K((...i)=>e.handleKeydownEscape&&e.handleKeydownEscape(...i),["esc"])),l[9]||(l[9]=K(j((...i)=>e.selectOption&&e.selectOption(...i),["stop","prevent"]),["enter"])),l[10]||(l[10]=K((...i)=>e.deletePrevTag&&e.deletePrevTag(...i),["delete"])),l[11]||(l[11]=K(i=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionupdate:l[13]||(l[13]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionend:l[14]||(l[14]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onInput:l[15]||(l[15]=(...i)=>e.debouncedQueryChange&&e.debouncedQueryChange(...i))},null,46,hn)),[[Jl,e.query]]):P("v-if",!0)],6)):P("v-if",!0),E(k,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=i=>e.selectedLabel=i),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:g([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=K(j(i=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=K(j(i=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),K(j(e.selectOption,["stop","prevent"]),["enter"]),K(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=K(i=>e.visible=!1,["tab"]))],onMouseenter:l[20]||(l[20]=i=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=i=>e.inputHovering=!1)},Zl({suffix:h(()=>[e.iconComponent&&!e.showClose?(p(),F(d,{key:0,class:g([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:h(()=>[(p(),F(bl(e.iconComponent)))]),_:1},8,["class"])):P("v-if",!0),e.showClose&&e.clearIcon?(p(),F(d,{key:1,class:g([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:h(()=>[(p(),F(bl(e.clearIcon)))]),_:1},8,["class","onClick"])):P("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:h(()=>[T("div",yn,[ee(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])])]),content:h(()=>[E(O,null,{default:h(()=>[me(E(f,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:g([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:h(()=>[e.showNewOption?(p(),F(c,{key:0,value:e.query,created:!0},null,8,["value"])):P("v-if",!0),ee(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[sl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(p(),L(be,{key:0},[e.$slots.empty?ee(e.$slots,"empty",{key:0}):(p(),L("p",{key:1,class:g(e.nsSelect.be("dropdown","empty"))},U(e.emptyText),3))],64)):P("v-if",!0)]),_:3})]),_:3},8,["visible","teleported","popper-class","effect","transition","persistent","onShow"])],2)),[[V,e.handleClose,e.popperPaneRef]])}var Sn=ge(bn,[["render",Cn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const On=ue({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=ie("select"),o=M(!0),C=al(),s=M([]);El(Vl,Be({...ul(e)}));const v=$e(Fe);rl(()=>{s.value=a(C.subTree)});const a=d=>{const k=[];return Array.isArray(d.children)&&d.children.forEach(c=>{var f;c.type&&c.type.name==="ElOption"&&c.component&&c.component.proxy?k.push(c.component.proxy):(f=c.children)!=null&&f.length&&k.push(...a(c))}),k},{groupQueryChange:m}=Le(v);return N(m,()=>{o.value=s.value.some(d=>d.visible===!0)}),{visible:o,ns:l}}});function wn(e,l,o,C,s,v){return me((p(),L("ul",{class:g(e.ns.be("group","wrap"))},[T("li",{class:g(e.ns.be("group","title"))},U(e.label),3),T("li",null,[T("ul",{class:g(e.ns.b("group"))},[ee(e.$slots,"default")],2)])],2)),[[sl,e.visible]])}var $l=ge(On,[["render",wn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const kn=yl(Sn,{Option:dl,OptionGroup:$l}),En=Sl(dl);Sl($l);const In={class:"edit"},Vn=_l("\u4FDD\u5B58"),Dn=ue({__name:"ArticleEdit",props:["id"],setup(e){const l=e,o=M({title:"",description:"",categories:[],kind:"",body:"",time:0}),C=M({bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0,undo:!0,redo:!0,trash:!0,save:!0,navigation:!0,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0}),s=M(null);async function v(c,f){const O=new FormData;O.append("file",f),await fe.post("/upload",O).then(V=>{s.value&&s.value.$img2Url(c,V.data.url)})}const a=M([]),m=async()=>{o.value.time=Date.now(),o.value.title?(l.id?(await fe.put(`/articles/${l.id}`,o.value),nl({showClose:!0,message:"\u4FEE\u6539\u6210\u529F!",type:"success"})):(await fe.post("/articles",o.value),nl({showClose:!0,message:"\u4FDD\u5B58\u6210\u529F!",type:"success"})),o.value.title=""):nl.error("\u8BF7\u586B\u5165\u5185\u5BB9\uFF01\uFF01\uFF01")};async function d(){const c=await fe.get(`/article/${l.id}`);o.value=c.data}async function k(){const c=await fe.get("/categories");a.value=c.data}return k(),l.id&&d(),(c,f)=>{const O=En,V=kn,i=Wl,b=wl,w=Z("mavon-editor"),I=Al,A=Kl;return p(),L("div",In,[T("h2",null,U(e.id?"\u7F16\u8F91":"\u521B\u5EFA")+"\u6587\u7AE0",1),E(A,{"label-width":"120px"},{default:h(()=>[E(i,{label:"\u5927\u5206\u7C7B"},{default:h(()=>[E(V,{modelValue:o.value.kind,"onUpdate:modelValue":f[0]||(f[0]=S=>o.value.kind=S),placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px"}},{default:h(()=>[(p(!0),L(be,null,Te(a.value,S=>(p(),F(O,{key:S._id,label:S.name,value:S._id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),E(i,{label:"\u5206\u7C7B"},{default:h(()=>[E(V,{modelValue:o.value.categories,"onUpdate:modelValue":f[1]||(f[1]=S=>o.value.categories=S),multiple:"",placeholder:"\u8BF7\u9009\u62E9",style:{width:"240px"}},{default:h(()=>[(p(!0),L(be,null,Te(a.value,S=>(p(),F(O,{key:S._id,label:S.name,value:S._id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),E(i,{label:"\u6807\u9898"},{default:h(()=>[E(b,{size:"large",modelValue:o.value.title,"onUpdate:modelValue":f[2]||(f[2]=S=>o.value.title=S)},null,8,["modelValue"])]),_:1}),E(i,{label:"\u63CF\u8FF0"},{default:h(()=>[E(b,{size:"large",modelValue:o.value.description,"onUpdate:modelValue":f[3]||(f[3]=S=>o.value.description=S)},null,8,["modelValue"])]),_:1}),E(i,{label:"\u8BE6\u60C5"},{default:h(()=>[E(w,{modelValue:o.value.body,"onUpdate:modelValue":f[4]||(f[4]=S=>o.value.body=S),toolbars:C.value,onImgAdd:v,ref_key:"md",ref:s},null,8,["modelValue","toolbars"])]),_:1}),E(i,null,{default:h(()=>[E(I,{type:"primary",onClick:m},{default:h(()=>[Vn]),_:1})]),_:1})]),_:1})])}}});export{Dn as default};
