import{e as te}from"../chunks/index.CzR0xuCU.js";import{g as ae,j as I,a as b,t as w,$ as oe,i as _,c as i,s as J,b as s}from"../chunks/disclose-version.DBj9Vt0q.js";import{p as se,m as g,A as h,B as re,r as v,a as ne,h as e,s as p,x as j,z as u}from"../chunks/runtime.D9nQNyi8.js";import{i as ie}from"../chunks/if.CfD4apJF.js";import{e as F,s as S,i as G,a as K}from"../chunks/class.ClfF0HVi.js";import{h as N}from"../chunks/html.pu-OIvc1.js";import{c as le}from"../chunks/svelte-component.42KP6Uti.js";import{i as ce}from"../chunks/lifecycle.fbi-k1SI.js";import{M as de}from"../chunks/downloadBlob.DPn4pLDi.js";import{H as L,h as Q}from"../chunks/hljsDefineSvelte.Dj5jkkhw.js";import{D as ve,c as y}from"../chunks/cleanTitle.BUsRZrha.js";import{e as pe}from"../chunks/_examples_ssr.Drnvs0Xw.js";async function ue({fetch:k,params:n}){const d=`${n.slug}.json`,l=await k(d),x=await l.json();if(l.status===200)return{slug:n.slug,content:x,active:"+page"};te(500,`Could not load ${d}: ${x.message}`)}const Me=Object.freeze(Object.defineProperty({__proto__:null,load:ue},Symbol.toStringTag,{value:"Module"}));var me=w('<div class="dek svelte-78pozx"><!></div>'),fe=w("<li> </li>"),_e=w('<div class="contents"><pre class="svelte-78pozx"><!></pre></div>'),ge=w('<div class="main svelte-78pozx" data-label="Server-side"><h1> <a class="edit-repl svelte-78pozx" target="_blank" rel="noreferrer">Edit</a></h1> <div class="chart-hero svelte-78pozx"><!></div> <div class="download svelte-78pozx"><!></div> <!> <div id="pages"><ul id="page-nav" class="svelte-78pozx"></ul> <div id="contents-container" class="svelte-78pozx"><div class="copy svelte-78pozx"></div> <!></div></div></div>');function Te(k,n){se(n,!1);const d=g(),l=g();L.registerLanguage("svelte",Q),Q(L);const x=new de({html:!0,linkify:!0});let z=n.data,m=g(z.slug),o=g(z.content),f=g(z.active);function R(a){return x.render(a)}function U(a,t){const c=t.split(".");let r=c[c.length-1];return r==="csv"&&(r="diff"),L.highlight(a,{language:r}).value}const M=new Map;pe.forEach(a=>{M.set(a.slug.toLowerCase(),a)});function V(){const a=e(d).filter(t=>y(t.title)===e(f))[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",a);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const t=document.createElement("textarea");t.textContent=a,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(c){return console.warn("Copy to clipboard failed.",c),!1}finally{document.body.removeChild(t)}}}h(()=>j(n.data),()=>{p(m,n.data.slug)}),h(()=>j(n.data),()=>{p(o,n.data.content)}),h(()=>j(n.data),()=>{p(f,n.data.active)}),h(()=>e(o),()=>{p(d,[e(o).main].concat(e(o).components).concat(e(o).componentModules).concat(e(o).modules).concat(e(o).componentComponents).concat(e(o).jsons).concat(e(o).csvs))}),h(()=>e(m),()=>{p(l,M.get(e(m).toLowerCase()))}),re(),ce();var T=ge();ae(a=>{v(()=>oe.title=`${_(e(l).title)}`)});var E=i(T),H=i(E),W=s(H),C=s(s(E,!0));v(()=>S(C,"data-slug",e(m).toLowerCase()));var $=i(C);le($,()=>e(l).component,a=>{a($,{})});var q=s(s(C,!0)),X=i(q);ve(X,{get data(){return e(o)},get slug(){return e(m)},ssr:!0});var B=s(s(q,!0));ie(B,()=>e(o).dek,a=>{var t=me(),c=i(t);N(c,()=>R(e(o).dek)),b(a,t)});var O=s(s(B,!0)),P=i(O);F(P,9,()=>e(d),G,(a,t,c)=>{var r=fe();v(()=>K(r,`tab ${_(e(f)===y(u(t).title)?"active":"")} svelte-78pozx`));var D=i(r);v(()=>J(D,u(t).title)),I("click",r,()=>p(f,y(u(t).title)),!1),b(a,r)});var Y=s(s(P,!0)),A=i(Y),Z=s(s(A,!0));F(Z,1,()=>e(d),G,(a,t,c)=>{var r=_e();v(()=>S(r,"style",`display: ${_(e(f)===y(u(t).title)?"block":"none")};`));var D=i(r),ee=i(D);N(ee,()=>U(u(t).contents,u(t).title)),b(a,r)}),v(()=>{J(H,e(l).title),S(W,"href",`https://svelte.dev/repl/${_(e(l).replPath)}`),K(O,`${_(e(o).dek?"has-dek":"")} svelte-78pozx`)}),I("click",A,V,!1),b(k,T),ne()}export{Te as component,Me as universal};
