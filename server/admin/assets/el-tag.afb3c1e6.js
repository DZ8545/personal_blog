import{au as M,a8 as C,a7 as O,H as S,an as F,N as P}from"./el-button.93f8741e.js";var _=/\s/;function $(e){for(var t=e.length;t--&&_.test(e.charAt(t)););return t}var D=/^\s+/;function V(e){return e&&e.slice(0,$(e)+1).replace(D,"")}var B=0/0,z=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,j=/^0o[0-7]+$/i,X=parseInt;function k(e){if(typeof e=="number")return e;if(M(e))return B;if(C(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=C(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=V(e);var n=U.test(e);return n||j.test(e)?X(e.slice(2),n?2:8):z.test(e)?B:+e}var q=function(){return O.Date.now()};const I=q;var G="Expected a function",J=Math.max,K=Math.min;function Y(e,t,n){var r,i,a,c,o,l,f=0,g=!1,m=!1,p=!0;if(typeof e!="function")throw new TypeError(G);t=k(t)||0,C(n)&&(g=!!n.leading,m="maxWait"in n,a=m?J(k(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p);function h(s){var u=r,v=i;return r=i=void 0,f=s,c=e.apply(v,u),c}function T(s){return f=s,o=setTimeout(y,t),g?h(s):c}function L(s){var u=s-l,v=s-f,W=t-u;return m?K(W,a-v):W}function w(s){var u=s-l,v=s-f;return l===void 0||u>=t||u<0||m&&v>=a}function y(){var s=I();if(w(s))return H(s);o=setTimeout(y,L(s))}function H(s){return o=void 0,p&&r?h(s):(r=i=void 0,c)}function R(){o!==void 0&&clearTimeout(o),f=0,r=l=i=o=void 0}function A(){return o===void 0?c:H(I())}function E(){var s=I(),u=w(s);if(r=arguments,i=this,l=s,u){if(o===void 0)return T(l);if(m)return clearTimeout(o),o=setTimeout(y,t),h(l)}return o===void 0&&(o=setTimeout(y,t)),c}return E.cancel=R,E.flush=A,E}let x;const Z=e=>{var t;if(!S)return 0;if(x!==void 0)return x;const n=document.createElement("div");n.className=`${e}-scrollbar__wrap`,n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);const r=n.offsetWidth;n.style.overflow="scroll";const i=document.createElement("div");i.style.width="100%",n.appendChild(i);const a=i.offsetWidth;return(t=n.parentNode)==null||t.removeChild(n),x=r-a,x};function ee(e,t){if(!S)return;if(!t){e.scrollTop=0;return}const n=[];let r=t.offsetParent;for(;r!==null&&e!==r&&e.contains(r);)n.push(r),r=r.offsetParent;const i=t.offsetTop+n.reduce((l,f)=>l+f.offsetTop,0),a=i+t.offsetHeight,c=e.scrollTop,o=c+e.clientHeight;i<c?e.scrollTop=i:a>o&&(e.scrollTop=a-e.clientHeight)}const te=e=>["",...F].includes(e),d=new Map;let N;S&&(document.addEventListener("mousedown",e=>N=e),document.addEventListener("mouseup",e=>{for(const t of d.values())for(const{documentHandler:n}of t)n(e,N)}));function b(e,t){let n=[];return Array.isArray(t.arg)?n=t.arg:P(t.arg)&&n.push(t.arg),function(r,i){const a=t.instance.popperRef,c=r.target,o=i==null?void 0:i.target,l=!t||!t.instance,f=!c||!o,g=e.contains(c)||e.contains(o),m=e===c,p=n.length&&n.some(T=>T==null?void 0:T.contains(c))||n.length&&n.includes(o),h=a&&(a.contains(c)||a.contains(o));l||f||g||m||p||h||t.value(r,i)}}const ne={beforeMount(e,t){d.has(e)||d.set(e,[]),d.get(e).push({documentHandler:b(e,t),bindingFn:t.value})},updated(e,t){d.has(e)||d.set(e,[]);const n=d.get(e),r=n.findIndex(a=>a.bindingFn===t.oldValue),i={documentHandler:b(e,t),bindingFn:t.value};r>=0?n.splice(r,1,i):n.push(i)},unmounted(e){d.delete(e)}};export{ne as C,Y as d,Z as g,te as i,ee as s};
