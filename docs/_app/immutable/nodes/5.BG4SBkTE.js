import{e as te}from"../chunks/index.CzR0xuCU.js";import{g as ae,j as x,a as k,t as w,$ as se,i as p,c as i,s as J,b as n}from"../chunks/disclose-version.DBj9Vt0q.js";import{p as oe,m as f,A as _,B as ne,r as h,a as re,h as e,s as v,x as S,z as m}from"../chunks/runtime.D9nQNyi8.js";import{i as ie}from"../chunks/if.CfD4apJF.js";import{e as F,i as G,s as K,a as N}from"../chunks/class.ClfF0HVi.js";import{h as Q}from"../chunks/html.pu-OIvc1.js";import{c as le}from"../chunks/svelte-component.42KP6Uti.js";import{i as ce}from"../chunks/lifecycle.fbi-k1SI.js";import{M as de}from"../chunks/downloadBlob.DPn4pLDi.js";import{H as M,h as R}from"../chunks/hljsDefineSvelte.Dj5jkkhw.js";import{D as ve,c as g}from"../chunks/cleanTitle.BUsRZrha.js";import{e as me}from"../chunks/_examples.CkiihXGr.js";async function ue({fetch:q,params:r}){const d=`${r.slug}.json`,l=await q(d),b=await l.json();if(l.status===200)return{slug:r.slug,content:b,active:"+page"};te(500,`Could not load ${d}: ${b.message}`)}const Te=Object.freeze(Object.defineProperty({__proto__:null,load:ue},Symbol.toStringTag,{value:"Module"}));var pe=w('<div class="dek svelte-1bcd2q3"><!></div>'),fe=w("<li> </li>"),_e=w('<div class="contents"><pre class="svelte-1bcd2q3"><!></pre></div>'),he=w('<div class="main svelte-1bcd2q3"><h1> <a class="edit-repl svelte-1bcd2q3" target="_blank" rel="noreferrer">Edit</a></h1> <div class="chart-hero svelte-1bcd2q3"><!></div> <div class="download svelte-1bcd2q3"><!></div> <!> <div id="pages"><ul id="page-nav" class="svelte-1bcd2q3"></ul> <div id="contents-container" class="svelte-1bcd2q3"><div class="copy svelte-1bcd2q3"></div> <!></div></div></div>');function Ee(q,r){oe(r,!1);const d=f(),l=f(),b=new de({html:!0,linkify:!0});M.registerLanguage("svelte",R),R(M);let C=r.data,y=f(C.slug),s=f(C.content),u=f(C.active);function U(a){return b.render(a)}function V(a,t){const c=t.split(".");let o=c[c.length-1];return o==="csv"&&(o="diff"),M.highlight(a,{language:o}).value}const T=new Map;me.forEach(a=>{T.set(a.slug,a)});function E(){const a=e(d).filter(t=>g(t.title)===e(u))[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",a);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const t=document.createElement("textarea");t.textContent=a,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(c){return console.warn("Copy to clipboard failed.",c),!1}finally{document.body.removeChild(t)}}}_(()=>S(r.data),()=>{v(y,r.data.slug)}),_(()=>S(r.data),()=>{v(s,r.data.content)}),_(()=>S(r.data),()=>{v(u,r.data.active)}),_(()=>e(s),()=>{v(d,[e(s).main].concat(e(s).components).concat(e(s).componentModules).concat(e(s).modules).concat(e(s).componentComponents).concat(e(s).jsons).concat(e(s).csvs))}),_(()=>e(y),()=>{v(l,T.get(e(y)))}),ne(),ce();var H=he();ae(a=>{h(()=>se.title=`${p(e(l).title)}`)});var $=i(H),z=i($),W=n(z),B=n(n($,!0)),L=i(B);le(L,()=>e(l).component,a=>{a(L,{})});var O=n(n(B,!0)),X=i(O);ve(X,{get data(){return e(s)},get slug(){return e(y)}});var P=n(n(O,!0));ie(P,()=>e(s).dek,a=>{var t=pe(),c=i(t);Q(c,()=>U(e(s).dek)),k(a,t)});var A=n(n(P,!0)),I=i(A);F(I,9,()=>e(d),G,(a,t,c)=>{var o=fe();h(()=>N(o,`tab ${p(e(u)===g(m(t).title)?"active":"")} svelte-1bcd2q3`));var j=i(o);h(()=>J(j,m(t).title)),x("click",o,()=>v(u,g(m(t).title)),!1),x("keypress",o,()=>v(u,g(m(t).title)),!1),k(a,o)});var Y=n(n(I,!0)),D=i(Y),Z=n(n(D,!0));F(Z,1,()=>e(d),G,(a,t,c)=>{var o=_e();h(()=>K(o,"style",`display: ${p(e(u)===g(m(t).title)?"block":"none")};`));var j=i(o),ee=i(j);Q(ee,()=>V(m(t).contents,m(t).title)),k(a,o)}),h(()=>{J(z,e(l).title),K(W,"href",`https://svelte.dev/repl/${p(e(l).replPath)}`),N(A,`${p(e(s).dek?"has-dek":"")} svelte-1bcd2q3`)}),x("click",D,E,!1),x("keypress",D,E,!1),k(q,H),re()}export{Ee as component,Te as universal};