import{s as c}from"./index.DvIg7qsa.js";import{e as l,u as f,h as _,U as o,s as a,n as i,m as b}from"./runtime.D9nQNyi8.js";function I(e,n,t){let s=t[n];const u=s===void 0;u&&(s={store:null,last_value:null,value:b(o),unsubscribe:i},t[n]=s),(u||s.store!==e)&&(s.unsubscribe(),s.store=e??null,s.unsubscribe=m(e,s.value));const r=_(s.value);return r===o?s.last_value:r}function m(e,n){return e==null?(a(n,void 0),i):c(e,t=>a(n,t))}function g(e,n){return e.set(n),n}function y(e){d(()=>{let n;for(n in e)e[n].unsubscribe()})}function N(e,n,t){return e.set(t),n}function d(e){l(()=>()=>f(e))}export{g as a,N as m,I as s,y as u};
