const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-BOJpM7nd.js","assets/firestore-DFEv3qpL.js","assets/AnimalList-DzZ9P37p.js","assets/PlusIcon-CN4udwoI.js","assets/AnimalFormPage-UkGOYGmE.js","assets/AnimalDetails-zMiRMjr8.js","assets/IncidentList-QRMAGLgY.js","assets/IncidentPageForm-CfyinYsL.js","assets/IncidentForm-OPZ5o20Q.js","assets/IncidentDetails-DlCmsIf-.js","assets/VacinaList-D6vzE5n4.js","assets/VacinaFormPage-BXIeimuy.js"])))=>i.map(i=>d[i]);
function T_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function I_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S_={exports:{}},Tc={},R_={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),oS=Symbol.for("react.portal"),aS=Symbol.for("react.fragment"),lS=Symbol.for("react.strict_mode"),uS=Symbol.for("react.profiler"),cS=Symbol.for("react.provider"),hS=Symbol.for("react.context"),dS=Symbol.for("react.forward_ref"),fS=Symbol.for("react.suspense"),pS=Symbol.for("react.memo"),mS=Symbol.for("react.lazy"),og=Symbol.iterator;function gS(t){return t===null||typeof t!="object"?null:(t=og&&t[og]||t["@@iterator"],typeof t=="function"?t:null)}var A_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P_=Object.assign,C_={};function mo(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||A_}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function k_(){}k_.prototype=mo.prototype;function bf(t,e,n){this.props=t,this.context=e,this.refs=C_,this.updater=n||A_}var Vf=bf.prototype=new k_;Vf.constructor=bf;P_(Vf,mo.prototype);Vf.isPureReactComponent=!0;var ag=Array.isArray,N_=Object.prototype.hasOwnProperty,Mf={current:null},D_={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)N_.call(e,r)&&!D_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:il,type:t,key:s,ref:o,props:i,_owner:Mf.current}}function yS(t,e){return{$$typeof:il,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===il}function vS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lg=/\/+/g;function Th(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vS(""+t.key):e.toString(36)}function ou(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case il:case oS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Th(o,0):r,ag(i)?(n="",t!=null&&(n=t.replace(lg,"$&/")+"/"),ou(i,e,n,"",function(c){return c})):i!=null&&(Ff(i)&&(i=yS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ag(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Th(s,l);o+=ou(s,e,n,u,i)}else if(u=gS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Th(s,l++),o+=ou(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vl(t,e,n){if(t==null)return t;var r=[],i=0;return ou(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _S(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},au={transition:null},wS={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:au,ReactCurrentOwner:Mf};function O_(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:Vl,forEach:function(t,e,n){Vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vl(t,function(){e++}),e},toArray:function(t){return Vl(t,function(e){return e})||[]},only:function(t){if(!Ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=mo;pe.Fragment=aS;pe.Profiler=uS;pe.PureComponent=bf;pe.StrictMode=lS;pe.Suspense=fS;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;pe.act=O_;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=P_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)N_.call(e,u)&&!D_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:il,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:hS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cS,_context:t},t.Consumer=t};pe.createElement=x_;pe.createFactory=function(t){var e=x_.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:dS,render:t}};pe.isValidElement=Ff;pe.lazy=function(t){return{$$typeof:mS,_payload:{_status:-1,_result:t},_init:_S}};pe.memo=function(t,e){return{$$typeof:pS,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=au.transition;au.transition={};try{t()}finally{au.transition=e}};pe.unstable_act=O_;pe.useCallback=function(t,e){return Mt.current.useCallback(t,e)};pe.useContext=function(t){return Mt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return Mt.current.useEffect(t,e)};pe.useId=function(){return Mt.current.useId()};pe.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return Mt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};pe.useRef=function(t){return Mt.current.useRef(t)};pe.useState=function(t){return Mt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return Mt.current.useTransition()};pe.version="18.3.1";R_.exports=pe;var M=R_.exports;const Nn=I_(M),ES=T_({__proto__:null,default:Nn},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TS=M,IS=Symbol.for("react.element"),SS=Symbol.for("react.fragment"),RS=Object.prototype.hasOwnProperty,AS=TS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PS={key:!0,ref:!0,__self:!0,__source:!0};function L_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RS.call(e,r)&&!PS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:IS,type:t,key:s,ref:o,props:i,_owner:AS.current}}Tc.Fragment=SS;Tc.jsx=L_;Tc.jsxs=L_;S_.exports=Tc;var W=S_.exports,dd={},b_={exports:{}},an={},V_={exports:{}},M_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,re){var oe=H.length;H.push(re);e:for(;0<oe;){var Ie=oe-1>>>1,de=H[Ie];if(0<i(de,re))H[Ie]=re,H[oe]=de,oe=Ie;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var re=H[0],oe=H.pop();if(oe!==re){H[0]=oe;e:for(var Ie=0,de=H.length,Ce=de>>>1;Ie<Ce;){var Ot=2*(Ie+1)-1,Ke=H[Ot],dt=Ot+1,ft=H[dt];if(0>i(Ke,oe))dt<de&&0>i(ft,Ke)?(H[Ie]=ft,H[dt]=oe,Ie=dt):(H[Ie]=Ke,H[Ot]=oe,Ie=Ot);else if(dt<de&&0>i(ft,oe))H[Ie]=ft,H[dt]=oe,Ie=dt;else break e}}return re}function i(H,re){var oe=H.sortIndex-re.sortIndex;return oe!==0?oe:H.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,w=!1,A=!1,k=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(H){for(var re=n(c);re!==null;){if(re.callback===null)r(c);else if(re.startTime<=H)r(c),re.sortIndex=re.expirationTime,e(u,re);else break;re=n(c)}}function L(H){if(k=!1,R(H),!A)if(n(u)!==null)A=!0,Fn(U);else{var re=n(c);re!==null&&Ut(L,re.startTime-H)}}function U(H,re){A=!1,k&&(k=!1,I(y),y=-1),w=!0;var oe=m;try{for(R(re),p=n(u);p!==null&&(!(p.expirationTime>re)||H&&!C());){var Ie=p.callback;if(typeof Ie=="function"){p.callback=null,m=p.priorityLevel;var de=Ie(p.expirationTime<=re);re=t.unstable_now(),typeof de=="function"?p.callback=de:p===n(u)&&r(u),R(re)}else r(u);p=n(u)}if(p!==null)var Ce=!0;else{var Ot=n(c);Ot!==null&&Ut(L,Ot.startTime-re),Ce=!1}return Ce}finally{p=null,m=oe,w=!1}}var $=!1,g=null,y=-1,E=5,T=-1;function C(){return!(t.unstable_now()-T<E)}function N(){if(g!==null){var H=t.unstable_now();T=H;var re=!0;try{re=g(!0,H)}finally{re?S():($=!1,g=null)}}else $=!1}var S;if(typeof _=="function")S=function(){_(N)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,ht=ke.port2;ke.port1.onmessage=N,S=function(){ht.postMessage(null)}}else S=function(){x(N,0)};function Fn(H){g=H,$||($=!0,S())}function Ut(H,re){y=x(function(){H(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){A||w||(A=!0,Fn(U))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var re=3;break;default:re=m}var oe=m;m=re;try{return H()}finally{m=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,re){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var oe=m;m=H;try{return re()}finally{m=oe}},t.unstable_scheduleCallback=function(H,re,oe){var Ie=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Ie+oe:Ie):oe=Ie,H){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=oe+de,H={id:d++,callback:re,priorityLevel:H,startTime:oe,expirationTime:de,sortIndex:-1},oe>Ie?(H.sortIndex=oe,e(c,H),n(u)===null&&H===n(c)&&(k?(I(y),y=-1):k=!0,Ut(L,oe-Ie))):(H.sortIndex=de,e(u,H),A||w||(A=!0,Fn(U))),H},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(H){var re=m;return function(){var oe=m;m=re;try{return H.apply(this,arguments)}finally{m=oe}}}})(M_);V_.exports=M_;var CS=V_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kS=M,on=CS;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F_=new Set,Pa={};function ss(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(Pa[t]=e,t=0;t<e.length;t++)F_.add(e[t])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,NS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ug={},cg={};function DS(t){return fd.call(cg,t)?!0:fd.call(ug,t)?!1:NS.test(t)?cg[t]=!0:(ug[t]=!0,!1)}function xS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OS(t,e,n,r){if(e===null||typeof e>"u"||xS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uf,jf);Et[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uf,jf);Et[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uf,jf);Et[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function zf(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OS(e,n,i,r)&&(n=null),r||i===null?DS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nr=kS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Bf=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),U_=Symbol.for("react.provider"),j_=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),md=Symbol.for("react.suspense"),gd=Symbol.for("react.suspense_list"),Hf=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),z_=Symbol.for("react.offscreen"),hg=Symbol.iterator;function $o(t){return t===null||typeof t!="object"?null:(t=hg&&t[hg]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Object.assign,Ih;function ta(t){if(Ih===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ih=e&&e[1]||""}return`
`+Ih+t}var Sh=!1;function Rh(t,e){if(!t||Sh)return"";Sh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Sh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function LS(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=Rh(t.type,!1),t;case 11:return t=Rh(t.type.render,!1),t;case 1:return t=Rh(t.type,!0),t;default:return""}}function yd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case ks:return"Portal";case pd:return"Profiler";case Bf:return"StrictMode";case md:return"Suspense";case gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case j_:return(t.displayName||"Context")+".Consumer";case U_:return(t._context.displayName||"Context")+".Provider";case $f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hf:return e=t.displayName||null,e!==null?e:yd(t.type)||"Memo";case Br:e=t._payload,t=t._init;try{return yd(t(e))}catch{}}return null}function bS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yd(e);case 8:return e===Bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function B_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VS(t){var e=B_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fl(t){t._valueTracker||(t._valueTracker=VS(t))}function $_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=B_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vd(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H_(t,e){e=e.checked,e!=null&&zf(t,"checked",e,!1)}function _d(t,e){H_(t,e);var n=di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&wd(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wd(t,e,n){(e!=="number"||Cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function Bs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ed(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(na(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:di(n)}}function W_(t,e){var n=di(e.value),r=di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function q_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?q_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ul,K_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ul=Ul||document.createElement("div"),Ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MS=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){MS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function G_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function Q_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=G_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FS=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Id(t,e){if(e){if(FS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rd=null;function Wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ad=null,$s=null,Hs=null;function gg(t){if(t=al(t)){if(typeof Ad!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Pc(e),Ad(t.stateNode,t.type,e))}}function Y_(t){$s?Hs?Hs.push(t):Hs=[t]:$s=t}function X_(){if($s){var t=$s,e=Hs;if(Hs=$s=null,gg(t),e)for(t=0;t<e.length;t++)gg(e[t])}}function J_(t,e){return t(e)}function Z_(){}var Ah=!1;function e0(t,e,n){if(Ah)return t(e,n);Ah=!0;try{return J_(t,e,n)}finally{Ah=!1,($s!==null||Hs!==null)&&(Z_(),X_())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var r=Pc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Pd=!1;if(wr)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){Pd=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{Pd=!1}function US(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var fa=!1,ku=null,Nu=!1,Cd=null,jS={onError:function(t){fa=!0,ku=t}};function zS(t,e,n,r,i,s,o,l,u){fa=!1,ku=null,US.apply(jS,arguments)}function BS(t,e,n,r,i,s,o,l,u){if(zS.apply(this,arguments),fa){if(fa){var c=ku;fa=!1,ku=null}else throw Error(B(198));Nu||(Nu=!0,Cd=c)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yg(t){if(os(t)!==t)throw Error(B(188))}function $S(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yg(i),t;if(s===r)return yg(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function n0(t){return t=$S(t),t!==null?r0(t):null}function r0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=r0(t);if(e!==null)return e;t=t.sibling}return null}var i0=on.unstable_scheduleCallback,vg=on.unstable_cancelCallback,HS=on.unstable_shouldYield,WS=on.unstable_requestPaint,Qe=on.unstable_now,qS=on.unstable_getCurrentPriorityLevel,qf=on.unstable_ImmediatePriority,s0=on.unstable_UserBlockingPriority,Du=on.unstable_NormalPriority,KS=on.unstable_LowPriority,o0=on.unstable_IdlePriority,Ic=null,Kn=null;function GS(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Ic,t,void 0,(t.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:XS,QS=Math.log,YS=Math.LN2;function XS(t){return t>>>=0,t===0?32:31-(QS(t)/YS|0)|0}var jl=64,zl=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ra(l):(s&=o,s!==0&&(r=ra(s)))}else o=n&~i,o!==0?r=ra(o):s!==0&&(r=ra(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dn(e),i=1<<n,r|=t[n],e&=~i;return r}function JS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=JS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function kd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a0(){var t=jl;return jl<<=1,!(jl&4194240)&&(jl=64),t}function Ph(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dn(e),t[e]=n}function e1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ae=0;function l0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var u0,Gf,c0,h0,d0,Nd=!1,Bl=[],ei=null,ti=null,ni=null,Na=new Map,Da=new Map,Hr=[],t1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _g(t,e){switch(t){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":Na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function Wo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=al(e),e!==null&&Gf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function n1(t,e,n,r,i){switch(e){case"focusin":return ei=Wo(ei,t,e,n,r,i),!0;case"dragenter":return ti=Wo(ti,t,e,n,r,i),!0;case"mouseover":return ni=Wo(ni,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Na.set(s,Wo(Na.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Da.set(s,Wo(Da.get(s)||null,t,e,n,r,i)),!0}return!1}function f0(t){var e=Fi(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=t0(n),e!==null){t.blockedOn=e,d0(t.priority,function(){c0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rd=r,n.target.dispatchEvent(r),Rd=null}else return e=al(n),e!==null&&Gf(e),t.blockedOn=n,!1;e.shift()}return!0}function wg(t,e,n){lu(t)&&n.delete(e)}function r1(){Nd=!1,ei!==null&&lu(ei)&&(ei=null),ti!==null&&lu(ti)&&(ti=null),ni!==null&&lu(ni)&&(ni=null),Na.forEach(wg),Da.forEach(wg)}function qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,r1)))}function xa(t){function e(i){return qo(i,t)}if(0<Bl.length){qo(Bl[0],t);for(var n=1;n<Bl.length;n++){var r=Bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ei!==null&&qo(ei,t),ti!==null&&qo(ti,t),ni!==null&&qo(ni,t),Na.forEach(e),Da.forEach(e),n=0;n<Hr.length;n++)r=Hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hr.length&&(n=Hr[0],n.blockedOn===null);)f0(n),n.blockedOn===null&&Hr.shift()}var Ws=Nr.ReactCurrentBatchConfig,Ou=!0;function i1(t,e,n,r){var i=Ae,s=Ws.transition;Ws.transition=null;try{Ae=1,Qf(t,e,n,r)}finally{Ae=i,Ws.transition=s}}function s1(t,e,n,r){var i=Ae,s=Ws.transition;Ws.transition=null;try{Ae=4,Qf(t,e,n,r)}finally{Ae=i,Ws.transition=s}}function Qf(t,e,n,r){if(Ou){var i=Dd(t,e,n,r);if(i===null)Mh(t,e,r,Lu,n),_g(t,r);else if(n1(i,t,e,n,r))r.stopPropagation();else if(_g(t,r),e&4&&-1<t1.indexOf(t)){for(;i!==null;){var s=al(i);if(s!==null&&u0(s),s=Dd(t,e,n,r),s===null&&Mh(t,e,r,Lu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mh(t,e,r,null,n)}}var Lu=null;function Dd(t,e,n,r){if(Lu=null,t=Wf(r),t=Fi(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lu=t,null}function p0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qS()){case qf:return 1;case s0:return 4;case Du:case KS:return 16;case o0:return 536870912;default:return 16}default:return 16}}var Yr=null,Yf=null,uu=null;function m0(){if(uu)return uu;var t,e=Yf,n=e.length,r,i="value"in Yr?Yr.value:Yr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uu=i.slice(t,1<r?1-r:void 0)}function cu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function Eg(){return!1}function ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$l:Eg,this.isPropagationStopped=Eg,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xf=ln(go),ol=$e({},go,{view:0,detail:0}),o1=ln(ol),Ch,kh,Ko,Sc=$e({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ko&&(Ko&&t.type==="mousemove"?(Ch=t.screenX-Ko.screenX,kh=t.screenY-Ko.screenY):kh=Ch=0,Ko=t),Ch)},movementY:function(t){return"movementY"in t?t.movementY:kh}}),Tg=ln(Sc),a1=$e({},Sc,{dataTransfer:0}),l1=ln(a1),u1=$e({},ol,{relatedTarget:0}),Nh=ln(u1),c1=$e({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),h1=ln(c1),d1=$e({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f1=ln(d1),p1=$e({},go,{data:0}),Ig=ln(p1),m1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y1[t])?!!e[t]:!1}function Jf(){return v1}var _1=$e({},ol,{key:function(t){if(t.key){var e=m1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jf,charCode:function(t){return t.type==="keypress"?cu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w1=ln(_1),E1=$e({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sg=ln(E1),T1=$e({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jf}),I1=ln(T1),S1=$e({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),R1=ln(S1),A1=$e({},Sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P1=ln(A1),C1=[9,13,27,32],Zf=wr&&"CompositionEvent"in window,pa=null;wr&&"documentMode"in document&&(pa=document.documentMode);var k1=wr&&"TextEvent"in window&&!pa,g0=wr&&(!Zf||pa&&8<pa&&11>=pa),Rg=" ",Ag=!1;function y0(t,e){switch(t){case"keyup":return C1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function N1(t,e){switch(t){case"compositionend":return v0(e);case"keypress":return e.which!==32?null:(Ag=!0,Rg);case"textInput":return t=e.data,t===Rg&&Ag?null:t;default:return null}}function D1(t,e){if(Ds)return t==="compositionend"||!Zf&&y0(t,e)?(t=m0(),uu=Yf=Yr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g0&&e.locale!=="ko"?null:e.data;default:return null}}var x1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!x1[t.type]:e==="textarea"}function _0(t,e,n,r){Y_(r),e=bu(e,"onChange"),0<e.length&&(n=new Xf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ma=null,Oa=null;function O1(t){N0(t,0)}function Rc(t){var e=Ls(t);if($_(e))return t}function L1(t,e){if(t==="change")return e}var w0=!1;if(wr){var Dh;if(wr){var xh="oninput"in document;if(!xh){var Cg=document.createElement("div");Cg.setAttribute("oninput","return;"),xh=typeof Cg.oninput=="function"}Dh=xh}else Dh=!1;w0=Dh&&(!document.documentMode||9<document.documentMode)}function kg(){ma&&(ma.detachEvent("onpropertychange",E0),Oa=ma=null)}function E0(t){if(t.propertyName==="value"&&Rc(Oa)){var e=[];_0(e,Oa,t,Wf(t)),e0(O1,e)}}function b1(t,e,n){t==="focusin"?(kg(),ma=e,Oa=n,ma.attachEvent("onpropertychange",E0)):t==="focusout"&&kg()}function V1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(Oa)}function M1(t,e){if(t==="click")return Rc(e)}function F1(t,e){if(t==="input"||t==="change")return Rc(e)}function U1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:U1;function La(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fd.call(e,i)||!Ln(t[i],e[i]))return!1}return!0}function Ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dg(t,e){var n=Ng(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ng(n)}}function T0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I0(){for(var t=window,e=Cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cu(t.document)}return e}function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function j1(t){var e=I0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&T0(n.ownerDocument.documentElement,n)){if(r!==null&&ep(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Dg(n,s);var o=Dg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z1=wr&&"documentMode"in document&&11>=document.documentMode,xs=null,xd=null,ga=null,Od=!1;function xg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Od||xs==null||xs!==Cu(r)||(r=xs,"selectionStart"in r&&ep(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ga&&La(ga,r)||(ga=r,r=bu(xd,"onSelect"),0<r.length&&(e=new Xf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xs)))}function Hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},Oh={},S0={};wr&&(S0=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Ac(t){if(Oh[t])return Oh[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in S0)return Oh[t]=e[n];return t}var R0=Ac("animationend"),A0=Ac("animationiteration"),P0=Ac("animationstart"),C0=Ac("transitionend"),k0=new Map,Og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yi(t,e){k0.set(t,e),ss(e,[t])}for(var Lh=0;Lh<Og.length;Lh++){var bh=Og[Lh],B1=bh.toLowerCase(),$1=bh[0].toUpperCase()+bh.slice(1);yi(B1,"on"+$1)}yi(R0,"onAnimationEnd");yi(A0,"onAnimationIteration");yi(P0,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi(C0,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Lg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BS(r,e,void 0,t),t.currentTarget=null}function N0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Lg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Lg(i,l,c),s=u}}}if(Nu)throw t=Cd,Nu=!1,Cd=null,t}function be(t,e){var n=e[Fd];n===void 0&&(n=e[Fd]=new Set);var r=t+"__bubble";n.has(r)||(D0(e,t,2,!1),n.add(r))}function Vh(t,e,n){var r=0;e&&(r|=4),D0(n,t,r,e)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[Wl]){t[Wl]=!0,F_.forEach(function(n){n!=="selectionchange"&&(H1.has(n)||Vh(n,!1,t),Vh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wl]||(e[Wl]=!0,Vh("selectionchange",!1,e))}}function D0(t,e,n,r){switch(p0(e)){case 1:var i=i1;break;case 4:i=s1;break;default:i=Qf}n=i.bind(null,e,n,t),i=void 0,!Pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}e0(function(){var c=s,d=Wf(n),p=[];e:{var m=k0.get(t);if(m!==void 0){var w=Xf,A=t;switch(t){case"keypress":if(cu(n)===0)break e;case"keydown":case"keyup":w=w1;break;case"focusin":A="focus",w=Nh;break;case"focusout":A="blur",w=Nh;break;case"beforeblur":case"afterblur":w=Nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=l1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=I1;break;case R0:case A0:case P0:w=h1;break;case C0:w=R1;break;case"scroll":w=o1;break;case"wheel":w=P1;break;case"copy":case"cut":case"paste":w=f1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Sg}var k=(e&4)!==0,x=!k&&t==="scroll",I=k?m!==null?m+"Capture":null:m;k=[];for(var _=c,R;_!==null;){R=_;var L=R.stateNode;if(R.tag===5&&L!==null&&(R=L,I!==null&&(L=ka(_,I),L!=null&&k.push(Va(_,L,R)))),x)break;_=_.return}0<k.length&&(m=new w(m,A,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==Rd&&(A=n.relatedTarget||n.fromElement)&&(Fi(A)||A[Er]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(A=n.relatedTarget||n.toElement,w=c,A=A?Fi(A):null,A!==null&&(x=os(A),A!==x||A.tag!==5&&A.tag!==6)&&(A=null)):(w=null,A=c),w!==A)){if(k=Tg,L="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=Sg,L="onPointerLeave",I="onPointerEnter",_="pointer"),x=w==null?m:Ls(w),R=A==null?m:Ls(A),m=new k(L,_+"leave",w,n,d),m.target=x,m.relatedTarget=R,L=null,Fi(d)===c&&(k=new k(I,_+"enter",A,n,d),k.target=R,k.relatedTarget=x,L=k),x=L,w&&A)t:{for(k=w,I=A,_=0,R=k;R;R=Ss(R))_++;for(R=0,L=I;L;L=Ss(L))R++;for(;0<_-R;)k=Ss(k),_--;for(;0<R-_;)I=Ss(I),R--;for(;_--;){if(k===I||I!==null&&k===I.alternate)break t;k=Ss(k),I=Ss(I)}k=null}else k=null;w!==null&&bg(p,m,w,k,!1),A!==null&&x!==null&&bg(p,x,A,k,!0)}}e:{if(m=c?Ls(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var U=L1;else if(Pg(m))if(w0)U=F1;else{U=V1;var $=b1}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=M1);if(U&&(U=U(t,c))){_0(p,U,n,d);break e}$&&$(t,m,c),t==="focusout"&&($=m._wrapperState)&&$.controlled&&m.type==="number"&&wd(m,"number",m.value)}switch($=c?Ls(c):window,t){case"focusin":(Pg($)||$.contentEditable==="true")&&(xs=$,xd=c,ga=null);break;case"focusout":ga=xd=xs=null;break;case"mousedown":Od=!0;break;case"contextmenu":case"mouseup":case"dragend":Od=!1,xg(p,n,d);break;case"selectionchange":if(z1)break;case"keydown":case"keyup":xg(p,n,d)}var g;if(Zf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ds?y0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(g0&&n.locale!=="ko"&&(Ds||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ds&&(g=m0()):(Yr=d,Yf="value"in Yr?Yr.value:Yr.textContent,Ds=!0)),$=bu(c,y),0<$.length&&(y=new Ig(y,t,null,n,d),p.push({event:y,listeners:$}),g?y.data=g:(g=v0(n),g!==null&&(y.data=g)))),(g=k1?N1(t,n):D1(t,n))&&(c=bu(c,"onBeforeInput"),0<c.length&&(d=new Ig("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=g))}N0(p,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ka(t,n),s!=null&&r.unshift(Va(t,s,i)),s=ka(t,e),s!=null&&r.push(Va(t,s,i))),t=t.return}return r}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ka(n,s),u!=null&&o.unshift(Va(n,u,l))):i||(u=ka(n,s),u!=null&&o.push(Va(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var W1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function Vg(t){return(typeof t=="string"?t:""+t).replace(W1,`
`).replace(q1,"")}function ql(t,e,n){if(e=Vg(e),Vg(t)!==e&&n)throw Error(B(425))}function Vu(){}var Ld=null,bd=null;function Vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,K1=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,G1=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(t){return Mg.resolve(null).then(t).catch(Q1)}:Md;function Q1(t){setTimeout(function(){throw t})}function Fh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xa(e)}function ri(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yo=Math.random().toString(36).slice(2),qn="__reactFiber$"+yo,Ma="__reactProps$"+yo,Er="__reactContainer$"+yo,Fd="__reactEvents$"+yo,Y1="__reactListeners$"+yo,X1="__reactHandles$"+yo;function Fi(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Er]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fg(t);t!==null;){if(n=t[qn])return n;t=Fg(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[qn]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Pc(t){return t[Ma]||null}var Ud=[],bs=-1;function vi(t){return{current:t}}function Me(t){0>bs||(t.current=Ud[bs],Ud[bs]=null,bs--)}function xe(t,e){bs++,Ud[bs]=t.current,t.current=e}var fi={},Dt=vi(fi),Ht=vi(!1),Ki=fi;function Zs(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(t){return t=t.childContextTypes,t!=null}function Mu(){Me(Ht),Me(Dt)}function Ug(t,e,n){if(Dt.current!==fi)throw Error(B(168));xe(Dt,e),xe(Ht,n)}function x0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,bS(t)||"Unknown",i));return $e({},n,r)}function Fu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Ki=Dt.current,xe(Dt,t),xe(Ht,Ht.current),!0}function jg(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=x0(t,e,Ki),r.__reactInternalMemoizedMergedChildContext=t,Me(Ht),Me(Dt),xe(Dt,t)):Me(Ht),xe(Ht,n)}var cr=null,Cc=!1,Uh=!1;function O0(t){cr===null?cr=[t]:cr.push(t)}function J1(t){Cc=!0,O0(t)}function _i(){if(!Uh&&cr!==null){Uh=!0;var t=0,e=Ae;try{var n=cr;for(Ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cr=null,Cc=!1}catch(i){throw cr!==null&&(cr=cr.slice(t+1)),i0(qf,_i),i}finally{Ae=e,Uh=!1}}return null}var Vs=[],Ms=0,Uu=null,ju=0,hn=[],dn=0,Gi=null,hr=1,dr="";function Oi(t,e){Vs[Ms++]=ju,Vs[Ms++]=Uu,Uu=t,ju=e}function L0(t,e,n){hn[dn++]=hr,hn[dn++]=dr,hn[dn++]=Gi,Gi=t;var r=hr;t=dr;var i=32-Dn(r)-1;r&=~(1<<i),n+=1;var s=32-Dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hr=1<<32-Dn(e)+i|n<<i|r,dr=s+t}else hr=1<<s|n<<i|r,dr=t}function tp(t){t.return!==null&&(Oi(t,1),L0(t,1,0))}function np(t){for(;t===Uu;)Uu=Vs[--Ms],Vs[Ms]=null,ju=Vs[--Ms],Vs[Ms]=null;for(;t===Gi;)Gi=hn[--dn],hn[dn]=null,dr=hn[--dn],hn[dn]=null,hr=hn[--dn],hn[dn]=null}var rn=null,tn=null,je=!1,Cn=null;function b0(t,e){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rn=t,tn=ri(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:hr,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rn=t,tn=null,!0):!1;default:return!1}}function jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zd(t){if(je){var e=tn;if(e){var n=e;if(!zg(t,e)){if(jd(t))throw Error(B(418));e=ri(n.nextSibling);var r=rn;e&&zg(t,e)?b0(r,n):(t.flags=t.flags&-4097|2,je=!1,rn=t)}}else{if(jd(t))throw Error(B(418));t.flags=t.flags&-4097|2,je=!1,rn=t}}}function Bg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rn=t}function Kl(t){if(t!==rn)return!1;if(!je)return Bg(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vd(t.type,t.memoizedProps)),e&&(e=tn)){if(jd(t))throw V0(),Error(B(418));for(;e;)b0(t,e),e=ri(e.nextSibling)}if(Bg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=ri(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=rn?ri(t.stateNode.nextSibling):null;return!0}function V0(){for(var t=tn;t;)t=ri(t.nextSibling)}function eo(){tn=rn=null,je=!1}function rp(t){Cn===null?Cn=[t]:Cn.push(t)}var Z1=Nr.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Gl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $g(t){var e=t._init;return e(t._payload)}function M0(t){function e(I,_){if(t){var R=I.deletions;R===null?(I.deletions=[_],I.flags|=16):R.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=ai(I,_),I.index=0,I.sibling=null,I}function s(I,_,R){return I.index=R,t?(R=I.alternate,R!==null?(R=R.index,R<_?(I.flags|=2,_):R):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,R,L){return _===null||_.tag!==6?(_=qh(R,I.mode,L),_.return=I,_):(_=i(_,R),_.return=I,_)}function u(I,_,R,L){var U=R.type;return U===Ns?d(I,_,R.props.children,L,R.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Br&&$g(U)===_.type)?(L=i(_,R.props),L.ref=Go(I,_,R),L.return=I,L):(L=yu(R.type,R.key,R.props,null,I.mode,L),L.ref=Go(I,_,R),L.return=I,L)}function c(I,_,R,L){return _===null||_.tag!==4||_.stateNode.containerInfo!==R.containerInfo||_.stateNode.implementation!==R.implementation?(_=Kh(R,I.mode,L),_.return=I,_):(_=i(_,R.children||[]),_.return=I,_)}function d(I,_,R,L,U){return _===null||_.tag!==7?(_=Wi(R,I.mode,L,U),_.return=I,_):(_=i(_,R),_.return=I,_)}function p(I,_,R){if(typeof _=="string"&&_!==""||typeof _=="number")return _=qh(""+_,I.mode,R),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ml:return R=yu(_.type,_.key,_.props,null,I.mode,R),R.ref=Go(I,null,_),R.return=I,R;case ks:return _=Kh(_,I.mode,R),_.return=I,_;case Br:var L=_._init;return p(I,L(_._payload),R)}if(na(_)||$o(_))return _=Wi(_,I.mode,R,null),_.return=I,_;Gl(I,_)}return null}function m(I,_,R,L){var U=_!==null?_.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return U!==null?null:l(I,_,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ml:return R.key===U?u(I,_,R,L):null;case ks:return R.key===U?c(I,_,R,L):null;case Br:return U=R._init,m(I,_,U(R._payload),L)}if(na(R)||$o(R))return U!==null?null:d(I,_,R,L,null);Gl(I,R)}return null}function w(I,_,R,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(R)||null,l(_,I,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ml:return I=I.get(L.key===null?R:L.key)||null,u(_,I,L,U);case ks:return I=I.get(L.key===null?R:L.key)||null,c(_,I,L,U);case Br:var $=L._init;return w(I,_,R,$(L._payload),U)}if(na(L)||$o(L))return I=I.get(R)||null,d(_,I,L,U,null);Gl(_,L)}return null}function A(I,_,R,L){for(var U=null,$=null,g=_,y=_=0,E=null;g!==null&&y<R.length;y++){g.index>y?(E=g,g=null):E=g.sibling;var T=m(I,g,R[y],L);if(T===null){g===null&&(g=E);break}t&&g&&T.alternate===null&&e(I,g),_=s(T,_,y),$===null?U=T:$.sibling=T,$=T,g=E}if(y===R.length)return n(I,g),je&&Oi(I,y),U;if(g===null){for(;y<R.length;y++)g=p(I,R[y],L),g!==null&&(_=s(g,_,y),$===null?U=g:$.sibling=g,$=g);return je&&Oi(I,y),U}for(g=r(I,g);y<R.length;y++)E=w(g,I,y,R[y],L),E!==null&&(t&&E.alternate!==null&&g.delete(E.key===null?y:E.key),_=s(E,_,y),$===null?U=E:$.sibling=E,$=E);return t&&g.forEach(function(C){return e(I,C)}),je&&Oi(I,y),U}function k(I,_,R,L){var U=$o(R);if(typeof U!="function")throw Error(B(150));if(R=U.call(R),R==null)throw Error(B(151));for(var $=U=null,g=_,y=_=0,E=null,T=R.next();g!==null&&!T.done;y++,T=R.next()){g.index>y?(E=g,g=null):E=g.sibling;var C=m(I,g,T.value,L);if(C===null){g===null&&(g=E);break}t&&g&&C.alternate===null&&e(I,g),_=s(C,_,y),$===null?U=C:$.sibling=C,$=C,g=E}if(T.done)return n(I,g),je&&Oi(I,y),U;if(g===null){for(;!T.done;y++,T=R.next())T=p(I,T.value,L),T!==null&&(_=s(T,_,y),$===null?U=T:$.sibling=T,$=T);return je&&Oi(I,y),U}for(g=r(I,g);!T.done;y++,T=R.next())T=w(g,I,y,T.value,L),T!==null&&(t&&T.alternate!==null&&g.delete(T.key===null?y:T.key),_=s(T,_,y),$===null?U=T:$.sibling=T,$=T);return t&&g.forEach(function(N){return e(I,N)}),je&&Oi(I,y),U}function x(I,_,R,L){if(typeof R=="object"&&R!==null&&R.type===Ns&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Ml:e:{for(var U=R.key,$=_;$!==null;){if($.key===U){if(U=R.type,U===Ns){if($.tag===7){n(I,$.sibling),_=i($,R.props.children),_.return=I,I=_;break e}}else if($.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Br&&$g(U)===$.type){n(I,$.sibling),_=i($,R.props),_.ref=Go(I,$,R),_.return=I,I=_;break e}n(I,$);break}else e(I,$);$=$.sibling}R.type===Ns?(_=Wi(R.props.children,I.mode,L,R.key),_.return=I,I=_):(L=yu(R.type,R.key,R.props,null,I.mode,L),L.ref=Go(I,_,R),L.return=I,I=L)}return o(I);case ks:e:{for($=R.key;_!==null;){if(_.key===$)if(_.tag===4&&_.stateNode.containerInfo===R.containerInfo&&_.stateNode.implementation===R.implementation){n(I,_.sibling),_=i(_,R.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=Kh(R,I.mode,L),_.return=I,I=_}return o(I);case Br:return $=R._init,x(I,_,$(R._payload),L)}if(na(R))return A(I,_,R,L);if($o(R))return k(I,_,R,L);Gl(I,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,R),_.return=I,I=_):(n(I,_),_=qh(R,I.mode,L),_.return=I,I=_),o(I)):n(I,_)}return x}var to=M0(!0),F0=M0(!1),zu=vi(null),Bu=null,Fs=null,ip=null;function sp(){ip=Fs=Bu=null}function op(t){var e=zu.current;Me(zu),t._currentValue=e}function Bd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){Bu=t,ip=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function mn(t){var e=t._currentValue;if(ip!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Bu===null)throw Error(B(308));Fs=t,Bu.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Ui=null;function ap(t){Ui===null?Ui=[t]:Ui.push(t)}function U0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ap(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tr(t,r)}function Tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $r=!1;function lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ii(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tr(t,n)}return i=r.interleaved,i===null?(e.next=e,ap(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tr(t,n)}function hu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kf(t,n)}}function Hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $u(t,e,n,r){var i=t.updateQueue;$r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,k=l;switch(m=e,w=n,k.tag){case 1:if(A=k.payload,typeof A=="function"){p=A.call(w,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,m=typeof A=="function"?A.call(w,p,m):A,m==null)break e;p=$e({},p,m);break e;case 2:$r=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yi|=o,t.lanes=o,t.memoizedState=p}}function Wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var ll={},Gn=vi(ll),Fa=vi(ll),Ua=vi(ll);function ji(t){if(t===ll)throw Error(B(174));return t}function up(t,e){switch(xe(Ua,e),xe(Fa,t),xe(Gn,ll),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Td(e,t)}Me(Gn),xe(Gn,e)}function no(){Me(Gn),Me(Fa),Me(Ua)}function z0(t){ji(Ua.current);var e=ji(Gn.current),n=Td(e,t.type);e!==n&&(xe(Fa,t),xe(Gn,n))}function cp(t){Fa.current===t&&(Me(Gn),Me(Fa))}var ze=vi(0);function Hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jh=[];function hp(){for(var t=0;t<jh.length;t++)jh[t]._workInProgressVersionPrimary=null;jh.length=0}var du=Nr.ReactCurrentDispatcher,zh=Nr.ReactCurrentBatchConfig,Qi=0,Be=null,it=null,ut=null,Wu=!1,ya=!1,ja=0,eR=0;function Rt(){throw Error(B(321))}function dp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function fp(t,e,n,r,i,s){if(Qi=s,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,du.current=t===null||t.memoizedState===null?iR:sR,t=n(r,i),ya){s=0;do{if(ya=!1,ja=0,25<=s)throw Error(B(301));s+=1,ut=it=null,e.updateQueue=null,du.current=oR,t=n(r,i)}while(ya)}if(du.current=qu,e=it!==null&&it.next!==null,Qi=0,ut=it=Be=null,Wu=!1,e)throw Error(B(300));return t}function pp(){var t=ja!==0;return ja=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Be.memoizedState=ut=t:ut=ut.next=t,ut}function gn(){if(it===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=ut===null?Be.memoizedState:ut.next;if(e!==null)ut=e,it=t;else{if(t===null)throw Error(B(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ut===null?Be.memoizedState=ut=t:ut=ut.next=t}return ut}function za(t,e){return typeof e=="function"?e(t):e}function Bh(t){var e=gn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=it,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Qi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Be.lanes|=d,Yi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Ln(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Be.lanes|=s,Yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $h(t){var e=gn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ln(s,e.memoizedState)||($t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function B0(){}function $0(t,e){var n=Be,r=gn(),i=e(),s=!Ln(r.memoizedState,i);if(s&&(r.memoizedState=i,$t=!0),r=r.queue,mp(q0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,Ba(9,W0.bind(null,n,r,i,e),void 0,null),ct===null)throw Error(B(349));Qi&30||H0(n,e,i)}return i}function H0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function W0(t,e,n,r){e.value=n,e.getSnapshot=r,K0(e)&&G0(t)}function q0(t,e,n){return n(function(){K0(e)&&G0(t)})}function K0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function G0(t){var e=Tr(t,1);e!==null&&xn(e,t,1,-1)}function qg(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},e.queue=t,t=t.dispatch=rR.bind(null,Be,t),[e.memoizedState,t]}function Ba(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Q0(){return gn().memoizedState}function fu(t,e,n,r){var i=Wn();Be.flags|=t,i.memoizedState=Ba(1|e,n,void 0,r===void 0?null:r)}function kc(t,e,n,r){var i=gn();r=r===void 0?null:r;var s=void 0;if(it!==null){var o=it.memoizedState;if(s=o.destroy,r!==null&&dp(r,o.deps)){i.memoizedState=Ba(e,n,s,r);return}}Be.flags|=t,i.memoizedState=Ba(1|e,n,s,r)}function Kg(t,e){return fu(8390656,8,t,e)}function mp(t,e){return kc(2048,8,t,e)}function Y0(t,e){return kc(4,2,t,e)}function X0(t,e){return kc(4,4,t,e)}function J0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z0(t,e,n){return n=n!=null?n.concat([t]):null,kc(4,4,J0.bind(null,e,t),n)}function gp(){}function ew(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tw(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nw(t,e,n){return Qi&21?(Ln(n,e)||(n=a0(),Be.lanes|=n,Yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function tR(t,e){var n=Ae;Ae=n!==0&&4>n?n:4,t(!0);var r=zh.transition;zh.transition={};try{t(!1),e()}finally{Ae=n,zh.transition=r}}function rw(){return gn().memoizedState}function nR(t,e,n){var r=oi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iw(t))sw(e,n);else if(n=U0(t,e,n,r),n!==null){var i=Vt();xn(n,t,r,i),ow(n,e,r)}}function rR(t,e,n){var r=oi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iw(t))sw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ln(l,o)){var u=e.interleaved;u===null?(i.next=i,ap(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=U0(t,e,i,r),n!==null&&(i=Vt(),xn(n,t,r,i),ow(n,e,r))}}function iw(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function sw(t,e){ya=Wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ow(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kf(t,n)}}var qu={readContext:mn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},iR={readContext:mn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:mn,useEffect:Kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fu(4194308,4,J0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return fu(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nR.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:qg,useDebugValue:gp,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=qg(!1),e=t[0];return t=tR.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,i=Wn();if(je){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ct===null)throw Error(B(349));Qi&30||H0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Kg(q0.bind(null,r,s,t),[t]),r.flags|=2048,Ba(9,W0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=ct.identifierPrefix;if(je){var n=dr,r=hr;n=(r&~(1<<32-Dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sR={readContext:mn,useCallback:ew,useContext:mn,useEffect:mp,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:X0,useMemo:tw,useReducer:Bh,useRef:Q0,useState:function(){return Bh(za)},useDebugValue:gp,useDeferredValue:function(t){var e=gn();return nw(e,it.memoizedState,t)},useTransition:function(){var t=Bh(za)[0],e=gn().memoizedState;return[t,e]},useMutableSource:B0,useSyncExternalStore:$0,useId:rw,unstable_isNewReconciler:!1},oR={readContext:mn,useCallback:ew,useContext:mn,useEffect:mp,useImperativeHandle:Z0,useInsertionEffect:Y0,useLayoutEffect:X0,useMemo:tw,useReducer:$h,useRef:Q0,useState:function(){return $h(za)},useDebugValue:gp,useDeferredValue:function(t){var e=gn();return it===null?e.memoizedState=t:nw(e,it.memoizedState,t)},useTransition:function(){var t=$h(za)[0],e=gn().memoizedState;return[t,e]},useMutableSource:B0,useSyncExternalStore:$0,useId:rw,unstable_isNewReconciler:!1};function Rn(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $d(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=oi(t),s=yr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(xn(e,t,i,r),hu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=oi(t),s=yr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(xn(e,t,i,r),hu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=oi(t),i=yr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ii(t,i,r),e!==null&&(xn(e,t,r,n),hu(e,t,r))}};function Gg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,r)||!La(i,s):!0}function aw(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=mn(s):(i=Wt(e)?Ki:Dt.current,r=e.contextTypes,s=(r=r!=null)?Zs(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function Hd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},lp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=mn(s):(s=Wt(e)?Ki:Dt.current,i.context=Zs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($d(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nc.enqueueReplaceState(i,i.state,null),$u(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e){try{var n="",r=e;do n+=LS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aR=typeof WeakMap=="function"?WeakMap:Map;function lw(t,e,n){n=yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gu||(Gu=!0,tf=r),Wd(t,e)},n}function uw(t,e,n){n=yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wd(t,e),typeof r!="function"&&(si===null?si=new Set([this]):si.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ER.bind(null,t,e,n),e.then(t,t))}function Xg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yr(-1,1),e.tag=2,ii(n,e,1))),n.lanes|=1),t)}var lR=Nr.ReactCurrentOwner,$t=!1;function bt(t,e,n,r){e.child=t===null?F0(e,null,n,r):to(e,t.child,n,r)}function Zg(t,e,n,r,i){n=n.render;var s=e.ref;return qs(e,i),r=fp(t,e,n,r,s,i),n=pp(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ir(t,e,i)):(je&&n&&tp(e),e.flags|=1,bt(t,e,r,i),e.child)}function ey(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cw(t,e,s,r,i)):(t=yu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,r)&&t.ref===e.ref)return Ir(t,e,i)}return e.flags|=1,t=ai(s,r),t.ref=e.ref,t.return=e,e.child=t}function cw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(La(s,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,Ir(t,e,i)}return qd(t,e,n,r,i)}function hw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(js,Zt),Zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(js,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,xe(js,Zt),Zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,xe(js,Zt),Zt|=r;return bt(t,e,i,n),e.child}function dw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qd(t,e,n,r,i){var s=Wt(n)?Ki:Dt.current;return s=Zs(e,s),qs(e,i),n=fp(t,e,n,r,s,i),r=pp(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ir(t,e,i)):(je&&r&&tp(e),e.flags|=1,bt(t,e,n,i),e.child)}function ty(t,e,n,r,i){if(Wt(n)){var s=!0;Fu(e)}else s=!1;if(qs(e,i),e.stateNode===null)pu(t,e),aw(e,n,r),Hd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=mn(c):(c=Wt(n)?Ki:Dt.current,c=Zs(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Qg(e,o,r,c),$r=!1;var m=e.memoizedState;o.state=m,$u(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Ht.current||$r?(typeof d=="function"&&($d(e,n,d,r),u=e.memoizedState),(l=$r||Gg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,j0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Rn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=mn(u):(u=Wt(n)?Ki:Dt.current,u=Zs(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Qg(e,o,r,u),$r=!1,m=e.memoizedState,o.state=m,$u(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||Ht.current||$r?(typeof w=="function"&&($d(e,n,w,r),A=e.memoizedState),(c=$r||Gg(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Kd(t,e,n,r,s,i)}function Kd(t,e,n,r,i,s){dw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jg(e,n,!1),Ir(t,e,s);r=e.stateNode,lR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=to(e,t.child,null,s),e.child=to(e,null,l,s)):bt(t,e,l,s),e.memoizedState=r.state,i&&jg(e,n,!0),e.child}function fw(t){var e=t.stateNode;e.pendingContext?Ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ug(t,e.context,!1),up(t,e.containerInfo)}function ny(t,e,n,r,i){return eo(),rp(i),e.flags|=256,bt(t,e,n,r),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function pw(t,e,n){var r=e.pendingProps,i=ze.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),xe(ze,i&1),t===null)return zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oc(o,r,0,null),t=Wi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qd(n),e.memoizedState=Gd,t):yp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ai(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ai(l,s):(s=Wi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gd,r}return s=t.child,t=s.sibling,r=ai(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yp(t,e){return e=Oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ql(t,e,n,r){return r!==null&&rp(r),to(e,t.child,null,n),t=yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hh(Error(B(422))),Ql(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Oc({mode:"visible",children:r.children},i,0,null),s=Wi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&to(e,t.child,null,o),e.child.memoizedState=Qd(o),e.memoizedState=Gd,s);if(!(e.mode&1))return Ql(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=Hh(s,r,void 0),Ql(t,e,o,r)}if(l=(o&t.childLanes)!==0,$t||l){if(r=ct,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tr(t,i),xn(r,t,i,-1))}return Ip(),r=Hh(Error(B(421))),Ql(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=TR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tn=ri(i.nextSibling),rn=e,je=!0,Cn=null,t!==null&&(hn[dn++]=hr,hn[dn++]=dr,hn[dn++]=Gi,hr=t.id,dr=t.overflow,Gi=e),e=yp(e,r.children),e.flags|=4096,e)}function ry(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bd(t.return,e,n)}function Wh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(bt(t,e,r.children,n),r=ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ry(t,n,e);else if(t.tag===19)ry(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Hu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Hu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wh(e,!0,n,null,s);break;case"together":Wh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=ai(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ai(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cR(t,e,n){switch(e.tag){case 3:fw(e),eo();break;case 5:z0(e);break;case 1:Wt(e.type)&&Fu(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;xe(zu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(ze,ze.current&1),e.flags|=128,null):n&e.child.childLanes?pw(t,e,n):(xe(ze,ze.current&1),t=Ir(t,e,n),t!==null?t.sibling:null);xe(ze,ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return mw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(ze,ze.current),r)break;return null;case 22:case 23:return e.lanes=0,hw(t,e,n)}return Ir(t,e,n)}var gw,Yd,yw,vw;gw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yd=function(){};yw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ji(Gn.current);var s=null;switch(n){case"input":i=vd(t,i),r=vd(t,r),s=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),s=[];break;case"textarea":i=Ed(t,i),r=Ed(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vu)}Id(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&be("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};vw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qo(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hR(t,e,n){var r=e.pendingProps;switch(np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return Wt(e.type)&&Mu(),At(e),null;case 3:return r=e.stateNode,no(),Me(Ht),Me(Dt),hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cn!==null&&(sf(Cn),Cn=null))),Yd(t,e),At(e),null;case 5:cp(e);var i=ji(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)yw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return At(e),null}if(t=ji(Gn.current),Kl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qn]=e,r[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<ia.length;i++)be(ia[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":dg(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":pg(r,s),be("invalid",r)}Id(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ql(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ql(r.textContent,l,t),i=["children",""+l]):Pa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":Fl(r),fg(r,s,!0);break;case"textarea":Fl(r),mg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=q_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qn]=e,t[Ma]=r,gw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sd(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<ia.length;i++)be(ia[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":dg(t,r),i=vd(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),be("invalid",t);break;case"textarea":pg(t,r),i=Ed(t,r),be("invalid",t);break;default:i=r}Id(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Q_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&K_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ca(t,u):typeof u=="number"&&Ca(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&be("scroll",t):u!=null&&zf(t,s,u,o))}switch(n){case"input":Fl(t),fg(t,r,!1);break;case"textarea":Fl(t),mg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Bs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Bs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return At(e),null;case 6:if(t&&e.stateNode!=null)vw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ji(Ua.current),ji(Gn.current),Kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[qn]=e,(s=r.nodeValue!==n)&&(t=rn,t!==null))switch(t.tag){case 3:ql(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ql(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=e,e.stateNode=r}return At(e),null;case 13:if(Me(ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&tn!==null&&e.mode&1&&!(e.flags&128))V0(),eo(),e.flags|=98560,s=!1;else if(s=Kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[qn]=e}else eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),s=!1}else Cn!==null&&(sf(Cn),Cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ze.current&1?st===0&&(st=3):Ip())),e.updateQueue!==null&&(e.flags|=4),At(e),null);case 4:return no(),Yd(t,e),t===null&&ba(e.stateNode.containerInfo),At(e),null;case 10:return op(e.type._context),At(e),null;case 17:return Wt(e.type)&&Mu(),At(e),null;case 19:if(Me(ze),s=e.memoizedState,s===null)return At(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qo(s,!1);else{if(st!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hu(t),o!==null){for(e.flags|=128,Qo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(ze,ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&Qe()>io&&(e.flags|=128,r=!0,Qo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Hu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return At(e),null}else 2*Qe()-s.renderingStartTime>io&&n!==1073741824&&(e.flags|=128,r=!0,Qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,n=ze.current,xe(ze,r?n&1|2:n&1),e):(At(e),null);case 22:case 23:return Tp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function dR(t,e){switch(np(e),e.tag){case 1:return Wt(e.type)&&Mu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return no(),Me(Ht),Me(Dt),hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cp(e),null;case 13:if(Me(ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(ze),null;case 4:return no(),null;case 10:return op(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var Yl=!1,kt=!1,fR=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function Xd(t,e,n){try{n()}catch(r){qe(t,e,r)}}var iy=!1;function pR(t,e){if(Ld=Ou,t=I0(),ep(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bd={focusedElem:t,selectionRange:n},Ou=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,x=A.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?k:Rn(e.type,k),x);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(L){qe(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return A=iy,iy=!1,A}function va(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xd(e,n,s)}i=i.next}while(i!==r)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _w(t){var e=t.alternate;e!==null&&(t.alternate=null,_w(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Ma],delete e[Fd],delete e[Y1],delete e[X1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ww(t){return t.tag===5||t.tag===3||t.tag===4}function sy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ww(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vu));else if(r!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}function ef(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}var gt=null,An=!1;function Fr(t,e,n){for(n=n.child;n!==null;)Ew(t,e,n),n=n.sibling}function Ew(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Ic,n)}catch{}switch(n.tag){case 5:kt||Us(n,e);case 6:var r=gt,i=An;gt=null,Fr(t,e,n),gt=r,An=i,gt!==null&&(An?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(An?(t=gt,n=n.stateNode,t.nodeType===8?Fh(t.parentNode,n):t.nodeType===1&&Fh(t,n),xa(t)):Fh(gt,n.stateNode));break;case 4:r=gt,i=An,gt=n.stateNode.containerInfo,An=!0,Fr(t,e,n),gt=r,An=i;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xd(n,e,o),i=i.next}while(i!==r)}Fr(t,e,n);break;case 1:if(!kt&&(Us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){qe(n,e,l)}Fr(t,e,n);break;case 21:Fr(t,e,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,Fr(t,e,n),kt=r):Fr(t,e,n);break;default:Fr(t,e,n)}}function oy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fR),e.forEach(function(r){var i=IR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:gt=l.stateNode,An=!1;break e;case 3:gt=l.stateNode.containerInfo,An=!0;break e;case 4:gt=l.stateNode.containerInfo,An=!0;break e}l=l.return}if(gt===null)throw Error(B(160));Ew(s,o,i),gt=null,An=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tw(e,t),e=e.sibling}function Tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Hn(t),r&4){try{va(3,t,t.return),Dc(3,t)}catch(k){qe(t,t.return,k)}try{va(5,t,t.return)}catch(k){qe(t,t.return,k)}}break;case 1:In(e,t),Hn(t),r&512&&n!==null&&Us(n,n.return);break;case 5:if(In(e,t),Hn(t),r&512&&n!==null&&Us(n,n.return),t.flags&32){var i=t.stateNode;try{Ca(i,"")}catch(k){qe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&H_(i,s),Sd(l,o);var c=Sd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Q_(i,p):d==="dangerouslySetInnerHTML"?K_(i,p):d==="children"?Ca(i,p):zf(i,d,p,c)}switch(l){case"input":_d(i,s);break;case"textarea":W_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Bs(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?Bs(i,!!s.multiple,s.defaultValue,!0):Bs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ma]=s}catch(k){qe(t,t.return,k)}}break;case 6:if(In(e,t),Hn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){qe(t,t.return,k)}}break;case 3:if(In(e,t),Hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(k){qe(t,t.return,k)}break;case 4:In(e,t),Hn(t);break;case 13:In(e,t),Hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wp=Qe())),r&4&&oy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||d,In(e,t),kt=c):In(e,t),Hn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(p=Y=d;Y!==null;){switch(m=Y,w=m.child,m.tag){case 0:case 11:case 14:case 15:va(4,m,m.return);break;case 1:Us(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(k){qe(r,n,k)}}break;case 5:Us(m,m.return);break;case 22:if(m.memoizedState!==null){ly(p);continue}}w!==null?(w.return=m,Y=w):ly(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=G_("display",o))}catch(k){qe(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){qe(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:In(e,t),Hn(t),r&4&&oy(t);break;case 21:break;default:In(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ww(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ca(i,""),r.flags&=-33);var s=sy(t);ef(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sy(t);Zd(t,l,o);break;default:throw Error(B(161))}}catch(u){qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mR(t,e,n){Y=t,Iw(t)}function Iw(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||kt;l=Yl;var c=kt;if(Yl=o,(kt=u)&&!c)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?uy(i):u!==null?(u.return=o,Y=u):uy(i);for(;s!==null;)Y=s,Iw(s),s=s.sibling;Y=i,Yl=l,kt=c}ay(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):ay(t)}}function ay(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||Dc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!kt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&xa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}kt||e.flags&512&&Jd(e)}catch(m){qe(e,e.return,m)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function ly(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function uy(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(u){qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){qe(e,i,u)}}var s=e.return;try{Jd(e)}catch(u){qe(e,s,u)}break;case 5:var o=e.return;try{Jd(e)}catch(u){qe(e,o,u)}}}catch(u){qe(e,e.return,u)}if(e===t){Y=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Y=l;break}Y=e.return}}var gR=Math.ceil,Ku=Nr.ReactCurrentDispatcher,vp=Nr.ReactCurrentOwner,pn=Nr.ReactCurrentBatchConfig,we=0,ct=null,Ze=null,_t=0,Zt=0,js=vi(0),st=0,$a=null,Yi=0,xc=0,_p=0,_a=null,zt=null,wp=0,io=1/0,ur=null,Gu=!1,tf=null,si=null,Xl=!1,Xr=null,Qu=0,wa=0,nf=null,mu=-1,gu=0;function Vt(){return we&6?Qe():mu!==-1?mu:mu=Qe()}function oi(t){return t.mode&1?we&2&&_t!==0?_t&-_t:Z1.transition!==null?(gu===0&&(gu=a0()),gu):(t=Ae,t!==0||(t=window.event,t=t===void 0?16:p0(t.type)),t):1}function xn(t,e,n,r){if(50<wa)throw wa=0,nf=null,Error(B(185));sl(t,n,r),(!(we&2)||t!==ct)&&(t===ct&&(!(we&2)&&(xc|=n),st===4&&Wr(t,_t)),qt(t,r),n===1&&we===0&&!(e.mode&1)&&(io=Qe()+500,Cc&&_i()))}function qt(t,e){var n=t.callbackNode;ZS(t,e);var r=xu(t,t===ct?_t:0);if(r===0)n!==null&&vg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vg(n),e===1)t.tag===0?J1(cy.bind(null,t)):O0(cy.bind(null,t)),G1(function(){!(we&6)&&_i()}),n=null;else{switch(l0(r)){case 1:n=qf;break;case 4:n=s0;break;case 16:n=Du;break;case 536870912:n=o0;break;default:n=Du}n=Dw(n,Sw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sw(t,e){if(mu=-1,gu=0,we&6)throw Error(B(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var r=xu(t,t===ct?_t:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yu(t,r);else{e=r;var i=we;we|=2;var s=Aw();(ct!==t||_t!==e)&&(ur=null,io=Qe()+500,Hi(t,e));do try{_R();break}catch(l){Rw(t,l)}while(!0);sp(),Ku.current=s,we=i,Ze!==null?e=0:(ct=null,_t=0,e=st)}if(e!==0){if(e===2&&(i=kd(t),i!==0&&(r=i,e=rf(t,i))),e===1)throw n=$a,Hi(t,0),Wr(t,r),qt(t,Qe()),n;if(e===6)Wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!yR(i)&&(e=Yu(t,r),e===2&&(s=kd(t),s!==0&&(r=s,e=rf(t,s))),e===1))throw n=$a,Hi(t,0),Wr(t,r),qt(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Li(t,zt,ur);break;case 3:if(Wr(t,r),(r&130023424)===r&&(e=wp+500-Qe(),10<e)){if(xu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Md(Li.bind(null,t,zt,ur),e);break}Li(t,zt,ur);break;case 4:if(Wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gR(r/1960))-r,10<r){t.timeoutHandle=Md(Li.bind(null,t,zt,ur),r);break}Li(t,zt,ur);break;case 5:Li(t,zt,ur);break;default:throw Error(B(329))}}}return qt(t,Qe()),t.callbackNode===n?Sw.bind(null,t):null}function rf(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(Hi(t,e).flags|=256),t=Yu(t,e),t!==2&&(e=zt,zt=n,e!==null&&sf(e)),t}function sf(t){zt===null?zt=t:zt.push.apply(zt,t)}function yR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~_p,e&=~xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dn(e),r=1<<n;t[n]=-1,e&=~r}}function cy(t){if(we&6)throw Error(B(327));Ks();var e=xu(t,0);if(!(e&1))return qt(t,Qe()),null;var n=Yu(t,e);if(t.tag!==0&&n===2){var r=kd(t);r!==0&&(e=r,n=rf(t,r))}if(n===1)throw n=$a,Hi(t,0),Wr(t,e),qt(t,Qe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Li(t,zt,ur),qt(t,Qe()),null}function Ep(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(io=Qe()+500,Cc&&_i())}}function Xi(t){Xr!==null&&Xr.tag===0&&!(we&6)&&Ks();var e=we;we|=1;var n=pn.transition,r=Ae;try{if(pn.transition=null,Ae=1,t)return t()}finally{Ae=r,pn.transition=n,we=e,!(we&6)&&_i()}}function Tp(){Zt=js.current,Me(js)}function Hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,K1(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(np(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mu();break;case 3:no(),Me(Ht),Me(Dt),hp();break;case 5:cp(r);break;case 4:no();break;case 13:Me(ze);break;case 19:Me(ze);break;case 10:op(r.type._context);break;case 22:case 23:Tp()}n=n.return}if(ct=t,Ze=t=ai(t.current,null),_t=Zt=e,st=0,$a=null,_p=xc=Yi=0,zt=_a=null,Ui!==null){for(e=0;e<Ui.length;e++)if(n=Ui[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ui=null}return t}function Rw(t,e){do{var n=Ze;try{if(sp(),du.current=qu,Wu){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wu=!1}if(Qi=0,ut=it=Be=null,ya=!1,ja=0,vp.current=null,n===null||n.return===null){st=1,$a=e,Ze=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=_t,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Xg(o);if(w!==null){w.flags&=-257,Jg(w,o,l,s,e),w.mode&1&&Yg(s,c,e),e=w,u=c;var A=e.updateQueue;if(A===null){var k=new Set;k.add(u),e.updateQueue=k}else A.add(u);break e}else{if(!(e&1)){Yg(s,c,e),Ip();break e}u=Error(B(426))}}else if(je&&l.mode&1){var x=Xg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Jg(x,o,l,s,e),rp(ro(u,l));break e}}s=u=ro(u,l),st!==4&&(st=2),_a===null?_a=[s]:_a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=lw(s,u,e);Hg(s,I);break e;case 1:l=u;var _=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(si===null||!si.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=uw(s,l,e);Hg(s,L);break e}}s=s.return}while(s!==null)}Cw(n)}catch(U){e=U,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(!0)}function Aw(){var t=Ku.current;return Ku.current=qu,t===null?qu:t}function Ip(){(st===0||st===3||st===2)&&(st=4),ct===null||!(Yi&268435455)&&!(xc&268435455)||Wr(ct,_t)}function Yu(t,e){var n=we;we|=2;var r=Aw();(ct!==t||_t!==e)&&(ur=null,Hi(t,e));do try{vR();break}catch(i){Rw(t,i)}while(!0);if(sp(),we=n,Ku.current=r,Ze!==null)throw Error(B(261));return ct=null,_t=0,st}function vR(){for(;Ze!==null;)Pw(Ze)}function _R(){for(;Ze!==null&&!HS();)Pw(Ze)}function Pw(t){var e=Nw(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?Cw(t):Ze=e,vp.current=null}function Cw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dR(n,e),n!==null){n.flags&=32767,Ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{st=6,Ze=null;return}}else if(n=hR(n,e,Zt),n!==null){Ze=n;return}if(e=e.sibling,e!==null){Ze=e;return}Ze=e=t}while(e!==null);st===0&&(st=5)}function Li(t,e,n){var r=Ae,i=pn.transition;try{pn.transition=null,Ae=1,wR(t,e,n,r)}finally{pn.transition=i,Ae=r}return null}function wR(t,e,n,r){do Ks();while(Xr!==null);if(we&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(e1(t,s),t===ct&&(Ze=ct=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xl||(Xl=!0,Dw(Du,function(){return Ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pn.transition,pn.transition=null;var o=Ae;Ae=1;var l=we;we|=4,vp.current=null,pR(t,n),Tw(n,t),j1(bd),Ou=!!Ld,bd=Ld=null,t.current=n,mR(n),WS(),we=l,Ae=o,pn.transition=s}else t.current=n;if(Xl&&(Xl=!1,Xr=t,Qu=i),s=t.pendingLanes,s===0&&(si=null),GS(n.stateNode),qt(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gu)throw Gu=!1,t=tf,tf=null,t;return Qu&1&&t.tag!==0&&Ks(),s=t.pendingLanes,s&1?t===nf?wa++:(wa=0,nf=t):wa=0,_i(),null}function Ks(){if(Xr!==null){var t=l0(Qu),e=pn.transition,n=Ae;try{if(pn.transition=null,Ae=16>t?16:t,Xr===null)var r=!1;else{if(t=Xr,Xr=null,Qu=0,we&6)throw Error(B(331));var i=we;for(we|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:va(8,d,s)}var p=d.child;if(p!==null)p.return=d,Y=p;else for(;Y!==null;){d=Y;var m=d.sibling,w=d.return;if(_w(d),d===c){Y=null;break}if(m!==null){m.return=w,Y=m;break}Y=w}}}var A=s.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var x=k.sibling;k.sibling=null,k=x}while(k!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,Y=I;break e}Y=s.return}}var _=t.current;for(Y=_;Y!==null;){o=Y;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,Y=R;else e:for(o=_;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Dc(9,l)}}catch(U){qe(l,l.return,U)}if(l===o){Y=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,Y=L;break e}Y=l.return}}if(we=i,_i(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Ic,t)}catch{}r=!0}return r}finally{Ae=n,pn.transition=e}}return!1}function hy(t,e,n){e=ro(n,e),e=lw(t,e,1),t=ii(t,e,1),e=Vt(),t!==null&&(sl(t,1,e),qt(t,e))}function qe(t,e,n){if(t.tag===3)hy(t,t,n);else for(;e!==null;){if(e.tag===3){hy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(si===null||!si.has(r))){t=ro(n,t),t=uw(e,t,1),e=ii(e,t,1),t=Vt(),e!==null&&(sl(e,1,t),qt(e,t));break}}e=e.return}}function ER(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,ct===t&&(_t&n)===n&&(st===4||st===3&&(_t&130023424)===_t&&500>Qe()-wp?Hi(t,0):_p|=n),qt(t,e)}function kw(t,e){e===0&&(t.mode&1?(e=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):e=1);var n=Vt();t=Tr(t,e),t!==null&&(sl(t,e,n),qt(t,n))}function TR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kw(t,n)}function IR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),kw(t,n)}var Nw;Nw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ht.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,cR(t,e,n);$t=!!(t.flags&131072)}else $t=!1,je&&e.flags&1048576&&L0(e,ju,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pu(t,e),t=e.pendingProps;var i=Zs(e,Dt.current);qs(e,n),i=fp(null,e,r,t,i,n);var s=pp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(s=!0,Fu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lp(e),i.updater=Nc,e.stateNode=i,i._reactInternals=e,Hd(e,r,t,n),e=Kd(null,e,r,!0,s,n)):(e.tag=0,je&&s&&tp(e),bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RR(r),t=Rn(r,t),i){case 0:e=qd(null,e,r,t,n);break e;case 1:e=ty(null,e,r,t,n);break e;case 11:e=Zg(null,e,r,t,n);break e;case 14:e=ey(null,e,r,Rn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),qd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),ty(t,e,r,i,n);case 3:e:{if(fw(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,j0(t,e),$u(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ro(Error(B(423)),e),e=ny(t,e,r,n,i);break e}else if(r!==i){i=ro(Error(B(424)),e),e=ny(t,e,r,n,i);break e}else for(tn=ri(e.stateNode.containerInfo.firstChild),rn=e,je=!0,Cn=null,n=F0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),r===i){e=Ir(t,e,n);break e}bt(t,e,r,n)}e=e.child}return e;case 5:return z0(e),t===null&&zd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vd(r,i)?o=null:s!==null&&Vd(r,s)&&(e.flags|=32),dw(t,e),bt(t,e,o,n),e.child;case 6:return t===null&&zd(e),null;case 13:return pw(t,e,n);case 4:return up(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=to(e,null,r,n):bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Zg(t,e,r,i,n);case 7:return bt(t,e,e.pendingProps,n),e.child;case 8:return bt(t,e,e.pendingProps.children,n),e.child;case 12:return bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,xe(zu,r._currentValue),r._currentValue=o,s!==null)if(Ln(s.value,o)){if(s.children===i.children&&!Ht.current){e=Ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=yr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Bd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qs(e,n),i=mn(i),r=r(i),e.flags|=1,bt(t,e,r,n),e.child;case 14:return r=e.type,i=Rn(r,e.pendingProps),i=Rn(r.type,i),ey(t,e,r,i,n);case 15:return cw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),pu(t,e),e.tag=1,Wt(r)?(t=!0,Fu(e)):t=!1,qs(e,n),aw(e,r,i),Hd(e,r,i,n),Kd(null,e,r,!0,t,n);case 19:return mw(t,e,n);case 22:return hw(t,e,n)}throw Error(B(156,e.tag))};function Dw(t,e){return i0(t,e)}function SR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(t,e,n,r){return new SR(t,e,n,r)}function Sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RR(t){if(typeof t=="function")return Sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$f)return 11;if(t===Hf)return 14}return 2}function ai(t,e){var n=t.alternate;return n===null?(n=fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Wi(n.children,i,s,e);case Bf:o=8,i|=8;break;case pd:return t=fn(12,n,e,i|2),t.elementType=pd,t.lanes=s,t;case md:return t=fn(13,n,e,i),t.elementType=md,t.lanes=s,t;case gd:return t=fn(19,n,e,i),t.elementType=gd,t.lanes=s,t;case z_:return Oc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U_:o=10;break e;case j_:o=9;break e;case $f:o=11;break e;case Hf:o=14;break e;case Br:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=fn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wi(t,e,n,r){return t=fn(7,t,r,e),t.lanes=n,t}function Oc(t,e,n,r){return t=fn(22,t,r,e),t.elementType=z_,t.lanes=n,t.stateNode={isHidden:!1},t}function qh(t,e,n){return t=fn(6,t,null,e),t.lanes=n,t}function Kh(t,e,n){return e=fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ph(0),this.expirationTimes=Ph(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ph(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rp(t,e,n,r,i,s,o,l,u){return t=new AR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lp(s),t}function PR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function xw(t){if(!t)return fi;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Wt(n))return x0(t,n,e)}return e}function Ow(t,e,n,r,i,s,o,l,u){return t=Rp(n,r,!0,t,i,s,o,l,u),t.context=xw(null),n=t.current,r=Vt(),i=oi(n),s=yr(r,i),s.callback=e??null,ii(n,s,i),t.current.lanes=i,sl(t,i,r),qt(t,r),t}function Lc(t,e,n,r){var i=e.current,s=Vt(),o=oi(i);return n=xw(n),e.context===null?e.context=n:e.pendingContext=n,e=yr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ii(i,e,o),t!==null&&(xn(t,i,o,s),hu(t,i,o)),o}function Xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ap(t,e){dy(t,e),(t=t.alternate)&&dy(t,e)}function CR(){return null}var Lw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pp(t){this._internalRoot=t}bc.prototype.render=Pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Lc(t,e,null,null)};bc.prototype.unmount=Pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xi(function(){Lc(null,t,null,null)}),e[Er]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=h0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hr.length&&e!==0&&e<Hr[n].priority;n++);Hr.splice(n,0,t),n===0&&f0(t)}};function Cp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fy(){}function kR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Xu(o);s.call(c)}}var o=Ow(e,r,t,0,null,!1,!1,"",fy);return t._reactRootContainer=o,t[Er]=o.current,ba(t.nodeType===8?t.parentNode:t),Xi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Xu(u);l.call(c)}}var u=Rp(t,0,!1,null,null,!1,!1,"",fy);return t._reactRootContainer=u,t[Er]=u.current,ba(t.nodeType===8?t.parentNode:t),Xi(function(){Lc(e,u,n,r)}),u}function Mc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Xu(o);l.call(u)}}Lc(e,o,t,i)}else o=kR(n,e,t,i,r);return Xu(o)}u0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(Kf(e,n|1),qt(e,Qe()),!(we&6)&&(io=Qe()+500,_i()))}break;case 13:Xi(function(){var r=Tr(t,1);if(r!==null){var i=Vt();xn(r,t,1,i)}}),Ap(t,1)}};Gf=function(t){if(t.tag===13){var e=Tr(t,134217728);if(e!==null){var n=Vt();xn(e,t,134217728,n)}Ap(t,134217728)}};c0=function(t){if(t.tag===13){var e=oi(t),n=Tr(t,e);if(n!==null){var r=Vt();xn(n,t,e,r)}Ap(t,e)}};h0=function(){return Ae};d0=function(t,e){var n=Ae;try{return Ae=t,e()}finally{Ae=n}};Ad=function(t,e,n){switch(e){case"input":if(_d(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pc(r);if(!i)throw Error(B(90));$_(r),_d(r,i)}}}break;case"textarea":W_(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};J_=Ep;Z_=Xi;var NR={usingClientEntryPoint:!1,Events:[al,Ls,Pc,Y_,X_,Ep]},Yo={findFiberByHostInstance:Fi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DR={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n0(t),t===null?null:t.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||CR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{Ic=Jl.inject(DR),Kn=Jl}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NR;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cp(e))throw Error(B(200));return PR(t,e,null,n)};an.createRoot=function(t,e){if(!Cp(t))throw Error(B(299));var n=!1,r="",i=Lw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rp(t,1,!1,null,null,n,!1,r,i),t[Er]=e.current,ba(t.nodeType===8?t.parentNode:t),new Pp(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=n0(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return Xi(t)};an.hydrate=function(t,e,n){if(!Vc(e))throw Error(B(200));return Mc(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!Cp(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Lw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ow(e,null,t,1,n??null,i,!1,s,o),t[Er]=e.current,ba(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new bc(e)};an.render=function(t,e,n){if(!Vc(e))throw Error(B(200));return Mc(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!Vc(t))throw Error(B(40));return t._reactRootContainer?(Xi(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1};an.unstable_batchedUpdates=Ep;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Mc(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function bw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bw)}catch(t){console.error(t)}}bw(),b_.exports=an;var kp=b_.exports;const xR=I_(kp),OR=T_({__proto__:null,default:xR},[kp]);var py=kp;dd.createRoot=py.createRoot,dd.hydrateRoot=py.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ue(){return Ue=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ue.apply(this,arguments)}var Je;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Je||(Je={}));const my="popstate";function LR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ha("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ji(i)}return VR(e,n,null,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function so(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bR(){return Math.random().toString(36).substr(2,8)}function gy(t,e){return{usr:t.state,key:t.key,idx:e}}function Ha(t,e,n,r){return n===void 0&&(n=null),Ue({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?wi(e):e,{state:n,key:e&&e.key||r||bR()})}function Ji(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function wi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function VR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Je.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ue({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Je.Pop;let x=d(),I=x==null?null:x-c;c=x,u&&u({action:l,location:k.location,delta:I})}function m(x,I){l=Je.Push;let _=Ha(k.location,x,I);c=d()+1;let R=gy(_,c),L=k.createHref(_);try{o.pushState(R,"",L)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(L)}s&&u&&u({action:l,location:k.location,delta:1})}function w(x,I){l=Je.Replace;let _=Ha(k.location,x,I);c=d();let R=gy(_,c),L=k.createHref(_);o.replaceState(R,"",L),s&&u&&u({action:l,location:k.location,delta:0})}function A(x){let I=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof x=="string"?x:Ji(x);return _=_.replace(/ $/,"%20"),fe(I,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,I)}let k={get action(){return l},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(my,p),u=x,()=>{i.removeEventListener(my,p),u=null}},createHref(x){return e(i,x)},createURL:A,encodeLocation(x){let I=A(x);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:w,go(x){return o.go(x)}};return k}var Re;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Re||(Re={}));const MR=new Set(["lazy","caseSensitive","path","id","index","children"]);function FR(t){return t.index===!0}function Ju(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(fe(i.index!==!0||!i.children,"Cannot specify children on an index route"),fe(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),FR(i)){let u=Ue({},i,e(i),{id:l});return r[l]=u,u}else{let u=Ue({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=Ju(i.children,e,o,r)),u}})}function Vi(t,e,n){return n===void 0&&(n="/"),vu(t,e,n,!1)}function vu(t,e,n,r){let i=typeof e=="string"?wi(e):e,s=vo(i.pathname||"/",n);if(s==null)return null;let o=Vw(t);jR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=XR(s);l=QR(o[u],c,r)}return l}function UR(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Vw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=vr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Vw(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:KR(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Mw(s.path))i(s,o,u)}),e}function Mw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Mw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function jR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:GR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zR=/^:[\w-]+$/,BR=3,$R=2,HR=1,WR=10,qR=-2,yy=t=>t==="*";function KR(t,e){let n=t.split("/"),r=n.length;return n.some(yy)&&(r+=qR),e&&(r+=$R),n.filter(i=>!yy(i)).reduce((i,s)=>i+(zR.test(s)?BR:s===""?HR:WR),r)}function GR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function QR(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=vy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=vy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:vr([s,p.pathname]),pathnameBase:eA(vr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=vr([s,p.pathnameBase]))}return o}function vy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=YR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const A=l[p];return w&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function YR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),so(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function XR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return so(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function JR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?wi(t):t;return{pathname:n?n.startsWith("/")?n:ZR(n,e):e,search:tA(r),hash:nA(i)}}function ZR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fc(t,e){let n=Fw(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Uc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=wi(t):(i=Ue({},t),fe(!i.pathname||!i.pathname.includes("?"),Gh("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),Gh("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),Gh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=JR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const vr=t=>t.join("/").replace(/\/\/+/g,"/"),eA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Zu{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Wa(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Uw=["post","put","patch","delete"],rA=new Set(Uw),iA=["get",...Uw],sA=new Set(iA),oA=new Set([301,302,303,307,308]),aA=new Set([307,308]),Qh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},lA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Xo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Np=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uA=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),jw="remix-router-transitions";function cA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;fe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let P=t.detectErrorBoundary;i=D=>({hasErrorBoundary:P(D)})}else i=uA;let s={},o=Ju(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.dataStrategy||pA,d=t.patchRoutesOnNavigation,p=Ue({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),m=null,w=new Set,A=null,k=null,x=null,I=t.hydrationData!=null,_=Vi(o,t.history.location,u),R=!1,L=null;if(_==null&&!d){let P=jt(404,{pathname:t.history.location.pathname}),{matches:D,route:b}=ky(o);_=D,L={[b.id]:P}}_&&!t.hydrationData&&Ni(_,o,t.history.location.pathname).active&&(_=null);let U;if(_)if(_.some(P=>P.route.lazy))U=!1;else if(!_.some(P=>P.route.loader))U=!0;else if(p.v7_partialHydration){let P=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null;if(D){let b=_.findIndex(j=>D[j.route.id]!==void 0);U=_.slice(0,b+1).every(j=>!af(j.route,P,D))}else U=_.every(b=>!af(b.route,P,D))}else U=t.hydrationData!=null;else if(U=!1,_=[],p.v7_partialHydration){let P=Ni(null,o,t.history.location.pathname);P.active&&P.matches&&(R=!0,_=P.matches)}let $,g={historyAction:t.history.action,location:t.history.location,matches:_,initialized:U,navigation:Qh,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||L,fetchers:new Map,blockers:new Map},y=Je.Pop,E=!1,T,C=!1,N=new Map,S=null,ke=!1,ht=!1,Fn=[],Ut=new Set,H=new Map,re=0,oe=-1,Ie=new Map,de=new Set,Ce=new Map,Ot=new Map,Ke=new Set,dt=new Map,ft=new Map,fs;function dh(){if(m=t.history.listen(P=>{let{action:D,location:b,delta:j}=P;if(fs){fs(),fs=void 0;return}so(ft.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=Oo({currentLocation:g.location,nextLocation:b,historyAction:D});if(K&&j!=null){let ee=new Promise(ie=>{fs=ie});t.history.go(j*-1),Pi(K,{state:"blocked",location:b,proceed(){Pi(K,{state:"proceeding",proceed:void 0,reset:void 0,location:b}),ee.then(()=>t.history.go(j))},reset(){let ie=new Map(g.blockers);ie.set(K,Xo),tt({blockers:ie})}});return}return jn(D,b)}),n){CA(e,N);let P=()=>kA(e,N);e.addEventListener("pagehide",P),S=()=>e.removeEventListener("pagehide",P)}return g.initialized||jn(Je.Pop,g.location,{initialHydration:!0}),$}function ps(){m&&m(),S&&S(),w.clear(),T&&T.abort(),g.fetchers.forEach((P,D)=>ys(D)),g.blockers.forEach((P,D)=>_s(D))}function ms(P){return w.add(P),()=>w.delete(P)}function tt(P,D){D===void 0&&(D={}),g=Ue({},g,P);let b=[],j=[];p.v7_fetcherPersist&&g.fetchers.forEach((K,ee)=>{K.state==="idle"&&(Ke.has(ee)?j.push(ee):b.push(ee))}),Ke.forEach(K=>{!g.fetchers.has(K)&&!H.has(K)&&j.push(K)}),[...w].forEach(K=>K(g,{deletedFetchers:j,viewTransitionOpts:D.viewTransitionOpts,flushSync:D.flushSync===!0})),p.v7_fetcherPersist?(b.forEach(K=>g.fetchers.delete(K)),j.forEach(K=>ys(K))):j.forEach(K=>Ke.delete(K))}function Un(P,D,b){var j,K;let{flushSync:ee}=b===void 0?{}:b,ie=g.actionData!=null&&g.navigation.formMethod!=null&&Pn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((j=P.state)==null?void 0:j._isRedirect)!==!0,J;D.actionData?Object.keys(D.actionData).length>0?J=D.actionData:J=null:ie?J=g.actionData:J=null;let X=D.loaderData?Py(g.loaderData,D.loaderData,D.matches||[],D.errors):g.loaderData,Q=g.blockers;Q.size>0&&(Q=new Map(Q),Q.forEach((he,Ye)=>Q.set(Ye,Xo)));let te=E===!0||g.navigation.formMethod!=null&&Pn(g.navigation.formMethod)&&((K=P.state)==null?void 0:K._isRedirect)!==!0;l&&(o=l,l=void 0),ke||y===Je.Pop||(y===Je.Push?t.history.push(P,P.state):y===Je.Replace&&t.history.replace(P,P.state));let ae;if(y===Je.Pop){let he=N.get(g.location.pathname);he&&he.has(P.pathname)?ae={currentLocation:g.location,nextLocation:P}:N.has(P.pathname)&&(ae={currentLocation:P,nextLocation:g.location})}else if(C){let he=N.get(g.location.pathname);he?he.add(P.pathname):(he=new Set([P.pathname]),N.set(g.location.pathname,he)),ae={currentLocation:g.location,nextLocation:P}}tt(Ue({},D,{actionData:J,loaderData:X,historyAction:y,location:P,initialized:!0,navigation:Qh,revalidation:"idle",restoreScrollPosition:ki(P,D.matches||g.matches),preventScrollReset:te,blockers:Q}),{viewTransitionOpts:ae,flushSync:ee===!0}),y=Je.Pop,E=!1,C=!1,ke=!1,ht=!1,Fn=[]}async function gs(P,D){if(typeof P=="number"){t.history.go(P);return}let b=of(g.location,g.matches,u,p.v7_prependBasename,P,p.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:j,submission:K,error:ee}=_y(p.v7_normalizeFormMethod,!1,b,D),ie=g.location,J=Ha(g.location,j,D&&D.state);J=Ue({},J,t.history.encodeLocation(J));let X=D&&D.replace!=null?D.replace:void 0,Q=Je.Push;X===!0?Q=Je.Replace:X===!1||K!=null&&Pn(K.formMethod)&&K.formAction===g.location.pathname+g.location.search&&(Q=Je.Replace);let te=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,ae=(D&&D.flushSync)===!0,he=Oo({currentLocation:ie,nextLocation:J,historyAction:Q});if(he){Pi(he,{state:"blocked",location:J,proceed(){Pi(he,{state:"proceeding",proceed:void 0,reset:void 0,location:J}),gs(P,D)},reset(){let Ye=new Map(g.blockers);Ye.set(he,Xo),tt({blockers:Ye})}});return}return await jn(Q,J,{submission:K,pendingError:ee,preventScrollReset:te,replace:D&&D.replace,enableViewTransition:D&&D.viewTransition,flushSync:ae})}function Po(){if(rt(),tt({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){jn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}jn(y||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:C===!0})}}async function jn(P,D,b){T&&T.abort(),T=null,y=P,ke=(b&&b.startUninterruptedRevalidation)===!0,Tl(g.location,g.matches),E=(b&&b.preventScrollReset)===!0,C=(b&&b.enableViewTransition)===!0;let j=l||o,K=b&&b.overrideNavigation,ee=b!=null&&b.initialHydration&&g.matches&&g.matches.length>0&&!R?g.matches:Vi(j,D,u),ie=(b&&b.flushSync)===!0;if(ee&&g.initialized&&!ht&&wA(g.location,D)&&!(b&&b.submission&&Pn(b.submission.formMethod))){Un(D,{matches:ee},{flushSync:ie});return}let J=Ni(ee,j,D.pathname);if(J.active&&J.matches&&(ee=J.matches),!ee){let{error:Se,notFoundMatches:ge,route:De}=rr(D.pathname);Un(D,{matches:ge,loaderData:{},errors:{[De.id]:Se}},{flushSync:ie});return}T=new AbortController;let X=Rs(t.history,D,T.signal,b&&b.submission),Q;if(b&&b.pendingError)Q=[Mi(ee).route.id,{type:Re.error,error:b.pendingError}];else if(b&&b.submission&&Pn(b.submission.formMethod)){let Se=await fh(X,D,b.submission,ee,J.active,{replace:b.replace,flushSync:ie});if(Se.shortCircuited)return;if(Se.pendingActionResult){let[ge,De]=Se.pendingActionResult;if(en(De)&&Wa(De.error)&&De.error.status===404){T=null,Un(D,{matches:Se.matches,loaderData:{},errors:{[ge]:De.error}});return}}ee=Se.matches||ee,Q=Se.pendingActionResult,K=Yh(D,b.submission),ie=!1,J.active=!1,X=Rs(t.history,X.url,X.signal)}let{shortCircuited:te,matches:ae,loaderData:he,errors:Ye}=await ph(X,D,ee,J.active,K,b&&b.submission,b&&b.fetcherSubmission,b&&b.replace,b&&b.initialHydration===!0,ie,Q);te||(T=null,Un(D,Ue({matches:ae||ee},Cy(Q),{loaderData:he,errors:Ye})))}async function fh(P,D,b,j,K,ee){ee===void 0&&(ee={}),rt();let ie=AA(D,b);if(tt({navigation:ie},{flushSync:ee.flushSync===!0}),K){let Q=await Bn(j,D.pathname,P.signal);if(Q.type==="aborted")return{shortCircuited:!0};if(Q.type==="error"){let te=Mi(Q.partialMatches).route.id;return{matches:Q.partialMatches,pendingActionResult:[te,{type:Re.error,error:Q.error}]}}else if(Q.matches)j=Q.matches;else{let{notFoundMatches:te,error:ae,route:he}=rr(D.pathname);return{matches:te,pendingActionResult:[he.id,{type:Re.error,error:ae}]}}}let J,X=sa(j,D);if(!X.route.action&&!X.route.lazy)J={type:Re.error,error:jt(405,{method:P.method,pathname:D.pathname,routeId:X.route.id})};else if(J=(await xr("action",g,P,[X],j,null))[X.route.id],P.signal.aborted)return{shortCircuited:!0};if(zi(J)){let Q;return ee&&ee.replace!=null?Q=ee.replace:Q=Sy(J.response.headers.get("Location"),new URL(P.url),u)===g.location.pathname+g.location.search,await _n(P,J,!0,{submission:b,replace:Q}),{shortCircuited:!0}}if(Jr(J))throw jt(400,{type:"defer-action"});if(en(J)){let Q=Mi(j,X.route.id);return(ee&&ee.replace)!==!0&&(y=Je.Push),{matches:j,pendingActionResult:[Q.route.id,J]}}return{matches:j,pendingActionResult:[X.route.id,J]}}async function ph(P,D,b,j,K,ee,ie,J,X,Q,te){let ae=K||Yh(D,ee),he=ee||ie||Dy(ae),Ye=!ke&&(!p.v7_partialHydration||!X);if(j){if(Ye){let Oe=Co(te);tt(Ue({navigation:ae},Oe!==void 0?{actionData:Oe}:{}),{flushSync:Q})}let ve=await Bn(b,D.pathname,P.signal);if(ve.type==="aborted")return{shortCircuited:!0};if(ve.type==="error"){let Oe=Mi(ve.partialMatches).route.id;return{matches:ve.partialMatches,loaderData:{},errors:{[Oe]:ve.error}}}else if(ve.matches)b=ve.matches;else{let{error:Oe,notFoundMatches:or,route:br}=rr(D.pathname);return{matches:or,loaderData:{},errors:{[br.id]:Oe}}}}let Se=l||o,[ge,De]=Ey(t.history,g,b,he,D,p.v7_partialHydration&&X===!0,p.v7_skipActionErrorRevalidation,ht,Fn,Ut,Ke,Ce,de,Se,u,te);if(Ci(ve=>!(b&&b.some(Oe=>Oe.route.id===ve))||ge&&ge.some(Oe=>Oe.route.id===ve)),oe=++re,ge.length===0&&De.length===0){let ve=vs();return Un(D,Ue({matches:b,loaderData:{},errors:te&&en(te[1])?{[te[0]]:te[1].error}:null},Cy(te),ve?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Q}),{shortCircuited:!0}}if(Ye){let ve={};if(!j){ve.navigation=ae;let Oe=Co(te);Oe!==void 0&&(ve.actionData=Oe)}De.length>0&&(ve.fetchers=ko(De)),tt(ve,{flushSync:Q})}De.forEach(ve=>{wn(ve.key),ve.controller&&H.set(ve.key,ve.controller)});let ir=()=>De.forEach(ve=>wn(ve.key));T&&T.signal.addEventListener("abort",ir);let{loaderResults:Or,fetcherResults:En}=await nt(g,b,ge,De,P);if(P.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",ir),De.forEach(ve=>H.delete(ve.key));let Lt=Zl(Or);if(Lt)return await _n(P,Lt.result,!0,{replace:J}),{shortCircuited:!0};if(Lt=Zl(En),Lt)return de.add(Lt.key),await _n(P,Lt.result,!0,{replace:J}),{shortCircuited:!0};let{loaderData:ws,errors:sr}=Ay(g,b,Or,te,De,En,dt);dt.forEach((ve,Oe)=>{ve.subscribe(or=>{(or||ve.done)&&dt.delete(Oe)})}),p.v7_partialHydration&&X&&g.errors&&(sr=Ue({},g.errors,sr));let Xt=vs(),cn=El(oe),Lr=Xt||cn||De.length>0;return Ue({matches:b,loaderData:ws,errors:sr},Lr?{fetchers:new Map(g.fetchers)}:{})}function Co(P){if(P&&!en(P[1]))return{[P[0]]:P[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function ko(P){return P.forEach(D=>{let b=g.fetchers.get(D.key),j=Jo(void 0,b?b.data:void 0);g.fetchers.set(D.key,j)}),new Map(g.fetchers)}function wl(P,D,b,j){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");wn(P);let K=(j&&j.flushSync)===!0,ee=l||o,ie=of(g.location,g.matches,u,p.v7_prependBasename,b,p.v7_relativeSplatPath,D,j==null?void 0:j.relative),J=Vi(ee,ie,u),X=Ni(J,ee,ie);if(X.active&&X.matches&&(J=X.matches),!J){un(P,D,jt(404,{pathname:ie}),{flushSync:K});return}let{path:Q,submission:te,error:ae}=_y(p.v7_normalizeFormMethod,!0,ie,j);if(ae){un(P,D,ae,{flushSync:K});return}let he=sa(J,Q),Ye=(j&&j.preventScrollReset)===!0;if(te&&Pn(te.formMethod)){mh(P,D,Q,he,J,X.active,K,Ye,te);return}Ce.set(P,{routeId:D,path:Q}),No(P,D,Q,he,J,X.active,K,Ye,te)}async function mh(P,D,b,j,K,ee,ie,J,X){rt(),Ce.delete(P);function Q(Fe){if(!Fe.route.action&&!Fe.route.lazy){let $n=jt(405,{method:X.formMethod,pathname:b,routeId:D});return un(P,D,$n,{flushSync:ie}),!0}return!1}if(!ee&&Q(j))return;let te=g.fetchers.get(P);Yt(P,PA(X,te),{flushSync:ie});let ae=new AbortController,he=Rs(t.history,b,ae.signal,X);if(ee){let Fe=await Bn(K,new URL(he.url).pathname,he.signal,P);if(Fe.type==="aborted")return;if(Fe.type==="error"){un(P,D,Fe.error,{flushSync:ie});return}else if(Fe.matches){if(K=Fe.matches,j=sa(K,b),Q(j))return}else{un(P,D,jt(404,{pathname:b}),{flushSync:ie});return}}H.set(P,ae);let Ye=re,ge=(await xr("action",g,he,[j],K,P))[j.route.id];if(he.signal.aborted){H.get(P)===ae&&H.delete(P);return}if(p.v7_fetcherPersist&&Ke.has(P)){if(zi(ge)||en(ge)){Yt(P,zr(void 0));return}}else{if(zi(ge))if(H.delete(P),oe>Ye){Yt(P,zr(void 0));return}else return de.add(P),Yt(P,Jo(X)),_n(he,ge,!1,{fetcherSubmission:X,preventScrollReset:J});if(en(ge)){un(P,D,ge.error);return}}if(Jr(ge))throw jt(400,{type:"defer-action"});let De=g.navigation.location||g.location,ir=Rs(t.history,De,ae.signal),Or=l||o,En=g.navigation.state!=="idle"?Vi(Or,g.navigation.location,u):g.matches;fe(En,"Didn't find any matches after fetcher action");let Lt=++re;Ie.set(P,Lt);let ws=Jo(X,ge.data);g.fetchers.set(P,ws);let[sr,Xt]=Ey(t.history,g,En,X,De,!1,p.v7_skipActionErrorRevalidation,ht,Fn,Ut,Ke,Ce,de,Or,u,[j.route.id,ge]);Xt.filter(Fe=>Fe.key!==P).forEach(Fe=>{let $n=Fe.key,bo=g.fetchers.get($n),Sl=Jo(void 0,bo?bo.data:void 0);g.fetchers.set($n,Sl),wn($n),Fe.controller&&H.set($n,Fe.controller)}),tt({fetchers:new Map(g.fetchers)});let cn=()=>Xt.forEach(Fe=>wn(Fe.key));ae.signal.addEventListener("abort",cn);let{loaderResults:Lr,fetcherResults:ve}=await nt(g,En,sr,Xt,ir);if(ae.signal.aborted)return;ae.signal.removeEventListener("abort",cn),Ie.delete(P),H.delete(P),Xt.forEach(Fe=>H.delete(Fe.key));let Oe=Zl(Lr);if(Oe)return _n(ir,Oe.result,!1,{preventScrollReset:J});if(Oe=Zl(ve),Oe)return de.add(Oe.key),_n(ir,Oe.result,!1,{preventScrollReset:J});let{loaderData:or,errors:br}=Ay(g,En,Lr,void 0,Xt,ve,dt);if(g.fetchers.has(P)){let Fe=zr(ge.data);g.fetchers.set(P,Fe)}El(Lt),g.navigation.state==="loading"&&Lt>oe?(fe(y,"Expected pending action"),T&&T.abort(),Un(g.navigation.location,{matches:En,loaderData:or,errors:br,fetchers:new Map(g.fetchers)})):(tt({errors:br,loaderData:Py(g.loaderData,or,En,br),fetchers:new Map(g.fetchers)}),ht=!1)}async function No(P,D,b,j,K,ee,ie,J,X){let Q=g.fetchers.get(P);Yt(P,Jo(X,Q?Q.data:void 0),{flushSync:ie});let te=new AbortController,ae=Rs(t.history,b,te.signal);if(ee){let ge=await Bn(K,new URL(ae.url).pathname,ae.signal,P);if(ge.type==="aborted")return;if(ge.type==="error"){un(P,D,ge.error,{flushSync:ie});return}else if(ge.matches)K=ge.matches,j=sa(K,b);else{un(P,D,jt(404,{pathname:b}),{flushSync:ie});return}}H.set(P,te);let he=re,Se=(await xr("loader",g,ae,[j],K,P))[j.route.id];if(Jr(Se)&&(Se=await Dp(Se,ae.signal,!0)||Se),H.get(P)===te&&H.delete(P),!ae.signal.aborted){if(Ke.has(P)){Yt(P,zr(void 0));return}if(zi(Se))if(oe>he){Yt(P,zr(void 0));return}else{de.add(P),await _n(ae,Se,!1,{preventScrollReset:J});return}if(en(Se)){un(P,D,Se.error);return}fe(!Jr(Se),"Unhandled fetcher deferred data"),Yt(P,zr(Se.data))}}async function _n(P,D,b,j){let{submission:K,fetcherSubmission:ee,preventScrollReset:ie,replace:J}=j===void 0?{}:j;D.response.headers.has("X-Remix-Revalidate")&&(ht=!0);let X=D.response.headers.get("Location");fe(X,"Expected a Location header on the redirect Response"),X=Sy(X,new URL(P.url),u);let Q=Ha(g.location,X,{_isRedirect:!0});if(n){let ge=!1;if(D.response.headers.has("X-Remix-Reload-Document"))ge=!0;else if(Np.test(X)){const De=t.history.createURL(X);ge=De.origin!==e.location.origin||vo(De.pathname,u)==null}if(ge){J?e.location.replace(X):e.location.assign(X);return}}T=null;let te=J===!0||D.response.headers.has("X-Remix-Replace")?Je.Replace:Je.Push,{formMethod:ae,formAction:he,formEncType:Ye}=g.navigation;!K&&!ee&&ae&&he&&Ye&&(K=Dy(g.navigation));let Se=K||ee;if(aA.has(D.response.status)&&Se&&Pn(Se.formMethod))await jn(te,Q,{submission:Ue({},Se,{formAction:X}),preventScrollReset:ie||E,enableViewTransition:b?C:void 0});else{let ge=Yh(Q,K);await jn(te,Q,{overrideNavigation:ge,fetcherSubmission:ee,preventScrollReset:ie||E,enableViewTransition:b?C:void 0})}}async function xr(P,D,b,j,K,ee){let ie,J={};try{ie=await mA(c,P,D,b,j,K,ee,s,i)}catch(X){return j.forEach(Q=>{J[Q.route.id]={type:Re.error,error:X}}),J}for(let[X,Q]of Object.entries(ie))if(EA(Q)){let te=Q.result;J[X]={type:Re.redirect,response:vA(te,b,X,K,u,p.v7_relativeSplatPath)}}else J[X]=await yA(Q);return J}async function nt(P,D,b,j,K){let ee=P.matches,ie=xr("loader",P,K,b,D,null),J=Promise.all(j.map(async te=>{if(te.matches&&te.match&&te.controller){let he=(await xr("loader",P,Rs(t.history,te.path,te.controller.signal),[te.match],te.matches,te.key))[te.match.route.id];return{[te.key]:he}}else return Promise.resolve({[te.key]:{type:Re.error,error:jt(404,{pathname:te.path})}})})),X=await ie,Q=(await J).reduce((te,ae)=>Object.assign(te,ae),{});return await Promise.all([SA(D,X,K.signal,ee,P.loaderData),RA(D,Q,j)]),{loaderResults:X,fetcherResults:Q}}function rt(){ht=!0,Fn.push(...Ci()),Ce.forEach((P,D)=>{H.has(D)&&Ut.add(D),wn(D)})}function Yt(P,D,b){b===void 0&&(b={}),g.fetchers.set(P,D),tt({fetchers:new Map(g.fetchers)},{flushSync:(b&&b.flushSync)===!0})}function un(P,D,b,j){j===void 0&&(j={});let K=Mi(g.matches,D);ys(P),tt({errors:{[K.route.id]:b},fetchers:new Map(g.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function Do(P){return Ot.set(P,(Ot.get(P)||0)+1),Ke.has(P)&&Ke.delete(P),g.fetchers.get(P)||lA}function ys(P){let D=g.fetchers.get(P);H.has(P)&&!(D&&D.state==="loading"&&Ie.has(P))&&wn(P),Ce.delete(P),Ie.delete(P),de.delete(P),p.v7_fetcherPersist&&Ke.delete(P),Ut.delete(P),g.fetchers.delete(P)}function Ai(P){let D=(Ot.get(P)||0)-1;D<=0?(Ot.delete(P),Ke.add(P),p.v7_fetcherPersist||ys(P)):Ot.set(P,D),tt({fetchers:new Map(g.fetchers)})}function wn(P){let D=H.get(P);D&&(D.abort(),H.delete(P))}function xo(P){for(let D of P){let b=Do(D),j=zr(b.data);g.fetchers.set(D,j)}}function vs(){let P=[],D=!1;for(let b of de){let j=g.fetchers.get(b);fe(j,"Expected fetcher: "+b),j.state==="loading"&&(de.delete(b),P.push(b),D=!0)}return xo(P),D}function El(P){let D=[];for(let[b,j]of Ie)if(j<P){let K=g.fetchers.get(b);fe(K,"Expected fetcher: "+b),K.state==="loading"&&(wn(b),Ie.delete(b),D.push(b))}return xo(D),D.length>0}function gh(P,D){let b=g.blockers.get(P)||Xo;return ft.get(P)!==D&&ft.set(P,D),b}function _s(P){g.blockers.delete(P),ft.delete(P)}function Pi(P,D){let b=g.blockers.get(P)||Xo;fe(b.state==="unblocked"&&D.state==="blocked"||b.state==="blocked"&&D.state==="blocked"||b.state==="blocked"&&D.state==="proceeding"||b.state==="blocked"&&D.state==="unblocked"||b.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+b.state+" -> "+D.state);let j=new Map(g.blockers);j.set(P,D),tt({blockers:j})}function Oo(P){let{currentLocation:D,nextLocation:b,historyAction:j}=P;if(ft.size===0)return;ft.size>1&&so(!1,"A router only supports one blocker at a time");let K=Array.from(ft.entries()),[ee,ie]=K[K.length-1],J=g.blockers.get(ee);if(!(J&&J.state==="proceeding")&&ie({currentLocation:D,nextLocation:b,historyAction:j}))return ee}function rr(P){let D=jt(404,{pathname:P}),b=l||o,{matches:j,route:K}=ky(b);return Ci(),{notFoundMatches:j,route:K,error:D}}function Ci(P){let D=[];return dt.forEach((b,j)=>{(!P||P(j))&&(b.cancel(),D.push(j),dt.delete(j))}),D}function Lo(P,D,b){if(A=P,x=D,k=b||null,!I&&g.navigation===Qh){I=!0;let j=ki(g.location,g.matches);j!=null&&tt({restoreScrollPosition:j})}return()=>{A=null,x=null,k=null}}function zn(P,D){return k&&k(P,D.map(j=>UR(j,g.loaderData)))||P.key}function Tl(P,D){if(A&&x){let b=zn(P,D);A[b]=x()}}function ki(P,D){if(A){let b=zn(P,D),j=A[b];if(typeof j=="number")return j}return null}function Ni(P,D,b){if(d)if(P){if(Object.keys(P[0].params).length>0)return{active:!0,matches:vu(D,b,u,!0)}}else return{active:!0,matches:vu(D,b,u,!0)||[]};return{active:!1,matches:null}}async function Bn(P,D,b,j){if(!d)return{type:"success",matches:P};let K=P;for(;;){let ee=l==null,ie=l||o,J=s;try{await d({signal:b,path:D,matches:K,fetcherKey:j,patch:(te,ae)=>{b.aborted||Iy(te,ae,ie,J,i)}})}catch(te){return{type:"error",error:te,partialMatches:K}}finally{ee&&!b.aborted&&(o=[...o])}if(b.aborted)return{type:"aborted"};let X=Vi(ie,D,u);if(X)return{type:"success",matches:X};let Q=vu(ie,D,u,!0);if(!Q||K.length===Q.length&&K.every((te,ae)=>te.route.id===Q[ae].route.id))return{type:"success",matches:null};K=Q}}function Il(P){s={},l=Ju(P,i,void 0,s)}function pt(P,D){let b=l==null;Iy(P,D,l||o,s,i),b&&(o=[...o],tt({}))}return $={get basename(){return u},get future(){return p},get state(){return g},get routes(){return o},get window(){return e},initialize:dh,subscribe:ms,enableScrollRestoration:Lo,navigate:gs,fetch:wl,revalidate:Po,createHref:P=>t.history.createHref(P),encodeLocation:P=>t.history.encodeLocation(P),getFetcher:Do,deleteFetcher:Ai,dispose:ps,getBlocker:gh,deleteBlocker:_s,patchRoutes:pt,_internalFetchControllers:H,_internalActiveDeferreds:dt,_internalSetRoutes:Il},$}function hA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function of(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let p of e)if(u.push(p),p.route.id===o){c=p;break}}else u=e,c=e[e.length-1];let d=Uc(i||".",Fc(u,s),vo(t.pathname,n)||t.pathname,l==="path");if(i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c){let p=xp(d.search);if(c.route.index&&!p)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&p){let m=new URLSearchParams(d.search),w=m.getAll("index");m.delete("index"),w.filter(k=>k).forEach(k=>m.append("index",k));let A=m.toString();d.search=A?"?"+A:""}}return r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:vr([n,d.pathname])),Ji(d)}function _y(t,e,n,r){if(!r||!hA(r))return{path:n};if(r.formMethod&&!IA(r.formMethod))return{path:n,error:jt(405,{method:r.formMethod})};let i=()=>({path:n,error:jt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=$w(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Pn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,A)=>{let[k,x]=A;return""+w+k+"="+x+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Pn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}fe(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=lf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=lf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=Ry(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=Ry(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Pn(d.formMethod))return{path:n,submission:d};let p=wi(n);return e&&p.search&&xp(p.search)&&u.append("index",""),p.search="?"+u,{path:Ji(p),submission:d}}function wy(t,e,n){n===void 0&&(n=!1);let r=t.findIndex(i=>i.route.id===e);return r>=0?t.slice(0,n?r+1:r):t}function Ey(t,e,n,r,i,s,o,l,u,c,d,p,m,w,A,k){let x=k?en(k[1])?k[1].error:k[1].data:void 0,I=t.createURL(e.location),_=t.createURL(i),R=n;s&&e.errors?R=wy(n,Object.keys(e.errors)[0],!0):k&&en(k[1])&&(R=wy(n,k[0]));let L=k?k[1].statusCode:void 0,U=o&&L&&L>=400,$=R.filter((y,E)=>{let{route:T}=y;if(T.lazy)return!0;if(T.loader==null)return!1;if(s)return af(T,e.loaderData,e.errors);if(dA(e.loaderData,e.matches[E],y)||u.some(S=>S===y.route.id))return!0;let C=e.matches[E],N=y;return Ty(y,Ue({currentUrl:I,currentParams:C.params,nextUrl:_,nextParams:N.params},r,{actionResult:x,actionStatus:L,defaultShouldRevalidate:U?!1:l||I.pathname+I.search===_.pathname+_.search||I.search!==_.search||zw(C,N)}))}),g=[];return p.forEach((y,E)=>{if(s||!n.some(ke=>ke.route.id===y.routeId)||d.has(E))return;let T=Vi(w,y.path,A);if(!T){g.push({key:E,routeId:y.routeId,path:y.path,matches:null,match:null,controller:null});return}let C=e.fetchers.get(E),N=sa(T,y.path),S=!1;m.has(E)?S=!1:c.has(E)?(c.delete(E),S=!0):C&&C.state!=="idle"&&C.data===void 0?S=l:S=Ty(N,Ue({currentUrl:I,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:x,actionStatus:L,defaultShouldRevalidate:U?!1:l})),S&&g.push({key:E,routeId:y.routeId,path:y.path,matches:T,match:N,controller:new AbortController})}),[$,g]}function af(t,e,n){if(t.lazy)return!0;if(!t.loader)return!1;let r=e!=null&&e[t.id]!==void 0,i=n!=null&&n[t.id]!==void 0;return!r&&i?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!r&&!i}function dA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function zw(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Ty(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}function Iy(t,e,n,r,i){var s;let o;if(t){let c=r[t];fe(c,"No route found to patch children into: routeId = "+t),c.children||(c.children=[]),o=c.children}else o=n;let l=e.filter(c=>!o.some(d=>Bw(c,d))),u=Ju(l,i,[t||"_","patch",String(((s=o)==null?void 0:s.length)||"0")],r);o.push(...u)}function Bw(t,e){return"id"in t&&"id"in e&&t.id===e.id?!0:t.index===e.index&&t.path===e.path&&t.caseSensitive===e.caseSensitive?(!t.children||t.children.length===0)&&(!e.children||e.children.length===0)?!0:t.children.every((n,r)=>{var i;return(i=e.children)==null?void 0:i.some(s=>Bw(n,s))}):!1}async function fA(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];fe(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";so(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!MR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ue({},e(i),{lazy:void 0}))}async function pA(t){let{matches:e}=t,n=e.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,s,o)=>Object.assign(i,{[n[o].route.id]:s}),{})}async function mA(t,e,n,r,i,s,o,l,u,c){let d=s.map(w=>w.route.lazy?fA(w.route,u,l):void 0),p=s.map((w,A)=>{let k=d[A],x=i.some(_=>_.route.id===w.route.id);return Ue({},w,{shouldLoad:x,resolve:async _=>(_&&r.method==="GET"&&(w.route.lazy||w.route.loader)&&(x=!0),x?gA(e,r,w,k,_,c):Promise.resolve({type:Re.data,result:void 0}))})}),m=await t({matches:p,request:r,params:s[0].params,fetcherKey:o,context:c});try{await Promise.all(d)}catch{}return m}async function gA(t,e,n,r,i,s){let o,l,u=c=>{let d,p=new Promise((A,k)=>d=k);l=()=>d(),e.signal.addEventListener("abort",l);let m=A=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:s},...A!==void 0?[A]:[]),w=(async()=>{try{return{type:"data",result:await(i?i(k=>m(k)):m())}}catch(A){return{type:"error",result:A}}})();return Promise.race([w,p])};try{let c=n.route[t];if(r)if(c){let d,[p]=await Promise.all([u(c).catch(m=>{d=m}),r]);if(d!==void 0)throw d;o=p}else if(await r,c=n.route[t],c)o=await u(c);else if(t==="action"){let d=new URL(e.url),p=d.pathname+d.search;throw jt(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:Re.data,result:void 0};else if(c)o=await u(c);else{let d=new URL(e.url),p=d.pathname+d.search;throw jt(404,{pathname:p})}fe(o.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:Re.error,result:c}}finally{l&&e.signal.removeEventListener("abort",l)}return o}async function yA(t){let{result:e,type:n}=t;if(Hw(e)){let p;try{let m=e.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?e.body==null?p=null:p=await e.json():p=await e.text()}catch(m){return{type:Re.error,error:m}}return n===Re.error?{type:Re.error,error:new Zu(e.status,e.statusText,p),statusCode:e.status,headers:e.headers}:{type:Re.data,data:p,statusCode:e.status,headers:e.headers}}if(n===Re.error){if(Ny(e)){var r,i;if(e.data instanceof Error){var s,o;return{type:Re.error,error:e.data,statusCode:(s=e.init)==null?void 0:s.status,headers:(o=e.init)!=null&&o.headers?new Headers(e.init.headers):void 0}}return{type:Re.error,error:new Zu(((r=e.init)==null?void 0:r.status)||500,void 0,e.data),statusCode:Wa(e)?e.status:void 0,headers:(i=e.init)!=null&&i.headers?new Headers(e.init.headers):void 0}}return{type:Re.error,error:e,statusCode:Wa(e)?e.status:void 0}}if(TA(e)){var l,u;return{type:Re.deferred,deferredData:e,statusCode:(l=e.init)==null?void 0:l.status,headers:((u=e.init)==null?void 0:u.headers)&&new Headers(e.init.headers)}}if(Ny(e)){var c,d;return{type:Re.data,data:e.data,statusCode:(c=e.init)==null?void 0:c.status,headers:(d=e.init)!=null&&d.headers?new Headers(e.init.headers):void 0}}return{type:Re.data,data:e}}function vA(t,e,n,r,i,s){let o=t.headers.get("Location");if(fe(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Np.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=of(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function Sy(t,e,n){if(Np.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=vo(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Rs(t,e,n,r){let i=t.createURL($w(e)).toString(),s={signal:n};if(r&&Pn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=lf(r.formData):s.body=r.formData}return new Request(i,s)}function lf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Ry(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function _A(t,e,n,r,i){let s={},o=null,l,u=!1,c={},d=n&&en(n[1])?n[1].error:void 0;return t.forEach(p=>{if(!(p.route.id in e))return;let m=p.route.id,w=e[m];if(fe(!zi(w),"Cannot handle redirect results in processLoaderData"),en(w)){let A=w.error;d!==void 0&&(A=d,d=void 0),o=o||{};{let k=Mi(t,m);o[k.route.id]==null&&(o[k.route.id]=A)}s[m]=void 0,u||(u=!0,l=Wa(w.error)?w.error.status:500),w.headers&&(c[m]=w.headers)}else Jr(w)?(r.set(m,w.deferredData),s[m]=w.deferredData.data,w.statusCode!=null&&w.statusCode!==200&&!u&&(l=w.statusCode),w.headers&&(c[m]=w.headers)):(s[m]=w.data,w.statusCode&&w.statusCode!==200&&!u&&(l=w.statusCode),w.headers&&(c[m]=w.headers))}),d!==void 0&&n&&(o={[n[0]]:d},s[n[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:c}}function Ay(t,e,n,r,i,s,o){let{loaderData:l,errors:u}=_A(e,n,r,o);return i.forEach(c=>{let{key:d,match:p,controller:m}=c,w=s[d];if(fe(w,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(en(w)){let A=Mi(t.matches,p==null?void 0:p.route.id);u&&u[A.route.id]||(u=Ue({},u,{[A.route.id]:w.error})),t.fetchers.delete(d)}else if(zi(w))fe(!1,"Unhandled fetcher revalidation redirect");else if(Jr(w))fe(!1,"Unhandled fetcher deferred data");else{let A=zr(w.data);t.fetchers.set(d,A)}}),{loaderData:l,errors:u}}function Py(t,e,n,r){let i=Ue({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Cy(t){return t?en(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Mi(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function ky(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function jt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Zu(t||500,l,new Error(u),!0)}function Zl(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[r,i]=e[n];if(zi(i))return{key:r,result:i}}}function $w(t){let e=typeof t=="string"?wi(t):t;return Ji(Ue({},e,{hash:""}))}function wA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function EA(t){return Hw(t.result)&&oA.has(t.result.status)}function Jr(t){return t.type===Re.deferred}function en(t){return t.type===Re.error}function zi(t){return(t&&t.type)===Re.redirect}function Ny(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function TA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function Hw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function IA(t){return sA.has(t.toLowerCase())}function Pn(t){return rA.has(t.toLowerCase())}async function SA(t,e,n,r,i){let s=Object.entries(e);for(let o=0;o<s.length;o++){let[l,u]=s[o],c=t.find(m=>(m==null?void 0:m.route.id)===l);if(!c)continue;let d=r.find(m=>m.route.id===c.route.id),p=d!=null&&!zw(d,c)&&(i&&i[c.route.id])!==void 0;Jr(u)&&p&&await Dp(u,n,!1).then(m=>{m&&(e[l]=m)})}}async function RA(t,e,n){for(let r=0;r<n.length;r++){let{key:i,routeId:s,controller:o}=n[r],l=e[i];t.find(c=>(c==null?void 0:c.route.id)===s)&&Jr(l)&&(fe(o,"Expected an AbortController for revalidating fetcher deferred result"),await Dp(l,o.signal,!0).then(c=>{c&&(e[i]=c)}))}}async function Dp(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Re.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Re.error,error:i}}return{type:Re.data,data:t.deferredData.data}}}function xp(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function sa(t,e){let n=typeof e=="string"?wi(e).search:e.search;if(t[t.length-1].route.index&&xp(n||""))return t[t.length-1];let r=Fw(t);return r[r.length-1]}function Dy(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Yh(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function AA(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Jo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function PA(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function zr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function CA(t,e){try{let n=t.sessionStorage.getItem(jw);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function kA(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(jw,JSON.stringify(n))}catch(r){so(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ec(){return ec=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ec.apply(this,arguments)}const jc=M.createContext(null),Ww=M.createContext(null),Ei=M.createContext(null),Op=M.createContext(null),tr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),qw=M.createContext(null);function NA(t,e){let{relative:n}=e===void 0?{}:e;_o()||fe(!1);let{basename:r,navigator:i}=M.useContext(Ei),{hash:s,pathname:o,search:l}=Gw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:vr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function _o(){return M.useContext(Op)!=null}function Ti(){return _o()||fe(!1),M.useContext(Op).location}function Kw(t){M.useContext(Ei).static||M.useLayoutEffect(t)}function Lp(){let{isDataRoute:t}=M.useContext(tr);return t?HA():DA()}function DA(){_o()||fe(!1);let t=M.useContext(jc),{basename:e,future:n,navigator:r}=M.useContext(Ei),{matches:i}=M.useContext(tr),{pathname:s}=Ti(),o=JSON.stringify(Fc(i,n.v7_relativeSplatPath)),l=M.useRef(!1);return Kw(()=>{l.current=!0}),M.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Uc(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:vr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}const xA=M.createContext(null);function OA(t){let e=M.useContext(tr).outlet;return e&&M.createElement(xA.Provider,{value:t},e)}function Pb(){let{matches:t}=M.useContext(tr),e=t[t.length-1];return e?e.params:{}}function Gw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Ei),{matches:i}=M.useContext(tr),{pathname:s}=Ti(),o=JSON.stringify(Fc(i,r.v7_relativeSplatPath));return M.useMemo(()=>Uc(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function LA(t,e,n,r){_o()||fe(!1);let{navigator:i,static:s}=M.useContext(Ei),{matches:o}=M.useContext(tr),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Ti(),p;p=d;let m=p.pathname||"/",w=m;if(c!=="/"){let x=c.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let A=!s&&n&&n.matches&&n.matches.length>0?n.matches:Vi(t,{pathname:w});return UA(A&&A.map(x=>Object.assign({},x,{params:Object.assign({},u,x.params),pathname:vr([c,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:vr([c,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,r)}function bA(){let t=$A(),e=Wa(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const VA=M.createElement(bA,null);class MA extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(tr.Provider,{value:this.props.routeContext},M.createElement(qw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function FA(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(jc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(tr.Provider,{value:e},r)}function UA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||fe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:w}=n,A=p.route.loader&&m[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let w,A=!1,k=null,x=null;n&&(w=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||VA,u&&(c<0&&m===0?(WA("route-fallback"),A=!0,x=null):c===m&&(A=!0,x=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),_=()=>{let R;return w?R=k:A?R=x:p.route.Component?R=M.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=d,M.createElement(FA,{match:p,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:R})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?M.createElement(MA,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:_(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):_()},null)}var Qw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Qw||{}),Yw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Yw||{});function jA(t){let e=M.useContext(jc);return e||fe(!1),e}function zA(t){let e=M.useContext(Ww);return e||fe(!1),e}function BA(t){let e=M.useContext(tr);return e||fe(!1),e}function Xw(t){let e=BA(),n=e.matches[e.matches.length-1];return n.route.id||fe(!1),n.route.id}function $A(){var t;let e=M.useContext(qw),n=zA(),r=Xw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function HA(){let{router:t}=jA(Qw.UseNavigateStable),e=Xw(Yw.UseNavigateStable),n=M.useRef(!1);return Kw(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ec({fromRouteId:e},s)))},[t,e])}const xy={};function WA(t,e,n){xy[t]||(xy[t]=!0)}function qA(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function KA(t){let{to:e,replace:n,state:r,relative:i}=t;_o()||fe(!1);let{future:s,static:o}=M.useContext(Ei),{matches:l}=M.useContext(tr),{pathname:u}=Ti(),c=Lp(),d=Uc(e,Fc(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return M.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function GA(t){return OA(t.context)}function QA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Je.Pop,navigator:s,static:o=!1,future:l}=t;_o()&&fe(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:s,static:o,future:ec({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=wi(r));let{pathname:d="/",search:p="",hash:m="",state:w=null,key:A="default"}=r,k=M.useMemo(()=>{let x=vo(d,u);return x==null?null:{location:{pathname:x,search:p,hash:m,state:w,key:A},navigationType:i}},[u,d,p,m,w,A,i]);return k==null?null:M.createElement(Ei.Provider,{value:c},M.createElement(Op.Provider,{children:n,value:k}))}new Promise(()=>{});function YA(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:M.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:M.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:M.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qa.apply(this,arguments)}function XA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function JA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ZA(t,e){return t.button===0&&(!e||e==="_self")&&!JA(t)}function uf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function eP(t,e){let n=uf(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const tP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],nP="6";try{window.__reactRouterVersion=nP}catch{}function rP(t,e){return cA({basename:void 0,future:qa({},void 0,{v7_prependBasename:!0}),history:LR({window:void 0}),hydrationData:iP(),routes:t,mapRouteProperties:YA,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function iP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=qa({},e,{errors:sP(e.errors)})),e}function sP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Zu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const oP=M.createContext({isTransitioning:!1}),aP=M.createContext(new Map),lP="startTransition",Oy=ES[lP],uP="flushSync",Ly=OR[uP];function cP(t){Oy?Oy(t):t()}function Zo(t){Ly?Ly(t):t()}let hP=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function dP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=M.useState(n.state),[o,l]=M.useState(),[u,c]=M.useState({isTransitioning:!1}),[d,p]=M.useState(),[m,w]=M.useState(),[A,k]=M.useState(),x=M.useRef(new Map),{v7_startTransition:I}=r||{},_=M.useCallback(y=>{I?cP(y):y()},[I]),R=M.useCallback((y,E)=>{let{deletedFetchers:T,flushSync:C,viewTransitionOpts:N}=E;y.fetchers.forEach((ke,ht)=>{ke.data!==void 0&&x.current.set(ht,ke.data)}),T.forEach(ke=>x.current.delete(ke));let S=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!N||S){C?Zo(()=>s(y)):_(()=>s(y));return}if(C){Zo(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let ke=n.window.document.startViewTransition(()=>{Zo(()=>s(y))});ke.finished.finally(()=>{Zo(()=>{p(void 0),w(void 0),l(void 0),c({isTransitioning:!1})})}),Zo(()=>w(ke));return}m?(d&&d.resolve(),m.skipTransition(),k({state:y,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(l(y),c({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,m,d,x,_]);M.useLayoutEffect(()=>n.subscribe(R),[n,R]),M.useEffect(()=>{u.isTransitioning&&!u.flushSync&&p(new hP)},[u]),M.useEffect(()=>{if(d&&o&&n.window){let y=o,E=d.promise,T=n.window.document.startViewTransition(async()=>{_(()=>s(y)),await E});T.finished.finally(()=>{p(void 0),w(void 0),l(void 0),c({isTransitioning:!1})}),w(T)}},[_,o,d,n.window]),M.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),M.useEffect(()=>{!u.isTransitioning&&A&&(l(A.state),c({isTransitioning:!0,flushSync:!1,currentLocation:A.currentLocation,nextLocation:A.nextLocation}),k(void 0))},[u.isTransitioning,A]),M.useEffect(()=>{},[]);let L=M.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:y=>n.navigate(y),push:(y,E,T)=>n.navigate(y,{state:E,preventScrollReset:T==null?void 0:T.preventScrollReset}),replace:(y,E,T)=>n.navigate(y,{replace:!0,state:E,preventScrollReset:T==null?void 0:T.preventScrollReset})}),[n]),U=n.basename||"/",$=M.useMemo(()=>({router:n,navigator:L,static:!1,basename:U}),[n,L,U]),g=M.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return M.useEffect(()=>qA(r,n.future),[r,n.future]),M.createElement(M.Fragment,null,M.createElement(jc.Provider,{value:$},M.createElement(Ww.Provider,{value:i},M.createElement(aP.Provider,{value:x.current},M.createElement(oP.Provider,{value:u},M.createElement(QA,{basename:U,location:i.location,navigationType:i.historyAction,navigator:L,future:g},i.initialized||n.future.v7_partialHydration?M.createElement(fP,{routes:n.routes,future:n.future,state:i}):e))))),null)}const fP=M.memo(pP);function pP(t){let{routes:e,future:n,state:r}=t;return LA(e,void 0,r,n)}const mP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ur=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=XA(e,tP),{basename:w}=M.useContext(Ei),A,k=!1;if(typeof c=="string"&&gP.test(c)&&(A=c,mP))try{let R=new URL(window.location.href),L=c.startsWith("//")?new URL(R.protocol+c):new URL(c),U=vo(L.pathname,w);L.origin===R.origin&&U!=null?c=U+L.search+L.hash:k=!0}catch{}let x=NA(c,{relative:i}),I=yP(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function _(R){r&&r(R),R.defaultPrevented||I(R)}return M.createElement("a",qa({},m,{href:A||x,onClick:k||s?r:_,ref:n,target:u}))});var by;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(by||(by={}));var Vy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vy||(Vy={}));function yP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Lp(),c=Ti(),d=Gw(t,{relative:o});return M.useCallback(p=>{if(ZA(p,n)){p.preventDefault();let m=r!==void 0?r:Ji(c)===Ji(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function kb(t){let e=M.useRef(uf(t)),n=M.useRef(!1),r=Ti(),i=M.useMemo(()=>eP(r.search,n.current?null:e.current),[r.search]),s=Lp(),o=M.useCallback((l,u)=>{const c=uf(typeof l=="function"?l(i):l);n.current=!0,s("?"+c,u)},[s,i]);return[i,o]}const vP="modulepreload",_P=function(t){return"/"+t},My={},Sr=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=_P(u),u in My)return;My[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":vP,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((m,w)=>{p.addEventListener("load",m),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var Jw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fy=Nn.createContext&&Nn.createContext(Jw),wP=["attr","size","title"];function EP(t,e){if(t==null)return{};var n=TP(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function TP(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function tc(){return tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tc.apply(this,arguments)}function Uy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function nc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Uy(Object(n),!0).forEach(function(r){IP(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Uy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function IP(t,e,n){return e=SP(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function SP(t){var e=RP(t,"string");return typeof e=="symbol"?e:e+""}function RP(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Zw(t){return t&&t.map((e,n)=>Nn.createElement(e.tag,nc({key:n},e.attr),Zw(e.child)))}function Dr(t){return e=>Nn.createElement(AP,tc({attr:nc({},t.attr)},e),Zw(t.child))}function AP(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=EP(t,wP),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),Nn.createElement("svg",tc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:nc(nc({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Nn.createElement("title",null,s),t.children)};return Fy!==void 0?Nn.createElement(Fy.Consumer,null,n=>e(n)):e(Jw)}function PP(t){return Dr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}function jy(t){return Dr({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(t)}function zy(t){return Dr({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(t)}function Nb(t){return Dr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"},child:[]}]})(t)}function CP(t){return Dr({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function Db(t){return Dr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"},child:[]}]})(t)}function xb(t){return Dr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(t)}function By(t){return Dr({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224l0 32 0 160c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-88.2c9.9 6.6 20.6 12 32 16.1l0 24.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16.9c5.3 .6 10.6 .9 16 .9s10.7-.3 16-.9l0 16.9c0 8.8 7.2 16 16 16s16-7.2 16-16l0-24.2c11.4-4 22.1-9.4 32-16.1l0 88.2c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-160 32 32 0 49.5c0 9.5 2.8 18.7 8.1 26.6L530 427c8.8 13.1 23.5 21 39.3 21c22.5 0 41.9-15.9 46.3-38l20.3-101.6c2.6-13-.3-26.5-8-37.3l-3.9-5.5 0-81.6c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 14.4-52.9-74.1C496 86.5 452.4 64 405.9 64L272 64l-16 0-64 0-48 0C77.7 64 24 117.7 24 184l0 54C9.4 249.8 0 267.8 0 288l0 17.6c0 8 6.4 14.4 14.4 14.4C46.2 320 72 294.2 72 262.4l0-6.4 0-32 0-40c0-24.3 12.1-45.8 30.5-58.9C98.3 135.9 96 147.7 96 160l0 64zM560 336a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM166.6 166.6c-4.2-4.2-6.6-10-6.6-16c0-12.5 10.1-22.6 22.6-22.6l178.7 0c12.5 0 22.6 10.1 22.6 22.6c0 6-2.4 11.8-6.6 16l-23.4 23.4C332.2 211.8 302.7 224 272 224s-60.2-12.2-81.9-33.9l-23.4-23.4z"},child:[]}]})(t)}function $y(t){return Dr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4l-88.8 0L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57 0-88.8c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"},child:[]}]})(t)}const kP=()=>{const t=Ti(),[e,n]=M.useState(!1),r=i=>t.pathname===i;return W.jsxs("div",{className:"min-h-screen bg-gray-100",children:[W.jsx("header",{className:"bg-white shadow",children:W.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:W.jsx("div",{className:"flex justify-between h-16",children:W.jsxs("div",{className:"flex items-center",children:[W.jsx("button",{onClick:()=>n(!e),className:"md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500",children:e?W.jsx(CP,{className:"h-6 w-6"}):W.jsx(PP,{className:"h-6 w-6"})}),W.jsx("h1",{className:"ml-4 text-2xl font-bold text-gray-900",children:"Meu Nelore"})]})})})}),W.jsx("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:W.jsx("div",{className:"px-4 py-6 sm:px-0",children:W.jsxs("div",{className:"flex flex-col md:flex-row",children:[e&&W.jsx("div",{className:"md:hidden mb-4",children:W.jsxs("nav",{className:"bg-white shadow rounded-lg p-4",children:[W.jsxs(Ur,{to:"/",className:`flex items-center px-4 py-2 text-base font-medium rounded-md ${r("/")?"bg-gray-100 text-gray-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,onClick:()=>n(!1),children:[W.jsx(zy,{className:"mr-4 h-6 w-6"}),"Dashboard"]}),W.jsxs(Ur,{to:"/animais",className:`mt-1 flex items-center px-4 py-2 text-base font-medium rounded-md ${r("/animais")?"bg-gray-100 text-gray-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,onClick:()=>n(!1),children:[W.jsx(By,{className:"h-5 w-5 mr-2"}),"Animais"]}),W.jsxs(Ur,{to:"/incidentes",className:`mt-1 flex items-center px-4 py-2 text-base font-medium rounded-md ${r("/incidentes")?"bg-gray-100 text-gray-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,onClick:()=>n(!1),children:[W.jsx(jy,{className:"mr-4 h-6 w-6"}),"Incidentes"]}),W.jsxs(Ur,{to:"/vacinas",className:`mt-1 flex items-center px-4 py-2 text-base font-medium rounded-md ${r("/vacinas")?"bg-gray-100 text-gray-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,onClick:()=>n(!1),children:[W.jsx($y,{className:"h-5 w-5 mr-2"}),"Vacinas"]})]})}),W.jsx("div",{className:"hidden md:block w-64 bg-white shadow rounded-lg mr-6",children:W.jsxs("nav",{className:"mt-5 px-2",children:[W.jsxs(Ur,{to:"/",className:`group flex items-center px-2 py-2 text-base font-medium rounded-md ${r("/")?"bg-gray-100 text-gray-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,children:[W.jsx(zy,{className:"mr-4 h-6 w-6"}),"Dashboard"]}),W.jsxs(Ur,{to:"/animais",className:`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md ${r("/animais")?"bg-gray-100 text-gray-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,children:[W.jsx(By,{className:"h-5 w-5 mr-2"}),"Animais"]}),W.jsxs(Ur,{to:"/incidentes",className:`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md ${r("/incidentes")?"bg-gray-100 text-gray-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,children:[W.jsx(jy,{className:"mr-4 h-6 w-6"}),"Incidentes"]}),W.jsxs(Ur,{to:"/vacinas",className:`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md ${r("/vacinas")?"bg-gray-100 text-gray-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,children:[W.jsx($y,{className:"h-5 w-5 mr-2"}),"Vacinas"]})]})}),W.jsx("div",{className:"flex-1",children:W.jsx(GA,{})})]})})})]})},Sn=()=>W.jsx("div",{className:"flex items-center justify-center min-h-screen",children:W.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"})});function NP({children:t}){const e=localStorage.getItem("isLoggedIn")==="true",n=Ti();return e?t:W.jsx(KA,{to:"/login",state:{from:n},replace:!0})}var Hy={};/**
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
 */const eE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new xP;const m=s<<2|l>>4;if(r.push(m),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OP=function(t){const e=eE(t);return tE.encodeByteArray(e,!0)},rc=function(t){return OP(t).replace(/\./g,"")},nE=function(t){try{return tE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bP=()=>LP().__FIREBASE_DEFAULTS__,VP=()=>{if(typeof process>"u"||typeof Hy>"u")return;const t=Hy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nE(t[1]);return e&&JSON.parse(e)},zc=()=>{try{return bP()||VP()||MP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rE=t=>{var e,n;return(n=(e=zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iE=t=>{const e=rE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sE=()=>{var t;return(t=zc())===null||t===void 0?void 0:t.config},oE=t=>{var e;return(e=zc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class FP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function aE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rc(JSON.stringify(n)),rc(JSON.stringify(o)),""].join(".")}/**
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function jP(){var t;const e=(t=zc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $P(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HP(){return!jP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uE(){try{return typeof indexedDB=="object"}catch{return!1}}function cE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function WP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qP="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qP,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?KP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new vn(i,l,r)}}function KP(t,e){return t.replace(GP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const GP=/\{\$([^}]+)}/g;function QP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ka(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wy(s)&&Wy(o)){if(!Ka(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wy(t){return t!==null&&typeof t=="object"}/**
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
 */function ul(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function aa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function YP(t,e){const n=new XP(t,e);return n.subscribe.bind(n)}class XP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xh),i.error===void 0&&(i.error=Xh),i.complete===void 0&&(i.complete=Xh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xh(){}/**
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
 */const ZP=1e3,eC=2,tC=4*60*60*1e3,nC=.5;function qy(t,e=ZP,n=eC){const r=e*Math.pow(n,t),i=Math.round(nC*r*(Math.random()-.5)*2);return Math.min(tC,r+i)}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bi="[DEFAULT]";/**
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
 */class rC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sC(e))try{this.getOrInitializeService({instanceIdentifier:bi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bi){return this.instances.has(e)}getOptions(e=bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bi){return this.component?this.component.multipleInstances?e:bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iC(t){return t===bi?void 0:t}function sC(t){return t.instantiationMode==="EAGER"}/**
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
 */class oC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const aC={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},lC=ye.INFO,uC={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},cC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bc{constructor(e){this.name=e,this._logLevel=lC,this._logHandler=cC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const hC=(t,e)=>e.some(n=>t instanceof n);let Ky,Gy;function dC(){return Ky||(Ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fC(){return Gy||(Gy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hE=new WeakMap,cf=new WeakMap,dE=new WeakMap,Jh=new WeakMap,bp=new WeakMap;function pC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(li(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hE.set(n,t)}).catch(()=>{}),bp.set(e,t),e}function mC(t){if(cf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cf.set(t,e)}let hf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return li(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gC(t){hf=t(hf)}function yC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zh(this),e,...n);return dE.set(r,e.sort?e.sort():[e]),li(r)}:fC().includes(t)?function(...e){return t.apply(Zh(this),e),li(hE.get(this))}:function(...e){return li(t.apply(Zh(this),e))}}function vC(t){return typeof t=="function"?yC(t):(t instanceof IDBTransaction&&mC(t),hC(t,dC())?new Proxy(t,hf):t)}function li(t){if(t instanceof IDBRequest)return pC(t);if(Jh.has(t))return Jh.get(t);const e=vC(t);return e!==t&&(Jh.set(t,e),bp.set(e,t)),e}const Zh=t=>bp.get(t);function fE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=li(o);return r&&o.addEventListener("upgradeneeded",u=>{r(li(o.result),u.oldVersion,u.newVersion,li(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const _C=["get","getKey","getAll","getAllKeys","count"],wC=["put","add","delete","clear"],ed=new Map;function Qy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ed.get(e))return ed.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_C.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return ed.set(e,s),s}gC(t=>({...t,get:(e,n,r)=>Qy(e,n)||t.get(e,n,r),has:(e,n)=>!!Qy(e,n)||t.has(e,n)}));/**
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
 */class EC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const df="@firebase/app",Yy="0.10.13";/**
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
 */const Rr=new Bc("@firebase/app"),IC="@firebase/app-compat",SC="@firebase/analytics-compat",RC="@firebase/analytics",AC="@firebase/app-check-compat",PC="@firebase/app-check",CC="@firebase/auth",kC="@firebase/auth-compat",NC="@firebase/database",DC="@firebase/data-connect",xC="@firebase/database-compat",OC="@firebase/functions",LC="@firebase/functions-compat",bC="@firebase/installations",VC="@firebase/installations-compat",MC="@firebase/messaging",FC="@firebase/messaging-compat",UC="@firebase/performance",jC="@firebase/performance-compat",zC="@firebase/remote-config",BC="@firebase/remote-config-compat",$C="@firebase/storage",HC="@firebase/storage-compat",WC="@firebase/firestore",qC="@firebase/vertexai-preview",KC="@firebase/firestore-compat",GC="firebase",QC="10.14.1";/**
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
 */const ff="[DEFAULT]",YC={[df]:"fire-core",[IC]:"fire-core-compat",[RC]:"fire-analytics",[SC]:"fire-analytics-compat",[PC]:"fire-app-check",[AC]:"fire-app-check-compat",[CC]:"fire-auth",[kC]:"fire-auth-compat",[NC]:"fire-rtdb",[DC]:"fire-data-connect",[xC]:"fire-rtdb-compat",[OC]:"fire-fn",[LC]:"fire-fn-compat",[bC]:"fire-iid",[VC]:"fire-iid-compat",[MC]:"fire-fcm",[FC]:"fire-fcm-compat",[UC]:"fire-perf",[jC]:"fire-perf-compat",[zC]:"fire-rc",[BC]:"fire-rc-compat",[$C]:"fire-gcs",[HC]:"fire-gcs-compat",[WC]:"fire-fst",[KC]:"fire-fst-compat",[qC]:"fire-vertex","fire-js":"fire-js",[GC]:"fire-js-all"};/**
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
 */const ic=new Map,XC=new Map,pf=new Map;function Xy(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bn(t){const e=t.name;if(pf.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;pf.set(e,t);for(const n of ic.values())Xy(n,t);for(const n of XC.values())Xy(n,t);return!0}function Ii(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fr(t){return t.settings!==void 0}/**
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
 */const JC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ui=new as("app","Firebase",JC);/**
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
 */class ZC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ui.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=QC;function pE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ff,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ui.create("bad-app-name",{appName:String(i)});if(n||(n=sE()),!n)throw ui.create("no-options");const s=ic.get(i);if(s){if(Ka(n,s.options)&&Ka(r,s.config))return s;throw ui.create("duplicate-app",{appName:i})}const o=new oC(i);for(const u of pf.values())o.addComponent(u);const l=new ZC(n,r,o);return ic.set(i,l),l}function $c(t=ff){const e=ic.get(t);if(!e&&t===ff&&sE())return pE();if(!e)throw ui.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let i=(r=YC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(l.join(" "));return}bn(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ek="firebase-heartbeat-database",tk=1,Ga="firebase-heartbeat-store";let td=null;function mE(){return td||(td=fE(ek,tk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ga)}catch(n){console.warn(n)}}}}).catch(t=>{throw ui.create("idb-open",{originalErrorMessage:t.message})})),td}async function nk(t){try{const n=(await mE()).transaction(Ga),r=await n.objectStore(Ga).get(gE(t));return await n.done,r}catch(e){if(e instanceof vn)Rr.warn(e.message);else{const n=ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function Jy(t,e){try{const r=(await mE()).transaction(Ga,"readwrite");await r.objectStore(Ga).put(e,gE(t)),await r.done}catch(n){if(n instanceof vn)Rr.warn(n.message);else{const r=ui.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function gE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rk=1024,ik=30*24*60*60*1e3;class sk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ak(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ik}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zy(),{heartbeatsToSend:r,unsentEntries:i}=ok(this._heartbeatsCache.heartbeats),s=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rr.warn(n),""}}}function Zy(){return new Date().toISOString().substring(0,10)}function ok(t,e=rk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ev(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ev(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ak{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uE()?cE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ev(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lk(t){bn(new yn("platform-logger",e=>new EC(e),"PRIVATE")),bn(new yn("heartbeat",e=>new sk(e),"PRIVATE")),Kt(df,Yy,t),Kt(df,Yy,"esm2017"),Kt("fire-js","")}lk("");function Vp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uk=yE,vE=new as("auth","Firebase",yE());/**
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
 */const sc=new Bc("@firebase/auth");function ck(t,...e){sc.logLevel<=ye.WARN&&sc.warn(`Auth (${ls}): ${t}`,...e)}function _u(t,...e){sc.logLevel<=ye.ERROR&&sc.error(`Auth (${ls}): ${t}`,...e)}/**
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
 */function Vn(t,...e){throw Mp(t,...e)}function Qn(t,...e){return Mp(t,...e)}function _E(t,e,n){const r=Object.assign(Object.assign({},uk()),{[e]:n});return new as("auth","Firebase",r).create(e,{appName:t.name})}function ci(t){return _E(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vE.create(t,...e)}function se(t,e,...n){if(!t)throw Mp(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _u(e),new Error(e)}function Ar(t,e){t||pr(e)}/**
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
 */function mf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hk(){return tv()==="http:"||tv()==="https:"}function tv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hk()||lE()||"connection"in navigator)?navigator.onLine:!0}function fk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ar(n>e,"Short delay should be less than long delay!"),this.isMobile=UP()||BP()}get(){return dk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fp(t,e){Ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mk=new cl(3e4,6e4);function us(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Si(t,e,n,r,i={}){return EE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ul(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return zP()||(c.referrerPolicy="no-referrer"),wE.fetch()(TE(t,t.config.apiHost,n,l),c)})}async function EE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pk),e);try{const i=new yk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw eu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw eu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw eu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw eu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _E(t,d,c);Vn(t,d)}}catch(i){if(i instanceof vn)throw i;Vn(t,"network-request-failed",{message:String(i)})}}async function Hc(t,e,n,r,i={}){const s=await Si(t,e,n,r,i);return"mfaPendingCredential"in s&&Vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function TE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fp(t.config,i):`${t.config.apiScheme}://${i}`}function gk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qn(this.auth,"network-request-failed")),mk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qn(t,e,r);return i.customData._tokenResponse=n,i}function nv(t){return t!==void 0&&t.enterprise!==void 0}class vk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _k(t,e){return Si(t,"GET","/v2/recaptchaConfig",us(t,e))}/**
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
 */async function wk(t,e){return Si(t,"POST","/v1/accounts:delete",e)}async function IE(t,e){return Si(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ea(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ek(t,e=!1){const n=at(t),r=await n.getIdToken(e),i=Up(r);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ea(nd(i.auth_time)),issuedAtTime:Ea(nd(i.iat)),expirationTime:Ea(nd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nd(t){return Number(t)*1e3}function Up(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _u("JWT malformed, contained fewer than 3 sections"),null;try{const i=nE(n);return i?JSON.parse(i):(_u("Failed to decode base64 JWT payload"),null)}catch(i){return _u("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rv(t){const e=Up(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&Tk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Tk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ik{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ea(this.lastLoginAt),this.creationTime=Ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Qa(t,IE(n,{idToken:r}));se(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?SE(s.providerUserInfo):[],l=Rk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new gf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Sk(t){const e=at(t);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SE(t){return t.map(e=>{var{providerId:n}=e,r=Vp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ak(t,e){const n=await EE(t,{},async()=>{const r=ul({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=TE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",wE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pk(t,e){return Si(t,"POST","/v2/accounts:revokeToken",us(t,e))}/**
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
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=rv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ak(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gs;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
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
 */function jr(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ik(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Qa(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ek(this,e)}reload(){return Sk(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fr(this.auth.app))return Promise.reject(ci(this.auth));const e=await this.getIdToken();return await Qa(this,wk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:R,emailVerified:L,isAnonymous:U,providerData:$,stsTokenManager:g}=n;se(R&&g,e,"internal-error");const y=Gs.fromJSON(this.name,g);se(typeof R=="string",e,"internal-error"),jr(p,e.name),jr(m,e.name),se(typeof L=="boolean",e,"internal-error"),se(typeof U=="boolean",e,"internal-error"),jr(w,e.name),jr(A,e.name),jr(k,e.name),jr(x,e.name),jr(I,e.name),jr(_,e.name);const E=new mr({uid:R,auth:e,email:m,emailVerified:L,displayName:p,isAnonymous:U,photoURL:A,phoneNumber:w,tenantId:k,stsTokenManager:y,createdAt:I,lastLoginAt:_});return $&&Array.isArray($)&&(E.providerData=$.map(T=>Object.assign({},T))),x&&(E._redirectEventId=x),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gs;i.updateFromServerResponse(n);const s=new mr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];se(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?SE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Gs;l.updateFromIdToken(r);const u=new mr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const iv=new Map;function gr(t){Ar(t instanceof Function,"Expected a class definition");let e=iv.get(t);return e?(Ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iv.set(t,e),e)}/**
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
 */class RE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}RE.type="NONE";const sv=RE;/**
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
 */function wu(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wu(this.userKey,i.apiKey,s),this.fullPersistenceKey=wu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qs(gr(sv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||gr(sv);const o=wu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=mr._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Qs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Qs(s,e,r))}}/**
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
 */function ov(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DE(e))return"Blackberry";if(xE(e))return"Webos";if(PE(e))return"Safari";if((e.includes("chrome/")||CE(e))&&!e.includes("edge/"))return"Chrome";if(NE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function AE(t=xt()){return/firefox\//i.test(t)}function PE(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function CE(t=xt()){return/crios\//i.test(t)}function kE(t=xt()){return/iemobile/i.test(t)}function NE(t=xt()){return/android/i.test(t)}function DE(t=xt()){return/blackberry/i.test(t)}function xE(t=xt()){return/webos/i.test(t)}function jp(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ck(t=xt()){var e;return jp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kk(){return $P()&&document.documentMode===10}function OE(t=xt()){return jp(t)||NE(t)||xE(t)||DE(t)||/windows phone/i.test(t)||kE(t)}/**
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
 */function LE(t,e=[]){let n;switch(t){case"Browser":n=ov(xt());break;case"Worker":n=`${ov(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
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
 */class Nk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Dk(t,e={}){return Si(t,"GET","/v2/passwordPolicy",us(t,e))}/**
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
 */const xk=6;class Ok{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Lk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new av(this),this.idTokenSubscription=new av(this),this.beforeStateQueue=new Nk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await IE(this,{idToken:e}),r=await mr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fr(this.app))return Promise.reject(ci(this));const n=e?at(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fr(this.app)?Promise.reject(ci(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fr(this.app)?Promise.reject(ci(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dk(this),n=new Ok(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gr(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[gr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=LE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ck(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wo(t){return at(t)}class av{constructor(e){this.auth=e,this.observer=null,this.addObserver=YP(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bk(t){Wc=t}function bE(t){return Wc.loadJS(t)}function Vk(){return Wc.recaptchaEnterpriseScript}function Mk(){return Wc.gapiScript}function Fk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Uk="recaptcha-enterprise",jk="NO_RECAPTCHA";class zk{constructor(e){this.type=Uk,this.auth=wo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{_k(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new vk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;nv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(jk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&nv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Vk();u.length!==0&&(u+=l),bE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function lv(t,e,n,r=!1){const i=new zk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function uv(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await lv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await lv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function Bk(t,e){const n=Ii(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ka(s,e??{}))return i;Vn(i,"already-initialized")}return n.initialize({options:e})}function $k(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Hk(t,e,n){const r=wo(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=VE(e),{host:o,port:l}=Wk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),qk()}function VE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Wk(t){const e=VE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cv(o)}}}function cv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}async function Kk(t,e){return Si(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Gk(t,e){return Hc(t,"POST","/v1/accounts:signInWithPassword",us(t,e))}/**
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
 */async function Qk(t,e){return Hc(t,"POST","/v1/accounts:signInWithEmailLink",us(t,e))}async function Yk(t,e){return Hc(t,"POST","/v1/accounts:signInWithEmailLink",us(t,e))}/**
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
 */class Ya extends zp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uv(e,n,"signInWithPassword",Gk);case"emailLink":return Qk(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uv(e,r,"signUpPassword",Kk);case"emailLink":return Yk(e,{idToken:n,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ys(t,e){return Hc(t,"POST","/v1/accounts:signInWithIdp",us(t,e))}/**
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
 */const Xk="http://localhost";class Zi extends zp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:Xk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ul(n)}return e}}/**
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
 */function Jk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zk(t){const e=oa(aa(t)).link,n=e?oa(aa(e)).deep_link_id:null,r=oa(aa(t)).deep_link_id;return(r?oa(aa(r)).link:null)||r||n||e||t}class Bp{constructor(e){var n,r,i,s,o,l;const u=oa(aa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=Jk((i=u.mode)!==null&&i!==void 0?i:null);se(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Zk(e);try{return new Bp(n)}catch{return null}}}/**
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
 */class Eo{constructor(){this.providerId=Eo.PROVIDER_ID}static credential(e,n){return Ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bp.parseLink(n);return se(r,"argument-error"),Ya._fromEmailAndCode(e,r.code,r.tenantId)}}Eo.PROVIDER_ID="password";Eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ME{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hl extends ME{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qr extends hl{constructor(){super("facebook.com")}static credential(e){return Zi._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
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
 */class Kr extends hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zi._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kr.credential(n,r)}catch{return null}}}Kr.GOOGLE_SIGN_IN_METHOD="google.com";Kr.PROVIDER_ID="google.com";/**
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
 */class Gr extends hl{constructor(){super("github.com")}static credential(e){return Zi._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.GITHUB_SIGN_IN_METHOD="github.com";Gr.PROVIDER_ID="github.com";/**
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
 */class Qr extends hl{constructor(){super("twitter.com")}static credential(e,n){return Zi._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qr.credential(n,r)}catch{return null}}}Qr.TWITTER_SIGN_IN_METHOD="twitter.com";Qr.PROVIDER_ID="twitter.com";/**
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
 */class oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mr._fromIdTokenResponse(e,r,i),o=hv(r);return new oo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hv(r);return new oo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ac extends vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ac(e,n,r,i)}}function FE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(t,s,e,r):s})}async function e2(t,e,n=!1){const r=await Qa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oo._forOperation(t,"link",r)}/**
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
 */async function t2(t,e,n=!1){const{auth:r}=t;if(fr(r.app))return Promise.reject(ci(r));const i="reauthenticate";try{const s=await Qa(t,FE(r,i,e,t),n);se(s.idToken,r,"internal-error");const o=Up(s.idToken);se(o,r,"internal-error");const{sub:l}=o;return se(t.uid===l,r,"user-mismatch"),oo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),s}}/**
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
 */async function UE(t,e,n=!1){if(fr(t.app))return Promise.reject(ci(t));const r="signIn",i=await FE(t,r,e),s=await oo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function n2(t,e){return UE(wo(t),e)}/**
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
 */async function r2(t){const e=wo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function i2(t,e,n){return fr(t.app)?Promise.reject(ci(t)):n2(at(t),Eo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&r2(t),r})}function s2(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function o2(t,e,n){return at(t).beforeAuthStateChanged(e,n)}const lc="__sak";/**
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
 */class jE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const a2=1e3,l2=10;class zE extends jE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=OE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,l2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},a2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zE.type="LOCAL";const u2=zE;/**
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
 */class BE extends jE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BE.type="SESSION";const $E=BE;/**
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
 */function c2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await c2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
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
 */function $p(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class h2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=$p("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Yn(){return window}function d2(t){Yn().location.href=t}/**
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
 */function HE(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function f2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function p2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function m2(){return HE()?self:null}/**
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
 */const WE="firebaseLocalStorageDb",g2=1,uc="firebaseLocalStorage",qE="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kc(t,e){return t.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function y2(){const t=indexedDB.deleteDatabase(WE);return new dl(t).toPromise()}function yf(){const t=indexedDB.open(WE,g2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uc,{keyPath:qE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uc)?e(r):(r.close(),await y2(),e(await yf()))})})}async function dv(t,e,n){const r=Kc(t,!0).put({[qE]:e,value:n});return new dl(r).toPromise()}async function v2(t,e){const n=Kc(t,!1).get(e),r=await new dl(n).toPromise();return r===void 0?null:r.value}function fv(t,e){const n=Kc(t,!0).delete(e);return new dl(n).toPromise()}const _2=800,w2=3;class KE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>w2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return HE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(m2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await f2(),!this.activeServiceWorker)return;this.sender=new h2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||p2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yf();return await dv(e,lc,"1"),await fv(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>v2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kc(i,!1).getAll();return new dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KE.type="LOCAL";const E2=KE;new cl(3e4,6e4);/**
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
 */function T2(t,e){return e?gr(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hp extends zp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function I2(t){return UE(t.auth,new Hp(t),t.bypassAuthState)}function S2(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),t2(n,new Hp(t),t.bypassAuthState)}async function R2(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),e2(n,new Hp(t),t.bypassAuthState)}/**
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
 */class GE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return I2;case"linkViaPopup":case"linkViaRedirect":return R2;case"reauthViaPopup":case"reauthViaRedirect":return S2;default:Vn(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const A2=new cl(2e3,1e4);class zs extends GE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=$p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A2.get())};e()}}zs.currentPopupAction=null;/**
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
 */const P2="pendingRedirect",Eu=new Map;class C2 extends GE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eu.get(this.auth._key());if(!e){try{const r=await k2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eu.set(this.auth._key(),e)}return this.bypassAuthState||Eu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function k2(t,e){const n=x2(e),r=D2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function N2(t,e){Eu.set(t._key(),e)}function D2(t){return gr(t._redirectPersistence)}function x2(t){return wu(P2,t.config.apiKey,t.name)}async function O2(t,e,n=!1){if(fr(t.app))return Promise.reject(ci(t));const r=wo(t),i=T2(r,e),o=await new C2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const L2=10*60*1e3;class b2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!V2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!QE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=L2&&this.cachedEventUids.clear(),this.cachedEventUids.has(pv(e))}saveEventToCache(e){this.cachedEventUids.add(pv(e)),this.lastProcessedEventTime=Date.now()}}function pv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function QE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function V2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return QE(t);default:return!1}}/**
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
 */async function M2(t,e={}){return Si(t,"GET","/v1/projects",e)}/**
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
 */const F2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U2=/^https?/;async function j2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await M2(t);for(const n of e)try{if(z2(n))return}catch{}Vn(t,"unauthorized-domain")}function z2(t){const e=mf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!U2.test(n))return!1;if(F2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const B2=new cl(3e4,6e4);function mv(){const t=Yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $2(t){return new Promise((e,n)=>{var r,i,s;function o(){mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mv(),n(Qn(t,"network-request-failed"))},timeout:B2.get()})}if(!((i=(r=Yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yn().gapi)===null||s===void 0)&&s.load)o();else{const l=Fk("iframefcb");return Yn()[l]=()=>{gapi.load?o():n(Qn(t,"network-request-failed"))},bE(`${Mk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Tu=null,e})}let Tu=null;function H2(t){return Tu=Tu||$2(t),Tu}/**
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
 */const W2=new cl(5e3,15e3),q2="__/auth/iframe",K2="emulator/auth/iframe",G2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y2(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fp(e,K2):`https://${t.config.authDomain}/${q2}`,r={apiKey:e.apiKey,appName:t.name,v:ls},i=Q2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ul(r).slice(1)}`}async function X2(t){const e=await H2(t),n=Yn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:Y2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qn(t,"network-request-failed"),l=Yn().setTimeout(()=>{s(o)},W2.get());function u(){Yn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const J2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z2=500,eN=600,tN="_blank",nN="http://localhost";class gv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rN(t,e,n,r=Z2,i=eN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},J2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=xt().toLowerCase();n&&(l=CE(c)?tN:n),AE(c)&&(e=e||nN,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,A])=>`${m}${w}=${A},`,"");if(Ck(c)&&l!=="_self")return iN(e||"",l),new gv(null);const p=window.open(e||"",l,d);se(p,t,"popup-blocked");try{p.focus()}catch{}return new gv(p)}function iN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sN="__/auth/handler",oN="emulator/auth/handler",aN=encodeURIComponent("fac");async function yv(t,e,n,r,i,s){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:i};if(e instanceof ME){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",QP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof hl){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${aN}=${encodeURIComponent(u)}`:"";return`${lN(t)}?${ul(l).slice(1)}${c}`}function lN({config:t}){return t.emulator?Fp(t,oN):`https://${t.authDomain}/${sN}`}/**
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
 */const rd="webStorageSupport";class uN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$E,this._completeRedirectFn=O2,this._overrideRedirectResult=N2}async _openPopup(e,n,r,i){var s;Ar((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yv(e,n,r,mf(),i);return rN(e,o,$p())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yv(e,n,r,mf(),i);return d2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ar(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await X2(e),r=new b2(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rd,{type:rd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rd];o!==void 0&&n(!!o),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=j2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return OE()||PE()||jp()}}const cN=uN;var vv="@firebase/auth",_v="1.7.9";/**
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
 */class hN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fN(t){bn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LE(t)},c=new Lk(r,i,s,u);return $k(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bn(new yn("auth-internal",e=>{const n=wo(e.getProvider("auth").getImmediate());return(r=>new hN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(vv,_v,dN(t)),Kt(vv,_v,"esm2017")}/**
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
 */const pN=5*60,mN=oE("authIdTokenMaxAge")||pN;let wv=null;const gN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mN)return;const i=n==null?void 0:n.token;wv!==i&&(wv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yN(t=$c()){const e=Ii(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bk(t,{popupRedirectResolver:cN,persistence:[E2,u2,$E]}),r=oE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gN(s.toString());o2(n,o,()=>o(n.currentUser)),s2(n,l=>o(l))}}const i=rE("auth");return i&&Hk(n,`http://${i}`),n}function vN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fN("Browser");var _N="firebase",wN="10.14.1";/**
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
 */Kt(_N,wN,"app");var Ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qi,YE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,y){function E(){}E.prototype=y.prototype,g.D=y.prototype,g.prototype=new E,g.prototype.constructor=g,g.C=function(T,C,N){for(var S=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)S[ke-2]=arguments[ke];return y.prototype[C].apply(T,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,y,E){E||(E=0);var T=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)T[C]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(C=0;16>C;++C)T[C]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=g.g[0],E=g.g[1],C=g.g[2];var N=g.g[3],S=y+(N^E&(C^N))+T[0]+3614090360&4294967295;y=E+(S<<7&4294967295|S>>>25),S=N+(C^y&(E^C))+T[1]+3905402710&4294967295,N=y+(S<<12&4294967295|S>>>20),S=C+(E^N&(y^E))+T[2]+606105819&4294967295,C=N+(S<<17&4294967295|S>>>15),S=E+(y^C&(N^y))+T[3]+3250441966&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(N^E&(C^N))+T[4]+4118548399&4294967295,y=E+(S<<7&4294967295|S>>>25),S=N+(C^y&(E^C))+T[5]+1200080426&4294967295,N=y+(S<<12&4294967295|S>>>20),S=C+(E^N&(y^E))+T[6]+2821735955&4294967295,C=N+(S<<17&4294967295|S>>>15),S=E+(y^C&(N^y))+T[7]+4249261313&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(N^E&(C^N))+T[8]+1770035416&4294967295,y=E+(S<<7&4294967295|S>>>25),S=N+(C^y&(E^C))+T[9]+2336552879&4294967295,N=y+(S<<12&4294967295|S>>>20),S=C+(E^N&(y^E))+T[10]+4294925233&4294967295,C=N+(S<<17&4294967295|S>>>15),S=E+(y^C&(N^y))+T[11]+2304563134&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(N^E&(C^N))+T[12]+1804603682&4294967295,y=E+(S<<7&4294967295|S>>>25),S=N+(C^y&(E^C))+T[13]+4254626195&4294967295,N=y+(S<<12&4294967295|S>>>20),S=C+(E^N&(y^E))+T[14]+2792965006&4294967295,C=N+(S<<17&4294967295|S>>>15),S=E+(y^C&(N^y))+T[15]+1236535329&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(C^N&(E^C))+T[1]+4129170786&4294967295,y=E+(S<<5&4294967295|S>>>27),S=N+(E^C&(y^E))+T[6]+3225465664&4294967295,N=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(N^y))+T[11]+643717713&4294967295,C=N+(S<<14&4294967295|S>>>18),S=E+(N^y&(C^N))+T[0]+3921069994&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(C^N&(E^C))+T[5]+3593408605&4294967295,y=E+(S<<5&4294967295|S>>>27),S=N+(E^C&(y^E))+T[10]+38016083&4294967295,N=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(N^y))+T[15]+3634488961&4294967295,C=N+(S<<14&4294967295|S>>>18),S=E+(N^y&(C^N))+T[4]+3889429448&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(C^N&(E^C))+T[9]+568446438&4294967295,y=E+(S<<5&4294967295|S>>>27),S=N+(E^C&(y^E))+T[14]+3275163606&4294967295,N=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(N^y))+T[3]+4107603335&4294967295,C=N+(S<<14&4294967295|S>>>18),S=E+(N^y&(C^N))+T[8]+1163531501&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(C^N&(E^C))+T[13]+2850285829&4294967295,y=E+(S<<5&4294967295|S>>>27),S=N+(E^C&(y^E))+T[2]+4243563512&4294967295,N=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(N^y))+T[7]+1735328473&4294967295,C=N+(S<<14&4294967295|S>>>18),S=E+(N^y&(C^N))+T[12]+2368359562&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(E^C^N)+T[5]+4294588738&4294967295,y=E+(S<<4&4294967295|S>>>28),S=N+(y^E^C)+T[8]+2272392833&4294967295,N=y+(S<<11&4294967295|S>>>21),S=C+(N^y^E)+T[11]+1839030562&4294967295,C=N+(S<<16&4294967295|S>>>16),S=E+(C^N^y)+T[14]+4259657740&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(E^C^N)+T[1]+2763975236&4294967295,y=E+(S<<4&4294967295|S>>>28),S=N+(y^E^C)+T[4]+1272893353&4294967295,N=y+(S<<11&4294967295|S>>>21),S=C+(N^y^E)+T[7]+4139469664&4294967295,C=N+(S<<16&4294967295|S>>>16),S=E+(C^N^y)+T[10]+3200236656&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(E^C^N)+T[13]+681279174&4294967295,y=E+(S<<4&4294967295|S>>>28),S=N+(y^E^C)+T[0]+3936430074&4294967295,N=y+(S<<11&4294967295|S>>>21),S=C+(N^y^E)+T[3]+3572445317&4294967295,C=N+(S<<16&4294967295|S>>>16),S=E+(C^N^y)+T[6]+76029189&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(E^C^N)+T[9]+3654602809&4294967295,y=E+(S<<4&4294967295|S>>>28),S=N+(y^E^C)+T[12]+3873151461&4294967295,N=y+(S<<11&4294967295|S>>>21),S=C+(N^y^E)+T[15]+530742520&4294967295,C=N+(S<<16&4294967295|S>>>16),S=E+(C^N^y)+T[2]+3299628645&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(C^(E|~N))+T[0]+4096336452&4294967295,y=E+(S<<6&4294967295|S>>>26),S=N+(E^(y|~C))+T[7]+1126891415&4294967295,N=y+(S<<10&4294967295|S>>>22),S=C+(y^(N|~E))+T[14]+2878612391&4294967295,C=N+(S<<15&4294967295|S>>>17),S=E+(N^(C|~y))+T[5]+4237533241&4294967295,E=C+(S<<21&4294967295|S>>>11),S=y+(C^(E|~N))+T[12]+1700485571&4294967295,y=E+(S<<6&4294967295|S>>>26),S=N+(E^(y|~C))+T[3]+2399980690&4294967295,N=y+(S<<10&4294967295|S>>>22),S=C+(y^(N|~E))+T[10]+4293915773&4294967295,C=N+(S<<15&4294967295|S>>>17),S=E+(N^(C|~y))+T[1]+2240044497&4294967295,E=C+(S<<21&4294967295|S>>>11),S=y+(C^(E|~N))+T[8]+1873313359&4294967295,y=E+(S<<6&4294967295|S>>>26),S=N+(E^(y|~C))+T[15]+4264355552&4294967295,N=y+(S<<10&4294967295|S>>>22),S=C+(y^(N|~E))+T[6]+2734768916&4294967295,C=N+(S<<15&4294967295|S>>>17),S=E+(N^(C|~y))+T[13]+1309151649&4294967295,E=C+(S<<21&4294967295|S>>>11),S=y+(C^(E|~N))+T[4]+4149444226&4294967295,y=E+(S<<6&4294967295|S>>>26),S=N+(E^(y|~C))+T[11]+3174756917&4294967295,N=y+(S<<10&4294967295|S>>>22),S=C+(y^(N|~E))+T[2]+718787259&4294967295,C=N+(S<<15&4294967295|S>>>17),S=E+(N^(C|~y))+T[9]+3951481745&4294967295,g.g[0]=g.g[0]+y&4294967295,g.g[1]=g.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,g.g[2]=g.g[2]+C&4294967295,g.g[3]=g.g[3]+N&4294967295}r.prototype.u=function(g,y){y===void 0&&(y=g.length);for(var E=y-this.blockSize,T=this.B,C=this.h,N=0;N<y;){if(C==0)for(;N<=E;)i(this,g,N),N+=this.blockSize;if(typeof g=="string"){for(;N<y;)if(T[C++]=g.charCodeAt(N++),C==this.blockSize){i(this,T),C=0;break}}else for(;N<y;)if(T[C++]=g[N++],C==this.blockSize){i(this,T),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var y=1;y<g.length-8;++y)g[y]=0;var E=8*this.o;for(y=g.length-8;y<g.length;++y)g[y]=E&255,E/=256;for(this.u(g),g=Array(16),y=E=0;4>y;++y)for(var T=0;32>T;T+=8)g[E++]=this.g[y]>>>T&255;return g};function s(g,y){var E=l;return Object.prototype.hasOwnProperty.call(E,g)?E[g]:E[g]=y(g)}function o(g,y){this.h=y;for(var E=[],T=!0,C=g.length-1;0<=C;C--){var N=g[C]|0;T&&N==y||(E[C]=N,T=!1)}this.g=E}var l={};function u(g){return-128<=g&&128>g?s(g,function(y){return new o([y|0],0>y?-1:0)}):new o([g|0],0>g?-1:0)}function c(g){if(isNaN(g)||!isFinite(g))return p;if(0>g)return x(c(-g));for(var y=[],E=1,T=0;g>=E;T++)y[T]=g/E|0,E*=4294967296;return new o(y,0)}function d(g,y){if(g.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(g.charAt(0)=="-")return x(d(g.substring(1),y));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(y,8)),T=p,C=0;C<g.length;C+=8){var N=Math.min(8,g.length-C),S=parseInt(g.substring(C,C+N),y);8>N?(N=c(Math.pow(y,N)),T=T.j(N).add(c(S))):(T=T.j(E),T=T.add(c(S)))}return T}var p=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var g=0,y=1,E=0;E<this.g.length;E++){var T=this.i(E);g+=(0<=T?T:4294967296+T)*y,y*=4294967296}return g},t.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(A(this))return"0";if(k(this))return"-"+x(this).toString(g);for(var y=c(Math.pow(g,6)),E=this,T="";;){var C=L(E,y).g;E=I(E,C.j(y));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(g);if(E=C,A(E))return N+T;for(;6>N.length;)N="0"+N;T=N+T}},t.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function A(g){if(g.h!=0)return!1;for(var y=0;y<g.g.length;y++)if(g.g[y]!=0)return!1;return!0}function k(g){return g.h==-1}t.l=function(g){return g=I(this,g),k(g)?-1:A(g)?0:1};function x(g){for(var y=g.g.length,E=[],T=0;T<y;T++)E[T]=~g.g[T];return new o(E,~g.h).add(m)}t.abs=function(){return k(this)?x(this):this},t.add=function(g){for(var y=Math.max(this.g.length,g.g.length),E=[],T=0,C=0;C<=y;C++){var N=T+(this.i(C)&65535)+(g.i(C)&65535),S=(N>>>16)+(this.i(C)>>>16)+(g.i(C)>>>16);T=S>>>16,N&=65535,S&=65535,E[C]=S<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function I(g,y){return g.add(x(y))}t.j=function(g){if(A(this)||A(g))return p;if(k(this))return k(g)?x(this).j(x(g)):x(x(this).j(g));if(k(g))return x(this.j(x(g)));if(0>this.l(w)&&0>g.l(w))return c(this.m()*g.m());for(var y=this.g.length+g.g.length,E=[],T=0;T<2*y;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var C=0;C<g.g.length;C++){var N=this.i(T)>>>16,S=this.i(T)&65535,ke=g.i(C)>>>16,ht=g.i(C)&65535;E[2*T+2*C]+=S*ht,_(E,2*T+2*C),E[2*T+2*C+1]+=N*ht,_(E,2*T+2*C+1),E[2*T+2*C+1]+=S*ke,_(E,2*T+2*C+1),E[2*T+2*C+2]+=N*ke,_(E,2*T+2*C+2)}for(T=0;T<y;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=y;T<2*y;T++)E[T]=0;return new o(E,0)};function _(g,y){for(;(g[y]&65535)!=g[y];)g[y+1]+=g[y]>>>16,g[y]&=65535,y++}function R(g,y){this.g=g,this.h=y}function L(g,y){if(A(y))throw Error("division by zero");if(A(g))return new R(p,p);if(k(g))return y=L(x(g),y),new R(x(y.g),x(y.h));if(k(y))return y=L(g,x(y)),new R(x(y.g),y.h);if(30<g.g.length){if(k(g)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,T=y;0>=T.l(g);)E=U(E),T=U(T);var C=$(E,1),N=$(T,1);for(T=$(T,2),E=$(E,2);!A(T);){var S=N.add(T);0>=S.l(g)&&(C=C.add(E),N=S),T=$(T,1),E=$(E,1)}return y=I(g,C.j(y)),new R(C,y)}for(C=p;0<=g.l(y);){for(E=Math.max(1,Math.floor(g.m()/y.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),N=c(E),S=N.j(y);k(S)||0<S.l(g);)E-=T,N=c(E),S=N.j(y);A(N)&&(N=m),C=C.add(N),g=I(g,S)}return new R(C,g)}t.A=function(g){return L(this,g).h},t.and=function(g){for(var y=Math.max(this.g.length,g.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)&g.i(T);return new o(E,this.h&g.h)},t.or=function(g){for(var y=Math.max(this.g.length,g.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)|g.i(T);return new o(E,this.h|g.h)},t.xor=function(g){for(var y=Math.max(this.g.length,g.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)^g.i(T);return new o(E,this.h^g.h)};function U(g){for(var y=g.g.length+1,E=[],T=0;T<y;T++)E[T]=g.i(T)<<1|g.i(T-1)>>>31;return new o(E,g.h)}function $(g,y){var E=y>>5;y%=32;for(var T=g.g.length-E,C=[],N=0;N<T;N++)C[N]=0<y?g.i(N+E)>>>y|g.i(N+E+1)<<32-y:g.i(N+E);return new o(C,g.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,YE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,qi=o}).apply(typeof Ev<"u"?Ev:typeof self<"u"?self:typeof window<"u"?window:{});var tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var XE,la,JE,Iu,vf,ZE,eT,tT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof tu=="object"&&tu];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var O=a[v];if(!(O in f))break e;f=f[O]}a=a[a.length-1],v=f[a],h=h(v),h!=v&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,v=!1,O={next:function(){if(!v&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return v=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,v),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,O,V){for(var q=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)q[Ne-2]=arguments[Ne];return h.prototype[O].apply(v,q)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let v=0;v<h;v++)f[v]=a[v];return f}return[]}function x(a,h){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(u(v)){const O=a.length||0,V=v.length||0;a.length=O+V;for(let q=0;q<V;q++)a[O+q]=v[q]}else a.push(v)}}class I{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var U=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function $(a,h,f){for(const v in a)h.call(f,a[v],v,a)}function g(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let f,v;for(let O=1;O<arguments.length;O++){v=arguments[O];for(f in v)a[f]=v[f];for(let V=0;V<E.length;V++)f=E[V],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function S(){var a=re;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ke{constructor(){this.h=this.g=null}add(h,f){const v=ht.get();v.set(h,f),this.h?this.h.next=v:this.g=v,this.h=v}}var ht=new I(()=>new Fn,a=>a.reset());class Fn{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ut,H=!1,re=new ke,oe=()=>{const a=l.Promise.resolve(void 0);Ut=()=>{a.then(Ie)}};var Ie=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){N(f)}var h=ht;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}H=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var Ot=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Ke(a,h){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(U){e:{try{L(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:dt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ke.aa.h.call(this)}}A(Ke,Ce);var dt={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ft="closure_listenable_"+(1e6*Math.random()|0),fs=0;function dh(a,h,f,v,O){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!v,this.ha=O,this.key=++fs,this.da=this.fa=!1}function ps(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ms(a){this.src=a,this.g={},this.h=0}ms.prototype.add=function(a,h,f,v,O){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var q=Un(a,h,v,O);return-1<q?(h=a[q],f||(h.fa=!1)):(h=new dh(h,this.src,V,!!v,O),h.fa=f,a.push(h)),h};function tt(a,h){var f=h.type;if(f in a.g){var v=a.g[f],O=Array.prototype.indexOf.call(v,h,void 0),V;(V=0<=O)&&Array.prototype.splice.call(v,O,1),V&&(ps(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Un(a,h,f,v){for(var O=0;O<a.length;++O){var V=a[O];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==v)return O}return-1}var gs="closure_lm_"+(1e6*Math.random()|0),Po={};function jn(a,h,f,v,O){if(Array.isArray(h)){for(var V=0;V<h.length;V++)jn(a,h[V],f,v,O);return null}return f=xr(f),a&&a[ft]?a.K(h,f,c(v)?!!v.capture:!1,O):fh(a,h,f,!1,v,O)}function fh(a,h,f,v,O,V){if(!h)throw Error("Invalid event type");var q=c(O)?!!O.capture:!!O,Ne=No(a);if(Ne||(a[gs]=Ne=new ms(a)),f=Ne.add(h,f,v,q,V),f.proxy)return f;if(v=ph(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)Ot||(O=q),O===void 0&&(O=!1),a.addEventListener(h.toString(),v,O);else if(a.attachEvent)a.attachEvent(wl(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ph(){function a(f){return h.call(a.src,a.listener,f)}const h=mh;return a}function Co(a,h,f,v,O){if(Array.isArray(h))for(var V=0;V<h.length;V++)Co(a,h[V],f,v,O);else v=c(v)?!!v.capture:!!v,f=xr(f),a&&a[ft]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=Un(V,f,v,O),-1<f&&(ps(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=No(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Un(h,f,v,O)),(f=-1<a?h[a]:null)&&ko(f))}function ko(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ft])tt(h.i,a);else{var f=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(f,v,a.capture):h.detachEvent?h.detachEvent(wl(f),v):h.addListener&&h.removeListener&&h.removeListener(v),(f=No(h))?(tt(f,a),f.h==0&&(f.src=null,h[gs]=null)):ps(a)}}}function wl(a){return a in Po?Po[a]:Po[a]="on"+a}function mh(a,h){if(a.da)a=!0;else{h=new Ke(h,this);var f=a.listener,v=a.ha||a.src;a.fa&&ko(a),a=f.call(v,h)}return a}function No(a){return a=a[gs],a instanceof ms?a:null}var _n="__closure_events_fn_"+(1e9*Math.random()>>>0);function xr(a){return typeof a=="function"?a:(a[_n]||(a[_n]=function(h){return a.handleEvent(h)}),a[_n])}function nt(){de.call(this),this.i=new ms(this),this.M=this,this.F=null}A(nt,de),nt.prototype[ft]=!0,nt.prototype.removeEventListener=function(a,h,f,v){Co(this,a,h,f,v)};function rt(a,h){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new Ce(h,a);else if(h instanceof Ce)h.target=h.target||a;else{var O=h;h=new Ce(v,a),T(h,O)}if(O=!0,f)for(var V=f.length-1;0<=V;V--){var q=h.g=f[V];O=Yt(q,v,!0,h)&&O}if(q=h.g=a,O=Yt(q,v,!0,h)&&O,O=Yt(q,v,!1,h)&&O,f)for(V=0;V<f.length;V++)q=h.g=f[V],O=Yt(q,v,!1,h)&&O}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],v=0;v<f.length;v++)ps(f[v]);delete a.g[h],a.h--}}this.F=null},nt.prototype.K=function(a,h,f,v){return this.i.add(String(a),h,!1,f,v)},nt.prototype.L=function(a,h,f,v){return this.i.add(String(a),h,!0,f,v)};function Yt(a,h,f,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,V=0;V<h.length;++V){var q=h[V];if(q&&!q.da&&q.capture==f){var Ne=q.listener,mt=q.ha||q.src;q.fa&&tt(a.i,q),O=Ne.call(mt,v)!==!1&&O}}return O&&!v.defaultPrevented}function un(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Do(a){a.g=un(()=>{a.g=null,a.i&&(a.i=!1,Do(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ys extends de{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Do(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(a){de.call(this),this.h=a,this.g={}}A(Ai,de);var wn=[];function xo(a){$(a.g,function(h,f){this.g.hasOwnProperty(f)&&ko(h)},a),a.g={}}Ai.prototype.N=function(){Ai.aa.N.call(this),xo(this)},Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vs=l.JSON.stringify,El=l.JSON.parse,gh=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function _s(){}_s.prototype.h=null;function Pi(a){return a.h||(a.h=a.i())}function Oo(){}var rr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ci(){Ce.call(this,"d")}A(Ci,Ce);function Lo(){Ce.call(this,"c")}A(Lo,Ce);var zn={},Tl=null;function ki(){return Tl=Tl||new nt}zn.La="serverreachability";function Ni(a){Ce.call(this,zn.La,a)}A(Ni,Ce);function Bn(a){const h=ki();rt(h,new Ni(h))}zn.STAT_EVENT="statevent";function Il(a,h){Ce.call(this,zn.STAT_EVENT,a),this.stat=h}A(Il,Ce);function pt(a){const h=ki();rt(h,new Il(h,a))}zn.Ma="timingevent";function P(a,h){Ce.call(this,zn.Ma,a),this.size=h}A(P,Ce);function D(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function b(){this.g=!0}b.prototype.xa=function(){this.g=!1};function j(a,h,f,v,O,V){a.info(function(){if(a.g)if(V)for(var q="",Ne=V.split("&"),mt=0;mt<Ne.length;mt++){var Ee=Ne[mt].split("=");if(1<Ee.length){var It=Ee[0];Ee=Ee[1];var St=It.split("_");q=2<=St.length&&St[1]=="type"?q+(It+"="+Ee+"&"):q+(It+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+v+") [attempt "+O+"]: "+h+`
`+f+`
`+q})}function K(a,h,f,v,O,V,q){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+O+"]: "+h+`
`+f+`
`+V+" "+q})}function ee(a,h,f,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+J(a,f)+(v?" "+v:"")})}function ie(a,h){a.info(function(){return"TIMEOUT: "+h})}b.prototype.info=function(){};function J(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var O=v[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<O.length;q++)O[q]=""}}}}return vs(f)}catch{return h}}var X={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Q={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},te;function ae(){}A(ae,_s),ae.prototype.g=function(){return new XMLHttpRequest},ae.prototype.i=function(){return{}},te=new ae;function he(a,h,f,v){this.j=a,this.i=h,this.l=f,this.R=v||1,this.U=new Ai(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ye}function Ye(){this.i=null,this.g="",this.h=!1}var Se={},ge={};function De(a,h,f){a.L=1,a.v=Pl(ar(h)),a.m=f,a.P=!0,ir(a,null)}function ir(a,h){a.F=Date.now(),Lt(a),a.A=ar(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Fm(f.i,"t",v),a.C=0,f=a.j.J,a.h=new Ye,a.g=ng(a.j,f?h:null,!a.m),0<a.O&&(a.M=new ys(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,v=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(wn[0]=O.toString()),O=wn);for(var V=0;V<O.length;V++){var q=jn(f,O[V],v||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Bn(),j(a.i,a.u,a.A,a.l,a.R,a.m)}he.prototype.ca=function(a){a=a.target;const h=this.M;h&&lr(a)==3?h.j():this.Y(a)},he.prototype.Y=function(a){try{if(a==this.g)e:{const St=lr(this.g);var h=this.g.Ba();const Is=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||Wm(this.g)))){this.J||St!=4||h==7||(h==8||0>=Is?Bn(3):Bn(2)),sr(this);var f=this.g.Z();this.X=f;t:if(Or(this)){var v=Wm(this.g);a="";var O=v.length,V=lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Xt(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(v[h],{stream:!(V&&h==O-1)});v.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,K(this.i,this.u,this.A,this.l,this.R,St,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,mt=this.g;if((Ne=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Ne)){var Ee=Ne;break t}}Ee=null}if(f=Ee)ee(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lr(this,f);else{this.o=!1,this.s=3,pt(12),cn(this),Xt(this);break e}}if(this.P){f=!0;let Tn;for(;!this.J&&this.C<q.length;)if(Tn=En(this,q),Tn==ge){St==4&&(this.s=4,pt(14),f=!1),ee(this.i,this.l,null,"[Incomplete Response]");break}else if(Tn==Se){this.s=4,pt(15),ee(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else ee(this.i,this.l,Tn,null),Lr(this,Tn);if(Or(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||q.length!=0||this.h.h||(this.s=1,pt(16),f=!1),this.o=this.o&&f,!f)ee(this.i,this.l,q,"[Invalid Chunked Response]"),cn(this),Xt(this);else if(0<q.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),wh(It),It.M=!0,pt(11))}}else ee(this.i,this.l,q,null),Lr(this,q);St==4&&cn(this),this.o&&!this.J&&(St==4?Jm(this.j,this):(this.o=!1,Lt(this)))}else iS(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),cn(this),Xt(this)}}}catch{}finally{}};function Or(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function En(a,h){var f=a.C,v=h.indexOf(`
`,f);return v==-1?ge:(f=Number(h.substring(f,v)),isNaN(f)?Se:(v+=1,v+f>h.length?ge:(h=h.slice(v,v+f),a.C=v+f,h)))}he.prototype.cancel=function(){this.J=!0,cn(this)};function Lt(a){a.S=Date.now()+a.I,ws(a,a.I)}function ws(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=D(m(a.ba,a),h)}function sr(a){a.B&&(l.clearTimeout(a.B),a.B=null)}he.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ie(this.i,this.A),this.L!=2&&(Bn(),pt(17)),cn(this),this.s=2,Xt(this)):ws(this,this.S-a)};function Xt(a){a.j.G==0||a.J||Jm(a.j,a)}function cn(a){sr(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,xo(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Lr(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Fe(f.h,a))){if(!a.K&&Fe(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var O=v;if(O[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ol(f),Dl(f);else break e;_h(f),pt(18)}}else f.za=O[1],0<f.za-f.T&&37500>O[2]&&f.F&&f.v==0&&!f.C&&(f.C=D(m(f.Za,f),6e3));if(1>=br(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else xi(f,11)}else if((a.K||f.g==a)&&Ol(f),!_(h))for(O=f.Da.g.parse(h),h=0;h<O.length;h++){let Ee=O[h];if(f.T=Ee[0],Ee=Ee[1],f.G==2)if(Ee[0]=="c"){f.K=Ee[1],f.ia=Ee[2];const It=Ee[3];It!=null&&(f.la=It,f.j.info("VER="+f.la));const St=Ee[4];St!=null&&(f.Aa=St,f.j.info("SVER="+f.Aa));const Is=Ee[5];Is!=null&&typeof Is=="number"&&0<Is&&(v=1.5*Is,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const Tn=a.g;if(Tn){const bl=Tn.g?Tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bl){var V=v.h;V.g||bl.indexOf("spdy")==-1&&bl.indexOf("quic")==-1&&bl.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&($n(V,V.h),V.h=null))}if(v.D){const Eh=Tn.g?Tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Eh&&(v.ya=Eh,Le(v.I,v.D,Eh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var q=a;if(v.qa=tg(v,v.J?v.ia:null,v.W),q.K){bo(v.h,q);var Ne=q,mt=v.L;mt&&(Ne.I=mt),Ne.B&&(sr(Ne),Lt(Ne)),v.g=q}else Ym(v);0<f.i.length&&xl(f)}else Ee[0]!="stop"&&Ee[0]!="close"||xi(f,7);else f.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?xi(f,7):vh(f):Ee[0]!="noop"&&f.l&&f.l.ta(Ee),f.v=0)}}Bn(4)}catch{}}var ve=class{constructor(a,h){this.g=a,this.map=h}};function Oe(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function or(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function br(a){return a.h?1:a.g?a.g.size:0}function Fe(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function $n(a,h){a.g?a.g.add(h):a.h=h}function bo(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Oe.prototype.cancel=function(){if(this.i=Sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Sl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function $I(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,v=0;v<f;v++)h.push(a[v]);return h}h=[],f=0;for(v in a)h[f++]=a[v];return h}function HI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const v in a)h[f++]=v;return h}}}function xm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=HI(a),v=$I(a),O=v.length,V=0;V<O;V++)h.call(void 0,v[V],f&&f[V],a)}var Om=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),O=null;if(0<=v){var V=a[f].substring(0,v);O=a[f].substring(v+1)}else V=a[f];h(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Di(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Di){this.h=a.h,Rl(this,a.j),this.o=a.o,this.g=a.g,Al(this,a.s),this.l=a.l;var h=a.i,f=new Fo;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Lm(this,f),this.m=a.m}else a&&(h=String(a).match(Om))?(this.h=!1,Rl(this,h[1]||"",!0),this.o=Vo(h[2]||""),this.g=Vo(h[3]||"",!0),Al(this,h[4]),this.l=Vo(h[5]||"",!0),Lm(this,h[6]||"",!0),this.m=Vo(h[7]||"")):(this.h=!1,this.i=new Fo(null,this.h))}Di.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Mo(h,bm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Mo(h,bm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Mo(f,f.charAt(0)=="/"?GI:KI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Mo(f,YI)),a.join("")};function ar(a){return new Di(a)}function Rl(a,h,f){a.j=f?Vo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Al(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Lm(a,h,f){h instanceof Fo?(a.i=h,XI(a.i,a.h)):(f||(h=Mo(h,QI)),a.i=new Fo(h,a.h))}function Le(a,h,f){a.i.set(h,f)}function Pl(a){return Le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Vo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Mo(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,qI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bm=/[#\/\?@]/g,KI=/[#\?:]/g,GI=/[#\?]/g,QI=/[#\?@]/g,YI=/#/g;function Fo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Vr(a){a.g||(a.g=new Map,a.h=0,a.i&&WI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Fo.prototype,t.add=function(a,h){Vr(this),this.i=null,a=Es(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Vm(a,h){Vr(a),h=Es(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Mm(a,h){return Vr(a),h=Es(a,h),a.g.has(h)}t.forEach=function(a,h){Vr(this),this.g.forEach(function(f,v){f.forEach(function(O){a.call(h,O,v,this)},this)},this)},t.na=function(){Vr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let v=0;v<h.length;v++){const O=a[v];for(let V=0;V<O.length;V++)f.push(h[v])}return f},t.V=function(a){Vr(this);let h=[];if(typeof a=="string")Mm(this,a)&&(h=h.concat(this.g.get(Es(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Vr(this),this.i=null,a=Es(this,a),Mm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Fm(a,h,f){Vm(a,h),0<f.length&&(a.i=null,a.g.set(Es(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var v=h[f];const V=encodeURIComponent(String(v)),q=this.V(v);for(v=0;v<q.length;v++){var O=V;q[v]!==""&&(O+="="+encodeURIComponent(String(q[v]))),a.push(O)}}return this.i=a.join("&")};function Es(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function XI(a,h){h&&!a.j&&(Vr(a),a.i=null,a.g.forEach(function(f,v){var O=v.toLowerCase();v!=O&&(Vm(this,v),Fm(this,O,f))},a)),a.j=h}function JI(a,h){const f=new b;if(l.Image){const v=new Image;v.onload=w(Mr,f,"TestLoadImage: loaded",!0,h,v),v.onerror=w(Mr,f,"TestLoadImage: error",!1,h,v),v.onabort=w(Mr,f,"TestLoadImage: abort",!1,h,v),v.ontimeout=w(Mr,f,"TestLoadImage: timeout",!1,h,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function ZI(a,h){const f=new b,v=new AbortController,O=setTimeout(()=>{v.abort(),Mr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(V=>{clearTimeout(O),V.ok?Mr(f,"TestPingServer: ok",!0,h):Mr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Mr(f,"TestPingServer: error",!1,h)})}function Mr(a,h,f,v,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),v(f)}catch{}}function eS(){this.g=new gh}function tS(a,h,f){const v=f||"";try{xm(a,function(O,V){let q=O;c(O)&&(q=vs(O)),h.push(v+V+"="+encodeURIComponent(q))})}catch(O){throw h.push(v+"type="+encodeURIComponent("_badmap")),O}}function Cl(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Cl,_s),Cl.prototype.g=function(){return new kl(this.l,this.j)},Cl.prototype.i=function(a){return function(){return a}}({});function kl(a,h){nt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(kl,nt),t=kl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,jo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Uo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,jo(this)),this.g&&(this.readyState=3,jo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Um(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Um(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Uo(this):jo(this),this.readyState==3&&Um(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Uo(this))},t.Qa=function(a){this.g&&(this.response=a,Uo(this))},t.ga=function(){this.g&&Uo(this)};function Uo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,jo(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function jo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(kl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function jm(a){let h="";return $(a,function(f,v){h+=v,h+=":",h+=f,h+=`\r
`}),h}function yh(a,h,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=jm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Le(a,h,f))}function We(a){nt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(We,nt);var nS=/^https?$/i,rS=["POST","PUT"];t=We.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Pi(this.o):Pi(te),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){zm(this,V);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var O in v)f.set(O,v[O]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const V of v.keys())f.set(V,v.get(V));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(rS,h,void 0))||v||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of f)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hm(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){zm(this,V)}};function zm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Bm(a),Nl(a)}function Bm(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,rt(this,"complete"),rt(this,"abort"),Nl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nl(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$m(this):this.bb())},t.bb=function(){$m(this)};function $m(a){if(a.h&&typeof o<"u"&&(!a.v[1]||lr(a)!=4||a.Z()!=2)){if(a.u&&lr(a)==4)un(a.Ea,0,a);else if(rt(a,"readystatechange"),lr(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var v;if(v=q===0){var O=String(a.D).match(Om)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),v=!nS.test(O?O.toLowerCase():"")}f=v}if(f)rt(a,"complete"),rt(a,"success");else{a.m=6;try{var V=2<lr(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Bm(a)}}finally{Nl(a)}}}}function Nl(a,h){if(a.g){Hm(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||rt(a,"ready");try{f.onreadystatechange=v}catch{}}}function Hm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function lr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<lr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),El(h)}};function Wm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function iS(a){const h={};a=(a.g&&2<=lr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(_(a[v]))continue;var f=C(a[v]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[O]||[];h[O]=V,V.push(f)}g(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function qm(a){this.Aa=0,this.i=[],this.j=new b,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zo("baseRetryDelayMs",5e3,a),this.cb=zo("retryDelaySeedMs",1e4,a),this.Wa=zo("forwardChannelMaxRetries",2,a),this.wa=zo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Oe(a&&a.concurrentRequestLimit),this.Da=new eS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,v){pt(0),this.W=a,this.H=h||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=tg(this,null,this.W),xl(this)};function vh(a){if(Km(a),a.G==3){var h=a.U++,f=ar(a.I);if(Le(f,"SID",a.K),Le(f,"RID",h),Le(f,"TYPE","terminate"),Bo(a,f),h=new he(a,a.j,h),h.L=2,h.v=Pl(ar(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=ng(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Lt(h)}eg(a)}function Dl(a){a.g&&(wh(a),a.g.cancel(),a.g=null)}function Km(a){Dl(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ol(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function xl(a){if(!or(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ut||oe(),H||(Ut(),H=!0),re.add(h,a),a.B=0}}function sS(a,h){return br(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=D(m(a.Ga,a,h),Zm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new he(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Qm(this,O,h),f=ar(this.I),Le(f,"RID",a),Le(f,"CVER",22),this.D&&Le(f,"X-HTTP-Session-Id",this.D),Bo(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(jm(V)))+"&"+h:this.m&&yh(f,this.m,V)),$n(this.h,O),this.Ua&&Le(f,"TYPE","init"),this.P?(Le(f,"$req",h),Le(f,"SID","null"),O.T=!0,De(O,f,null)):De(O,f,h),this.G=2}}else this.G==3&&(a?Gm(this,a):this.i.length==0||or(this.h)||Gm(this))};function Gm(a,h){var f;h?f=h.l:f=a.U++;const v=ar(a.I);Le(v,"SID",a.K),Le(v,"RID",f),Le(v,"AID",a.T),Bo(a,v),a.m&&a.o&&yh(v,a.m,a.o),f=new he(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Qm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),$n(a.h,f),De(f,v,h)}function Bo(a,h){a.H&&$(a.H,function(f,v){Le(h,v,f)}),a.l&&xm({},function(f,v){Le(h,v,f)})}function Qm(a,h,f){f=Math.min(a.i.length,f);var v=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let V=-1;for(;;){const q=["count="+f];V==-1?0<f?(V=O[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let Ne=!0;for(let mt=0;mt<f;mt++){let Ee=O[mt].g;const It=O[mt].map;if(Ee-=V,0>Ee)V=Math.max(0,O[mt].g-100),Ne=!1;else try{tS(It,q,"req"+Ee+"_")}catch{v&&v(It)}}if(Ne){v=q.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,v}function Ym(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ut||oe(),H||(Ut(),H=!0),re.add(h,a),a.v=0}}function _h(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=D(m(a.Fa,a),Zm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=D(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Dl(this),Xm(this))};function wh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xm(a){a.g=new he(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=ar(a.qa);Le(h,"RID","rpc"),Le(h,"SID",a.K),Le(h,"AID",a.T),Le(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Le(h,"TO",a.ja),Le(h,"TYPE","xmlhttp"),Bo(a,h),a.m&&a.o&&yh(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Pl(ar(h)),f.m=null,f.P=!0,ir(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Dl(this),_h(this),pt(19))};function Ol(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Jm(a,h){var f=null;if(a.g==h){Ol(a),wh(a),a.g=null;var v=2}else if(Fe(a.h,h))f=h.D,bo(a.h,h),v=1;else return;if(a.G!=0){if(h.o)if(v==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;v=ki(),rt(v,new P(v,f)),xl(a)}else Ym(a);else if(O=h.s,O==3||O==0&&0<h.X||!(v==1&&sS(a,h)||v==2&&_h(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),O){case 1:xi(a,5);break;case 4:xi(a,10);break;case 3:xi(a,6);break;default:xi(a,2)}}}function Zm(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function xi(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),v=a.Xa;const O=!v;v=new Di(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Rl(v,"https"),Pl(v),O?JI(v.toString(),f):ZI(v.toString(),f)}else pt(2);a.G=0,a.l&&a.l.sa(h),eg(a),Km(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function eg(a){if(a.G=0,a.ka=[],a.l){const h=Sl(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function tg(a,h,f){var v=f instanceof Di?ar(f):new Di(f);if(v.g!="")h&&(v.g=h+"."+v.g),Al(v,v.s);else{var O=l.location;v=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var V=new Di(null);v&&Rl(V,v),h&&(V.g=h),O&&Al(V,O),f&&(V.l=f),v=V}return f=a.D,h=a.ya,f&&h&&Le(v,f,h),Le(v,"VER",a.la),Bo(a,v),v}function ng(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new We(new Cl({eb:f})):new We(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rg(){}t=rg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ll(){}Ll.prototype.g=function(a,h){return new Jt(a,h)};function Jt(a,h){nt.call(this),this.g=new qm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ts(this)}A(Jt,nt),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){vh(this.g)},Jt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=vs(a),a=f);h.i.push(new ve(h.Ya++,a)),h.G==3&&xl(h)},Jt.prototype.N=function(){this.g.l=null,delete this.j,vh(this.g),delete this.g,Jt.aa.N.call(this)};function ig(a){Ci.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(ig,Ci);function sg(){Lo.call(this),this.status=1}A(sg,Lo);function Ts(a){this.g=a}A(Ts,rg),Ts.prototype.ua=function(){rt(this.g,"a")},Ts.prototype.ta=function(a){rt(this.g,new ig(a))},Ts.prototype.sa=function(a){rt(this.g,new sg)},Ts.prototype.ra=function(){rt(this.g,"b")},Ll.prototype.createWebChannel=Ll.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,tT=function(){return new Ll},eT=function(){return ki()},ZE=zn,vf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},X.NO_ERROR=0,X.TIMEOUT=8,X.HTTP_ERROR=6,Iu=X,Q.COMPLETE="complete",JE=Q,Oo.EventType=rr,rr.OPEN="a",rr.CLOSE="b",rr.ERROR="c",rr.MESSAGE="d",nt.prototype.listen=nt.prototype.K,la=Oo,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,XE=We}).apply(typeof tu<"u"?tu:typeof self<"u"?self:typeof window<"u"?window:{});const Tv="@firebase/firestore";/**
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
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
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
 */let To="10.14.0";/**
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
 */const es=new Bc("@firebase/firestore");function ea(){return es.logLevel}function Z(t,...e){if(es.logLevel<=ye.DEBUG){const n=e.map(Wp);es.debug(`Firestore (${To}): ${t}`,...n)}}function Pr(t,...e){if(es.logLevel<=ye.ERROR){const n=e.map(Wp);es.error(`Firestore (${To}): ${t}`,...n)}}function ao(t,...e){if(es.logLevel<=ye.WARN){const n=e.map(Wp);es.warn(`Firestore (${To}): ${t}`,...n)}}function Wp(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: `+t;throw Pr(e),new Error(e)}function Pe(t,e){t||le()}function ce(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class nT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class TN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IN{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _r,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new nT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new Ct(e)}}class SN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class RN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new SN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Pe(this.o===void 0);const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new AN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function CN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class rT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function lo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ot{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new ot(0,0))}static max(){return new ue(new ot(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xa{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends Xa{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const kN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Xa{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return kN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ve.fromString(e))}static fromName(e){return new ne(Ve.fromString(e).popFirst(5))}static empty(){return new ne(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ve(e.slice()))}}function NN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new pi(i,ne.empty(),e)}function DN(t){return new pi(t.readTime,t.key,-1)}class pi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pi(ue.min(),ne.empty(),-1)}static max(){return new pi(ue.max(),ne.empty(),-1)}}function xN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const ON="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fl(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==ON)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(i=>i?z.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new z((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new z((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function pl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qp.oe=-1;function Gc(t){return t==null}function cc(t){return t===0&&1/t==-1/0}function VN(t){return typeof t=="number"&&Number.isInteger(t)&&!cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Iv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function iT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nu(this.root,e,this.comparator,!1)}getReverseIterator(){return new nu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nu(this.root,e,this.comparator,!0)}}class nu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??yt.RED,this.left=i??yt.EMPTY,this.right=s??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new yt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,i,s){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sv(this.data.getIterator())}getIteratorFrom(e){return new Sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class Sv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new nn([])}unionWith(e){let n=new wt(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class sT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sT("Invalid base64 string: "+s):s}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const MN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=MN.exec(t);if(Pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */function Kp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gp(t){const e=t.mapValue.fields.__previous_value__;return Kp(e)?Gp(e):e}function Ja(t){const e=mi(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
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
 */class FN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Za{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Za&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ru={mapValue:{}};function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kp(t)?4:jN(t)?9007199254740991:UN(t)?10:11:le()}function Zn(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ja(t).isEqual(Ja(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mi(i.timestampValue),l=mi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ts(i.bytesValue).isEqual(ts(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ge(i.geoPointValue.latitude)===Ge(s.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ge(i.integerValue)===Ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ge(i.doubleValue),l=Ge(s.doubleValue);return o===l?cc(o)===cc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return lo(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Iv(o)!==Iv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Zn(o[u],l[u])))return!1;return!0}(t,e);default:return le()}}function el(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function uo(t,e){if(t===e)return 0;const n=ns(t),r=ns(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ge(s.integerValue||s.doubleValue),u=Ge(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Rv(t.timestampValue,e.timestampValue);case 4:return Rv(Ja(t),Ja(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ts(s),u=ts(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=Te(l[c],u[c]);if(d!==0)return d}return Te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Te(Ge(s.latitude),Ge(o.latitude));return l!==0?l:Te(Ge(s.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Av(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=Te(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Av(w,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ru.mapValue&&o===ru.mapValue)return 0;if(s===ru.mapValue)return 1;if(o===ru.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=Te(u[p],d[p]);if(m!==0)return m;const w=uo(l[u[p]],c[d[p]]);if(w!==0)return w}return Te(u.length,d.length)}(t.mapValue,e.mapValue);default:throw le()}}function Rv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=mi(t),r=mi(e),i=Te(n.seconds,r.seconds);return i!==0?i:Te(n.nanos,r.nanos)}function Av(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=uo(n[i],r[i]);if(s)return s}return Te(n.length,r.length)}function co(t){return _f(t)}function _f(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=_f(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_f(n.fields[o])}`;return i+"}"}(t.mapValue):le()}function Pv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wf(t){return!!t&&"integerValue"in t}function Qp(t){return!!t&&"arrayValue"in t}function Cv(t){return!!t&&"nullValue"in t}function kv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Su(t){return!!t&&"mapValue"in t}function UN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ta(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ta(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ta(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ta(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ta(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Su(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){cs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Bt(Ta(this.value))}}function oT(t){const e=[];return cs(t.fields,(n,r)=>{const i=new vt([n]);if(Su(r)){const s=oT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
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
 */class Nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Nt(e,0,ue.min(),ue.min(),ue.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,ue.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,ue.min(),ue.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,ue.min(),ue.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hc{constructor(e,n){this.position=e,this.inclusive=n}}function Nv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=uo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class tl{constructor(e,n="asc"){this.field=e,this.dir=n}}function zN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class aT{}class et extends aT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $N(e,n,r):n==="array-contains"?new qN(e,r):n==="in"?new KN(e,r):n==="not-in"?new GN(e,r):n==="array-contains-any"?new QN(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new HN(e,r):new WN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(uo(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(uo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends aT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Mn(e,n)}matches(e){return lT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lT(t){return t.op==="and"}function uT(t){return BN(t)&&lT(t)}function BN(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function Ef(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+co(t.value);if(uT(t))return t.filters.map(e=>Ef(e)).join(",");{const e=t.filters.map(n=>Ef(n)).join(",");return`${t.op}(${e})`}}function cT(t,e){return t instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&Zn(r.value,i.value)}(t,e):t instanceof Mn?function(r,i){return i instanceof Mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&cT(o,i.filters[l]),!0):!1}(t,e):void le()}function hT(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${co(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(hT).join(" ,")+"}"}(t):"Filter"}class $N extends et{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class HN extends et{constructor(e,n){super(e,"in",n),this.keys=dT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WN extends et{constructor(e,n){super(e,"not-in",n),this.keys=dT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class qN extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qp(n)&&el(n.arrayValue,this.value)}}class KN extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&el(this.value.arrayValue,n)}}class GN extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!el(this.value.arrayValue,n)}}class QN extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>el(this.value.arrayValue,r))}}/**
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
 */class YN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function xv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YN(t,e,n,r,i,s,o)}function Yp(t){const e=ce(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ef(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>co(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>co(r)).join(",")),e.ue=n}return e.ue}function Xp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dv(t.startAt,e.startAt)&&Dv(t.endAt,e.endAt)}function Tf(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Io{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function XN(t,e,n,r,i,s,o,l){return new Io(t,e,n,r,i,s,o,l)}function Jp(t){return new Io(t)}function Ov(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fT(t){return t.collectionGroup!==null}function Ia(t){const e=ce(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new wt(vt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new tl(s,r))}),n.has(vt.keyField().canonicalString())||e.ce.push(new tl(vt.keyField(),r))}return e.ce}function Xn(t){const e=ce(t);return e.le||(e.le=JN(e,Ia(t))),e.le}function JN(t,e){if(t.limitType==="F")return xv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new tl(i.field,s)});const n=t.endAt?new hc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hc(t.startAt.position,t.startAt.inclusive):null;return xv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function If(t,e){const n=t.filters.concat([e]);return new Io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sf(t,e,n){return new Io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qc(t,e){return Xp(Xn(t),Xn(e))&&t.limitType===e.limitType}function pT(t){return`${Yp(Xn(t))}|lt:${t.limitType}`}function As(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>hT(i)).join(", ")}]`),Gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>co(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>co(i)).join(",")),`Target(${r})`}(Xn(t))}; limitType=${t.limitType})`}function Yc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ia(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Nv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ia(r),i)||r.endAt&&!function(o,l,u){const c=Nv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ia(r),i))}(t,e)}function ZN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mT(t){return(e,n)=>{let r=!1;for(const i of Ia(t)){const s=eD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eD(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?uo(u,c):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
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
 */class So{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return iT(this.inner)}size(){return this.innerSize}}/**
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
 */const tD=new He(ne.comparator);function Cr(){return tD}const gT=new He(ne.comparator);function ua(...t){let e=gT;for(const n of t)e=e.insert(n.key,n);return e}function yT(t){let e=gT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Bi(){return Sa()}function vT(){return Sa()}function Sa(){return new So(t=>t.toString(),(t,e)=>t.isEqual(e))}const nD=new He(ne.comparator),rD=new wt(ne.comparator);function me(...t){let e=rD;for(const n of t)e=e.add(n);return e}const iD=new wt(Te);function sD(){return iD}/**
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
 */function Zp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function _T(t){return{integerValue:""+t}}function oD(t,e){return VN(e)?_T(e):Zp(t,e)}/**
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
 */class Xc{constructor(){this._=void 0}}function aD(t,e,n){return t instanceof dc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Kp(s)&&(s=Gp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof nl?ET(t,e):t instanceof rl?TT(t,e):function(i,s){const o=wT(i,s),l=Lv(o)+Lv(i.Pe);return wf(o)&&wf(i.Pe)?_T(l):Zp(i.serializer,l)}(t,e)}function lD(t,e,n){return t instanceof nl?ET(t,e):t instanceof rl?TT(t,e):n}function wT(t,e){return t instanceof fc?function(r){return wf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class dc extends Xc{}class nl extends Xc{constructor(e){super(),this.elements=e}}function ET(t,e){const n=IT(e);for(const r of t.elements)n.some(i=>Zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class rl extends Xc{constructor(e){super(),this.elements=e}}function TT(t,e){let n=IT(e);for(const r of t.elements)n=n.filter(i=>!Zn(i,r));return{arrayValue:{values:n}}}class fc extends Xc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Lv(t){return Ge(t.integerValue||t.doubleValue)}function IT(t){return Qp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof nl&&i instanceof nl||r instanceof rl&&i instanceof rl?lo(r.elements,i.elements,Zn):r instanceof fc&&i instanceof fc?Zn(r.Pe,i.Pe):r instanceof dc&&i instanceof dc}(t.transform,e.transform)}class cD{constructor(e,n){this.version=e,this.transformResults=n}}class On{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ru(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jc{}function ST(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new em(t.key,On.none()):new ml(t.key,t.data,On.none());{const n=t.data,r=Bt.empty();let i=new wt(vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ri(t.key,r,new nn(i.toArray()),On.none())}}function hD(t,e,n){t instanceof ml?function(i,s,o){const l=i.value.clone(),u=Vv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ri?function(i,s,o){if(!Ru(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Vv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(RT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ra(t,e,n,r){return t instanceof ml?function(s,o,l,u){if(!Ru(s.precondition,o))return l;const c=s.value.clone(),d=Mv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ri?function(s,o,l,u){if(!Ru(s.precondition,o))return l;const c=Mv(s.fieldTransforms,u,o),d=o.data;return d.setAll(RT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ru(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function dD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wT(r.transform,i||null);s!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,s))}return n||null}function bv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&lo(r,i,(s,o)=>uD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ml extends Jc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ri extends Jc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function RT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vv(t,e,n){const r=new Map;Pe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,lD(o,l,n[i]))}return r}function Mv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,aD(s,o,e))}return r}class em extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fD extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ra(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ra(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=vT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=ST(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&lo(this.mutations,e.mutations,(n,r)=>bv(n,r))&&lo(this.baseMutations,e.baseMutations,(n,r)=>bv(n,r))}}class tm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Pe(e.mutations.length===r.length);let i=function(){return nD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tm(e,n,r,i)}}/**
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
 */class mD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,_e;function yD(t){switch(t){default:return le();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function AT(t){if(t===void 0)return Pr("GRPC error has no .code"),F.UNKNOWN;switch(t){case Xe.OK:return F.OK;case Xe.CANCELLED:return F.CANCELLED;case Xe.UNKNOWN:return F.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return F.INTERNAL;case Xe.UNAVAILABLE:return F.UNAVAILABLE;case Xe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Xe.NOT_FOUND:return F.NOT_FOUND;case Xe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Xe.ABORTED:return F.ABORTED;case Xe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Xe.DATA_LOSS:return F.DATA_LOSS;default:return le()}}(_e=Xe||(Xe={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vD(){return new TextEncoder}/**
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
 */const _D=new qi([4294967295,4294967295],0);function Fv(t){const e=vD().encode(t),n=new YE;return n.update(e),new Uint8Array(n.digest())}function Uv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qi([n,r],0),new qi([i,s],0)]}class nm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ca(`Invalid padding: ${n}`);if(r<0)throw new ca(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ca(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ca(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=qi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(qi.fromNumber(r)));return i.compare(_D)===1&&(i=new qi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Fv(e),[r,i]=Uv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new nm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Fv(e),[r,i]=Uv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,gl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zc(ue.min(),i,new He(Te),Cr(),me())}}class gl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gl(r,n,me(),me(),me())}}/**
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
 */class Au{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class PT{constructor(e,n){this.targetId=e,this.me=n}}class CT{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jv{constructor(){this.fe=0,this.ge=Bv(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:le()}}),new gl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Bv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cr(),this.qe=zv(),this.Qe=new He(Te)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Tf(s))if(r===0){const o=new ne(s.path);this.Ue(n,o,Nt.newNoDocument(o,ue.min()))}else Pe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ts(r).toUint8Array()}catch(u){if(u instanceof sT)return ao("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new nm(o,i,s)}catch(u){return ao(u instanceof ca?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Tf(l.target)){const u=new ne(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Nt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=me();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Zc(e,n,this.Qe,this.ke,r);return this.ke=Cr(),this.qe=zv(),this.Qe=new He(Te),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new jv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new wt(Te),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new jv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function zv(){return new He(ne.comparator)}function Bv(){return new He(ne.comparator)}const ED={asc:"ASCENDING",desc:"DESCENDING"},TD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ID={and:"AND",or:"OR"};class SD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rf(t,e){return t.useProto3Json||Gc(e)?e:{value:e}}function pc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function RD(t,e){return pc(t,e.toTimestamp())}function Jn(t){return Pe(!!t),ue.fromTimestamp(function(n){const r=mi(n);return new ot(r.seconds,r.nanos)}(t))}function rm(t,e){return Af(t,e).canonicalString()}function Af(t,e){const n=function(i){return new Ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function NT(t){const e=Ve.fromString(t);return Pe(bT(e)),e}function Pf(t,e){return rm(t.databaseId,e.path)}function id(t,e){const n=NT(e);if(n.get(1)!==t.databaseId.projectId)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(xT(n))}function DT(t,e){return rm(t.databaseId,e)}function AD(t){const e=NT(t);return e.length===4?Ve.emptyPath():xT(e)}function Cf(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xT(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $v(t,e,n){return{name:Pf(t,e),fields:n.value.mapValue.fields}}function PD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Pe(d===void 0||typeof d=="string"),Tt.fromBase64String(d||"")):(Pe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Tt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?F.UNKNOWN:AT(c.code);return new G(d,c.message||"")}(o);n=new CT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=id(t,r.document.name),s=Jn(r.document.updateTime),o=r.document.createTime?Jn(r.document.createTime):ue.min(),l=new Bt({mapValue:{fields:r.document.fields}}),u=Nt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Au(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=id(t,r.document),s=r.readTime?Jn(r.readTime):ue.min(),o=Nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Au([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=id(t,r.document),s=r.removedTargetIds||[];n=new Au([],s,i,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gD(i,s),l=r.targetId;n=new PT(l,o)}}return n}function CD(t,e){let n;if(e instanceof ml)n={update:$v(t,e.key,e.value)};else if(e instanceof em)n={delete:Pf(t,e.key)};else if(e instanceof Ri)n={update:$v(t,e.key,e.data),updateMask:MD(e.fieldMask)};else{if(!(e instanceof fD))return le();n={verify:Pf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof dc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof nl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof rl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:RD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:le()}(t,e.precondition)),n}function kD(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Jn(i.updateTime):Jn(s);return o.isEqual(ue.min())&&(o=Jn(s)),new cD(o,i.transformResults||[])}(n,e))):[]}function ND(t,e){return{documents:[DT(t,e.path)]}}function DD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=DT(t,i);const s=function(c){if(c.length!==0)return LT(Mn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ps(m.field),direction:LD(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Rf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function xD(t){let e=AD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Pe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=OT(p);return m instanceof Mn&&uT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new tl(Cs(A.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Gc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new hc(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new hc(w,m)}(n.endAt)),XN(e,i,o,s,l,"F",u,c)}function OD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function OT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cs(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Cs(n.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Cs(n.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cs(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return et.create(Cs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>OT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function LD(t){return ED[t]}function bD(t){return TD[t]}function VD(t){return ID[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function Cs(t){return vt.fromServerFormat(t.fieldPath)}function LT(t){return t instanceof et?function(n){if(n.op==="=="){if(kv(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kv(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:bD(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const r=n.getFilters().map(i=>LT(i));return r.length===1?r[0]:{compositeFilter:{op:VD(n.op),filters:r}}}(t):le()}function MD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Zr{constructor(e,n,r,i,s=ue.min(),o=ue.min(),l=Tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class FD{constructor(e){this.ct=e}}function UD(t){const e=xD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sf(e,e.limit,"L"):e}/**
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
 */class jD{constructor(){this.un=new zD}addToCollectionParentIndex(e,n){return this.un.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(pi.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class zD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new wt(Ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new wt(Ve.comparator)).toArray()}}/**
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
 */class ho{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ho(0)}static kn(){return new ho(-1)}}/**
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
 */class BD{constructor(){this.changes=new So(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $D{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class HD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ra(r.mutation,i,nn.empty(),ot.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=Bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ua();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cr();const o=Sa(),l=function(){return Sa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ri)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ra(d.mutation,c,d.mutation.getFieldMask(),ot.now())):o.set(c.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new $D(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Sa();let i=new He((o,l)=>o-l),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||nn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||me()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=vT();d.forEach(m=>{if(!s.has(m)){const w=ST(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):z.resolve(Bi());let l=-1,u=s;return o.next(c=>z.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?z.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,me())).next(d=>({batchId:l,changes:yT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=ua();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ua();return this.indexManager.getCollectionParents(e,s).next(l=>z.forEach(l,u=>{const c=function(p,m){return new Io(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Nt.newInvalidDocument(d)))});let l=ua();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Ra(d.mutation,c,nn.empty(),ot.now()),Yc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class WD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return z.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jn(i.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:UD(i.bundledQuery),readTime:Jn(i.readTime)}}(n)),z.resolve()}}/**
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
 */class qD{constructor(){this.overlays=new He(ne.comparator),this.Ir=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Bi();return z.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const i=Bi(),s=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return z.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new He((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Bi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Bi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return z.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mD(n,r));let s=this.Ir.get(n);s===void 0&&(s=me(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class KD{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
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
 */class im{constructor(){this.Tr=new wt(lt.Er),this.dr=new wt(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new lt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new lt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ne(new Ve([])),r=new lt(n,e),i=new lt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ne(new Ve([])),r=new lt(n,e),i=new lt(n,e+1);let s=me();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new lt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ne.comparator(e.key,n.key)||Te(e.wr,n.wr)}static Ar(e,n){return Te(e.wr,n.wr)||ne.comparator(e.key,n.key)}}/**
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
 */class GD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new wt(lt.Er)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new lt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),i=new lt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new wt(Te);return n.forEach(i=>{const s=new lt(i,0),o=new lt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),z.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new lt(new ne(s),0);let l=new wt(Te);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),z.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return z.forEach(n.mutations,i=>{const s=new lt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new lt(n,0),i=this.br.firstAfterOrEqual(r);return z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QD{constructor(e){this.Mr=e,this.docs=function(){return new He(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cr();const o=n.path,l=new ne(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||xN(DN(d),r)<=0||(i.has(d.key)||Yc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(e,n,r,i){le()}Or(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YD(this)}getSize(e){return z.resolve(this.size)}}class YD extends BD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class XD{constructor(e){this.persistence=e,this.Nr=new So(n=>Yp(n),Xp),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new im,this.targetCount=0,this.kr=ho.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),z.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ho(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Kn(n),z.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),z.waitFor(s).next(()=>i)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),z.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Br.containsKey(n))}}/**
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
 */class JD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qp(0),this.Kr=!1,this.Kr=!0,this.$r=new KD,this.referenceDelegate=e(this),this.Ur=new XD(this),this.indexManager=new jD,this.remoteDocumentCache=function(i){return new QD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new FD(n),this.Gr=new WD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new GD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new ZD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return z.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ZD extends LN{constructor(e){super(),this.currentSequenceNumber=e}}class sm{constructor(e){this.persistence=e,this.Jr=new im,this.Yr=null}static Zr(e){return new sm(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),z.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Xr,r=>{const i=ne.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return z.or([()=>z.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class om{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=me(),i=me();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new om(e,n.fromCache,r,i)}}/**
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
 */class ex{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return HP()?8:bN(xt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ex;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ea()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",As(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),z.resolve()):(ea()<=ye.DEBUG&&Z("QueryEngine","Query:",As(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ea()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",As(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):z.resolve())}Yi(e,n){if(Ov(n))return z.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sf(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=me(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Sf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Ov(n)||i.isEqual(ue.min())?z.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?z.resolve(null):(ea()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),As(n)),this.rs(e,o,n,NN(i,-1)).next(l=>l))})}ts(e,n){let r=new wt(mT(e));return n.forEach((i,s)=>{Yc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ea()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",As(n)),this.Ji.getDocumentsMatchingQuery(e,n,pi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class nx{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new He(Te),this._s=new So(s=>Yp(s),Xp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function rx(t,e,n,r){return new nx(t,e,n,r)}async function VT(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=me();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function ix(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let w=z.resolve();return m.forEach(A=>{w=w.next(()=>d.getEntry(u,A)).next(k=>{const x=c.docVersions.get(A);Pe(x!==null),k.version.compareTo(x)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=me();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function MT(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function sx(t,e){const n=ce(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Tt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(k,x,I){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,w,d)&&l.push(n.Ur.updateTargetData(s,w))});let u=Cr(),c=me();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(ox(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(ue.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return z.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function ox(t,e,n){let r=me(),i=me();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ue.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function ax(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lx(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,z.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Zr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function kf(t,e,n){const r=ce(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pl(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Hv(t,e,n){const r=ce(t);let i=ue.min(),s=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ce(u),m=p._s.get(d);return m!==void 0?z.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,Xn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ue.min(),n?s:me())).next(l=>(ux(r,ZN(e),l),{documents:l,Ts:s})))}function ux(t,e,n){let r=t.us.get(e)||ue.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Wv{constructor(){this.activeTargetIds=sD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cx{constructor(){this.so=new Wv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Wv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hx{_o(e){}shutdown(){}}/**
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
 */class qv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let iu=null;function sd(){return iu===null?iu=function(){return 268435456+Math.round(2147483648*Math.random())}():iu++,"0x"+iu.toString(16)}/**
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
 */const dx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Pt="WebChannelConnection";class px extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=sd(),u=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ao("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=dx[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=sd();return new Promise((o,l)=>{const u=new XE;u.setWithCredentials(!0),u.listenOnce(JE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Iu.NO_ERROR:const d=u.getResponseJson();Z(Pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Iu.TIMEOUT:Z(Pt,`RPC '${e}' ${s} timed out`),l(new G(F.DEADLINE_EXCEEDED,"Request time out"));break;case Iu.HTTP_ERROR:const p=u.getStatus();if(Z(Pt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const A=function(x){const I=x.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(I)>=0?I:F.UNKNOWN}(w.status);l(new G(A,w.message))}else l(new G(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(F.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{Z(Pt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Z(Pt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=sd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tT(),l=eT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");Z(Pt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,w=!1;const A=new fx({Io:x=>{w?Z(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(Z(Pt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),Z(Pt,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},To:()=>p.close()}),k=(x,I,_)=>{x.listen(I,R=>{try{_(R)}catch(L){setTimeout(()=>{throw L},0)}})};return k(p,la.EventType.OPEN,()=>{w||(Z(Pt,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),k(p,la.EventType.CLOSE,()=>{w||(w=!0,Z(Pt,`RPC '${e}' stream ${i} transport closed`),A.So())}),k(p,la.EventType.ERROR,x=>{w||(w=!0,ao(Pt,`RPC '${e}' stream ${i} transport errored:`,x),A.So(new G(F.UNAVAILABLE,"The operation could not be completed")))}),k(p,la.EventType.MESSAGE,x=>{var I;if(!w){const _=x.data[0];Pe(!!_);const R=_,L=R.error||((I=R[0])===null||I===void 0?void 0:I.error);if(L){Z(Pt,`RPC '${e}' stream ${i} received error:`,L);const U=L.status;let $=function(E){const T=Xe[E];if(T!==void 0)return AT(T)}(U),g=L.message;$===void 0&&($=F.INTERNAL,g="Unknown error status: "+U+" with message "+L.message),w=!0,A.So(new G($,g)),p.close()}else Z(Pt,`RPC '${e}' stream ${i} received:`,_),A.bo(_)}}),k(l,ZE.STAT_EVENT,x=>{x.stat===vf.PROXY?Z(Pt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===vf.NOPROXY&&Z(Pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function od(){return typeof document<"u"?document:null}/**
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
 */function eh(t){return new SD(t,!0)}/**
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
 */class FT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class UT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new FT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mx extends UT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=PD(this.serializer,e),r=function(s){if(!("targetChange"in s))return ue.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?Jn(o.readTime):ue.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Cf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Tf(u)?{documents:ND(s,u)}:{query:DD(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=kT(s,o.resumeToken);const c=Rf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=pc(s,o.snapshotVersion.toTimestamp());const c=Rf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=OD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Cf(this.serializer),n.removeTarget=e,this.a_(n)}}class gx extends UT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=kD(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Cf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>CD(this.serializer,r))};this.a_(n)}}/**
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
 */class yx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Af(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Af(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class vx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pr(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _x{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{hs(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ce(u);c.L_.add(4),await yl(c),c.q_.set("Unknown"),c.L_.delete(4),await th(c)}(this))})}),this.q_=new vx(r,i)}}async function th(t){if(hs(t))for(const e of t.B_)await e(!0)}async function yl(t){for(const e of t.B_)await e(!1)}function jT(t,e){const n=ce(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),cm(n)?um(n):Ro(n).r_()&&lm(n,e))}function am(t,e){const n=ce(t),r=Ro(n);n.N_.delete(e),r.r_()&&zT(n,e),n.N_.size===0&&(r.r_()?r.o_():hs(n)&&n.q_.set("Unknown"))}function lm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ro(t).A_(e)}function zT(t,e){t.Q_.xe(e),Ro(t).R_(e)}function um(t){t.Q_=new wD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ro(t).start(),t.q_.v_()}function cm(t){return hs(t)&&!Ro(t).n_()&&t.N_.size>0}function hs(t){return ce(t).L_.size===0}function BT(t){t.Q_=void 0}async function wx(t){t.q_.set("Online")}async function Ex(t){t.N_.forEach((e,n)=>{lm(t,e)})}async function Tx(t,e){BT(t),cm(t)?(t.q_.M_(e),um(t)):t.q_.set("Unknown")}async function Ix(t,e,n){if(t.q_.set("Online"),e instanceof CT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await mc(t,r)}else if(e instanceof Au?t.Q_.Ke(e):e instanceof PT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const r=await MT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Tt.EMPTY_BYTE_STRING,d.snapshotVersion)),zT(s,u);const p=new Zr(d.target,u,c,d.sequenceNumber);lm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await mc(t,r)}}async function mc(t,e,n){if(!pl(e))throw e;t.L_.add(1),await yl(t),t.q_.set("Offline"),n||(n=()=>MT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await th(t)})}function $T(t,e){return e().catch(n=>mc(t,n,e))}async function nh(t){const e=ce(t),n=gi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Sx(e);)try{const i=await ax(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Rx(e,i)}catch(i){await mc(e,i)}HT(e)&&WT(e)}function Sx(t){return hs(t)&&t.O_.length<10}function Rx(t,e){t.O_.push(e);const n=gi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function HT(t){return hs(t)&&!gi(t).n_()&&t.O_.length>0}function WT(t){gi(t).start()}async function Ax(t){gi(t).p_()}async function Px(t){const e=gi(t);for(const n of t.O_)e.m_(n.mutations)}async function Cx(t,e,n){const r=t.O_.shift(),i=tm.from(r,e,n);await $T(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nh(t)}async function kx(t,e){e&&gi(t).V_&&await async function(r,i){if(function(o){return yD(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();gi(r).s_(),await $T(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await nh(r)}}(t,e),HT(t)&&WT(t)}async function Kv(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=hs(n);n.L_.add(3),await yl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await th(n)}async function Nx(t,e){const n=ce(t);e?(n.L_.delete(2),await th(n)):e||(n.L_.add(2),await yl(n),n.q_.set("Unknown"))}function Ro(t){return t.K_||(t.K_=function(n,r,i){const s=ce(n);return s.w_(),new mx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:wx.bind(null,t),Ro:Ex.bind(null,t),mo:Tx.bind(null,t),d_:Ix.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),cm(t)?um(t):t.q_.set("Unknown")):(await t.K_.stop(),BT(t))})),t.K_}function gi(t){return t.U_||(t.U_=function(n,r,i){const s=ce(n);return s.w_(),new gx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ax.bind(null,t),mo:kx.bind(null,t),f_:Px.bind(null,t),g_:Cx.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await nh(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class hm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new hm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dm(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),pl(t))return new G(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=ua(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Gv{constructor(){this.W_=new He(ne.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class fo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fo(e,n,Xs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Dx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class xx{constructor(){this.queries=Qv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ce(n),s=i.queries;i.queries=Qv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G(F.ABORTED,"Firestore shutting down"))}}function Qv(){return new So(t=>pT(t),Qc)}async function qT(t,e){const n=ce(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Dx,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=dm(o,`Initialization of query '${As(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&fm(n)}async function KT(t,e){const n=ce(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ox(t,e){const n=ce(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&fm(n)}function Lx(t,e,n){const r=ce(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function fm(t){t.Y_.forEach(e=>{e.next()})}var Nf,Yv;(Yv=Nf||(Nf={})).ea="default",Yv.Cache="cache";class GT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Nf.Cache}}/**
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
 */class QT{constructor(e){this.key=e}}class YT{constructor(e){this.key=e}}class bx{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=mT(e),this.Ra=new Xs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Gv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),w=Yc(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let x=!1;m&&w?m.data.isEqual(w.data)?A!==k&&(r.track({type:3,doc:w}),x=!0):this.ga(m,w)||(r.track({type:2,doc:w}),x=!0,(u&&this.Aa(w,u)>0||c&&this.Aa(w,c)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),x=!0):m&&!w&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(l=!0)),x&&(w?(o=o.add(w),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(w,A){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return k(w)-k(A)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new fo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Gv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new YT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new QT(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return fo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Vx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Mx{constructor(e){this.key=e,this.va=!1}}class Fx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new So(l=>pT(l),Qc),this.Ma=new Map,this.xa=new Set,this.Oa=new He(ne.comparator),this.Na=new Map,this.La=new im,this.Ba={},this.ka=new Map,this.qa=ho.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Ux(t,e,n=!0){const r=nI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await XT(r,e,n,!0),i}async function jx(t,e){const n=nI(t);await XT(n,e,!0,!1)}async function XT(t,e,n,r){const i=await lx(t.localStore,Xn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await zx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&jT(t.remoteStore,i),l}async function zx(t,e,n,r,i){t.Ka=(p,m,w)=>async function(k,x,I,_){let R=x.view.ma(I);R.ns&&(R=await Hv(k.localStore,x.query,!1).then(({documents:g})=>x.view.ma(g,R)));const L=_&&_.targetChanges.get(x.targetId),U=_&&_.targetMismatches.get(x.targetId)!=null,$=x.view.applyChanges(R,k.isPrimaryClient,L,U);return Jv(k,x.targetId,$.wa),$.snapshot}(t,p,m,w);const s=await Hv(t.localStore,e,!0),o=new bx(e,s.Ts),l=o.ma(s.documents),u=gl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Jv(t,n,c.wa);const d=new Vx(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function Bx(t,e,n){const r=ce(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Qc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await kf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&am(r.remoteStore,i.targetId),Df(r,i.targetId)}).catch(fl)):(Df(r,i.targetId),await kf(r.localStore,i.targetId,!0))}async function $x(t,e){const n=ce(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),am(n.remoteStore,r.targetId))}async function Hx(t,e,n){const r=Xx(t);try{const i=await function(o,l){const u=ce(o),c=ot.now(),d=l.reduce((w,A)=>w.add(A.key),me());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let A=Cr(),k=me();return u.cs.getEntries(w,d).next(x=>{A=x,A.forEach((I,_)=>{_.isValidDocument()||(k=k.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,A)).next(x=>{p=x;const I=[];for(const _ of l){const R=dD(_,p.get(_.key).overlayedDocument);R!=null&&I.push(new Ri(_.key,R,oT(R.value.mapValue),On.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,I,l)}).next(x=>{m=x;const I=x.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(w,x.batchId,I)})}).then(()=>({batchId:m.batchId,changes:yT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new He(Te)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await vl(r,i.changes),await nh(r.remoteStore)}catch(i){const s=dm(i,"Failed to persist write");n.reject(s)}}async function JT(t,e){const n=ce(t);try{const r=await sx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Pe(o.va):i.removedDocuments.size>0&&(Pe(o.va),o.va=!1))}),await vl(n,r,e)}catch(r){await fl(r)}}function Xv(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ce(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&fm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Wx(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new He(ne.comparator);o=o.insert(s,Nt.newNoDocument(s,ue.min()));const l=me().add(s),u=new Zc(ue.min(),new Map,new He(Te),o,l);await JT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),pm(r)}else await kf(r.localStore,e,!1).then(()=>Df(r,e,n)).catch(fl)}async function qx(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await ix(n.localStore,e);eI(n,r,null),ZT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vl(n,i)}catch(i){await fl(i)}}async function Kx(t,e,n){const r=ce(t);try{const i=await function(o,l){const u=ce(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(Pe(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);eI(r,e,n),ZT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await vl(r,i)}catch(i){await fl(i)}}function ZT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function eI(t,e,n){const r=ce(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Df(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||tI(t,r)})}function tI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(am(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),pm(t))}function Jv(t,e,n){for(const r of n)r instanceof QT?(t.La.addReference(r.key,e),Gx(t,r)):r instanceof YT?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||tI(t,r.key)):le()}function Gx(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),pm(t))}function pm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ne(Ve.fromString(e)),r=t.qa.next();t.Na.set(r,new Mx(n)),t.Oa=t.Oa.insert(n,r),jT(t.remoteStore,new Zr(Xn(Jp(n.path)),r,"TargetPurposeLimboResolution",qp.oe))}}async function vl(t,e,n){const r=ce(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=om.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=ce(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>z.forEach(c,m=>z.forEach(m.$i,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>z.forEach(m.Ui,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!pl(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=d.os.get(m),A=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(A);d.os=d.os.insert(m,k)}}}(r.localStore,s))}async function Qx(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await VT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new G(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vl(n,r.hs)}}function Yx(t,e){const n=ce(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let i=me();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function nI(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wx.bind(null,e),e.Ca.d_=Ox.bind(null,e.eventManager),e.Ca.$a=Lx.bind(null,e.eventManager),e}function Xx(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kx.bind(null,e),e}class gc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=eh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return rx(this.persistence,new tx,e.initialUser,this.serializer)}Ga(e){return new JD(sm.Zr,this.serializer)}Wa(e){return new cx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gc.provider={build:()=>new gc};class xf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qx.bind(null,this.syncEngine),await Nx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xx}()}createDatastore(e){const n=eh(e.databaseInfo.databaseId),r=function(s){return new px(s)}(e.databaseInfo);return function(s,o,l,u){return new yx(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new _x(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xv(this.syncEngine,n,0),function(){return qv.D()?new qv:new hx}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Fx(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ce(i);Z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await yl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xf.provider={build:()=>new xf};/**
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
 */class rI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Jx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=rT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ad(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await VT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zx(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Kv(e.remoteStore,i)),t._onlineComponents=e}async function Zx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await ad(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ao("Error using user provided cache. Falling back to memory cache: "+n),await ad(t,new gc)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await ad(t,new gc);return t._offlineComponents}async function iI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Zv(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Zv(t,new xf))),t._onlineComponents}function eO(t){return iI(t).then(e=>e.syncEngine)}async function sI(t){const e=await iI(t),n=e.eventManager;return n.onListen=Ux.bind(null,e.syncEngine),n.onUnlisten=Bx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$x.bind(null,e.syncEngine),n}function tO(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new rI({next:m=>{d.Za(),o.enqueueAndForget(()=>KT(s,p));const w=m.docs.has(l);!w&&m.fromCache?c.reject(new G(F.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new G(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new GT(Jp(l.path),d,{includeMetadataChanges:!0,_a:!0});return qT(s,p)}(await sI(t),t.asyncQueue,e,n,r)),r.promise}function nO(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new rI({next:m=>{d.Za(),o.enqueueAndForget(()=>KT(s,p)),m.fromCache&&u.source==="server"?c.reject(new G(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new GT(l,d,{includeMetadataChanges:!0,_a:!0});return qT(s,p)}(await sI(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function oI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const e_=new Map;/**
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
 */function aI(t,e,n){if(!n)throw new G(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rO(t,e,n,r){if(e===!0&&r===!0)throw new G(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function t_(t){if(!ne.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function n_(t){if(ne.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rh(t);throw new G(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class r_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ih{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EN;switch(r.type){case"firstParty":return new RN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=e_.get(n);r&&(Z("ComponentProvider","Removing Datastore"),e_.delete(n),r.terminate())}(this),Promise.resolve()}}function iO(t,e,n,r={}){var i;const s=(t=kr(t,ih))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ct.MOCK_USER;else{l=aE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ct(c)}t._authCredentials=new TN(new nT(l,u))}}/**
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
 */class ds{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class Gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class hi extends ds{constructor(e,n,r){super(e,n,Jp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new ne(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function Vb(t,e,...n){if(t=at(t),aI("collection","path",e),t instanceof ih){const r=Ve.fromString(e,...n);return n_(r),new hi(t,null,r)}{if(!(t instanceof Gt||t instanceof hi))throw new G(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return n_(r),new hi(t.firestore,null,r)}}function sO(t,e,...n){if(t=at(t),arguments.length===1&&(e=rT.newId()),aI("doc","path",e),t instanceof ih){const r=Ve.fromString(e,...n);return t_(r),new Gt(t,null,new ne(r))}{if(!(t instanceof Gt||t instanceof hi))throw new G(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return t_(r),new Gt(t.firestore,t instanceof hi?t.converter:null,new ne(r))}}/**
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
 */class i_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new FT(this,"async_queue_retry"),this.Vu=()=>{const r=od();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=od();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=od();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new _r;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!pl(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=hm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&le()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Ao extends ih{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new i_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new i_(e),this._firestoreClient=void 0,await e}}}function oO(t,e){const n=typeof t=="object"?t:$c(),r=typeof t=="string"?t:"(default)",i=Ii(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=iE("firestore");s&&iO(i,...s)}return i}function mm(t){if(t._terminated)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aO(t),t._firestoreClient}function aO(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new FN(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,oI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Jx(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new po(Tt.fromBase64String(e))}catch(n){throw new G(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new po(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gm{constructor(e){this._methodName=e}}/**
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
 */class ym{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class vm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const lO=/^__.*__$/;class uO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new ml(e,this.data,n,this.fieldTransforms)}}class lI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class _m{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new _m(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return yc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(uI(this.Cu)&&lO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class cO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||eh(e)}Qu(e,n,r,i=!1){return new _m({Cu:e,methodName:n,qu:r,path:vt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wm(t){const e=t._freezeSettings(),n=eh(t._databaseId);return new cO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hO(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Em("Data must be an object, but it was:",o,r);const l=cI(r,o);let u,c;if(s.merge)u=new nn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Of(e,p,n);if(!o.contains(m))throw new G(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);dI(d,m)||d.push(m)}u=new nn(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new uO(new Bt(l),u,c)}class oh extends gm{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oh}}function dO(t,e,n,r){const i=t.Qu(1,e,n);Em("Data must be an object, but it was:",i,r);const s=[],o=Bt.empty();cs(r,(u,c)=>{const d=Tm(e,u,n);c=at(c);const p=i.Nu(d);if(c instanceof oh)s.push(d);else{const m=_l(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new nn(s);return new lI(o,l,i.fieldTransforms)}function fO(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Of(e,r,n)],u=[i];if(s.length%2!=0)throw new G(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Of(e,s[m])),u.push(s[m+1]);const c=[],d=Bt.empty();for(let m=l.length-1;m>=0;--m)if(!dI(c,l[m])){const w=l[m];let A=u[m];A=at(A);const k=o.Nu(w);if(A instanceof oh)c.push(w);else{const x=_l(A,k);x!=null&&(c.push(w),d.set(w,x))}}const p=new nn(c);return new lI(d,p,o.fieldTransforms)}function pO(t,e,n,r=!1){return _l(n,t.Qu(r?4:3,e))}function _l(t,e){if(hI(t=at(t)))return Em("Unsupported field value:",e,t),cI(t,e);if(t instanceof gm)return function(r,i){if(!uI(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=_l(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ot.fromDate(r);return{timestampValue:pc(i.serializer,s)}}if(r instanceof ot){const s=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pc(i.serializer,s)}}if(r instanceof ym)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof po)return{bytesValue:kT(i.serializer,r._byteString)};if(r instanceof Gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof vm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Zp(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${rh(r)}`)}(t,e)}function cI(t,e){const n={};return iT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(r,i)=>{const s=_l(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function hI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof ym||t instanceof po||t instanceof Gt||t instanceof gm||t instanceof vm)}function Em(t,e,n){if(!hI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=rh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Of(t,e,n){if((e=at(e))instanceof sh)return e._internalPath;if(typeof e=="string")return Tm(t,e);throw yc("Field path arguments must be of type string or ",t,!1,void 0,n)}const mO=new RegExp("[~\\*/\\[\\]]");function Tm(t,e,n){if(e.search(mO)>=0)throw yc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sh(...e.split("."))._internalPath}catch{throw yc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(F.INVALID_ARGUMENT,l+t+u)}function dI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class fI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ah("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gO extends fI{data(){return super.data()}}function ah(t,e){return typeof e=="string"?Tm(t,e):e instanceof sh?e._internalPath:e._delegate._internalPath}/**
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
 */function yO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Im{}class pI extends Im{}function Mb(t,e,...n){let r=[];e instanceof Im&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Sm).length,l=s.filter(u=>u instanceof lh).length;if(o>1||o>0&&l>0)throw new G(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class lh extends pI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new lh(e,n,r)}_apply(e){const n=this._parse(e);return mI(e._query,n),new ds(e.firestore,e.converter,If(e._query,n))}_parse(e){const n=wm(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){o_(p,d);const w=[];for(const A of p)w.push(s_(u,s,A));m={arrayValue:{values:w}}}else m=s_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||o_(p,d),m=pO(l,o,p,d==="in"||d==="not-in");return et.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Fb(t,e,n){const r=e,i=ah("where",t);return lh._create(i,r,n)}class Sm extends Im{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)mI(o,u),o=If(o,u)}(e._query,n),new ds(e.firestore,e.converter,If(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rm extends pI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Rm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new G(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tl(s,o)}(e._query,this._field,this._direction);return new ds(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Io(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Ub(t,e="asc"){const n=e,r=ah("orderBy",t);return Rm._create(r,n)}function s_(t,e,n){if(typeof(n=at(n))=="string"){if(n==="")throw new G(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fT(e)&&n.indexOf("/")!==-1)throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!ne.isDocumentKey(r))throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pv(t,new ne(r))}if(n instanceof Gt)return Pv(t,n._key);throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rh(n)}.`)}function o_(t,e){if(!Array.isArray(t)||t.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class vO{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ge(o.doubleValue));return new vm(s)}convertGeoPoint(e){return new ym(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ja(e));default:return null}}convertTimestamp(e){const n=mi(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Pe(bT(r));const i=new Za(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||Pr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function _O(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ha{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gI extends fI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ah("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Pu extends gI{data(e={}){return super.data(e)}}class wO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ha(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Pu(this._firestore,this._userDataWriter,r.key,r,new ha(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Pu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ha(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Pu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ha(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:EO(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
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
 */function jb(t){t=kr(t,Gt);const e=kr(t.firestore,Ao);return tO(mm(e),t._key).then(n=>TO(e,t,n))}class yI extends vO{constructor(e){super(),this.firestore=e}convertBytes(e){return new po(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function zb(t){t=kr(t,ds);const e=kr(t.firestore,Ao),n=mm(e),r=new yI(e);return yO(t._query),nO(n,t._query).then(i=>new wO(e,r,t,i))}function Bb(t,e,n,...r){t=kr(t,Gt);const i=kr(t.firestore,Ao),s=wm(i);let o;return o=typeof(e=at(e))=="string"||e instanceof sh?fO(s,"updateDoc",t._key,e,n,r):dO(s,"updateDoc",t._key,e),Am(i,[o.toMutation(t._key,On.exists(!0))])}function $b(t){return Am(kr(t.firestore,Ao),[new em(t._key,On.none())])}function Hb(t,e){const n=kr(t.firestore,Ao),r=sO(t),i=_O(t.converter,e);return Am(n,[hO(wm(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,On.exists(!1))]).then(()=>r)}function Am(t,e){return function(r,i){const s=new _r;return r.asyncQueue.enqueueAndForget(async()=>Hx(await eO(r),i,s)),s.promise}(mm(t),e)}function TO(t,e,n){const r=n.docs.get(e._key),i=new yI(t);return new gI(t,i,e._key,r,new ha(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){To=i})(ls),bn(new yn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ao(new IN(r.getProvider("auth-internal")),new PN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Za(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Kt(Tv,"4.7.3",e),Kt(Tv,"4.7.3","esm2017")})();/**
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
 */const vI="firebasestorage.googleapis.com",IO="storageBucket",SO=2*60*1e3,RO=10*60*1e3;/**
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
 */class nr extends vn{constructor(e,n,r=0){super(ld(e),`Firebase Storage: ${n} (${ld(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ld(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var er;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(er||(er={}));function ld(t){return"storage/"+t}function AO(){const t="An unknown error occurred, please check the error payload for server response.";return new nr(er.UNKNOWN,t)}function PO(){return new nr(er.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CO(){return new nr(er.CANCELED,"User canceled the upload/download.")}function kO(t){return new nr(er.INVALID_URL,"Invalid URL '"+t+"'.")}function NO(t){return new nr(er.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function a_(t){return new nr(er.INVALID_ARGUMENT,t)}function _I(){return new nr(er.APP_DELETED,"The Firebase app was deleted.")}function DO(t){return new nr(er.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class kn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=kn.makeFromUrl(e,n)}catch{return new kn(e,"")}if(r.path==="")return r;throw NO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},k=n===vI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",I=new RegExp(`^https?://${k}/${i}/${x}`,"i"),R=[{regex:l,indices:u,postModify:s},{regex:w,indices:A,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<R.length;L++){const U=R[L],$=U.regex.exec(e);if($){const g=$[U.indices.bucket];let y=$[U.indices.path];y||(y=""),r=new kn(g,y),U.postModify(r);break}}if(r==null)throw kO(e);return r}}class xO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function OO(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...x){c||(c=!0,e.apply(null,x))}function p(x){i=setTimeout(()=>{i=null,t(w,u())},x)}function m(){s&&clearTimeout(s)}function w(x,...I){if(c){m();return}if(x){m(),d.call(null,x,...I);return}if(u()||o){m(),d.call(null,x,...I);return}r<64&&(r*=2);let R;l===1?(l=2,R=0):R=(r+Math.random())*1e3,p(R)}let A=!1;function k(x){A||(A=!0,m(),!c&&(i!==null?(x||(l=2),clearTimeout(i),p(0)):x||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function LO(t){t(!1)}/**
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
 */function bO(t){return t!==void 0}function l_(t,e,n,r){if(r<e)throw a_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw a_(`Invalid value for '${t}'. Expected ${n} or less.`)}function VO(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var vc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vc||(vc={}));/**
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
 */function MO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class FO{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,A)=>{this.resolve_=w,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new su(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===vc.NO_ERROR,u=s.getStatus();if(!l||MO(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===vc.ABORT;r(!1,new su(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new su(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());bO(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=AO();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?_I():CO();o(u)}else{const u=PO();o(u)}};this.canceled_?n(!1,new su(!1,null,!0)):this.backoffId_=OO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&LO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class su{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function UO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function BO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $O(t,e,n,r,i,s,o=!0){const l=VO(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return zO(c,e),UO(c,n),jO(c,s),BO(c,r),new FO(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function HO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function WO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class _c{constructor(e,n){this._service=e,n instanceof kn?this._location=n:this._location=kn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _c(e,n)}get root(){const e=new kn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WO(this._location.path)}get storage(){return this._service}get parent(){const e=HO(this._location.path);if(e===null)return null;const n=new kn(this._location.bucket,e);return new _c(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DO(e)}}function u_(t,e){const n=e==null?void 0:e[IO];return n==null?null:kn.makeFromBucketSpec(n,t)}function qO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:aE(i,t.app.options.projectId))}class KO{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=vI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SO,this._maxUploadRetryTime=RO,this._requests=new Set,i!=null?this._bucket=kn.makeFromBucketSpec(i,this._host):this._bucket=u_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kn.makeFromBucketSpec(this._url,e):this._bucket=u_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){l_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){l_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _c(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new xO(_I());{const o=$O(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const c_="@firebase/storage",h_="0.13.2";/**
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
 */const wI="storage";function GO(t=$c(),e){t=at(t);const r=Ii(t,wI).getImmediate({identifier:e}),i=iE("storage");return i&&QO(r,...i),r}function QO(t,e,n,r={}){qO(t,e,n,r)}function YO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new KO(n,r,i,e,ls)}function XO(){bn(new yn(wI,YO,"PUBLIC").setMultipleInstances(!0)),Kt(c_,h_,""),Kt(c_,h_,"esm2017")}XO();const EI="@firebase/installations",Pm="0.6.9";/**
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
 */const TI=1e4,II=`w:${Pm}`,SI="FIS_v2",JO="https://firebaseinstallations.googleapis.com/v1",ZO=60*60*1e3,eL="installations",tL="Installations";/**
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
 */const nL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rs=new as(eL,tL,nL);function RI(t){return t instanceof vn&&t.code.includes("request-failed")}/**
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
 */function AI({projectId:t}){return`${JO}/projects/${t}/installations`}function PI(t){return{token:t.token,requestStatus:2,expiresIn:iL(t.expiresIn),creationTime:Date.now()}}async function CI(t,e){const r=(await e.json()).error;return rs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function kI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function rL(t,{refreshToken:e}){const n=kI(t);return n.append("Authorization",sL(e)),n}async function NI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function iL(t){return Number(t.replace("s","000"))}function sL(t){return`${SI} ${t}`}/**
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
 */async function oL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=AI(t),i=kI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:SI,appId:t.appId,sdkVersion:II},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await NI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:PI(c.authToken)}}else throw await CI("Create Installation",u)}/**
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
 */function DI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function aL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const lL=/^[cdef][\w-]{21}$/,Lf="";function uL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cL(t);return lL.test(n)?n:Lf}catch{return Lf}}function cL(t){return aL(t).substr(0,22)}/**
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
 */function uh(t){return`${t.appName}!${t.appId}`}/**
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
 */const xI=new Map;function OI(t,e){const n=uh(t);LI(n,e),hL(n,e)}function LI(t,e){const n=xI.get(t);if(n)for(const r of n)r(e)}function hL(t,e){const n=dL();n&&n.postMessage({key:t,fid:e}),fL()}let $i=null;function dL(){return!$i&&"BroadcastChannel"in self&&($i=new BroadcastChannel("[Firebase] FID Change"),$i.onmessage=t=>{LI(t.data.key,t.data.fid)}),$i}function fL(){xI.size===0&&$i&&($i.close(),$i=null)}/**
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
 */const pL="firebase-installations-database",mL=1,is="firebase-installations-store";let ud=null;function Cm(){return ud||(ud=fE(pL,mL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(is)}}})),ud}async function wc(t,e){const n=uh(t),i=(await Cm()).transaction(is,"readwrite"),s=i.objectStore(is),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&OI(t,e.fid),e}async function bI(t){const e=uh(t),r=(await Cm()).transaction(is,"readwrite");await r.objectStore(is).delete(e),await r.done}async function ch(t,e){const n=uh(t),i=(await Cm()).transaction(is,"readwrite"),s=i.objectStore(is),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&OI(t,l.fid),l}/**
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
 */async function km(t){let e;const n=await ch(t.appConfig,r=>{const i=gL(r),s=yL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Lf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gL(t){const e=t||{fid:uL(),registrationStatus:0};return VI(e)}function yL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(rs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=vL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_L(t)}:{installationEntry:e}}async function vL(t,e){try{const n=await oL(t,e);return wc(t.appConfig,n)}catch(n){throw RI(n)&&n.customData.serverCode===409?await bI(t.appConfig):await wc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _L(t){let e=await d_(t.appConfig);for(;e.registrationStatus===1;)await DI(100),e=await d_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await km(t);return r||n}return e}function d_(t){return ch(t,e=>{if(!e)throw rs.create("installation-not-found");return VI(e)})}function VI(t){return wL(t)?{fid:t.fid,registrationStatus:0}:t}function wL(t){return t.registrationStatus===1&&t.registrationTime+TI<Date.now()}/**
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
 */async function EL({appConfig:t,heartbeatServiceProvider:e},n){const r=TL(t,n),i=rL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:II,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await NI(()=>fetch(r,l));if(u.ok){const c=await u.json();return PI(c)}else throw await CI("Generate Auth Token",u)}function TL(t,{fid:e}){return`${AI(t)}/${e}/authTokens:generate`}/**
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
 */async function Nm(t,e=!1){let n;const r=await ch(t.appConfig,s=>{if(!MI(s))throw rs.create("not-registered");const o=s.authToken;if(!e&&RL(o))return s;if(o.requestStatus===1)return n=IL(t,e),s;{if(!navigator.onLine)throw rs.create("app-offline");const l=PL(s);return n=SL(t,l),l}});return n?await n:r.authToken}async function IL(t,e){let n=await f_(t.appConfig);for(;n.authToken.requestStatus===1;)await DI(100),n=await f_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Nm(t,e):r}function f_(t){return ch(t,e=>{if(!MI(e))throw rs.create("not-registered");const n=e.authToken;return CL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SL(t,e){try{const n=await EL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await wc(t.appConfig,r),n}catch(n){if(RI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await bI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wc(t.appConfig,r)}throw n}}function MI(t){return t!==void 0&&t.registrationStatus===2}function RL(t){return t.requestStatus===2&&!AL(t)}function AL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ZO}function PL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function CL(t){return t.requestStatus===1&&t.requestTime+TI<Date.now()}/**
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
 */async function kL(t){const e=t,{installationEntry:n,registrationPromise:r}=await km(e);return r?r.catch(console.error):Nm(e).catch(console.error),n.fid}/**
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
 */async function NL(t,e=!1){const n=t;return await DL(n),(await Nm(n,e)).token}async function DL(t){const{registrationPromise:e}=await km(t);e&&await e}/**
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
 */function xL(t){if(!t||!t.options)throw cd("App Configuration");if(!t.name)throw cd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw cd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function cd(t){return rs.create("missing-app-config-values",{valueName:t})}/**
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
 */const FI="installations",OL="installations-internal",LL=t=>{const e=t.getProvider("app").getImmediate(),n=xL(e),r=Ii(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bL=t=>{const e=t.getProvider("app").getImmediate(),n=Ii(e,FI).getImmediate();return{getId:()=>kL(n),getToken:i=>NL(n,i)}};function VL(){bn(new yn(FI,LL,"PUBLIC")),bn(new yn(OL,bL,"PRIVATE"))}VL();Kt(EI,Pm);Kt(EI,Pm,"esm2017");/**
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
 */const Ec="analytics",ML="firebase_id",FL="origin",UL=60*1e3,jL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dm="https://www.googletagmanager.com/gtag/js";/**
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
 */const Qt=new Bc("@firebase/analytics");/**
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
 */const zL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},sn=new as("analytics","Analytics",zL);/**
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
 */function BL(t){if(!t.startsWith(Dm)){const e=sn.create("invalid-gtag-resource",{gtagURL:t});return Qt.warn(e.message),""}return t}function UI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function $L(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function HL(t,e){const n=$L("firebase-js-sdk-policy",{createScriptURL:BL}),r=document.createElement("script"),i=`${Dm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function WL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function qL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await UI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Qt.error(l)}t("config",i,s)}async function KL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await UI(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Qt.error(s)}}function GL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await KL(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await qL(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Qt.error(l)}}return i}function QL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=GL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function YL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Dm)&&n.src.includes(t))return n;return null}/**
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
 */const XL=30,JL=1e3;class ZL{constructor(e={},n=JL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jI=new ZL;function eb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function tb(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:eb(r)},s=jL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw sn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function nb(t,e=jI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw sn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw sn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new sb;return setTimeout(async()=>{l.abort()},UL),zI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function zI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=jI){var s;const{appId:o,measurementId:l}=t;try{await rb(r,e)}catch(u){if(l)return Qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await tb(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!ib(c)){if(i.deleteThrottleMetadata(o),l)return Qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?qy(n,i.intervalMillis,XL):qy(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),Qt.debug(`Calling attemptFetch again in ${d} millis`),zI(t,p,r,i)}}function rb(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ib(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ob(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function ab(){if(uE())try{await cE()}catch(t){return Qt.warn(sn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Qt.warn(sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lb(t,e,n,r,i,s,o){var l;const u=nb(t);u.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&Qt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Qt.error(w)),e.push(u);const c=ab().then(w=>{if(w)return r.getId()}),[d,p]=await Promise.all([u,c]);YL(s)||HL(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[FL]="firebase",m.update=!0,p!=null&&(m[ML]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class ub{constructor(e){this.app=e}_delete(){return delete Aa[this.app.options.appId],Promise.resolve()}}let Aa={},p_=[];const m_={};let hd="dataLayer",cb="gtag",g_,BI,y_=!1;function hb(){const t=[];if(lE()&&t.push("This is a browser extension environment."),WP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=sn.create("invalid-analytics-context",{errorInfo:e});Qt.warn(n.message)}}function db(t,e,n){hb();const r=t.options.appId;if(!r)throw sn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw sn.create("no-api-key");if(Aa[r]!=null)throw sn.create("already-exists",{id:r});if(!y_){WL(hd);const{wrappedGtag:s,gtagCore:o}=QL(Aa,p_,m_,hd,cb);BI=s,g_=o,y_=!0}return Aa[r]=lb(t,p_,m_,e,g_,hd,n),new ub(t)}function fb(t=$c()){t=at(t);const e=Ii(t,Ec);return e.isInitialized()?e.getImmediate():pb(t)}function pb(t,e={}){const n=Ii(t,Ec);if(n.isInitialized()){const i=n.getImmediate();if(Ka(e,n.getOptions()))return i;throw sn.create("already-initialized")}return n.initialize({options:e})}function mb(t,e,n,r){t=at(t),ob(BI,Aa[t.app.options.appId],e,n,r).catch(i=>Qt.error(i))}const v_="@firebase/analytics",__="0.10.8";function gb(){bn(new yn(Ec,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return db(r,i,n)},"PUBLIC")),bn(new yn("analytics-internal",t,"PRIVATE")),Kt(v_,__),Kt(v_,__,"esm2017");function t(e){try{const n=e.getProvider(Ec).getImmediate();return{logEvent:(r,i,s)=>mb(n,r,i,s)}}catch(n){throw sn.create("interop-component-reg-failed",{reason:n})}}}gb();const yb={apiKey:"AIzaSyB-Zbn4ykz7V7J31jBaPjBgh6I0h3Vz7q8",authDomain:"meu-nelore-web.firebaseapp.com",projectId:"meu-nelore-web",storageBucket:"meu-nelore-web.firebasestorage.app",messagingSenderId:"1071334977700",appId:"1:1071334977700:web:7454ebd7f1c9eb7e283631",measurementId:"G-RTQ9LDZK0D"},hh=pE(yb);oO(hh);GO(hh);const vb=yN(hh);fb(hh);function _b(){const[t,e]=M.useState(""),[n,r]=M.useState(""),[i,s]=M.useState(""),[o,l]=M.useState(!1);async function u(c){if(c.preventDefault(),s(""),l(!0),!t||!n){s("Preencha todos os campos"),l(!1);return}try{await i2(vb,t,n),localStorage.setItem("isLoggedIn","true"),window.location.href="/"}catch(d){console.error("Erro ao fazer login:",d),d.code==="auth/invalid-credential"?s("E-mail ou senha inválidos"):d.code==="auth/too-many-requests"?s("Muitas tentativas. Tente novamente mais tarde"):s("Erro ao fazer login. Tente novamente")}finally{l(!1)}}return W.jsx("div",{className:"min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4",children:W.jsxs("div",{className:"w-full max-w-sm bg-white p-8 rounded shadow-md flex flex-col items-center",children:[W.jsx("img",{src:"/Nelore.png",alt:"Meu Nelore",className:"w-32 h-32 mb-6"}),W.jsx("h1",{className:"text-2xl font-bold text-primary-600 mb-6",children:"Meu Nelore"}),W.jsxs("form",{onSubmit:u,className:"w-full space-y-4",children:[i&&W.jsx("div",{className:"bg-red-100 text-red-700 p-2 rounded text-sm",children:i}),W.jsxs("div",{children:[W.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"E-mail"}),W.jsx("input",{type:"email",value:t,onChange:c=>e(c.target.value),className:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",required:!0})]}),W.jsxs("div",{children:[W.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Senha"}),W.jsx("input",{type:"password",value:n,onChange:c=>r(c.target.value),className:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",required:!0})]}),W.jsx("button",{type:"submit",disabled:o,className:"w-full py-2 px-4 bg-primary-600 text-white rounded hover:bg-primary-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed",children:o?"Entrando...":"Entrar"})]})]})})}const wb=M.lazy(()=>Sr(()=>import("./Dashboard-BOJpM7nd.js"),__vite__mapDeps([0,1]))),Eb=M.lazy(()=>Sr(()=>import("./AnimalList-DzZ9P37p.js"),__vite__mapDeps([2,1,3]))),w_=M.lazy(()=>Sr(()=>import("./AnimalFormPage-UkGOYGmE.js"),__vite__mapDeps([4,1])).then(t=>({default:t.AnimalFormPage}))),Tb=M.lazy(()=>Sr(()=>import("./AnimalDetails-zMiRMjr8.js"),__vite__mapDeps([5,1]))),Ib=M.lazy(()=>Sr(()=>import("./IncidentList-QRMAGLgY.js"),__vite__mapDeps([6,1,3]))),E_=M.lazy(()=>Sr(()=>import("./IncidentPageForm-CfyinYsL.js"),__vite__mapDeps([7,8,1]))),Sb=M.lazy(()=>Sr(()=>import("./IncidentDetails-DlCmsIf-.js"),__vite__mapDeps([9,1]))),Rb=[{path:"/",element:W.jsx(NP,{children:W.jsx(kP,{})}),children:[{index:!0,element:W.jsx(M.Suspense,{fallback:W.jsx(Sn,{}),children:W.jsx(wb,{})})},{path:"animais",children:[{index:!0,element:W.jsx(M.Suspense,{fallback:W.jsx(Sn,{}),children:W.jsx(Eb,{})})},{path:"novo",element:W.jsx(M.Suspense,{fallback:W.jsx(Sn,{}),children:W.jsx(w_,{})})},{path:":id/editar",element:W.jsx(M.Suspense,{fallback:W.jsx(Sn,{}),children:W.jsx(w_,{})})},{path:":id",element:W.jsx(M.Suspense,{fallback:W.jsx(Sn,{}),children:W.jsx(Tb,{})})}]},{path:"incidentes",children:[{index:!0,element:W.jsx(M.Suspense,{fallback:W.jsx(Sn,{}),children:W.jsx(Ib,{})})},{path:"novo",element:W.jsx(M.Suspense,{fallback:W.jsx(Sn,{}),children:W.jsx(E_,{})})},{path:":id/editar",element:W.jsx(M.Suspense,{fallback:W.jsx(Sn,{}),children:W.jsx(E_,{})})},{path:":id",element:W.jsx(M.Suspense,{fallback:W.jsx(Sn,{}),children:W.jsx(Sb,{})})}]},{path:"vacinas",children:[{index:!0,element:W.jsx(M.Suspense,{fallback:W.jsx(Sn,{}),children:Nn.createElement(M.lazy(()=>Sr(()=>import("./VacinaList-D6vzE5n4.js"),__vite__mapDeps([10,1]))))})},{path:"nova",element:W.jsx(M.Suspense,{fallback:W.jsx(Sn,{}),children:Nn.createElement(M.lazy(()=>Sr(()=>import("./VacinaFormPage-BXIeimuy.js"),__vite__mapDeps([11,8,1]))))})}]}]},{path:"login",element:W.jsx(_b,{})}],Ab=rP(Rb);dd.createRoot(document.getElementById("root")).render(W.jsx(Nn.StrictMode,{children:W.jsx(dP,{router:Ab})}));export{Bb as A,By as F,Sn as L,ot as T,Ur as a,xb as b,Db as c,Nb as d,Lp as e,Pb as f,ES as g,kp as h,oO as i,W as j,pE as k,GO as l,Nn as m,fb as n,yN as o,Vb as p,Mb as q,M as r,Ub as s,zb as t,kb as u,sO as v,Fb as w,jb as x,$b as y,Hb as z};
