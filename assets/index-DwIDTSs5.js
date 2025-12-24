(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ku(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const $e={},Ur=[],kn=()=>{},Wm=()=>!1,gl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gu=t=>t.startsWith("onUpdate:"),gt=Object.assign,Qu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},WE=Object.prototype.hasOwnProperty,xe=(t,e)=>WE.call(t,e),ce=Array.isArray,Br=t=>No(t)==="[object Map]",ai=t=>No(t)==="[object Set]",Jf=t=>No(t)==="[object Date]",Ee=t=>typeof t=="function",Ze=t=>typeof t=="string",Bn=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Km=t=>(Ue(t)||Ee(t))&&Ee(t.then)&&Ee(t.catch),Gm=Object.prototype.toString,No=t=>Gm.call(t),KE=t=>No(t).slice(8,-1),Qm=t=>No(t)==="[object Object]",_l=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qi=Ku(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},GE=/-\w/g,hn=yl(t=>t.replace(GE,e=>e.slice(1).toUpperCase())),QE=/\B([A-Z])/g,qs=yl(t=>t.replace(QE,"-$1").toLowerCase()),vl=yl(t=>t.charAt(0).toUpperCase()+t.slice(1)),wc=yl(t=>t?`on${vl(t)}`:""),Ns=(t,e)=>!Object.is(t,e),Ta=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Jm=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},El=t=>{const e=parseFloat(t);return isNaN(e)?t:e},JE=t=>{const e=Ze(t)?Number(t):NaN;return isNaN(e)?t:e};let Yf;const wl=()=>Yf||(Yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oo(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ze(s)?ew(s):Oo(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ze(t)||Ue(t))return t}const YE=/;(?![^(]*\))/g,XE=/:([^]+)/,ZE=/\/\*[^]*?\*\//g;function ew(t){const e={};return t.replace(ZE,"").split(YE).forEach(n=>{if(n){const s=n.split(XE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function We(t){let e="";if(Ze(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const s=We(t[n]);s&&(e+=s+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nw=Ku(tw);function Ym(t){return!!t||t===""}function sw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Do(t[s],e[s]);return n}function Do(t,e){if(t===e)return!0;let n=Jf(t),s=Jf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Bn(t),s=Bn(e),n||s)return t===e;if(n=ce(t),s=ce(e),n||s)return n&&s?sw(t,e):!1;if(n=Ue(t),s=Ue(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Do(t[o],e[o]))return!1}}return String(t)===String(e)}function Ju(t,e){return t.findIndex(n=>Do(n,e))}const Xm=t=>!!(t&&t.__v_isRef===!0),nt=t=>Ze(t)?t:t==null?"":ce(t)||Ue(t)&&(t.toString===Gm||!Ee(t.toString))?Xm(t)?nt(t.value):JSON.stringify(t,Zm,2):String(t),Zm=(t,e)=>Xm(e)?Zm(t,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Tc(s,i)+" =>"]=r,n),{})}:ai(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tc(n))}:Bn(e)?Tc(e):Ue(e)&&!ce(e)&&!Qm(e)?String(e):e,Tc=(t,e="")=>{var n;return Bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class eg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){++this._on===1&&(this.prevScope=Rt,Rt=this)}off(){this._on>0&&--this._on===0&&(Rt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function tg(t){return new eg(t)}function ng(){return Rt}function rw(t,e=!1){Rt&&Rt.cleanups.push(t)}let je;const Ic=new WeakSet;class sg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rt&&Rt.active&&Rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ic.has(this)&&(Ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ig(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xf(this),og(this);const e=je,n=_n;je=this,_n=!0;try{return this.fn()}finally{ag(this),je=e,_n=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zu(e);this.deps=this.depsTail=void 0,Xf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zc(this)&&this.run()}get dirty(){return Zc(this)}}let rg=0,Ji,Yi;function ig(t,e=!1){if(t.flags|=8,e){t.next=Yi,Yi=t;return}t.next=Ji,Ji=t}function Yu(){rg++}function Xu(){if(--rg>0)return;if(Yi){let e=Yi;for(Yi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ji;){let e=Ji;for(Ji=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function og(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ag(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Zu(s),iw(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Zc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ho)||(t.globalVersion=ho,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Zc(t))))return;t.flags|=2;const e=t.dep,n=je,s=_n;je=t,_n=!0;try{og(t);const r=t.fn(t._value);(e.version===0||Ns(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{je=n,_n=s,ag(t),t.flags&=-3}}function Zu(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Zu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function iw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _n=!0;const cg=[];function ts(){cg.push(_n),_n=!1}function ns(){const t=cg.pop();_n=t===void 0?!0:t}function Xf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=je;je=void 0;try{e()}finally{je=n}}}let ho=0;class ow{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!je||!_n||je===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==je)n=this.activeLink=new ow(je,this),je.deps?(n.prevDep=je.depsTail,je.depsTail.nextDep=n,je.depsTail=n):je.deps=je.depsTail=n,ug(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=je.depsTail,n.nextDep=void 0,je.depsTail.nextDep=n,je.depsTail=n,je.deps===n&&(je.deps=s)}return n}trigger(e){this.version++,ho++,this.notify(e)}notify(e){Yu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xu()}}}function ug(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ug(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ua=new WeakMap,dr=Symbol(""),eu=Symbol(""),fo=Symbol("");function Nt(t,e,n){if(_n&&je){let s=Ua.get(t);s||Ua.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new eh),r.map=s,r.key=n),r.track()}}function Gn(t,e,n,s,r,i){const o=Ua.get(t);if(!o){ho++;return}const l=c=>{c&&c.trigger()};if(Yu(),e==="clear")o.forEach(l);else{const c=ce(t),u=c&&_l(n);if(c&&n==="length"){const h=Number(s);o.forEach((d,m)=>{(m==="length"||m===fo||!Bn(m)&&m>=h)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(fo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(dr)),Br(t)&&l(o.get(eu)));break;case"delete":c||(l(o.get(dr)),Br(t)&&l(o.get(eu)));break;case"set":Br(t)&&l(o.get(dr));break}}Xu()}function aw(t,e){const n=Ua.get(t);return n&&n.get(e)}function Nr(t){const e=Ne(t);return e===t?e:(Nt(e,"iterate",fo),rn(t)?e:e.map(vn))}function Tl(t){return Nt(t=Ne(t),"iterate",fo),t}function Ts(t,e){return ss(t)?Nn(t)?Kr(vn(e)):Kr(e):vn(e)}const lw={__proto__:null,[Symbol.iterator](){return Ac(this,Symbol.iterator,t=>Ts(this,t))},concat(...t){return Nr(this).concat(...t.map(e=>ce(e)?Nr(e):e))},entries(){return Ac(this,"entries",t=>(t[1]=Ts(this,t[1]),t))},every(t,e){return Hn(this,"every",t,e,void 0,arguments)},filter(t,e){return Hn(this,"filter",t,e,n=>n.map(s=>Ts(this,s)),arguments)},find(t,e){return Hn(this,"find",t,e,n=>Ts(this,n),arguments)},findIndex(t,e){return Hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Hn(this,"findLast",t,e,n=>Ts(this,n),arguments)},findLastIndex(t,e){return Hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return bc(this,"includes",t)},indexOf(...t){return bc(this,"indexOf",t)},join(t){return Nr(this).join(t)},lastIndexOf(...t){return bc(this,"lastIndexOf",t)},map(t,e){return Hn(this,"map",t,e,void 0,arguments)},pop(){return xi(this,"pop")},push(...t){return xi(this,"push",t)},reduce(t,...e){return Zf(this,"reduce",t,e)},reduceRight(t,...e){return Zf(this,"reduceRight",t,e)},shift(){return xi(this,"shift")},some(t,e){return Hn(this,"some",t,e,void 0,arguments)},splice(...t){return xi(this,"splice",t)},toReversed(){return Nr(this).toReversed()},toSorted(t){return Nr(this).toSorted(t)},toSpliced(...t){return Nr(this).toSpliced(...t)},unshift(...t){return xi(this,"unshift",t)},values(){return Ac(this,"values",t=>Ts(this,t))}};function Ac(t,e,n){const s=Tl(t),r=s[e]();return s!==t&&!rn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const cw=Array.prototype;function Hn(t,e,n,s,r,i){const o=Tl(t),l=o!==t&&!rn(t),c=o[e];if(c!==cw[e]){const d=c.apply(t,i);return l?vn(d):d}let u=n;o!==t&&(l?u=function(d,m){return n.call(this,Ts(t,d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const h=c.call(o,u,s);return l&&r?r(h):h}function Zf(t,e,n,s){const r=Tl(t);let i=n;return r!==t&&(rn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Ts(t,l),c,t)}),r[e](i,...s)}function bc(t,e,n){const s=Ne(t);Nt(s,"iterate",fo);const r=s[e](...n);return(r===-1||r===!1)&&Il(n[0])?(n[0]=Ne(n[0]),s[e](...n)):r}function xi(t,e,n=[]){ts(),Yu();const s=Ne(t)[e].apply(t,n);return Xu(),ns(),s}const uw=Ku("__proto__,__v_isRef,__isVue"),hg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bn));function hw(t){Bn(t)||(t=String(t));const e=Ne(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class fg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?ww:gg:i?mg:pg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ce(e);if(!r){let c;if(o&&(c=lw[n]))return c;if(n==="hasOwnProperty")return hw}const l=Reflect.get(e,n,He(e)?e:s);if((Bn(n)?hg.has(n):uw(n))||(r||Nt(e,"get",n),i))return l;if(He(l)){const c=o&&_l(n)?l:l.value;return r&&Ue(c)?nu(c):c}return Ue(l)?r?nu(l):Vo(l):l}}class dg extends fg{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=ce(e)&&_l(n);if(!this._isShallow){const u=ss(i);if(!rn(s)&&!ss(s)&&(i=Ne(i),s=Ne(s)),!o&&He(i)&&!He(s))return u||(i.value=s),!0}const l=o?Number(n)<e.length:xe(e,n),c=Reflect.set(e,n,s,He(e)?e:r);return e===Ne(r)&&(l?Ns(s,i)&&Gn(e,"set",n,s):Gn(e,"add",n,s)),c}deleteProperty(e,n){const s=xe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Gn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Bn(n)||!hg.has(n))&&Nt(e,"has",n),s}ownKeys(e){return Nt(e,"iterate",ce(e)?"length":dr),Reflect.ownKeys(e)}}class fw extends fg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const dw=new dg,pw=new fw,mw=new dg(!0);const tu=t=>t,ha=t=>Reflect.getPrototypeOf(t);function gw(t,e,n){return function(...s){const r=this.__v_raw,i=Ne(r),o=Br(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),h=n?tu:e?Kr:vn;return!e&&Nt(i,"iterate",c?eu:dr),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[h(d[0]),h(d[1])]:h(d),done:m}},[Symbol.iterator](){return this}}}}function fa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _w(t,e){const n={get(r){const i=this.__v_raw,o=Ne(i),l=Ne(r);t||(Ns(r,l)&&Nt(o,"get",r),Nt(o,"get",l));const{has:c}=ha(o),u=e?tu:t?Kr:vn;if(c.call(o,r))return u(i.get(r));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Nt(Ne(r),"iterate",dr),r.size},has(r){const i=this.__v_raw,o=Ne(i),l=Ne(r);return t||(Ns(r,l)&&Nt(o,"has",r),Nt(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=Ne(l),u=e?tu:t?Kr:vn;return!t&&Nt(c,"iterate",dr),l.forEach((h,d)=>r.call(i,u(h),u(d),o))}};return gt(n,t?{add:fa("add"),set:fa("set"),delete:fa("delete"),clear:fa("clear")}:{add(r){!e&&!rn(r)&&!ss(r)&&(r=Ne(r));const i=Ne(this);return ha(i).has.call(i,r)||(i.add(r),Gn(i,"add",r,r)),this},set(r,i){!e&&!rn(i)&&!ss(i)&&(i=Ne(i));const o=Ne(this),{has:l,get:c}=ha(o);let u=l.call(o,r);u||(r=Ne(r),u=l.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Ns(i,h)&&Gn(o,"set",r,i):Gn(o,"add",r,i),this},delete(r){const i=Ne(this),{has:o,get:l}=ha(i);let c=o.call(i,r);c||(r=Ne(r),c=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&Gn(i,"delete",r,void 0),u},clear(){const r=Ne(this),i=r.size!==0,o=r.clear();return i&&Gn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=gw(r,t,e)}),n}function th(t,e){const n=_w(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(xe(n,r)&&r in s?n:s,r,i)}const yw={get:th(!1,!1)},vw={get:th(!1,!0)},Ew={get:th(!0,!1)};const pg=new WeakMap,mg=new WeakMap,gg=new WeakMap,ww=new WeakMap;function Tw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iw(t){return t.__v_skip||!Object.isExtensible(t)?0:Tw(KE(t))}function Vo(t){return ss(t)?t:nh(t,!1,dw,yw,pg)}function _g(t){return nh(t,!1,mw,vw,mg)}function nu(t){return nh(t,!0,pw,Ew,gg)}function nh(t,e,n,s,r){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Iw(t);if(i===0)return t;const o=r.get(t);if(o)return o;const l=new Proxy(t,i===2?s:n);return r.set(t,l),l}function Nn(t){return ss(t)?Nn(t.__v_raw):!!(t&&t.__v_isReactive)}function ss(t){return!!(t&&t.__v_isReadonly)}function rn(t){return!!(t&&t.__v_isShallow)}function Il(t){return t?!!t.__v_raw:!1}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function sh(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&Jm(t,"__v_skip",!0),t}const vn=t=>Ue(t)?Vo(t):t,Kr=t=>Ue(t)?nu(t):t;function He(t){return t?t.__v_isRef===!0:!1}function Z(t){return yg(t,!1)}function Aw(t){return yg(t,!0)}function yg(t,e){return He(t)?t:new bw(t,e)}class bw{constructor(e,n){this.dep=new eh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ne(e),this._value=n?e:vn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||rn(e)||ss(e);e=s?e:Ne(e),Ns(e,n)&&(this._rawValue=e,this._value=s?e:vn(e),this.dep.trigger())}}function re(t){return He(t)?t.value:t}const Sw={get:(t,e,n)=>e==="__v_raw"?t:re(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return He(r)&&!He(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function vg(t){return Nn(t)?t:new Proxy(t,Sw)}function Rw(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=Eg(t,n);return e}class Cw{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0,this._raw=Ne(e);let r=!0,i=e;if(!ce(e)||!_l(String(n)))do r=!Il(i)||rn(i);while(r&&(i=i.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=re(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&He(this._raw[this._key])){const n=this._object[this._key];if(He(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return aw(this._raw,this._key)}}class Pw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function kw(t,e,n){return He(t)?t:Ee(t)?new Pw(t):Ue(t)&&arguments.length>1?Eg(t,e,n):Z(t)}function Eg(t,e,n){return new Cw(t,e,n)}class Nw{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new eh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ho-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&je!==this)return ig(this,!0),!0}get value(){const e=this.dep.track();return lg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ow(t,e,n=!1){let s,r;return Ee(t)?s=t:(s=t.get,r=t.set),new Nw(s,r,n)}const da={},Ba=new WeakMap;let ir;function Dw(t,e=!1,n=ir){if(n){let s=Ba.get(n);s||Ba.set(n,s=[]),s.push(t)}}function Vw(t,e,n=$e){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=F=>r?F:rn(F)||r===!1||r===0?Qn(F,1):Qn(F);let h,d,m,g,E=!1,k=!1;if(He(t)?(d=()=>t.value,E=rn(t)):Nn(t)?(d=()=>u(t),E=!0):ce(t)?(k=!0,E=t.some(F=>Nn(F)||rn(F)),d=()=>t.map(F=>{if(He(F))return F.value;if(Nn(F))return u(F);if(Ee(F))return c?c(F,2):F()})):Ee(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){ts();try{m()}finally{ns()}}const F=ir;ir=h;try{return c?c(t,3,[g]):t(g)}finally{ir=F}}:d=kn,e&&r){const F=d,U=r===!0?1/0:r;d=()=>Qn(F(),U)}const P=ng(),N=()=>{h.stop(),P&&P.active&&Qu(P.effects,h)};if(i&&e){const F=e;e=(...U)=>{F(...U),N()}}let V=k?new Array(t.length).fill(da):da;const x=F=>{if(!(!(h.flags&1)||!h.dirty&&!F))if(e){const U=h.run();if(r||E||(k?U.some((B,A)=>Ns(B,V[A])):Ns(U,V))){m&&m();const B=ir;ir=h;try{const A=[U,V===da?void 0:k&&V[0]===da?[]:V,g];V=U,c?c(e,3,A):e(...A)}finally{ir=B}}}else h.run()};return l&&l(x),h=new sg(d),h.scheduler=o?()=>o(x,!1):x,g=F=>Dw(F,!1,h),m=h.onStop=()=>{const F=Ba.get(h);if(F){if(c)c(F,4);else for(const U of F)U();Ba.delete(h)}},e?s?x(!0):V=h.run():o?o(x.bind(null,!0),!0):h.run(),N.pause=h.pause.bind(h),N.resume=h.resume.bind(h),N.stop=N,N}function Qn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,He(t))Qn(t.value,e,n);else if(ce(t))for(let s=0;s<t.length;s++)Qn(t[s],e,n);else if(ai(t)||Br(t))t.forEach(s=>{Qn(s,e,n)});else if(Qm(t)){for(const s in t)Qn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Qn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xo(t,e,n,s){try{return s?t(...s):t()}catch(r){Al(r,e,n)}}function En(t,e,n,s){if(Ee(t)){const r=xo(t,e,n,s);return r&&Km(r)&&r.catch(i=>{Al(i,e,n)}),r}if(ce(t)){const r=[];for(let i=0;i<t.length;i++)r.push(En(t[i],e,n,s));return r}}function Al(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||$e;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}l=l.parent}if(i){ts(),xo(i,null,10,[t,c,u]),ns();return}}xw(t,n,r,s,o)}function xw(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Bt=[];let Rn=-1;const $r=[];let Is=null,Dr=0;const wg=Promise.resolve();let $a=null;function li(t){const e=$a||wg;return t?e.then(this?t.bind(this):t):e}function Mw(t){let e=Rn+1,n=Bt.length;for(;e<n;){const s=e+n>>>1,r=Bt[s],i=po(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function rh(t){if(!(t.flags&1)){const e=po(t),n=Bt[Bt.length-1];!n||!(t.flags&2)&&e>=po(n)?Bt.push(t):Bt.splice(Mw(e),0,t),t.flags|=1,Tg()}}function Tg(){$a||($a=wg.then(Ag))}function Lw(t){ce(t)?$r.push(...t):Is&&t.id===-1?Is.splice(Dr+1,0,t):t.flags&1||($r.push(t),t.flags|=1),Tg()}function ed(t,e,n=Rn+1){for(;n<Bt.length;n++){const s=Bt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Bt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ig(t){if($r.length){const e=[...new Set($r)].sort((n,s)=>po(n)-po(s));if($r.length=0,Is){Is.push(...e);return}for(Is=e,Dr=0;Dr<Is.length;Dr++){const n=Is[Dr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Is=null,Dr=0}}const po=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ag(t){try{for(Rn=0;Rn<Bt.length;Rn++){const e=Bt[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),xo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<Bt.length;Rn++){const e=Bt[Rn];e&&(e.flags&=-2)}Rn=-1,Bt.length=0,Ig(),$a=null,(Bt.length||$r.length)&&Ag()}}let tn=null,bg=null;function ja(t){const e=tn;return tn=t,bg=t&&t.type.__scopeId||null,e}function Ct(t,e=tn,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&za(-1);const i=ja(e);let o;try{o=t(...r)}finally{ja(i),s._d&&za(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function kt(t,e){if(tn===null)return t;const n=Pl(tn),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=$e]=e[r];i&&(Ee(i)&&(i={mounted:i,updated:i}),i.deep&&Qn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function tr(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(ts(),En(c,n,8,[t.el,l,t,e]),ns())}}const Fw=Symbol("_vte"),Sg=t=>t.__isTeleport,Kn=Symbol("_leaveCb"),pa=Symbol("_enterCb");function Uw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dn(()=>{t.isMounted=!0}),Vg(()=>{t.isUnmounting=!0}),t}const an=[Function,Array],Rg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:an,onEnter:an,onAfterEnter:an,onEnterCancelled:an,onBeforeLeave:an,onLeave:an,onAfterLeave:an,onLeaveCancelled:an,onBeforeAppear:an,onAppear:an,onAfterAppear:an,onAppearCancelled:an},Cg=t=>{const e=t.subTree;return e.component?Cg(e.component):e},Bw={name:"BaseTransition",props:Rg,setup(t,{slots:e}){const n=lh(),s=Uw();return()=>{const r=e.default&&Ng(e.default(),!0);if(!r||!r.length)return;const i=Pg(r),o=Ne(t),{mode:l}=o;if(s.isLeaving)return Sc(i);const c=td(i);if(!c)return Sc(i);let u=su(c,o,s,n,d=>u=d);c.type!==$t&&mo(c,u);let h=n.subTree&&td(n.subTree);if(h&&h.type!==$t&&!ar(h,c)&&Cg(n).type!==$t){let d=su(h,o,s,n);if(mo(h,d),l==="out-in"&&c.type!==$t)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},Sc(i);l==="in-out"&&c.type!==$t?d.delayLeave=(m,g,E)=>{const k=kg(s,h);k[String(h.key)]=h,m[Kn]=()=>{g(),m[Kn]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{E(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Pg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==$t){e=n;break}}return e}const $w=Bw;function kg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function su(t,e,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:E,onLeaveCancelled:k,onBeforeAppear:P,onAppear:N,onAfterAppear:V,onAppearCancelled:x}=e,F=String(t.key),U=kg(n,t),B=(v,b)=>{v&&En(v,s,9,b)},A=(v,b)=>{const C=b[1];B(v,b),ce(v)?v.every(S=>S.length<=1)&&C():v.length<=1&&C()},_={mode:o,persisted:l,beforeEnter(v){let b=c;if(!n.isMounted)if(i)b=P||c;else return;v[Kn]&&v[Kn](!0);const C=U[F];C&&ar(t,C)&&C.el[Kn]&&C.el[Kn](),B(b,[v])},enter(v){let b=u,C=h,S=d;if(!n.isMounted)if(i)b=N||u,C=V||h,S=x||d;else return;let I=!1;const ge=v[pa]=Le=>{I||(I=!0,Le?B(S,[v]):B(C,[v]),_.delayedLeave&&_.delayedLeave(),v[pa]=void 0)};b?A(b,[v,ge]):ge()},leave(v,b){const C=String(t.key);if(v[pa]&&v[pa](!0),n.isUnmounting)return b();B(m,[v]);let S=!1;const I=v[Kn]=ge=>{S||(S=!0,b(),ge?B(k,[v]):B(E,[v]),v[Kn]=void 0,U[C]===t&&delete U[C])};U[C]=t,g?A(g,[v,I]):I()},clone(v){const b=su(v,e,n,s,r);return r&&r(b),b}};return _}function Sc(t){if(bl(t))return t=Ls(t),t.children=null,t}function td(t){if(!bl(t))return Sg(t.type)&&t.children?Pg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ee(n.default))return n.default()}}function mo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,mo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ng(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===tt?(o.patchFlag&128&&r++,s=s.concat(Ng(o.children,e,l))):(e||o.type!==$t)&&s.push(l!=null?Ls(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function on(t,e){return Ee(t)?gt({name:t.name},e,{setup:t}):t}function Og(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ha=new WeakMap;function Xi(t,e,n,s,r=!1){if(ce(t)){t.forEach((E,k)=>Xi(E,e&&(ce(e)?e[k]:e),n,s,r));return}if(Zi(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Xi(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Pl(s.component):s.el,o=r?null:i,{i:l,r:c}=t,u=e&&e.r,h=l.refs===$e?l.refs={}:l.refs,d=l.setupState,m=Ne(d),g=d===$e?Wm:E=>xe(m,E);if(u!=null&&u!==c){if(nd(e),Ze(u))h[u]=null,g(u)&&(d[u]=null);else if(He(u)){u.value=null;const E=e;E.k&&(h[E.k]=null)}}if(Ee(c))xo(c,l,12,[o,h]);else{const E=Ze(c),k=He(c);if(E||k){const P=()=>{if(t.f){const N=E?g(c)?d[c]:h[c]:c.value;if(r)ce(N)&&Qu(N,i);else if(ce(N))N.includes(i)||N.push(i);else if(E)h[c]=[i],g(c)&&(d[c]=h[c]);else{const V=[i];c.value=V,t.k&&(h[t.k]=V)}}else E?(h[c]=o,g(c)&&(d[c]=o)):k&&(c.value=o,t.k&&(h[t.k]=o))};if(o){const N=()=>{P(),Ha.delete(t)};N.id=-1,Ha.set(t,N),Zt(N,n)}else nd(t),P()}}}function nd(t){const e=Ha.get(t);e&&(e.flags|=8,Ha.delete(t))}wl().requestIdleCallback;wl().cancelIdleCallback;const Zi=t=>!!t.type.__asyncLoader,bl=t=>t.type.__isKeepAlive;function jw(t,e){Dg(t,"a",e)}function Hw(t,e){Dg(t,"da",e)}function Dg(t,e,n=Dt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Sl(e,s,n),n){let r=n.parent;for(;r&&r.parent;)bl(r.parent.vnode)&&qw(s,e,n,r),r=r.parent}}function qw(t,e,n,s){const r=Sl(e,t,s,!0);ci(()=>{Qu(s[e],r)},n)}function Sl(t,e,n=Dt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ts();const l=Mo(n),c=En(e,n,t,o);return l(),ns(),c});return s?r.unshift(i):r.push(i),i}}const cs=t=>(e,n=Dt)=>{(!_o||t==="sp")&&Sl(t,(...s)=>e(...s),n)},zw=cs("bm"),dn=cs("m"),Ww=cs("bu"),Kw=cs("u"),Vg=cs("bum"),ci=cs("um"),Gw=cs("sp"),Qw=cs("rtg"),Jw=cs("rtc");function Yw(t,e=Dt){Sl("ec",t,e)}const xg="components";function Mg(t,e){return Fg(xg,t,!0,e)||t}const Lg=Symbol.for("v-ndc");function Xw(t){return Ze(t)?Fg(xg,t,!1)||t:t||Lg}function Fg(t,e,n=!0,s=!1){const r=tn||Dt;if(r){const i=r.type;{const l=BT(i,!1);if(l&&(l===e||l===hn(e)||l===vl(hn(e))))return i}const o=sd(r[t]||i[t],e)||sd(r.appContext[t],e);return!o&&s?i:o}}function sd(t,e){return t&&(t[e]||t[hn(e)]||t[vl(hn(e))])}function On(t,e,n,s){let r;const i=n,o=ce(t);if(o||Ze(t)){const l=o&&Nn(t);let c=!1,u=!1;l&&(c=!rn(t),u=ss(t),t=Tl(t)),r=new Array(t.length);for(let h=0,d=t.length;h<d;h++)r[h]=e(c?u?Kr(vn(t[h])):vn(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];r[c]=e(t[h],h,c,i)}}else r=[];return r}const ru=t=>t?r_(t)?Pl(t):ru(t.parent):null,eo=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ru(t.parent),$root:t=>ru(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Bg(t),$forceUpdate:t=>t.f||(t.f=()=>{rh(t.update)}),$nextTick:t=>t.n||(t.n=li.bind(t.proxy)),$watch:t=>uT.bind(t)}),Rc=(t,e)=>t!==$e&&!t.__isScriptSetup&&xe(t,e),Zw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Rc(s,e))return o[e]=1,s[e];if(r!==$e&&xe(r,e))return o[e]=2,r[e];if(xe(i,e))return o[e]=3,i[e];if(n!==$e&&xe(n,e))return o[e]=4,n[e];iu&&(o[e]=0)}}const u=eo[e];let h,d;if(u)return e==="$attrs"&&Nt(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==$e&&xe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,xe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Rc(r,e)?(r[e]=n,!0):s!==$e&&xe(s,e)?(s[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let c;return!!(n[l]||t!==$e&&l[0]!=="$"&&xe(t,l)||Rc(e,l)||xe(i,l)||xe(s,l)||xe(eo,l)||xe(r.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rd(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let iu=!0;function eT(t){const e=Bg(t),n=t.proxy,s=t.ctx;iu=!1,e.beforeCreate&&id(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:g,updated:E,activated:k,deactivated:P,beforeDestroy:N,beforeUnmount:V,destroyed:x,unmounted:F,render:U,renderTracked:B,renderTriggered:A,errorCaptured:_,serverPrefetch:v,expose:b,inheritAttrs:C,components:S,directives:I,filters:ge}=e;if(u&&tT(u,s,null),o)for(const me in o){const ye=o[me];Ee(ye)&&(s[me]=ye.bind(n))}if(r){const me=r.call(n,n);Ue(me)&&(t.data=Vo(me))}if(iu=!0,i)for(const me in i){const ye=i[me],ht=Ee(ye)?ye.bind(n,n):Ee(ye.get)?ye.get.bind(n,n):kn,Qt=!Ee(ye)&&Ee(ye.set)?ye.set.bind(n):kn,Ge=mt({get:ht,set:Qt});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:qe=>Ge.value=qe})}if(l)for(const me in l)Ug(l[me],s,n,me);if(c){const me=Ee(c)?c.call(n):c;Reflect.ownKeys(me).forEach(ye=>{Ia(ye,me[ye])})}h&&id(h,t,"c");function Te(me,ye){ce(ye)?ye.forEach(ht=>me(ht.bind(n))):ye&&me(ye.bind(n))}if(Te(zw,d),Te(dn,m),Te(Ww,g),Te(Kw,E),Te(jw,k),Te(Hw,P),Te(Yw,_),Te(Jw,B),Te(Qw,A),Te(Vg,V),Te(ci,F),Te(Gw,v),ce(b))if(b.length){const me=t.exposed||(t.exposed={});b.forEach(ye=>{Object.defineProperty(me,ye,{get:()=>n[ye],set:ht=>n[ye]=ht,enumerable:!0})})}else t.exposed||(t.exposed={});U&&t.render===kn&&(t.render=U),C!=null&&(t.inheritAttrs=C),S&&(t.components=S),I&&(t.directives=I),v&&Og(t)}function tT(t,e,n=kn){ce(t)&&(t=ou(t));for(const s in t){const r=t[s];let i;Ue(r)?"default"in r?i=cn(r.from||s,r.default,!0):i=cn(r.from||s):i=cn(r),He(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function id(t,e,n){En(ce(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ug(t,e,n,s){let r=s.includes(".")?Hg(n,s):()=>n[s];if(Ze(t)){const i=e[t];Ee(i)&&mr(r,i)}else if(Ee(t))mr(r,t.bind(n));else if(Ue(t))if(ce(t))t.forEach(i=>Ug(i,e,n,s));else{const i=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(i)&&mr(r,i,t)}}function Bg(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>qa(c,u,o,!0)),qa(c,e,o)),Ue(e)&&i.set(e,c),c}function qa(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&qa(t,i,n,!0),r&&r.forEach(o=>qa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=nT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const nT={data:od,props:ad,emits:ad,methods:ji,computed:ji,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:ji,directives:ji,watch:rT,provide:od,inject:sT};function od(t,e){return e?t?function(){return gt(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function sT(t,e){return ji(ou(t),ou(e))}function ou(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function ji(t,e){return t?gt(Object.create(null),t,e):e}function ad(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:gt(Object.create(null),rd(t),rd(e??{})):e}function rT(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const s in e)n[s]=Ft(t[s],e[s]);return n}function $g(){return{app:null,config:{isNativeTag:Wm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let iT=0;function oT(t,e){return function(s,r=null){Ee(s)||(s=gt({},s)),r!=null&&!Ue(r)&&(r=null);const i=$g(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:iT++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:jT,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&Ee(h.install)?(o.add(h),h.install(u,...d)):Ee(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,m){if(!c){const g=u._ceVNode||be(s,r);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(g,h,m),c=!0,u._container=h,h.__vue_app__=u,Pl(g.component)}},onUnmount(h){l.push(h)},unmount(){c&&(En(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=pr;pr=u;try{return h()}finally{pr=d}}};return u}}let pr=null;function Ia(t,e){if(Dt){let n=Dt.provides;const s=Dt.parent&&Dt.parent.provides;s===n&&(n=Dt.provides=Object.create(s)),n[t]=e}}function cn(t,e,n=!1){const s=lh();if(s||pr){let r=pr?pr._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ee(e)?e.call(s&&s.proxy):e}}function aT(){return!!(lh()||pr)}const lT=Symbol.for("v-scx"),cT=()=>cn(lT);function mr(t,e,n){return jg(t,e,n)}function jg(t,e,n=$e){const{immediate:s,deep:r,flush:i,once:o}=n,l=gt({},n),c=e&&s||!e&&i!=="post";let u;if(_o){if(i==="sync"){const g=cT();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=kn,g.resume=kn,g.pause=kn,g}}const h=Dt;l.call=(g,E,k)=>En(g,h,E,k);let d=!1;i==="post"?l.scheduler=g=>{Zt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(g,E)=>{E?g():rh(g)}),l.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=Vw(t,e,l);return _o&&(u?u.push(m):c&&m()),m}function uT(t,e,n){const s=this.proxy,r=Ze(t)?t.includes(".")?Hg(s,t):()=>s[t]:t.bind(s,s);let i;Ee(e)?i=e:(i=e.handler,n=e);const o=Mo(this),l=jg(r,i.bind(s),n);return o(),l}function Hg(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const hT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${qs(e)}Modifiers`];function fT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||$e;let r=n;const i=e.startsWith("update:"),o=i&&hT(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>Ze(h)?h.trim():h)),o.number&&(r=n.map(El)));let l,c=s[l=wc(e)]||s[l=wc(hn(e))];!c&&i&&(c=s[l=wc(qs(e))]),c&&En(c,t,6,r);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,En(u,t,6,r)}}const dT=new WeakMap;function qg(t,e,n=!1){const s=n?dT:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!Ee(t)){const c=u=>{const h=qg(u,e,!0);h&&(l=!0,gt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ue(t)&&s.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):gt(o,i),Ue(t)&&s.set(t,o),o)}function Rl(t,e){return!t||!gl(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,qs(e))||xe(t,e))}function ld(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:d,data:m,setupState:g,ctx:E,inheritAttrs:k}=t,P=ja(t);let N,V;try{if(n.shapeFlag&4){const F=r||s,U=F;N=Pn(u.call(U,F,h,d,g,m,E)),V=l}else{const F=e;N=Pn(F.length>1?F(d,{attrs:l,slots:o,emit:c}):F(d,null)),V=e.props?l:pT(l)}}catch(F){to.length=0,Al(F,t,1),N=be($t)}let x=N;if(V&&k!==!1){const F=Object.keys(V),{shapeFlag:U}=x;F.length&&U&7&&(i&&F.some(Gu)&&(V=mT(V,i)),x=Ls(x,V,!1,!0))}return n.dirs&&(x=Ls(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&mo(x,n.transition),N=x,ja(P),N}const pT=t=>{let e;for(const n in t)(n==="class"||n==="style"||gl(n))&&((e||(e={}))[n]=t[n]);return e},mT=(t,e)=>{const n={};for(const s in t)(!Gu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function gT(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?cd(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(o[m]!==s[m]&&!Rl(u,m))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?cd(s,o,u):!0:!!o;return!1}function cd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Rl(n,i))return!0}return!1}function _T({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const zg={},Wg=()=>Object.create(zg),Kg=t=>Object.getPrototypeOf(t)===zg;function yT(t,e,n,s=!1){const r={},i=Wg();t.propsDefaults=Object.create(null),Gg(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:_g(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function vT(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Ne(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(Rl(t.emitsOptions,m))continue;const g=e[m];if(c)if(xe(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const E=hn(m);r[E]=au(c,l,E,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{Gg(t,e,r,i)&&(u=!0);let h;for(const d in l)(!e||!xe(e,d)&&((h=qs(d))===d||!xe(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(r[d]=au(c,l,d,void 0,t,!0)):delete r[d]);if(i!==l)for(const d in i)(!e||!xe(e,d))&&(delete i[d],u=!0)}u&&Gn(t.attrs,"set","")}function Gg(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Qi(c))continue;const u=e[c];let h;r&&xe(r,h=hn(c))?!i||!i.includes(h)?n[h]=u:(l||(l={}))[h]=u:Rl(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Ne(n),u=l||$e;for(let h=0;h<i.length;h++){const d=i[h];n[d]=au(r,c,d,u[d],t,!xe(u,d))}}return o}function au(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=xe(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ee(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=Mo(r);s=u[n]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===qs(n))&&(s=!0))}return s}const ET=new WeakMap;function Qg(t,e,n=!1){const s=n?ET:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!Ee(t)){const h=d=>{c=!0;const[m,g]=Qg(d,e,!0);gt(o,m),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return Ue(t)&&s.set(t,Ur),Ur;if(ce(i))for(let h=0;h<i.length;h++){const d=hn(i[h]);ud(d)&&(o[d]=$e)}else if(i)for(const h in i){const d=hn(h);if(ud(d)){const m=i[h],g=o[d]=ce(m)||Ee(m)?{type:m}:gt({},m),E=g.type;let k=!1,P=!0;if(ce(E))for(let N=0;N<E.length;++N){const V=E[N],x=Ee(V)&&V.name;if(x==="Boolean"){k=!0;break}else x==="String"&&(P=!1)}else k=Ee(E)&&E.name==="Boolean";g[0]=k,g[1]=P,(k||xe(g,"default"))&&l.push(d)}}const u=[o,l];return Ue(t)&&s.set(t,u),u}function ud(t){return t[0]!=="$"&&!Qi(t)}const ih=t=>t==="_"||t==="_ctx"||t==="$stable",oh=t=>ce(t)?t.map(Pn):[Pn(t)],wT=(t,e,n)=>{if(e._n)return e;const s=Ct((...r)=>oh(e(...r)),n);return s._c=!1,s},Jg=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ih(r))continue;const i=t[r];if(Ee(i))e[r]=wT(r,i,s);else if(i!=null){const o=oh(i);e[r]=()=>o}}},Yg=(t,e)=>{const n=oh(e);t.slots.default=()=>n},Xg=(t,e,n)=>{for(const s in e)(n||!ih(s))&&(t[s]=e[s])},TT=(t,e,n)=>{const s=t.slots=Wg();if(t.vnode.shapeFlag&32){const r=e._;r?(Xg(s,e,n),n&&Jm(s,"_",r,!0)):Jg(e,s)}else e&&Yg(t,e)},IT=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=$e;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Xg(r,e,n):(i=!e.$stable,Jg(e,r)),o=e}else e&&(Yg(t,e),o={default:1});if(i)for(const l in r)!ih(l)&&o[l]==null&&delete r[l]},Zt=CT;function AT(t){return bT(t)}function bT(t,e){const n=wl();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:g=kn,insertStaticContent:E}=t,k=(T,R,O,H=null,z=null,$=null,X=void 0,Q=null,G=!!R.dynamicChildren)=>{if(T===R)return;T&&!ar(T,R)&&(H=j(T),qe(T,z,$,!0),T=null),R.patchFlag===-2&&(G=!1,R.dynamicChildren=null);const{type:W,ref:ue,shapeFlag:te}=R;switch(W){case Cl:P(T,R,O,H);break;case $t:N(T,R,O,H);break;case Pc:T==null&&V(R,O,H,X);break;case tt:S(T,R,O,H,z,$,X,Q,G);break;default:te&1?U(T,R,O,H,z,$,X,Q,G):te&6?I(T,R,O,H,z,$,X,Q,G):(te&64||te&128)&&W.process(T,R,O,H,z,$,X,Q,G,ae)}ue!=null&&z?Xi(ue,T&&T.ref,$,R||T,!R):ue==null&&T&&T.ref!=null&&Xi(T.ref,null,$,T,!0)},P=(T,R,O,H)=>{if(T==null)s(R.el=l(R.children),O,H);else{const z=R.el=T.el;R.children!==T.children&&u(z,R.children)}},N=(T,R,O,H)=>{T==null?s(R.el=c(R.children||""),O,H):R.el=T.el},V=(T,R,O,H)=>{[T.el,T.anchor]=E(T.children,R,O,H,T.el,T.anchor)},x=({el:T,anchor:R},O,H)=>{let z;for(;T&&T!==R;)z=m(T),s(T,O,H),T=z;s(R,O,H)},F=({el:T,anchor:R})=>{let O;for(;T&&T!==R;)O=m(T),r(T),T=O;r(R)},U=(T,R,O,H,z,$,X,Q,G)=>{if(R.type==="svg"?X="svg":R.type==="math"&&(X="mathml"),T==null)B(R,O,H,z,$,X,Q,G);else{const W=T.el&&T.el._isVueCE?T.el:null;try{W&&W._beginPatch(),v(T,R,z,$,X,Q,G)}finally{W&&W._endPatch()}}},B=(T,R,O,H,z,$,X,Q)=>{let G,W;const{props:ue,shapeFlag:te,transition:le,dirs:fe}=T;if(G=T.el=o(T.type,$,ue&&ue.is,ue),te&8?h(G,T.children):te&16&&_(T.children,G,null,H,z,Cc(T,$),X,Q),fe&&tr(T,null,H,"created"),A(G,T,T.scopeId,X,H),ue){for(const Fe in ue)Fe!=="value"&&!Qi(Fe)&&i(G,Fe,null,ue[Fe],$,H);"value"in ue&&i(G,"value",null,ue.value,$),(W=ue.onVnodeBeforeMount)&&bn(W,H,T)}fe&&tr(T,null,H,"beforeMount");const Se=ST(z,le);Se&&le.beforeEnter(G),s(G,R,O),((W=ue&&ue.onVnodeMounted)||Se||fe)&&Zt(()=>{W&&bn(W,H,T),Se&&le.enter(G),fe&&tr(T,null,H,"mounted")},z)},A=(T,R,O,H,z)=>{if(O&&g(T,O),H)for(let $=0;$<H.length;$++)g(T,H[$]);if(z){let $=z.subTree;if(R===$||t_($.type)&&($.ssContent===R||$.ssFallback===R)){const X=z.vnode;A(T,X,X.scopeId,X.slotScopeIds,z.parent)}}},_=(T,R,O,H,z,$,X,Q,G=0)=>{for(let W=G;W<T.length;W++){const ue=T[W]=Q?As(T[W]):Pn(T[W]);k(null,ue,R,O,H,z,$,X,Q)}},v=(T,R,O,H,z,$,X)=>{const Q=R.el=T.el;let{patchFlag:G,dynamicChildren:W,dirs:ue}=R;G|=T.patchFlag&16;const te=T.props||$e,le=R.props||$e;let fe;if(O&&nr(O,!1),(fe=le.onVnodeBeforeUpdate)&&bn(fe,O,R,T),ue&&tr(R,T,O,"beforeUpdate"),O&&nr(O,!0),(te.innerHTML&&le.innerHTML==null||te.textContent&&le.textContent==null)&&h(Q,""),W?b(T.dynamicChildren,W,Q,O,H,Cc(R,z),$):X||ye(T,R,Q,null,O,H,Cc(R,z),$,!1),G>0){if(G&16)C(Q,te,le,O,z);else if(G&2&&te.class!==le.class&&i(Q,"class",null,le.class,z),G&4&&i(Q,"style",te.style,le.style,z),G&8){const Se=R.dynamicProps;for(let Fe=0;Fe<Se.length;Fe++){const Oe=Se[Fe],At=te[Oe],bt=le[Oe];(bt!==At||Oe==="value")&&i(Q,Oe,At,bt,z,O)}}G&1&&T.children!==R.children&&h(Q,R.children)}else!X&&W==null&&C(Q,te,le,O,z);((fe=le.onVnodeUpdated)||ue)&&Zt(()=>{fe&&bn(fe,O,R,T),ue&&tr(R,T,O,"updated")},H)},b=(T,R,O,H,z,$,X)=>{for(let Q=0;Q<R.length;Q++){const G=T[Q],W=R[Q],ue=G.el&&(G.type===tt||!ar(G,W)||G.shapeFlag&198)?d(G.el):O;k(G,W,ue,null,H,z,$,X,!0)}},C=(T,R,O,H,z)=>{if(R!==O){if(R!==$e)for(const $ in R)!Qi($)&&!($ in O)&&i(T,$,R[$],null,z,H);for(const $ in O){if(Qi($))continue;const X=O[$],Q=R[$];X!==Q&&$!=="value"&&i(T,$,Q,X,z,H)}"value"in O&&i(T,"value",R.value,O.value,z)}},S=(T,R,O,H,z,$,X,Q,G)=>{const W=R.el=T?T.el:l(""),ue=R.anchor=T?T.anchor:l("");let{patchFlag:te,dynamicChildren:le,slotScopeIds:fe}=R;fe&&(Q=Q?Q.concat(fe):fe),T==null?(s(W,O,H),s(ue,O,H),_(R.children||[],O,ue,z,$,X,Q,G)):te>0&&te&64&&le&&T.dynamicChildren?(b(T.dynamicChildren,le,O,z,$,X,Q),(R.key!=null||z&&R===z.subTree)&&Zg(T,R,!0)):ye(T,R,O,ue,z,$,X,Q,G)},I=(T,R,O,H,z,$,X,Q,G)=>{R.slotScopeIds=Q,T==null?R.shapeFlag&512?z.ctx.activate(R,O,H,X,G):ge(R,O,H,z,$,X,G):Le(T,R,G)},ge=(T,R,O,H,z,$,X)=>{const Q=T.component=xT(T,H,z);if(bl(T)&&(Q.ctx.renderer=ae),MT(Q,!1,X),Q.asyncDep){if(z&&z.registerDep(Q,Te,X),!T.el){const G=Q.subTree=be($t);N(null,G,R,O),T.placeholder=G.el}}else Te(Q,T,R,O,z,$,X)},Le=(T,R,O)=>{const H=R.component=T.component;if(gT(T,R,O))if(H.asyncDep&&!H.asyncResolved){me(H,R,O);return}else H.next=R,H.update();else R.el=T.el,H.vnode=R},Te=(T,R,O,H,z,$,X)=>{const Q=()=>{if(T.isMounted){let{next:te,bu:le,u:fe,parent:Se,vnode:Fe}=T;{const Yt=e_(T);if(Yt){te&&(te.el=Fe.el,me(T,te,X)),Yt.asyncDep.then(()=>{T.isUnmounted||Q()});return}}let Oe=te,At;nr(T,!1),te?(te.el=Fe.el,me(T,te,X)):te=Fe,le&&Ta(le),(At=te.props&&te.props.onVnodeBeforeUpdate)&&bn(At,Se,te,Fe),nr(T,!0);const bt=ld(T),Jt=T.subTree;T.subTree=bt,k(Jt,bt,d(Jt.el),j(Jt),T,z,$),te.el=bt.el,Oe===null&&_T(T,bt.el),fe&&Zt(fe,z),(At=te.props&&te.props.onVnodeUpdated)&&Zt(()=>bn(At,Se,te,Fe),z)}else{let te;const{el:le,props:fe}=R,{bm:Se,m:Fe,parent:Oe,root:At,type:bt}=T,Jt=Zi(R);nr(T,!1),Se&&Ta(Se),!Jt&&(te=fe&&fe.onVnodeBeforeMount)&&bn(te,Oe,R),nr(T,!0);{At.ce&&At.ce._def.shadowRoot!==!1&&At.ce._injectChildStyle(bt);const Yt=T.subTree=ld(T);k(null,Yt,O,H,T,z,$),R.el=Yt.el}if(Fe&&Zt(Fe,z),!Jt&&(te=fe&&fe.onVnodeMounted)){const Yt=R;Zt(()=>bn(te,Oe,Yt),z)}(R.shapeFlag&256||Oe&&Zi(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&T.a&&Zt(T.a,z),T.isMounted=!0,R=O=H=null}};T.scope.on();const G=T.effect=new sg(Q);T.scope.off();const W=T.update=G.run.bind(G),ue=T.job=G.runIfDirty.bind(G);ue.i=T,ue.id=T.uid,G.scheduler=()=>rh(ue),nr(T,!0),W()},me=(T,R,O)=>{R.component=T;const H=T.vnode.props;T.vnode=R,T.next=null,vT(T,R.props,H,O),IT(T,R.children,O),ts(),ed(T),ns()},ye=(T,R,O,H,z,$,X,Q,G=!1)=>{const W=T&&T.children,ue=T?T.shapeFlag:0,te=R.children,{patchFlag:le,shapeFlag:fe}=R;if(le>0){if(le&128){Qt(W,te,O,H,z,$,X,Q,G);return}else if(le&256){ht(W,te,O,H,z,$,X,Q,G);return}}fe&8?(ue&16&&yt(W,z,$),te!==W&&h(O,te)):ue&16?fe&16?Qt(W,te,O,H,z,$,X,Q,G):yt(W,z,$,!0):(ue&8&&h(O,""),fe&16&&_(te,O,H,z,$,X,Q,G))},ht=(T,R,O,H,z,$,X,Q,G)=>{T=T||Ur,R=R||Ur;const W=T.length,ue=R.length,te=Math.min(W,ue);let le;for(le=0;le<te;le++){const fe=R[le]=G?As(R[le]):Pn(R[le]);k(T[le],fe,O,null,z,$,X,Q,G)}W>ue?yt(T,z,$,!0,!1,te):_(R,O,H,z,$,X,Q,G,te)},Qt=(T,R,O,H,z,$,X,Q,G)=>{let W=0;const ue=R.length;let te=T.length-1,le=ue-1;for(;W<=te&&W<=le;){const fe=T[W],Se=R[W]=G?As(R[W]):Pn(R[W]);if(ar(fe,Se))k(fe,Se,O,null,z,$,X,Q,G);else break;W++}for(;W<=te&&W<=le;){const fe=T[te],Se=R[le]=G?As(R[le]):Pn(R[le]);if(ar(fe,Se))k(fe,Se,O,null,z,$,X,Q,G);else break;te--,le--}if(W>te){if(W<=le){const fe=le+1,Se=fe<ue?R[fe].el:H;for(;W<=le;)k(null,R[W]=G?As(R[W]):Pn(R[W]),O,Se,z,$,X,Q,G),W++}}else if(W>le)for(;W<=te;)qe(T[W],z,$,!0),W++;else{const fe=W,Se=W,Fe=new Map;for(W=Se;W<=le;W++){const vt=R[W]=G?As(R[W]):Pn(R[W]);vt.key!=null&&Fe.set(vt.key,W)}let Oe,At=0;const bt=le-Se+1;let Jt=!1,Yt=0;const mn=new Array(bt);for(W=0;W<bt;W++)mn[W]=0;for(W=fe;W<=te;W++){const vt=T[W];if(At>=bt){qe(vt,z,$,!0);continue}let ft;if(vt.key!=null)ft=Fe.get(vt.key);else for(Oe=Se;Oe<=le;Oe++)if(mn[Oe-Se]===0&&ar(vt,R[Oe])){ft=Oe;break}ft===void 0?qe(vt,z,$,!0):(mn[ft-Se]=W+1,ft>=Yt?Yt=ft:Jt=!0,k(vt,R[ft],O,null,z,$,X,Q,G),At++)}const Rr=Jt?RT(mn):Ur;for(Oe=Rr.length-1,W=bt-1;W>=0;W--){const vt=Se+W,ft=R[vt],Ei=R[vt+1],Js=vt+1<ue?Ei.el||Ei.placeholder:H;mn[W]===0?k(null,ft,O,Js,z,$,X,Q,G):Jt&&(Oe<0||W!==Rr[Oe]?Ge(ft,O,Js,2):Oe--)}}},Ge=(T,R,O,H,z=null)=>{const{el:$,type:X,transition:Q,children:G,shapeFlag:W}=T;if(W&6){Ge(T.component.subTree,R,O,H);return}if(W&128){T.suspense.move(R,O,H);return}if(W&64){X.move(T,R,O,ae);return}if(X===tt){s($,R,O);for(let te=0;te<G.length;te++)Ge(G[te],R,O,H);s(T.anchor,R,O);return}if(X===Pc){x(T,R,O);return}if(H!==2&&W&1&&Q)if(H===0)Q.beforeEnter($),s($,R,O),Zt(()=>Q.enter($),z);else{const{leave:te,delayLeave:le,afterLeave:fe}=Q,Se=()=>{T.ctx.isUnmounted?r($):s($,R,O)},Fe=()=>{$._isLeaving&&$[Kn](!0),te($,()=>{Se(),fe&&fe()})};le?le($,Se,Fe):Fe()}else s($,R,O)},qe=(T,R,O,H=!1,z=!1)=>{const{type:$,props:X,ref:Q,children:G,dynamicChildren:W,shapeFlag:ue,patchFlag:te,dirs:le,cacheIndex:fe}=T;if(te===-2&&(z=!1),Q!=null&&(ts(),Xi(Q,null,O,T,!0),ns()),fe!=null&&(R.renderCache[fe]=void 0),ue&256){R.ctx.deactivate(T);return}const Se=ue&1&&le,Fe=!Zi(T);let Oe;if(Fe&&(Oe=X&&X.onVnodeBeforeUnmount)&&bn(Oe,R,T),ue&6)Mt(T.component,O,H);else{if(ue&128){T.suspense.unmount(O,H);return}Se&&tr(T,null,R,"beforeUnmount"),ue&64?T.type.remove(T,R,O,ae,H):W&&!W.hasOnce&&($!==tt||te>0&&te&64)?yt(W,R,O,!1,!0):($===tt&&te&384||!z&&ue&16)&&yt(G,R,O),H&&qt(T)}(Fe&&(Oe=X&&X.onVnodeUnmounted)||Se)&&Zt(()=>{Oe&&bn(Oe,R,T),Se&&tr(T,null,R,"unmounted")},O)},qt=T=>{const{type:R,el:O,anchor:H,transition:z}=T;if(R===tt){_t(O,H);return}if(R===Pc){F(T);return}const $=()=>{r(O),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(T.shapeFlag&1&&z&&!z.persisted){const{leave:X,delayLeave:Q}=z,G=()=>X(O,$);Q?Q(T.el,$,G):G()}else $()},_t=(T,R)=>{let O;for(;T!==R;)O=m(T),r(T),T=O;r(R)},Mt=(T,R,O)=>{const{bum:H,scope:z,job:$,subTree:X,um:Q,m:G,a:W}=T;hd(G),hd(W),H&&Ta(H),z.stop(),$&&($.flags|=8,qe(X,T,R,O)),Q&&Zt(Q,R),Zt(()=>{T.isUnmounted=!0},R)},yt=(T,R,O,H=!1,z=!1,$=0)=>{for(let X=$;X<T.length;X++)qe(T[X],R,O,H,z)},j=T=>{if(T.shapeFlag&6)return j(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const R=m(T.anchor||T.el),O=R&&R[Fw];return O?m(O):R};let ne=!1;const ee=(T,R,O)=>{T==null?R._vnode&&qe(R._vnode,null,null,!0):k(R._vnode||null,T,R,null,null,null,O),R._vnode=T,ne||(ne=!0,ed(),Ig(),ne=!1)},ae={p:k,um:qe,m:Ge,r:qt,mt:ge,mc:_,pc:ye,pbc:b,n:j,o:t};return{render:ee,hydrate:void 0,createApp:oT(ee)}}function Cc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function nr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ST(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zg(t,e,n=!1){const s=t.children,r=e.children;if(ce(s)&&ce(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=As(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Zg(o,l)),l.type===Cl&&l.patchFlag!==-1&&(l.el=o.el),l.type===$t&&!l.el&&(l.el=o.el)}}function RT(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function e_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:e_(e)}function hd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const t_=t=>t.__isSuspense;function CT(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):Lw(t)}const tt=Symbol.for("v-fgt"),Cl=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Pc=Symbol.for("v-stc"),to=[];let nn=null;function ie(t=!1){to.push(nn=t?null:[])}function PT(){to.pop(),nn=to[to.length-1]||null}let go=1;function za(t,e=!1){go+=t,t<0&&nn&&e&&(nn.hasOnce=!0)}function n_(t){return t.dynamicChildren=go>0?nn||Ur:null,PT(),go>0&&nn&&nn.push(t),t}function _e(t,e,n,s,r,i){return n_(w(t,e,n,s,r,i,!0))}function un(t,e,n,s,r){return n_(be(t,e,n,s,r,!0))}function Wa(t){return t?t.__v_isVNode===!0:!1}function ar(t,e){return t.type===e.type&&t.key===e.key}const s_=({key:t})=>t??null,Aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||He(t)||Ee(t)?{i:tn,r:t,k:e,f:!!n}:t:null);function w(t,e=null,n=null,s=0,r=null,i=t===tt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&s_(e),ref:e&&Aa(e),scopeId:bg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tn};return l?(ah(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),go>0&&!o&&nn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&nn.push(c),c}const be=kT;function kT(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Lg)&&(t=$t),Wa(t)){const l=Ls(t,e,!0);return n&&ah(l,n),go>0&&!i&&nn&&(l.shapeFlag&6?nn[nn.indexOf(t)]=l:nn.push(l)),l.patchFlag=-2,l}if($T(t)&&(t=t.__vccOpts),e){e=NT(e);let{class:l,style:c}=e;l&&!Ze(l)&&(e.class=We(l)),Ue(c)&&(Il(c)&&!ce(c)&&(c=gt({},c)),e.style=Oo(c))}const o=Ze(t)?1:t_(t)?128:Sg(t)?64:Ue(t)?4:Ee(t)?2:0;return w(t,e,n,s,r,o,i,!0)}function NT(t){return t?Il(t)||Kg(t)?gt({},t):t:null}function Ls(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?OT(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&s_(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Aa(e)):[i,Aa(e)]:Aa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ls(t.ssContent),ssFallback:t.ssFallback&&Ls(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&mo(h,c.clone(h)),h}function De(t=" ",e=0){return be(Cl,null,t,e)}function jt(t="",e=!1){return e?(ie(),un($t,null,t)):be($t,null,t)}function Pn(t){return t==null||typeof t=="boolean"?be($t):ce(t)?be(tt,null,t.slice()):Wa(t)?As(t):be(Cl,null,String(t))}function As(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ls(t)}function ah(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ah(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Kg(e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ee(e)?(e={default:e,_ctx:tn},n=32):(e=String(e),s&64?(n=16,e=[De(e)]):n=8);t.children=e,t.shapeFlag|=n}function OT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=We([e.class,s.class]));else if(r==="style")e.style=Oo([e.style,s.style]);else if(gl(r)){const i=e[r],o=s[r];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function bn(t,e,n,s=null){En(t,e,7,[n,s])}const DT=$g();let VT=0;function xT(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||DT,i={uid:VT++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new eg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qg(s,r),emitsOptions:qg(s,r),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:s.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fT.bind(null,i),t.ce&&t.ce(i),i}let Dt=null;const lh=()=>Dt||tn;let Ka,lu;{const t=wl(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Ka=e("__VUE_INSTANCE_SETTERS__",n=>Dt=n),lu=e("__VUE_SSR_SETTERS__",n=>_o=n)}const Mo=t=>{const e=Dt;return Ka(t),t.scope.on(),()=>{t.scope.off(),Ka(e)}},fd=()=>{Dt&&Dt.scope.off(),Ka(null)};function r_(t){return t.vnode.shapeFlag&4}let _o=!1;function MT(t,e=!1,n=!1){e&&lu(e);const{props:s,children:r}=t.vnode,i=r_(t);yT(t,s,i,e),TT(t,r,n||e);const o=i?LT(t,e):void 0;return e&&lu(!1),o}function LT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Zw);const{setup:s}=n;if(s){ts();const r=t.setupContext=s.length>1?UT(t):null,i=Mo(t),o=xo(s,t,0,[t.props,r]),l=Km(o);if(ns(),i(),(l||t.sp)&&!Zi(t)&&Og(t),l){if(o.then(fd,fd),e)return o.then(c=>{dd(t,c)}).catch(c=>{Al(c,t,0)});t.asyncDep=o}else dd(t,o)}else i_(t)}function dd(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=vg(e)),i_(t)}function i_(t,e,n){const s=t.type;t.render||(t.render=s.render||kn);{const r=Mo(t);ts();try{eT(t)}finally{ns(),r()}}}const FT={get(t,e){return Nt(t,"get",""),t[e]}};function UT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,FT),slots:t.slots,emit:t.emit,expose:e}}function Pl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vg(sh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in eo)return eo[n](t)},has(e,n){return n in e||n in eo}})):t.proxy}function BT(t,e=!0){return Ee(t)?t.displayName||t.name:t.name||e&&t.__name}function $T(t){return Ee(t)&&"__vccOpts"in t}const mt=(t,e)=>Ow(t,e,_o);function ch(t,e,n){try{za(-1);const s=arguments.length;return s===2?Ue(e)&&!ce(e)?Wa(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Wa(n)&&(n=[n]),be(t,e,n))}finally{za(1)}}const jT="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cu;const pd=typeof window<"u"&&window.trustedTypes;if(pd)try{cu=pd.createPolicy("vue",{createHTML:t=>t})}catch{}const o_=cu?t=>cu.createHTML(t):t=>t,HT="http://www.w3.org/2000/svg",qT="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,md=Wn&&Wn.createElement("template"),zT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Wn.createElementNS(HT,t):e==="mathml"?Wn.createElementNS(qT,t):n?Wn.createElement(t,{is:n}):Wn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{md.innerHTML=o_(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=md.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ys="transition",Mi="animation",yo=Symbol("_vtc"),a_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},WT=gt({},Rg,a_),KT=t=>(t.displayName="Transition",t.props=WT,t),Lo=KT((t,{slots:e})=>ch($w,GT(t),e)),sr=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},gd=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function GT(t){const e={};for(const S in t)S in a_||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,E=QT(r),k=E&&E[0],P=E&&E[1],{onBeforeEnter:N,onEnter:V,onEnterCancelled:x,onLeave:F,onLeaveCancelled:U,onBeforeAppear:B=N,onAppear:A=V,onAppearCancelled:_=x}=e,v=(S,I,ge,Le)=>{S._enterCancelled=Le,rr(S,I?h:l),rr(S,I?u:o),ge&&ge()},b=(S,I)=>{S._isLeaving=!1,rr(S,d),rr(S,g),rr(S,m),I&&I()},C=S=>(I,ge)=>{const Le=S?A:V,Te=()=>v(I,S,ge);sr(Le,[I,Te]),_d(()=>{rr(I,S?c:i),qn(I,S?h:l),gd(Le)||yd(I,s,k,Te)})};return gt(e,{onBeforeEnter(S){sr(N,[S]),qn(S,i),qn(S,o)},onBeforeAppear(S){sr(B,[S]),qn(S,c),qn(S,u)},onEnter:C(!1),onAppear:C(!0),onLeave(S,I){S._isLeaving=!0;const ge=()=>b(S,I);qn(S,d),S._enterCancelled?(qn(S,m),wd(S)):(wd(S),qn(S,m)),_d(()=>{S._isLeaving&&(rr(S,d),qn(S,g),gd(F)||yd(S,s,P,ge))}),sr(F,[S,ge])},onEnterCancelled(S){v(S,!1,void 0,!0),sr(x,[S])},onAppearCancelled(S){v(S,!0,void 0,!0),sr(_,[S])},onLeaveCancelled(S){b(S),sr(U,[S])}})}function QT(t){if(t==null)return null;if(Ue(t))return[kc(t.enter),kc(t.leave)];{const e=kc(t);return[e,e]}}function kc(t){return JE(t)}function qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[yo]||(t[yo]=new Set)).add(e)}function rr(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[yo];n&&(n.delete(e),n.size||(t[yo]=void 0))}function _d(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let JT=0;function yd(t,e,n,s){const r=t._endId=++JT,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=YT(t,e);if(!o)return s();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},l+1),t.addEventListener(u,m)}function YT(t,e){const n=window.getComputedStyle(t),s=E=>(n[E]||"").split(", "),r=s(`${ys}Delay`),i=s(`${ys}Duration`),o=vd(r,i),l=s(`${Mi}Delay`),c=s(`${Mi}Duration`),u=vd(l,c);let h=null,d=0,m=0;e===ys?o>0&&(h=ys,d=o,m=i.length):e===Mi?u>0&&(h=Mi,d=u,m=c.length):(d=Math.max(o,u),h=d>0?o>u?ys:Mi:null,m=h?h===ys?i.length:c.length:0);const g=h===ys&&/\b(?:transform|all)(?:,|$)/.test(s(`${ys}Property`).toString());return{type:h,timeout:d,propCount:m,hasTransform:g}}function vd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Ed(n)+Ed(t[s])))}function Ed(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function wd(t){return(t?t.ownerDocument:document).body.offsetHeight}function XT(t,e,n){const s=t[yo];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ga=Symbol("_vod"),l_=Symbol("_vsh"),c_={name:"show",beforeMount(t,{value:e},{transition:n}){t[Ga]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Li(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Li(t,!0),s.enter(t)):s.leave(t,()=>{Li(t,!1)}):Li(t,e))},beforeUnmount(t,{value:e}){Li(t,e)}};function Li(t,e){t.style.display=e?t[Ga]:"none",t[l_]=!e}const ZT=Symbol(""),eI=/(?:^|;)\s*display\s*:/;function tI(t,e,n){const s=t.style,r=Ze(n);let i=!1;if(n&&!r){if(e)if(Ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ba(s,l,"")}else for(const o in e)n[o]==null&&ba(s,o,"");for(const o in n)o==="display"&&(i=!0),ba(s,o,n[o])}else if(r){if(e!==n){const o=s[ZT];o&&(n+=";"+o),s.cssText=n,i=eI.test(n)}}else e&&t.removeAttribute("style");Ga in t&&(t[Ga]=i?s.display:"",t[l_]&&(s.display="none"))}const Td=/\s*!important$/;function ba(t,e,n){if(ce(n))n.forEach(s=>ba(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=nI(t,e);Td.test(n)?t.setProperty(qs(s),n.replace(Td,""),"important"):t[s]=n}}const Id=["Webkit","Moz","ms"],Nc={};function nI(t,e){const n=Nc[e];if(n)return n;let s=hn(e);if(s!=="filter"&&s in t)return Nc[e]=s;s=vl(s);for(let r=0;r<Id.length;r++){const i=Id[r]+s;if(i in t)return Nc[e]=i}return e}const Ad="http://www.w3.org/1999/xlink";function bd(t,e,n,s,r,i=nw(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ad,e.slice(6,e.length)):t.setAttributeNS(Ad,e,n):n==null||i&&!Ym(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Bn(n)?String(n):n)}function Sd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?o_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ym(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Ss(t,e,n,s){t.addEventListener(e,n,s)}function sI(t,e,n,s){t.removeEventListener(e,n,s)}const Rd=Symbol("_vei");function rI(t,e,n,s,r=null){const i=t[Rd]||(t[Rd]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=iI(e);if(s){const u=i[e]=lI(s,r);Ss(t,l,u,c)}else o&&(sI(t,l,o,c),i[e]=void 0)}}const Cd=/(?:Once|Passive|Capture)$/;function iI(t){let e;if(Cd.test(t)){e={};let s;for(;s=t.match(Cd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qs(t.slice(2)),e]}let Oc=0;const oI=Promise.resolve(),aI=()=>Oc||(oI.then(()=>Oc=0),Oc=Date.now());function lI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;En(cI(s,n.value),e,5,[s])};return n.value=t,n.attached=aI(),n}function cI(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Pd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uI=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?XT(t,s,o):e==="style"?tI(t,n,s):gl(e)?Gu(e)||rI(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hI(t,e,s,o))?(Sd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bd(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ze(s))?Sd(t,hn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),bd(t,e,s,o))};function hI(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pd(e)&&Ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Pd(e)&&Ze(n)?!1:e in t}const Gr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Ta(e,n):e};function fI(t){t.target.composing=!0}function kd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zn=Symbol("_assign");function Nd(t,e,n){return e&&(t=t.trim()),n&&(t=El(t)),t}const lr={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Zn]=Gr(r);const i=s||r.props&&r.props.type==="number";Ss(t,e?"change":"input",o=>{o.target.composing||t[Zn](Nd(t.value,n,i))}),(n||i)&&Ss(t,"change",()=>{t.value=Nd(t.value,n,i)}),e||(Ss(t,"compositionstart",fI),Ss(t,"compositionend",kd),Ss(t,"change",kd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Zn]=Gr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?El(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},Od={deep:!0,created(t,e,n){t[Zn]=Gr(n),Ss(t,"change",()=>{const s=t._modelValue,r=vo(t),i=t.checked,o=t[Zn];if(ce(s)){const l=Ju(s,r),c=l!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(l,1),o(u)}}else if(ai(s)){const l=new Set(s);i?l.add(r):l.delete(r),o(l)}else o(u_(t,i))})},mounted:Dd,beforeUpdate(t,e,n){t[Zn]=Gr(n),Dd(t,e,n)}};function Dd(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(ce(e))r=Ju(e,s.props.value)>-1;else if(ai(e))r=e.has(s.props.value);else{if(e===n)return;r=Do(e,u_(t,!0))}t.checked!==r&&(t.checked=r)}const no={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=ai(e);Ss(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?El(vo(o)):vo(o));t[Zn](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,li(()=>{t._assigning=!1})}),t[Zn]=Gr(s)},mounted(t,{value:e}){Vd(t,e)},beforeUpdate(t,e,n){t[Zn]=Gr(n)},updated(t,{value:e}){t._assigning||Vd(t,e)}};function Vd(t,e){const n=t.multiple,s=ce(e);if(!(n&&!s&&!ai(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],l=vo(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Ju(e,l)>-1}else o.selected=e.has(l);else if(Do(vo(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function vo(t){return"_value"in t?t._value:t.value}function u_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const dI=["ctrl","shift","alt","meta"],pI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dI.some(n=>t[`${n}Key`]&&!e.includes(n))},Dn=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const l=pI[e[o]];if(l&&l(r,e))return}return t(r,...i)}))},mI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},h_=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=(r=>{if(!("key"in r))return;const i=qs(r.key);if(e.some(o=>o===i||mI[o]===i))return t(r)}))},gI=gt({patchProp:uI},zT);let xd;function _I(){return xd||(xd=AT(gI))}const yI=((...t)=>{const e=_I().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=EI(s);if(!r)return;const i=e._component;!Ee(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,vI(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function vI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function EI(t){return Ze(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let f_;const kl=t=>f_=t,d_=Symbol();function uu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var so;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(so||(so={}));function wI(){const t=tg(!0),e=t.run(()=>Z({}));let n=[],s=[];const r=sh({install(i){kl(r),r._a=i,i.provide(d_,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return this._a?n.push(i):s.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const p_=()=>{};function Md(t,e,n,s=p_){t.add(e);const r=()=>{t.delete(e)&&s()};return!n&&ng()&&rw(r),r}function Or(t,...e){t.forEach(n=>{n(...e)})}const TI=t=>t(),Ld=Symbol(),Dc=Symbol();function hu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];uu(r)&&uu(s)&&t.hasOwnProperty(n)&&!He(s)&&!Nn(s)?t[n]=hu(r,s):t[n]=s}return t}const II=Symbol();function AI(t){return!uu(t)||!Object.prototype.hasOwnProperty.call(t,II)}const{assign:ws}=Object;function bI(t){return!!(He(t)&&t.effect)}function SI(t,e,n,s){const{state:r,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=r?r():{});const h=Rw(n.state.value[t]);return ws(h,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=sh(mt(()=>{kl(n);const g=n._s.get(t);return o[m].call(g,g)})),d),{}))}return c=m_(t,u,e,n,s,!0),c}function m_(t,e,n={},s,r,i){let o;const l=ws({actions:{}},n),c={deep:!0};let u,h,d=new Set,m=new Set,g;const E=s.state.value[t];!i&&!E&&(s.state.value[t]={}),Z({});let k;function P(_){let v;u=h=!1,typeof _=="function"?(_(s.state.value[t]),v={type:so.patchFunction,storeId:t,events:g}):(hu(s.state.value[t],_),v={type:so.patchObject,payload:_,storeId:t,events:g});const b=k=Symbol();li().then(()=>{k===b&&(u=!0)}),h=!0,Or(d,v,s.state.value[t])}const N=i?function(){const{state:v}=n,b=v?v():{};this.$patch(C=>{ws(C,b)})}:p_;function V(){o.stop(),d.clear(),m.clear(),s._s.delete(t)}const x=(_,v="")=>{if(Ld in _)return _[Dc]=v,_;const b=function(){kl(s);const C=Array.from(arguments),S=new Set,I=new Set;function ge(me){S.add(me)}function Le(me){I.add(me)}Or(m,{args:C,name:b[Dc],store:U,after:ge,onError:Le});let Te;try{Te=_.apply(this&&this.$id===t?this:U,C)}catch(me){throw Or(I,me),me}return Te instanceof Promise?Te.then(me=>(Or(S,me),me)).catch(me=>(Or(I,me),Promise.reject(me))):(Or(S,Te),Te)};return b[Ld]=!0,b[Dc]=v,b},F={_p:s,$id:t,$onAction:Md.bind(null,m),$patch:P,$reset:N,$subscribe(_,v={}){const b=Md(d,_,v.detached,()=>C()),C=o.run(()=>mr(()=>s.state.value[t],S=>{(v.flush==="sync"?h:u)&&_({storeId:t,type:so.direct,events:g},S)},ws({},c,v)));return b},$dispose:V},U=Vo(F);s._s.set(t,U);const A=(s._a&&s._a.runWithContext||TI)(()=>s._e.run(()=>(o=tg()).run(()=>e({action:x}))));for(const _ in A){const v=A[_];if(He(v)&&!bI(v)||Nn(v))i||(E&&AI(v)&&(He(v)?v.value=E[_]:hu(v,E[_])),s.state.value[t][_]=v);else if(typeof v=="function"){const b=x(v,_);A[_]=b,l.actions[_]=v}}return ws(U,A),ws(Ne(U),A),Object.defineProperty(U,"$state",{get:()=>s.state.value[t],set:_=>{P(v=>{ws(v,_)})}}),s._p.forEach(_=>{ws(U,o.run(()=>_({store:U,app:s._a,pinia:s,options:l})))}),E&&i&&n.hydrate&&n.hydrate(U.$state,E),u=!0,h=!0,U}/*! #__NO_SIDE_EFFECTS__ */function RI(t,e,n){let s;const r=typeof e=="function";s=r?n:e;function i(o,l){const c=aT();return o=o||(c?cn(d_,null):null),o&&kl(o),o=f_,o._s.has(t)||(r?m_(t,e,s,o):SI(t,s,o)),o._s.get(t)}return i.$id=t,i}function Fo(t){const e=Ne(t),n={};for(const s in e){const r=e[s];r.effect?n[s]=mt({get:()=>t[s],set(i){t[s]=i}}):(He(r)||Nn(r))&&(n[s]=kw(t,s))}return n}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Vr=typeof document<"u";function g_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function CI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&g_(t.default)}const Ve=Object.assign;function Vc(t,e){const n={};for(const s in e){const r=e[s];n[s]=wn(r)?r.map(t):t(r)}return n}const ro=()=>{},wn=Array.isArray;function Fd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const __=/#/g,PI=/&/g,kI=/\//g,NI=/=/g,OI=/\?/g,y_=/\+/g,DI=/%5B/g,VI=/%5D/g,v_=/%5E/g,xI=/%60/g,E_=/%7B/g,MI=/%7C/g,w_=/%7D/g,LI=/%20/g;function uh(t){return t==null?"":encodeURI(""+t).replace(MI,"|").replace(DI,"[").replace(VI,"]")}function FI(t){return uh(t).replace(E_,"{").replace(w_,"}").replace(v_,"^")}function fu(t){return uh(t).replace(y_,"%2B").replace(LI,"+").replace(__,"%23").replace(PI,"%26").replace(xI,"`").replace(E_,"{").replace(w_,"}").replace(v_,"^")}function UI(t){return fu(t).replace(NI,"%3D")}function BI(t){return uh(t).replace(__,"%23").replace(OI,"%3F")}function $I(t){return BI(t).replace(kI,"%2F")}function Eo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const jI=/\/$/,HI=t=>t.replace(jI,"");function xc(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(s=e.slice(0,c),i=e.slice(c,l>0?l:e.length),r=t(i.slice(1))),l>=0&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=KI(s??e,n),{fullPath:s+i+o,path:s,query:r,hash:Eo(o)}}function qI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ud(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zI(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Qr(e.matched[s],n.matched[r])&&T_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function T_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!WI(t[n],e[n]))return!1;return!0}function WI(t,e){return wn(t)?Bd(t,e):wn(e)?Bd(e,t):t===e}function Bd(t,e){return wn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function KI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const vs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let du=(function(t){return t.pop="pop",t.push="push",t})({}),Mc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function GI(t){if(!t)if(Vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HI(t)}const QI=/^[^#]+#/;function JI(t,e){return t.replace(QI,"#")+e}function YI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Nl=()=>({left:window.scrollX,top:window.scrollY});function XI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=YI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function $d(t,e){return(history.state?history.state.position-e:-1)+t}const pu=new Map;function ZI(t,e){pu.set(t,e)}function eA(t){const e=pu.get(t);return pu.delete(t),e}function tA(t){return typeof t=="string"||t&&typeof t=="object"}function I_(t){return typeof t=="string"||typeof t=="symbol"}let Xe=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const A_=Symbol("");Xe.MATCHER_NOT_FOUND+"",Xe.NAVIGATION_GUARD_REDIRECT+"",Xe.NAVIGATION_ABORTED+"",Xe.NAVIGATION_CANCELLED+"",Xe.NAVIGATION_DUPLICATED+"";function Jr(t,e){return Ve(new Error,{type:t,[A_]:!0},e)}function zn(t,e){return t instanceof Error&&A_ in t&&(e==null||!!(t.type&e))}const nA=["params","query","hash"];function sA(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of nA)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function rA(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(y_," "),i=r.indexOf("="),o=Eo(i<0?r:r.slice(0,i)),l=i<0?null:Eo(r.slice(i+1));if(o in e){let c=e[o];wn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function jd(t){let e="";for(let n in t){const s=t[n];if(n=UI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(s)?s.map(r=>r&&fu(r)):[s&&fu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function iA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=wn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const oA=Symbol(""),Hd=Symbol(""),Ol=Symbol(""),hh=Symbol(""),mu=Symbol("");function Fi(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bs(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Jr(Xe.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):tA(m)?c(Jr(Xe.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),l())},h=i(()=>t.call(s&&s.instances[r],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Lc(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(g_(c)){const u=(c.__vccOpts||c)[e];u&&i.push(bs(u,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=CI(h)?h.default:h;o.mods[l]=h,o.components[l]=d;const m=(d.__vccOpts||d)[e];return m&&bs(m,n,s,o,l,r)()}))}}return i}function aA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Qr(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Qr(u,c))||r.push(c))}return[n,s,r]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let lA=()=>location.protocol+"//"+location.host;function b_(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let o=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Ud(l,"")}return Ud(n,t)+s+r}function cA(t,e,n,s){let r=[],i=[],o=null;const l=({state:m})=>{const g=b_(t,location),E=n.value,k=e.value;let P=0;if(m){if(n.value=g,e.value=m,o&&o===E){o=null;return}P=k?m.position-k.position:0}else s(g);r.forEach(N=>{N(n.value,E,{delta:P,type:du.pop,direction:P?P>0?Mc.forward:Mc.back:Mc.unknown})})};function c(){o=n.value}function u(m){r.push(m);const g=()=>{const E=r.indexOf(m);E>-1&&r.splice(E,1)};return i.push(g),g}function h(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Ve({},m.state,{scroll:Nl()}),"")}}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:c,listen:u,destroy:d}}function qd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Nl():null}}function uA(t){const{history:e,location:n}=window,s={value:b_(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:lA()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),r.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(c,u){i(c,Ve({},e.state,qd(r.value.back,c,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=c}function l(c,u){const h=Ve({},r.value,e.state,{forward:c,scroll:Nl()});i(h.current,h,!0),i(c,Ve({},qd(s.value,c,null),{position:h.position+1},u),!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function hA(t){t=GI(t);const e=uA(t),n=cA(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ve({location:"",base:t,go:s,createHref:JI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function fA(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),hA(t)}let cr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var at=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(at||{});const dA={type:cr.Static,value:""},pA=/[a-zA-Z0-9_]/;function mA(t){if(!t)return[[]];if(t==="/")return[[dA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=at.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",h="";function d(){u&&(n===at.Static?i.push({type:cr.Static,value:u}):n===at.Param||n===at.ParamRegExp||n===at.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:cr.Param,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==at.ParamRegExp){s=n,n=at.EscapeNext;continue}switch(n){case at.Static:c==="/"?(u&&d(),o()):c===":"?(d(),n=at.Param):m();break;case at.EscapeNext:m(),n=s;break;case at.Param:c==="("?n=at.ParamRegExp:pA.test(c)?m():(d(),n=at.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case at.ParamRegExp:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=at.ParamRegExpEnd:h+=c;break;case at.ParamRegExpEnd:d(),n=at.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===at.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}const zd="[^/]+?",gA={sensitive:!1,strict:!1,start:!0,end:!0};var Ut=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Ut||{});const _A=/[.+*?^${}()[\]/\\]/g;function yA(t,e){const n=Ve({},gA,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[Ut.Root];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=Ut.Segment+(n.sensitive?Ut.BonusCaseSensitive:0);if(m.type===cr.Static)d||(r+="/"),r+=m.value.replace(_A,"\\$&"),g+=Ut.Static;else if(m.type===cr.Param){const{value:E,repeatable:k,optional:P,regexp:N}=m;i.push({name:E,repeatable:k,optional:P});const V=N||zd;if(V!==zd){g+=Ut.BonusCustomRegExp;try{`${V}`}catch(F){throw new Error(`Invalid custom RegExp for param "${E}" (${V}): `+F.message)}}let x=k?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;d||(x=P&&u.length<2?`(?:/${x})`:"/"+x),P&&(x+="?"),r+=x,g+=Ut.Dynamic,P&&(g+=Ut.BonusOptional),k&&(g+=Ut.BonusRepeatable),V===".*"&&(g+=Ut.BonusWildcard)}h.push(g)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Ut.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",E=i[m-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function c(u){let h="",d=!1;for(const m of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of m)if(g.type===cr.Static)h+=g.value;else if(g.type===cr.Param){const{value:E,repeatable:k,optional:P}=g,N=E in u?u[E]:"";if(wn(N)&&!k)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const V=wn(N)?N.join("/"):N;if(!V)if(P)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);h+=V}}return h||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function vA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===Ut.Static+Ut.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Ut.Static+Ut.Segment?1:-1:0}function S_(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=vA(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Wd(s))return 1;if(Wd(r))return-1}return r.length-s.length}function Wd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const EA={strict:!1,end:!0,sensitive:!1};function wA(t,e,n){const s=yA(mA(t.path),n),r=Ve(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function TA(t,e){const n=[],s=new Map;e=Fd(EA,e);function r(d){return s.get(d)}function i(d,m,g){const E=!g,k=Gd(d);k.aliasOf=g&&g.record;const P=Fd(e,d),N=[k];if("alias"in d){const F=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of F)N.push(Gd(Ve({},k,{components:g?g.record.components:k.components,path:U,aliasOf:g?g.record:k})))}let V,x;for(const F of N){const{path:U}=F;if(m&&U[0]!=="/"){const B=m.record.path,A=B[B.length-1]==="/"?"":"/";F.path=m.record.path+(U&&A+U)}if(V=wA(F,m,P),g?g.alias.push(V):(x=x||V,x!==V&&x.alias.push(V),E&&d.name&&!Qd(V)&&o(d.name)),R_(V)&&c(V),k.children){const B=k.children;for(let A=0;A<B.length;A++)i(B[A],V,g&&g.children[A])}g=g||V}return x?()=>{o(x)}:ro}function o(d){if(I_(d)){const m=s.get(d);m&&(s.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=bA(d,n);n.splice(m,0,d),d.record.name&&!Qd(d)&&s.set(d.record.name,d)}function u(d,m){let g,E={},k,P;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw Jr(Xe.MATCHER_NOT_FOUND,{location:d});P=g.record.name,E=Ve(Kd(m.params,g.keys.filter(x=>!x.optional).concat(g.parent?g.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&Kd(d.params,g.keys.map(x=>x.name))),k=g.stringify(E)}else if(d.path!=null)k=d.path,g=n.find(x=>x.re.test(k)),g&&(E=g.parse(k),P=g.record.name);else{if(g=m.name?s.get(m.name):n.find(x=>x.re.test(m.path)),!g)throw Jr(Xe.MATCHER_NOT_FOUND,{location:d,currentLocation:m});P=g.record.name,E=Ve({},m.params,d.params),k=g.stringify(E)}const N=[];let V=g;for(;V;)N.unshift(V.record),V=V.parent;return{name:P,path:k,params:E,matched:N,meta:AA(N)}}t.forEach(d=>i(d));function h(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:r}}function Kd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Gd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:IA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function IA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Qd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function AA(t){return t.reduce((e,n)=>Ve(e,n.meta),{})}function bA(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;S_(t,e[i])<0?s=i:n=i+1}const r=SA(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function SA(t){let e=t;for(;e=e.parent;)if(R_(e)&&S_(t,e)===0)return e}function R_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Jd(t){const e=cn(Ol),n=cn(hh),s=mt(()=>{const c=re(t.to);return e.resolve(c)}),r=mt(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const m=d.findIndex(Qr.bind(null,h));if(m>-1)return m;const g=Yd(c[u-2]);return u>1&&Yd(h)===g&&d[d.length-1].path!==g?d.findIndex(Qr.bind(null,c[u-2])):m}),i=mt(()=>r.value>-1&&NA(n.params,s.value.params)),o=mt(()=>r.value>-1&&r.value===n.matched.length-1&&T_(n.params,s.value.params));function l(c={}){if(kA(c)){const u=e[re(t.replace)?"replace":"push"](re(t.to)).catch(ro);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:mt(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function RA(t){return t.length===1?t[0]:t}const CA=on({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Jd,setup(t,{slots:e}){const n=Vo(Jd(t)),{options:s}=cn(Ol),r=mt(()=>({[Xd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&RA(e.default(n));return t.custom?i:ch("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),PA=CA;function kA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function NA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!wn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Yd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xd=(t,e,n)=>t??e??n,OA=on({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=cn(mu),r=mt(()=>t.route||s.value),i=cn(Hd,0),o=mt(()=>{let u=re(i);const{matched:h}=r.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),l=mt(()=>r.value.matched[o.value]);Ia(Hd,mt(()=>o.value+1)),Ia(oA,l),Ia(mu,r);const c=Z();return mr(()=>[c.value,l.value,t.name],([u,h,d],[m,g,E])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Qr(h,g)||!m)&&(h.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,d=l.value,m=d&&d.components[h];if(!m)return Zd(n.default,{Component:m,route:u});const g=d.props[h],E=g?g===!0?u.params:typeof g=="function"?g(u):g:null,P=ch(m,Ve({},E,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return Zd(n.default,{Component:P,route:u})||P}}});function Zd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const DA=OA;function VA(t){const e=TA(t.routes,t),n=t.parseQuery||rA,s=t.stringifyQuery||jd,r=t.history,i=Fi(),o=Fi(),l=Fi(),c=Aw(vs);let u=vs;Vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Vc.bind(null,j=>""+j),d=Vc.bind(null,$I),m=Vc.bind(null,Eo);function g(j,ne){let ee,ae;return I_(j)?(ee=e.getRecordMatcher(j),ae=ne):ae=j,e.addRoute(ae,ee)}function E(j){const ne=e.getRecordMatcher(j);ne&&e.removeRoute(ne)}function k(){return e.getRoutes().map(j=>j.record)}function P(j){return!!e.getRecordMatcher(j)}function N(j,ne){if(ne=Ve({},ne||c.value),typeof j=="string"){const O=xc(n,j,ne.path),H=e.resolve({path:O.path},ne),z=r.createHref(O.fullPath);return Ve(O,H,{params:m(H.params),hash:Eo(O.hash),redirectedFrom:void 0,href:z})}let ee;if(j.path!=null)ee=Ve({},j,{path:xc(n,j.path,ne.path).path});else{const O=Ve({},j.params);for(const H in O)O[H]==null&&delete O[H];ee=Ve({},j,{params:d(O)}),ne.params=d(ne.params)}const ae=e.resolve(ee,ne),J=j.hash||"";ae.params=h(m(ae.params));const T=qI(s,Ve({},j,{hash:FI(J),path:ae.path})),R=r.createHref(T);return Ve({fullPath:T,hash:J,query:s===jd?iA(j.query):j.query||{}},ae,{redirectedFrom:void 0,href:R})}function V(j){return typeof j=="string"?xc(n,j,c.value.path):Ve({},j)}function x(j,ne){if(u!==j)return Jr(Xe.NAVIGATION_CANCELLED,{from:ne,to:j})}function F(j){return A(j)}function U(j){return F(Ve(V(j),{replace:!0}))}function B(j,ne){const ee=j.matched[j.matched.length-1];if(ee&&ee.redirect){const{redirect:ae}=ee;let J=typeof ae=="function"?ae(j,ne):ae;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=V(J):{path:J},J.params={}),Ve({query:j.query,hash:j.hash,params:J.path!=null?{}:j.params},J)}}function A(j,ne){const ee=u=N(j),ae=c.value,J=j.state,T=j.force,R=j.replace===!0,O=B(ee,ae);if(O)return A(Ve(V(O),{state:typeof O=="object"?Ve({},J,O.state):J,force:T,replace:R}),ne||ee);const H=ee;H.redirectedFrom=ne;let z;return!T&&zI(s,ae,ee)&&(z=Jr(Xe.NAVIGATION_DUPLICATED,{to:H,from:ae}),Ge(ae,ae,!0,!1)),(z?Promise.resolve(z):b(H,ae)).catch($=>zn($)?zn($,Xe.NAVIGATION_GUARD_REDIRECT)?$:Qt($):ye($,H,ae)).then($=>{if($){if(zn($,Xe.NAVIGATION_GUARD_REDIRECT))return A(Ve({replace:R},V($.to),{state:typeof $.to=="object"?Ve({},J,$.to.state):J,force:T}),ne||H)}else $=S(H,ae,!0,R,J);return C(H,ae,$),$})}function _(j,ne){const ee=x(j,ne);return ee?Promise.reject(ee):Promise.resolve()}function v(j){const ne=_t.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(j):j()}function b(j,ne){let ee;const[ae,J,T]=aA(j,ne);ee=Lc(ae.reverse(),"beforeRouteLeave",j,ne);for(const O of ae)O.leaveGuards.forEach(H=>{ee.push(bs(H,j,ne))});const R=_.bind(null,j,ne);return ee.push(R),yt(ee).then(()=>{ee=[];for(const O of i.list())ee.push(bs(O,j,ne));return ee.push(R),yt(ee)}).then(()=>{ee=Lc(J,"beforeRouteUpdate",j,ne);for(const O of J)O.updateGuards.forEach(H=>{ee.push(bs(H,j,ne))});return ee.push(R),yt(ee)}).then(()=>{ee=[];for(const O of T)if(O.beforeEnter)if(wn(O.beforeEnter))for(const H of O.beforeEnter)ee.push(bs(H,j,ne));else ee.push(bs(O.beforeEnter,j,ne));return ee.push(R),yt(ee)}).then(()=>(j.matched.forEach(O=>O.enterCallbacks={}),ee=Lc(T,"beforeRouteEnter",j,ne,v),ee.push(R),yt(ee))).then(()=>{ee=[];for(const O of o.list())ee.push(bs(O,j,ne));return ee.push(R),yt(ee)}).catch(O=>zn(O,Xe.NAVIGATION_CANCELLED)?O:Promise.reject(O))}function C(j,ne,ee){l.list().forEach(ae=>v(()=>ae(j,ne,ee)))}function S(j,ne,ee,ae,J){const T=x(j,ne);if(T)return T;const R=ne===vs,O=Vr?history.state:{};ee&&(ae||R?r.replace(j.fullPath,Ve({scroll:R&&O&&O.scroll},J)):r.push(j.fullPath,J)),c.value=j,Ge(j,ne,ee,R),Qt()}let I;function ge(){I||(I=r.listen((j,ne,ee)=>{if(!Mt.listening)return;const ae=N(j),J=B(ae,Mt.currentRoute.value);if(J){A(Ve(J,{replace:!0,force:!0}),ae).catch(ro);return}u=ae;const T=c.value;Vr&&ZI($d(T.fullPath,ee.delta),Nl()),b(ae,T).catch(R=>zn(R,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_CANCELLED)?R:zn(R,Xe.NAVIGATION_GUARD_REDIRECT)?(A(Ve(V(R.to),{force:!0}),ae).then(O=>{zn(O,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_DUPLICATED)&&!ee.delta&&ee.type===du.pop&&r.go(-1,!1)}).catch(ro),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),ye(R,ae,T))).then(R=>{R=R||S(ae,T,!1),R&&(ee.delta&&!zn(R,Xe.NAVIGATION_CANCELLED)?r.go(-ee.delta,!1):ee.type===du.pop&&zn(R,Xe.NAVIGATION_ABORTED|Xe.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),C(ae,T,R)}).catch(ro)}))}let Le=Fi(),Te=Fi(),me;function ye(j,ne,ee){Qt(j);const ae=Te.list();return ae.length?ae.forEach(J=>J(j,ne,ee)):console.error(j),Promise.reject(j)}function ht(){return me&&c.value!==vs?Promise.resolve():new Promise((j,ne)=>{Le.add([j,ne])})}function Qt(j){return me||(me=!j,ge(),Le.list().forEach(([ne,ee])=>j?ee(j):ne()),Le.reset()),j}function Ge(j,ne,ee,ae){const{scrollBehavior:J}=t;if(!Vr||!J)return Promise.resolve();const T=!ee&&eA($d(j.fullPath,0))||(ae||!ee)&&history.state&&history.state.scroll||null;return li().then(()=>J(j,ne,T)).then(R=>R&&XI(R)).catch(R=>ye(R,j,ne))}const qe=j=>r.go(j);let qt;const _t=new Set,Mt={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:k,resolve:N,options:t,push:F,replace:U,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Te.add,isReady:ht,install(j){j.component("RouterLink",PA),j.component("RouterView",DA),j.config.globalProperties.$router=Mt,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>re(c)}),Vr&&!qt&&c.value===vs&&(qt=!0,F(r.location).catch(ae=>{}));const ne={};for(const ae in vs)Object.defineProperty(ne,ae,{get:()=>c.value[ae],enumerable:!0});j.provide(Ol,Mt),j.provide(hh,_g(ne)),j.provide(mu,c);const ee=j.unmount;_t.add(j),j.unmount=function(){_t.delete(j),_t.size<1&&(u=vs,I&&I(),I=null,c.value=vs,qt=!1,me=!1),ee()}}};function yt(j){return j.reduce((ne,ee)=>ne.then(()=>v(ee)),Promise.resolve())}return Mt}function Dl(){return cn(Ol)}function C_(t){return cn(hh)}function P_(t,e){return function(){return t.apply(e,arguments)}}const{toString:xA}=Object.prototype,{getPrototypeOf:fh}=Object,{iterator:Vl,toStringTag:k_}=Symbol,xl=(t=>e=>{const n=xA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Tn=t=>(t=t.toLowerCase(),e=>xl(e)===t),Ml=t=>e=>typeof e===t,{isArray:ui}=Array,Yr=Ml("undefined");function Uo(t){return t!==null&&!Yr(t)&&t.constructor!==null&&!Yr(t.constructor)&&Kt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const N_=Tn("ArrayBuffer");function MA(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&N_(t.buffer),e}const LA=Ml("string"),Kt=Ml("function"),O_=Ml("number"),Bo=t=>t!==null&&typeof t=="object",FA=t=>t===!0||t===!1,Sa=t=>{if(xl(t)!=="object")return!1;const e=fh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(k_ in t)&&!(Vl in t)},UA=t=>{if(!Bo(t)||Uo(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},BA=Tn("Date"),$A=Tn("File"),jA=Tn("Blob"),HA=Tn("FileList"),qA=t=>Bo(t)&&Kt(t.pipe),zA=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Kt(t.append)&&((e=xl(t))==="formdata"||e==="object"&&Kt(t.toString)&&t.toString()==="[object FormData]"))},WA=Tn("URLSearchParams"),[KA,GA,QA,JA]=["ReadableStream","Request","Response","Headers"].map(Tn),YA=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $o(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),ui(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{if(Uo(t))return;const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let l;for(s=0;s<o;s++)l=i[s],e.call(null,t[l],l,t)}}function D_(t,e){if(Uo(t))return null;e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const ur=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,V_=t=>!Yr(t)&&t!==ur;function gu(){const{caseless:t,skipUndefined:e}=V_(this)&&this||{},n={},s=(r,i)=>{const o=t&&D_(n,i)||i;Sa(n[o])&&Sa(r)?n[o]=gu(n[o],r):Sa(r)?n[o]=gu({},r):ui(r)?n[o]=r.slice():(!e||!Yr(r))&&(n[o]=r)};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&$o(arguments[r],s);return n}const XA=(t,e,n,{allOwnKeys:s}={})=>($o(e,(r,i)=>{n&&Kt(r)?t[i]=P_(r,n):t[i]=r},{allOwnKeys:s}),t),ZA=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),eb=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},tb=(t,e,n,s)=>{let r,i,o;const l={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)o=r[i],(!s||s(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&fh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},nb=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},sb=t=>{if(!t)return null;if(ui(t))return t;let e=t.length;if(!O_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},rb=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&fh(Uint8Array)),ib=(t,e)=>{const s=(t&&t[Vl]).call(t);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},ob=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},ab=Tn("HTMLFormElement"),lb=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),ep=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),cb=Tn("RegExp"),x_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};$o(n,(r,i)=>{let o;(o=e(r,i,t))!==!1&&(s[i]=o||r)}),Object.defineProperties(t,s)},ub=t=>{x_(t,(e,n)=>{if(Kt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(Kt(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},hb=(t,e)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return ui(t)?s(t):s(String(t).split(e)),n},fb=()=>{},db=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function pb(t){return!!(t&&Kt(t.append)&&t[k_]==="FormData"&&t[Vl])}const mb=t=>{const e=new Array(10),n=(s,r)=>{if(Bo(s)){if(e.indexOf(s)>=0)return;if(Uo(s))return s;if(!("toJSON"in s)){e[r]=s;const i=ui(s)?[]:{};return $o(s,(o,l)=>{const c=n(o,r+1);!Yr(c)&&(i[l]=c)}),e[r]=void 0,i}}return s};return n(t,0)},gb=Tn("AsyncFunction"),_b=t=>t&&(Bo(t)||Kt(t))&&Kt(t.then)&&Kt(t.catch),M_=((t,e)=>t?setImmediate:e?((n,s)=>(ur.addEventListener("message",({source:r,data:i})=>{r===ur&&i===n&&s.length&&s.shift()()},!1),r=>{s.push(r),ur.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Kt(ur.postMessage)),yb=typeof queueMicrotask<"u"?queueMicrotask.bind(ur):typeof process<"u"&&process.nextTick||M_,vb=t=>t!=null&&Kt(t[Vl]),M={isArray:ui,isArrayBuffer:N_,isBuffer:Uo,isFormData:zA,isArrayBufferView:MA,isString:LA,isNumber:O_,isBoolean:FA,isObject:Bo,isPlainObject:Sa,isEmptyObject:UA,isReadableStream:KA,isRequest:GA,isResponse:QA,isHeaders:JA,isUndefined:Yr,isDate:BA,isFile:$A,isBlob:jA,isRegExp:cb,isFunction:Kt,isStream:qA,isURLSearchParams:WA,isTypedArray:rb,isFileList:HA,forEach:$o,merge:gu,extend:XA,trim:YA,stripBOM:ZA,inherits:eb,toFlatObject:tb,kindOf:xl,kindOfTest:Tn,endsWith:nb,toArray:sb,forEachEntry:ib,matchAll:ob,isHTMLForm:ab,hasOwnProperty:ep,hasOwnProp:ep,reduceDescriptors:x_,freezeMethods:ub,toObjectSet:hb,toCamelCase:lb,noop:fb,toFiniteNumber:db,findKey:D_,global:ur,isContextDefined:V_,isSpecCompliantForm:pb,toJSONObject:mb,isAsyncFn:gb,isThenable:_b,setImmediate:M_,asap:yb,isIterable:vb};function Ie(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r,this.status=r.status?r.status:null)}M.inherits(Ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:M.toJSONObject(this.config),code:this.code,status:this.status}}});const L_=Ie.prototype,F_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{F_[t]={value:t}});Object.defineProperties(Ie,F_);Object.defineProperty(L_,"isAxiosError",{value:!0});Ie.from=(t,e,n,s,r,i)=>{const o=Object.create(L_);M.toFlatObject(t,o,function(h){return h!==Error.prototype},u=>u!=="isAxiosError");const l=t&&t.message?t.message:"Error",c=e==null&&t?t.code:e;return Ie.call(o,l,c,n,s,r),t&&o.cause==null&&Object.defineProperty(o,"cause",{value:t,configurable:!0}),o.name=t&&t.name||"Error",i&&Object.assign(o,i),o};const Eb=null;function _u(t){return M.isPlainObject(t)||M.isArray(t)}function U_(t){return M.endsWith(t,"[]")?t.slice(0,-2):t}function tp(t,e,n){return t?t.concat(e).map(function(r,i){return r=U_(r),!n&&i?"["+r+"]":r}).join(n?".":""):e}function wb(t){return M.isArray(t)&&!t.some(_u)}const Tb=M.toFlatObject(M,{},null,function(e){return/^is[A-Z]/.test(e)});function Ll(t,e,n){if(!M.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=M.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,P){return!M.isUndefined(P[k])});const s=n.metaTokens,r=n.visitor||h,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&M.isSpecCompliantForm(e);if(!M.isFunction(r))throw new TypeError("visitor must be a function");function u(E){if(E===null)return"";if(M.isDate(E))return E.toISOString();if(M.isBoolean(E))return E.toString();if(!c&&M.isBlob(E))throw new Ie("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(E)||M.isTypedArray(E)?c&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function h(E,k,P){let N=E;if(E&&!P&&typeof E=="object"){if(M.endsWith(k,"{}"))k=s?k:k.slice(0,-2),E=JSON.stringify(E);else if(M.isArray(E)&&wb(E)||(M.isFileList(E)||M.endsWith(k,"[]"))&&(N=M.toArray(E)))return k=U_(k),N.forEach(function(x,F){!(M.isUndefined(x)||x===null)&&e.append(o===!0?tp([k],F,i):o===null?k:k+"[]",u(x))}),!1}return _u(E)?!0:(e.append(tp(P,k,i),u(E)),!1)}const d=[],m=Object.assign(Tb,{defaultVisitor:h,convertValue:u,isVisitable:_u});function g(E,k){if(!M.isUndefined(E)){if(d.indexOf(E)!==-1)throw Error("Circular reference detected in "+k.join("."));d.push(E),M.forEach(E,function(N,V){(!(M.isUndefined(N)||N===null)&&r.call(e,N,M.isString(V)?V.trim():V,k,m))===!0&&g(N,k?k.concat(V):[V])}),d.pop()}}if(!M.isObject(t))throw new TypeError("data must be an object");return g(t),e}function np(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function dh(t,e){this._pairs=[],t&&Ll(t,this,e)}const B_=dh.prototype;B_.append=function(e,n){this._pairs.push([e,n])};B_.toString=function(e){const n=e?function(s){return e.call(this,s,np)}:np;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Ib(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function $_(t,e,n){if(!e)return t;const s=n&&n.encode||Ib;M.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let i;if(r?i=r(e,n):i=M.isURLSearchParams(e)?e.toString():new dh(e,n).toString(s),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class sp{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){M.forEach(this.handlers,function(s){s!==null&&e(s)})}}const j_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ab=typeof URLSearchParams<"u"?URLSearchParams:dh,bb=typeof FormData<"u"?FormData:null,Sb=typeof Blob<"u"?Blob:null,Rb={isBrowser:!0,classes:{URLSearchParams:Ab,FormData:bb,Blob:Sb},protocols:["http","https","file","blob","url","data"]},ph=typeof window<"u"&&typeof document<"u",yu=typeof navigator=="object"&&navigator||void 0,Cb=ph&&(!yu||["ReactNative","NativeScript","NS"].indexOf(yu.product)<0),Pb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kb=ph&&window.location.href||"http://localhost",Nb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ph,hasStandardBrowserEnv:Cb,hasStandardBrowserWebWorkerEnv:Pb,navigator:yu,origin:kb},Symbol.toStringTag,{value:"Module"})),Vt={...Nb,...Rb};function Ob(t,e){return Ll(t,new Vt.classes.URLSearchParams,{visitor:function(n,s,r,i){return Vt.isNode&&M.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function Db(t){return M.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Vb(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}function H_(t){function e(n,s,r,i){let o=n[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=i>=n.length;return o=!o&&M.isArray(r)?r.length:o,c?(M.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!l):((!r[o]||!M.isObject(r[o]))&&(r[o]=[]),e(n,s,r[o],i)&&M.isArray(r[o])&&(r[o]=Vb(r[o])),!l)}if(M.isFormData(t)&&M.isFunction(t.entries)){const n={};return M.forEachEntry(t,(s,r)=>{e(Db(s),r,n,0)}),n}return null}function xb(t,e,n){if(M.isString(t))try{return(e||JSON.parse)(t),M.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(t)}const jo={transitional:j_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=M.isObject(e);if(i&&M.isHTMLForm(e)&&(e=new FormData(e)),M.isFormData(e))return r?JSON.stringify(H_(e)):e;if(M.isArrayBuffer(e)||M.isBuffer(e)||M.isStream(e)||M.isFile(e)||M.isBlob(e)||M.isReadableStream(e))return e;if(M.isArrayBufferView(e))return e.buffer;if(M.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Ob(e,this.formSerializer).toString();if((l=M.isFileList(e))||s.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ll(l?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),xb(e)):e}],transformResponse:[function(e){const n=this.transitional||jo.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(M.isResponse(e)||M.isReadableStream(e))return e;if(e&&M.isString(e)&&(s&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?Ie.from(l,Ie.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vt.classes.FormData,Blob:Vt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};M.forEach(["delete","get","head","post","put","patch"],t=>{jo.headers[t]={}});const Mb=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Lb=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!n||e[n]&&Mb[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},rp=Symbol("internals");function Ui(t){return t&&String(t).trim().toLowerCase()}function Ra(t){return t===!1||t==null?t:M.isArray(t)?t.map(Ra):String(t)}function Fb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const Ub=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Fc(t,e,n,s,r){if(M.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!M.isString(e)){if(M.isString(s))return e.indexOf(s)!==-1;if(M.isRegExp(s))return s.test(e)}}function Bb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function $b(t,e){const n=M.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}let Gt=class{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function i(l,c,u){const h=Ui(c);if(!h)throw new Error("header name must be a non-empty string");const d=M.findKey(r,h);(!d||r[d]===void 0||u===!0||u===void 0&&r[d]!==!1)&&(r[d||c]=Ra(l))}const o=(l,c)=>M.forEach(l,(u,h)=>i(u,h,c));if(M.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(M.isString(e)&&(e=e.trim())&&!Ub(e))o(Lb(e),n);else if(M.isObject(e)&&M.isIterable(e)){let l={},c,u;for(const h of e){if(!M.isArray(h))throw TypeError("Object iterator must return a key-value pair");l[u=h[0]]=(c=l[u])?M.isArray(c)?[...c,h[1]]:[c,h[1]]:h[1]}o(l,n)}else e!=null&&i(n,e,s);return this}get(e,n){if(e=Ui(e),e){const s=M.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return Fb(r);if(M.isFunction(n))return n.call(this,r,s);if(M.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ui(e),e){const s=M.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||Fc(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function i(o){if(o=Ui(o),o){const l=M.findKey(s,o);l&&(!n||Fc(s,s[l],l,n))&&(delete s[l],r=!0)}}return M.isArray(e)?e.forEach(i):i(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!e||Fc(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const n=this,s={};return M.forEach(this,(r,i)=>{const o=M.findKey(s,i);if(o){n[o]=Ra(r),delete n[i];return}const l=e?Bb(i):String(i).trim();l!==i&&delete n[i],n[l]=Ra(r),s[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return M.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&M.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[rp]=this[rp]={accessors:{}}).accessors,r=this.prototype;function i(o){const l=Ui(o);s[l]||($b(r,o),s[l]=!0)}return M.isArray(e)?e.forEach(i):i(e),this}};Gt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);M.reduceDescriptors(Gt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});M.freezeMethods(Gt);function Uc(t,e){const n=this||jo,s=e||n,r=Gt.from(s.headers);let i=s.data;return M.forEach(t,function(l){i=l.call(n,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function q_(t){return!!(t&&t.__CANCEL__)}function hi(t,e,n){Ie.call(this,t??"canceled",Ie.ERR_CANCELED,e,n),this.name="CanceledError"}M.inherits(hi,Ie,{__CANCEL__:!0});function z_(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new Ie("Request failed with status code "+n.status,[Ie.ERR_BAD_REQUEST,Ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function jb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Hb(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),h=s[i];o||(o=u),n[r]=c,s[r]=u;let d=i,m=0;for(;d!==r;)m+=n[d++],d=d%t;if(r=(r+1)%t,r===i&&(i=(i+1)%t),u-o<e)return;const g=h&&u-h;return g?Math.round(m*1e3/g):void 0}}function qb(t,e){let n=0,s=1e3/e,r,i;const o=(u,h=Date.now())=>{n=h,r=null,i&&(clearTimeout(i),i=null),t(...u)};return[(...u)=>{const h=Date.now(),d=h-n;d>=s?o(u,h):(r=u,i||(i=setTimeout(()=>{i=null,o(r)},s-d)))},()=>r&&o(r)]}const Qa=(t,e,n=3)=>{let s=0;const r=Hb(50,250);return qb(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,c=o-s,u=r(c),h=o<=l;s=o;const d={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&h?(l-o)/u:void 0,event:i,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(d)},n)},ip=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},op=t=>(...e)=>M.asap(()=>t(...e)),zb=Vt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Vt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Vt.origin),Vt.navigator&&/(msie|trident)/i.test(Vt.navigator.userAgent)):()=>!0,Wb=Vt.hasStandardBrowserEnv?{write(t,e,n,s,r,i,o){if(typeof document>"u")return;const l=[`${t}=${encodeURIComponent(e)}`];M.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),M.isString(s)&&l.push(`path=${s}`),M.isString(r)&&l.push(`domain=${r}`),i===!0&&l.push("secure"),M.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Kb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Gb(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function W_(t,e,n){let s=!Kb(e);return t&&(s||n==!1)?Gb(t,e):e}const ap=t=>t instanceof Gt?{...t}:t;function vr(t,e){e=e||{};const n={};function s(u,h,d,m){return M.isPlainObject(u)&&M.isPlainObject(h)?M.merge.call({caseless:m},u,h):M.isPlainObject(h)?M.merge({},h):M.isArray(h)?h.slice():h}function r(u,h,d,m){if(M.isUndefined(h)){if(!M.isUndefined(u))return s(void 0,u,d,m)}else return s(u,h,d,m)}function i(u,h){if(!M.isUndefined(h))return s(void 0,h)}function o(u,h){if(M.isUndefined(h)){if(!M.isUndefined(u))return s(void 0,u)}else return s(void 0,h)}function l(u,h,d){if(d in e)return s(u,h);if(d in t)return s(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,h,d)=>r(ap(u),ap(h),d,!0)};return M.forEach(Object.keys({...t,...e}),function(h){const d=c[h]||r,m=d(t[h],e[h],h);M.isUndefined(m)&&d!==l||(n[h]=m)}),n}const K_=t=>{const e=vr({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:i,headers:o,auth:l}=e;if(e.headers=o=Gt.from(o),e.url=$_(W_(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),M.isFormData(n)){if(Vt.hasStandardBrowserEnv||Vt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(M.isFunction(n.getHeaders)){const c=n.getHeaders(),u=["content-type","content-length"];Object.entries(c).forEach(([h,d])=>{u.includes(h.toLowerCase())&&o.set(h,d)})}}if(Vt.hasStandardBrowserEnv&&(s&&M.isFunction(s)&&(s=s(e)),s||s!==!1&&zb(e.url))){const c=r&&i&&Wb.read(i);c&&o.set(r,c)}return e},Qb=typeof XMLHttpRequest<"u",Jb=Qb&&function(t){return new Promise(function(n,s){const r=K_(t);let i=r.data;const o=Gt.from(r.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=r,h,d,m,g,E;function k(){g&&g(),E&&E(),r.cancelToken&&r.cancelToken.unsubscribe(h),r.signal&&r.signal.removeEventListener("abort",h)}let P=new XMLHttpRequest;P.open(r.method.toUpperCase(),r.url,!0),P.timeout=r.timeout;function N(){if(!P)return;const x=Gt.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),U={data:!l||l==="text"||l==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:x,config:t,request:P};z_(function(A){n(A),k()},function(A){s(A),k()},U),P=null}"onloadend"in P?P.onloadend=N:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(N)},P.onabort=function(){P&&(s(new Ie("Request aborted",Ie.ECONNABORTED,t,P)),P=null)},P.onerror=function(F){const U=F&&F.message?F.message:"Network Error",B=new Ie(U,Ie.ERR_NETWORK,t,P);B.event=F||null,s(B),P=null},P.ontimeout=function(){let F=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const U=r.transitional||j_;r.timeoutErrorMessage&&(F=r.timeoutErrorMessage),s(new Ie(F,U.clarifyTimeoutError?Ie.ETIMEDOUT:Ie.ECONNABORTED,t,P)),P=null},i===void 0&&o.setContentType(null),"setRequestHeader"in P&&M.forEach(o.toJSON(),function(F,U){P.setRequestHeader(U,F)}),M.isUndefined(r.withCredentials)||(P.withCredentials=!!r.withCredentials),l&&l!=="json"&&(P.responseType=r.responseType),u&&([m,E]=Qa(u,!0),P.addEventListener("progress",m)),c&&P.upload&&([d,g]=Qa(c),P.upload.addEventListener("progress",d),P.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(h=x=>{P&&(s(!x||x.type?new hi(null,t,P):x),P.abort(),P=null)},r.cancelToken&&r.cancelToken.subscribe(h),r.signal&&(r.signal.aborted?h():r.signal.addEventListener("abort",h)));const V=jb(r.url);if(V&&Vt.protocols.indexOf(V)===-1){s(new Ie("Unsupported protocol "+V+":",Ie.ERR_BAD_REQUEST,t));return}P.send(i||null)})},Yb=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,r;const i=function(u){if(!r){r=!0,l();const h=u instanceof Error?u:this.reason;s.abort(h instanceof Ie?h:new hi(h instanceof Error?h.message:h))}};let o=e&&setTimeout(()=>{o=null,i(new Ie(`timeout ${e} of ms exceeded`,Ie.ETIMEDOUT))},e);const l=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:c}=s;return c.unsubscribe=()=>M.asap(l),c}},Xb=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,r;for(;s<n;)r=s+e,yield t.slice(s,r),s=r},Zb=async function*(t,e){for await(const n of eS(t))yield*Xb(n,e)},eS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},lp=(t,e,n,s)=>{const r=Zb(t,e);let i=0,o,l=c=>{o||(o=!0,s&&s(c))};return new ReadableStream({async pull(c){try{const{done:u,value:h}=await r.next();if(u){l(),c.close();return}let d=h.byteLength;if(n){let m=i+=d;n(m)}c.enqueue(new Uint8Array(h))}catch(u){throw l(u),u}},cancel(c){return l(c),r.return()}},{highWaterMark:2})},cp=64*1024,{isFunction:ma}=M,tS=(({Request:t,Response:e})=>({Request:t,Response:e}))(M.global),{ReadableStream:up,TextEncoder:hp}=M.global,fp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},nS=t=>{t=M.merge.call({skipUndefined:!0},tS,t);const{fetch:e,Request:n,Response:s}=t,r=e?ma(e):typeof fetch=="function",i=ma(n),o=ma(s);if(!r)return!1;const l=r&&ma(up),c=r&&(typeof hp=="function"?(E=>k=>E.encode(k))(new hp):async E=>new Uint8Array(await new n(E).arrayBuffer())),u=i&&l&&fp(()=>{let E=!1;const k=new n(Vt.origin,{body:new up,method:"POST",get duplex(){return E=!0,"half"}}).headers.has("Content-Type");return E&&!k}),h=o&&l&&fp(()=>M.isReadableStream(new s("").body)),d={stream:h&&(E=>E.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(E=>{!d[E]&&(d[E]=(k,P)=>{let N=k&&k[E];if(N)return N.call(k);throw new Ie(`Response type '${E}' is not supported`,Ie.ERR_NOT_SUPPORT,P)})});const m=async E=>{if(E==null)return 0;if(M.isBlob(E))return E.size;if(M.isSpecCompliantForm(E))return(await new n(Vt.origin,{method:"POST",body:E}).arrayBuffer()).byteLength;if(M.isArrayBufferView(E)||M.isArrayBuffer(E))return E.byteLength;if(M.isURLSearchParams(E)&&(E=E+""),M.isString(E))return(await c(E)).byteLength},g=async(E,k)=>{const P=M.toFiniteNumber(E.getContentLength());return P??m(k)};return async E=>{let{url:k,method:P,data:N,signal:V,cancelToken:x,timeout:F,onDownloadProgress:U,onUploadProgress:B,responseType:A,headers:_,withCredentials:v="same-origin",fetchOptions:b}=K_(E),C=e||fetch;A=A?(A+"").toLowerCase():"text";let S=Yb([V,x&&x.toAbortSignal()],F),I=null;const ge=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let Le;try{if(B&&u&&P!=="get"&&P!=="head"&&(Le=await g(_,N))!==0){let Ge=new n(k,{method:"POST",body:N,duplex:"half"}),qe;if(M.isFormData(N)&&(qe=Ge.headers.get("content-type"))&&_.setContentType(qe),Ge.body){const[qt,_t]=ip(Le,Qa(op(B)));N=lp(Ge.body,cp,qt,_t)}}M.isString(v)||(v=v?"include":"omit");const Te=i&&"credentials"in n.prototype,me={...b,signal:S,method:P.toUpperCase(),headers:_.normalize().toJSON(),body:N,duplex:"half",credentials:Te?v:void 0};I=i&&new n(k,me);let ye=await(i?C(I,b):C(k,me));const ht=h&&(A==="stream"||A==="response");if(h&&(U||ht&&ge)){const Ge={};["status","statusText","headers"].forEach(Mt=>{Ge[Mt]=ye[Mt]});const qe=M.toFiniteNumber(ye.headers.get("content-length")),[qt,_t]=U&&ip(qe,Qa(op(U),!0))||[];ye=new s(lp(ye.body,cp,qt,()=>{_t&&_t(),ge&&ge()}),Ge)}A=A||"text";let Qt=await d[M.findKey(d,A)||"text"](ye,E);return!ht&&ge&&ge(),await new Promise((Ge,qe)=>{z_(Ge,qe,{data:Qt,headers:Gt.from(ye.headers),status:ye.status,statusText:ye.statusText,config:E,request:I})})}catch(Te){throw ge&&ge(),Te&&Te.name==="TypeError"&&/Load failed|fetch/i.test(Te.message)?Object.assign(new Ie("Network Error",Ie.ERR_NETWORK,E,I),{cause:Te.cause||Te}):Ie.from(Te,Te&&Te.code,E,I)}}},sS=new Map,G_=t=>{let e=t&&t.env||{};const{fetch:n,Request:s,Response:r}=e,i=[s,r,n];let o=i.length,l=o,c,u,h=sS;for(;l--;)c=i[l],u=h.get(c),u===void 0&&h.set(c,u=l?new Map:nS(e)),h=u;return u};G_();const mh={http:Eb,xhr:Jb,fetch:{get:G_}};M.forEach(mh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const dp=t=>`- ${t}`,rS=t=>M.isFunction(t)||t===null||t===!1;function iS(t,e){t=M.isArray(t)?t:[t];const{length:n}=t;let s,r;const i={};for(let o=0;o<n;o++){s=t[o];let l;if(r=s,!rS(s)&&(r=mh[(l=String(s)).toLowerCase()],r===void 0))throw new Ie(`Unknown adapter '${l}'`);if(r&&(M.isFunction(r)||(r=r.get(e))))break;i[l||"#"+o]=r}if(!r){const o=Object.entries(i).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(dp).join(`
`):" "+dp(o[0]):"as no adapter specified";throw new Ie("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r}const Q_={getAdapter:iS,adapters:mh};function Bc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new hi(null,t)}function pp(t){return Bc(t),t.headers=Gt.from(t.headers),t.data=Uc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Q_.getAdapter(t.adapter||jo.adapter,t)(t).then(function(s){return Bc(t),s.data=Uc.call(t,t.transformResponse,s),s.headers=Gt.from(s.headers),s},function(s){return q_(s)||(Bc(t),s&&s.response&&(s.response.data=Uc.call(t,t.transformResponse,s.response),s.response.headers=Gt.from(s.response.headers))),Promise.reject(s)})}const J_="1.13.2",Fl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Fl[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const mp={};Fl.transitional=function(e,n,s){function r(i,o){return"[Axios v"+J_+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,l)=>{if(e===!1)throw new Ie(r(o," has been removed"+(n?" in "+n:"")),Ie.ERR_DEPRECATED);return n&&!mp[o]&&(mp[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,l):!0}};Fl.spelling=function(e){return(n,s)=>(console.warn(`${s} is likely a misspelling of ${e}`),!0)};function oS(t,e,n){if(typeof t!="object")throw new Ie("options must be an object",Ie.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const l=t[i],c=l===void 0||o(l,i,t);if(c!==!0)throw new Ie("option "+i+" must be "+c,Ie.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ie("Unknown option "+i,Ie.ERR_BAD_OPTION)}}const Ca={assertOptions:oS,validators:Fl},Sn=Ca.validators;let gr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new sp,response:new sp}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=vr(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&Ca.assertOptions(s,{silentJSONParsing:Sn.transitional(Sn.boolean),forcedJSONParsing:Sn.transitional(Sn.boolean),clarifyTimeoutError:Sn.transitional(Sn.boolean)},!1),r!=null&&(M.isFunction(r)?n.paramsSerializer={serialize:r}:Ca.assertOptions(r,{encode:Sn.function,serialize:Sn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ca.assertOptions(n,{baseUrl:Sn.spelling("baseURL"),withXsrfToken:Sn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&M.merge(i.common,i[n.method]);i&&M.forEach(["delete","get","head","post","put","patch","common"],E=>{delete i[E]}),n.headers=Gt.concat(o,i);const l=[];let c=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(n)===!1||(c=c&&k.synchronous,l.unshift(k.fulfilled,k.rejected))});const u=[];this.interceptors.response.forEach(function(k){u.push(k.fulfilled,k.rejected)});let h,d=0,m;if(!c){const E=[pp.bind(this),void 0];for(E.unshift(...l),E.push(...u),m=E.length,h=Promise.resolve(n);d<m;)h=h.then(E[d++],E[d++]);return h}m=l.length;let g=n;for(;d<m;){const E=l[d++],k=l[d++];try{g=E(g)}catch(P){k.call(this,P);break}}try{h=pp.call(this,g)}catch(E){return Promise.reject(E)}for(d=0,m=u.length;d<m;)h=h.then(u[d++],u[d++]);return h}getUri(e){e=vr(this.defaults,e);const n=W_(e.baseURL,e.url,e.allowAbsoluteUrls);return $_(n,e.params,e.paramsSerializer)}};M.forEach(["delete","get","head","options"],function(e){gr.prototype[e]=function(n,s){return this.request(vr(s||{},{method:e,url:n,data:(s||{}).data}))}});M.forEach(["post","put","patch"],function(e){function n(s){return function(i,o,l){return this.request(vr(l||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}gr.prototype[e]=n(),gr.prototype[e+"Form"]=n(!0)});let aS=class Y_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(l=>{s.subscribe(l),i=l}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,l){s.reason||(s.reason=new hi(i,o,l),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Y_(function(r){e=r}),cancel:e}}};function lS(t){return function(n){return t.apply(null,n)}}function cS(t){return M.isObject(t)&&t.isAxiosError===!0}const vu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(vu).forEach(([t,e])=>{vu[e]=t});function X_(t){const e=new gr(t),n=P_(gr.prototype.request,e);return M.extend(n,gr.prototype,e,{allOwnKeys:!0}),M.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return X_(vr(t,r))},n}const st=X_(jo);st.Axios=gr;st.CanceledError=hi;st.CancelToken=aS;st.isCancel=q_;st.VERSION=J_;st.toFormData=Ll;st.AxiosError=Ie;st.Cancel=st.CanceledError;st.all=function(e){return Promise.all(e)};st.spread=lS;st.isAxiosError=cS;st.mergeConfig=vr;st.AxiosHeaders=Gt;st.formToJSON=t=>H_(M.isHTMLForm(t)?new FormData(t):t);st.getAdapter=Q_.getAdapter;st.HttpStatusCode=vu;st.default=st;const{Axios:qD,AxiosError:zD,CanceledError:WD,isCancel:KD,CancelToken:GD,VERSION:QD,all:JD,Cancel:YD,isAxiosError:XD,spread:ZD,toFormData:eV,AxiosHeaders:tV,HttpStatusCode:nV,formToJSON:sV,getAdapter:rV,mergeConfig:iV}=st,Ht=st.create({baseURL:"https://api.themoviedb.org/3",timeout:1e4});Ht.interceptors.request.use(t=>{const e="2880ac77339fca10a79bd2e5fd5119d1",n=localStorage.getItem("app-lang")||"ko-KR",s=localStorage.getItem("include-adult")==="true";return t.params||(t.params={}),t.params.api_key=e,t.params.language=n,t.params.include_adult=s,t},t=>Promise.reject(t));const uS=()=>{};var gp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},hS=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ey={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),s.push(n[h],n[d],n[m],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Z_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||d==null)throw new fS;const m=i<<2|l>>4;if(s.push(m),u!==64){const g=l<<4&240|u>>2;if(s.push(g),d!==64){const E=u<<6&192|d;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dS=function(t){const e=Z_(t);return ey.encodeByteArray(e,!0)},Ja=function(t){return dS(t).replace(/\./g,"")},ty=function(t){try{return ey.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=()=>pS().__FIREBASE_DEFAULTS__,gS=()=>{if(typeof process>"u"||typeof gp>"u")return;const t=gp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_S=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ty(t[1]);return e&&JSON.parse(e)},Ul=()=>{try{return uS()||mS()||gS()||_S()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ny=t=>{var e,n;return(n=(e=Ul())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},yS=t=>{const e=ny(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},sy=()=>{var t;return(t=Ul())==null?void 0:t.config},ry=t=>{var e;return(e=Ul())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function iy(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ja(JSON.stringify(n)),Ja(JSON.stringify(o)),""].join(".")}const io={};function wS(){const t={prod:[],emulator:[]};for(const e of Object.keys(io))io[e]?t.emulator.push(e):t.prod.push(e);return t}function TS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _p=!1;function oy(t,e){if(typeof window>"u"||typeof document>"u"||!fi(window.location.host)||io[t]===e||io[t]||_p)return;io[t]=e;function n(m){return`__firebase__banner__${m}`}const s="__firebase__banner",i=wS().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{_p=!0,o()},m}function h(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function d(){const m=TS(s),g=n("text"),E=document.getElementById(g)||document.createElement("span"),k=n("learnmore"),P=document.getElementById(k)||document.createElement("a"),N=n("preprendIcon"),V=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const x=m.element;l(x),h(P,k);const F=u();c(V,N),x.append(V,E,P,F),document.body.appendChild(x)}i?(E.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function AS(){var e;const t=(e=Ul())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function RS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CS(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PS(){return!AS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kS(){try{return typeof indexedDB=="object"}catch{return!1}}function NS(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="FirebaseError";class us extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=OS,Object.setPrototypeOf(this,us.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?DS(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new us(r,l,s)}}function DS(t,e){return t.replace(VS,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const VS=/\{\$([^}]+)}/g;function xS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(yp(i)&&yp(o)){if(!rs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function yp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MS(t,e){const n=new LS(t,e);return n.subscribe.bind(n)}class LS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");FS(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=$c),r.error===void 0&&(r.error=$c),r.complete===void 0&&(r.complete=$c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $c(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new vS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($S(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:BS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BS(t){return t===or?void 0:t}function $S(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new US(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const HS={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},qS=Re.INFO,zS={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},WS=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=zS[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gh{constructor(e){this.name=e,this._logLevel=qS,this._logHandler=WS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const KS=(t,e)=>e.some(n=>t instanceof n);let vp,Ep;function GS(){return vp||(vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QS(){return Ep||(Ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ay=new WeakMap,Eu=new WeakMap,ly=new WeakMap,jc=new WeakMap,_h=new WeakMap;function JS(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Os(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ay.set(n,t)}).catch(()=>{}),_h.set(e,t),e}function YS(t){if(Eu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Eu.set(t,e)}let wu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ly.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Os(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XS(t){wu=t(wu)}function ZS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Hc(this),e,...n);return ly.set(s,e.sort?e.sort():[e]),Os(s)}:QS().includes(t)?function(...e){return t.apply(Hc(this),e),Os(ay.get(this))}:function(...e){return Os(t.apply(Hc(this),e))}}function eR(t){return typeof t=="function"?ZS(t):(t instanceof IDBTransaction&&YS(t),KS(t,GS())?new Proxy(t,wu):t)}function Os(t){if(t instanceof IDBRequest)return JS(t);if(jc.has(t))return jc.get(t);const e=eR(t);return e!==t&&(jc.set(t,e),_h.set(e,t)),e}const Hc=t=>_h.get(t);function tR(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=Os(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Os(o.result),c.oldVersion,c.newVersion,Os(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const nR=["get","getKey","getAll","getAllKeys","count"],sR=["put","add","delete","clear"],qc=new Map;function wp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qc.get(e))return qc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=sR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||nR.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return qc.set(e,i),i}XS(t=>({...t,get:(e,n,s)=>wp(e,n)||t.get(e,n,s),has:(e,n)=>!!wp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function iR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tu="@firebase/app",Tp="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new gh("@firebase/app"),oR="@firebase/app-compat",aR="@firebase/analytics-compat",lR="@firebase/analytics",cR="@firebase/app-check-compat",uR="@firebase/app-check",hR="@firebase/auth",fR="@firebase/auth-compat",dR="@firebase/database",pR="@firebase/data-connect",mR="@firebase/database-compat",gR="@firebase/functions",_R="@firebase/functions-compat",yR="@firebase/installations",vR="@firebase/installations-compat",ER="@firebase/messaging",wR="@firebase/messaging-compat",TR="@firebase/performance",IR="@firebase/performance-compat",AR="@firebase/remote-config",bR="@firebase/remote-config-compat",SR="@firebase/storage",RR="@firebase/storage-compat",CR="@firebase/firestore",PR="@firebase/ai",kR="@firebase/firestore-compat",NR="firebase",OR="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="[DEFAULT]",DR={[Tu]:"fire-core",[oR]:"fire-core-compat",[lR]:"fire-analytics",[aR]:"fire-analytics-compat",[uR]:"fire-app-check",[cR]:"fire-app-check-compat",[hR]:"fire-auth",[fR]:"fire-auth-compat",[dR]:"fire-rtdb",[pR]:"fire-data-connect",[mR]:"fire-rtdb-compat",[gR]:"fire-fn",[_R]:"fire-fn-compat",[yR]:"fire-iid",[vR]:"fire-iid-compat",[ER]:"fire-fcm",[wR]:"fire-fcm-compat",[TR]:"fire-perf",[IR]:"fire-perf-compat",[AR]:"fire-rc",[bR]:"fire-rc-compat",[SR]:"fire-gcs",[RR]:"fire-gcs-compat",[CR]:"fire-fst",[kR]:"fire-fst-compat",[PR]:"fire-vertex","fire-js":"fire-js",[NR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new Map,VR=new Map,Au=new Map;function Ip(t,e){try{t.container.addComponent(e)}catch(n){is.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xr(t){const e=t.name;if(Au.has(e))return is.debug(`There were multiple attempts to register component ${e}.`),!1;Au.set(e,t);for(const n of Ya.values())Ip(n,t);for(const n of VR.values())Ip(n,t);return!0}function yh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ds=new Ho("app","Firebase",xR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ds.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=OR;function cy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Iu,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Ds.create("bad-app-name",{appName:String(r)});if(n||(n=sy()),!n)throw Ds.create("no-options");const i=Ya.get(r);if(i){if(rs(n,i.options)&&rs(s,i.config))return i;throw Ds.create("duplicate-app",{appName:r})}const o=new jS(r);for(const c of Au.values())o.addComponent(c);const l=new MR(n,s,o);return Ya.set(r,l),l}function uy(t=Iu){const e=Ya.get(t);if(!e&&t===Iu&&sy())return cy();if(!e)throw Ds.create("no-app",{appName:t});return e}function Vs(t,e,n){let s=DR[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),is.warn(o.join(" "));return}Xr(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="firebase-heartbeat-database",FR=1,wo="firebase-heartbeat-store";let zc=null;function hy(){return zc||(zc=tR(LR,FR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ds.create("idb-open",{originalErrorMessage:t.message})})),zc}async function UR(t){try{const n=(await hy()).transaction(wo),s=await n.objectStore(wo).get(fy(t));return await n.done,s}catch(e){if(e instanceof us)is.warn(e.message);else{const n=Ds.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});is.warn(n.message)}}}async function Ap(t,e){try{const s=(await hy()).transaction(wo,"readwrite");await s.objectStore(wo).put(e,fy(t)),await s.done}catch(n){if(n instanceof us)is.warn(n.message);else{const s=Ds.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});is.warn(s.message)}}}function fy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=1024,$R=30;class jR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>$R){const o=zR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){is.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bp(),{heartbeatsToSend:s,unsentEntries:r}=HR(this._heartbeatsCache.heartbeats),i=Ja(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return is.warn(n),""}}}function bp(){return new Date().toISOString().substring(0,10)}function HR(t,e=BR){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Sp(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Sp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class qR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kS()?NS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await UR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sp(t){return Ja(JSON.stringify({version:2,heartbeats:t})).length}function zR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){Xr(new Er("platform-logger",e=>new rR(e),"PRIVATE")),Xr(new Er("heartbeat",e=>new jR(e),"PRIVATE")),Vs(Tu,Tp,t),Vs(Tu,Tp,"esm2020"),Vs("fire-js","")}WR("");var KR="firebase",GR="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vs(KR,GR,"app");function dy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QR=dy,py=new Ho("auth","Firebase",dy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new gh("@firebase/auth");function JR(t,...e){Xa.logLevel<=Re.WARN&&Xa.warn(`Auth (${di}): ${t}`,...e)}function Pa(t,...e){Xa.logLevel<=Re.ERROR&&Xa.error(`Auth (${di}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw Eh(t,...e)}function yn(t,...e){return Eh(t,...e)}function vh(t,e,n){const s={...QR(),[e]:n};return new Ho("auth","Firebase",s).create(e,{appName:t.name})}function es(t){return vh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function YR(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&fn(t,"argument-error"),vh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return py.create(t,...e)}function de(t,e,...n){if(!t)throw Eh(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pa(e),new Error(e)}function os(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function XR(){return Rp()==="http:"||Rp()==="https:"}function Rp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XR()||SS()||"connection"in navigator)?navigator.onLine:!0}function eC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,os(n>e,"Short delay should be less than long delay!"),this.isMobile=IS()||RS()}get(){return ZR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t,e){os(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sC=new zo(3e4,6e4);function zs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ws(t,e,n,s,r={}){return gy(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=qo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return bS()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&fi(t.emulatorConfig.host)&&(u.credentials="include"),my.fetch()(await _y(t,t.config.apiHost,n,l),u)})}async function gy(t,e,n){t._canInitEmulator=!1;const s={...tC,...e};try{const r=new iC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ga(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ga(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ga(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vh(t,h,u);fn(t,h)}}catch(r){if(r instanceof us)throw r;fn(t,"network-request-failed",{message:String(r)})}}async function Wo(t,e,n,s,r={}){const i=await Ws(t,e,n,s,r);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function _y(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?wh(t.config,r):`${t.config.apiScheme}://${r}`;return nC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function rC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(yn(this.auth,"network-request-failed")),sC.get())})}}function ga(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=yn(t,e,s);return r.customData._tokenResponse=n,r}function Cp(t){return t!==void 0&&t.enterprise!==void 0}class oC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aC(t,e){return Ws(t,"GET","/v2/recaptchaConfig",zs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(t,e){return Ws(t,"POST","/v1/accounts:delete",e)}async function Za(t,e){return Ws(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cC(t,e=!1){const n=Tt(t),s=await n.getIdToken(e),r=Th(s);de(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:oo(Wc(r.auth_time)),issuedAtTime:oo(Wc(r.iat)),expirationTime:oo(Wc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wc(t){return Number(t)*1e3}function Th(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Pa("JWT malformed, contained fewer than 3 sections"),null;try{const r=ty(n);return r?JSON.parse(r):(Pa("Failed to decode base64 JWT payload"),null)}catch(r){return Pa("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Pp(t){const e=Th(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof us&&uC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function uC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(t){var d;const e=t.auth,n=await t.getIdToken(),s=await To(t,Za(e,{idToken:n}));de(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=(d=r.providerUserInfo)!=null&&d.length?yy(r.providerUserInfo):[],o=dC(t.providerData,i),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Su(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function fC(t){const e=Tt(t);await el(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function yy(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e){const n=await gy(t,{},async()=>{const s=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await _y(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&fi(t.emulatorConfig.host)&&(c.credentials="include"),my.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mC(t,e){return Ws(t,"POST","/v2/accounts:revokeToken",zs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Pp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await pC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new jr;return s&&(de(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(de(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new hC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Su(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await To(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cC(this,e)}reload(){return fC(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await el(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(es(this.auth));const e=await this.getIdToken();return await To(this,lC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:m,isAnonymous:g,providerData:E,stsTokenManager:k}=n;de(d&&k,e,"internal-error");const P=jr.fromJSON(this.name,k);de(typeof d=="string",e,"internal-error"),Es(s,e.name),Es(r,e.name),de(typeof m=="boolean",e,"internal-error"),de(typeof g=="boolean",e,"internal-error"),Es(i,e.name),Es(o,e.name),Es(l,e.name),Es(c,e.name),Es(u,e.name),Es(h,e.name);const N=new gn({uid:d,auth:e,email:r,emailVerified:m,displayName:s,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:P,createdAt:u,lastLoginAt:h});return E&&Array.isArray(E)&&(N.providerData=E.map(V=>({...V}))),c&&(N._redirectEventId=c),N}static async _fromIdTokenResponse(e,n,s=!1){const r=new jr;r.updateFromServerResponse(n);const i=new gn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await el(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];de(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?yy(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new jr;l.updateFromIdToken(s);const c=new gn({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Su(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=new Map;function Xn(t){os(t instanceof Function,"Expected a class definition");let e=kp.get(t);return e?(os(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vy.type="NONE";const Np=vy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t,e,n){return`firebase:${t}:${e}:${n}`}class Hr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ka(this.userKey,r.apiKey,i),this.fullPersistenceKey=ka("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Za(this.auth,{idToken:e}).catch(()=>{});return n?gn._fromGetAccountInfoResponse(this.auth,n,e):null}return gn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Hr(Xn(Np),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Xn(Np);const o=ka(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const m=await Za(e,{idToken:h}).catch(()=>{});if(!m)break;d=await gn._fromGetAccountInfoResponse(e,m,h)}else d=gn._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Hr(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Hr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ey(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(by(e))return"Blackberry";if(Sy(e))return"Webos";if(wy(e))return"Safari";if((e.includes("chrome/")||Ty(e))&&!e.includes("edge/"))return"Chrome";if(Ay(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ey(t=xt()){return/firefox\//i.test(t)}function wy(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ty(t=xt()){return/crios\//i.test(t)}function Iy(t=xt()){return/iemobile/i.test(t)}function Ay(t=xt()){return/android/i.test(t)}function by(t=xt()){return/blackberry/i.test(t)}function Sy(t=xt()){return/webos/i.test(t)}function Ih(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gC(t=xt()){var e;return Ih(t)&&!!((e=window.navigator)!=null&&e.standalone)}function _C(){return CS()&&document.documentMode===10}function Ry(t=xt()){return Ih(t)||Ay(t)||Sy(t)||by(t)||/windows phone/i.test(t)||Iy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t,e=[]){let n;switch(t){case"Browser":n=Op(xt());break;case"Worker":n=`${Op(xt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${di}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e={}){return Ws(t,"GET","/v2/passwordPolicy",zs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=6;class wC{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??EC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dp(this),this.idTokenSubscription=new Dp(this),this.beforeStateQueue=new yC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=py,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Za(this,{idToken:e}),s=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await el(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(es(this));const n=e?Tt(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(es(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(es(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vC(this),n=new wC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ho("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await mC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(en(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&JR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ks(t){return Tt(t)}class Dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=MS(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IC(t){Bl=t}function Py(t){return Bl.loadJS(t)}function AC(){return Bl.recaptchaEnterpriseScript}function bC(){return Bl.gapiScript}function SC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class RC{constructor(){this.enterprise=new CC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class CC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const PC="recaptcha-enterprise",ky="NO_RECAPTCHA";class kC{constructor(e){this.type=PC,this.auth=Ks(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{aC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new oC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function r(i,o,l){const c=window.grecaptcha;Cp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ky)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new RC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(l=>{if(!n&&Cp(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=AC();c.length!==0&&(c+=l),Py(c).then(()=>{r(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Vp(t,e,n,s=!1,r=!1){const i=new kC(t);let o;if(r)o=ky;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ru(t,e,n,s,r){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Vp(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Vp(t,e,n,n==="getOobCode");return s(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t,e){const n=yh(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(rs(i,e??{}))return r;fn(r,"already-initialized")}return n.initialize({options:e})}function OC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function DC(t,e,n){const s=Ks(t);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Ny(e),{host:o,port:l}=VC(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de(rs(u,s.config.emulator)&&rs(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,fi(o)?(iy(`${i}//${o}${c}`),oy("Auth",!0)):xC()}function Ny(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VC(t){const e=Ny(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:xp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:xp(o)}}}function xp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function MC(t,e){return Ws(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(t,e){return Wo(t,"POST","/v1/accounts:signInWithPassword",zs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",zs(t,e))}async function UC(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",zs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends Ah{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Io(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Io(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ru(e,n,"signInWithPassword",LC);case"emailLink":return FC(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ru(e,s,"signUpPassword",MC);case"emailLink":return UC(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t,e){return Wo(t,"POST","/v1/accounts:signInWithIdp",zs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC="http://localhost";class wr extends Ah{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new wr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,qr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qr(e,n)}buildRequest(){const e={requestUri:BC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jC(t){const e=Hi(qi(t)).link,n=e?Hi(qi(e)).deep_link_id:null,s=Hi(qi(t)).deep_link_id;return(s?Hi(qi(s)).link:null)||s||n||e||t}class bh{constructor(e){const n=Hi(qi(e)),s=n.apiKey??null,r=n.oobCode??null,i=$C(n.mode??null);de(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=jC(e);try{return new bh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.providerId=pi.PROVIDER_ID}static credential(e,n){return Io._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=bh.parseLink(n);return de(s,"argument-error"),Io._fromEmailAndCode(e,s.code,s.tenantId)}}pi.PROVIDER_ID="password";pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Sh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Ko{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rs.credential(e.oauthAccessToken)}catch{return null}}}Rs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Jn.credential(n,s)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends Ko{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cs.credential(e.oauthAccessToken)}catch{return null}}}Cs.GITHUB_SIGN_IN_METHOD="github.com";Cs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Ko{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ps.credential(n,s)}catch{return null}}}Ps.TWITTER_SIGN_IN_METHOD="twitter.com";Ps.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e){return Wo(t,"POST","/v1/accounts:signUp",zs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await gn._fromIdTokenResponse(e,s,r),o=Mp(s);return new Tr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Mp(s);return new Tr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends us{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,tl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new tl(e,n,s,r)}}function Oy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?tl._fromErrorAndOperation(t,i,e,s):i})}async function qC(t,e,n=!1){const s=await To(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e,n=!1){const{auth:s}=t;if(en(s.app))return Promise.reject(es(s));const r="reauthenticate";try{const i=await To(t,Oy(s,r,e,t),n);de(i.idToken,s,"internal-error");const o=Th(i.idToken);de(o,s,"internal-error");const{sub:l}=o;return de(t.uid===l,s,"user-mismatch"),Tr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dy(t,e,n=!1){if(en(t.app))return Promise.reject(es(t));const s="signIn",r=await Oy(t,s,e),i=await Tr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function WC(t,e){return Dy(Ks(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(t){const e=Ks(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function KC(t,e,n){if(en(t.app))return Promise.reject(es(t));const s=Ks(t),o=await Ru(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Vy(t),c}),l=await Tr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function GC(t,e,n){return en(t.app)?Promise.reject(es(t)):WC(Tt(t),pi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Vy(t),s})}function QC(t,e,n,s){return Tt(t).onIdTokenChanged(e,n,s)}function JC(t,e,n){return Tt(t).beforeAuthStateChanged(e,n)}function YC(t,e,n,s){return Tt(t).onAuthStateChanged(e,n,s)}function XC(t){return Tt(t).signOut()}const nl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nl,"1"),this.storage.removeItem(nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=1e3,e0=10;class My extends xy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ry(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);_C()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,e0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ZC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}My.type="LOCAL";const t0=My;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly extends xy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ly.type="SESSION";const Fy=Ly;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new $l(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await n0(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$l.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Rh("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function r0(t){Vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function i0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function a0(){return Uy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="firebaseLocalStorageDb",l0=1,sl="firebaseLocalStorage",$y="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(t,e){return t.transaction([sl],e?"readwrite":"readonly").objectStore(sl)}function c0(){const t=indexedDB.deleteDatabase(By);return new Go(t).toPromise()}function Cu(){const t=indexedDB.open(By,l0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(sl,{keyPath:$y})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(sl)?e(s):(s.close(),await c0(),e(await Cu()))})})}async function Lp(t,e,n){const s=jl(t,!0).put({[$y]:e,value:n});return new Go(s).toPromise()}async function u0(t,e){const n=jl(t,!1).get(e),s=await new Go(n).toPromise();return s===void 0?null:s.value}function Fp(t,e){const n=jl(t,!0).delete(e);return new Go(n).toPromise()}const h0=800,f0=3;class jy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>f0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$l._getInstance(a0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await i0(),!this.activeServiceWorker)return;this.sender=new s0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cu();return await Lp(e,nl,"1"),await Fp(e,nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>u0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=jl(r,!1).getAll();return new Go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jy.type="LOCAL";const d0=jy;new zo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e){return e?Xn(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends Ah{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function p0(t){return Dy(t.auth,new Ch(t),t.bypassAuthState)}function m0(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),zC(n,new Ch(t),t.bypassAuthState)}async function g0(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),qC(n,new Ch(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p0;case"linkViaPopup":case"linkViaRedirect":return g0;case"reauthViaPopup":case"reauthViaRedirect":return m0;default:fn(this.auth,"internal-error")}}resolve(e){os(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){os(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=new zo(2e3,1e4);async function y0(t,e,n){if(en(t.app))return Promise.reject(yn(t,"operation-not-supported-in-this-environment"));const s=Ks(t);YR(t,e,Sh);const r=Hy(s,n);return new hr(s,"signInViaPopup",e,r).executeNotNull()}class hr extends qy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){os(this.filter.length===1,"Popup operations only handle one event");const e=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_0.get())};e()}}hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="pendingRedirect",Na=new Map;class E0 extends qy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Na.get(this.auth._key());if(!e){try{const s=await w0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Na.set(this.auth._key(),e)}return this.bypassAuthState||Na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w0(t,e){const n=A0(e),s=I0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function T0(t,e){Na.set(t._key(),e)}function I0(t){return Xn(t._redirectPersistence)}function A0(t){return ka(v0,t.config.apiKey,t.name)}async function b0(t,e,n=!1){if(en(t.app))return Promise.reject(es(t));const s=Ks(t),r=Hy(s,e),o=await new E0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=600*1e3;class R0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!zy(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Up(e))}saveEventToCache(e){this.cachedEventUids.add(Up(e)),this.lastProcessedEventTime=Date.now()}}function Up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function C0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(t,e={}){return Ws(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,N0=/^https?/;async function O0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await P0(t);for(const n of e)try{if(D0(n))return}catch{}fn(t,"unauthorized-domain")}function D0(t){const e=bu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!N0.test(n))return!1;if(k0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=new zo(3e4,6e4);function Bp(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function x0(t){return new Promise((e,n)=>{var r,i,o;function s(){Bp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bp(),n(yn(t,"network-request-failed"))},timeout:V0.get()})}if((i=(r=Vn().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Vn().gapi)!=null&&o.load)s();else{const l=SC("iframefcb");return Vn()[l]=()=>{gapi.load?s():n(yn(t,"network-request-failed"))},Py(`${bC()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Oa=null,e})}let Oa=null;function M0(t){return Oa=Oa||x0(t),Oa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=new zo(5e3,15e3),F0="__/auth/iframe",U0="emulator/auth/iframe",B0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j0(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wh(e,U0):`https://${t.config.authDomain}/${F0}`,s={apiKey:e.apiKey,appName:t.name,v:di},r=$0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${qo(s).slice(1)}`}async function H0(t){const e=await M0(t),n=Vn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:j0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:B0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),l=Vn().setTimeout(()=>{i(o)},L0.get());function c(){Vn().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z0=500,W0=600,K0="_blank",G0="http://localhost";class $p{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Q0(t,e,n,s=z0,r=W0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...q0,width:s.toString(),height:r.toString(),top:i,left:o},u=xt().toLowerCase();n&&(l=Ty(u)?K0:n),Ey(u)&&(e=e||G0,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[g,E])=>`${m}${g}=${E},`,"");if(gC(u)&&l!=="_self")return J0(e||"",l),new $p(null);const d=window.open(e||"",l,h);de(d,t,"popup-blocked");try{d.focus()}catch{}return new $p(d)}function J0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="__/auth/handler",X0="emulator/auth/handler",Z0=encodeURIComponent("fac");async function jp(t,e,n,s,r,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:di,eventId:r};if(e instanceof Sh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Ko){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${Z0}=${encodeURIComponent(c)}`:"";return`${eP(t)}?${qo(l).slice(1)}${u}`}function eP({config:t}){return t.emulator?wh(t,X0):`https://${t.authDomain}/${Y0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="webStorageSupport";class tP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fy,this._completeRedirectFn=b0,this._overrideRedirectResult=T0}async _openPopup(e,n,s,r){var o;os((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await jp(e,n,s,bu(),r);return Q0(e,i,Rh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await jp(e,n,s,bu(),r);return r0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(os(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await H0(e),s=new R0(e);return n.register("authEvent",r=>(de(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kc,{type:Kc},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[Kc];i!==void 0&&n(!!i),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=O0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ry()||wy()||Ih()}}const nP=tP;var Hp="@firebase/auth",qp="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iP(t){Xr(new Er("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cy(t)},u=new TC(s,r,i,c);return OC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Xr(new Er("auth-internal",e=>{const n=Ks(e.getProvider("auth").getImmediate());return(s=>new sP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vs(Hp,qp,rP(t)),Vs(Hp,qp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=300,aP=ry("authIdTokenMaxAge")||oP;let zp=null;const lP=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>aP)return;const r=n==null?void 0:n.token;zp!==r&&(zp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function cP(t=uy()){const e=yh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NC(t,{popupRedirectResolver:nP,persistence:[d0,t0,Fy]}),s=ry("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=lP(i.toString());JC(n,o,()=>o(n.currentUser)),QC(n,l=>o(l))}}const r=ny("auth");return r&&DC(n,`http://${r}`),n}function uP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}IC({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=yn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",uP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iP("Browser");var Wp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xs,Wy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function v(){}v.prototype=_.prototype,A.F=_.prototype,A.prototype=new v,A.prototype.constructor=A,A.D=function(b,C,S){for(var I=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)I[ge-2]=arguments[ge];return _.prototype[C].apply(b,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,_,v){v||(v=0);const b=Array(16);if(typeof _=="string")for(var C=0;C<16;++C)b[C]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(C=0;C<16;++C)b[C]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=A.g[0],v=A.g[1],C=A.g[2];let S=A.g[3],I;I=_+(S^v&(C^S))+b[0]+3614090360&4294967295,_=v+(I<<7&4294967295|I>>>25),I=S+(C^_&(v^C))+b[1]+3905402710&4294967295,S=_+(I<<12&4294967295|I>>>20),I=C+(v^S&(_^v))+b[2]+606105819&4294967295,C=S+(I<<17&4294967295|I>>>15),I=v+(_^C&(S^_))+b[3]+3250441966&4294967295,v=C+(I<<22&4294967295|I>>>10),I=_+(S^v&(C^S))+b[4]+4118548399&4294967295,_=v+(I<<7&4294967295|I>>>25),I=S+(C^_&(v^C))+b[5]+1200080426&4294967295,S=_+(I<<12&4294967295|I>>>20),I=C+(v^S&(_^v))+b[6]+2821735955&4294967295,C=S+(I<<17&4294967295|I>>>15),I=v+(_^C&(S^_))+b[7]+4249261313&4294967295,v=C+(I<<22&4294967295|I>>>10),I=_+(S^v&(C^S))+b[8]+1770035416&4294967295,_=v+(I<<7&4294967295|I>>>25),I=S+(C^_&(v^C))+b[9]+2336552879&4294967295,S=_+(I<<12&4294967295|I>>>20),I=C+(v^S&(_^v))+b[10]+4294925233&4294967295,C=S+(I<<17&4294967295|I>>>15),I=v+(_^C&(S^_))+b[11]+2304563134&4294967295,v=C+(I<<22&4294967295|I>>>10),I=_+(S^v&(C^S))+b[12]+1804603682&4294967295,_=v+(I<<7&4294967295|I>>>25),I=S+(C^_&(v^C))+b[13]+4254626195&4294967295,S=_+(I<<12&4294967295|I>>>20),I=C+(v^S&(_^v))+b[14]+2792965006&4294967295,C=S+(I<<17&4294967295|I>>>15),I=v+(_^C&(S^_))+b[15]+1236535329&4294967295,v=C+(I<<22&4294967295|I>>>10),I=_+(C^S&(v^C))+b[1]+4129170786&4294967295,_=v+(I<<5&4294967295|I>>>27),I=S+(v^C&(_^v))+b[6]+3225465664&4294967295,S=_+(I<<9&4294967295|I>>>23),I=C+(_^v&(S^_))+b[11]+643717713&4294967295,C=S+(I<<14&4294967295|I>>>18),I=v+(S^_&(C^S))+b[0]+3921069994&4294967295,v=C+(I<<20&4294967295|I>>>12),I=_+(C^S&(v^C))+b[5]+3593408605&4294967295,_=v+(I<<5&4294967295|I>>>27),I=S+(v^C&(_^v))+b[10]+38016083&4294967295,S=_+(I<<9&4294967295|I>>>23),I=C+(_^v&(S^_))+b[15]+3634488961&4294967295,C=S+(I<<14&4294967295|I>>>18),I=v+(S^_&(C^S))+b[4]+3889429448&4294967295,v=C+(I<<20&4294967295|I>>>12),I=_+(C^S&(v^C))+b[9]+568446438&4294967295,_=v+(I<<5&4294967295|I>>>27),I=S+(v^C&(_^v))+b[14]+3275163606&4294967295,S=_+(I<<9&4294967295|I>>>23),I=C+(_^v&(S^_))+b[3]+4107603335&4294967295,C=S+(I<<14&4294967295|I>>>18),I=v+(S^_&(C^S))+b[8]+1163531501&4294967295,v=C+(I<<20&4294967295|I>>>12),I=_+(C^S&(v^C))+b[13]+2850285829&4294967295,_=v+(I<<5&4294967295|I>>>27),I=S+(v^C&(_^v))+b[2]+4243563512&4294967295,S=_+(I<<9&4294967295|I>>>23),I=C+(_^v&(S^_))+b[7]+1735328473&4294967295,C=S+(I<<14&4294967295|I>>>18),I=v+(S^_&(C^S))+b[12]+2368359562&4294967295,v=C+(I<<20&4294967295|I>>>12),I=_+(v^C^S)+b[5]+4294588738&4294967295,_=v+(I<<4&4294967295|I>>>28),I=S+(_^v^C)+b[8]+2272392833&4294967295,S=_+(I<<11&4294967295|I>>>21),I=C+(S^_^v)+b[11]+1839030562&4294967295,C=S+(I<<16&4294967295|I>>>16),I=v+(C^S^_)+b[14]+4259657740&4294967295,v=C+(I<<23&4294967295|I>>>9),I=_+(v^C^S)+b[1]+2763975236&4294967295,_=v+(I<<4&4294967295|I>>>28),I=S+(_^v^C)+b[4]+1272893353&4294967295,S=_+(I<<11&4294967295|I>>>21),I=C+(S^_^v)+b[7]+4139469664&4294967295,C=S+(I<<16&4294967295|I>>>16),I=v+(C^S^_)+b[10]+3200236656&4294967295,v=C+(I<<23&4294967295|I>>>9),I=_+(v^C^S)+b[13]+681279174&4294967295,_=v+(I<<4&4294967295|I>>>28),I=S+(_^v^C)+b[0]+3936430074&4294967295,S=_+(I<<11&4294967295|I>>>21),I=C+(S^_^v)+b[3]+3572445317&4294967295,C=S+(I<<16&4294967295|I>>>16),I=v+(C^S^_)+b[6]+76029189&4294967295,v=C+(I<<23&4294967295|I>>>9),I=_+(v^C^S)+b[9]+3654602809&4294967295,_=v+(I<<4&4294967295|I>>>28),I=S+(_^v^C)+b[12]+3873151461&4294967295,S=_+(I<<11&4294967295|I>>>21),I=C+(S^_^v)+b[15]+530742520&4294967295,C=S+(I<<16&4294967295|I>>>16),I=v+(C^S^_)+b[2]+3299628645&4294967295,v=C+(I<<23&4294967295|I>>>9),I=_+(C^(v|~S))+b[0]+4096336452&4294967295,_=v+(I<<6&4294967295|I>>>26),I=S+(v^(_|~C))+b[7]+1126891415&4294967295,S=_+(I<<10&4294967295|I>>>22),I=C+(_^(S|~v))+b[14]+2878612391&4294967295,C=S+(I<<15&4294967295|I>>>17),I=v+(S^(C|~_))+b[5]+4237533241&4294967295,v=C+(I<<21&4294967295|I>>>11),I=_+(C^(v|~S))+b[12]+1700485571&4294967295,_=v+(I<<6&4294967295|I>>>26),I=S+(v^(_|~C))+b[3]+2399980690&4294967295,S=_+(I<<10&4294967295|I>>>22),I=C+(_^(S|~v))+b[10]+4293915773&4294967295,C=S+(I<<15&4294967295|I>>>17),I=v+(S^(C|~_))+b[1]+2240044497&4294967295,v=C+(I<<21&4294967295|I>>>11),I=_+(C^(v|~S))+b[8]+1873313359&4294967295,_=v+(I<<6&4294967295|I>>>26),I=S+(v^(_|~C))+b[15]+4264355552&4294967295,S=_+(I<<10&4294967295|I>>>22),I=C+(_^(S|~v))+b[6]+2734768916&4294967295,C=S+(I<<15&4294967295|I>>>17),I=v+(S^(C|~_))+b[13]+1309151649&4294967295,v=C+(I<<21&4294967295|I>>>11),I=_+(C^(v|~S))+b[4]+4149444226&4294967295,_=v+(I<<6&4294967295|I>>>26),I=S+(v^(_|~C))+b[11]+3174756917&4294967295,S=_+(I<<10&4294967295|I>>>22),I=C+(_^(S|~v))+b[2]+718787259&4294967295,C=S+(I<<15&4294967295|I>>>17),I=v+(S^(C|~_))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,A.g[2]=A.g[2]+C&4294967295,A.g[3]=A.g[3]+S&4294967295}s.prototype.v=function(A,_){_===void 0&&(_=A.length);const v=_-this.blockSize,b=this.C;let C=this.h,S=0;for(;S<_;){if(C==0)for(;S<=v;)r(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<_;)if(b[C++]=A.charCodeAt(S++),C==this.blockSize){r(this,b),C=0;break}}else for(;S<_;)if(b[C++]=A[S++],C==this.blockSize){r(this,b),C=0;break}}this.h=C,this.o+=_},s.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;_=this.o*8;for(var v=A.length-8;v<A.length;++v)A[v]=_&255,_/=256;for(this.v(A),A=Array(16),_=0,v=0;v<4;++v)for(let b=0;b<32;b+=8)A[_++]=this.g[v]>>>b&255;return A};function i(A,_){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=_(A)}function o(A,_){this.h=_;const v=[];let b=!0;for(let C=A.length-1;C>=0;C--){const S=A[C]|0;b&&S==_||(v[C]=S,b=!1)}this.g=v}var l={};function c(A){return-128<=A&&A<128?i(A,function(_){return new o([_|0],_<0?-1:0)}):new o([A|0],A<0?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return d;if(A<0)return P(u(-A));const _=[];let v=1;for(let b=0;A>=v;b++)_[b]=A/v|0,v*=4294967296;return new o(_,0)}function h(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return P(h(A.substring(1),_));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(_,8));let b=d;for(let S=0;S<A.length;S+=8){var C=Math.min(8,A.length-S);const I=parseInt(A.substring(S,S+C),_);C<8?(C=u(Math.pow(_,C)),b=b.j(C).add(u(I))):(b=b.j(v),b=b.add(u(I)))}return b}var d=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();let A=0,_=1;for(let v=0;v<this.g.length;v++){const b=this.i(v);A+=(b>=0?b:4294967296+b)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(k(this))return"-"+P(this).toString(A);const _=u(Math.pow(A,6));var v=this;let b="";for(;;){const C=F(v,_).g;v=N(v,C.j(_));let S=((v.g.length>0?v.g[0]:v.h)>>>0).toString(A);if(v=C,E(v))return S+b;for(;S.length<6;)S="0"+S;b=S+b}},t.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(let _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function k(A){return A.h==-1}t.l=function(A){return A=N(this,A),k(A)?-1:E(A)?0:1};function P(A){const _=A.g.length,v=[];for(let b=0;b<_;b++)v[b]=~A.g[b];return new o(v,~A.h).add(m)}t.abs=function(){return k(this)?P(this):this},t.add=function(A){const _=Math.max(this.g.length,A.g.length),v=[];let b=0;for(let C=0;C<=_;C++){let S=b+(this.i(C)&65535)+(A.i(C)&65535),I=(S>>>16)+(this.i(C)>>>16)+(A.i(C)>>>16);b=I>>>16,S&=65535,I&=65535,v[C]=I<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function N(A,_){return A.add(P(_))}t.j=function(A){if(E(this)||E(A))return d;if(k(this))return k(A)?P(this).j(P(A)):P(P(this).j(A));if(k(A))return P(this.j(P(A)));if(this.l(g)<0&&A.l(g)<0)return u(this.m()*A.m());const _=this.g.length+A.g.length,v=[];for(var b=0;b<2*_;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(let C=0;C<A.g.length;C++){const S=this.i(b)>>>16,I=this.i(b)&65535,ge=A.i(C)>>>16,Le=A.i(C)&65535;v[2*b+2*C]+=I*Le,V(v,2*b+2*C),v[2*b+2*C+1]+=S*Le,V(v,2*b+2*C+1),v[2*b+2*C+1]+=I*ge,V(v,2*b+2*C+1),v[2*b+2*C+2]+=S*ge,V(v,2*b+2*C+2)}for(A=0;A<_;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=_;A<2*_;A++)v[A]=0;return new o(v,0)};function V(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function x(A,_){this.g=A,this.h=_}function F(A,_){if(E(_))throw Error("division by zero");if(E(A))return new x(d,d);if(k(A))return _=F(P(A),_),new x(P(_.g),P(_.h));if(k(_))return _=F(A,P(_)),new x(P(_.g),_.h);if(A.g.length>30){if(k(A)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,b=_;b.l(A)<=0;)v=U(v),b=U(b);var C=B(v,1),S=B(b,1);for(b=B(b,2),v=B(v,2);!E(b);){var I=S.add(b);I.l(A)<=0&&(C=C.add(v),S=I),b=B(b,1),v=B(v,1)}return _=N(A,C.j(_)),new x(C,_)}for(C=d;A.l(_)>=0;){for(v=Math.max(1,Math.floor(A.m()/_.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),S=u(v),I=S.j(_);k(I)||I.l(A)>0;)v-=b,S=u(v),I=S.j(_);E(S)&&(S=m),C=C.add(S),A=N(A,I)}return new x(C,A)}t.B=function(A){return F(this,A).h},t.and=function(A){const _=Math.max(this.g.length,A.g.length),v=[];for(let b=0;b<_;b++)v[b]=this.i(b)&A.i(b);return new o(v,this.h&A.h)},t.or=function(A){const _=Math.max(this.g.length,A.g.length),v=[];for(let b=0;b<_;b++)v[b]=this.i(b)|A.i(b);return new o(v,this.h|A.h)},t.xor=function(A){const _=Math.max(this.g.length,A.g.length),v=[];for(let b=0;b<_;b++)v[b]=this.i(b)^A.i(b);return new o(v,this.h^A.h)};function U(A){const _=A.g.length+1,v=[];for(let b=0;b<_;b++)v[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(v,A.h)}function B(A,_){const v=_>>5;_%=32;const b=A.g.length-v,C=[];for(let S=0;S<b;S++)C[S]=_>0?A.i(S+v)>>>_|A.i(S+v+1)<<32-_:A.i(S+v);return new o(C,A.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Wy=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,xs=o}).apply(typeof Wp<"u"?Wp:typeof self<"u"?self:typeof window<"u"?window:{});var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ky,zi,Gy,Da,Pu,Qy,Jy,Yy;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _a=="object"&&_a];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function r(a,f){if(f)e:{var p=s;a=a.split(".");for(var y=0;y<a.length-1;y++){var D=a[y];if(!(D in p))break e;p=p[D]}a=a[a.length-1],y=p[a],f=f(y),f!=y&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(f){var p=[],y;for(y in f)Object.prototype.hasOwnProperty.call(f,y)&&p.push([y,f[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function c(a,f,p){return a.call.apply(a.bind,arguments)}function u(a,f,p){return u=c,u.apply(null,arguments)}function h(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function d(a,f){function p(){}p.prototype=f.prototype,a.Z=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,D,L){for(var Y=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)Y[Ae-2]=arguments[Ae];return f.prototype[D].apply(y,Y)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function g(a){const f=a.length;if(f>0){const p=Array(f);for(let y=0;y<f;y++)p[y]=a[y];return p}return[]}function E(a,f){for(let y=1;y<arguments.length;y++){const D=arguments[y];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=a.length||0;const L=D.length||0;a.length=p+L;for(let Y=0;Y<L;Y++)a[p+Y]=D[Y]}else a.push(D)}}class k{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function P(a){o.setTimeout(()=>{throw a},0)}function N(){var a=A;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class V{constructor(){this.h=this.g=null}add(f,p){const y=x.get();y.set(f,p),this.h?this.h.next=y:this.g=y,this.h=y}}var x=new k(()=>new F,a=>a.reset());class F{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let U,B=!1,A=new V,_=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(v)}};function v(){for(var a;a=N();){try{a.h.call(a.g)}catch(p){P(p)}var f=x;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}B=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,f),o.removeEventListener("test",p,f)}catch{}return a})();function I(a){return/^[\s\xa0]*$/.test(a)}function ge(a,f){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}d(ge,C),ge.prototype.init=function(a,f){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ge.Z.h.call(this)},ge.prototype.h=function(){ge.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Le="closure_listenable_"+(Math.random()*1e6|0),Te=0;function me(a,f,p,y,D){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!y,this.ha=D,this.key=++Te,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ht(a,f,p){for(const y in a)f.call(p,a[y],y,a)}function Qt(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function Ge(a){const f={};for(const p in a)f[p]=a[p];return f}const qe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qt(a,f){let p,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(p in y)a[p]=y[p];for(let L=0;L<qe.length;L++)p=qe[L],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function _t(a){this.src=a,this.g={},this.h=0}_t.prototype.add=function(a,f,p,y,D){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const Y=yt(a,f,y,D);return Y>-1?(f=a[Y],p||(f.fa=!1)):(f=new me(f,this.src,L,!!y,D),f.fa=p,a.push(f)),f};function Mt(a,f){const p=f.type;if(p in a.g){var y=a.g[p],D=Array.prototype.indexOf.call(y,f,void 0),L;(L=D>=0)&&Array.prototype.splice.call(y,D,1),L&&(ye(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function yt(a,f,p,y){for(let D=0;D<a.length;++D){const L=a[D];if(!L.da&&L.listener==f&&L.capture==!!p&&L.ha==y)return D}return-1}var j="closure_lm_"+(Math.random()*1e6|0),ne={};function ee(a,f,p,y,D){if(Array.isArray(f)){for(let L=0;L<f.length;L++)ee(a,f[L],p,y,D);return null}return p=X(p),a&&a[Le]?a.J(f,p,l(y)?!!y.capture:!1,D):ae(a,f,p,!1,y,D)}function ae(a,f,p,y,D,L){if(!f)throw Error("Invalid event type");const Y=l(D)?!!D.capture:!!D;let Ae=z(a);if(Ae||(a[j]=Ae=new _t(a)),p=Ae.add(f,p,y,Y,L),p.proxy)return p;if(y=J(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)S||(D=Y),D===void 0&&(D=!1),a.addEventListener(f.toString(),y,D);else if(a.attachEvent)a.attachEvent(O(f.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function J(){function a(p){return f.call(a.src,a.listener,p)}const f=H;return a}function T(a,f,p,y,D){if(Array.isArray(f))for(var L=0;L<f.length;L++)T(a,f[L],p,y,D);else y=l(y)?!!y.capture:!!y,p=X(p),a&&a[Le]?(a=a.i,L=String(f).toString(),L in a.g&&(f=a.g[L],p=yt(f,p,y,D),p>-1&&(ye(f[p]),Array.prototype.splice.call(f,p,1),f.length==0&&(delete a.g[L],a.h--)))):a&&(a=z(a))&&(f=a.g[f.toString()],a=-1,f&&(a=yt(f,p,y,D)),(p=a>-1?f[a]:null)&&R(p))}function R(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[Le])Mt(f.i,a);else{var p=a.type,y=a.proxy;f.removeEventListener?f.removeEventListener(p,y,a.capture):f.detachEvent?f.detachEvent(O(p),y):f.addListener&&f.removeListener&&f.removeListener(y),(p=z(f))?(Mt(p,a),p.h==0&&(p.src=null,f[j]=null)):ye(a)}}}function O(a){return a in ne?ne[a]:ne[a]="on"+a}function H(a,f){if(a.da)a=!0;else{f=new ge(f,this);const p=a.listener,y=a.ha||a.src;a.fa&&R(a),a=p.call(y,f)}return a}function z(a){return a=a[j],a instanceof _t?a:null}var $="__closure_events_fn_"+(Math.random()*1e9>>>0);function X(a){return typeof a=="function"?a:(a[$]||(a[$]=function(f){return a.handleEvent(f)}),a[$])}function Q(){b.call(this),this.i=new _t(this),this.M=this,this.G=null}d(Q,b),Q.prototype[Le]=!0,Q.prototype.removeEventListener=function(a,f,p,y){T(this,a,f,p,y)};function G(a,f){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=f.type||f,typeof f=="string")f=new C(f,a);else if(f instanceof C)f.target=f.target||a;else{var D=f;f=new C(y,a),qt(f,D)}D=!0;let L,Y;if(p)for(Y=p.length-1;Y>=0;Y--)L=f.g=p[Y],D=W(L,y,!0,f)&&D;if(L=f.g=a,D=W(L,y,!0,f)&&D,D=W(L,y,!1,f)&&D,p)for(Y=0;Y<p.length;Y++)L=f.g=p[Y],D=W(L,y,!1,f)&&D}Q.prototype.N=function(){if(Q.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const p=a.g[f];for(let y=0;y<p.length;y++)ye(p[y]);delete a.g[f],a.h--}}this.G=null},Q.prototype.J=function(a,f,p,y){return this.i.add(String(a),f,!1,p,y)},Q.prototype.K=function(a,f,p,y){return this.i.add(String(a),f,!0,p,y)};function W(a,f,p,y){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let D=!0;for(let L=0;L<f.length;++L){const Y=f[L];if(Y&&!Y.da&&Y.capture==p){const Ae=Y.listener,ot=Y.ha||Y.src;Y.fa&&Mt(a.i,Y),D=Ae.call(ot,y)!==!1&&D}}return D&&!y.defaultPrevented}function ue(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function te(a){a.g=ue(()=>{a.g=null,a.i&&(a.i=!1,te(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class le extends b{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fe(a){b.call(this),this.h=a,this.g={}}d(fe,b);var Se=[];function Fe(a){ht(a.g,function(f,p){this.g.hasOwnProperty(p)&&R(f)},a),a.g={}}fe.prototype.N=function(){fe.Z.N.call(this),Fe(this)},fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oe=o.JSON.stringify,At=o.JSON.parse,bt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Jt(){}function Yt(){}var mn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Rr(){C.call(this,"d")}d(Rr,C);function vt(){C.call(this,"c")}d(vt,C);var ft={},Ei=null;function Js(){return Ei=Ei||new Q}ft.Ia="serverreachability";function lf(a){C.call(this,ft.Ia,a)}d(lf,C);function wi(a){const f=Js();G(f,new lf(f))}ft.STAT_EVENT="statevent";function cf(a,f){C.call(this,ft.STAT_EVENT,a),this.stat=f}d(cf,C);function Lt(a){const f=Js();G(f,new cf(f,a))}ft.Ja="timingevent";function uf(a,f){C.call(this,ft.Ja,a),this.size=f}d(uf,C);function Ti(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function Ii(){this.g=!0}Ii.prototype.ua=function(){this.g=!1};function AE(a,f,p,y,D,L){a.info(function(){if(a.g)if(L){var Y="",Ae=L.split("&");for(let Be=0;Be<Ae.length;Be++){var ot=Ae[Be].split("=");if(ot.length>1){const dt=ot[0];ot=ot[1];const An=dt.split("_");Y=An.length>=2&&An[1]=="type"?Y+(dt+"="+ot+"&"):Y+(dt+"=redacted&")}}}else Y=null;else Y=L;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+f+`
`+p+`
`+Y})}function bE(a,f,p,y,D,L,Y){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+f+`
`+p+`
`+L+" "+Y})}function Cr(a,f,p,y){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+RE(a,p)+(y?" "+y:"")})}function SE(a,f){a.info(function(){return"TIMEOUT: "+f})}Ii.prototype.info=function(){};function RE(a,f){if(!a.g)return f;if(!f)return null;try{const L=JSON.parse(f);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var p=L[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var D=y[0];if(D!="noop"&&D!="stop"&&D!="close")for(let Y=1;Y<y.length;Y++)y[Y]=""}}}}return Oe(L)}catch{return f}}var ta={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ff;function ac(){}d(ac,Jt),ac.prototype.g=function(){return new XMLHttpRequest},ff=new ac;function Ai(a){return encodeURIComponent(String(a))}function CE(a){var f=1;a=a.split(":");const p=[];for(;f>0&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function fs(a,f,p,y){this.j=a,this.i=f,this.l=p,this.S=y||1,this.V=new fe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new df}function df(){this.i=null,this.g="",this.h=!1}var pf={},lc={};function cc(a,f,p){a.M=1,a.A=sa(In(f)),a.u=p,a.R=!0,mf(a,null)}function mf(a,f){a.F=Date.now(),na(a),a.B=In(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Cf(p.i,"t",y),a.C=0,p=a.j.L,a.h=new df,a.g=Wf(a.j,p?f:null,!a.u),a.P>0&&(a.O=new le(u(a.Y,a,a.g),a.P)),f=a.V,p=a.g,y=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Se[0]=D.toString()),D=Se);for(let L=0;L<D.length;L++){const Y=ee(p,D[L],y||f.handleEvent,!1,f.h||f);if(!Y)break;f.g[Y.key]=Y}f=a.J?Ge(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),wi(),AE(a.i,a.v,a.B,a.l,a.S,a.u)}fs.prototype.ba=function(a){a=a.target;const f=this.O;f&&ms(a)==3?f.j():this.Y(a)},fs.prototype.Y=function(a){try{if(a==this.g)e:{const Ae=ms(this.g),ot=this.g.ya(),Be=this.g.ca();if(!(Ae<3)&&(Ae!=3||this.g&&(this.h.h||this.g.la()||xf(this.g)))){this.K||Ae!=4||ot==7||(ot==8||Be<=0?wi(3):wi(2)),uc(this);var f=this.g.ca();this.X=f;var p=PE(this);if(this.o=f==200,bE(this.i,this.v,this.B,this.l,this.S,Ae,f),this.o){if(this.U&&!this.L){t:{if(this.g){var y,D=this.g;if((y=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(y)){var L=y;break t}}L=null}if(a=L)Cr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,hc(this,a);else{this.o=!1,this.m=3,Lt(12),Ys(this),bi(this);break e}}if(this.R){a=!0;let dt;for(;!this.K&&this.C<p.length;)if(dt=kE(this,p),dt==lc){Ae==4&&(this.m=4,Lt(14),a=!1),Cr(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==pf){this.m=4,Lt(15),Cr(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Cr(this.i,this.l,dt,null),hc(this,dt);if(gf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||p.length!=0||this.h.h||(this.m=1,Lt(16),a=!1),this.o=this.o&&a,!a)Cr(this.i,this.l,p,"[Invalid Chunked Response]"),Ys(this),bi(this);else if(p.length>0&&!this.W){this.W=!0;var Y=this.j;Y.g==this&&Y.aa&&!Y.P&&(Y.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),vc(Y),Y.P=!0,Lt(11))}}else Cr(this.i,this.l,p,null),hc(this,p);Ae==4&&Ys(this),this.o&&!this.K&&(Ae==4?jf(this.j,this):(this.o=!1,na(this)))}else qE(this.g),f==400&&p.indexOf("Unknown SID")>0?(this.m=3,Lt(12)):(this.m=0,Lt(13)),Ys(this),bi(this)}}}catch{}finally{}};function PE(a){if(!gf(a))return a.g.la();const f=xf(a.g);if(f==="")return"";let p="";const y=f.length,D=ms(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ys(a),bi(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<y;L++)a.h.h=!0,p+=a.h.i.decode(f[L],{stream:!(D&&L==y-1)});return f.length=0,a.h.g+=p,a.C=0,a.h.g}function gf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function kE(a,f){var p=a.C,y=f.indexOf(`
`,p);return y==-1?lc:(p=Number(f.substring(p,y)),isNaN(p)?pf:(y+=1,y+p>f.length?lc:(f=f.slice(y,y+p),a.C=y+p,f)))}fs.prototype.cancel=function(){this.K=!0,Ys(this)};function na(a){a.T=Date.now()+a.H,_f(a,a.H)}function _f(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ti(u(a.aa,a),f)}function uc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}fs.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(SE(this.i,this.B),this.M!=2&&(wi(),Lt(17)),Ys(this),this.m=2,bi(this)):_f(this,this.T-a)};function bi(a){a.j.I==0||a.K||jf(a.j,a)}function Ys(a){uc(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,Fe(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function hc(a,f){try{var p=a.j;if(p.I!=0&&(p.g==a||fc(p.h,a))){if(!a.L&&fc(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)la(p),oa(p);else break e;yc(p),Lt(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Ti(u(p.Va,p),6e3));Ef(p.h)<=1&&p.ta&&(p.ta=void 0)}else Zs(p,11)}else if((a.L||p.g==a)&&la(p),!I(f))for(D=p.Ba.g.parse(f),f=0;f<D.length;f++){let Be=D[f];const dt=Be[0];if(!(dt<=p.K))if(p.K=dt,Be=Be[1],p.I==2)if(Be[0]=="c"){p.M=Be[1],p.ba=Be[2];const An=Be[3];An!=null&&(p.ka=An,p.j.info("VER="+p.ka));const er=Be[4];er!=null&&(p.za=er,p.j.info("SVER="+p.za));const gs=Be[5];gs!=null&&typeof gs=="number"&&gs>0&&(y=1.5*gs,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const _s=a.g;if(_s){const ua=_s.g?_s.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ua){var L=y.h;L.g||ua.indexOf("spdy")==-1&&ua.indexOf("quic")==-1&&ua.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(dc(L,L.h),L.h=null))}if(y.G){const Ec=_s.g?_s.g.getResponseHeader("X-HTTP-Session-Id"):null;Ec&&(y.wa=Ec,ze(y.J,y.G,Ec))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var Y=a;if(y.na=zf(y,y.L?y.ba:null,y.W),Y.L){wf(y.h,Y);var Ae=Y,ot=y.O;ot&&(Ae.H=ot),Ae.D&&(uc(Ae),na(Ae)),y.g=Y}else Bf(y);p.i.length>0&&aa(p)}else Be[0]!="stop"&&Be[0]!="close"||Zs(p,7);else p.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?Zs(p,7):_c(p):Be[0]!="noop"&&p.l&&p.l.qa(Be),p.A=0)}}wi(4)}catch{}}var NE=class{constructor(a,f){this.g=a,this.map=f}};function yf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function vf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ef(a){return a.h?1:a.g?a.g.size:0}function fc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function dc(a,f){a.g?a.g.add(f):a.h=f}function wf(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}yf.prototype.cancel=function(){if(this.i=Tf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Tf(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.G);return f}return g(a.i)}var If=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OE(a,f){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let D,L=null;y>=0?(D=a[p].substring(0,y),L=a[p].substring(y+1)):D=a[p],f(D,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ds(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof ds?(this.l=a.l,Si(this,a.j),this.o=a.o,this.g=a.g,Ri(this,a.u),this.h=a.h,pc(this,Pf(a.i)),this.m=a.m):a&&(f=String(a).match(If))?(this.l=!1,Si(this,f[1]||"",!0),this.o=Ci(f[2]||""),this.g=Ci(f[3]||"",!0),Ri(this,f[4]),this.h=Ci(f[5]||"",!0),pc(this,f[6]||"",!0),this.m=Ci(f[7]||"")):(this.l=!1,this.i=new ki(null,this.l))}ds.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(Pi(f,Af,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Pi(f,Af,!0),"@"),a.push(Ai(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Pi(p,p.charAt(0)=="/"?xE:VE,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Pi(p,LE)),a.join("")},ds.prototype.resolve=function(a){const f=In(this);let p=!!a.j;p?Si(f,a.j):p=!!a.o,p?f.o=a.o:p=!!a.g,p?f.g=a.g:p=a.u!=null;var y=a.h;if(p)Ri(f,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var D=f.h.lastIndexOf("/");D!=-1&&(y=f.h.slice(0,D+1)+y)}if(D=y,D==".."||D==".")y="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){y=D.lastIndexOf("/",0)==0,D=D.split("/");const L=[];for(let Y=0;Y<D.length;){const Ae=D[Y++];Ae=="."?y&&Y==D.length&&L.push(""):Ae==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),y&&Y==D.length&&L.push("")):(L.push(Ae),y=!0)}y=L.join("/")}else y=D}return p?f.h=y:p=a.i.toString()!=="",p?pc(f,Pf(a.i)):p=!!a.m,p&&(f.m=a.m),f};function In(a){return new ds(a)}function Si(a,f,p){a.j=p?Ci(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Ri(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function pc(a,f,p){f instanceof ki?(a.i=f,FE(a.i,a.l)):(p||(f=Pi(f,ME)),a.i=new ki(f,a.l))}function ze(a,f,p){a.i.set(f,p)}function sa(a){return ze(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ci(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Pi(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,DE),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function DE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Af=/[#\/\?@]/g,VE=/[#\?:]/g,xE=/[#\?]/g,ME=/[#\?@]/g,LE=/#/g;function ki(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Xs(a){a.g||(a.g=new Map,a.h=0,a.i&&OE(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=ki.prototype,t.add=function(a,f){Xs(this),this.i=null,a=Pr(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function bf(a,f){Xs(a),f=Pr(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Sf(a,f){return Xs(a),f=Pr(a,f),a.g.has(f)}t.forEach=function(a,f){Xs(this),this.g.forEach(function(p,y){p.forEach(function(D){a.call(f,D,y,this)},this)},this)};function Rf(a,f){Xs(a);let p=[];if(typeof f=="string")Sf(a,f)&&(p=p.concat(a.g.get(Pr(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)p=p.concat(a[f]);return p}t.set=function(a,f){return Xs(this),this.i=null,a=Pr(this,a),Sf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=Rf(this,a),a.length>0?String(a[0]):f):f};function Cf(a,f,p){bf(a,f),p.length>0&&(a.i=null,a.g.set(Pr(a,f),g(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let y=0;y<f.length;y++){var p=f[y];const D=Ai(p);p=Rf(this,p);for(let L=0;L<p.length;L++){let Y=D;p[L]!==""&&(Y+="="+Ai(p[L])),a.push(Y)}}return this.i=a.join("&")};function Pf(a){const f=new ki;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function Pr(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function FE(a,f){f&&!a.j&&(Xs(a),a.i=null,a.g.forEach(function(p,y){const D=y.toLowerCase();y!=D&&(bf(this,y),Cf(this,D,p))},a)),a.j=f}function UE(a,f){const p=new Ii;if(o.Image){const y=new Image;y.onload=h(ps,p,"TestLoadImage: loaded",!0,f,y),y.onerror=h(ps,p,"TestLoadImage: error",!1,f,y),y.onabort=h(ps,p,"TestLoadImage: abort",!1,f,y),y.ontimeout=h(ps,p,"TestLoadImage: timeout",!1,f,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else f(!1)}function BE(a,f){const p=new Ii,y=new AbortController,D=setTimeout(()=>{y.abort(),ps(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(D),L.ok?ps(p,"TestPingServer: ok",!0,f):ps(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),ps(p,"TestPingServer: error",!1,f)})}function ps(a,f,p,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(p)}catch{}}function $E(){this.g=new bt}function mc(a){this.i=a.Sb||null,this.h=a.ab||!1}d(mc,Jt),mc.prototype.g=function(){return new ra(this.i,this.h)};function ra(a,f){Q.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(ra,Q),t=ra.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,Oi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ni(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;kf(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function kf(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Ni(this):Oi(this),this.readyState==3&&kf(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ni(this))},t.Na=function(a){this.g&&(this.response=a,Ni(this))},t.ga=function(){this.g&&Ni(this)};function Ni(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Oi(a)}t.setRequestHeader=function(a,f){this.A.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function Oi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Nf(a){let f="";return ht(a,function(p,y){f+=y,f+=":",f+=p,f+=`\r
`}),f}function gc(a,f,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Nf(p),typeof a=="string"?p!=null&&Ai(p):ze(a,f,p))}function Ye(a){Q.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Ye,Q);var jE=/^https?$/i,HE=["POST","PUT"];t=Ye.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,f,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ff.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(L){Of(this,L);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)p.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(HE,f,void 0)>=0)||y||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,Y]of p)this.g.setRequestHeader(L,Y);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){Of(this,L)}};function Of(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,Df(a),ia(a)}function Df(a){a.A||(a.A=!0,G(a,"complete"),G(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,G(this,"complete"),G(this,"abort"),ia(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ia(this,!0)),Ye.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Vf(this):this.Xa())},t.Xa=function(){Vf(this)};function Vf(a){if(a.h&&typeof i<"u"){if(a.v&&ms(a)==4)setTimeout(a.Ca.bind(a),0);else if(G(a,"readystatechange"),ms(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var y;if(y=L===0){let Y=String(a.D).match(If)[1]||null;!Y&&o.self&&o.self.location&&(Y=o.self.location.protocol.slice(0,-1)),y=!jE.test(Y?Y.toLowerCase():"")}p=y}if(p)G(a,"complete"),G(a,"success");else{a.o=6;try{var D=ms(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",Df(a)}}finally{ia(a)}}}}function ia(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,f||G(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ms(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ms(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),At(f)}};function xf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qE(a){const f={};a=(a.g&&ms(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(I(a[y]))continue;var p=CE(a[y]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=f[D]||[];f[D]=L,L.push(p)}Qt(f,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Di(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function Mf(a){this.za=0,this.i=[],this.j=new Ii,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Di("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Di("baseRetryDelayMs",5e3,a),this.Za=Di("retryDelaySeedMs",1e4,a),this.Ta=Di("forwardChannelMaxRetries",2,a),this.va=Di("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new yf(a&&a.concurrentRequestLimit),this.Ba=new $E,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Mf.prototype,t.ka=8,t.I=1,t.connect=function(a,f,p,y){Lt(0),this.W=a,this.H=f||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=zf(this,null,this.W),aa(this)};function _c(a){if(Lf(a),a.I==3){var f=a.V++,p=In(a.J);if(ze(p,"SID",a.M),ze(p,"RID",f),ze(p,"TYPE","terminate"),Vi(a,p),f=new fs(a,a.j,f),f.M=2,f.A=sa(In(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=f.A,p=!0),p||(f.g=Wf(f.j,null),f.g.ea(f.A)),f.F=Date.now(),na(f)}qf(a)}function oa(a){a.g&&(vc(a),a.g.cancel(),a.g=null)}function Lf(a){oa(a),a.v&&(o.clearTimeout(a.v),a.v=null),la(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function aa(a){if(!vf(a.h)&&!a.m){a.m=!0;var f=a.Ea;U||_(),B||(U(),B=!0),A.add(f,a),a.D=0}}function zE(a,f){return Ef(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ti(u(a.Ea,a,f),Hf(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new fs(this,this.j,a);let L=this.o;if(this.U&&(L?(L=Ge(L),qt(L,this.U)):L=this.U),this.u!==null||this.R||(D.J=L,L=null),this.S)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,f>4096){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=Uf(this,D,f),p=In(this.J),ze(p,"RID",a),ze(p,"CVER",22),this.G&&ze(p,"X-HTTP-Session-Id",this.G),Vi(this,p),L&&(this.R?f="headers="+Ai(Nf(L))+"&"+f:this.u&&gc(p,this.u,L)),dc(this.h,D),this.Ra&&ze(p,"TYPE","init"),this.S?(ze(p,"$req",f),ze(p,"SID","null"),D.U=!0,cc(D,p,null)):cc(D,p,f),this.I=2}}else this.I==3&&(a?Ff(this,a):this.i.length==0||vf(this.h)||Ff(this))};function Ff(a,f){var p;f?p=f.l:p=a.V++;const y=In(a.J);ze(y,"SID",a.M),ze(y,"RID",p),ze(y,"AID",a.K),Vi(a,y),a.u&&a.o&&gc(y,a.u,a.o),p=new fs(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),f&&(a.i=f.G.concat(a.i)),f=Uf(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),dc(a.h,p),cc(p,y,f)}function Vi(a,f){a.H&&ht(a.H,function(p,y){ze(f,y,p)}),a.l&&ht({},function(p,y){ze(f,y,p)})}function Uf(a,f,p){p=Math.min(a.i.length,p);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var D=a.i;let Ae=-1;for(;;){const ot=["count="+p];Ae==-1?p>0?(Ae=D[0].g,ot.push("ofs="+Ae)):Ae=0:ot.push("ofs="+Ae);let Be=!0;for(let dt=0;dt<p;dt++){var L=D[dt].g;const An=D[dt].map;if(L-=Ae,L<0)Ae=Math.max(0,D[dt].g-100),Be=!1;else try{L="req"+L+"_"||"";try{var Y=An instanceof Map?An:Object.entries(An);for(const[er,gs]of Y){let _s=gs;l(gs)&&(_s=Oe(gs)),ot.push(L+er+"="+encodeURIComponent(_s))}}catch(er){throw ot.push(L+"type="+encodeURIComponent("_badmap")),er}}catch{y&&y(An)}}if(Be){Y=ot.join("&");break e}}Y=void 0}return a=a.i.splice(0,p),f.G=a,Y}function Bf(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;U||_(),B||(U(),B=!0),A.add(f,a),a.A=0}}function yc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ti(u(a.Da,a),Hf(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,$f(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ti(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Lt(10),oa(this),$f(this))};function vc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function $f(a){a.g=new fs(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=In(a.na);ze(f,"RID","rpc"),ze(f,"SID",a.M),ze(f,"AID",a.K),ze(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&ze(f,"TO",a.ia),ze(f,"TYPE","xmlhttp"),Vi(a,f),a.u&&a.o&&gc(f,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=sa(In(f)),p.u=null,p.R=!0,mf(p,a)}t.Va=function(){this.C!=null&&(this.C=null,oa(this),yc(this),Lt(19))};function la(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function jf(a,f){var p=null;if(a.g==f){la(a),vc(a),a.g=null;var y=2}else if(fc(a.h,f))p=f.G,wf(a.h,f),y=1;else return;if(a.I!=0){if(f.o)if(y==1){p=f.u?f.u.length:0,f=Date.now()-f.F;var D=a.D;y=Js(),G(y,new uf(y,p)),aa(a)}else Bf(a);else if(D=f.m,D==3||D==0&&f.X>0||!(y==1&&zE(a,f)||y==2&&yc(a)))switch(p&&p.length>0&&(f=a.h,f.i=f.i.concat(p)),D){case 1:Zs(a,5);break;case 4:Zs(a,10);break;case 3:Zs(a,6);break;default:Zs(a,2)}}}function Hf(a,f){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*f}function Zs(a,f){if(a.j.info("Error code "+f),f==2){var p=u(a.bb,a),y=a.Ua;const D=!y;y=new ds(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Si(y,"https"),sa(y),D?UE(y.toString(),p):BE(y.toString(),p)}else Lt(2);a.I=0,a.l&&a.l.pa(f),qf(a),Lf(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function qf(a){if(a.I=0,a.ja=[],a.l){const f=Tf(a.h);(f.length!=0||a.i.length!=0)&&(E(a.ja,f),E(a.ja,a.i),a.h.i.length=0,g(a.i),a.i.length=0),a.l.oa()}}function zf(a,f,p){var y=p instanceof ds?In(p):new ds(p);if(y.g!="")f&&(y.g=f+"."+y.g),Ri(y,y.u);else{var D=o.location;y=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;const L=new ds(null);y&&Si(L,y),f&&(L.g=f),D&&Ri(L,D),p&&(L.h=p),y=L}return p=a.G,f=a.wa,p&&f&&ze(y,p,f),ze(y,"VER",a.ka),Vi(a,y),y}function Wf(a,f,p){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new Ye(new mc({ab:p})):new Ye(a.ma),f.Fa(a.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kf(){}t=Kf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ca(){}ca.prototype.g=function(a,f){return new Xt(a,f)};function Xt(a,f){Q.call(this),this.g=new Mf(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!I(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!I(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new kr(this)}d(Xt,Q),Xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){_c(this.g)},Xt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Oe(a),a=p);f.i.push(new NE(f.Ya++,a)),f.I==3&&aa(f)},Xt.prototype.N=function(){this.g.l=null,delete this.j,_c(this.g),delete this.g,Xt.Z.N.call(this)};function Gf(a){Rr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}d(Gf,Rr);function Qf(){vt.call(this),this.status=1}d(Qf,vt);function kr(a){this.g=a}d(kr,Kf),kr.prototype.ra=function(){G(this.g,"a")},kr.prototype.qa=function(a){G(this.g,new Gf(a))},kr.prototype.pa=function(a){G(this.g,new Qf)},kr.prototype.oa=function(){G(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,Yy=function(){return new ca},Jy=function(){return Js()},Qy=ft,Pu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ta.NO_ERROR=0,ta.TIMEOUT=8,ta.HTTP_ERROR=6,Da=ta,hf.COMPLETE="complete",Gy=hf,Yt.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",Q.prototype.listen=Q.prototype.J,zi=Yt,Ye.prototype.listenOnce=Ye.prototype.K,Ye.prototype.getLastError=Ye.prototype.Ha,Ye.prototype.getLastErrorCode=Ye.prototype.ya,Ye.prototype.getStatus=Ye.prototype.ca,Ye.prototype.getResponseJson=Ye.prototype.La,Ye.prototype.getResponseText=Ye.prototype.la,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Fa,Ky=Ye}).apply(typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{});const Kp="@firebase/firestore",Gp="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new gh("@firebase/firestore");function xr(){return Ir.logLevel}function se(t,...e){if(Ir.logLevel<=Re.DEBUG){const n=e.map(Ph);Ir.debug(`Firestore (${mi}): ${t}`,...n)}}function as(t,...e){if(Ir.logLevel<=Re.ERROR){const n=e.map(Ph);Ir.error(`Firestore (${mi}): ${t}`,...n)}}function Zr(t,...e){if(Ir.logLevel<=Re.WARN){const n=e.map(Ph);Ir.warn(`Firestore (${mi}): ${t}`,...n)}}function Ph(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Xy(t,s,n)}function Xy(t,e,n){let s=`FIRESTORE (${mi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw as(s),new Error(s)}function Me(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||Xy(e,r,s)}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends us{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Pt.UNAUTHENTICATED)))}shutdown(){}}class fP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class dP{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _r,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _r)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string",31837,{l:s}),new Zy(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string",2055,{h:e}),new Pt(e)}}class pP{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class mP{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new pP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,en(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Me(this.o===void 0,3512);const s=i=>{i.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Qp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=_P(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function Ce(t,e){return t<e?-1:t>e?1:0}function ku(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return Gc(r)===Gc(i)?Ce(r,i):Gc(r)?1:-1}return Ce(t.length,e.length)}const yP=55296,vP=57343;function Gc(t){const e=t.charCodeAt(0);return e>=yP&&e<=vP}function ei(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="__name__";class Cn{constructor(e,n,s){n===void 0?n=0:n>e.length&&pe(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&pe(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=Cn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return Ce(e.length,n.length)}static compareSegments(e,n){const s=Cn.isNumericId(e),r=Cn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Cn.extractNumericId(e).compare(Cn.extractNumericId(n)):ku(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xs.fromString(e.substring(4,e.length-2))}}class Qe extends Cn{construct(e,n,s){return new Qe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new Qe(n)}static emptyPath(){return new Qe([])}}const EP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Cn{construct(e,n,s){return new wt(e,n,s)}static isValidIdentifier(e){return EP.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jp}static keyField(){return new wt([Jp])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new oe(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new oe(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new oe(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Qe.fromString(e))}static fromName(e){return new he(Qe.fromString(e).popFirst(5))}static empty(){return new he(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t,e,n){if(!n)throw new oe(K.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TP(t,e,n,s){if(e===!0&&s===!0)throw new oe(K.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yp(t){if(!he.isDocumentKey(t))throw new oe(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ev(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Nh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe(12329,{type:typeof t})}function Ms(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nh(t);throw new oe(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){const n={typeString:t};return e&&(n.value=e),n}function Qo(t,e){if(!ev(t))throw new oe(K.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new oe(K.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=-62135596800,Zp=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Zp);return new Ke(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Xp)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zp}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qo(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:it("string",Ke._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Ke(0,0))}static max(){return new ve(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=-1;function IP(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ve.fromTimestamp(s===1e9?new Ke(n+1,0):new Ke(n,s));return new Fs(r,he.empty(),e)}function AP(t){return new Fs(t.readTime,t.key,Ao)}class Fs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Fs(ve.min(),he.empty(),Ao)}static max(){return new Fs(ve.max(),he.empty(),Ao)}}function bP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t){if(t.code!==K.FAILED_PRECONDITION||t.message!==SP)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):q.reject(n)}static resolve(e){return new q(((n,s)=>{n(e)}))}static reject(e){return new q(((n,s)=>{s(e)}))}static waitFor(e){return new q(((n,s)=>{let r=0,i=0,o=!1;e.forEach((l=>{++r,l.next((()=>{++i,o&&i===r&&n()}),(c=>s(c)))})),o=!0,i===r&&n()}))}static or(e){let n=q.resolve(!1);for(const s of e)n=n.next((r=>r?q.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new q(((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((h=>{o[u]=h,++l,l===i&&s(o)}),(h=>r(h)))}}))}static doWhile(e,n){return new q(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function CP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _i(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Hl.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=-1;function ql(t){return t==null}function rl(t){return t===0&&1/t==-1/0}function PP(t){return typeof t=="number"&&Number.isInteger(t)&&!rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="";function kP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=em(e)),e=NP(t.get(n),e);return em(e)}function NP(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case tv:n+="";break;default:n+=i}}return n}function em(t){return t+tv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ya(this.root,e,this.comparator,!0)}}class ya{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Et.RED,this.left=r??Et.EMPTY,this.right=i??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Et(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Et.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nm(this.data.getIterator())}getIteratorFrom(e){return new nm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class nm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new sn([])}unionWith(e){let n=new ut(wt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sv("Invalid base64 string: "+i):i}})(e);return new It(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const OP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Us(t){if(Me(!!t,39018),typeof t=="string"){let e=0;const n=OP.exec(t);if(Me(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bs(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="server_timestamp",iv="__type__",ov="__previous_value__",av="__local_write_time__";function Dh(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[iv])==null?void 0:s.stringValue)===rv}function zl(t){const e=t.mapValue.fields[ov];return Dh(e)?zl(e):e}function bo(t){const e=Us(t.mapValue.fields[av].timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n,s,r,i,o,l,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const il="(default)";class So{constructor(e,n){this.projectId=e,this.database=n||il}static empty(){return new So("","")}get isDefaultDatabase(){return this.database===il}isEqual(e){return e instanceof So&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="__type__",VP="__max__",va={mapValue:{}},cv="__vector__",ol="value";function $s(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dh(t)?4:MP(t)?9007199254740991:xP(t)?10:11:pe(28295,{value:t})}function $n(t,e){if(t===e)return!0;const n=$s(t);if(n!==$s(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bo(t).isEqual(bo(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Us(r.timestampValue),l=Us(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return Bs(r.bytesValue).isEqual(Bs(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return et(r.geoPointValue.latitude)===et(i.geoPointValue.latitude)&&et(r.geoPointValue.longitude)===et(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return et(r.integerValue)===et(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=et(r.doubleValue),l=et(i.doubleValue);return o===l?rl(o)===rl(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(tm(o)!==tm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!$n(o[c],l[c])))return!1;return!0})(t,e);default:return pe(52216,{left:t})}}function Ro(t,e){return(t.values||[]).find((n=>$n(n,e)))!==void 0}function ti(t,e){if(t===e)return 0;const n=$s(t),s=$s(e);if(n!==s)return Ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=et(i.integerValue||i.doubleValue),c=et(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return sm(t.timestampValue,e.timestampValue);case 4:return sm(bo(t),bo(e));case 5:return ku(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Bs(i),c=Bs(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=Ce(l[u],c[u]);if(h!==0)return h}return Ce(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Ce(et(i.latitude),et(o.latitude));return l!==0?l:Ce(et(i.longitude),et(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return rm(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,g,E,k;const l=i.fields||{},c=o.fields||{},u=(m=l[ol])==null?void 0:m.arrayValue,h=(g=c[ol])==null?void 0:g.arrayValue,d=Ce(((E=u==null?void 0:u.values)==null?void 0:E.length)||0,((k=h==null?void 0:h.values)==null?void 0:k.length)||0);return d!==0?d:rm(u,h)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===va.mapValue&&o===va.mapValue)return 0;if(i===va.mapValue)return 1;if(o===va.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const m=ku(c[d],h[d]);if(m!==0)return m;const g=ti(l[c[d]],u[h[d]]);if(g!==0)return g}return Ce(c.length,h.length)})(t.mapValue,e.mapValue);default:throw pe(23264,{he:n})}}function sm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=Us(t),s=Us(e),r=Ce(n.seconds,s.seconds);return r!==0?r:Ce(n.nanos,s.nanos)}function rm(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=ti(n[r],s[r]);if(i)return i}return Ce(n.length,s.length)}function ni(t){return Nu(t)}function Nu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Us(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Bs(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return he.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Nu(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Nu(n.fields[o])}`;return r+"}"})(t.mapValue):pe(61005,{value:t})}function Va(t){switch($s(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zl(t);return e?16+Va(e):16;case 5:return 2*t.stringValue.length;case 6:return Bs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Va(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return Gs(s.fields,((i,o)=>{r+=i.length+Va(o)})),r})(t.mapValue);default:throw pe(13486,{value:t})}}function Ou(t){return!!t&&"integerValue"in t}function Vh(t){return!!t&&"arrayValue"in t}function im(t){return!!t&&"nullValue"in t}function om(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xa(t){return!!t&&"mapValue"in t}function xP(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[lv])==null?void 0:s.stringValue)===cv}function ao(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=ao(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ao(t.arrayValue.values[n]);return e}return{...t}}function MP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===VP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ao(n)}setAll(e){let n=wt.emptyPath(),s={},r=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=ao(o):r.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];xa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Gs(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Wt(ao(this.value))}}function uv(t){const e=[];return Gs(t.fields,((n,s)=>{const r=new wt([n]);if(xa(s)){const i=uv(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ot(e,0,ve.min(),ve.min(),ve.min(),Wt.empty(),0)}static newFoundDocument(e,n,s,r){return new Ot(e,1,n,ve.min(),s,r,0)}static newNoDocument(e,n){return new Ot(e,2,n,ve.min(),ve.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,ve.min(),ve.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.position=e,this.inclusive=n}}function am(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=he.comparator(he.fromName(o.referenceValue),n.key):s=ti(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function lm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n="asc"){this.field=e,this.dir=n}}function LP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{}class lt extends hv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new UP(e,n,s):n==="array-contains"?new jP(e,s):n==="in"?new HP(e,s):n==="not-in"?new qP(e,s):n==="array-contains-any"?new zP(e,s):new lt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new BP(e,s):new $P(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ti(n,this.value)):n!==null&&$s(this.value)===$s(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends hv{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new jn(e,n)}matches(e){return fv(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function fv(t){return t.op==="and"}function dv(t){return FP(t)&&fv(t)}function FP(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Du(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(dv(t))return t.filters.map((e=>Du(e))).join(",");{const e=t.filters.map((n=>Du(n))).join(",");return`${t.op}(${e})`}}function pv(t,e){return t instanceof lt?(function(s,r){return r instanceof lt&&s.op===r.op&&s.field.isEqual(r.field)&&$n(s.value,r.value)})(t,e):t instanceof jn?(function(s,r){return r instanceof jn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,l)=>i&&pv(o,r.filters[l])),!0):!1})(t,e):void pe(19439)}function mv(t){return t instanceof lt?(function(n){return`${n.field.canonicalString()} ${n.op} ${ni(n.value)}`})(t):t instanceof jn?(function(n){return n.op.toString()+" {"+n.getFilters().map(mv).join(" ,")+"}"})(t):"Filter"}class UP extends lt{constructor(e,n,s){super(e,n,s),this.key=he.fromName(s.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class BP extends lt{constructor(e,n){super(e,"in",n),this.keys=gv("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class $P extends lt{constructor(e,n){super(e,"not-in",n),this.keys=gv("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function gv(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((s=>he.fromName(s.referenceValue)))}class jP extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vh(n)&&Ro(n.arrayValue,this.value)}}class HP extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ro(this.value.arrayValue,n)}}class qP extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ro(this.value.arrayValue,n)}}class zP extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Ro(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function cm(t,e=null,n=[],s=[],r=null,i=null,o=null){return new WP(t,e,n,s,r,i,o)}function xh(t){const e=we(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Du(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>ni(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>ni(s))).join(",")),e.Te=n}return e.Te}function Mh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lm(t.startAt,e.startAt)&&lm(t.endAt,e.endAt)}function Vu(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function KP(t,e,n,s,r,i,o,l){return new Wl(t,e,n,s,r,i,o,l)}function Lh(t){return new Wl(t)}function um(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GP(t){return t.collectionGroup!==null}function lo(t){const e=we(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ut(wt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ll(i,s))})),n.has(wt.keyField().canonicalString())||e.Ie.push(new ll(wt.keyField(),s))}return e.Ie}function xn(t){const e=we(t);return e.Ee||(e.Ee=QP(e,lo(t))),e.Ee}function QP(t,e){if(t.limitType==="F")return cm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new ll(r.field,i)}));const n=t.endAt?new al(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new al(t.startAt.position,t.startAt.inclusive):null;return cm(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function xu(t,e,n){return new Wl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Kl(t,e){return Mh(xn(t),xn(e))&&t.limitType===e.limitType}function _v(t){return`${xh(xn(t))}|lt:${t.limitType}`}function Mr(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>mv(r))).join(", ")}]`),ql(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>ni(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>ni(r))).join(",")),`Target(${s})`})(xn(t))}; limitType=${t.limitType})`}function Gl(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):he.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of lo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(o,l,c){const u=am(o,l,c);return o.inclusive?u<=0:u<0})(s.startAt,lo(s),r)||s.endAt&&!(function(o,l,c){const u=am(o,l,c);return o.inclusive?u>=0:u>0})(s.endAt,lo(s),r))})(t,e)}function JP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yv(t){return(e,n)=>{let s=!1;for(const r of lo(t)){const i=YP(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function YP(t,e,n){const s=t.field.isKeyField()?he.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?ti(c,u):pe(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return pe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return nv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=new Je(he.comparator);function ls(){return XP}const vv=new Je(he.comparator);function Wi(...t){let e=vv;for(const n of t)e=e.insert(n.key,n);return e}function Ev(t){let e=vv;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function fr(){return co()}function wv(){return co()}function co(){return new br((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ZP=new Je(he.comparator),e1=new ut(he.comparator);function Pe(...t){let e=e1;for(const n of t)e=e.add(n);return e}const t1=new ut(Ce);function n1(){return t1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rl(e)?"-0":e}}function Tv(t){return{integerValue:""+t}}function s1(t,e){return PP(e)?Tv(e):Fh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this._=void 0}}function r1(t,e,n){return t instanceof cl?(function(r,i){const o={fields:{[iv]:{stringValue:rv},[av]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Dh(i)&&(i=zl(i)),i&&(o.fields[ov]=i),{mapValue:o}})(n,e):t instanceof si?Av(t,e):t instanceof ri?bv(t,e):(function(r,i){const o=Iv(r,i),l=hm(o)+hm(r.Ae);return Ou(o)&&Ou(r.Ae)?Tv(l):Fh(r.serializer,l)})(t,e)}function i1(t,e,n){return t instanceof si?Av(t,e):t instanceof ri?bv(t,e):n}function Iv(t,e){return t instanceof ul?(function(s){return Ou(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class cl extends Ql{}class si extends Ql{constructor(e){super(),this.elements=e}}function Av(t,e){const n=Sv(e);for(const s of t.elements)n.some((r=>$n(r,s)))||n.push(s);return{arrayValue:{values:n}}}class ri extends Ql{constructor(e){super(),this.elements=e}}function bv(t,e){let n=Sv(e);for(const s of t.elements)n=n.filter((r=>!$n(r,s)));return{arrayValue:{values:n}}}class ul extends Ql{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function hm(t){return et(t.integerValue||t.doubleValue)}function Sv(t){return Vh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n){this.field=e,this.transform=n}}function o1(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof si&&r instanceof si||s instanceof ri&&r instanceof ri?ei(s.elements,r.elements,$n):s instanceof ul&&r instanceof ul?$n(s.Ae,r.Ae):s instanceof cl&&r instanceof cl})(t.transform,e.transform)}class a1{constructor(e,n){this.version=e,this.transformResults=n}}class Mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jl{}function Cv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kv(t.key,Mn.none()):new Jo(t.key,t.data,Mn.none());{const n=t.data,s=Wt.empty();let r=new ut(wt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Qs(t.key,s,new sn(r.toArray()),Mn.none())}}function l1(t,e,n){t instanceof Jo?(function(r,i,o){const l=r.value.clone(),c=dm(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Qs?(function(r,i,o){if(!Ma(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=dm(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Pv(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function uo(t,e,n,s){return t instanceof Jo?(function(i,o,l,c){if(!Ma(i.precondition,o))return l;const u=i.value.clone(),h=pm(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,s):t instanceof Qs?(function(i,o,l,c){if(!Ma(i.precondition,o))return l;const u=pm(i.fieldTransforms,c,o),h=o.data;return h.setAll(Pv(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((d=>d.field)))})(t,e,n,s):(function(i,o,l){return Ma(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function c1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Iv(s.transform,r||null);i!=null&&(n===null&&(n=Wt.empty()),n.set(s.field,i))}return n||null}function fm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&ei(s,r,((i,o)=>o1(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jo extends Jl{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Qs extends Jl{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pv(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function dm(t,e,n){const s=new Map;Me(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,i1(o,l,n[r]))}return s}function pm(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,r1(i,o,e))}return s}class kv extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class u1 extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&l1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=uo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=uo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=wv();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=Cv(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,((n,s)=>fm(n,s)))&&ei(this.baseMutations,e.baseMutations,((n,s)=>fm(n,s)))}}class Uh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Me(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return ZP})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Uh(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,ke;function p1(t){switch(t){case K.OK:return pe(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return pe(15467,{code:t})}}function Nv(t){if(t===void 0)return as("GRPC error has no .code"),K.UNKNOWN;switch(t){case rt.OK:return K.OK;case rt.CANCELLED:return K.CANCELLED;case rt.UNKNOWN:return K.UNKNOWN;case rt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case rt.INTERNAL:return K.INTERNAL;case rt.UNAVAILABLE:return K.UNAVAILABLE;case rt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case rt.NOT_FOUND:return K.NOT_FOUND;case rt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case rt.ABORTED:return K.ABORTED;case rt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case rt.DATA_LOSS:return K.DATA_LOSS;default:return pe(39323,{code:t})}}(ke=rt||(rt={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=new xs([4294967295,4294967295],0);function mm(t){const e=m1().encode(t),n=new Wy;return n.update(e),new Uint8Array(n.digest())}function gm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xs([n,s],0),new xs([r,i],0)]}class Bh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ki(`Invalid padding: ${n}`);if(s<0)throw new Ki(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ki(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ki(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=xs.fromNumber(this.ge)}ye(e,n,s){let r=e.add(n.multiply(xs.fromNumber(s)));return r.compare(g1)===1&&(r=new xs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=mm(e),[s,r]=gm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bh(i,r,n);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=mm(e),[s,r]=gm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Yo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Yl(ve.min(),r,new Je(Ce),ls(),Pe())}}class Yo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Yo(s,n,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,s,r){this.be=e,this.removedTargetIds=n,this.key=s,this.De=r}}class Ov{constructor(e,n){this.targetId=e,this.Ce=n}}class Dv{constructor(e,n,s=It.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class _m{constructor(){this.ve=0,this.Fe=ym(),this.Me=It.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),n=Pe(),s=Pe();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:pe(38017,{changeType:i})}})),new Yo(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=ym()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Me(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class _1{constructor(e){this.Ge=e,this.ze=new Map,this.je=ls(),this.Je=Ea(),this.He=Ea(),this.Ye=new Je(Ce)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,r)=>{this.rt(r)&&n(r)}))}st(e){const n=e.targetId,s=e.Ce.count,r=this.ot(n);if(r){const i=r.target;if(Vu(i))if(s===0){const o=new he(i.path);this.et(n,o,Ot.newNoDocument(o,ve.min()))}else Me(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=Bs(s).toUint8Array()}catch(c){if(c instanceof sv)return Zr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Bh(o,r,i)}catch(c){return Zr(c instanceof Ki?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let r=0;return s.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),r++)})),r}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Vu(l.target)){const c=new he(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Ot.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let s=Pe();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const r=new Yl(e,n,this.Ye,this.je,s);return this.je=ls(),this.Je=Ea(),this.He=Ea(),this.Ye=new Je(Ce),r}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,n)?r.Qe(n,1):r.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new _m,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ut(Ce),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ut(Ce),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _m),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ea(){return new Je(he.comparator)}function ym(){return new Je(he.comparator)}const y1={asc:"ASCENDING",desc:"DESCENDING"},v1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},E1={and:"AND",or:"OR"};class w1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mu(t,e){return t.useProto3Json||ql(e)?e:{value:e}}function hl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function T1(t,e){return hl(t,e.toTimestamp())}function Ln(t){return Me(!!t,49232),ve.fromTimestamp((function(n){const s=Us(n);return new Ke(s.seconds,s.nanos)})(t))}function $h(t,e){return Lu(t,e).canonicalString()}function Lu(t,e){const n=(function(r){return new Qe(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function xv(t){const e=Qe.fromString(t);return Me(Bv(e),10190,{key:e.toString()}),e}function Fu(t,e){return $h(t.databaseId,e.path)}function Qc(t,e){const n=xv(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(Lv(n))}function Mv(t,e){return $h(t.databaseId,e)}function I1(t){const e=xv(t);return e.length===4?Qe.emptyPath():Lv(e)}function Uu(t){return new Qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lv(t){return Me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function vm(t,e,n){return{name:Fu(t,e),fields:n.value.mapValue.fields}}function A1(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(Me(h===void 0||typeof h=="string",58123),It.fromBase64String(h||"")):(Me(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),It.fromUint8Array(h||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const h=u.code===void 0?K.UNKNOWN:Nv(u.code);return new oe(h,u.message||"")})(o);n=new Dv(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Qc(t,s.document.name),i=Ln(s.document.updateTime),o=s.document.createTime?Ln(s.document.createTime):ve.min(),l=new Wt({mapValue:{fields:s.document.fields}}),c=Ot.newFoundDocument(r,i,o,l),u=s.targetIds||[],h=s.removedTargetIds||[];n=new La(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Qc(t,s.document),i=s.readTime?Ln(s.readTime):ve.min(),o=Ot.newNoDocument(r,i),l=s.removedTargetIds||[];n=new La([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Qc(t,s.document),i=s.removedTargetIds||[];n=new La([],i,r,null)}else{if(!("filter"in e))return pe(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new d1(r,i),l=s.targetId;n=new Ov(l,o)}}return n}function b1(t,e){let n;if(e instanceof Jo)n={update:vm(t,e.key,e.value)};else if(e instanceof kv)n={delete:Fu(t,e.key)};else if(e instanceof Qs)n={update:vm(t,e.key,e.data),updateMask:V1(e.fieldMask)};else{if(!(e instanceof u1))return pe(16599,{Vt:e.type});n={verify:Fu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const l=o.transform;if(l instanceof cl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ri)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ul)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw pe(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:T1(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe(27497)})(t,e.precondition)),n}function S1(t,e){return t&&t.length>0?(Me(e!==void 0,14353),t.map((n=>(function(r,i){let o=r.updateTime?Ln(r.updateTime):Ln(i);return o.isEqual(ve.min())&&(o=Ln(i)),new a1(o,r.transformResults||[])})(n,e)))):[]}function R1(t,e){return{documents:[Mv(t,e.path)]}}function C1(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Mv(t,r);const i=(function(u){if(u.length!==0)return Uv(jn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(m){return{field:Lr(m.field),direction:N1(m.dir)}})(h)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:r}}function P1(t){let e=I1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Me(s===1,65062);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=(function(d){const m=Fv(d);return m instanceof jn&&dv(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(d){return d.map((m=>(function(E){return new ll(Fr(E.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(d){let m;return m=typeof d=="object"?d.value:d,ql(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(d){const m=!!d.before,g=d.values||[];return new al(g,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(d){const m=!d.before,g=d.values||[];return new al(g,m)})(n.endAt)),KP(e,r,o,i,l,"F",c,u)}function k1(t,e){const n=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:r})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Fr(n.unaryFilter.field);return lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Fr(n.unaryFilter.field);return lt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return lt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return lt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return lt.create(Fr(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return jn.create(n.compositeFilter.filters.map((s=>Fv(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(n.compositeFilter.op))})(t):pe(30097,{filter:t})}function N1(t){return y1[t]}function O1(t){return v1[t]}function D1(t){return E1[t]}function Lr(t){return{fieldPath:t.canonicalString()}}function Fr(t){return wt.fromServerFormat(t.fieldPath)}function Uv(t){return t instanceof lt?(function(n){if(n.op==="=="){if(om(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NAN"}};if(im(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(om(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NAN"}};if(im(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(n.field),op:O1(n.op),value:n.value}}})(t):t instanceof jn?(function(n){const s=n.getFilters().map((r=>Uv(r)));return s.length===1?s[0]:{compositeFilter:{op:D1(n.op),filters:s}}})(t):pe(54877,{filter:t})}function V1(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Bv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,s,r,i=ve.min(),o=ve.min(),l=It.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new ks(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.yt=e}}function M1(t){const e=P1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(){this.Cn=new F1}addToCollectionParentIndex(e,n){return this.Cn.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(Fs.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(Fs.min())}updateCollectionGroup(e,n,s){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class F1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ut(Qe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ut(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$v=41943040;class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt($v,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ii(0)}static cr(){return new ii(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="LruGarbageCollector",U1=1048576;function Tm([t,e],[n,s]){const r=Ce(t,n);return r===0?Ce(e,s):r}class B1{constructor(e){this.Ir=e,this.buffer=new ut(Tm),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Tm(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $1{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){se(wm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_i(n)?se(wm,"Ignoring IndexedDB error during garbage collection: ",n):await gi(n)}await this.Vr(3e5)}))}}class j1{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return q.resolve(Hl.ce);const s=new B1(n);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Em)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Em):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,r,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r)))).next((d=>(s=d,l=Date.now(),this.removeTargets(e,s,n)))).next((d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((d=>(u=Date.now(),xr()<=Re.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d}))))}}function H1(t,e){return new j1(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(){this.changes=new br((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?q.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&uo(s.mutation,r,sn.empty(),Ke.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Pe()){const r=fr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let o=Wi();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=fr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Pe())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,s,r){let i=ls();const o=co(),l=(function(){return co()})();return n.forEach(((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Qs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),uo(h.mutation,u,h.mutation.getFieldMask(),Ke.now())):o.set(u.key,sn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,h)=>o.set(u,h))),n.forEach(((u,h)=>l.set(u,new z1(h,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const s=co();let r=new Je(((o,l)=>o-l)),i=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||sn.empty();h=l.applyToLocalView(u,h),s.set(c,h);const d=(r.get(l.batchId)||Pe()).add(c);r=r.insert(l.batchId,d)}))})).next((()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,d=wv();h.forEach((m=>{if(!i.has(m)){const g=Cv(n.get(m),s.get(m));g!==null&&d.set(m,g),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return q.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return(function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):GP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):q.resolve(fr());let l=Ao,c=i;return o.next((u=>q.forEach(u,((h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(h)?q.resolve():this.remoteDocumentCache.getEntry(e,h).next((m=>{c=c.insert(h,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Pe()))).next((h=>({batchId:l,changes:Ev(h)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next((s=>{let r=Wi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Wi();return this.indexManager.getCollectionParents(e,i).next((l=>q.forEach(l,(c=>{const u=(function(d,m){return new Wl(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next((h=>{h.forEach(((d,m)=>{o=o.insert(d,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((o=>{i.forEach(((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ot.newInvalidDocument(h)))}));let l=Wi();return o.forEach(((c,u)=>{const h=i.get(c);h!==void 0&&uo(h.mutation,u,sn.empty(),Ke.now()),Gl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return q.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:Ln(r.createTime)}})(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(r){return{name:r.name,query:M1(r.bundledQuery),readTime:Ln(r.readTime)}})(n)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(){this.overlays=new Je(he.comparator),this.qr=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const s=fr();return q.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.St(e,n,i)})),q.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),q.resolve()}getOverlaysForCollection(e,n,s){const r=fr(),i=n.length+1,o=new he(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return q.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Je(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=fr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=fr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,h)=>l.set(u,h))),!(l.size()>=r)););return q.resolve(l)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new f1(n,s));let i=this.qr.get(n);i===void 0&&(i=Pe(),this.qr.set(n,i)),this.qr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.Qr=new ut(pt.$r),this.Ur=new ut(pt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new pt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new pt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new he(new Qe([])),s=new pt(n,e),r=new pt(n,e+1),i=[];return this.Ur.forEachInRange([s,r],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new he(new Qe([])),s=new pt(n,e),r=new pt(n,e+1);let i=Pe();return this.Ur.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new pt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class pt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return he.comparator(e.key,n.key)||Ce(e.Yr,n.Yr)}static Kr(e,n){return Ce(e.Yr,n.Yr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ut(pt.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new h1(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.Zr=this.Zr.add(new pt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ei(s),i=r<0?0:r;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Oh:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new pt(n,0),r=new pt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(o=>{const l=this.Xr(o.Yr);i.push(l)})),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ut(Ce);return n.forEach((r=>{const i=new pt(r,0),o=new pt(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{s=s.add(l.Yr)}))})),q.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;he.isDocumentKey(i)||(i=i.child(""));const o=new pt(new he(i),0);let l=new ut(Ce);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.Yr)),!0)}),o),q.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){Me(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return q.forEach(n.mutations,(r=>{const i=new pt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new pt(n,0),r=this.Zr.firstAfterOrEqual(s);return q.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.ri=e,this.docs=(function(){return new Je(he.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return q.resolve(s?s.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let s=ls();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ot.newInvalidDocument(r))})),q.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=ls();const o=n.path,l=new he(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||bP(AP(h),s)<=0||(r.has(h.key)||Gl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,s,r){pe(9500)}ii(e,n){return q.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new X1(this)}getSize(e){return q.resolve(this.size)}}class X1 extends q1{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),q.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.persistence=e,this.si=new br((n=>xh(n)),Mh),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new jh,this.targetCount=0,this.ai=ii.ur()}forEachTarget(e,n){return this.si.forEach(((s,r)=>n(r))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),q.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ii(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Pr(n),q.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),q.waitFor(i).next((()=>r))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return q.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),q.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return q.resolve(s)}containsKey(e,n){return q.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n){this.ui={},this.overlays={},this.ci=new Hl(0),this.li=!1,this.li=!0,this.hi=new Q1,this.referenceDelegate=e(this),this.Pi=new Z1(this),this.indexManager=new L1,this.remoteDocumentCache=(function(r){return new Y1(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new x1(n),this.Ii=new K1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new G1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new J1(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){se("MemoryPersistence","Starting transaction:",e);const r=new ek(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,n){return q.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class ek extends RP{constructor(e){super(),this.currentSequenceNumber=e}}class Hh{constructor(e){this.persistence=e,this.Ri=new jh,this.Vi=null}static mi(e){return new Hh(e)}get fi(){if(this.Vi)return this.Vi;throw pe(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),q.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),q.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,(s=>{const r=he.fromPath(s);return this.gi(e,r).next((i=>{i||n.removeEntry(r,ve.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return q.or([()=>q.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class fl{constructor(e,n){this.persistence=e,this.pi=new br((s=>kP(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=H1(this,n)}static mi(e,n){return new fl(e,n)}Ei(){}di(e){return q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return q.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?q.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(o=>this.br(e,o,n).next((l=>{l||(s++,i.removeEntry(o,ve.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),q.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),q.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Va(e.data.value)),n}br(e,n,s){return q.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.pi.get(n);return q.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=r}static As(e,n){let s=Pe(),r=Pe();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new qh(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return PS()?8:CP(xt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new tk;return this.Ss(e,n,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>i.result))}bs(e,n,s,r){return s.documentReadCount<this.fs?(xr()<=Re.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(xr()<=Re.DEBUG&&se("QueryEngine","Query:",Mr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(xr()<=Re.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):q.resolve())}ys(e,n){if(um(n))return q.resolve(null);let s=xn(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=xu(n,null,"F"),s=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const o=Pe(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,xu(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,s,r){return um(n)||r.isEqual(ve.min())?q.resolve(null):this.ps.getDocuments(e,s).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,s,r)?q.resolve(null):(xr()<=Re.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mr(n)),this.vs(e,o,n,IP(r,Ao)).next((l=>l)))}))}Ds(e,n){let s=new ut(yv(e));return n.forEach(((r,i)=>{Gl(e,i)&&(s=s.add(i))})),s}Cs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,n,s){return xr()<=Re.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Mr(n)),this.ps.getDocumentsMatchingQuery(e,n,Fs.min(),s)}vs(e,n,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="LocalStore",sk=3e8;class rk{constructor(e,n,s,r){this.persistence=e,this.Fs=n,this.serializer=r,this.Ms=new Je(Ce),this.xs=new br((i=>xh(i)),Mh),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new W1(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function ik(t,e,n,s){return new rk(t,e,n,s)}async function Hv(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],l=[];let c=Pe();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function ok(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,h){const d=u.batch,m=d.keys();let g=q.resolve();return m.forEach((E=>{g=g.next((()=>h.getEntry(c,E))).next((k=>{const P=u.docVersions.get(E);Me(P!==null,48541),k.version.compareTo(P)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))}))})),g.next((()=>l.mutationQueue.removeMutationBatch(c,d)))})(n,s,e,i).next((()=>i.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=Pe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(s,r)))}))}function qv(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function ak(t,e){const n=we(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});r=n.Ms;const l=[];e.targetChanges.forEach(((h,d)=>{const m=r.get(d);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,d).next((()=>n.Pi.addMatchingKeys(i,h.addedDocuments,d))));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(It.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(d,g),(function(k,P,N){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=sk?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0})(m,g,h)&&l.push(n.Pi.updateTargetData(i,g))}));let c=ls(),u=Pe();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))})),l.push(lk(i,o,e.documentUpdates).next((h=>{c=h.ks,u=h.qs}))),!s.isEqual(ve.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next((d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(h)}return q.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=r,i)))}function lk(t,e,n){let s=Pe(),r=Pe();return n.forEach((i=>s=s.add(i))),e.getEntries(t,s).next((i=>{let o=ls();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(ve.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):se(zh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:r}}))}function ck(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Oh),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function uk(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return n.Pi.getTargetData(s,e).next((i=>i?(r=i,q.resolve(r)):n.Pi.allocateTargetId(s).next((o=>(r=new ks(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Bu(t,e,n){const s=we(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!_i(o))throw o;se(zh,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function Im(t,e,n){const s=we(t);let r=ve.min(),i=Pe();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,h){const d=we(c),m=d.xs.get(h);return m!==void 0?q.resolve(d.Ms.get(m)):d.Pi.getTargetData(u,h)})(s,o,xn(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,n?r:ve.min(),n?i:Pe()))).next((l=>(hk(s,JP(e),l),{documents:l,Qs:i})))))}function hk(t,e,n){let s=t.Os.get(e)||ve.min();n.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),t.Os.set(e,s)}class Am{constructor(){this.activeTargetIds=n1()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fk{constructor(){this.Mo=new Am,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Am,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="ConnectivityMonitor";class Sm{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){se(bm,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){se(bm,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa=null;function $u(){return wa===null?wa=(function(){return 268435456+Math.round(2147483648*Math.random())})():wa++,"0x"+wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="RestConnection",pk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===il?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,n,s,r,i){const o=$u(),l=this.zo(e,n.toUriEncodedString());se(Jc,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,r,i);const{host:u}=new URL(l),h=fi(u);return this.Jo(e,l,c,s,h).then((d=>(se(Jc,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw Zr(Jc,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",s),d}))}Ho(e,n,s,r,i,o){return this.Go(e,n,s,r,i)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+mi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,n){const s=pk[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class _k extends mk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,r,i){const o=$u();return new Promise(((l,c)=>{const u=new Ky;u.setWithCredentials(!0),u.listenOnce(Gy.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Da.NO_ERROR:const d=u.getResponseJson();se(St,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),l(d);break;case Da.TIMEOUT:se(St,`RPC '${e}' ${o} timed out`),c(new oe(K.DEADLINE_EXCEEDED,"Request time out"));break;case Da.HTTP_ERROR:const m=u.getStatus();if(se(St,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const k=(function(N){const V=N.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(V)>=0?V:K.UNKNOWN})(E.status);c(new oe(k,E.message))}else c(new oe(K.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new oe(K.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{se(St,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);se(St,`RPC '${e}' ${o} sending request:`,r),u.send(n,"POST",h,s,15)}))}T_(e,n,s){const r=$u(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yy(),l=Jy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=i.join("");se(St,`Creating RPC '${e}' stream ${r}: ${h}`,c);const d=o.createWebChannel(h,c);this.I_(d);let m=!1,g=!1;const E=new gk({Yo:P=>{g?se(St,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(m||(se(St,`Opening RPC '${e}' stream ${r} transport.`),d.open(),m=!0),se(St,`RPC '${e}' stream ${r} sending:`,P),d.send(P))},Zo:()=>d.close()}),k=(P,N,V)=>{P.listen(N,(x=>{try{V(x)}catch(F){setTimeout((()=>{throw F}),0)}}))};return k(d,zi.EventType.OPEN,(()=>{g||(se(St,`RPC '${e}' stream ${r} transport opened.`),E.o_())})),k(d,zi.EventType.CLOSE,(()=>{g||(g=!0,se(St,`RPC '${e}' stream ${r} transport closed`),E.a_(),this.E_(d))})),k(d,zi.EventType.ERROR,(P=>{g||(g=!0,Zr(St,`RPC '${e}' stream ${r} transport errored. Name:`,P.name,"Message:",P.message),E.a_(new oe(K.UNAVAILABLE,"The operation could not be completed")))})),k(d,zi.EventType.MESSAGE,(P=>{var N;if(!g){const V=P.data[0];Me(!!V,16349);const x=V,F=(x==null?void 0:x.error)||((N=x[0])==null?void 0:N.error);if(F){se(St,`RPC '${e}' stream ${r} received error:`,F);const U=F.status;let B=(function(v){const b=rt[v];if(b!==void 0)return Nv(b)})(U),A=F.message;B===void 0&&(B=K.INTERNAL,A="Unknown error status: "+U+" with message "+F.message),g=!0,E.a_(new oe(B,A)),d.close()}else se(St,`RPC '${e}' stream ${r} received:`,V),E.u_(V)}})),k(l,Qy.STAT_EVENT,(P=>{P.stat===Pu.PROXY?se(St,`RPC '${e}' stream ${r} detected buffering proxy`):P.stat===Pu.NOPROXY&&se(St,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{E.__()}),0),E}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Yc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t){return new w1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&se("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="PersistentStream";class Wv{constructor(e,n,s,r,i,o,l,c){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zv(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===K.RESOURCE_EXHAUSTED?(as(n.toString()),as("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===n&&this.G_(s,r)}),(s=>{e((()=>{const r=new oe(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return se(Rm,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(se(Rm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class yk extends Wv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=A1(this.serializer,e),s=(function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?Ln(o.readTime):ve.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Uu(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Vu(c)?{documents:R1(i,c)}:{query:C1(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Vv(i,o.resumeToken);const u=Mu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ve.min())>0){l.readTime=hl(i,o.snapshotVersion.toTimestamp());const u=Mu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const s=k1(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Uu(this.serializer),n.removeTarget=e,this.q_(n)}}class vk extends Wv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=S1(e.writeResults,e.commitTime),s=Ln(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Uu(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>b1(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{}class wk extends Ek{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Lu(n,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(K.UNKNOWN,i.toString())}))}Ho(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Lu(n,s),r,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(K.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Tk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(as(n),this.aa=!1):se("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="RemoteStore";class Ik{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{Sr(this)&&(se(Ar,"Restarting streams for network reachability change."),await(async function(c){const u=we(c);u.Ea.add(4),await Xo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Zl(u)})(this))}))})),this.Ra=new Tk(s,r)}}async function Zl(t){if(Sr(t))for(const e of t.da)await e(!0)}async function Xo(t){for(const e of t.da)await e(!1)}function Kv(t,e){const n=we(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Qh(n)?Gh(n):yi(n).O_()&&Kh(n,e))}function Wh(t,e){const n=we(t),s=yi(n);n.Ia.delete(e),s.O_()&&Gv(n,e),n.Ia.size===0&&(s.O_()?s.L_():Sr(n)&&n.Ra.set("Unknown"))}function Kh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yi(t).Y_(e)}function Gv(t,e){t.Va.Ue(e),yi(t).Z_(e)}function Gh(t){t.Va=new _1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),yi(t).start(),t.Ra.ua()}function Qh(t){return Sr(t)&&!yi(t).x_()&&t.Ia.size>0}function Sr(t){return we(t).Ea.size===0}function Qv(t){t.Va=void 0}async function Ak(t){t.Ra.set("Online")}async function bk(t){t.Ia.forEach(((e,n)=>{Kh(t,e)}))}async function Sk(t,e){Qv(t),Qh(t)?(t.Ra.ha(e),Gh(t)):t.Ra.set("Unknown")}async function Rk(t,e,n){if(t.Ra.set("Online"),e instanceof Dv&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ia.delete(l),r.Va.removeTarget(l))})(t,e)}catch(s){se(Ar,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await dl(t,s)}else if(e instanceof La?t.Va.Ze(e):e instanceof Ov?t.Va.st(e):t.Va.tt(e),!n.isEqual(ve.min()))try{const s=await qv(t.localStore);n.compareTo(s)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const h=i.Ia.get(c);if(!h)return;i.Ia.set(c,h.withResumeToken(It.EMPTY_BYTE_STRING,h.snapshotVersion)),Gv(i,c);const d=new ks(h.target,c,u,h.sequenceNumber);Kh(i,d)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(s){se(Ar,"Failed to raise snapshot:",s),await dl(t,s)}}async function dl(t,e,n){if(!_i(e))throw e;t.Ea.add(1),await Xo(t),t.Ra.set("Offline"),n||(n=()=>qv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{se(Ar,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Zl(t)}))}function Jv(t,e){return e().catch((n=>dl(t,n,e)))}async function ec(t){const e=we(t),n=js(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Oh;for(;Ck(e);)try{const r=await ck(e.localStore,s);if(r===null){e.Ta.length===0&&n.L_();break}s=r.batchId,Pk(e,r)}catch(r){await dl(e,r)}Yv(e)&&Xv(e)}function Ck(t){return Sr(t)&&t.Ta.length<10}function Pk(t,e){t.Ta.push(e);const n=js(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Yv(t){return Sr(t)&&!js(t).x_()&&t.Ta.length>0}function Xv(t){js(t).start()}async function kk(t){js(t).ra()}async function Nk(t){const e=js(t);for(const n of t.Ta)e.ea(n.mutations)}async function Ok(t,e,n){const s=t.Ta.shift(),r=Uh.from(s,e,n);await Jv(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await ec(t)}async function Dk(t,e){e&&js(t).X_&&await(async function(s,r){if((function(o){return p1(o)&&o!==K.ABORTED})(r.code)){const i=s.Ta.shift();js(s).B_(),await Jv(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await ec(s)}})(t,e),Yv(t)&&Xv(t)}async function Cm(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),se(Ar,"RemoteStore received new credentials");const s=Sr(n);n.Ea.add(3),await Xo(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Zl(n)}async function Vk(t,e){const n=we(t);e?(n.Ea.delete(2),await Zl(n)):e||(n.Ea.add(2),await Xo(n),n.Ra.set("Unknown"))}function yi(t){return t.ma||(t.ma=(function(n,s,r){const i=we(n);return i.sa(),new yk(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:Ak.bind(null,t),t_:bk.bind(null,t),r_:Sk.bind(null,t),H_:Rk.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Qh(t)?Gh(t):t.Ra.set("Unknown")):(await t.ma.stop(),Qv(t))}))),t.ma}function js(t){return t.fa||(t.fa=(function(n,s,r){const i=we(n);return i.sa(),new vk(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:kk.bind(null,t),r_:Dk.bind(null,t),ta:Nk.bind(null,t),na:Ok.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await ec(t)):(await t.fa.stop(),t.Ta.length>0&&(se(Ar,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new Jh(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yh(t,e){if(as("AsyncQueue",`${e}: ${t}`),_i(t))return new oe(K.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{static emptySet(e){return new zr(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||he.comparator(n.key,s.key):(n,s)=>he.comparator(n.key,s.key),this.keyedMap=Wi(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new zr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.ga=new Je(he.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):pe(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class oi{constructor(e,n,s,r,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new oi(e,n,zr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Mk{constructor(){this.queries=km(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=we(n),i=r.queries;r.queries=km(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(s)}))})(this,new oe(K.ABORTED,"Firestore shutting down"))}}function km(){return new br((t=>_v(t)),Kl)}async function Lk(t,e){const n=we(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new xk,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await n.onListen(r,!0);break;case 1:i.wa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=Yh(o,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Xh(n)}async function Fk(t,e){const n=we(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function Uk(t,e){const n=we(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(r)&&(s=!0);o.wa=r}}s&&Xh(n)}function Bk(t,e,n){const s=we(t),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(n);s.queries.delete(e)}function Xh(t){t.Ca.forEach((e=>{e.next()}))}var ju,Nm;(Nm=ju||(ju={})).Ma="default",Nm.Cache="cache";class $k{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new oi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ju.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.key=e}}class eE{constructor(e){this.key=e}}class jk{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pe(),this.mutatedKeys=Pe(),this.eu=yv(e),this.tu=new zr(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new Pm,r=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((h,d)=>{const m=r.get(h),g=Gl(this.query,d)?d:null,E=!!m&&this.mutatedKeys.has(m.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;m&&g?m.data.isEqual(g.data)?E!==k&&(s.track({type:3,doc:g}),P=!0):this.su(m,g)||(s.track({type:2,doc:g}),P=!0,(c&&this.eu(g,c)>0||u&&this.eu(g,u)<0)&&(l=!0)):!m&&g?(s.track({type:0,doc:g}),P=!0):m&&!g&&(s.track({type:1,doc:m}),P=!0,(c||u)&&(l=!0)),P&&(g?(o=o.add(g),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{tu:o,iu:s,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,d)=>(function(g,E){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Rt:P})}};return k(g)-k(E)})(h.type,d.type)||this.eu(h.doc,d.doc))),this.ou(s),r=r??!1;const l=n&&!r?this._u():[],c=this.Xa.size===0&&this.current&&!r?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new oi(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Pm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Pe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new eE(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new Zv(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Pe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return oi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Zh="SyncEngine";class Hk{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class qk{constructor(e){this.key=e,this.hu=!1}}class zk{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new br((l=>_v(l)),Kl),this.Iu=new Map,this.Eu=new Set,this.du=new Je(he.comparator),this.Au=new Map,this.Ru=new jh,this.Vu={},this.mu=new Map,this.fu=ii.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Wk(t,e,n=!0){const s=oE(t);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await tE(s,e,n,!0),r}async function Kk(t,e){const n=oE(t);await tE(n,e,!0,!1)}async function tE(t,e,n,s){const r=await uk(t.localStore,xn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await Gk(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&Kv(t.remoteStore,r),l}async function Gk(t,e,n,s,r){t.pu=(d,m,g)=>(async function(k,P,N,V){let x=P.view.ru(N);x.Cs&&(x=await Im(k.localStore,P.query,!1).then((({documents:A})=>P.view.ru(A,x))));const F=V&&V.targetChanges.get(P.targetId),U=V&&V.targetMismatches.get(P.targetId)!=null,B=P.view.applyChanges(x,k.isPrimaryClient,F,U);return Dm(k,P.targetId,B.au),B.snapshot})(t,d,m,g);const i=await Im(t.localStore,e,!0),o=new jk(e,i.Qs),l=o.ru(i.documents),c=Yo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(l,t.isPrimaryClient,c);Dm(t,n,u.au);const h=new Hk(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function Qk(t,e,n){const s=we(t),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((o=>!Kl(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Bu(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Wh(s.remoteStore,r.targetId),Hu(s,r.targetId)})).catch(gi)):(Hu(s,r.targetId),await Bu(s.localStore,r.targetId,!0))}async function Jk(t,e){const n=we(t),s=n.Tu.get(e),r=n.Iu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Wh(n.remoteStore,s.targetId))}async function Yk(t,e,n){const s=rN(t);try{const r=await(function(o,l){const c=we(o),u=Ke.now(),h=l.reduce(((g,E)=>g.add(E.key)),Pe());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let E=ls(),k=Pe();return c.Ns.getEntries(g,h).next((P=>{E=P,E.forEach(((N,V)=>{V.isValidDocument()||(k=k.add(N))}))})).next((()=>c.localDocuments.getOverlayedDocuments(g,E))).next((P=>{d=P;const N=[];for(const V of l){const x=c1(V,d.get(V.key).overlayedDocument);x!=null&&N.push(new Qs(V.key,x,uv(x.value.mapValue),Mn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,N,l)})).next((P=>{m=P;const N=P.applyToLocalDocumentSet(d,k);return c.documentOverlayCache.saveOverlays(g,P.batchId,N)}))})).then((()=>({batchId:m.batchId,changes:Ev(d)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new Je(Ce)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(s,r.batchId,n),await Zo(s,r.changes),await ec(s.remoteStore)}catch(r){const i=Yh(r,"Failed to persist write");n.reject(i)}}async function nE(t,e){const n=we(t);try{const s=await ak(n.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=n.Au.get(i);o&&(Me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?Me(o.hu,14607):r.removedDocuments.size>0&&(Me(o.hu,42227),o.hu=!1))})),await Zo(n,s,e)}catch(s){await gi(s)}}function Om(t,e,n){const s=we(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(o,l){const c=we(o);c.onlineState=l;let u=!1;c.queries.forEach(((h,d)=>{for(const m of d.Sa)m.va(l)&&(u=!0)})),u&&Xh(c)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Xk(t,e,n){const s=we(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new Je(he.comparator);o=o.insert(i,Ot.newNoDocument(i,ve.min()));const l=Pe().add(i),c=new Yl(ve.min(),new Map,new Je(Ce),o,l);await nE(s,c),s.du=s.du.remove(i),s.Au.delete(e),ef(s)}else await Bu(s.localStore,e,!1).then((()=>Hu(s,e,n))).catch(gi)}async function Zk(t,e){const n=we(t),s=e.batch.batchId;try{const r=await ok(n.localStore,e);rE(n,s,null),sE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Zo(n,r)}catch(r){await gi(r)}}async function eN(t,e,n){const s=we(t);try{const r=await(function(o,l){const c=we(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next((d=>(Me(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>c.localDocuments.getDocuments(u,h)))}))})(s.localStore,e);rE(s,e,n),sE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Zo(s,r)}catch(r){await gi(r)}}function sE(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function rE(t,e,n){const s=we(t);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function Hu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||iE(t,s)}))}function iE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Wh(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),ef(t))}function Dm(t,e,n){for(const s of n)s instanceof Zv?(t.Ru.addReference(s.key,e),tN(t,s)):s instanceof eE?(se(Zh,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||iE(t,s.key)):pe(19791,{wu:s})}function tN(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(se(Zh,"New document in limbo: "+n),t.Eu.add(s),ef(t))}function ef(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new he(Qe.fromString(e)),s=t.fu.next();t.Au.set(s,new qk(n)),t.du=t.du.insert(n,s),Kv(t.remoteStore,new ks(xn(Lh(n.path)),s,"TargetPurposeLimboResolution",Hl.ce))}}async function Zo(t,e,n){const s=we(t),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,c)=>{o.push(s.pu(c,e,n).then((u=>{var h;if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){r.push(u);const d=qh.As(c.targetId,u);i.push(d)}})))})),await Promise.all(o),s.Pu.H_(r),await(async function(c,u){const h=we(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>q.forEach(u,(m=>q.forEach(m.Es,(g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g))).next((()=>q.forEach(m.ds,(g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))))))}catch(d){if(!_i(d))throw d;se(zh,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=h.Ms.get(m),E=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(E);h.Ms=h.Ms.insert(m,k)}}})(s.localStore,i))}async function nN(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){se(Zh,"User change. New user:",e.toKey());const s=await Hv(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new oe(K.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Zo(n,s.Ls)}}function sN(t,e){const n=we(t),s=n.Au.get(e);if(s&&s.hu)return Pe().add(s.key);{let r=Pe();const i=n.Iu.get(e);if(!i)return r;for(const o of i){const l=n.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function oE(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Xk.bind(null,e),e.Pu.H_=Uk.bind(null,e.eventManager),e.Pu.yu=Bk.bind(null,e.eventManager),e}function rN(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eN.bind(null,e),e}class pl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return ik(this.persistence,new nk,e.initialUser,this.serializer)}Cu(e){return new jv(Hh.mi,this.serializer)}Du(e){return new fk}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pl.provider={build:()=>new pl};class iN extends pl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Me(this.persistence.referenceDelegate instanceof fl,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new $1(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new jv((s=>fl.mi(s,n)),this.serializer)}}class qu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Om(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=nN.bind(null,this.syncEngine),await Vk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Mk})()}createDatastore(e){const n=Xl(e.databaseInfo.databaseId),s=(function(i){return new _k(i)})(e.databaseInfo);return(function(i,o,l,c){return new wk(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,o,l){return new Ik(s,r,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Om(this.syncEngine,n,0)),(function(){return Sm.v()?new Sm:new dk})())}createSyncEngine(e,n){return(function(r,i,o,l,c,u,h){const d=new zk(r,i,o,l,c,u);return h&&(d.gu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(r){const i=we(r);se(Ar,"RemoteStore shutting down."),i.Ea.add(5),await Xo(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}qu.provider={build:()=>new qu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):as("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="FirestoreClient";class aN{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Pt.UNAUTHENTICATED,this.clientId=kh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{se(Hs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(se(Hs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Yh(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Xc(t,e){t.asyncQueue.verifyOperationInProgress(),se(Hs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Hv(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Vm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lN(t);se(Hs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>Cm(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>Cm(e.remoteStore,r))),t._onlineComponents=e}async function lN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se(Hs,"Using user provided OfflineComponentProvider");try{await Xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===K.FAILED_PRECONDITION||r.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;Zr("Error using user provided cache. Falling back to memory cache: "+n),await Xc(t,new pl)}}else se(Hs,"Using default OfflineComponentProvider"),await Xc(t,new iN(void 0));return t._offlineComponents}async function aE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se(Hs,"Using user provided OnlineComponentProvider"),await Vm(t,t._uninitializedComponentsProvider._online)):(se(Hs,"Using default OnlineComponentProvider"),await Vm(t,new qu))),t._onlineComponents}function cN(t){return aE(t).then((e=>e.syncEngine))}async function xm(t){const e=await aE(t),n=e.eventManager;return n.onListen=Wk.bind(null,e.syncEngine),n.onUnlisten=Qk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Kk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Jk.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="firestore.googleapis.com",Lm=!0;class Fm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cE,this.ssl=Lm}else this.host=e.host,this.ssl=e.ssl??Lm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$v;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<U1)throw new oe(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lE(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tf{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new hP;switch(s.type){case"firstParty":return new mP(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Mm.get(n);s&&(se("ComponentProvider","Removing Datastore"),Mm.delete(n),s.terminate())})(this),Promise.resolve()}}function uN(t,e,n,s={}){var u;t=Ms(t,tf);const r=fi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;r&&(iy(`https://${l}`),oy("Firestore",!0)),i.host!==cE&&i.host!==l&&Zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:r,emulatorOptions:s};if(!rs(c,o)&&(t._setSettings(c),s.mockUserToken)){let h,d;if(typeof s.mockUserToken=="string")h=s.mockUserToken,d=Pt.MOCK_USER;else{h=ES(s.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=s.mockUserToken.sub||s.mockUserToken.user_id;if(!m)throw new oe(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Pt(m)}t._authCredentials=new fP(new Zy(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new tc(this.firestore,e,this._query)}}class ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Co(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Qo(n,ct._jsonSchema))return new ct(e,s||null,new he(Qe.fromString(n.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:it("string",ct._jsonSchemaVersion),referencePath:it("string")};class Co extends tc{constructor(e,n,s){super(e,n,Lh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new he(e))}withConverter(e){return new Co(this.firestore,e,this._path)}}function Um(t,e,...n){if(t=Tt(t),arguments.length===1&&(e=kh.newId()),wP("doc","path",e),t instanceof tf){const s=Qe.fromString(e,...n);return Yp(s),new ct(t,null,new he(s))}{if(!(t instanceof ct||t instanceof Co))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Qe.fromString(e,...n));return Yp(s),new ct(t.firestore,t instanceof Co?t.converter:null,new he(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="AsyncQueue";class $m{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zv(this,"async_queue_retry"),this._c=()=>{const s=Yc();s&&se(Bm,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Yc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new _r;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!_i(e))throw e;se(Bm,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,as("INTERNAL UNHANDLED ERROR: ",jm(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=Jh.createAndSchedule(this,e,n,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&pe(47125,{Pc:jm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function jm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){return(function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Po extends tf{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new $m,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $m(e),this._firestoreClient=void 0,await e}}}function hN(t,e){const n=typeof t=="object"?t:uy(),s=typeof t=="string"?t:il,r=yh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=yS("firestore");i&&uN(r,...i)}return r}function uE(t){if(t._terminated)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fN(t),t._firestoreClient}function fN(t){var s,r,i;const e=t._freezeSettings(),n=(function(l,c,u,h){return new DP(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,lE(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(t._databaseId,((s=t._app)==null?void 0:s.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new aN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ln(It.fromBase64String(e))}catch(n){throw new oe(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ln(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ln._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qo(e,ln._jsonSchema))return ln.fromBase64String(e.bytes)}}ln._jsonSchemaVersion="firestore/bytes/1.0",ln._jsonSchema={type:it("string",ln._jsonSchemaVersion),bytes:it("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fn._jsonSchemaVersion}}static fromJSON(e){if(Qo(e,Fn._jsonSchema))return new Fn(e.latitude,e.longitude)}}Fn._jsonSchemaVersion="firestore/geoPoint/1.0",Fn._jsonSchema={type:it("string",Fn._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qo(e,Un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Un(e.vectorValues);throw new oe(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Un._jsonSchemaVersion="firestore/vectorValue/1.0",Un._jsonSchema={type:it("string",Un._jsonSchemaVersion),vectorValues:it("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=/^__.*__$/;class pN{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Qs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jo(e,this.data,n,this.fieldTransforms)}}class hE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Qs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{Ac:t})}}class sc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new sc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const n=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){var r;const n=(r=this.path)==null?void 0:r.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ml(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(fE(this.Ac)&&dN.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class mN{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Xl(e)}Cc(e,n,s,r=!1){return new sc({Ac:e,methodName:n,Dc:s,path:wt.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dE(t){const e=t._freezeSettings(),n=Xl(t._databaseId);return new mN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gN(t,e,n,s,r,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,r);rf("Data must be an object, but it was:",o,s);const l=mE(s,o);let c,u;if(i.merge)c=new sn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=zu(e,d,n);if(!o.contains(m))throw new oe(K.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);_E(h,m)||h.push(m)}c=new sn(h),u=o.fieldTransforms.filter((d=>c.covers(d.field)))}else c=null,u=o.fieldTransforms;return new pN(new Wt(l),c,u)}class rc extends ea{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rc}}function pE(t,e,n){return new sc({Ac:3,Dc:e.settings.Dc,methodName:t._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class nf extends ea{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=pE(this,e,!0),s=this.vc.map((i=>vi(i,n))),r=new si(s);return new Rv(e.path,r)}isEqual(e){return e instanceof nf&&rs(this.vc,e.vc)}}class sf extends ea{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=pE(this,e,!0),s=this.vc.map((i=>vi(i,n))),r=new ri(s);return new Rv(e.path,r)}isEqual(e){return e instanceof sf&&rs(this.vc,e.vc)}}function _N(t,e,n,s){const r=t.Cc(1,e,n);rf("Data must be an object, but it was:",r,s);const i=[],o=Wt.empty();Gs(s,((c,u)=>{const h=of(e,c,n);u=Tt(u);const d=r.yc(h);if(u instanceof rc)i.push(h);else{const m=vi(u,d);m!=null&&(i.push(h),o.set(h,m))}}));const l=new sn(i);return new hE(o,l,r.fieldTransforms)}function yN(t,e,n,s,r,i){const o=t.Cc(1,e,n),l=[zu(e,s,n)],c=[r];if(i.length%2!=0)throw new oe(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(zu(e,i[m])),c.push(i[m+1]);const u=[],h=Wt.empty();for(let m=l.length-1;m>=0;--m)if(!_E(u,l[m])){const g=l[m];let E=c[m];E=Tt(E);const k=o.yc(g);if(E instanceof rc)u.push(g);else{const P=vi(E,k);P!=null&&(u.push(g),h.set(g,P))}}const d=new sn(u);return new hE(h,d,o.fieldTransforms)}function vi(t,e){if(gE(t=Tt(t)))return rf("Unsupported field value:",e,t),mE(t,e);if(t instanceof ea)return(function(s,r){if(!fE(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let o=0;for(const l of s){let c=vi(l,r.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=Tt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return s1(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ke.fromDate(s);return{timestampValue:hl(r.serializer,i)}}if(s instanceof Ke){const i=new Ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:hl(r.serializer,i)}}if(s instanceof Fn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ln)return{bytesValue:Vv(r.serializer,s._byteString)};if(s instanceof ct){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$h(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Un)return(function(o,l){return{mapValue:{fields:{[lv]:{stringValue:cv},[ol]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Fh(l.serializer,u)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${Nh(s)}`)})(t,e)}function mE(t,e){const n={};return nv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,((s,r)=>{const i=vi(r,e.mc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function gE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Fn||t instanceof ln||t instanceof ct||t instanceof ea||t instanceof Un)}function rf(t,e,n){if(!gE(n)||!ev(n)){const s=Nh(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function zu(t,e,n){if((e=Tt(e))instanceof nc)return e._internalPath;if(typeof e=="string")return of(t,e);throw ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const vN=new RegExp("[~\\*/\\[\\]]");function of(t,e,n){if(e.search(vN)>=0)throw ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ml(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new oe(K.INVALID_ARGUMENT,l+t+c)}function _E(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EN extends yE{data(){return super.data()}}function vE(t,e){return typeof e=="string"?of(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class TN{convertValue(e,n="none"){switch($s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Gs(e,((r,i)=>{s[r]=this.convertValue(i,n)})),s}convertVectorValue(e){var s,r,i;const n=(i=(r=(s=e.fields)==null?void 0:s[ol].arrayValue)==null?void 0:r.values)==null?void 0:i.map((o=>et(o.doubleValue)));return new Un(n)}convertGeoPoint(e){return new Fn(et(e.latitude),et(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=zl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(bo(e));default:return null}}convertTimestamp(e){const n=Us(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Qe.fromString(e);Me(Bv(s),9688,{name:e});const r=new So(s.get(1),s.get(3)),i=new he(s.popFirst(5));return r.isEqual(n)||as(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t,e,n){let s;return s=t?t.toFirestore(e):e,s}class Gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yr extends yE{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vE("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=yr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}yr._jsonSchemaVersion="firestore/documentSnapshot/1.0",yr._jsonSchema={type:it("string",yr._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class Fa extends yr{data(e={}){return super.data(e)}}class Wr{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Gi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Fa(this._firestore,this._userDataWriter,s.key,s,new Gi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const c=new Fa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Gi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Fa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Gi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:AN(l.type),doc:c,oldIndex:u,newIndex:h}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=kh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function AN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:t})}}Wr._jsonSchemaVersion="firestore/querySnapshot/1.0",Wr._jsonSchema={type:it("string",Wr._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};class EE extends TN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function bN(t,e,n){t=Ms(t,ct);const s=Ms(t.firestore,Po),r=IN(t.converter,e);return wE(s,[gN(dE(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Mn.none())])}function qm(t,e,n,...s){t=Ms(t,ct);const r=Ms(t.firestore,Po),i=dE(r);let o;return o=typeof(e=Tt(e))=="string"||e instanceof nc?yN(i,"updateDoc",t._key,e,n,s):_N(i,"updateDoc",t._key,e),wE(r,[o.toMutation(t._key,Mn.exists(!0))])}function SN(t,...e){var c,u,h;t=Tt(t);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Hm(e[s])||(n=e[s++]);const r={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Hm(e[s])){const d=e[s];e[s]=(c=d.next)==null?void 0:c.bind(d),e[s+1]=(u=d.error)==null?void 0:u.bind(d),e[s+2]=(h=d.complete)==null?void 0:h.bind(d)}let i,o,l;if(t instanceof ct)o=Ms(t.firestore,Po),l=Lh(t._key.path),i={next:d=>{e[s]&&e[s](RN(o,t,d))},error:e[s+1],complete:e[s+2]};else{const d=Ms(t,tc);o=Ms(d.firestore,Po),l=d._query;const m=new EE(o);i={next:g=>{e[s]&&e[s](new Wr(o,m,d,g))},error:e[s+1],complete:e[s+2]},wN(t._query)}return(function(m,g,E,k){const P=new oN(k),N=new $k(g,P,E);return m.asyncQueue.enqueueAndForget((async()=>Lk(await xm(m),N))),()=>{P.Nu(),m.asyncQueue.enqueueAndForget((async()=>Fk(await xm(m),N)))}})(uE(o),l,r,i)}function wE(t,e){return(function(s,r){const i=new _r;return s.asyncQueue.enqueueAndForget((async()=>Yk(await cN(s),r,i))),i.promise})(uE(t),e)}function RN(t,e,n){const s=n.docs.get(e._key),r=new EE(t);return new yr(t,r,e._key,s,new Gi(n.hasPendingWrites,n.fromCache),e.converter)}function CN(...t){return new nf("arrayUnion",t)}function PN(...t){return new sf("arrayRemove",t)}(function(e,n=!0){(function(r){mi=r})(di),Xr(new Er("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new Po(new dP(s.getProvider("auth-internal")),new gP(o,s.getProvider("app-check-internal")),(function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new So(u.options.projectId,h)})(o,r),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Vs(Kp,Gp,e),Vs(Kp,Gp,"esm2020")})();const kN={apiKey:"AIzaSyCMRPD1unHZ_nVaA5rSLmbvbfaLdRBLKCY",authDomain:"term-project-web-app.firebaseapp.com",projectId:"term-project-web-app",storageBucket:"term-project-web-app.firebasestorage.app",messagingSenderId:"676001090912",appId:"1:676001090912:web:d0c7c947c4e9b9b9186205",measurementId:"G-XG33C395Y0"},TE=cy(kN),Bi=cP(TE),NN=new Jn,zm=hN(TE),hs=RI("movie",()=>{const t=Z(null),e=Z([]),n=Z([]),s=Z([]),r=Z("ko-KR"),i=Z("dark"),o=Z("table"),l=Z("/"),c=Z(!1),u=Z([]),h=Z("normal"),d=Z("normal"),m=Z(!1),g=Z(!1),E=Z(!1),k=Z(!0),P=Z("date"),N=Z(!0),V=Z(!1),x=Z(""),F=()=>{const J=document.body.classList;i.value==="light"?(J.add("light-mode"),J.remove("dark-mode")):(J.add("dark-mode"),J.remove("light-mode")),d.value==="large"?J.add("font-large"):J.remove("font-large"),m.value?J.add("reduced-motion"):J.remove("reduced-motion"),h.value==="large"?J.add("grid-large"):J.remove("grid-large"),k.value?J.remove("no-hover"):J.add("no-hover")},U=()=>{i.value=localStorage.getItem("app-theme")||"dark",r.value=localStorage.getItem("app-lang")||"ko-KR",F(),YC(Bi,J=>{J?(console.log("로그인 성공:",J.email),t.value=J,B(J.uid)):(t.value=null,e.value=[])})},B=J=>{const T=Um(zm,"users",J);SN(T,R=>{if(R.exists()){const O=R.data();e.value=O.wishlist||[],n.value=O.searchHistory||[]}else bN(T,{wishlist:[],searchHistory:[],createdAt:new Date})})};return{user:t,wishlist:e,searchHistory:n,watchHistory:s,apiKey:x,theme:i,language:r,viewMode:o,lastPath:l,wishlistSort:P,includeAdult:c,autoplay:N,lowDataMode:V,gridSize:h,fontSize:d,reducedMotion:m,hideHorror:g,showYear:E,enableHover:k,initializeStore:U,loginWithGoogle:async()=>{await y0(Bi,NN)},registerWithEmail:async(J,T)=>{await KC(Bi,J,T)},loginWithEmail:async(J,T)=>{await GC(Bi,J,T)},logout:async()=>{await XC(Bi),t.value=null,localStorage.removeItem("last-path"),window.location.reload()},toggleLike:async J=>{if(!t.value)return alert("로그인이 필요합니다.");const T=Um(zm,"users",t.value.uid),R=e.value.some(O=>O.id===J.id);try{R?await qm(T,{wishlist:PN(J)}):await qm(T,{wishlist:CN(J)})}catch(O){console.error(O),alert("저장 실패")}},isLiked:J=>e.value.some(T=>T.id===J),setLanguage:J=>{r.value=J,localStorage.setItem("app-lang",J),window.location.reload()},toggleTheme:()=>{i.value=i.value==="dark"?"light":"dark",localStorage.setItem("app-theme",i.value),F()},saveLastPath:J=>{J!=="/signin"&&(l.value=J,localStorage.setItem("last-path",J))},toggleAdult:()=>{c.value=!c.value,localStorage.setItem("include-adult",String(c.value)),window.location.reload()},toggleAutoplay:()=>{N.value=!N.value,localStorage.setItem("autoplay",String(N.value))},toggleLowData:()=>{V.value=!V.value,localStorage.setItem("low-data-mode",String(V.value))},toggleGridSize:()=>{h.value=h.value==="normal"?"large":"normal",localStorage.setItem("grid-size",h.value),F()},toggleFontSize:()=>{d.value=d.value==="normal"?"large":"normal",localStorage.setItem("font-size",d.value),F()},toggleMotion:()=>{m.value=!m.value,localStorage.setItem("reduced-motion",String(m.value)),F()},toggleHorror:()=>{g.value=!g.value,localStorage.setItem("content-filter",String(g.value))},toggleShowYear:()=>{E.value=!E.value,localStorage.setItem("show-year",String(E.value))},toggleHover:()=>{k.value=!k.value,localStorage.setItem("enable-hover",String(k.value)),F()},setWishlistSort:J=>{P.value=J,localStorage.setItem("wishlist-sort",J)},fetchGenres:async()=>{if(u.value.length>0)return u.value;try{const J=await Ht.get("/genre/movie/list");return u.value=J.data.genres,u.value}catch{return[]}},addSearchHistory:J=>{J.trim()&&(n.value=n.value.filter(T=>T!==J),n.value.unshift(J),n.value.length>10&&n.value.pop())},removeSearchHistory:J=>{n.value=n.value.filter(T=>T!==J)},addToHistory:J=>{const T=s.value.findIndex(R=>R.id===J.id);T!==-1&&s.value.splice(T,1),s.value.unshift(J),s.value.length>20&&s.value.pop()},setViewMode:J=>{o.value=J,localStorage.setItem("view-mode",J)}}}),pn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},ON={},DN={class:"app-footer"},VN={class:"footer-content"},xN={class:"copyright"};function MN(t,e){return ie(),_e("footer",DN,[w("div",VN,[e[0]||(e[0]=w("p",{class:"warning-text"},[De(" ⚠️ "),w("strong",null,"Disclaimer")],-1)),e[1]||(e[1]=w("p",null,[De(" This is a personal project for educational purposes only. Not an official service."),w("br"),De(" 이 사이트는 교육 목적으로 제작된 개인 프로젝트이며, 실제 서비스가 아닙니다. ")],-1)),w("p",xN," © "+nt(new Date().getFullYear())+" YJY Project. All rights reserved. ",1)])])}const LN=pn(ON,[["render",MN],["__scopeId","data-v-18271bdf"]]),FN=on({__name:"App",setup(t){const e=hs(),n=Dl();return dn(()=>{e.initializeStore(),e.apiKey&&e.lastPath&&e.lastPath!=="/"&&e.lastPath!=="/signin"&&n.push(e.lastPath)}),n.afterEach(s=>{s.path!=="/signin"&&e.saveLastPath(s.path)}),(s,r)=>{const i=Mg("router-view");return ie(),_e(tt,null,[be(i,null,{default:Ct(({Component:o})=>[be(Lo,{name:"page-fade",mode:"out-in"},{default:Ct(()=>[(ie(),un(Xw(o)))]),_:2},1024)]),_:1}),be(LN)],64)}}}),Wu="/assets/yjy-bdKk8TYR.png",UN={class:"settings-modal"},BN={class:"modal-header"},$N={class:"scroll-area"},jN={class:"setting-item"},HN={class:"setting-item"},qN={class:"setting-item"},zN={class:"setting-item"},WN={class:"setting-item"},KN={class:"setting-item"},GN={class:"setting-item"},QN={class:"setting-item"},JN={class:"setting-item"},YN={class:"setting-item"},XN=["value"],ZN=on({__name:"SettingsModal",emits:["close"],setup(t){const e=hs(),{lowDataMode:n,autoplay:s,includeAdult:r,wishlistSort:i,fontSize:o,gridSize:l,reducedMotion:c,hideHorror:u,showYear:h,enableHover:d}=Fo(e);return(m,g)=>(ie(),_e("div",{class:"modal-overlay",onClick:g[11]||(g[11]=Dn(E=>m.$emit("close"),["self"]))},[w("div",UN,[w("div",BN,[g[13]||(g[13]=w("h3",null,"설정 (Settings)",-1)),w("button",{class:"close-btn",onClick:g[0]||(g[0]=E=>m.$emit("close"))},[...g[12]||(g[12]=[w("i",{class:"fas fa-times"},null,-1)])])]),w("div",$N,[g[34]||(g[34]=w("h4",null,"화면 및 표시",-1)),w("div",jN,[g[15]||(g[15]=w("div",{class:"info"},[w("span",{class:"label"},"큰 글씨 모드"),w("span",{class:"desc"},"글자 크기를 키웁니다.")],-1)),w("div",{class:We(["toggle",{active:re(o)==="large"}]),onClick:g[1]||(g[1]=(...E)=>re(e).toggleFontSize&&re(e).toggleFontSize(...E))},[...g[14]||(g[14]=[w("div",{class:"circle"},null,-1)])],2)]),w("div",HN,[g[17]||(g[17]=w("div",{class:"info"},[w("span",{class:"label"},"큰 그리드 보기"),w("span",{class:"desc"},"카드를 크게 봅니다 (3열).")],-1)),w("div",{class:We(["toggle",{active:re(l)==="large"}]),onClick:g[2]||(g[2]=(...E)=>re(e).toggleGridSize&&re(e).toggleGridSize(...E))},[...g[16]||(g[16]=[w("div",{class:"circle"},null,-1)])],2)]),w("div",qN,[g[19]||(g[19]=w("div",{class:"info"},[w("span",{class:"label"},"애니메이션 끄기"),w("span",{class:"desc"},"화면 전환 효과 제거.")],-1)),w("div",{class:We(["toggle",{active:re(c)}]),onClick:g[3]||(g[3]=(...E)=>re(e).toggleMotion&&re(e).toggleMotion(...E))},[...g[18]||(g[18]=[w("div",{class:"circle"},null,-1)])],2)]),w("div",zN,[g[21]||(g[21]=w("div",{class:"info"},[w("span",{class:"label"},"카드 호버 효과"),w("span",{class:"desc"},"마우스 오버 시 확대 기능.")],-1)),w("div",{class:We(["toggle",{active:re(d)}]),onClick:g[4]||(g[4]=(...E)=>re(e).toggleHover&&re(e).toggleHover(...E))},[...g[20]||(g[20]=[w("div",{class:"circle"},null,-1)])],2)]),w("div",WN,[g[23]||(g[23]=w("div",{class:"info"},[w("span",{class:"label"},"개봉년도 표시"),w("span",{class:"desc"},"포스터 위에 연도를 표시합니다.")],-1)),w("div",{class:We(["toggle",{active:re(h)}]),onClick:g[5]||(g[5]=(...E)=>re(e).toggleShowYear&&re(e).toggleShowYear(...E))},[...g[22]||(g[22]=[w("div",{class:"circle"},null,-1)])],2)]),g[35]||(g[35]=w("h4",null,"데이터 및 재생",-1)),w("div",KN,[g[25]||(g[25]=w("div",{class:"info"},[w("span",{class:"label"},"데이터 절약"),w("span",{class:"desc"},"저화질 이미지 사용.")],-1)),w("div",{class:We(["toggle",{active:re(n)}]),onClick:g[6]||(g[6]=(...E)=>re(e).toggleLowData&&re(e).toggleLowData(...E))},[...g[24]||(g[24]=[w("div",{class:"circle"},null,-1)])],2)]),w("div",GN,[g[27]||(g[27]=w("div",{class:"info"},[w("span",{class:"label"},"홈 배너 자동 재생"),w("span",{class:"desc"},"슬라이드 자동 넘김.")],-1)),w("div",{class:We(["toggle",{active:re(s)}]),onClick:g[7]||(g[7]=(...E)=>re(e).toggleAutoplay&&re(e).toggleAutoplay(...E))},[...g[26]||(g[26]=[w("div",{class:"circle"},null,-1)])],2)]),g[36]||(g[36]=w("h4",null,"콘텐츠 필터",-1)),w("div",QN,[g[29]||(g[29]=w("div",{class:"info"},[w("span",{class:"label"},"성인 콘텐츠 허용"),w("span",{class:"desc"},"검색 결과에 포함 (새로고침).")],-1)),w("div",{class:We(["toggle",{active:re(r)}]),onClick:g[8]||(g[8]=(...E)=>re(e).toggleAdult&&re(e).toggleAdult(...E))},[...g[28]||(g[28]=[w("div",{class:"circle"},null,-1)])],2)]),w("div",JN,[g[31]||(g[31]=w("div",{class:"info"},[w("span",{class:"label"},"공포물 숨기기"),w("span",{class:"desc"},"무서운 장르 제외.")],-1)),w("div",{class:We(["toggle",{active:re(u)}]),onClick:g[9]||(g[9]=(...E)=>re(e).toggleHorror&&re(e).toggleHorror(...E))},[...g[30]||(g[30]=[w("div",{class:"circle"},null,-1)])],2)]),g[37]||(g[37]=w("h4",null,"기타",-1)),w("div",YN,[g[33]||(g[33]=w("div",{class:"info"},[w("span",{class:"label"},"찜 목록 정렬")],-1)),w("select",{value:re(i),onChange:g[10]||(g[10]=E=>re(e).setWishlistSort(E.target.value))},[...g[32]||(g[32]=[w("option",{value:"date"},"최신 등록순",-1),w("option",{value:"alpha"},"가나다순",-1)])],40,XN)])])])]))}}),eO=pn(ZN,[["__scopeId","data-v-4ec40910"]]),tO={class:"nav-left"},nO={class:"links"},sO={class:"nav-right"},rO={class:"pc-actions"},iO={class:"profile-menu"},oO={class:"dropdown"},aO={class:"user-info"},lO={class:"mobile-actions-menu"},cO={class:"menu-item"},uO={class:"mobile-header"},hO={class:"mobile-user"},fO={class:"mobile-links"},dO=on({__name:"Navbar",setup(t){const e=hs(),{email:n,theme:s,language:r}=Fo(e),i=Z(!1),o=Z(!1),l=Z(!1),c=Z(!1),u=Z(!1),h=Z(""),d=Z(null),m=Z(null),g=Dl(),E=C_(),k=()=>i.value=window.scrollY>50,P=A=>{l.value&&m.value&&!m.value.contains(A.target)&&(l.value=!1)},N=()=>{e.logout(),g.push("/signin")},V=()=>{E.path==="/"?window.scrollTo({top:0,behavior:"smooth"}):g.push("/")},x=()=>{e.setLanguage(r.value)},F=()=>{l.value=!l.value,l.value&&li(()=>{var A;return(A=d.value)==null?void 0:A.focus()})},U=()=>{h.value.trim()&&g.push({path:"/search",query:{q:h.value}})},B=()=>{u.value=!u.value};return dn(()=>{window.addEventListener("scroll",k),window.addEventListener("click",P)}),ci(()=>{window.removeEventListener("scroll",k),window.removeEventListener("click",P)}),(A,_)=>{const v=Mg("router-link");return ie(),_e("nav",{class:We(["navbar",{"black-nav":i.value,"hover-nav":o.value}]),onMouseenter:_[14]||(_[14]=b=>o.value=!0),onMouseleave:_[15]||(_[15]=b=>o.value=!1)},[w("div",tO,[w("i",{class:"fas fa-bars mobile-menu-btn",onClick:B}),w("a",{class:"logo-link pc-logo",onClick:Dn(V,["prevent"])},[..._[16]||(_[16]=[w("img",{src:Wu,alt:"YJY PROJECT",class:"logo-img"},null,-1)])]),w("div",nO,[be(v,{to:"/"},{default:Ct(()=>[..._[17]||(_[17]=[De("홈",-1)])]),_:1}),be(v,{to:"/popular"},{default:Ct(()=>[..._[18]||(_[18]=[De("인기 콘텐츠",-1)])]),_:1}),be(v,{to:"/wishlist"},{default:Ct(()=>[..._[19]||(_[19]=[De("내가 찜한 리스트",-1)])]),_:1}),be(v,{to:"/search"},{default:Ct(()=>[..._[20]||(_[20]=[De("찾아보기",-1)])]),_:1})])]),w("a",{class:"logo-link mobile-logo",onClick:Dn(V,["prevent"])},[..._[21]||(_[21]=[w("img",{src:Wu,alt:"YJY PROJECT",class:"logo-img"},null,-1)])]),w("div",sO,[w("div",{ref_key:"searchContainer",ref:m,class:We(["search-box",{active:l.value,"light-theme-box":re(s)==="light"}])},[w("i",{class:"fas fa-search icon",onClick:F}),l.value?kt((ie(),_e("input",{key:0,ref_key:"searchInput",ref:d,"onUpdate:modelValue":_[0]||(_[0]=b=>h.value=b),onKeyup:h_(U,["enter"]),placeholder:"검색"},null,544)),[[lr,h.value]]):jt("",!0)],2),w("div",rO,[w("i",{class:We(["fas icon theme-btn",re(s)==="dark"?"fa-sun":"fa-moon"]),onClick:_[1]||(_[1]=(...b)=>re(e).toggleTheme&&re(e).toggleTheme(...b)),title:"테마 변경"},null,2),kt(w("select",{"onUpdate:modelValue":_[2]||(_[2]=b=>He(r)?r.value=b:null),onChange:x,class:We(["nav-lang-selector",{"light-theme-select":re(s)==="light"}])},[..._[22]||(_[22]=[w("option",{value:"ko-KR"},"KR",-1),w("option",{value:"en-US"},"EN",-1)])],34),[[no,re(r)]]),w("i",{class:"fas fa-cog icon setting-btn",onClick:_[3]||(_[3]=b=>c.value=!0),title:"설정"})]),w("div",iO,[_[29]||(_[29]=w("div",{class:"profile-icon"},[w("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"User"})],-1)),_[30]||(_[30]=w("i",{class:"fas fa-caret-down dropdown-arrow"},null,-1)),w("div",oO,[w("div",{class:We(["dropdown-content",{"light-mobile":re(s)==="light"}])},[w("span",aO,nt(re(n)||"Guest")+"님",1),_[28]||(_[28]=w("hr",null,null,-1)),w("div",lO,[w("div",{class:"menu-item",onClick:_[4]||(_[4]=(...b)=>re(e).toggleTheme&&re(e).toggleTheme(...b))},[w("i",{class:We(["fas",re(s)==="dark"?"fa-sun":"fa-moon"])},null,2),w("span",null,nt(re(s)==="dark"?"라이트 모드":"다크 모드"),1)]),w("div",cO,[_[24]||(_[24]=w("i",{class:"fas fa-globe"},null,-1)),kt(w("select",{"onUpdate:modelValue":_[5]||(_[5]=b=>He(r)?r.value=b:null),onChange:x,class:"mobile-lang-select"},[..._[23]||(_[23]=[w("option",{value:"ko-KR"},"한국어",-1),w("option",{value:"en-US"},"English",-1)])],544),[[no,re(r)]])]),w("div",{class:"menu-item",onClick:_[6]||(_[6]=b=>c.value=!0)},[..._[25]||(_[25]=[w("i",{class:"fas fa-cog"},null,-1),De(),w("span",null,"설정",-1)])]),_[26]||(_[26]=w("hr",null,null,-1))]),be(v,{to:"/wishlist",class:"drop-link"},{default:Ct(()=>[..._[27]||(_[27]=[w("i",{class:"fas fa-heart"},null,-1),De(" 찜한 리스트",-1)])]),_:1}),w("button",{onClick:N,class:"logout-btn"},"로그아웃")],2)])])]),c.value?(ie(),un(eO,{key:0,onClose:_[7]||(_[7]=b=>c.value=!1)})):jt("",!0),be(Lo,{name:"slide-fade"},{default:Ct(()=>[u.value?(ie(),_e("div",{key:0,class:"mobile-menu-overlay",onClick:_[13]||(_[13]=Dn(b=>u.value=!1,["self"]))},[w("div",{class:We(["mobile-menu-content",{"light-mobile":re(s)==="light"}])},[w("div",uO,[w("span",hO,nt(re(n)||"Guest"),1),w("i",{class:"fas fa-times close-menu",onClick:_[8]||(_[8]=b=>u.value=!1)})]),w("div",fO,[be(v,{to:"/",onClick:_[9]||(_[9]=b=>u.value=!1)},{default:Ct(()=>[..._[31]||(_[31]=[De("홈",-1)])]),_:1}),be(v,{to:"/popular",onClick:_[10]||(_[10]=b=>u.value=!1)},{default:Ct(()=>[..._[32]||(_[32]=[De("인기 콘텐츠",-1)])]),_:1}),be(v,{to:"/wishlist",onClick:_[11]||(_[11]=b=>u.value=!1)},{default:Ct(()=>[..._[33]||(_[33]=[De("내가 찜한 리스트",-1)])]),_:1}),be(v,{to:"/search",onClick:_[12]||(_[12]=b=>u.value=!1)},{default:Ct(()=>[..._[34]||(_[34]=[De("찾아보기",-1)])]),_:1})])],2)])):jt("",!0)]),_:1})],34)}}}),ic=pn(dO,[["__scopeId","data-v-d6446bd9"]]),pO={class:"poster-wrapper"},mO=["src","alt"],gO={class:"movie-info"},_O={class:"movie-title"},yO={class:"movie-meta"},vO={class:"rating"},EO={class:"genres"},wO=on({__name:"MovieCard",props:{movie:{}},emits:["click"],setup(t){const e=t,n=hs(),s=Z(!1),r=Z([]),i=mt(()=>e.movie.poster_path?`https://image.tmdb.org/t/p/w342${e.movie.poster_path}`:"https://via.placeholder.com/342x513?text=No+Poster"),o=mt(()=>n.wishlist.some(u=>u.id===e.movie.id)),l=()=>{n.toggleLike(e.movie)},c=mt(()=>!e.movie.genre_ids||r.value.length===0?[]:r.value.filter(u=>e.movie.genre_ids.includes(u.id)));return dn(async()=>{try{const u=await Ht.get("/genre/movie/list");r.value=u.data.genres}catch(u){console.error("Failed to fetch genres",u)}}),(u,h)=>{var d;return ie(),_e("div",{class:"movie-card",onClick:h[0]||(h[0]=m=>u.$emit("click")),onMouseenter:h[1]||(h[1]=m=>s.value=!0),onMouseleave:h[2]||(h[2]=m=>s.value=!1)},[w("div",pO,[w("img",{src:i.value,alt:t.movie.title||t.movie.name,class:"movie-poster",loading:"lazy"},null,8,mO),w("button",{class:"like-btn",onClick:Dn(l,["stop"])},[w("i",{class:We(o.value?"fas fa-heart liked":"far fa-heart")},null,2)]),w("div",{class:We(["poster-overlay",{"show-overlay":s.value}])},[w("div",gO,[w("h3",_O,nt(t.movie.title||t.movie.name),1),w("div",yO,[w("span",vO,[h[3]||(h[3]=w("i",{class:"fas fa-star"},null,-1)),De(" "+nt((d=t.movie.vote_average)==null?void 0:d.toFixed(1)),1)])]),w("div",EO,[(ie(!0),_e(tt,null,On(c.value.slice(0,2),(m,g)=>(ie(),_e("span",{key:m.id},nt(m.name)+nt(g<c.value.slice(0,2).length-1?" · ":""),1))),128))])])],2)])],32)}}}),ko=pn(wO,[["__scopeId","data-v-63cd2960"]]),TO={class:"movie-row"},IO=on({__name:"MovieRow",props:{title:{},movies:{}},emits:["movie-click"],setup(t){const e=hs(),n=Z(null),s=Z(!1),r=Z(!1),i=l=>{if(!n.value)return;const{clientWidth:c}=n.value,u=l==="left"?-c:c;n.value.scrollBy({left:u,behavior:"smooth"}),setTimeout(o,500)},o=()=>{n.value&&(r.value=n.value.scrollLeft>0)};return dn(()=>{li(()=>o())}),(l,c)=>(ie(),_e("div",TO,[w("h3",{class:We(["row-title",{"light-text":re(e).theme==="light"}])},nt(t.title),3),w("div",{class:"slider-wrapper",onMouseenter:c[2]||(c[2]=u=>s.value=!0),onMouseleave:c[3]||(c[3]=u=>s.value=!1)},[r.value?(ie(),_e("button",{key:0,class:"handle left-handle",onClick:c[0]||(c[0]=u=>i("left"))},[...c[4]||(c[4]=[w("i",{class:"fas fa-chevron-left"},null,-1)])])):jt("",!0),w("div",{ref_key:"slider",ref:n,class:"slider",onScroll:o},[(ie(!0),_e(tt,null,On(t.movies,u=>(ie(),un(ko,{key:u.id,movie:u,class:"row-item",onClick:h=>l.$emit("movie-click",u)},null,8,["movie","onClick"]))),128))],544),w("button",{class:"handle right-handle",onClick:c[1]||(c[1]=u=>i("right"))},[...c[5]||(c[5]=[w("i",{class:"fas fa-chevron-right"},null,-1)])])],32)]))}}),$i=pn(IO,[["__scopeId","data-v-293a23e9"]]),AO={class:"modal-content"},bO={class:"modal-title"},SO={class:"modal-meta"},RO={class:"rating"},CO={class:"date"},PO={class:"modal-body"},kO={key:0,class:"genres"},NO={class:"overview"},OO=on({__name:"MovieModal",props:{movie:{}},emits:["close"],setup(t){const e=t,n=Z(null);return dn(async()=>{try{const s=await Ht.get(`/movie/${e.movie.id}`);n.value=s.data}catch{console.error("상세 정보 로드 실패")}}),(s,r)=>{var i;return ie(),_e("div",{class:"modal-overlay",onClick:r[1]||(r[1]=Dn(o=>s.$emit("close"),["self"]))},[w("div",AO,[w("button",{class:"close-btn",onClick:r[0]||(r[0]=o=>s.$emit("close"))},[...r[2]||(r[2]=[w("i",{class:"fas fa-times"},null,-1)])]),w("div",{class:"modal-header",style:Oo({backgroundImage:`url(https://image.tmdb.org/t/p/original${t.movie.backdrop_path||t.movie.poster_path})`})},[r[3]||(r[3]=w("div",{class:"modal-gradient"},null,-1)),w("div",bO,[w("h1",null,nt(t.movie.title),1),w("div",SO,[w("span",RO,"⭐ "+nt((i=t.movie.vote_average)==null?void 0:i.toFixed(1)),1),w("span",CO,nt(t.movie.release_date),1)])])],4),w("div",PO,[n.value&&n.value.genres?(ie(),_e("div",kO,[(ie(!0),_e(tt,null,On(n.value.genres,o=>(ie(),_e("span",{key:o.id,class:"genre-tag"},nt(o.name),1))),128))])):jt("",!0),w("p",NO,nt(t.movie.overview||"상세 설명이 없습니다."),1)])])])}}}),oc=pn(OO,[["__scopeId","data-v-3a1df680"]]),DO={class:"home-container"},VO={key:0,class:"hero-wrapper"},xO={class:"hero-content"},MO={class:"hero-title"},LO={class:"hero-overview"},FO={class:"hero-buttons"},UO={key:1,class:"hero-skeleton"},BO={class:"main-content"},$O=on({__name:"Home",setup(t){const e=Z(null),n=Z(0);let s=null;const r=Z([]),i=Z([]),o=Z([]),l=Z([]),c=Z([]),u=Z(!1),h=Z(null),d=mt(()=>e.value?{backgroundImage:`url(https://image.tmdb.org/t/p/original${e.value.backdrop_path||e.value.poster_path})`,backgroundPosition:"center top",backgroundSize:"cover",backgroundRepeat:"no-repeat"}:{}),m=V=>{h.value=V,u.value=!0},g=(V,x)=>V&&V.length>x?V.substr(0,x):V||"",E=()=>{r.value.length>0&&(e.value=r.value[n.value])},k=()=>{n.value=(n.value+1)%r.value.length,E(),N()},P=()=>{n.value=(n.value-1+r.value.length)%r.value.length,E(),N()},N=()=>{clearInterval(s),s=setInterval(k,6e4)};return dn(async()=>{const[V,x,F,U,B]=await Promise.all([Ht.get("/movie/popular"),Ht.get("/movie/now_playing"),Ht.get("/movie/top_rated"),Ht.get("/discover/movie",{params:{with_genres:28}}),Ht.get("/discover/movie",{params:{with_genres:35}})]);r.value=V.data.results,i.value=x.data.results,o.value=F.data.results,l.value=U.data.results,c.value=B.data.results,E(),N()}),ci(()=>{clearInterval(s)}),(V,x)=>(ie(),_e("div",DO,[be(ic),e.value?(ie(),_e("div",VO,[be(Lo,{name:"fade-hero",mode:"out-in"},{default:Ct(()=>[(ie(),_e("header",{key:e.value.id,class:"hero-banner",style:Oo(d.value)},[x[7]||(x[7]=w("div",{class:"hero-fade-top"},null,-1)),w("button",{class:"hero-arrow left",onClick:P},[...x[3]||(x[3]=[w("i",{class:"fas fa-chevron-left"},null,-1)])]),w("div",xO,[w("h1",MO,nt(e.value.title||e.value.name),1),w("p",LO,[De(nt(g(e.value.overview,150))+" ",1),e.value.overview.length>150?(ie(),_e("span",{key:0,class:"read-more",onClick:x[0]||(x[0]=Dn(F=>m(e.value),["stop"]))}," 더보기 ")):jt("",!0)]),w("div",FO,[x[5]||(x[5]=w("button",{class:"btn btn-play"},[w("i",{class:"fas fa-play"}),De(" 재생")],-1)),w("button",{class:"btn btn-info",onClick:x[1]||(x[1]=F=>m(e.value))},[...x[4]||(x[4]=[w("i",{class:"fas fa-info-circle"},null,-1),De(" 상세 정보",-1)])])])]),w("button",{class:"hero-arrow right",onClick:k},[...x[6]||(x[6]=[w("i",{class:"fas fa-chevron-right"},null,-1)])]),x[8]||(x[8]=w("div",{class:"hero-fade-bottom"},null,-1))],4))]),_:1})])):(ie(),_e("div",UO)),w("main",BO,[be($i,{title:"인기 콘텐츠",movies:r.value,onMovieClick:m},null,8,["movies"]),be($i,{title:"지금 뜨는 콘텐츠",movies:i.value,onMovieClick:m},null,8,["movies"]),be($i,{title:"평점 높은 영화",movies:o.value,onMovieClick:m},null,8,["movies"]),be($i,{title:"액션 스릴러",movies:l.value,onMovieClick:m},null,8,["movies"]),be($i,{title:"코미디",movies:c.value,onMovieClick:m},null,8,["movies"])]),u.value?(ie(),un(oc,{key:2,movie:h.value,onClose:x[2]||(x[2]=F=>u.value=!1)},null,8,["movie"])):jt("",!0)]))}}),jO=pn($O,[["__scopeId","data-v-0edd3539"]]),HO={class:"auth-page"},qO={class:"form-container sign-up-container"},zO={class:"input-group"},WO={class:"input-group"},KO={class:"input-group"},GO={class:"checkbox-group"},QO={class:"form-container sign-in-container"},JO={class:"input-group"},YO={class:"input-group"},XO={class:"options-row"},ZO={class:"checkbox-group"},eD=on({__name:"SignIn",setup(t){const e=hs(),n=Dl(),s=Z(!1),r=Z(""),i=Z(""),o=Z(!1),l=Z(""),c=Z(""),u=Z(""),h=Z(!1),d=P=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(P);dn(()=>{const P=localStorage.getItem("saved-email");P&&(r.value=P,o.value=!0)});const m=()=>{s.value=!s.value},g=async()=>{try{await e.loginWithGoogle(),n.push("/")}catch{alert("구글 로그인에 실패했습니다. 팝업 차단을 확인해주세요.")}},E=async()=>{if(!r.value||!i.value){alert("이메일과 비밀번호를 모두 입력해주세요.");return}if(!d(r.value)){alert("유효한 이메일 형식이 아닙니다.");return}o.value?localStorage.setItem("saved-email",r.value):localStorage.removeItem("saved-email");try{await e.loginWithEmail(r.value,i.value),alert("로그인에 성공했습니다!"),n.push("/")}catch(P){P.code==="auth/invalid-credential"?alert("이메일 또는 비밀번호가 일치하지 않습니다."):alert("로그인 오류: "+P.message)}},k=async()=>{if(!d(l.value)){alert("유효한 이메일 형식이 아닙니다.");return}if(c.value.length<6){alert("비밀번호는 최소 6자 이상이어야 합니다.");return}if(c.value!==u.value){alert("비밀번호가 일치하지 않습니다.");return}if(!h.value){alert("서비스 이용 약관에 동의해야 가입할 수 있습니다.");return}try{await e.registerWithEmail(l.value,c.value),alert("환영합니다! 회원가입이 완료되었습니다."),n.push("/")}catch(P){P.code==="auth/email-already-in-use"?alert("이미 가입된 이메일입니다."):alert("가입 오류: "+P.message)}};return(P,N)=>(ie(),_e("div",HO,[N[29]||(N[29]=w("div",{class:"logo-area"},[w("img",{src:Wu,alt:"YJYFLIX",class:"logo-img"})],-1)),w("div",{class:We(["container",{"right-panel-active":s.value}])},[w("div",qO,[w("form",{onSubmit:Dn(k,["prevent"])},[N[13]||(N[13]=w("h1",null,"회원 가입",-1)),w("div",{class:"social-container"},[w("button",{type:"button",class:"social-btn google-btn",onClick:g},[...N[7]||(N[7]=[w("i",{class:"fab fa-google"},null,-1),De(" Google로 시작하기 ",-1)])])]),N[14]||(N[14]=w("div",{class:"divider"},[w("span",null,"또는 이메일로 가입")],-1)),w("div",zO,[kt(w("input",{type:"email","onUpdate:modelValue":N[0]||(N[0]=V=>l.value=V),required:"",placeholder:" "},null,512),[[lr,l.value]]),N[8]||(N[8]=w("label",null,"이메일 주소",-1))]),w("div",WO,[kt(w("input",{type:"password","onUpdate:modelValue":N[1]||(N[1]=V=>c.value=V),required:"",placeholder:" ",minlength:"6"},null,512),[[lr,c.value]]),N[9]||(N[9]=w("label",null,"비밀번호 (6자 이상)",-1))]),w("div",KO,[kt(w("input",{type:"password","onUpdate:modelValue":N[2]||(N[2]=V=>u.value=V),required:"",placeholder:" "},null,512),[[lr,u.value]]),N[10]||(N[10]=w("label",null,"비밀번호 확인",-1))]),w("div",GO,[kt(w("input",{type:"checkbox",id:"terms","onUpdate:modelValue":N[3]||(N[3]=V=>h.value=V)},null,512),[[Od,h.value]]),N[11]||(N[11]=w("label",{for:"terms"},"이용 약관 및 개인정보 처리방침에 동의합니다. (필수)",-1))]),N[15]||(N[15]=w("button",{class:"action-btn"},"동의하고 가입하기",-1)),w("p",{class:"mobile-text"},[N[12]||(N[12]=De(" 이미 회원이신가요? ",-1)),w("span",{onClick:m},"로그인")])],32)]),w("div",QO,[w("form",{onSubmit:Dn(E,["prevent"])},[N[22]||(N[22]=w("h1",null,"로그인",-1)),w("div",{class:"social-container"},[w("button",{type:"button",class:"social-btn google-btn",onClick:g},[...N[16]||(N[16]=[w("i",{class:"fab fa-google"},null,-1),De(" Google로 로그인 ",-1)])])]),N[23]||(N[23]=w("div",{class:"divider"},[w("span",null,"또는 이메일/비밀번호")],-1)),w("div",JO,[kt(w("input",{type:"email","onUpdate:modelValue":N[4]||(N[4]=V=>r.value=V),required:"",placeholder:" "},null,512),[[lr,r.value]]),N[17]||(N[17]=w("label",null,"이메일 주소",-1))]),w("div",YO,[kt(w("input",{type:"password","onUpdate:modelValue":N[5]||(N[5]=V=>i.value=V),required:"",placeholder:" "},null,512),[[lr,i.value]]),N[18]||(N[18]=w("label",null,"비밀번호",-1))]),w("div",XO,[w("div",ZO,[kt(w("input",{type:"checkbox",id:"rememberMe","onUpdate:modelValue":N[6]||(N[6]=V=>o.value=V)},null,512),[[Od,o.value]]),N[19]||(N[19]=w("label",{for:"rememberMe"},"아이디 저장",-1))]),N[20]||(N[20]=w("a",{href:"#",class:"forgot"},"도움이 필요하신가요?",-1))]),N[24]||(N[24]=w("button",{class:"action-btn"},"로그인",-1)),w("p",{class:"mobile-text"},[N[21]||(N[21]=De(" 아직 회원이 아니신가요? ",-1)),w("span",{onClick:m},"가입하기")])],32)]),w("div",{class:"overlay-container"},[w("div",{class:"overlay"},[w("div",{class:"overlay-panel overlay-left"},[N[25]||(N[25]=w("h1",null,"다시 오셨군요!",-1)),N[26]||(N[26]=w("p",null,[De("YJYFLIX의 방대한 콘텐츠가"),w("br"),De("당신을 기다리고 있습니다.")],-1)),w("button",{class:"ghost-btn",onClick:m},"로그인하기")]),w("div",{class:"overlay-panel overlay-right"},[N[27]||(N[27]=w("h1",null,[De("영화의 바다로"),w("br"),De("떠나볼까요?")],-1)),N[28]||(N[28]=w("p",null,[De("지금 가입하고 수만 편의 영화와"),w("br"),De("시리즈를 무제한으로 즐기세요.")],-1)),w("button",{class:"ghost-btn",onClick:m},"회원가입")])])])],2)]))}}),tD=pn(eD,[["__scopeId","data-v-d6026882"]]),nD={class:"page-container"},sD={class:"content"},rD={key:0,class:"empty-state"},iD={key:1,class:"grid"},oD={key:2,class:"empty-mini"},aD={key:3,class:"grid"},lD=on({__name:"Wishlist",setup(t){const e=hs(),{wishlist:n,wishlistSort:s,watchHistory:r}=Fo(e);Dl();const i=Z(!1),o=Z(null),l=Z(!1),c=m=>{o.value=m,i.value=!0},u=()=>{l.value=window.scrollY>500},h=()=>{window.scrollTo({top:0,behavior:"smooth"})},d=mt(()=>{const m=[...n.value];return s.value==="alpha"?m.sort((g,E)=>g.title.localeCompare(E.title)):m.reverse()});return dn(()=>window.addEventListener("scroll",u)),ci(()=>window.removeEventListener("scroll",u)),(m,g)=>(ie(),_e("div",nD,[be(ic),w("div",sD,[g[6]||(g[6]=w("h2",null,"내가 찜한 콘텐츠",-1)),re(n).length===0?(ie(),_e("div",rD,[g[2]||(g[2]=w("i",{class:"fas fa-heart-broken empty-icon"},null,-1)),g[3]||(g[3]=w("p",{class:"empty-msg"},"아직 찜한 콘텐츠가 없습니다.",-1)),g[4]||(g[4]=w("p",{class:"empty-sub"},"마음에 드는 영화를 찾아 '좋아요'를 눌러보세요!",-1)),w("button",{class:"go-search-btn",onClick:g[0]||(g[0]=E=>m.$router.push("/popular"))}," 콘텐츠 찾아보기 ")])):(ie(),_e("div",iD,[(ie(!0),_e(tt,null,On(d.value,E=>(ie(),un(ko,{key:E.id,movie:E,onClick:k=>c(E)},null,8,["movie","onClick"]))),128))])),g[7]||(g[7]=w("h2",{class:"history-title"},"최근 본 콘텐츠 (History)",-1)),re(r).length===0?(ie(),_e("div",oD,[...g[5]||(g[5]=[w("p",{class:"sub-text"},"최근 본 영화가 없습니다.",-1)])])):(ie(),_e("div",aD,[(ie(!0),_e(tt,null,On(re(r),E=>(ie(),un(ko,{key:`history-${E.id}`,movie:E,onClick:k=>c(E)},null,8,["movie","onClick"]))),128))]))]),be(Lo,{name:"fade"},{default:Ct(()=>[kt(w("button",{class:"top-btn",onClick:h},[...g[8]||(g[8]=[w("i",{class:"fas fa-arrow-up"},null,-1)])],512),[[c_,l.value]])]),_:1}),i.value?(ie(),un(oc,{key:0,movie:o.value,onClose:g[1]||(g[1]=E=>i.value=!1)},null,8,["movie"])):jt("",!0)]))}}),cD=pn(lD,[["__scopeId","data-v-50e4e84b"]]),uD={},hD={class:"netflix-skeleton"};function fD(t,e){return ie(),_e("div",hD)}const dD=pn(uD,[["render",fD],["__scopeId","data-v-c0facc96"]]),pD={class:"popular-container"},mD={class:"content"},gD={class:"header-section"},_D={class:"mode-toggle"},yD={class:"grid-container"},vD={key:0,class:"pagination"},ED=["disabled"],wD=["disabled"],TD={class:"page-num"},ID={key:0,class:"loading-more"},AD=on({__name:"Popular",setup(t){const e=hs(),{viewMode:n}=Fo(e),s=Z([]),r=Z(1),i=Z(1),o=Z(!1),l=Z(!1),c=Z(null),u=Z(!1),h=Z(!1),d=Z(null),m=U=>{d.value=U,h.value=!0},g=()=>{u.value=window.scrollY>500},E=()=>{window.scrollTo({top:0,behavior:"smooth"})},k=async(U,B)=>{B?l.value=!0:o.value=!0;try{const A=await Ht.get("/movie/popular",{params:{page:U}});if(i.value=A.data.total_pages>500?500:A.data.total_pages,B){const _=A.data.results.filter(v=>!s.value.some(b=>b.id===v.id));s.value=[...s.value,..._]}else s.value=A.data.results}catch(A){console.error(A)}finally{o.value=!1,l.value=!1}},P=async U=>{e.setViewMode(U),r.value=1,s.value=[],window.scrollTo(0,0),U==="infinite"?await N():k(1,!1)},N=async()=>{o.value=!0;const U=Ht.get("/movie/popular",{params:{page:1}}),B=Ht.get("/movie/popular",{params:{page:2}}),A=Ht.get("/movie/popular",{params:{page:3}});try{const[_,v,b]=await Promise.all([U,B,A]),S=[..._.data.results,...v.data.results,...b.data.results].filter((I,ge,Le)=>Le.findIndex(Te=>Te.id===I.id)===ge);s.value=S,r.value=3,i.value=_.data.total_pages}catch(_){console.error(_)}finally{o.value=!1}},V=U=>{U<1||U>i.value||(r.value=U,s.value=[],window.scrollTo(0,0),k(U,!1))};let x=null;const F=()=>{x&&x.disconnect(),x=new IntersectionObserver(U=>{U[0].isIntersecting&&!o.value&&!l.value&&(r.value++,k(r.value,!0))}),c.value&&x.observe(c.value)};return mr(()=>[n.value,c.value],()=>{n.value==="infinite"&&c.value?F():x&&x.disconnect()}),dn(async()=>{n.value==="infinite"?await N():await k(1,!1),window.addEventListener("scroll",g)}),ci(()=>{x&&x.disconnect(),window.removeEventListener("scroll",g)}),(U,B)=>(ie(),_e("div",pD,[be(ic),w("div",mD,[w("div",gD,[B[9]||(B[9]=w("h2",null,"인기 콘텐츠",-1)),w("div",_D,[w("button",{class:We({active:re(n)==="table"}),onClick:B[0]||(B[0]=A=>P("table")),title:"페이지 보기"},[...B[7]||(B[7]=[w("i",{class:"fas fa-th-large"},null,-1)])],2),w("button",{class:We({active:re(n)==="infinite"}),onClick:B[1]||(B[1]=A=>P("infinite")),title:"무한 스크롤"},[...B[8]||(B[8]=[w("i",{class:"fas fa-infinity"},null,-1)])],2)])]),w("div",yD,[o.value&&s.value.length===0?(ie(),_e(tt,{key:0},On(10,A=>be(dD,{key:`skeleton-${A}`})),64)):jt("",!0),(ie(!0),_e(tt,null,On(s.value,A=>(ie(),un(ko,{key:A.id,movie:A,onClick:_=>m(A)},null,8,["movie","onClick"]))),128))]),re(n)==="table"&&!o.value?(ie(),_e("div",vD,[w("button",{disabled:r.value===1,onClick:B[2]||(B[2]=A=>V(1))},[...B[10]||(B[10]=[w("i",{class:"fas fa-angle-double-left"},null,-1)])],8,ED),w("button",{disabled:r.value===1,onClick:B[3]||(B[3]=A=>V(r.value-1))},"이전",8,wD),w("span",TD,nt(r.value)+" / "+nt(i.value),1),w("button",{onClick:B[4]||(B[4]=A=>V(r.value+1))},"다음"),w("button",{onClick:B[5]||(B[5]=A=>V(i.value))},[...B[11]||(B[11]=[w("i",{class:"fas fa-angle-double-right"},null,-1)])])])):jt("",!0),re(n)==="infinite"?(ie(),_e("div",{key:1,ref_key:"observerElement",ref:c,class:"observer-sentinel"},[l.value?(ie(),_e("div",ID,[...B[12]||(B[12]=[w("i",{class:"fas fa-spinner fa-spin"},null,-1),De(" 콘텐츠를 불러오는 중... ",-1)])])):jt("",!0)],512)):jt("",!0)]),be(Lo,{name:"fade"},{default:Ct(()=>[kt(w("button",{class:"top-btn",onClick:E},[...B[13]||(B[13]=[w("i",{class:"fas fa-arrow-up"},null,-1)])],512),[[c_,u.value]])]),_:1}),h.value?(ie(),un(oc,{key:0,movie:d.value,onClose:B[6]||(B[6]=A=>h.value=!1)},null,8,["movie"])):jt("",!0)]))}}),bD=pn(AD,[["__scopeId","data-v-4238e60a"]]),SD={class:"search-container"},RD={class:"content"},CD={class:"search-controls"},PD={class:"search-bar"},kD={class:"filters"},ND=["value"],OD={key:0,class:"history-section"},DD={class:"history-tags"},VD=["onClick"],xD=["onClick"],MD={key:1,class:"loading-msg"},LD={key:2,class:"no-result"},FD={key:3,class:"grid-container"},UD=on({__name:"Search",setup(t){const e=hs(),{searchHistory:n}=Fo(e),s=Z([]),r=Z([]),i=Z(""),o=Z(""),l=Z(""),c=Z(""),u=Z(!1),h=C_(),d=Z(!1),m=Z(null),g=F=>{m.value=F,d.value=!0},E=()=>{i.value.trim()&&e.addSearchHistory(i.value),V()},k=F=>{i.value=F,V()},P=F=>e.removeSearchHistory(F),N=async()=>{try{const F=await Ht.get("/genre/movie/list");r.value=F.data.genres}catch{}},V=async()=>{u.value=!0;try{let F="/discover/movie";const U={page:1,sort_by:"popularity.desc"};i.value.trim()?(F="/search/movie",U.query=i.value):(o.value&&(U.with_genres=o.value),l.value&&(U["vote_average.gte"]=l.value),c.value&&(U.with_original_language=c.value));const B=await Ht.get(F,{params:U});s.value=B.data.results}catch(F){console.error(F)}finally{u.value=!1}},x=()=>{i.value="",o.value="",l.value="",c.value="",V()};return mr(()=>h.query.q,F=>{F&&(i.value=F,e.addSearchHistory(i.value),V())}),dn(async()=>{await N(),h.query.q&&(i.value=h.query.q,e.addSearchHistory(i.value)),V()}),(F,U)=>(ie(),_e("div",SD,[be(ic),w("div",RD,[U[12]||(U[12]=w("h2",null,"콘텐츠 찾아보기",-1)),w("div",CD,[w("div",PD,[w("button",{class:"search-btn",onClick:E,title:"검색"},[...U[5]||(U[5]=[w("i",{class:"fas fa-search"},null,-1)])]),kt(w("input",{"onUpdate:modelValue":U[0]||(U[0]=B=>i.value=B),onKeyup:h_(E,["enter"]),placeholder:"제목으로 검색...",type:"text"},null,544),[[lr,i.value]])]),w("div",kD,[kt(w("select",{"onUpdate:modelValue":U[1]||(U[1]=B=>o.value=B),onChange:E},[U[6]||(U[6]=w("option",{value:""},"모든 장르",-1)),(ie(!0),_e(tt,null,On(r.value,B=>(ie(),_e("option",{key:B.id,value:B.id},nt(B.name),9,ND))),128))],544),[[no,o.value]]),kt(w("select",{"onUpdate:modelValue":U[2]||(U[2]=B=>l.value=B),onChange:E},[...U[7]||(U[7]=[w("option",{value:""},"모든 평점",-1),w("option",{value:"9"},"⭐ 9점 이상",-1),w("option",{value:"7"},"⭐ 7점 이상",-1),w("option",{value:"5"},"⭐ 5점 이상",-1)])],544),[[no,l.value]]),kt(w("select",{"onUpdate:modelValue":U[3]||(U[3]=B=>c.value=B),onChange:E},[...U[8]||(U[8]=[w("option",{value:""},"모든 언어(원어)",-1),w("option",{value:"ko"},"한국어 영화",-1),w("option",{value:"en"},"영어 영화",-1),w("option",{value:"ja"},"일본어 영화",-1)])],544),[[no,c.value]]),w("button",{onClick:x,class:"reset-btn"},[...U[9]||(U[9]=[w("i",{class:"fas fa-undo"},null,-1),De(" 초기화",-1)])])])]),re(n).length>0&&!i.value?(ie(),_e("div",OD,[U[10]||(U[10]=w("h3",null,"최근 검색어",-1)),w("div",DD,[(ie(!0),_e(tt,null,On(re(n),B=>(ie(),_e("span",{key:B,class:"tag",onClick:A=>k(B)},[De(nt(B)+" ",1),w("i",{class:"fas fa-times delete-btn",onClick:Dn(A=>P(B),["stop"])},null,8,xD)],8,VD))),128))])])):jt("",!0),u.value?(ie(),_e("div",MD,[...U[11]||(U[11]=[w("i",{class:"fas fa-spinner fa-spin"},null,-1),De(" 검색 중...",-1)])])):s.value.length===0?(ie(),_e("div",LD,"검색 결과가 없습니다.")):(ie(),_e("div",FD,[(ie(!0),_e(tt,null,On(s.value,B=>(ie(),un(ko,{key:B.id,movie:B,onClick:A=>g(B)},null,8,["movie","onClick"]))),128))]))]),d.value?(ie(),un(oc,{key:0,movie:m.value,onClose:U[4]||(U[4]=B=>d.value=!1)},null,8,["movie"])):jt("",!0)]))}}),BD=pn(UD,[["__scopeId","data-v-faaffc28"]]),$D=[{path:"/",name:"Home",component:jO},{path:"/signin",name:"SignIn",component:tD},{path:"/wishlist",name:"Wishlist",component:cD},{path:"/popular",name:"Popular",component:bD},{path:"/search",name:"Search",component:BD}],IE=VA({history:fA("/"),routes:$D});IE.beforeEach((t,e,n)=>{const s=localStorage.getItem("TMDb-Key");t.name!=="SignIn"&&!s?n({name:"SignIn"}):n()});const af=yI(FN);af.use(wI());af.use(IE);af.mount("#app");
