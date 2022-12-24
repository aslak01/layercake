import{S as Zn,i as Kn,s as xn,e as E,t as T,k as H,c as A,a as I,g as N,d as _,n as G,b as d,f as R,H as m,x as W,ac as bn,ad as jn,u as Y,w as Ce,P as Te,aa as er,z as tr,r as ke,I as nr,C as Ge,j as St,l as Bt,m as rr,o as Mt,v as Tt}from"../../chunks/index-45abbae1.js";import{c as ar}from"../../chunks/_components-60ed5465.js";import"../../chunks/Brush.html-22639520.js";import"../../chunks/index-ed7246b0.js";import"../../chunks/dots-ed0af99d.js";import"../../chunks/ClevelandDotPlot.percent-range.html-b451dc6e.js";var Kt="1.13.2",Nt=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},Pe=Array.prototype,nt=Object.prototype,$t=typeof Symbol!="undefined"?Symbol.prototype:null,lr=Pe.push,we=Pe.slice,de=nt.toString,ur=nt.hasOwnProperty,xt=typeof ArrayBuffer!="undefined",ir=typeof DataView!="undefined",or=Array.isArray,Dt=Object.keys,Ct=Object.create,kt=xt&&ArrayBuffer.isView,sr=isNaN,fr=isFinite,bt=!{toString:null}.propertyIsEnumerable("toString"),Pt=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],cr=Math.pow(2,53)-1;function L(e,t){return t=t==null?e.length-1:+t,function(){for(var n=Math.max(arguments.length-t,0),r=Array(n),a=0;a<n;a++)r[a]=arguments[a+t];switch(t){case 0:return e.call(this,r);case 1:return e.call(this,arguments[0],r);case 2:return e.call(this,arguments[0],arguments[1],r)}var l=Array(t+1);for(a=0;a<t;a++)l[a]=arguments[a];return l[t]=r,e.apply(this,l)}}function ae(e){var t=typeof e;return t==="function"||t==="object"&&!!e}function vr(e){return e===null}function jt(e){return e===void 0}function en(e){return e===!0||e===!1||de.call(e)==="[object Boolean]"}function hr(e){return!!(e&&e.nodeType===1)}function C(e){var t="[object "+e+"]";return function(n){return de.call(n)===t}}var rt=C("String"),tn=C("Number"),pr=C("Date"),gr=C("RegExp"),mr=C("Error"),nn=C("Symbol"),rn=C("ArrayBuffer"),an=C("Function"),dr=Nt.document&&Nt.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof dr!="function"&&(an=function(e){return typeof e=="function"||!1});var V=an,ln=C("Object"),un=ir&&ln(new DataView(new ArrayBuffer(8))),at=typeof Map!="undefined"&&ln(new Map),_r=C("DataView");function yr(e){return e!=null&&V(e.getInt8)&&rn(e.buffer)}var Ne=un?yr:_r,le=or||C("Array");function b(e,t){return e!=null&&ur.call(e,t)}var Qe=C("Arguments");(function(){Qe(arguments)||(Qe=function(e){return b(e,"callee")})})();var lt=Qe;function wr(e){return!nn(e)&&fr(e)&&!isNaN(parseFloat(e))}function on(e){return tn(e)&&sr(e)}function sn(e){return function(){return e}}function fn(e){return function(t){var n=e(t);return typeof n=="number"&&n>=0&&n<=cr}}function cn(e){return function(t){return t==null?void 0:t[e]}}var $e=cn("byteLength"),Er=fn($e),Ar=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function Ir(e){return kt?kt(e)&&!Ne(e):Er(e)&&Ar.test(de.call(e))}var vn=xt?Ir:sn(!1),z=cn("length");function Or(e){for(var t={},n=e.length,r=0;r<n;++r)t[e[r]]=!0;return{contains:function(a){return t[a]===!0},push:function(a){return t[a]=!0,e.push(a)}}}function hn(e,t){t=Or(t);var n=Pt.length,r=e.constructor,a=V(r)&&r.prototype||nt,l="constructor";for(b(e,l)&&!t.contains(l)&&t.push(l);n--;)l=Pt[n],l in e&&e[l]!==a[l]&&!t.contains(l)&&t.push(l)}function $(e){if(!ae(e))return[];if(Dt)return Dt(e);var t=[];for(var n in e)b(e,n)&&t.push(n);return bt&&hn(e,t),t}function Sr(e){if(e==null)return!0;var t=z(e);return typeof t=="number"&&(le(e)||rt(e)||lt(e))?t===0:z($(e))===0}function pn(e,t){var n=$(t),r=n.length;if(e==null)return!r;for(var a=Object(e),l=0;l<r;l++){var u=n[l];if(t[u]!==a[u]||!(u in a))return!1}return!0}function w(e){if(e instanceof w)return e;if(!(this instanceof w))return new w(e);this._wrapped=e}w.VERSION=Kt;w.prototype.value=function(){return this._wrapped};w.prototype.valueOf=w.prototype.toJSON=w.prototype.value;w.prototype.toString=function(){return String(this._wrapped)};function Vt(e){return new Uint8Array(e.buffer||e,e.byteOffset||0,$e(e))}var Rt="[object DataView]";function Ze(e,t,n,r){if(e===t)return e!==0||1/e===1/t;if(e==null||t==null)return!1;if(e!==e)return t!==t;var a=typeof e;return a!=="function"&&a!=="object"&&typeof t!="object"?!1:gn(e,t,n,r)}function gn(e,t,n,r){e instanceof w&&(e=e._wrapped),t instanceof w&&(t=t._wrapped);var a=de.call(e);if(a!==de.call(t))return!1;if(un&&a=="[object Object]"&&Ne(e)){if(!Ne(t))return!1;a=Rt}switch(a){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:+e==0?1/+e===1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return $t.valueOf.call(e)===$t.valueOf.call(t);case"[object ArrayBuffer]":case Rt:return gn(Vt(e),Vt(t),n,r)}var l=a==="[object Array]";if(!l&&vn(e)){var u=$e(e);if(u!==$e(t))return!1;if(e.buffer===t.buffer&&e.byteOffset===t.byteOffset)return!0;l=!0}if(!l){if(typeof e!="object"||typeof t!="object")return!1;var i=e.constructor,o=t.constructor;if(i!==o&&!(V(i)&&i instanceof i&&V(o)&&o instanceof o)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],r=r||[];for(var c=n.length;c--;)if(n[c]===e)return r[c]===t;if(n.push(e),r.push(t),l){if(c=e.length,c!==t.length)return!1;for(;c--;)if(!Ze(e[c],t[c],n,r))return!1}else{var s=$(e),v;if(c=s.length,$(t).length!==c)return!1;for(;c--;)if(v=s[c],!(b(t,v)&&Ze(e[v],t[v],n,r)))return!1}return n.pop(),r.pop(),!0}function Br(e,t){return Ze(e,t)}function Ee(e){if(!ae(e))return[];var t=[];for(var n in e)t.push(n);return bt&&hn(e,t),t}function ut(e){var t=z(e);return function(n){if(n==null)return!1;var r=Ee(n);if(z(r))return!1;for(var a=0;a<t;a++)if(!V(n[e[a]]))return!1;return e!==_n||!V(n[it])}}var it="forEach",mn="has",ot=["clear","delete"],dn=["get",mn,"set"],Mr=ot.concat(it,dn),_n=ot.concat(dn),Tr=["add"].concat(ot,it,mn),Nr=at?ut(Mr):C("Map"),$r=at?ut(_n):C("WeakMap"),Dr=at?ut(Tr):C("Set"),Cr=C("WeakSet");function pe(e){for(var t=$(e),n=t.length,r=Array(n),a=0;a<n;a++)r[a]=e[t[a]];return r}function kr(e){for(var t=$(e),n=t.length,r=Array(n),a=0;a<n;a++)r[a]=[t[a],e[t[a]]];return r}function yn(e){for(var t={},n=$(e),r=0,a=n.length;r<a;r++)t[e[n[r]]]=n[r];return t}function Ke(e){var t=[];for(var n in e)V(e[n])&&t.push(n);return t.sort()}function st(e,t){return function(n){var r=arguments.length;if(t&&(n=Object(n)),r<2||n==null)return n;for(var a=1;a<r;a++)for(var l=arguments[a],u=e(l),i=u.length,o=0;o<i;o++){var c=u[o];(!t||n[c]===void 0)&&(n[c]=l[c])}return n}}var wn=st(Ee),De=st($),En=st(Ee,!0);function Pr(){return function(){}}function An(e){if(!ae(e))return{};if(Ct)return Ct(e);var t=Pr();t.prototype=e;var n=new t;return t.prototype=null,n}function Vr(e,t){var n=An(e);return t&&De(n,t),n}function Rr(e){return ae(e)?le(e)?e.slice():wn({},e):e}function Lr(e,t){return t(e),e}function In(e){return le(e)?e:[e]}w.toPath=In;function Ae(e){return w.toPath(e)}function ft(e,t){for(var n=t.length,r=0;r<n;r++){if(e==null)return;e=e[t[r]]}return n?e:void 0}function On(e,t,n){var r=ft(e,Ae(t));return jt(r)?n:r}function zr(e,t){t=Ae(t);for(var n=t.length,r=0;r<n;r++){var a=t[r];if(!b(e,a))return!1;e=e[a]}return!!n}function ct(e){return e}function _e(e){return e=De({},e),function(t){return pn(t,e)}}function vt(e){return e=Ae(e),function(t){return ft(t,e)}}function Ie(e,t,n){if(t===void 0)return e;switch(n==null?3:n){case 1:return function(r){return e.call(t,r)};case 3:return function(r,a,l){return e.call(t,r,a,l)};case 4:return function(r,a,l,u){return e.call(t,r,a,l,u)}}return function(){return e.apply(t,arguments)}}function Sn(e,t,n){return e==null?ct:V(e)?Ie(e,t,n):ae(e)&&!le(e)?_e(e):vt(e)}function ht(e,t){return Sn(e,t,1/0)}w.iteratee=ht;function F(e,t,n){return w.iteratee!==ht?w.iteratee(e,t):Sn(e,t,n)}function Fr(e,t,n){t=F(t,n);for(var r=$(e),a=r.length,l={},u=0;u<a;u++){var i=r[u];l[i]=t(e[i],i,e)}return l}function Bn(){}function qr(e){return e==null?Bn:function(t){return On(e,t)}}function Ur(e,t,n){var r=Array(Math.max(0,e));t=Ie(t,n,1);for(var a=0;a<e;a++)r[a]=t(a);return r}function xe(e,t){return t==null&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))}var ye=Date.now||function(){return new Date().getTime()};function Mn(e){var t=function(l){return e[l]},n="(?:"+$(e).join("|")+")",r=RegExp(n),a=RegExp(n,"g");return function(l){return l=l==null?"":""+l,r.test(l)?l.replace(a,t):l}}var Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Wr=Mn(Tn),Hr=yn(Tn),Gr=Mn(Hr),Xr=w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Xe=/(.)^/,Yr={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Jr=/\\|'|\r|\n|\u2028|\u2029/g;function Qr(e){return"\\"+Yr[e]}var Zr=/^\s*(\w|\$)+\s*$/;function Kr(e,t,n){!t&&n&&(t=n),t=En({},t,w.templateSettings);var r=RegExp([(t.escape||Xe).source,(t.interpolate||Xe).source,(t.evaluate||Xe).source].join("|")+"|$","g"),a=0,l="__p+='";e.replace(r,function(c,s,v,f,h){return l+=e.slice(a,h).replace(Jr,Qr),a=h+c.length,s?l+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:v?l+=`'+
((__t=(`+v+`))==null?'':__t)+
'`:f&&(l+=`';
`+f+`
__p+='`),c}),l+=`';
`;var u=t.variable;if(u){if(!Zr.test(u))throw new Error("variable is not a bare identifier: "+u)}else l=`with(obj||{}){
`+l+`}
`,u="obj";l=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+l+`return __p;
`;var i;try{i=new Function(u,"_",l)}catch(c){throw c.source=l,c}var o=function(c){return i.call(this,c,w)};return o.source="function("+u+`){
`+l+"}",o}function xr(e,t,n){t=Ae(t);var r=t.length;if(!r)return V(n)?n.call(e):n;for(var a=0;a<r;a++){var l=e==null?void 0:e[t[a]];l===void 0&&(l=n,a=r),e=V(l)?l.call(e):l}return e}var br=0;function jr(e){var t=++br+"";return e?e+t:t}function ea(e){var t=w(e);return t._chain=!0,t}function Nn(e,t,n,r,a){if(!(r instanceof t))return e.apply(n,a);var l=An(e.prototype),u=e.apply(l,a);return ae(u)?u:l}var ge=L(function(e,t){var n=ge.placeholder,r=function(){for(var a=0,l=t.length,u=Array(l),i=0;i<l;i++)u[i]=t[i]===n?arguments[a++]:t[i];for(;a<arguments.length;)u.push(arguments[a++]);return Nn(e,r,this,this,u)};return r});ge.placeholder=w;var $n=L(function(e,t,n){if(!V(e))throw new TypeError("Bind must be called on a function");var r=L(function(a){return Nn(e,r,t,this,n.concat(a))});return r}),q=fn(z);function ue(e,t,n,r){if(r=r||[],!t&&t!==0)t=1/0;else if(t<=0)return r.concat(e);for(var a=r.length,l=0,u=z(e);l<u;l++){var i=e[l];if(q(i)&&(le(i)||lt(i)))if(t>1)ue(i,t-1,n,r),a=r.length;else for(var o=0,c=i.length;o<c;)r[a++]=i[o++];else n||(r[a++]=i)}return r}var ta=L(function(e,t){t=ue(t,!1,!1);var n=t.length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var r=t[n];e[r]=$n(e[r],e)}return e});function na(e,t){var n=function(r){var a=n.cache,l=""+(t?t.apply(this,arguments):r);return b(a,l)||(a[l]=e.apply(this,arguments)),a[l]};return n.cache={},n}var Dn=L(function(e,t,n){return setTimeout(function(){return e.apply(null,n)},t)}),ra=ge(Dn,w,1);function aa(e,t,n){var r,a,l,u,i=0;n||(n={});var o=function(){i=n.leading===!1?0:ye(),r=null,u=e.apply(a,l),r||(a=l=null)},c=function(){var s=ye();!i&&n.leading===!1&&(i=s);var v=t-(s-i);return a=this,l=arguments,v<=0||v>t?(r&&(clearTimeout(r),r=null),i=s,u=e.apply(a,l),r||(a=l=null)):!r&&n.trailing!==!1&&(r=setTimeout(o,v)),u};return c.cancel=function(){clearTimeout(r),i=0,r=a=l=null},c}function la(e,t,n){var r,a,l,u,i,o=function(){var s=ye()-a;t>s?r=setTimeout(o,t-s):(r=null,n||(u=e.apply(i,l)),r||(l=i=null))},c=L(function(s){return i=this,l=s,a=ye(),r||(r=setTimeout(o,t),n&&(u=e.apply(i,l))),u});return c.cancel=function(){clearTimeout(r),r=l=i=null},c}function ua(e,t){return ge(t,e)}function pt(e){return function(){return!e.apply(this,arguments)}}function ia(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}}function oa(e,t){return function(){if(--e<1)return t.apply(this,arguments)}}function Cn(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}}var sa=ge(Cn,2);function kn(e,t,n){t=F(t,n);for(var r=$(e),a,l=0,u=r.length;l<u;l++)if(a=r[l],t(e[a],a,e))return a}function Pn(e){return function(t,n,r){n=F(n,r);for(var a=z(t),l=e>0?0:a-1;l>=0&&l<a;l+=e)if(n(t[l],l,t))return l;return-1}}var gt=Pn(1),Vn=Pn(-1);function Rn(e,t,n,r){n=F(n,r,1);for(var a=n(t),l=0,u=z(e);l<u;){var i=Math.floor((l+u)/2);n(e[i])<a?l=i+1:u=i}return l}function Ln(e,t,n){return function(r,a,l){var u=0,i=z(r);if(typeof l=="number")e>0?u=l>=0?l:Math.max(l+i,u):i=l>=0?Math.min(l+1,i):l+i+1;else if(n&&l&&i)return l=n(r,a),r[l]===a?l:-1;if(a!==a)return l=t(we.call(r,u,i),on),l>=0?l+u:-1;for(l=e>0?u:i-1;l>=0&&l<i;l+=e)if(r[l]===a)return l;return-1}}var zn=Ln(1,gt,Rn),fa=Ln(-1,Vn);function be(e,t,n){var r=q(e)?gt:kn,a=r(e,t,n);if(a!==void 0&&a!==-1)return e[a]}function ca(e,t){return be(e,_e(t))}function J(e,t,n){t=Ie(t,n);var r,a;if(q(e))for(r=0,a=e.length;r<a;r++)t(e[r],r,e);else{var l=$(e);for(r=0,a=l.length;r<a;r++)t(e[l[r]],l[r],e)}return e}function re(e,t,n){t=F(t,n);for(var r=!q(e)&&$(e),a=(r||e).length,l=Array(a),u=0;u<a;u++){var i=r?r[u]:u;l[u]=t(e[i],i,e)}return l}function Fn(e){var t=function(n,r,a,l){var u=!q(n)&&$(n),i=(u||n).length,o=e>0?0:i-1;for(l||(a=n[u?u[o]:o],o+=e);o>=0&&o<i;o+=e){var c=u?u[o]:o;a=r(a,n[c],c,n)}return a};return function(n,r,a,l){var u=arguments.length>=3;return t(n,Ie(r,l,4),a,u)}}var Ye=Fn(1),Lt=Fn(-1);function he(e,t,n){var r=[];return t=F(t,n),J(e,function(a,l,u){t(a,l,u)&&r.push(a)}),r}function va(e,t,n){return he(e,pt(F(t)),n)}function zt(e,t,n){t=F(t,n);for(var r=!q(e)&&$(e),a=(r||e).length,l=0;l<a;l++){var u=r?r[l]:l;if(!t(e[u],u,e))return!1}return!0}function Ft(e,t,n){t=F(t,n);for(var r=!q(e)&&$(e),a=(r||e).length,l=0;l<a;l++){var u=r?r[l]:l;if(t(e[u],u,e))return!0}return!1}function X(e,t,n,r){return q(e)||(e=pe(e)),(typeof n!="number"||r)&&(n=0),zn(e,t,n)>=0}var ha=L(function(e,t,n){var r,a;return V(t)?a=t:(t=Ae(t),r=t.slice(0,-1),t=t[t.length-1]),re(e,function(l){var u=a;if(!u){if(r&&r.length&&(l=ft(l,r)),l==null)return;u=l[t]}return u==null?u:u.apply(l,n)})});function mt(e,t){return re(e,vt(t))}function pa(e,t){return he(e,_e(t))}function qn(e,t,n){var r=-1/0,a=-1/0,l,u;if(t==null||typeof t=="number"&&typeof e[0]!="object"&&e!=null){e=q(e)?e:pe(e);for(var i=0,o=e.length;i<o;i++)l=e[i],l!=null&&l>r&&(r=l)}else t=F(t,n),J(e,function(c,s,v){u=t(c,s,v),(u>a||u===-1/0&&r===-1/0)&&(r=c,a=u)});return r}function ga(e,t,n){var r=1/0,a=1/0,l,u;if(t==null||typeof t=="number"&&typeof e[0]!="object"&&e!=null){e=q(e)?e:pe(e);for(var i=0,o=e.length;i<o;i++)l=e[i],l!=null&&l<r&&(r=l)}else t=F(t,n),J(e,function(c,s,v){u=t(c,s,v),(u<a||u===1/0&&r===1/0)&&(r=c,a=u)});return r}var ma=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Un(e){return e?le(e)?we.call(e):rt(e)?e.match(ma):q(e)?re(e,ct):pe(e):[]}function Wn(e,t,n){if(t==null||n)return q(e)||(e=pe(e)),e[xe(e.length-1)];var r=Un(e),a=z(r);t=Math.max(Math.min(t,a),0);for(var l=a-1,u=0;u<t;u++){var i=xe(u,l),o=r[u];r[u]=r[i],r[i]=o}return r.slice(0,t)}function da(e){return Wn(e,1/0)}function Hn(e,t,n){var r=0;return t=F(t,n),mt(re(e,function(a,l,u){return{value:a,index:r++,criteria:t(a,l,u)}}).sort(function(a,l){var u=a.criteria,i=l.criteria;if(u!==i){if(u>i||u===void 0)return 1;if(u<i||i===void 0)return-1}return a.index-l.index}),"value")}function Ve(e,t){return function(n,r,a){var l=t?[[],[]]:{};return r=F(r,a),J(n,function(u,i){var o=r(u,i,n);e(l,u,o)}),l}}var je=Ve(function(e,t,n){b(e,n)?e[n].push(t):e[n]=[t]}),_a=Ve(function(e,t,n){e[n]=t}),ya=Ve(function(e,t,n){b(e,n)?e[n]++:e[n]=1}),wa=Ve(function(e,t,n){e[n?0:1].push(t)},!0);function Ea(e){return e==null?0:q(e)?e.length:$(e).length}function Aa(e,t,n){return t in n}var Gn=L(function(e,t){var n={},r=t[0];if(e==null)return n;V(r)?(t.length>1&&(r=Ie(r,t[1])),t=Ee(e)):(r=Aa,t=ue(t,!1,!1),e=Object(e));for(var a=0,l=t.length;a<l;a++){var u=t[a],i=e[u];r(i,u,e)&&(n[u]=i)}return n}),Ia=L(function(e,t){var n=t[0],r;return V(n)?(n=pt(n),t.length>1&&(r=t[1])):(t=re(ue(t,!1,!1),String),n=function(a,l){return!X(t,l)}),Gn(e,n,r)});function Xn(e,t,n){return we.call(e,0,Math.max(0,e.length-(t==null||n?1:t)))}function Je(e,t,n){return e==null||e.length<1?t==null||n?void 0:[]:t==null||n?e[0]:Xn(e,e.length-t)}function Be(e,t,n){return we.call(e,t==null||n?1:t)}function Oa(e,t,n){return e==null||e.length<1?t==null||n?void 0:[]:t==null||n?e[e.length-1]:Be(e,Math.max(0,e.length-t))}function Sa(e){return he(e,Boolean)}function Ba(e,t){return ue(e,t,!1)}var Yn=L(function(e,t){return t=ue(t,!0,!0),he(e,function(n){return!X(t,n)})}),Ma=L(function(e,t){return Yn(e,t)});function et(e,t,n,r){en(t)||(r=n,n=t,t=!1),n!=null&&(n=F(n,r));for(var a=[],l=[],u=0,i=z(e);u<i;u++){var o=e[u],c=n?n(o,u,e):o;t&&!n?((!u||l!==c)&&a.push(o),l=c):n?X(l,c)||(l.push(c),a.push(o)):X(a,o)||a.push(o)}return a}var Ta=L(function(e){return et(ue(e,!0,!0))});function Na(e){for(var t=[],n=arguments.length,r=0,a=z(e);r<a;r++){var l=e[r];if(!X(t,l)){var u;for(u=1;u<n&&X(arguments[u],l);u++);u===n&&t.push(l)}}return t}function tt(e){for(var t=e&&qn(e,z).length||0,n=Array(t),r=0;r<t;r++)n[r]=mt(e,r);return n}var $a=L(tt);function Da(e,t){for(var n={},r=0,a=z(e);r<a;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n}function Ca(e,t,n){t==null&&(t=e||0,e=0),n||(n=t<e?-1:1);for(var r=Math.max(Math.ceil((t-e)/n),0),a=Array(r),l=0;l<r;l++,e+=n)a[l]=e;return a}function ka(e,t){if(t==null||t<1)return[];for(var n=[],r=0,a=e.length;r<a;)n.push(we.call(e,r,r+=t));return n}function dt(e,t){return e._chain?w(t).chain():t}function Jn(e){return J(Ke(e),function(t){var n=w[t]=e[t];w.prototype[t]=function(){var r=[this._wrapped];return lr.apply(r,arguments),dt(this,n.apply(w,r))}}),w}J(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=Pe[e];w.prototype[e]=function(){var n=this._wrapped;return n!=null&&(t.apply(n,arguments),(e==="shift"||e==="splice")&&n.length===0&&delete n[0]),dt(this,n)}});J(["concat","join","slice"],function(e){var t=Pe[e];w.prototype[e]=function(){var n=this._wrapped;return n!=null&&(n=t.apply(n,arguments)),dt(this,n)}});var Pa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",VERSION:Kt,restArguments:L,isObject:ae,isNull:vr,isUndefined:jt,isBoolean:en,isElement:hr,isString:rt,isNumber:tn,isDate:pr,isRegExp:gr,isError:mr,isSymbol:nn,isArrayBuffer:rn,isDataView:Ne,isArray:le,isFunction:V,isArguments:lt,isFinite:wr,isNaN:on,isTypedArray:vn,isEmpty:Sr,isMatch:pn,isEqual:Br,isMap:Nr,isWeakMap:$r,isSet:Dr,isWeakSet:Cr,keys:$,allKeys:Ee,values:pe,pairs:kr,invert:yn,functions:Ke,methods:Ke,extend:wn,extendOwn:De,assign:De,defaults:En,create:Vr,clone:Rr,tap:Lr,get:On,has:zr,mapObject:Fr,identity:ct,constant:sn,noop:Bn,toPath:In,property:vt,propertyOf:qr,matcher:_e,matches:_e,times:Ur,random:xe,now:ye,escape:Wr,unescape:Gr,templateSettings:Xr,template:Kr,result:xr,uniqueId:jr,chain:ea,iteratee:ht,partial:ge,bind:$n,bindAll:ta,memoize:na,delay:Dn,defer:ra,throttle:aa,debounce:la,wrap:ua,negate:pt,compose:ia,after:oa,before:Cn,once:sa,findKey:kn,findIndex:gt,findLastIndex:Vn,sortedIndex:Rn,indexOf:zn,lastIndexOf:fa,find:be,detect:be,findWhere:ca,each:J,forEach:J,map:re,collect:re,reduce:Ye,foldl:Ye,inject:Ye,reduceRight:Lt,foldr:Lt,filter:he,select:he,reject:va,every:zt,all:zt,some:Ft,any:Ft,contains:X,includes:X,include:X,invoke:ha,pluck:mt,where:pa,max:qn,min:ga,shuffle:da,sample:Wn,sortBy:Hn,groupBy:je,indexBy:_a,countBy:ya,partition:wa,toArray:Un,size:Ea,pick:Gn,omit:Ia,first:Je,head:Je,take:Je,initial:Xn,last:Oa,rest:Be,tail:Be,drop:Be,compact:Sa,flatten:Ba,without:Ma,uniq:et,unique:et,union:Ta,intersection:Na,difference:Yn,unzip:tt,transpose:tt,zip:$a,object:Da,range:Ca,chunk:ka,mixin:Jn,default:w}),qt=Jn(Pa);qt._=qt;function Ut(e,t,n){const r=e.slice();return r[9]=t[n],r}function Wt(e,t,n){const r=e.slice();return r[12]=t[n][0],r[13]=t[n][1],r}function Ht(e,t,n){const r=e.slice();return r[16]=t[n],r}function Gt(e,t,n){const r=e.slice();return r[9]=t[n],r}function Xt(e){let t,n,r=e[9].name+"",a,l,u,i;return{c(){t=E("li"),n=E("a"),a=T(r),i=H(),this.h()},l(o){t=A(o,"LI",{});var c=I(t);n=A(c,"A",{class:!0,href:!0});var s=I(n);a=N(s,r),s.forEach(_),i=G(c),c.forEach(_),this.h()},h(){d(n,"class",l="section "+(e[1]===Me(e[9].name)?"active":"")+" svelte-otuws7"),d(n,"href",u="/components#"+Me(e[9].name))},m(o,c){R(o,t,c),m(t,n),m(n,a),m(t,i)},p(o,c){c&2&&l!==(l="section "+(o[1]===Me(o[9].name)?"active":"")+" svelte-otuws7")&&d(n,"class",l)},d(o){o&&_(t)}}}function Va(e){let t=e[16].slug+"",n;return{c(){n=T(t)},l(r){n=N(r,t)},m(r,a){R(r,n,a)},p:Ge,i:Ge,o:Ge,d(r){r&&_(n)}}}function Ra(e){let t,n,r;var a=e[16].component;function l(u){return{}}return a&&(t=new a(l())),{c(){t&&St(t.$$.fragment),n=Bt()},l(u){t&&rr(t.$$.fragment,u),n=Bt()},m(u,i){t&&Mt(t,u,i),R(u,n,i),r=!0},p(u,i){if(a!==(a=u[16].component)){if(t){ke();const o=t;Y(o.$$.fragment,1,0,()=>{Tt(o,1)}),Ce()}a?(t=new a(l()),St(t.$$.fragment),W(t.$$.fragment,1),Mt(t,n.parentNode,n)):t=null}},i(u){r||(t&&W(t.$$.fragment,u),r=!0)},o(u){t&&Y(t.$$.fragment,u),r=!1},d(u){u&&_(n),t&&Tt(t,u)}}}function Yt(e){let t,n,r,a,l=(e[16].name||Fa(e[16].slug))+"",u,i,o,c,s=e[16].classes.map(Ua).join("")+"",v,f,h,p,S;const Q=[Ra,Va],k=[];function me(P,M){return P[16].component?0:1}return h=me(e),p=k[h]=Q[h](e),{c(){t=E("div"),n=E("div"),r=E("span"),a=E("a"),u=T(l),o=H(),c=new bn(!1),v=H(),f=E("div"),p.c(),this.h()},l(P){t=A(P,"DIV",{class:!0});var M=I(t);n=A(M,"DIV",{class:!0});var Z=I(n);r=A(Z,"SPAN",{});var ie=I(r);a=A(ie,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var oe=I(a);u=N(oe,l),oe.forEach(_),ie.forEach(_),o=G(Z),c=jn(Z,!1),Z.forEach(_),v=G(M),f=A(M,"DIV",{class:!0});var U=I(f);p.l(U),U.forEach(_),M.forEach(_),this.h()},h(){d(a,"href",i="/components/"+e[16].slug),d(a,"sveltekit:prefetch",""),d(a,"class","svelte-otuws7"),c.a=null,d(n,"class","component-name svelte-otuws7"),d(f,"class","block-container svelte-otuws7"),d(t,"class","component-block svelte-otuws7")},m(P,M){R(P,t,M),m(t,n),m(n,r),m(r,a),m(a,u),m(n,o),c.m(s,n),m(t,v),m(t,f),k[h].m(f,null),S=!0},p(P,M){p.p(P,M)},i(P){S||(W(p),S=!0)},o(P){Y(p),S=!1},d(P){P&&_(t),k[h].d()}}}function Jt(e){let t,n=qa(e[12])+"",r,a,l,u,i=e[13],o=[];for(let s=0;s<i.length;s+=1)o[s]=Yt(Ht(e,i,s));const c=s=>Y(o[s],1,1,()=>{o[s]=null});return{c(){t=E("h4"),r=T(n),a=H(),l=E("div");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){t=A(s,"H4",{class:!0});var v=I(t);r=N(v,n),v.forEach(_),a=G(s),l=A(s,"DIV",{class:!0});var f=I(l);for(let h=0;h<o.length;h+=1)o[h].l(f);f.forEach(_),this.h()},h(){d(t,"class","svelte-otuws7"),d(l,"class","subgroup-blocks")},m(s,v){R(s,t,v),m(t,r),R(s,a,v),R(s,l,v);for(let f=0;f<o.length;f+=1)o[f].m(l,null);u=!0},p(s,v){if(v&4){i=s[13];let f;for(f=0;f<i.length;f+=1){const h=Ht(s,i,f);o[f]?(o[f].p(h,v),W(o[f],1)):(o[f]=Yt(h),o[f].c(),W(o[f],1),o[f].m(l,null))}for(ke(),f=i.length;f<o.length;f+=1)c(f);Ce()}},i(s){if(!u){for(let v=0;v<i.length;v+=1)W(o[v]);u=!0}},o(s){o=o.filter(Boolean);for(let v=0;v<o.length;v+=1)Y(o[v]);u=!1},d(s){s&&_(t),s&&_(a),s&&_(l),Te(o,s)}}}function Qt(e){let t,n=e[9].name+"",r,a,l,u,i,o,c=Object.entries(je(e[9].components,Zt)),s=[];for(let f=0;f<c.length;f+=1)s[f]=Jt(Wt(e,c,f));const v=f=>Y(s[f],1,1,()=>{s[f]=null});return{c(){t=E("h3"),r=T(n),l=H(),u=E("div");for(let f=0;f<s.length;f+=1)s[f].c();i=H(),this.h()},l(f){t=A(f,"H3",{id:!0,class:!0});var h=I(t);r=N(h,n),h.forEach(_),l=G(f),u=A(f,"DIV",{class:!0});var p=I(u);for(let S=0;S<s.length;S+=1)s[S].l(p);i=G(p),p.forEach(_),this.h()},h(){d(t,"id",a=Me(e[9].name)),d(t,"class","svelte-otuws7"),d(u,"class","component-blocks svelte-otuws7")},m(f,h){R(f,t,h),m(t,r),R(f,l,h),R(f,u,h);for(let p=0;p<s.length;p+=1)s[p].m(u,null);m(u,i),o=!0},p(f,h){if(h&4){c=Object.entries(je(f[9].components,Zt));let p;for(p=0;p<c.length;p+=1){const S=Wt(f,c,p);s[p]?(s[p].p(S,h),W(s[p],1)):(s[p]=Jt(S),s[p].c(),W(s[p],1),s[p].m(u,i))}for(ke(),p=c.length;p<s.length;p+=1)v(p);Ce()}},i(f){if(!o){for(let h=0;h<c.length;h+=1)W(s[h]);o=!0}},o(f){s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)Y(s[h]);o=!1},d(f){f&&_(t),f&&_(l),f&&_(u),Te(s,f)}}}function La(e){let t,n,r,a,l,u,i,o,c,s,v,f,h,p,S,Q,k,me,P,M,Z,ie,oe,U,Re,se,Le,ze,j,ee,Fe,_t=!0+"",qe,Ue,We,Oe,fe=e[2],D=[];for(let g=0;g<fe.length;g+=1)D[g]=Xt(Gt(e,fe,g));let te=e[2],O=[];for(let g=0;g<te.length;g+=1)O[g]=Qt(Ut(e,te,g));const Qn=g=>Y(O[g],1,1,()=>{O[g]=null});return{c(){t=E("meta"),n=E("meta"),r=H(),a=E("sidebar"),l=E("ul");for(let g=0;g<D.length;g+=1)D[g].c();u=H(),i=E("div"),o=E("h2"),c=T("Components"),s=H(),v=E("div"),f=E("p"),h=T("Because Layer Cake doesn't come with any pre-built components, here are a few options to get you started. These are meant to serve as starting points for many common chart types. They have a few built-in options to be flexible for handling different scenarios so they can be reused as much as possible. For example, the "),p=E("a"),S=T("Scatter"),Q=T(" components support both linear and ordinal scales so you can use them in configurations like a regular "),k=E("a"),me=T("Scatter plot"),P=T(" but also charts like the "),M=E("a"),Z=T("Time of Day"),ie=T(" plot where the y-scale is made up of groups."),oe=H(),U=E("p"),Re=T("Some componens have HTML, SVG and Canvas versions and those marked as "),se=E("span"),Le=T("%-range"),ze=T(" are optimized to be used server-side with the "),j=E("a"),ee=E("code"),Fe=T("percentRange="),qe=T(_t),Ue=T(" prop."),We=H();for(let g=0;g<O.length;g+=1)O[g].c();this.h()},l(g){const B=er('[data-svelte="svelte-18cdw4k"]',document.head);t=A(B,"META",{name:!0,content:!0}),n=A(B,"META",{name:!0,content:!0}),B.forEach(_),r=G(g),a=A(g,"SIDEBAR",{class:!0});var y=I(a);l=A(y,"UL",{class:!0});var K=I(l);for(let ne=0;ne<D.length;ne+=1)D[ne].l(K);K.forEach(_),y.forEach(_),u=G(g),i=A(g,"DIV",{id:!0,class:!0});var ce=I(i);o=A(ce,"H2",{class:!0});var yt=I(o);c=N(yt,"Components"),yt.forEach(_),s=G(ce),v=A(ce,"DIV",{id:!0,class:!0});var Se=I(v);f=A(Se,"P",{});var x=I(f);h=N(x,"Because Layer Cake doesn't come with any pre-built components, here are a few options to get you started. These are meant to serve as starting points for many common chart types. They have a few built-in options to be flexible for handling different scenarios so they can be reused as much as possible. For example, the "),p=A(x,"A",{href:!0,"sveltekit:prefetch":!0,target:!0,class:!0});var wt=I(p);S=N(wt,"Scatter"),wt.forEach(_),Q=N(x," components support both linear and ordinal scales so you can use them in configurations like a regular "),k=A(x,"A",{href:!0,"sveltekit:prefetch":!0,target:!0,class:!0});var Et=I(k);me=N(Et,"Scatter plot"),Et.forEach(_),P=N(x," but also charts like the "),M=A(x,"A",{href:!0,"sveltekit:prefetch":!0,target:!0,class:!0});var At=I(M);Z=N(At,"Time of Day"),At.forEach(_),ie=N(x," plot where the y-scale is made up of groups."),x.forEach(_),oe=G(Se),U=A(Se,"P",{});var ve=I(U);Re=N(ve,"Some componens have HTML, SVG and Canvas versions and those marked as "),se=A(ve,"SPAN",{class:!0});var It=I(se);Le=N(It,"%-range"),It.forEach(_),ze=N(ve," are optimized to be used server-side with the "),j=A(ve,"A",{href:!0,class:!0});var Ot=I(j);ee=A(Ot,"CODE",{class:!0});var He=I(ee);Fe=N(He,"percentRange="),qe=N(He,_t),He.forEach(_),Ot.forEach(_),Ue=N(ve," prop."),ve.forEach(_),Se.forEach(_),We=G(ce);for(let ne=0;ne<O.length;ne+=1)O[ne].l(ce);ce.forEach(_),this.h()},h(){document.title="LayerCake - Component gallery",d(t,"name","og:title"),d(t,"content","Layer Cake \u2014 Component gallery"),d(n,"name","twitter:title"),d(n,"content","Layer Cake \u2014 Component gallery"),d(l,"class","svelte-otuws7"),d(a,"class","svelte-otuws7"),d(o,"class","svelte-otuws7"),d(p,"href","/components/Scatter.svg.svelte"),d(p,"sveltekit:prefetch",""),d(p,"target","_blank"),d(p,"class","svelte-otuws7"),d(k,"href","/example/Scatter"),d(k,"sveltekit:prefetch",""),d(k,"target","_blank"),d(k,"class","svelte-otuws7"),d(M,"href","/example/Timeplot"),d(M,"sveltekit:prefetch",""),d(M,"target","_blank"),d(M,"class","svelte-otuws7"),d(se,"class","label percent-range svelte-otuws7"),d(ee,"class","svelte-otuws7"),d(j,"href","/guide#percentrange"),d(j,"class","svelte-otuws7"),d(v,"id","dek"),d(v,"class","svelte-otuws7"),d(i,"id","container"),d(i,"class","svelte-otuws7")},m(g,B){m(document.head,t),m(document.head,n),R(g,r,B),R(g,a,B),m(a,l);for(let y=0;y<D.length;y+=1)D[y].m(l,null);R(g,u,B),R(g,i,B),m(i,o),m(o,c),m(i,s),m(i,v),m(v,f),m(f,h),m(f,p),m(p,S),m(f,Q),m(f,k),m(k,me),m(f,P),m(f,M),m(M,Z),m(f,ie),m(v,oe),m(v,U),m(U,Re),m(U,se),m(se,Le),m(U,ze),m(U,j),m(j,ee),m(ee,Fe),m(ee,qe),m(U,Ue),m(i,We);for(let y=0;y<O.length;y+=1)O[y].m(i,null);e[3](i),Oe=!0},p(g,[B]){if(B&6){fe=g[2];let y;for(y=0;y<fe.length;y+=1){const K=Gt(g,fe,y);D[y]?D[y].p(K,B):(D[y]=Xt(K),D[y].c(),D[y].m(l,null))}for(;y<D.length;y+=1)D[y].d(1);D.length=fe.length}if(B&4){te=g[2];let y;for(y=0;y<te.length;y+=1){const K=Ut(g,te,y);O[y]?(O[y].p(K,B),W(O[y],1)):(O[y]=Qt(K),O[y].c(),W(O[y],1),O[y].m(i,null))}for(ke(),y=te.length;y<O.length;y+=1)Qn(y);Ce()}},i(g){if(!Oe){for(let B=0;B<te.length;B+=1)W(O[B]);Oe=!0}},o(g){O=O.filter(Boolean);for(let B=0;B<O.length;B+=1)Y(O[B]);Oe=!1},d(g){_(t),_(n),g&&_(r),g&&_(a),Te(D,g),g&&_(u),g&&_(i),Te(O,g),e[3](null)}}}function za(e){const t=e.split(".").filter(n=>n!=="svelte");return t.shift(),t.length===0?["svg"]:t}function Fa(e){return e.split(".")[0]}function qa(e){return e=="webgl"?"WebGL":e=="canvas"?"Canvas":e.toUpperCase()}function Me(e){return e.toLowerCase().split(" ")[0]}const Zt=e=>e.group,Ua=e=>`<span class="label ${e}">${e.replace("percent-","%-")}</span>`;function Wa(e,t,n){const r=ar.map(f=>({name:`${f.name.replace(/^\w/,h=>h.toUpperCase())} components`,components:Hn(f.components,"slug").map(({name:h,slug:p,component:S})=>{const Q=za(p);return{name:h,slug:p,component:S,classes:Q,group:Q.filter(k=>k!=="percent-range")[0]}})}));let a,l=[],u="axis",i="axis",o=[];tr(()=>{typeof window!="undefined"&&(o=a.querySelectorAll("[id]"),u=window.location.hash.slice(1),n(1,i=u||"axis"),c(),s(),window.addEventListener("scroll",s,!0),window.addEventListener("resize",c,!0),setTimeout(c,1e3),setTimeout(c,5e3))});function c(){if(a){const{top:f}=a.getBoundingClientRect();l=[].map.call(o,h=>h.getBoundingClientRect().top-f)}}function s(){const f=-window.scrollY;let h=o.length;for(;h--;)if(l[h]+f<100){const p=o[h],{id:S}=p;S!==u&&(n(1,i=S),u=S);return}}function v(f){nr[f?"unshift":"push"](()=>{a=f,n(0,a)})}return[a,i,r,v]}class Za extends Zn{constructor(t){super(),Kn(this,t,Wa,La,xn,{})}}export{Za as default};
