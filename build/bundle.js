var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function i(t,e,n,r,o,c,s){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,c);if(i){const o=l(e,n,r,s);t.p(o,i)}}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function $(){return p(" ")}function d(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e,n){t.classList[n?"add":"remove"](e)}let b;function y(t){b=t}function x(t){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(t)}const w=[],v=[],_=[],k=[],E=Promise.resolve();let O=!1;function C(t){_.push(t)}let B=!1;const S=new Set;function j(){if(!B){B=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];y(e),P(e.$$)}for(y(null),w.length=0;v.length;)v.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];S.has(e)||(S.add(e),e())}_.length=0}while(w.length);for(;k.length;)k.pop()();O=!1,B=!1,S.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const A=new Set;let L;function M(){L={r:0,c:[],p:L}}function q(){L.r||r(L.c),L=L.p}function z(t,e){t&&t.i&&(A.delete(t),t.i(e))}function N(t,e,n,r){if(t&&t.o){if(A.has(t))return;A.add(t),L.c.push(()=>{A.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const T="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function D(t){t&&t.c()}function F(t,n,c){const{fragment:s,on_mount:l,on_destroy:i,after_update:u}=t.$$;s&&s.m(n,c),C(()=>{const n=l.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]}),u.forEach(C)}function R(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(w.push(t),O||(O=!0,E.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,o,c,s,l,i,u=[-1]){const f=b;y(e);const g=o.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let $=!1;if(p.ctx=c?c(e,g,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),$&&U(e,t)),n}):[],p.update(),$=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();o.intro&&z(e.$$.fragment),F(e,o.target,o.anchor),j()}y(f)}class H{$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const I=[];function J(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!I.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),I.push(n,e)}if(t){for(let t=0;t<I.length;t+=2)I[t][0](I[t+1]);I.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,l=t){const i=[c,l];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const K=J("/"),Q=J({}),V=t=>{const[e,n]=t.split("?");K.set(e),Q.set(W(n)),window.history.pushState({hash:e},"","#"+t)},W=t=>{const e=new URLSearchParams(t);return Object.fromEntries(e.entries())};function X(t){let e,n,r,o,c;const s=t[3].default,f=function(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}(s,t,t[2],null);return{c(){e=g("a"),f&&f.c(),m(e,"href",n="#"+t[0])},m(n,s){var l;u(n,e,s),f&&f.m(e,null),r=!0,o||(c=d(e,"click",(l=t[1],function(t){return t.preventDefault(),l.call(this,t)})),o=!0)},p(t,[o]){f&&f.p&&4&o&&i(f,s,t,t[2],o,null,null),(!r||1&o&&n!==(n="#"+t[0]))&&m(e,"href",n)},i(t){r||(z(f,t),r=!0)},o(t){N(f,t),r=!1},d(t){t&&a(e),f&&f.d(t),o=!1,c()}}}function Y(t,e,n){let{$$slots:r={},$$scope:o}=e,{path:c}=e;return t.$$set=t=>{"path"in t&&n(0,c=t.path),"$$scope"in t&&n(2,o=t.$$scope)},[c,()=>{V(c)},o,r]}class Z extends H{constructor(t){super(),G(this,t,Y,X,c,{path:0})}}function tt(t){let e;return{c(){e=p("Player")},m(t,n){u(t,e,n)},d(t){t&&a(e)}}}function et(t){let e;return{c(){e=p("Caller")},m(t,n){u(t,e,n)},d(t){t&&a(e)}}}function nt(t){let e,n,r,o,c,s,l;return o=new Z({props:{path:"/player",$$slots:{default:[tt]},$$scope:{ctx:t}}}),s=new Z({props:{path:"/caller",$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){e=g("h1"),e.textContent="Picture Bingo",n=$(),r=g("nav"),D(o.$$.fragment),c=$(),D(s.$$.fragment)},m(t,i){u(t,e,i),u(t,n,i),u(t,r,i),F(o,r,null),function(t,e){t.appendChild(e)}(r,c),F(s,r,null),l=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r)},i(t){l||(z(o.$$.fragment,t),z(s.$$.fragment,t),l=!0)},o(t){N(o.$$.fragment,t),N(s.$$.fragment,t),l=!1},d(t){t&&a(e),t&&a(n),t&&a(r),R(o),R(s)}}}class rt extends H{constructor(t){super(),G(this,t,null,nt,c,{})}}var ot=(t,e)=>(t=>{const e=t.slice();for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*t),r=e[t];e[t]=e[n],e[n]=r}return e})(t).slice(0,e);const ct=["./images/1.png","./images/2.png","./images/3.png","./images/4.png","./images/5.png","./images/6.png","./images/7.png","./images/8.png","./images/9.png","./images/10.png","./images/11.png","./images/12.png","./images/13.png","./images/14.png","./images/15.png","./images/16.png","./images/17.png","./images/18.png","./images/19.png","./images/20.png","./images/21.png","./images/22.png","./images/23.png","./images/24.png"];function st(t){let e,n;return{c(){e=g("img"),e.src!==(n=t[1])&&m(e,"src",n),m(e,"alt",""),m(e,"class","svelte-3qb0ma")},m(t,n){u(t,e,n)},p(t,r){2&r&&e.src!==(n=t[1])&&m(e,"src",n)},d(t){t&&a(e)}}}function lt(e){let n,r,o,c=e[1]&&st(e);return{c(){n=g("div"),c&&c.c(),m(n,"class","cell svelte-3qb0ma"),h(n,"selected",e[0]),h(n,"selectable",e[2])},m(t,s){u(t,n,s),c&&c.m(n,null),r||(o=d(n,"click",e[3]),r=!0)},p(t,[e]){t[1]?c?c.p(t,e):(c=st(t),c.c(),c.m(n,null)):c&&(c.d(1),c=null),1&e&&h(n,"selected",t[0]),4&e&&h(n,"selectable",t[2])},i:t,o:t,d(t){t&&a(n),c&&c.d(),r=!1,o()}}}function it(t,e,n){let{image:r}=e,{selectable:o=!1}=e,{selected:c=!1}=e;return t.$$set=t=>{"image"in t&&n(1,r=t.image),"selectable"in t&&n(2,o=t.selectable),"selected"in t&&n(0,c=t.selected)},[c,r,o,()=>{o&&n(0,c=!c)}]}class ut extends H{constructor(t){super(),G(this,t,it,lt,c,{image:1,selectable:2,selected:0})}}function at(t,e,n){const r=t.slice();return r[1]=e[n],r}function ft(e){let n,r;return n=new ut({props:{image:e[0].indexOf(e[1])>-1?e[1]:"",selectable:e[0].indexOf(e[1])>-1}}),{c(){D(n.$$.fragment)},m(t,e){F(n,t,e),r=!0},p:t,i(t){r||(z(n.$$.fragment,t),r=!0)},o(t){N(n.$$.fragment,t),r=!1},d(t){R(n,t)}}}function gt(t){let e;return{c(){e=p("Back")},m(t,n){u(t,e,n)},d(t){t&&a(e)}}}function pt(t){let e,n,r,o,c,s,l,i=ct,p=[];for(let e=0;e<i.length;e+=1)p[e]=ft(at(t,i,e));const d=t=>N(p[t],1,1,()=>{p[t]=null});return s=new Z({props:{path:"/",$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){e=g("h1"),e.textContent="Player",n=$(),r=g("div");for(let t=0;t<p.length;t+=1)p[t].c();o=$(),c=g("div"),D(s.$$.fragment),m(r,"class","grid svelte-1zauhb")},m(t,i){u(t,e,i),u(t,n,i),u(t,r,i);for(let t=0;t<p.length;t+=1)p[t].m(r,null);u(t,o,i),u(t,c,i),F(s,c,null),l=!0},p(t,[e]){if(1&e){let n;for(i=ct,n=0;n<i.length;n+=1){const o=at(t,i,n);p[n]?(p[n].p(o,e),z(p[n],1)):(p[n]=ft(o),p[n].c(),z(p[n],1),p[n].m(r,null))}for(M(),n=i.length;n<p.length;n+=1)d(n);q()}const n={};16&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){if(!l){for(let t=0;t<i.length;t+=1)z(p[t]);z(s.$$.fragment,t),l=!0}},o(t){p=p.filter(Boolean);for(let t=0;t<p.length;t+=1)N(p[t]);N(s.$$.fragment,t),l=!1},d(t){t&&a(e),t&&a(n),t&&a(r),f(p,t),t&&a(o),t&&a(c),R(s)}}}function $t(t){return[ot(ct,6)]}class dt extends H{constructor(t){super(),G(this,t,$t,pt,c,{})}}function mt(t,e,n){const r=t.slice();return r[3]=e[n],r}function ht(t){let e,n;return e=new ut({props:{image:t[3],selected:t[0].indexOf(t[3])>-1}}),{c(){D(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.selected=t[0].indexOf(t[3])>-1),e.$set(r)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function bt(t){let e;return{c(){e=p("Back")},m(t,n){u(t,e,n)},d(t){t&&a(e)}}}function yt(t){let e,n,r,o,c,s,l,i,p,h,b,y=ct,x=[];for(let e=0;e<y.length;e+=1)x[e]=ht(mt(t,y,e));const w=t=>N(x[t],1,1,()=>{x[t]=null});return i=new Z({props:{path:"/",$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){e=g("h1"),e.textContent="Caller",n=$(),r=g("button"),r.textContent="Select",o=$(),c=g("div");for(let t=0;t<x.length;t+=1)x[t].c();s=$(),l=g("div"),D(i.$$.fragment),m(c,"class","grid svelte-1zauhb")},m(a,f){u(a,e,f),u(a,n,f),u(a,r,f),u(a,o,f),u(a,c,f);for(let t=0;t<x.length;t+=1)x[t].m(c,null);u(a,s,f),u(a,l,f),F(i,l,null),p=!0,h||(b=d(r,"click",t[1]),h=!0)},p(t,[e]){if(1&e){let n;for(y=ct,n=0;n<y.length;n+=1){const r=mt(t,y,n);x[n]?(x[n].p(r,e),z(x[n],1)):(x[n]=ht(r),x[n].c(),z(x[n],1),x[n].m(c,null))}for(M(),n=y.length;n<x.length;n+=1)w(n);q()}const n={};64&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n)},i(t){if(!p){for(let t=0;t<y.length;t+=1)z(x[t]);z(i.$$.fragment,t),p=!0}},o(t){x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)N(x[t]);N(i.$$.fragment,t),p=!1},d(t){t&&a(e),t&&a(n),t&&a(r),t&&a(o),t&&a(c),f(x,t),t&&a(s),t&&a(l),R(i),h=!1,b()}}}function xt(t,e,n){const r=ot(ct,ct.length);let o=[];return[o,()=>{n(0,o=[...o,r.pop()])}]}class wt extends H{constructor(t){super(),G(this,t,xt,yt,c,{})}}const{window:vt}=T;function _t(t){let e,n,r,o,c;var s=t[1][""+t[0]];return s&&(n=new s({})),{c(){e=g("main"),n&&D(n.$$.fragment),m(e,"class","svelte-myln10")},m(s,l){u(s,e,l),n&&F(n,e,null),r=!0,o||(c=d(vt,"popstate",t[2]),o=!0)},p(t,[r]){if(s!==(s=t[1][""+t[0]])){if(n){M();const t=n;N(t.$$.fragment,1,0,()=>{R(t,1)}),q()}s?(n=new s({}),D(n.$$.fragment),z(n.$$.fragment,1),F(n,e,null)):n=null}},i(t){r||(n&&z(n.$$.fragment,t),r=!0)},o(t){n&&N(n.$$.fragment,t),r=!1},d(t){t&&a(e),n&&R(n),o=!1,c()}}}function kt(t,e,n){let r;s(t,K,t=>n(0,r=t));const o={"/":rt,"/player":dt,"/caller":wt};x(()=>{history.state||window.history.replaceState({hash:""},"","#/"),V(window.location.hash.substr(1))});return[r,o,t=>{V(t.state.hash)}]}return new class extends H{constructor(t){super(),G(this,t,kt,_t,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
