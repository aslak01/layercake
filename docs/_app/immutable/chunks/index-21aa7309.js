function $(){}const Mt=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function J(){return Object.create(null)}function T(t){t.forEach(X)}function Y(t){return typeof t=="function"}function Ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function dt(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function jt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function zt(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?ft(n.ctx.slice(),t[1](i(e))):n.ctx}function Dt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)o[a]=e.dirty[a]|s[a];return o}return e.dirty|s}return e.dirty}function Lt(t,e,n,i,s,o){if(s){const r=Z(e,n,i,o);t.p(r,s)}}function Pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Bt(t){return t??""}function Wt(t,e,n){return t.set(n),e}const tt=typeof window<"u";let qt=tt?()=>window.performance.now():()=>Date.now(),et=tt?t=>requestAnimationFrame(t):$;const w=new Set;function nt(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&et(nt)}function Ot(t){let e;return w.size===0&&et(nt),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let j=!1;function ht(){j=!0}function mt(){j=!1}function pt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:pt(1,s,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const o=[],r=[];let a=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);a>=c;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);o.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<o.length&&r[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(r[c],f)}}function gt(t,e){t.appendChild(e)}function wt(t,e){if(j){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function bt(t,e,n){t.insertBefore(e,n||null)}function xt(t,e,n){j&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function Ft(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Gt(){return G(" ")}function It(){return G("")}function K(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Rt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Kt(t){return t===""?null:+t}function $t(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,s=!1){st(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ot(t,e,n,i){return rt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||o.push(a.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Qt(t,e,n){return ot(t,e,n,F)}function Ut(t,e,n){return ot(t,e,n,it)}function vt(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function Vt(t){return vt(t," ")}function Q(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Xt(t,e){const n=Q(t,"HTML_TAG_START",0),i=Q(t,"HTML_TAG_END",n);if(n===i)return new U(void 0,e);st(t);const s=t.splice(n,i-n+1);v(s[0]),v(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new U(o,e)}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e){t.value=e??""}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ee(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function ne(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let k;function Et(){if(k===void 0){k=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{k=!0}}return k}function ie(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=F("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Et();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=K(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=K(i.contentWindow,"resize",e)}),gt(t,i),()=>{(s||o&&i.contentWindow)&&o(),v(i)}}function se(t,e,n){t.classList[n?"add":"remove"](e)}function Tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function re(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class At{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=it(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)bt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class U extends At{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)xt(this.t,this.n[n],e)}}function oe(t,e){return new t(e)}let E;function x(t){E=t}function A(){if(!E)throw new Error("Function called outside component initialization");return E}function ce(t){A().$$.on_mount.push(t)}function le(t){A().$$.after_update.push(t)}function ae(){const t=A();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=Tt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function ue(t,e){return A().$$.context.set(t,e),e}function fe(t){return A().$$.context.get(t)}const b=[],V=[],M=[],W=[],ct=Promise.resolve();let q=!1;function lt(){q||(q=!0,ct.then(at))}function de(){return lt(),ct}function O(t){M.push(t)}function _e(t){W.push(t)}const B=new Set;let C=0;function at(){const t=E;do{for(;C<b.length;){const e=b[C];C++,x(e),Nt(e.$$)}for(x(null),b.length=0,C=0;V.length;)V.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];B.has(n)||(B.add(n),n())}M.length=0}while(b.length);for(;W.length;)W.pop()();q=!1,B.clear(),x(t)}function Nt(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const H=new Set;let g;function he(){g={r:0,c:[],p:g}}function me(){g.r||T(g.c),g=g.p}function ut(t,e){t&&t.i&&(H.delete(t),t.i(e))}function pe(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),g.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ye=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ge(t,e){t.d(1),e.delete(t.key)}function we(t,e,n,i,s,o,r,a,c,l,f,_){let d=t.length,m=o.length,h=d;const z={};for(;h--;)z[t[h].key]=h;const N=[],D=new Map,L=new Map;for(h=m;h--;){const u=_(s,o,h),p=n(u);let y=r.get(p);y?i&&y.p(u,e):(y=l(p,u),y.c()),D.set(p,N[h]=y),p in z&&L.set(p,Math.abs(h-z[p]))}const I=new Set,R=new Set;function P(u){ut(u,1),u.m(a,f),r.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=N[m-1],p=t[d-1],y=u.key,S=p.key;u===p?(f=u.first,d--,m--):D.has(S)?!r.has(y)||I.has(y)?P(u):R.has(S)?d--:L.get(y)>L.get(S)?(R.add(y),P(u)):(I.add(S),d--):(c(p,r),d--)}for(;d--;){const u=t[d];D.has(u.key)||c(u,r)}for(;m;)P(N[m-1]);return N}function be(t,e,n,i){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,i===void 0&&n(t.$$.ctx[s]))}function xe(t){t&&t.c()}function $e(t,e){t&&t.l(e)}function St(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||O(()=>{const r=t.$$.on_mount.map(X).filter(Y);t.$$.on_destroy?t.$$.on_destroy.push(...r):T(r),t.$$.on_mount=[]}),o.forEach(O)}function kt(t,e){const n=t.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(t,e){t.$$.dirty[0]===-1&&(b.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,i,s,o,r,a=[-1]){const c=E;x(t);const l=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&s(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&Ct(t,_)),d}):[],l.update(),f=!0,T(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){ht();const _=$t(e.target);l.fragment&&l.fragment.l(_),_.forEach(v)}else l.fragment&&l.fragment.c();e.intro&&ut(t.$$.fragment),St(t,e.target,e.anchor,e.customElement),mt(),at()}x(c)}class Ee{$destroy(){kt(this,1),this.$destroy=$}$on(e,n){if(!Y(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{it as $,kt as A,de as B,$ as C,_t as D,T as E,Y as F,be as G,O as H,Bt as I,wt as J,ee as K,K as L,_e as M,Ft as N,jt as O,ne as P,zt as Q,Lt as R,Ee as S,Pt as T,Dt as U,re as V,se as W,U as X,Xt as Y,ye as Z,fe as _,Gt as a,Ut as a0,Wt as a1,Zt as a2,Kt as a3,we as a4,ge as a5,ae as a6,ft as a7,qt as a8,Ot as a9,Mt as aa,ue as ab,ie as ac,Rt as ad,xt as b,Vt as c,me as d,It as e,ut as f,he as g,v as h,ve as i,le as j,F as k,Qt as l,$t as m,Jt as n,ce as o,te as p,G as q,vt as r,Ht as s,pe as t,Yt as u,V as v,oe as w,xe as x,$e as y,St as z};
