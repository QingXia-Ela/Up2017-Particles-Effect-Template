var rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hC(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Af={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu=Symbol.for("react.element"),dC=Symbol.for("react.portal"),pC=Symbol.for("react.fragment"),mC=Symbol.for("react.strict_mode"),gC=Symbol.for("react.profiler"),_C=Symbol.for("react.provider"),vC=Symbol.for("react.context"),xC=Symbol.for("react.forward_ref"),yC=Symbol.for("react.suspense"),SC=Symbol.for("react.memo"),wC=Symbol.for("react.lazy"),W_=Symbol.iterator;function MC(n){return n===null||typeof n!="object"?null:(n=W_&&n[W_]||n["@@iterator"],typeof n=="function"?n:null)}var Ly={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Py=Object.assign,Ry={};function Fa(n,e,t){this.props=n,this.context=e,this.refs=Ry,this.updater=t||Ly}Fa.prototype.isReactComponent={};Fa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Fa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Dy(){}Dy.prototype=Fa.prototype;function ym(n,e,t){this.props=n,this.context=e,this.refs=Ry,this.updater=t||Ly}var Sm=ym.prototype=new Dy;Sm.constructor=ym;Py(Sm,Fa.prototype);Sm.isPureReactComponent=!0;var V_=Array.isArray,Iy=Object.prototype.hasOwnProperty,wm={current:null},Ny={key:!0,ref:!0,__self:!0,__source:!0};function Fy(n,e,t){var i,r={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)Iy.call(e,i)&&!Ny.hasOwnProperty(i)&&(r[i]=e[i]);var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){for(var f=Array(u),h=0;h<u;h++)f[h]=arguments[h+2];r.children=f}if(n&&n.defaultProps)for(i in u=n.defaultProps,u)r[i]===void 0&&(r[i]=u[i]);return{$$typeof:iu,type:n,key:o,ref:l,props:r,_owner:wm.current}}function EC(n,e){return{$$typeof:iu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Mm(n){return typeof n=="object"&&n!==null&&n.$$typeof===iu}function TC(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var H_=/\/+/g;function ad(n,e){return typeof n=="object"&&n!==null&&n.key!=null?TC(""+n.key):e.toString(36)}function Wc(n,e,t,i,r){var o=typeof n;(o==="undefined"||o==="boolean")&&(n=null);var l=!1;if(n===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case iu:case dC:l=!0}}if(l)return l=n,r=r(l),n=i===""?"."+ad(l,0):i,V_(r)?(t="",n!=null&&(t=n.replace(H_,"$&/")+"/"),Wc(r,e,t,"",function(h){return h})):r!=null&&(Mm(r)&&(r=EC(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(H_,"$&/")+"/")+n)),e.push(r)),1;if(l=0,i=i===""?".":i+":",V_(n))for(var u=0;u<n.length;u++){o=n[u];var f=i+ad(o,u);l+=Wc(o,e,t,f,r)}else if(f=MC(n),typeof f=="function")for(n=f.call(n),u=0;!(o=n.next()).done;)o=o.value,f=i+ad(o,u++),l+=Wc(o,e,t,f,r);else if(o==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function ec(n,e,t){if(n==null)return n;var i=[],r=0;return Wc(n,i,"","",function(o){return e.call(t,o,r++)}),i}function bC(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var On={current:null},Vc={transition:null},CC={ReactCurrentDispatcher:On,ReactCurrentBatchConfig:Vc,ReactCurrentOwner:wm};st.Children={map:ec,forEach:function(n,e,t){ec(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ec(n,function(){e++}),e},toArray:function(n){return ec(n,function(e){return e})||[]},only:function(n){if(!Mm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};st.Component=Fa;st.Fragment=pC;st.Profiler=gC;st.PureComponent=ym;st.StrictMode=mC;st.Suspense=yC;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CC;st.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Py({},n.props),r=n.key,o=n.ref,l=n._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=wm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var u=n.type.defaultProps;for(f in e)Iy.call(e,f)&&!Ny.hasOwnProperty(f)&&(i[f]=e[f]===void 0&&u!==void 0?u[f]:e[f])}var f=arguments.length-2;if(f===1)i.children=t;else if(1<f){u=Array(f);for(var h=0;h<f;h++)u[h]=arguments[h+2];i.children=u}return{$$typeof:iu,type:n.type,key:r,ref:o,props:i,_owner:l}};st.createContext=function(n){return n={$$typeof:vC,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:_C,_context:n},n.Consumer=n};st.createElement=Fy;st.createFactory=function(n){var e=Fy.bind(null,n);return e.type=n,e};st.createRef=function(){return{current:null}};st.forwardRef=function(n){return{$$typeof:xC,render:n}};st.isValidElement=Mm;st.lazy=function(n){return{$$typeof:wC,_payload:{_status:-1,_result:n},_init:bC}};st.memo=function(n,e){return{$$typeof:SC,type:n,compare:e===void 0?null:e}};st.startTransition=function(n){var e=Vc.transition;Vc.transition={};try{n()}finally{Vc.transition=e}};st.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};st.useCallback=function(n,e){return On.current.useCallback(n,e)};st.useContext=function(n){return On.current.useContext(n)};st.useDebugValue=function(){};st.useDeferredValue=function(n){return On.current.useDeferredValue(n)};st.useEffect=function(n,e){return On.current.useEffect(n,e)};st.useId=function(){return On.current.useId()};st.useImperativeHandle=function(n,e,t){return On.current.useImperativeHandle(n,e,t)};st.useInsertionEffect=function(n,e){return On.current.useInsertionEffect(n,e)};st.useLayoutEffect=function(n,e){return On.current.useLayoutEffect(n,e)};st.useMemo=function(n,e){return On.current.useMemo(n,e)};st.useReducer=function(n,e,t){return On.current.useReducer(n,e,t)};st.useRef=function(n){return On.current.useRef(n)};st.useState=function(n){return On.current.useState(n)};st.useSyncExternalStore=function(n,e,t){return On.current.useSyncExternalStore(n,e,t)};st.useTransition=function(){return On.current.useTransition()};st.version="18.2.0";(function(n){n.exports=st})(Af);const eO=hC(Af.exports);var X_={},Oy={exports:{}},ci={},zy={exports:{}},Uy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(G,k){var W=G.length;G.push(k);e:for(;0<W;){var le=W-1>>>1,re=G[le];if(0<r(re,k))G[le]=k,G[W]=re,W=le;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var k=G[0],W=G.pop();if(W!==k){G[0]=W;e:for(var le=0,re=G.length,_e=re>>>1;le<_e;){var be=2*(le+1)-1,Ne=G[be],J=be+1,tt=G[J];if(0>r(Ne,W))J<re&&0>r(tt,Ne)?(G[le]=tt,G[J]=W,le=J):(G[le]=Ne,G[be]=W,le=be);else if(J<re&&0>r(tt,W))G[le]=tt,G[J]=W,le=J;else break e}}return k}function r(G,k){var W=G.sortIndex-k.sortIndex;return W!==0?W:G.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();n.unstable_now=function(){return l.now()-u}}var f=[],h=[],p=1,d=null,m=3,y=!1,w=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(G){for(var k=t(h);k!==null;){if(k.callback===null)i(h);else if(k.startTime<=G)i(h),k.sortIndex=k.expirationTime,e(f,k);else break;k=t(h)}}function T(G){if(v=!1,E(G),!w)if(t(f)!==null)w=!0,he(A);else{var k=t(h);k!==null&&de(T,k.startTime-G)}}function A(G,k){w=!1,v&&(v=!1,x(b),b=-1),y=!0;var W=m;try{for(E(k),d=t(f);d!==null&&(!(d.expirationTime>k)||G&&!ce());){var le=d.callback;if(typeof le=="function"){d.callback=null,m=d.priorityLevel;var re=le(d.expirationTime<=k);k=n.unstable_now(),typeof re=="function"?d.callback=re:d===t(f)&&i(f),E(k)}else i(f);d=t(f)}if(d!==null)var _e=!0;else{var be=t(h);be!==null&&de(T,be.startTime-k),_e=!1}return _e}finally{d=null,m=W,y=!1}}var R=!1,O=null,b=-1,F=5,V=-1;function ce(){return!(n.unstable_now()-V<F)}function ge(){if(O!==null){var G=n.unstable_now();V=G;var k=!0;try{k=O(!0,G)}finally{k?Q():(R=!1,O=null)}}else R=!1}var Q;if(typeof S=="function")Q=function(){S(ge)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ae=$.port2;$.port1.onmessage=ge,Q=function(){ae.postMessage(null)}}else Q=function(){_(ge,0)};function he(G){O=G,R||(R=!0,Q())}function de(G,k){b=_(function(){G(n.unstable_now())},k)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){w||y||(w=!0,he(A))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(G){switch(m){case 1:case 2:case 3:var k=3;break;default:k=m}var W=m;m=k;try{return G()}finally{m=W}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,k){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var W=m;m=G;try{return k()}finally{m=W}},n.unstable_scheduleCallback=function(G,k,W){var le=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?le+W:le):W=le,G){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=W+re,G={id:p++,callback:k,priorityLevel:G,startTime:W,expirationTime:re,sortIndex:-1},W>le?(G.sortIndex=W,e(h,G),t(f)===null&&G===t(h)&&(v?(x(b),b=-1):v=!0,de(T,W-le))):(G.sortIndex=re,e(f,G),w||y||(w=!0,he(A))),G},n.unstable_shouldYield=ce,n.unstable_wrapCallback=function(G){var k=m;return function(){var W=m;m=k;try{return G.apply(this,arguments)}finally{m=W}}}})(Uy);(function(n){n.exports=Uy})(zy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=Af.exports,ui=zy.exports;function me(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var By=new Set,zl={};function mo(n,e){Ma(n,e),Ma(n+"Capture",e)}function Ma(n,e){for(zl[n]=e,n=0;n<e.length;n++)By.add(e[n])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_p=Object.prototype.hasOwnProperty,AC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q_={},j_={};function LC(n){return _p.call(j_,n)?!0:_p.call(q_,n)?!1:AC.test(n)?j_[n]=!0:(q_[n]=!0,!1)}function PC(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function RC(n,e,t,i){if(e===null||typeof e>"u"||PC(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zn(n,e,t,i,r,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){vn[n]=new zn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];vn[e]=new zn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){vn[n]=new zn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){vn[n]=new zn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){vn[n]=new zn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){vn[n]=new zn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){vn[n]=new zn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){vn[n]=new zn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){vn[n]=new zn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Em=/[\-:]([a-z])/g;function Tm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Em,Tm);vn[e]=new zn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Em,Tm);vn[e]=new zn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Em,Tm);vn[e]=new zn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){vn[n]=new zn(n,1,!1,n.toLowerCase(),null,!1,!1)});vn.xlinkHref=new zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){vn[n]=new zn(n,1,!1,n.toLowerCase(),null,!0,!0)});function bm(n,e,t,i){var r=vn.hasOwnProperty(e)?vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RC(e,t,r,i)&&(t=null),i||r===null?LC(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Hr=ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tc=Symbol.for("react.element"),ea=Symbol.for("react.portal"),ta=Symbol.for("react.fragment"),Cm=Symbol.for("react.strict_mode"),vp=Symbol.for("react.profiler"),Gy=Symbol.for("react.provider"),Wy=Symbol.for("react.context"),Am=Symbol.for("react.forward_ref"),xp=Symbol.for("react.suspense"),yp=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),fs=Symbol.for("react.lazy"),Vy=Symbol.for("react.offscreen"),Y_=Symbol.iterator;function sl(n){return n===null||typeof n!="object"?null:(n=Y_&&n[Y_]||n["@@iterator"],typeof n=="function"?n:null)}var kt=Object.assign,ld;function gl(n){if(ld===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ld=e&&e[1]||""}return`
`+ld+n}var ud=!1;function cd(n,e){if(!n||ud)return"";ud=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var i=h}Reflect.construct(n,[],e)}else{try{e.call()}catch(h){i=h}n.call(e.prototype)}else{try{throw Error()}catch(h){i=h}n()}}catch(h){if(h&&i&&typeof h.stack=="string"){for(var r=h.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,u=o.length-1;1<=l&&0<=u&&r[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(r[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||r[l]!==o[u]){var f=`
`+r[l].replace(" at new "," at ");return n.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",n.displayName)),f}while(1<=l&&0<=u);break}}}finally{ud=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?gl(n):""}function DC(n){switch(n.tag){case 5:return gl(n.type);case 16:return gl("Lazy");case 13:return gl("Suspense");case 19:return gl("SuspenseList");case 0:case 2:case 15:return n=cd(n.type,!1),n;case 11:return n=cd(n.type.render,!1),n;case 1:return n=cd(n.type,!0),n;default:return""}}function Sp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ta:return"Fragment";case ea:return"Portal";case vp:return"Profiler";case Cm:return"StrictMode";case xp:return"Suspense";case yp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Wy:return(n.displayName||"Context")+".Consumer";case Gy:return(n._context.displayName||"Context")+".Provider";case Am:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Lm:return e=n.displayName||null,e!==null?e:Sp(n.type)||"Memo";case fs:e=n._payload,n=n._init;try{return Sp(n(e))}catch{}}return null}function IC(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sp(e);case 8:return e===Cm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Hy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NC(n){var e=Hy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function nc(n){n._valueTracker||(n._valueTracker=NC(n))}function Xy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Hy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function nf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wp(n,e){var t=e.checked;return kt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function $_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Cs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qy(n,e){e=e.checked,e!=null&&bm(n,"checked",e,!1)}function Mp(n,e){qy(n,e);var t=Cs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ep(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ep(n,e.type,Cs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Z_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ep(n,e,t){(e!=="number"||nf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var _l=Array.isArray;function pa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Cs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Tp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return kt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(me(92));if(_l(t)){if(1<t.length)throw Error(me(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Cs(t)}}function jy(n,e){var t=Cs(e.value),i=Cs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Q_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Yy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Yy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ic,$y=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ic=ic||document.createElement("div"),ic.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ic.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ul(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Tl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FC=["Webkit","ms","Moz","O"];Object.keys(Tl).forEach(function(n){FC.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Tl[e]=Tl[n]})});function Zy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Tl.hasOwnProperty(n)&&Tl[n]?(""+e).trim():e+"px"}function Ky(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Zy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var OC=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cp(n,e){if(e){if(OC[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function Ap(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lp=null;function Pm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pp=null,ma=null,ga=null;function J_(n){if(n=ou(n)){if(typeof Pp!="function")throw Error(me(280));var e=n.stateNode;e&&(e=If(e),Pp(n.stateNode,n.type,e))}}function Qy(n){ma?ga?ga.push(n):ga=[n]:ma=n}function Jy(){if(ma){var n=ma,e=ga;if(ga=ma=null,J_(n),e)for(n=0;n<e.length;n++)J_(e[n])}}function e1(n,e){return n(e)}function t1(){}var fd=!1;function n1(n,e,t){if(fd)return n(e,t);fd=!0;try{return e1(n,e,t)}finally{fd=!1,(ma!==null||ga!==null)&&(t1(),Jy())}}function kl(n,e){var t=n.stateNode;if(t===null)return null;var i=If(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(me(231,e,typeof t));return t}var Rp=!1;if(kr)try{var ol={};Object.defineProperty(ol,"passive",{get:function(){Rp=!0}}),window.addEventListener("test",ol,ol),window.removeEventListener("test",ol,ol)}catch{Rp=!1}function zC(n,e,t,i,r,o,l,u,f){var h=Array.prototype.slice.call(arguments,3);try{e.apply(t,h)}catch(p){this.onError(p)}}var bl=!1,rf=null,sf=!1,Dp=null,UC={onError:function(n){bl=!0,rf=n}};function kC(n,e,t,i,r,o,l,u,f){bl=!1,rf=null,zC.apply(UC,arguments)}function BC(n,e,t,i,r,o,l,u,f){if(kC.apply(this,arguments),bl){if(bl){var h=rf;bl=!1,rf=null}else throw Error(me(198));sf||(sf=!0,Dp=h)}}function go(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function i1(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ev(n){if(go(n)!==n)throw Error(me(188))}function GC(n){var e=n.alternate;if(!e){if(e=go(n),e===null)throw Error(me(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return ev(r),n;if(o===i)return ev(r),e;o=o.sibling}throw Error(me(188))}if(t.return!==i.return)t=r,i=o;else{for(var l=!1,u=r.child;u;){if(u===t){l=!0,t=r,i=o;break}if(u===i){l=!0,i=r,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,i=r;break}if(u===i){l=!0,i=o,t=r;break}u=u.sibling}if(!l)throw Error(me(189))}}if(t.alternate!==i)throw Error(me(190))}if(t.tag!==3)throw Error(me(188));return t.stateNode.current===t?n:e}function r1(n){return n=GC(n),n!==null?s1(n):null}function s1(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=s1(n);if(e!==null)return e;n=n.sibling}return null}var o1=ui.unstable_scheduleCallback,tv=ui.unstable_cancelCallback,WC=ui.unstable_shouldYield,VC=ui.unstable_requestPaint,Yt=ui.unstable_now,HC=ui.unstable_getCurrentPriorityLevel,Rm=ui.unstable_ImmediatePriority,a1=ui.unstable_UserBlockingPriority,of=ui.unstable_NormalPriority,XC=ui.unstable_LowPriority,l1=ui.unstable_IdlePriority,Lf=null,ur=null;function qC(n){if(ur&&typeof ur.onCommitFiberRoot=="function")try{ur.onCommitFiberRoot(Lf,n,void 0,(n.current.flags&128)===128)}catch{}}var Ki=Math.clz32?Math.clz32:$C,jC=Math.log,YC=Math.LN2;function $C(n){return n>>>=0,n===0?32:31-(jC(n)/YC|0)|0}var rc=64,sc=4194304;function vl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function af(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,o=n.pingedLanes,l=t&268435455;if(l!==0){var u=l&~r;u!==0?i=vl(u):(o&=l,o!==0&&(i=vl(o)))}else l=t&~r,l!==0?i=vl(l):o!==0&&(i=vl(o));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ki(e),r=1<<t,i|=n[t],e&=~r;return i}function ZC(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KC(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,o=n.pendingLanes;0<o;){var l=31-Ki(o),u=1<<l,f=r[l];f===-1?((u&t)===0||(u&i)!==0)&&(r[l]=ZC(u,e)):f<=e&&(n.expiredLanes|=u),o&=~u}}function Ip(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function u1(){var n=rc;return rc<<=1,(rc&4194240)===0&&(rc=64),n}function hd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ru(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ki(e),n[e]=t}function QC(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ki(t),o=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~o}}function Dm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Ki(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var yt=0;function c1(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var f1,Im,h1,d1,p1,Np=!1,oc=[],vs=null,xs=null,ys=null,Bl=new Map,Gl=new Map,ds=[],JC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nv(n,e){switch(n){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":Bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gl.delete(e.pointerId)}}function al(n,e,t,i,r,o){return n===null||n.nativeEvent!==o?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ou(e),e!==null&&Im(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function eA(n,e,t,i,r){switch(e){case"focusin":return vs=al(vs,n,e,t,i,r),!0;case"dragenter":return xs=al(xs,n,e,t,i,r),!0;case"mouseover":return ys=al(ys,n,e,t,i,r),!0;case"pointerover":var o=r.pointerId;return Bl.set(o,al(Bl.get(o)||null,n,e,t,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Gl.set(o,al(Gl.get(o)||null,n,e,t,i,r)),!0}return!1}function m1(n){var e=Zs(n.target);if(e!==null){var t=go(e);if(t!==null){if(e=t.tag,e===13){if(e=i1(t),e!==null){n.blockedOn=e,p1(n.priority,function(){h1(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Hc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Fp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Lp=i,t.target.dispatchEvent(i),Lp=null}else return e=ou(t),e!==null&&Im(e),n.blockedOn=t,!1;e.shift()}return!0}function iv(n,e,t){Hc(n)&&t.delete(e)}function tA(){Np=!1,vs!==null&&Hc(vs)&&(vs=null),xs!==null&&Hc(xs)&&(xs=null),ys!==null&&Hc(ys)&&(ys=null),Bl.forEach(iv),Gl.forEach(iv)}function ll(n,e){n.blockedOn===e&&(n.blockedOn=null,Np||(Np=!0,ui.unstable_scheduleCallback(ui.unstable_NormalPriority,tA)))}function Wl(n){function e(r){return ll(r,n)}if(0<oc.length){ll(oc[0],n);for(var t=1;t<oc.length;t++){var i=oc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(vs!==null&&ll(vs,n),xs!==null&&ll(xs,n),ys!==null&&ll(ys,n),Bl.forEach(e),Gl.forEach(e),t=0;t<ds.length;t++)i=ds[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ds.length&&(t=ds[0],t.blockedOn===null);)m1(t),t.blockedOn===null&&ds.shift()}var _a=Hr.ReactCurrentBatchConfig,lf=!0;function nA(n,e,t,i){var r=yt,o=_a.transition;_a.transition=null;try{yt=1,Nm(n,e,t,i)}finally{yt=r,_a.transition=o}}function iA(n,e,t,i){var r=yt,o=_a.transition;_a.transition=null;try{yt=4,Nm(n,e,t,i)}finally{yt=r,_a.transition=o}}function Nm(n,e,t,i){if(lf){var r=Fp(n,e,t,i);if(r===null)wd(n,e,i,uf,t),nv(n,i);else if(eA(r,n,e,t,i))i.stopPropagation();else if(nv(n,i),e&4&&-1<JC.indexOf(n)){for(;r!==null;){var o=ou(r);if(o!==null&&f1(o),o=Fp(n,e,t,i),o===null&&wd(n,e,i,uf,t),o===r)break;r=o}r!==null&&i.stopPropagation()}else wd(n,e,i,null,t)}}var uf=null;function Fp(n,e,t,i){if(uf=null,n=Pm(i),n=Zs(n),n!==null)if(e=go(n),e===null)n=null;else if(t=e.tag,t===13){if(n=i1(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return uf=n,null}function g1(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HC()){case Rm:return 1;case a1:return 4;case of:case XC:return 16;case l1:return 536870912;default:return 16}default:return 16}}var ms=null,Fm=null,Xc=null;function _1(){if(Xc)return Xc;var n,e=Fm,t=e.length,i,r="value"in ms?ms.value:ms.textContent,o=r.length;for(n=0;n<t&&e[n]===r[n];n++);var l=t-n;for(i=1;i<=l&&e[t-i]===r[o-i];i++);return Xc=r.slice(n,1<i?1-i:void 0)}function qc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ac(){return!0}function rv(){return!1}function fi(n){function e(t,i,r,o,l){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(t=n[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ac:rv,this.isPropagationStopped=rv,this}return kt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),e}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Om=fi(Oa),su=kt({},Oa,{view:0,detail:0}),rA=fi(su),dd,pd,ul,Pf=kt({},su,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ul&&(ul&&n.type==="mousemove"?(dd=n.screenX-ul.screenX,pd=n.screenY-ul.screenY):pd=dd=0,ul=n),dd)},movementY:function(n){return"movementY"in n?n.movementY:pd}}),sv=fi(Pf),sA=kt({},Pf,{dataTransfer:0}),oA=fi(sA),aA=kt({},su,{relatedTarget:0}),md=fi(aA),lA=kt({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),uA=fi(lA),cA=kt({},Oa,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),fA=fi(cA),hA=kt({},Oa,{data:0}),ov=fi(hA),dA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gA(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=mA[n])?!!e[n]:!1}function zm(){return gA}var _A=kt({},su,{key:function(n){if(n.key){var e=dA[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=qc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pA[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zm,charCode:function(n){return n.type==="keypress"?qc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vA=fi(_A),xA=kt({},Pf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),av=fi(xA),yA=kt({},su,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zm}),SA=fi(yA),wA=kt({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),MA=fi(wA),EA=kt({},Pf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),TA=fi(EA),bA=[9,13,27,32],Um=kr&&"CompositionEvent"in window,Cl=null;kr&&"documentMode"in document&&(Cl=document.documentMode);var CA=kr&&"TextEvent"in window&&!Cl,v1=kr&&(!Um||Cl&&8<Cl&&11>=Cl),lv=String.fromCharCode(32),uv=!1;function x1(n,e){switch(n){case"keyup":return bA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y1(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var na=!1;function AA(n,e){switch(n){case"compositionend":return y1(e);case"keypress":return e.which!==32?null:(uv=!0,lv);case"textInput":return n=e.data,n===lv&&uv?null:n;default:return null}}function LA(n,e){if(na)return n==="compositionend"||!Um&&x1(n,e)?(n=_1(),Xc=Fm=ms=null,na=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return v1&&e.locale!=="ko"?null:e.data;default:return null}}var PA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cv(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!PA[n.type]:e==="textarea"}function S1(n,e,t,i){Qy(i),e=cf(e,"onChange"),0<e.length&&(t=new Om("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Al=null,Vl=null;function RA(n){D1(n,0)}function Rf(n){var e=sa(n);if(Xy(e))return n}function DA(n,e){if(n==="change")return e}var w1=!1;if(kr){var gd;if(kr){var _d="oninput"in document;if(!_d){var fv=document.createElement("div");fv.setAttribute("oninput","return;"),_d=typeof fv.oninput=="function"}gd=_d}else gd=!1;w1=gd&&(!document.documentMode||9<document.documentMode)}function hv(){Al&&(Al.detachEvent("onpropertychange",M1),Vl=Al=null)}function M1(n){if(n.propertyName==="value"&&Rf(Vl)){var e=[];S1(e,Vl,n,Pm(n)),n1(RA,e)}}function IA(n,e,t){n==="focusin"?(hv(),Al=e,Vl=t,Al.attachEvent("onpropertychange",M1)):n==="focusout"&&hv()}function NA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Rf(Vl)}function FA(n,e){if(n==="click")return Rf(e)}function OA(n,e){if(n==="input"||n==="change")return Rf(e)}function zA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ji=typeof Object.is=="function"?Object.is:zA;function Hl(n,e){if(Ji(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!_p.call(e,r)||!Ji(n[r],e[r]))return!1}return!0}function dv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pv(n,e){var t=dv(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=dv(t)}}function E1(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?E1(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function T1(){for(var n=window,e=nf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=nf(n.document)}return e}function km(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function UA(n){var e=T1(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&E1(t.ownerDocument.documentElement,t)){if(i!==null&&km(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!n.extend&&o>i&&(r=i,i=o,o=r),r=pv(t,o);var l=pv(t,i);r&&l&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==l.node||n.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),o>i?(n.addRange(e),n.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kA=kr&&"documentMode"in document&&11>=document.documentMode,ia=null,Op=null,Ll=null,zp=!1;function mv(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zp||ia==null||ia!==nf(i)||(i=ia,"selectionStart"in i&&km(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ll&&Hl(Ll,i)||(Ll=i,i=cf(Op,"onSelect"),0<i.length&&(e=new Om("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ia)))}function lc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ra={animationend:lc("Animation","AnimationEnd"),animationiteration:lc("Animation","AnimationIteration"),animationstart:lc("Animation","AnimationStart"),transitionend:lc("Transition","TransitionEnd")},vd={},b1={};kr&&(b1=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Df(n){if(vd[n])return vd[n];if(!ra[n])return n;var e=ra[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in b1)return vd[n]=e[t];return n}var C1=Df("animationend"),A1=Df("animationiteration"),L1=Df("animationstart"),P1=Df("transitionend"),R1=new Map,gv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ls(n,e){R1.set(n,e),mo(e,[n])}for(var xd=0;xd<gv.length;xd++){var yd=gv[xd],BA=yd.toLowerCase(),GA=yd[0].toUpperCase()+yd.slice(1);Ls(BA,"on"+GA)}Ls(C1,"onAnimationEnd");Ls(A1,"onAnimationIteration");Ls(L1,"onAnimationStart");Ls("dblclick","onDoubleClick");Ls("focusin","onFocus");Ls("focusout","onBlur");Ls(P1,"onTransitionEnd");Ma("onMouseEnter",["mouseout","mouseover"]);Ma("onMouseLeave",["mouseout","mouseover"]);Ma("onPointerEnter",["pointerout","pointerover"]);Ma("onPointerLeave",["pointerout","pointerover"]);mo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mo("onBeforeInput",["compositionend","keypress","textInput","paste"]);mo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WA=new Set("cancel close invalid load scroll toggle".split(" ").concat(xl));function _v(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,BC(i,e,void 0,n),n.currentTarget=null}function D1(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var u=i[l],f=u.instance,h=u.currentTarget;if(u=u.listener,f!==o&&r.isPropagationStopped())break e;_v(r,u,h),o=f}else for(l=0;l<i.length;l++){if(u=i[l],f=u.instance,h=u.currentTarget,u=u.listener,f!==o&&r.isPropagationStopped())break e;_v(r,u,h),o=f}}}if(sf)throw n=Dp,sf=!1,Dp=null,n}function bt(n,e){var t=e[Wp];t===void 0&&(t=e[Wp]=new Set);var i=n+"__bubble";t.has(i)||(I1(e,n,2,!1),t.add(i))}function Sd(n,e,t){var i=0;e&&(i|=4),I1(t,n,i,e)}var uc="_reactListening"+Math.random().toString(36).slice(2);function Xl(n){if(!n[uc]){n[uc]=!0,By.forEach(function(t){t!=="selectionchange"&&(WA.has(t)||Sd(t,!1,n),Sd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[uc]||(e[uc]=!0,Sd("selectionchange",!1,e))}}function I1(n,e,t,i){switch(g1(e)){case 1:var r=nA;break;case 4:r=iA;break;default:r=Nm}t=r.bind(null,e,t,n),r=void 0,!Rp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function wd(n,e,t,i,r){var o=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===r||u.nodeType===8&&u.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===r||f.nodeType===8&&f.parentNode===r))return;l=l.return}for(;u!==null;){if(l=Zs(u),l===null)return;if(f=l.tag,f===5||f===6){i=o=l;continue e}u=u.parentNode}}i=i.return}n1(function(){var h=o,p=Pm(t),d=[];e:{var m=R1.get(n);if(m!==void 0){var y=Om,w=n;switch(n){case"keypress":if(qc(t)===0)break e;case"keydown":case"keyup":y=vA;break;case"focusin":w="focus",y=md;break;case"focusout":w="blur",y=md;break;case"beforeblur":case"afterblur":y=md;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=sv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=oA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=SA;break;case C1:case A1:case L1:y=uA;break;case P1:y=MA;break;case"scroll":y=rA;break;case"wheel":y=TA;break;case"copy":case"cut":case"paste":y=fA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=av}var v=(e&4)!==0,_=!v&&n==="scroll",x=v?m!==null?m+"Capture":null:m;v=[];for(var S=h,E;S!==null;){E=S;var T=E.stateNode;if(E.tag===5&&T!==null&&(E=T,x!==null&&(T=kl(S,x),T!=null&&v.push(ql(S,T,E)))),_)break;S=S.return}0<v.length&&(m=new y(m,w,null,t,p),d.push({event:m,listeners:v}))}}if((e&7)===0){e:{if(m=n==="mouseover"||n==="pointerover",y=n==="mouseout"||n==="pointerout",m&&t!==Lp&&(w=t.relatedTarget||t.fromElement)&&(Zs(w)||w[Br]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=t.relatedTarget||t.toElement,y=h,w=w?Zs(w):null,w!==null&&(_=go(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=h),y!==w)){if(v=sv,T="onMouseLeave",x="onMouseEnter",S="mouse",(n==="pointerout"||n==="pointerover")&&(v=av,T="onPointerLeave",x="onPointerEnter",S="pointer"),_=y==null?m:sa(y),E=w==null?m:sa(w),m=new v(T,S+"leave",y,t,p),m.target=_,m.relatedTarget=E,T=null,Zs(p)===h&&(v=new v(x,S+"enter",w,t,p),v.target=E,v.relatedTarget=_,T=v),_=T,y&&w)t:{for(v=y,x=w,S=0,E=v;E;E=Oo(E))S++;for(E=0,T=x;T;T=Oo(T))E++;for(;0<S-E;)v=Oo(v),S--;for(;0<E-S;)x=Oo(x),E--;for(;S--;){if(v===x||x!==null&&v===x.alternate)break t;v=Oo(v),x=Oo(x)}v=null}else v=null;y!==null&&vv(d,m,y,v,!1),w!==null&&_!==null&&vv(d,_,w,v,!0)}}e:{if(m=h?sa(h):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var A=DA;else if(cv(m))if(w1)A=OA;else{A=NA;var R=IA}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(A=FA);if(A&&(A=A(n,h))){S1(d,A,t,p);break e}R&&R(n,m,h),n==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&Ep(m,"number",m.value)}switch(R=h?sa(h):window,n){case"focusin":(cv(R)||R.contentEditable==="true")&&(ia=R,Op=h,Ll=null);break;case"focusout":Ll=Op=ia=null;break;case"mousedown":zp=!0;break;case"contextmenu":case"mouseup":case"dragend":zp=!1,mv(d,t,p);break;case"selectionchange":if(kA)break;case"keydown":case"keyup":mv(d,t,p)}var O;if(Um)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else na?x1(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(v1&&t.locale!=="ko"&&(na||b!=="onCompositionStart"?b==="onCompositionEnd"&&na&&(O=_1()):(ms=p,Fm="value"in ms?ms.value:ms.textContent,na=!0)),R=cf(h,b),0<R.length&&(b=new ov(b,n,null,t,p),d.push({event:b,listeners:R}),O?b.data=O:(O=y1(t),O!==null&&(b.data=O)))),(O=CA?AA(n,t):LA(n,t))&&(h=cf(h,"onBeforeInput"),0<h.length&&(p=new ov("onBeforeInput","beforeinput",null,t,p),d.push({event:p,listeners:h}),p.data=O))}D1(d,e)})}function ql(n,e,t){return{instance:n,listener:e,currentTarget:t}}function cf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=kl(n,t),o!=null&&i.unshift(ql(n,o,r)),o=kl(n,e),o!=null&&i.push(ql(n,o,r))),n=n.return}return i}function Oo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vv(n,e,t,i,r){for(var o=e._reactName,l=[];t!==null&&t!==i;){var u=t,f=u.alternate,h=u.stateNode;if(f!==null&&f===i)break;u.tag===5&&h!==null&&(u=h,r?(f=kl(t,o),f!=null&&l.unshift(ql(t,f,u))):r||(f=kl(t,o),f!=null&&l.push(ql(t,f,u)))),t=t.return}l.length!==0&&n.push({event:e,listeners:l})}var VA=/\r\n?/g,HA=/\u0000|\uFFFD/g;function xv(n){return(typeof n=="string"?n:""+n).replace(VA,`
`).replace(HA,"")}function cc(n,e,t){if(e=xv(e),xv(n)!==e&&t)throw Error(me(425))}function ff(){}var Up=null,kp=null;function Bp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gp=typeof setTimeout=="function"?setTimeout:void 0,XA=typeof clearTimeout=="function"?clearTimeout:void 0,yv=typeof Promise=="function"?Promise:void 0,qA=typeof queueMicrotask=="function"?queueMicrotask:typeof yv<"u"?function(n){return yv.resolve(null).then(n).catch(jA)}:Gp;function jA(n){setTimeout(function(){throw n})}function Md(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Wl(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Wl(e)}function Ss(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Sv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var za=Math.random().toString(36).slice(2),ar="__reactFiber$"+za,jl="__reactProps$"+za,Br="__reactContainer$"+za,Wp="__reactEvents$"+za,YA="__reactListeners$"+za,$A="__reactHandles$"+za;function Zs(n){var e=n[ar];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Br]||t[ar]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Sv(n);n!==null;){if(t=n[ar])return t;n=Sv(n)}return e}n=t,t=n.parentNode}return null}function ou(n){return n=n[ar]||n[Br],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function sa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(me(33))}function If(n){return n[jl]||null}var Vp=[],oa=-1;function Ps(n){return{current:n}}function Ct(n){0>oa||(n.current=Vp[oa],Vp[oa]=null,oa--)}function Et(n,e){oa++,Vp[oa]=n.current,n.current=e}var As={},Cn=Ps(As),jn=Ps(!1),oo=As;function Ea(n,e){var t=n.type.contextTypes;if(!t)return As;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=e[o];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Yn(n){return n=n.childContextTypes,n!=null}function hf(){Ct(jn),Ct(Cn)}function wv(n,e,t){if(Cn.current!==As)throw Error(me(168));Et(Cn,e),Et(jn,t)}function N1(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,IC(n)||"Unknown",r));return kt({},t,i)}function df(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||As,oo=Cn.current,Et(Cn,n),Et(jn,jn.current),!0}function Mv(n,e,t){var i=n.stateNode;if(!i)throw Error(me(169));t?(n=N1(n,e,oo),i.__reactInternalMemoizedMergedChildContext=n,Ct(jn),Ct(Cn),Et(Cn,n)):Ct(jn),Et(jn,t)}var Ir=null,Nf=!1,Ed=!1;function F1(n){Ir===null?Ir=[n]:Ir.push(n)}function ZA(n){Nf=!0,F1(n)}function Rs(){if(!Ed&&Ir!==null){Ed=!0;var n=0,e=yt;try{var t=Ir;for(yt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ir=null,Nf=!1}catch(r){throw Ir!==null&&(Ir=Ir.slice(n+1)),o1(Rm,Rs),r}finally{yt=e,Ed=!1}}return null}var aa=[],la=0,pf=null,mf=0,Mi=[],Ei=0,ao=null,Fr=1,Or="";function Hs(n,e){aa[la++]=mf,aa[la++]=pf,pf=n,mf=e}function O1(n,e,t){Mi[Ei++]=Fr,Mi[Ei++]=Or,Mi[Ei++]=ao,ao=n;var i=Fr;n=Or;var r=32-Ki(i)-1;i&=~(1<<r),t+=1;var o=32-Ki(e)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,Fr=1<<32-Ki(e)+r|t<<r|i,Or=o+n}else Fr=1<<o|t<<r|i,Or=n}function Bm(n){n.return!==null&&(Hs(n,1),O1(n,1,0))}function Gm(n){for(;n===pf;)pf=aa[--la],aa[la]=null,mf=aa[--la],aa[la]=null;for(;n===ao;)ao=Mi[--Ei],Mi[Ei]=null,Or=Mi[--Ei],Mi[Ei]=null,Fr=Mi[--Ei],Mi[Ei]=null}var li=null,ai=null,Dt=!1,ji=null;function z1(n,e){var t=bi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ev(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,li=n,ai=Ss(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,li=n,ai=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ao!==null?{id:Fr,overflow:Or}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=bi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,li=n,ai=null,!0):!1;default:return!1}}function Hp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xp(n){if(Dt){var e=ai;if(e){var t=e;if(!Ev(n,e)){if(Hp(n))throw Error(me(418));e=Ss(t.nextSibling);var i=li;e&&Ev(n,e)?z1(i,t):(n.flags=n.flags&-4097|2,Dt=!1,li=n)}}else{if(Hp(n))throw Error(me(418));n.flags=n.flags&-4097|2,Dt=!1,li=n}}}function Tv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;li=n}function fc(n){if(n!==li)return!1;if(!Dt)return Tv(n),Dt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Bp(n.type,n.memoizedProps)),e&&(e=ai)){if(Hp(n))throw U1(),Error(me(418));for(;e;)z1(n,e),e=Ss(e.nextSibling)}if(Tv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(me(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){ai=Ss(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}ai=null}}else ai=li?Ss(n.stateNode.nextSibling):null;return!0}function U1(){for(var n=ai;n;)n=Ss(n.nextSibling)}function Ta(){ai=li=null,Dt=!1}function Wm(n){ji===null?ji=[n]:ji.push(n)}var KA=Hr.ReactCurrentBatchConfig;function Xi(n,e){if(n&&n.defaultProps){e=kt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var gf=Ps(null),_f=null,ua=null,Vm=null;function Hm(){Vm=ua=_f=null}function Xm(n){var e=gf.current;Ct(gf),n._currentValue=e}function qp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function va(n,e){_f=n,Vm=ua=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(qn=!0),n.firstContext=null)}function Pi(n){var e=n._currentValue;if(Vm!==n)if(n={context:n,memoizedValue:e,next:null},ua===null){if(_f===null)throw Error(me(308));ua=n,_f.dependencies={lanes:0,firstContext:n}}else ua=ua.next=n;return e}var Ks=null;function qm(n){Ks===null?Ks=[n]:Ks.push(n)}function k1(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,qm(e)):(t.next=r.next,r.next=t),e.interleaved=t,Gr(n,i)}function Gr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var hs=!1;function jm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B1(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ws(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(ft&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gr(n,t)}return r=i.interleaved,r===null?(e.next=e,qm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gr(n,t)}function jc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Dm(n,t)}}function bv(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?r=o=e:o=o.next=e}else r=o=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function vf(n,e,t,i){var r=n.updateQueue;hs=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,u=r.shared.pending;if(u!==null){r.shared.pending=null;var f=u,h=f.next;f.next=null,l===null?o=h:l.next=h,l=f;var p=n.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==l&&(u===null?p.firstBaseUpdate=h:u.next=h,p.lastBaseUpdate=f))}if(o!==null){var d=r.baseState;l=0,p=h=f=null,u=o;do{var m=u.lane,y=u.eventTime;if((i&m)===m){p!==null&&(p=p.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=n,v=u;switch(m=e,y=t,v.tag){case 1:if(w=v.payload,typeof w=="function"){d=w.call(y,d,m);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,m=typeof w=="function"?w.call(y,d,m):w,m==null)break e;d=kt({},d,m);break e;case 2:hs=!0}}u.callback!==null&&u.lane!==0&&(n.flags|=64,m=r.effects,m===null?r.effects=[u]:m.push(u))}else y={eventTime:y,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(h=p=y,f=d):p=p.next=y,l|=m;if(u=u.next,u===null){if(u=r.shared.pending,u===null)break;m=u,u=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(1);if(p===null&&(f=d),r.baseState=f,r.firstBaseUpdate=h,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do l|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);uo|=l,n.lanes=l,n.memoizedState=d}}function Cv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var G1=new ky.Component().refs;function jp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:kt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ff={isMounted:function(n){return(n=n._reactInternals)?go(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Nn(),r=Es(n),o=zr(i,r);o.payload=e,t!=null&&(o.callback=t),e=ws(n,o,r),e!==null&&(Qi(e,n,r,i),jc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Nn(),r=Es(n),o=zr(i,r);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=ws(n,o,r),e!==null&&(Qi(e,n,r,i),jc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Nn(),i=Es(n),r=zr(t,i);r.tag=2,e!=null&&(r.callback=e),e=ws(n,r,i),e!==null&&(Qi(e,n,i,t),jc(e,n,i))}};function Av(n,e,t,i,r,o,l){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!Hl(t,i)||!Hl(r,o):!0}function W1(n,e,t){var i=!1,r=As,o=e.contextType;return typeof o=="object"&&o!==null?o=Pi(o):(r=Yn(e)?oo:Cn.current,i=e.contextTypes,o=(i=i!=null)?Ea(n,r):As),e=new e(t,o),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ff,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=o),e}function Lv(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ff.enqueueReplaceState(e,e.state,null)}function Yp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=G1,jm(n);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Pi(o):(o=Yn(e)?oo:Cn.current,r.context=Ea(n,o)),r.state=n.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(jp(n,e,o,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ff.enqueueReplaceState(r,r.state,null),vf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function cl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(me(309));var i=t.stateNode}if(!i)throw Error(me(147,n));var r=i,o=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var u=r.refs;u===G1&&(u=r.refs={}),l===null?delete u[o]:u[o]=l},e._stringRef=o,e)}if(typeof n!="string")throw Error(me(284));if(!t._owner)throw Error(me(290,n))}return n}function hc(n,e){throw n=Object.prototype.toString.call(e),Error(me(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Pv(n){var e=n._init;return e(n._payload)}function V1(n){function e(x,S){if(n){var E=x.deletions;E===null?(x.deletions=[S],x.flags|=16):E.push(S)}}function t(x,S){if(!n)return null;for(;S!==null;)e(x,S),S=S.sibling;return null}function i(x,S){for(x=new Map;S!==null;)S.key!==null?x.set(S.key,S):x.set(S.index,S),S=S.sibling;return x}function r(x,S){return x=Ts(x,S),x.index=0,x.sibling=null,x}function o(x,S,E){return x.index=E,n?(E=x.alternate,E!==null?(E=E.index,E<S?(x.flags|=2,S):E):(x.flags|=2,S)):(x.flags|=1048576,S)}function l(x){return n&&x.alternate===null&&(x.flags|=2),x}function u(x,S,E,T){return S===null||S.tag!==6?(S=Rd(E,x.mode,T),S.return=x,S):(S=r(S,E),S.return=x,S)}function f(x,S,E,T){var A=E.type;return A===ta?p(x,S,E.props.children,T,E.key):S!==null&&(S.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===fs&&Pv(A)===S.type)?(T=r(S,E.props),T.ref=cl(x,S,E),T.return=x,T):(T=Jc(E.type,E.key,E.props,null,x.mode,T),T.ref=cl(x,S,E),T.return=x,T)}function h(x,S,E,T){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=Dd(E,x.mode,T),S.return=x,S):(S=r(S,E.children||[]),S.return=x,S)}function p(x,S,E,T,A){return S===null||S.tag!==7?(S=io(E,x.mode,T,A),S.return=x,S):(S=r(S,E),S.return=x,S)}function d(x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Rd(""+S,x.mode,E),S.return=x,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tc:return E=Jc(S.type,S.key,S.props,null,x.mode,E),E.ref=cl(x,null,S),E.return=x,E;case ea:return S=Dd(S,x.mode,E),S.return=x,S;case fs:var T=S._init;return d(x,T(S._payload),E)}if(_l(S)||sl(S))return S=io(S,x.mode,E,null),S.return=x,S;hc(x,S)}return null}function m(x,S,E,T){var A=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return A!==null?null:u(x,S,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case tc:return E.key===A?f(x,S,E,T):null;case ea:return E.key===A?h(x,S,E,T):null;case fs:return A=E._init,m(x,S,A(E._payload),T)}if(_l(E)||sl(E))return A!==null?null:p(x,S,E,T,null);hc(x,E)}return null}function y(x,S,E,T,A){if(typeof T=="string"&&T!==""||typeof T=="number")return x=x.get(E)||null,u(S,x,""+T,A);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case tc:return x=x.get(T.key===null?E:T.key)||null,f(S,x,T,A);case ea:return x=x.get(T.key===null?E:T.key)||null,h(S,x,T,A);case fs:var R=T._init;return y(x,S,E,R(T._payload),A)}if(_l(T)||sl(T))return x=x.get(E)||null,p(S,x,T,A,null);hc(S,T)}return null}function w(x,S,E,T){for(var A=null,R=null,O=S,b=S=0,F=null;O!==null&&b<E.length;b++){O.index>b?(F=O,O=null):F=O.sibling;var V=m(x,O,E[b],T);if(V===null){O===null&&(O=F);break}n&&O&&V.alternate===null&&e(x,O),S=o(V,S,b),R===null?A=V:R.sibling=V,R=V,O=F}if(b===E.length)return t(x,O),Dt&&Hs(x,b),A;if(O===null){for(;b<E.length;b++)O=d(x,E[b],T),O!==null&&(S=o(O,S,b),R===null?A=O:R.sibling=O,R=O);return Dt&&Hs(x,b),A}for(O=i(x,O);b<E.length;b++)F=y(O,x,b,E[b],T),F!==null&&(n&&F.alternate!==null&&O.delete(F.key===null?b:F.key),S=o(F,S,b),R===null?A=F:R.sibling=F,R=F);return n&&O.forEach(function(ce){return e(x,ce)}),Dt&&Hs(x,b),A}function v(x,S,E,T){var A=sl(E);if(typeof A!="function")throw Error(me(150));if(E=A.call(E),E==null)throw Error(me(151));for(var R=A=null,O=S,b=S=0,F=null,V=E.next();O!==null&&!V.done;b++,V=E.next()){O.index>b?(F=O,O=null):F=O.sibling;var ce=m(x,O,V.value,T);if(ce===null){O===null&&(O=F);break}n&&O&&ce.alternate===null&&e(x,O),S=o(ce,S,b),R===null?A=ce:R.sibling=ce,R=ce,O=F}if(V.done)return t(x,O),Dt&&Hs(x,b),A;if(O===null){for(;!V.done;b++,V=E.next())V=d(x,V.value,T),V!==null&&(S=o(V,S,b),R===null?A=V:R.sibling=V,R=V);return Dt&&Hs(x,b),A}for(O=i(x,O);!V.done;b++,V=E.next())V=y(O,x,b,V.value,T),V!==null&&(n&&V.alternate!==null&&O.delete(V.key===null?b:V.key),S=o(V,S,b),R===null?A=V:R.sibling=V,R=V);return n&&O.forEach(function(ge){return e(x,ge)}),Dt&&Hs(x,b),A}function _(x,S,E,T){if(typeof E=="object"&&E!==null&&E.type===ta&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case tc:e:{for(var A=E.key,R=S;R!==null;){if(R.key===A){if(A=E.type,A===ta){if(R.tag===7){t(x,R.sibling),S=r(R,E.props.children),S.return=x,x=S;break e}}else if(R.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===fs&&Pv(A)===R.type){t(x,R.sibling),S=r(R,E.props),S.ref=cl(x,R,E),S.return=x,x=S;break e}t(x,R);break}else e(x,R);R=R.sibling}E.type===ta?(S=io(E.props.children,x.mode,T,E.key),S.return=x,x=S):(T=Jc(E.type,E.key,E.props,null,x.mode,T),T.ref=cl(x,S,E),T.return=x,x=T)}return l(x);case ea:e:{for(R=E.key;S!==null;){if(S.key===R)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){t(x,S.sibling),S=r(S,E.children||[]),S.return=x,x=S;break e}else{t(x,S);break}else e(x,S);S=S.sibling}S=Dd(E,x.mode,T),S.return=x,x=S}return l(x);case fs:return R=E._init,_(x,S,R(E._payload),T)}if(_l(E))return w(x,S,E,T);if(sl(E))return v(x,S,E,T);hc(x,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,S!==null&&S.tag===6?(t(x,S.sibling),S=r(S,E),S.return=x,x=S):(t(x,S),S=Rd(E,x.mode,T),S.return=x,x=S),l(x)):t(x,S)}return _}var ba=V1(!0),H1=V1(!1),au={},cr=Ps(au),Yl=Ps(au),$l=Ps(au);function Qs(n){if(n===au)throw Error(me(174));return n}function Ym(n,e){switch(Et($l,e),Et(Yl,n),Et(cr,au),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=bp(e,n)}Ct(cr),Et(cr,e)}function Ca(){Ct(cr),Ct(Yl),Ct($l)}function X1(n){Qs($l.current);var e=Qs(cr.current),t=bp(e,n.type);e!==t&&(Et(Yl,n),Et(cr,t))}function $m(n){Yl.current===n&&(Ct(cr),Ct(Yl))}var zt=Ps(0);function xf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Td=[];function Zm(){for(var n=0;n<Td.length;n++)Td[n]._workInProgressVersionPrimary=null;Td.length=0}var Yc=Hr.ReactCurrentDispatcher,bd=Hr.ReactCurrentBatchConfig,lo=0,Ut=null,tn=null,cn=null,yf=!1,Pl=!1,Zl=0,QA=0;function wn(){throw Error(me(321))}function Km(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ji(n[t],e[t]))return!1;return!0}function Qm(n,e,t,i,r,o){if(lo=o,Ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yc.current=n===null||n.memoizedState===null?nL:iL,n=t(i,r),Pl){o=0;do{if(Pl=!1,Zl=0,25<=o)throw Error(me(301));o+=1,cn=tn=null,e.updateQueue=null,Yc.current=rL,n=t(i,r)}while(Pl)}if(Yc.current=Sf,e=tn!==null&&tn.next!==null,lo=0,cn=tn=Ut=null,yf=!1,e)throw Error(me(300));return n}function Jm(){var n=Zl!==0;return Zl=0,n}function sr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Ut.memoizedState=cn=n:cn=cn.next=n,cn}function Ri(){if(tn===null){var n=Ut.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var e=cn===null?Ut.memoizedState:cn.next;if(e!==null)cn=e,tn=n;else{if(n===null)throw Error(me(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},cn===null?Ut.memoizedState=cn=n:cn=cn.next=n}return cn}function Kl(n,e){return typeof e=="function"?e(n):e}function Cd(n){var e=Ri(),t=e.queue;if(t===null)throw Error(me(311));t.lastRenderedReducer=n;var i=tn,r=i.baseQueue,o=t.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,i=i.baseState;var u=l=null,f=null,h=o;do{var p=h.lane;if((lo&p)===p)f!==null&&(f=f.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),i=h.hasEagerState?h.eagerState:n(i,h.action);else{var d={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};f===null?(u=f=d,l=i):f=f.next=d,Ut.lanes|=p,uo|=p}h=h.next}while(h!==null&&h!==o);f===null?l=i:f.next=u,Ji(i,e.memoizedState)||(qn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=f,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do o=r.lane,Ut.lanes|=o,uo|=o,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ad(n){var e=Ri(),t=e.queue;if(t===null)throw Error(me(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,o=e.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do o=n(o,l.action),l=l.next;while(l!==r);Ji(o,e.memoizedState)||(qn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,i]}function q1(){}function j1(n,e){var t=Ut,i=Ri(),r=e(),o=!Ji(i.memoizedState,r);if(o&&(i.memoizedState=r,qn=!0),i=i.queue,eg(Z1.bind(null,t,i,n),[n]),i.getSnapshot!==e||o||cn!==null&&cn.memoizedState.tag&1){if(t.flags|=2048,Ql(9,$1.bind(null,t,i,r,e),void 0,null),fn===null)throw Error(me(349));(lo&30)!==0||Y1(t,e,r)}return r}function Y1(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function $1(n,e,t,i){e.value=t,e.getSnapshot=i,K1(e)&&Q1(n)}function Z1(n,e,t){return t(function(){K1(e)&&Q1(n)})}function K1(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ji(n,t)}catch{return!0}}function Q1(n){var e=Gr(n,1);e!==null&&Qi(e,n,1,-1)}function Rv(n){var e=sr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:n},e.queue=n,n=n.dispatch=tL.bind(null,Ut,n),[e.memoizedState,n]}function Ql(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function J1(){return Ri().memoizedState}function $c(n,e,t,i){var r=sr();Ut.flags|=n,r.memoizedState=Ql(1|e,t,void 0,i===void 0?null:i)}function Of(n,e,t,i){var r=Ri();i=i===void 0?null:i;var o=void 0;if(tn!==null){var l=tn.memoizedState;if(o=l.destroy,i!==null&&Km(i,l.deps)){r.memoizedState=Ql(e,t,o,i);return}}Ut.flags|=n,r.memoizedState=Ql(1|e,t,o,i)}function Dv(n,e){return $c(8390656,8,n,e)}function eg(n,e){return Of(2048,8,n,e)}function eS(n,e){return Of(4,2,n,e)}function tS(n,e){return Of(4,4,n,e)}function nS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function iS(n,e,t){return t=t!=null?t.concat([n]):null,Of(4,4,nS.bind(null,e,n),t)}function tg(){}function rS(n,e){var t=Ri();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Km(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function sS(n,e){var t=Ri();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Km(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function oS(n,e,t){return(lo&21)===0?(n.baseState&&(n.baseState=!1,qn=!0),n.memoizedState=t):(Ji(t,e)||(t=u1(),Ut.lanes|=t,uo|=t,n.baseState=!0),e)}function JA(n,e){var t=yt;yt=t!==0&&4>t?t:4,n(!0);var i=bd.transition;bd.transition={};try{n(!1),e()}finally{yt=t,bd.transition=i}}function aS(){return Ri().memoizedState}function eL(n,e,t){var i=Es(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},lS(n))uS(e,t);else if(t=k1(n,e,t,i),t!==null){var r=Nn();Qi(t,n,i,r),cS(t,e,i)}}function tL(n,e,t){var i=Es(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(lS(n))uS(e,r);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,t);if(r.hasEagerState=!0,r.eagerState=u,Ji(u,l)){var f=e.interleaved;f===null?(r.next=r,qm(e)):(r.next=f.next,f.next=r),e.interleaved=r;return}}catch{}finally{}t=k1(n,e,r,i),t!==null&&(r=Nn(),Qi(t,n,i,r),cS(t,e,i))}}function lS(n){var e=n.alternate;return n===Ut||e!==null&&e===Ut}function uS(n,e){Pl=yf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function cS(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Dm(n,t)}}var Sf={readContext:Pi,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},nL={readContext:Pi,useCallback:function(n,e){return sr().memoizedState=[n,e===void 0?null:e],n},useContext:Pi,useEffect:Dv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,$c(4194308,4,nS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return $c(4194308,4,n,e)},useInsertionEffect:function(n,e){return $c(4,2,n,e)},useMemo:function(n,e){var t=sr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=sr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=eL.bind(null,Ut,n),[i.memoizedState,n]},useRef:function(n){var e=sr();return n={current:n},e.memoizedState=n},useState:Rv,useDebugValue:tg,useDeferredValue:function(n){return sr().memoizedState=n},useTransition:function(){var n=Rv(!1),e=n[0];return n=JA.bind(null,n[1]),sr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ut,r=sr();if(Dt){if(t===void 0)throw Error(me(407));t=t()}else{if(t=e(),fn===null)throw Error(me(349));(lo&30)!==0||Y1(i,e,t)}r.memoizedState=t;var o={value:t,getSnapshot:e};return r.queue=o,Dv(Z1.bind(null,i,o,n),[n]),i.flags|=2048,Ql(9,$1.bind(null,i,o,t,e),void 0,null),t},useId:function(){var n=sr(),e=fn.identifierPrefix;if(Dt){var t=Or,i=Fr;t=(i&~(1<<32-Ki(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Zl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=QA++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},iL={readContext:Pi,useCallback:rS,useContext:Pi,useEffect:eg,useImperativeHandle:iS,useInsertionEffect:eS,useLayoutEffect:tS,useMemo:sS,useReducer:Cd,useRef:J1,useState:function(){return Cd(Kl)},useDebugValue:tg,useDeferredValue:function(n){var e=Ri();return oS(e,tn.memoizedState,n)},useTransition:function(){var n=Cd(Kl)[0],e=Ri().memoizedState;return[n,e]},useMutableSource:q1,useSyncExternalStore:j1,useId:aS,unstable_isNewReconciler:!1},rL={readContext:Pi,useCallback:rS,useContext:Pi,useEffect:eg,useImperativeHandle:iS,useInsertionEffect:eS,useLayoutEffect:tS,useMemo:sS,useReducer:Ad,useRef:J1,useState:function(){return Ad(Kl)},useDebugValue:tg,useDeferredValue:function(n){var e=Ri();return tn===null?e.memoizedState=n:oS(e,tn.memoizedState,n)},useTransition:function(){var n=Ad(Kl)[0],e=Ri().memoizedState;return[n,e]},useMutableSource:q1,useSyncExternalStore:j1,useId:aS,unstable_isNewReconciler:!1};function Aa(n,e){try{var t="",i=e;do t+=DC(i),i=i.return;while(i);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:e,stack:r,digest:null}}function Ld(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function $p(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var sL=typeof WeakMap=="function"?WeakMap:Map;function fS(n,e,t){t=zr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Mf||(Mf=!0,sm=i),$p(n,e)},t}function hS(n,e,t){t=zr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){$p(n,e)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){$p(n,e),typeof i!="function"&&(Ms===null?Ms=new Set([this]):Ms.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),t}function Iv(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new sL;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=xL.bind(null,n,e,t),e.then(n,n))}function Nv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Fv(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=zr(-1,1),e.tag=2,ws(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var oL=Hr.ReactCurrentOwner,qn=!1;function In(n,e,t,i){e.child=n===null?H1(e,null,t,i):ba(e,n.child,t,i)}function Ov(n,e,t,i,r){t=t.render;var o=e.ref;return va(e,r),i=Qm(n,e,t,i,o,r),t=Jm(),n!==null&&!qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wr(n,e,r)):(Dt&&t&&Bm(e),e.flags|=1,In(n,e,i,r),e.child)}function zv(n,e,t,i,r){if(n===null){var o=t.type;return typeof o=="function"&&!ug(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,dS(n,e,o,i,r)):(n=Jc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(o=n.child,(n.lanes&r)===0){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Hl,t(l,i)&&n.ref===e.ref)return Wr(n,e,r)}return e.flags|=1,n=Ts(o,i),n.ref=e.ref,n.return=e,e.child=n}function dS(n,e,t,i,r){if(n!==null){var o=n.memoizedProps;if(Hl(o,i)&&n.ref===e.ref)if(qn=!1,e.pendingProps=i=o,(n.lanes&r)!==0)(n.flags&131072)!==0&&(qn=!0);else return e.lanes=n.lanes,Wr(n,e,r)}return Zp(n,e,t,i,r)}function pS(n,e,t){var i=e.pendingProps,r=i.children,o=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(fa,oi),oi|=t;else{if((t&1073741824)===0)return n=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Et(fa,oi),oi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,Et(fa,oi),oi|=i}else o!==null?(i=o.baseLanes|t,e.memoizedState=null):i=t,Et(fa,oi),oi|=i;return In(n,e,r,t),e.child}function mS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Zp(n,e,t,i,r){var o=Yn(t)?oo:Cn.current;return o=Ea(e,o),va(e,r),t=Qm(n,e,t,i,o,r),i=Jm(),n!==null&&!qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wr(n,e,r)):(Dt&&i&&Bm(e),e.flags|=1,In(n,e,t,r),e.child)}function Uv(n,e,t,i,r){if(Yn(t)){var o=!0;df(e)}else o=!1;if(va(e,r),e.stateNode===null)Zc(n,e),W1(e,t,i),Yp(e,t,i,r),i=!0;else if(n===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var f=l.context,h=t.contextType;typeof h=="object"&&h!==null?h=Pi(h):(h=Yn(t)?oo:Cn.current,h=Ea(e,h));var p=t.getDerivedStateFromProps,d=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==i||f!==h)&&Lv(e,l,i,h),hs=!1;var m=e.memoizedState;l.state=m,vf(e,i,l,r),f=e.memoizedState,u!==i||m!==f||jn.current||hs?(typeof p=="function"&&(jp(e,t,p,i),f=e.memoizedState),(u=hs||Av(e,t,u,i,m,f,h))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=f),l.props=i,l.state=f,l.context=h,i=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,B1(n,e),u=e.memoizedProps,h=e.type===e.elementType?u:Xi(e.type,u),l.props=h,d=e.pendingProps,m=l.context,f=t.contextType,typeof f=="object"&&f!==null?f=Pi(f):(f=Yn(t)?oo:Cn.current,f=Ea(e,f));var y=t.getDerivedStateFromProps;(p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==d||m!==f)&&Lv(e,l,i,f),hs=!1,m=e.memoizedState,l.state=m,vf(e,i,l,r);var w=e.memoizedState;u!==d||m!==w||jn.current||hs?(typeof y=="function"&&(jp(e,t,y,i),w=e.memoizedState),(h=hs||Av(e,t,h,i,m,w,f)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,w,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,w,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=w),l.props=i,l.state=w,l.context=f,i=h):(typeof l.componentDidUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),i=!1)}return Kp(n,e,t,i,o,r)}function Kp(n,e,t,i,r,o){mS(n,e);var l=(e.flags&128)!==0;if(!i&&!l)return r&&Mv(e,t,!1),Wr(n,e,o);i=e.stateNode,oL.current=e;var u=l&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&l?(e.child=ba(e,n.child,null,o),e.child=ba(e,null,u,o)):In(n,e,u,o),e.memoizedState=i.state,r&&Mv(e,t,!0),e.child}function gS(n){var e=n.stateNode;e.pendingContext?wv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&wv(n,e.context,!1),Ym(n,e.containerInfo)}function kv(n,e,t,i,r){return Ta(),Wm(r),e.flags|=256,In(n,e,t,i),e.child}var Qp={dehydrated:null,treeContext:null,retryLane:0};function Jp(n){return{baseLanes:n,cachePool:null,transitions:null}}function _S(n,e,t){var i=e.pendingProps,r=zt.current,o=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=n!==null&&n.memoizedState===null?!1:(r&2)!==0),u?(o=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Et(zt,r&1),n===null)return Xp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(l=i.children,n=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},(i&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=kf(l,i,0,null),n=io(n,i,t,null),o.return=e,n.return=e,o.sibling=n,e.child=o,e.child.memoizedState=Jp(t),e.memoizedState=Qp,n):ng(e,l));if(r=n.memoizedState,r!==null&&(u=r.dehydrated,u!==null))return aL(n,e,l,i,u,r,t);if(o){o=i.fallback,l=e.mode,r=n.child,u=r.sibling;var f={mode:"hidden",children:i.children};return(l&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=f,e.deletions=null):(i=Ts(r,f),i.subtreeFlags=r.subtreeFlags&14680064),u!==null?o=Ts(u,o):(o=io(o,l,t,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=n.child.memoizedState,l=l===null?Jp(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=n.childLanes&~t,e.memoizedState=Qp,i}return o=n.child,n=o.sibling,i=Ts(o,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function ng(n,e){return e=kf({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function dc(n,e,t,i){return i!==null&&Wm(i),ba(e,n.child,null,t),n=ng(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function aL(n,e,t,i,r,o,l){if(t)return e.flags&256?(e.flags&=-257,i=Ld(Error(me(422))),dc(n,e,l,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=kf({mode:"visible",children:i.children},r,0,null),o=io(o,r,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,(e.mode&1)!==0&&ba(e,n.child,null,l),e.child.memoizedState=Jp(l),e.memoizedState=Qp,o);if((e.mode&1)===0)return dc(n,e,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var u=i.dgst;return i=u,o=Error(me(419)),i=Ld(o,i,void 0),dc(n,e,l,i)}if(u=(l&n.childLanes)!==0,qn||u){if(i=fn,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|l))!==0?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Gr(n,r),Qi(i,n,r,-1))}return lg(),i=Ld(Error(me(421))),dc(n,e,l,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=yL.bind(null,n),r._reactRetry=e,null):(n=o.treeContext,ai=Ss(r.nextSibling),li=e,Dt=!0,ji=null,n!==null&&(Mi[Ei++]=Fr,Mi[Ei++]=Or,Mi[Ei++]=ao,Fr=n.id,Or=n.overflow,ao=e),e=ng(e,i.children),e.flags|=4096,e)}function Bv(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),qp(n.return,e,t)}function Pd(n,e,t,i,r){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=r)}function vS(n,e,t){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(In(n,e,i.children,t),i=zt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bv(n,t,e);else if(n.tag===19)Bv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Et(zt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&xf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Pd(e,!1,r,t,o);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&xf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Pd(e,!0,t,null,o);break;case"together":Pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zc(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Wr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),uo|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(me(153));if(e.child!==null){for(n=e.child,t=Ts(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ts(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function lL(n,e,t){switch(e.tag){case 3:gS(e),Ta();break;case 5:X1(e);break;case 1:Yn(e.type)&&df(e);break;case 4:Ym(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Et(gf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Et(zt,zt.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?_S(n,e,t):(Et(zt,zt.current&1),n=Wr(n,e,t),n!==null?n.sibling:null);Et(zt,zt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return vS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Et(zt,zt.current),i)break;return null;case 22:case 23:return e.lanes=0,pS(n,e,t)}return Wr(n,e,t)}var xS,em,yS,SS;xS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};em=function(){};yS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Qs(cr.current);var o=null;switch(t){case"input":r=wp(n,r),i=wp(n,i),o=[];break;case"select":r=kt({},r,{value:void 0}),i=kt({},i,{value:void 0}),o=[];break;case"textarea":r=Tp(n,r),i=Tp(n,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ff)}Cp(t,i);var l;t=null;for(h in r)if(!i.hasOwnProperty(h)&&r.hasOwnProperty(h)&&r[h]!=null)if(h==="style"){var u=r[h];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(zl.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in i){var f=i[h];if(u=r!=null?r[h]:void 0,i.hasOwnProperty(h)&&f!==u&&(f!=null||u!=null))if(h==="style")if(u){for(l in u)!u.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in f)f.hasOwnProperty(l)&&u[l]!==f[l]&&(t||(t={}),t[l]=f[l])}else t||(o||(o=[]),o.push(h,t)),t=f;else h==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,u=u?u.__html:void 0,f!=null&&u!==f&&(o=o||[]).push(h,f)):h==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(h,""+f):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(zl.hasOwnProperty(h)?(f!=null&&h==="onScroll"&&bt("scroll",n),o||u===f||(o=[])):(o=o||[]).push(h,f))}t&&(o=o||[]).push("style",t);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};SS=function(n,e,t,i){t!==i&&(e.flags|=4)};function fl(n,e){if(!Dt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function uL(n,e,t){var i=e.pendingProps;switch(Gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(e),null;case 1:return Yn(e.type)&&hf(),Mn(e),null;case 3:return i=e.stateNode,Ca(),Ct(jn),Ct(Cn),Zm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(fc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ji!==null&&(lm(ji),ji=null))),em(n,e),Mn(e),null;case 5:$m(e);var r=Qs($l.current);if(t=e.type,n!==null&&e.stateNode!=null)yS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return Mn(e),null}if(n=Qs(cr.current),fc(e)){i=e.stateNode,t=e.type;var o=e.memoizedProps;switch(i[ar]=e,i[jl]=o,n=(e.mode&1)!==0,t){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(r=0;r<xl.length;r++)bt(xl[r],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":$_(i,o),bt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},bt("invalid",i);break;case"textarea":K_(i,o),bt("invalid",i)}Cp(t,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?i.textContent!==u&&(o.suppressHydrationWarning!==!0&&cc(i.textContent,u,n),r=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&cc(i.textContent,u,n),r=["children",""+u]):zl.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&bt("scroll",i)}switch(t){case"input":nc(i),Z_(i,o,!0);break;case"textarea":nc(i),Q_(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ff)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Yy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=l.createElement(t,{is:i.is}):(n=l.createElement(t),t==="select"&&(l=n,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):n=l.createElementNS(n,t),n[ar]=e,n[jl]=i,xS(n,e,!1,!1),e.stateNode=n;e:{switch(l=Ap(t,i),t){case"dialog":bt("cancel",n),bt("close",n),r=i;break;case"iframe":case"object":case"embed":bt("load",n),r=i;break;case"video":case"audio":for(r=0;r<xl.length;r++)bt(xl[r],n);r=i;break;case"source":bt("error",n),r=i;break;case"img":case"image":case"link":bt("error",n),bt("load",n),r=i;break;case"details":bt("toggle",n),r=i;break;case"input":$_(n,i),r=wp(n,i),bt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=kt({},i,{value:void 0}),bt("invalid",n);break;case"textarea":K_(n,i),r=Tp(n,i),bt("invalid",n);break;default:r=i}Cp(t,r),u=r;for(o in u)if(u.hasOwnProperty(o)){var f=u[o];o==="style"?Ky(n,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&$y(n,f)):o==="children"?typeof f=="string"?(t!=="textarea"||f!=="")&&Ul(n,f):typeof f=="number"&&Ul(n,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zl.hasOwnProperty(o)?f!=null&&o==="onScroll"&&bt("scroll",n):f!=null&&bm(n,o,f,l))}switch(t){case"input":nc(n),Z_(n,i,!1);break;case"textarea":nc(n),Q_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Cs(i.value));break;case"select":n.multiple=!!i.multiple,o=i.value,o!=null?pa(n,!!i.multiple,o,!1):i.defaultValue!=null&&pa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ff)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mn(e),null;case 6:if(n&&e.stateNode!=null)SS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(t=Qs($l.current),Qs(cr.current),fc(e)){if(i=e.stateNode,t=e.memoizedProps,i[ar]=e,(o=i.nodeValue!==t)&&(n=li,n!==null))switch(n.tag){case 3:cc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cc(i.nodeValue,t,(n.mode&1)!==0)}o&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ar]=e,e.stateNode=i}return Mn(e),null;case 13:if(Ct(zt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Dt&&ai!==null&&(e.mode&1)!==0&&(e.flags&128)===0)U1(),Ta(),e.flags|=98560,o=!1;else if(o=fc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!o)throw Error(me(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(me(317));o[ar]=e}else Ta(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mn(e),o=!1}else ji!==null&&(lm(ji),ji=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(zt.current&1)!==0?nn===0&&(nn=3):lg())),e.updateQueue!==null&&(e.flags|=4),Mn(e),null);case 4:return Ca(),em(n,e),n===null&&Xl(e.stateNode.containerInfo),Mn(e),null;case 10:return Xm(e.type._context),Mn(e),null;case 17:return Yn(e.type)&&hf(),Mn(e),null;case 19:if(Ct(zt),o=e.memoizedState,o===null)return Mn(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)fl(o,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=xf(n),l!==null){for(e.flags|=128,fl(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)o=t,n=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,n=l.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Et(zt,zt.current&1|2),e.child}n=n.sibling}o.tail!==null&&Yt()>La&&(e.flags|=128,i=!0,fl(o,!1),e.lanes=4194304)}else{if(!i)if(n=xf(l),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),fl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Dt)return Mn(e),null}else 2*Yt()-o.renderingStartTime>La&&t!==1073741824&&(e.flags|=128,i=!0,fl(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(t=o.last,t!==null?t.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Yt(),e.sibling=null,t=zt.current,Et(zt,i?t&1|2:t&1),e):(Mn(e),null);case 22:case 23:return ag(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(oi&1073741824)!==0&&(Mn(e),e.subtreeFlags&6&&(e.flags|=8192)):Mn(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function cL(n,e){switch(Gm(e),e.tag){case 1:return Yn(e.type)&&hf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ca(),Ct(jn),Ct(Cn),Zm(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return $m(e),null;case 13:if(Ct(zt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(me(340));Ta()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ct(zt),null;case 4:return Ca(),null;case 10:return Xm(e.type._context),null;case 22:case 23:return ag(),null;case 24:return null;default:return null}}var pc=!1,bn=!1,fL=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function ca(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ht(n,e,i)}else t.current=null}function tm(n,e,t){try{t()}catch(i){Ht(n,e,i)}}var Gv=!1;function hL(n,e){if(Up=lf,n=T1(),km(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,u=-1,f=-1,h=0,p=0,d=n,m=null;t:for(;;){for(var y;d!==t||r!==0&&d.nodeType!==3||(u=l+r),d!==o||i!==0&&d.nodeType!==3||(f=l+i),d.nodeType===3&&(l+=d.nodeValue.length),(y=d.firstChild)!==null;)m=d,d=y;for(;;){if(d===n)break t;if(m===t&&++h===r&&(u=l),m===o&&++p===i&&(f=l),(y=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=y}t=u===-1||f===-1?null:{start:u,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(kp={focusedElem:n,selectionRange:t},lf=!1,Pe=e;Pe!==null;)if(e=Pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Pe=n;else for(;Pe!==null;){e=Pe;try{var w=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,_=w.memoizedState,x=e.stateNode,S=x.getSnapshotBeforeUpdate(e.elementType===e.type?v:Xi(e.type,v),_);x.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(T){Ht(e,e.return,T)}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}return w=Gv,Gv=!1,w}function Rl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var o=r.destroy;r.destroy=void 0,o!==void 0&&tm(e,t,o)}r=r.next}while(r!==i)}}function zf(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function nm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function wS(n){var e=n.alternate;e!==null&&(n.alternate=null,wS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ar],delete e[jl],delete e[Wp],delete e[YA],delete e[$A])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function MS(n){return n.tag===5||n.tag===3||n.tag===4}function Wv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||MS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function im(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ff));else if(i!==4&&(n=n.child,n!==null))for(im(n,e,t),n=n.sibling;n!==null;)im(n,e,t),n=n.sibling}function rm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(rm(n,e,t),n=n.sibling;n!==null;)rm(n,e,t),n=n.sibling}var mn=null,qi=!1;function is(n,e,t){for(t=t.child;t!==null;)ES(n,e,t),t=t.sibling}function ES(n,e,t){if(ur&&typeof ur.onCommitFiberUnmount=="function")try{ur.onCommitFiberUnmount(Lf,t)}catch{}switch(t.tag){case 5:bn||ca(t,e);case 6:var i=mn,r=qi;mn=null,is(n,e,t),mn=i,qi=r,mn!==null&&(qi?(n=mn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):mn.removeChild(t.stateNode));break;case 18:mn!==null&&(qi?(n=mn,t=t.stateNode,n.nodeType===8?Md(n.parentNode,t):n.nodeType===1&&Md(n,t),Wl(n)):Md(mn,t.stateNode));break;case 4:i=mn,r=qi,mn=t.stateNode.containerInfo,qi=!0,is(n,e,t),mn=i,qi=r;break;case 0:case 11:case 14:case 15:if(!bn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&tm(t,e,l),r=r.next}while(r!==i)}is(n,e,t);break;case 1:if(!bn&&(ca(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(u){Ht(t,e,u)}is(n,e,t);break;case 21:is(n,e,t);break;case 22:t.mode&1?(bn=(i=bn)||t.memoizedState!==null,is(n,e,t),bn=i):is(n,e,t);break;default:is(n,e,t)}}function Vv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new fL),e.forEach(function(i){var r=SL.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Bi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var o=n,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:mn=u.stateNode,qi=!1;break e;case 3:mn=u.stateNode.containerInfo,qi=!0;break e;case 4:mn=u.stateNode.containerInfo,qi=!0;break e}u=u.return}if(mn===null)throw Error(me(160));ES(o,l,r),mn=null,qi=!1;var f=r.alternate;f!==null&&(f.return=null),r.return=null}catch(h){Ht(r,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)TS(e,n),e=e.sibling}function TS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bi(e,n),rr(n),i&4){try{Rl(3,n,n.return),zf(3,n)}catch(v){Ht(n,n.return,v)}try{Rl(5,n,n.return)}catch(v){Ht(n,n.return,v)}}break;case 1:Bi(e,n),rr(n),i&512&&t!==null&&ca(t,t.return);break;case 5:if(Bi(e,n),rr(n),i&512&&t!==null&&ca(t,t.return),n.flags&32){var r=n.stateNode;try{Ul(r,"")}catch(v){Ht(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var o=n.memoizedProps,l=t!==null?t.memoizedProps:o,u=n.type,f=n.updateQueue;if(n.updateQueue=null,f!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&qy(r,o),Ap(u,l);var h=Ap(u,o);for(l=0;l<f.length;l+=2){var p=f[l],d=f[l+1];p==="style"?Ky(r,d):p==="dangerouslySetInnerHTML"?$y(r,d):p==="children"?Ul(r,d):bm(r,p,d,h)}switch(u){case"input":Mp(r,o);break;case"textarea":jy(r,o);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?pa(r,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?pa(r,!!o.multiple,o.defaultValue,!0):pa(r,!!o.multiple,o.multiple?[]:"",!1))}r[jl]=o}catch(v){Ht(n,n.return,v)}}break;case 6:if(Bi(e,n),rr(n),i&4){if(n.stateNode===null)throw Error(me(162));r=n.stateNode,o=n.memoizedProps;try{r.nodeValue=o}catch(v){Ht(n,n.return,v)}}break;case 3:if(Bi(e,n),rr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Wl(e.containerInfo)}catch(v){Ht(n,n.return,v)}break;case 4:Bi(e,n),rr(n);break;case 13:Bi(e,n),rr(n),r=n.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(sg=Yt())),i&4&&Vv(n);break;case 22:if(p=t!==null&&t.memoizedState!==null,n.mode&1?(bn=(h=bn)||p,Bi(e,n),bn=h):Bi(e,n),rr(n),i&8192){if(h=n.memoizedState!==null,(n.stateNode.isHidden=h)&&!p&&(n.mode&1)!==0)for(Pe=n,p=n.child;p!==null;){for(d=Pe=p;Pe!==null;){switch(m=Pe,y=m.child,m.tag){case 0:case 11:case 14:case 15:Rl(4,m,m.return);break;case 1:ca(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){i=m,t=m.return;try{e=i,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(v){Ht(i,t,v)}}break;case 5:ca(m,m.return);break;case 22:if(m.memoizedState!==null){Xv(d);continue}}y!==null?(y.return=m,Pe=y):Xv(d)}p=p.sibling}e:for(p=null,d=n;;){if(d.tag===5){if(p===null){p=d;try{r=d.stateNode,h?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=d.stateNode,f=d.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,u.style.display=Zy("display",l))}catch(v){Ht(n,n.return,v)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=h?"":d.memoizedProps}catch(v){Ht(n,n.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bi(e,n),rr(n),i&4&&Vv(n);break;case 21:break;default:Bi(e,n),rr(n)}}function rr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(MS(t)){var i=t;break e}t=t.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ul(r,""),i.flags&=-33);var o=Wv(n);rm(n,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,u=Wv(n);im(n,u,l);break;default:throw Error(me(161))}}catch(f){Ht(n,n.return,f)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function dL(n,e,t){Pe=n,bS(n)}function bS(n,e,t){for(var i=(n.mode&1)!==0;Pe!==null;){var r=Pe,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||pc;if(!l){var u=r.alternate,f=u!==null&&u.memoizedState!==null||bn;u=pc;var h=bn;if(pc=l,(bn=f)&&!h)for(Pe=r;Pe!==null;)l=Pe,f=l.child,l.tag===22&&l.memoizedState!==null?qv(r):f!==null?(f.return=l,Pe=f):qv(r);for(;o!==null;)Pe=o,bS(o),o=o.sibling;Pe=r,pc=u,bn=h}Hv(n)}else(r.subtreeFlags&8772)!==0&&o!==null?(o.return=r,Pe=o):Hv(n)}}function Hv(n){for(;Pe!==null;){var e=Pe;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:bn||zf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!bn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Xi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Cv(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Cv(e,l,t)}break;case 5:var u=e.stateNode;if(t===null&&e.flags&4){t=u;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&t.focus();break;case"img":f.src&&(t.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Wl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}bn||e.flags&512&&nm(e)}catch(m){Ht(e,e.return,m)}}if(e===n){Pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function Xv(n){for(;Pe!==null;){var e=Pe;if(e===n){Pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function qv(n){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{zf(4,e)}catch(f){Ht(e,t,f)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(f){Ht(e,r,f)}}var o=e.return;try{nm(e)}catch(f){Ht(e,o,f)}break;case 5:var l=e.return;try{nm(e)}catch(f){Ht(e,l,f)}}}catch(f){Ht(e,e.return,f)}if(e===n){Pe=null;break}var u=e.sibling;if(u!==null){u.return=e.return,Pe=u;break}Pe=e.return}}var pL=Math.ceil,wf=Hr.ReactCurrentDispatcher,ig=Hr.ReactCurrentOwner,Ai=Hr.ReactCurrentBatchConfig,ft=0,fn=null,Kt=null,_n=0,oi=0,fa=Ps(0),nn=0,Jl=null,uo=0,Uf=0,rg=0,Dl=null,Vn=null,sg=0,La=1/0,Rr=null,Mf=!1,sm=null,Ms=null,mc=!1,gs=null,Ef=0,Il=0,om=null,Kc=-1,Qc=0;function Nn(){return(ft&6)!==0?Yt():Kc!==-1?Kc:Kc=Yt()}function Es(n){return(n.mode&1)===0?1:(ft&2)!==0&&_n!==0?_n&-_n:KA.transition!==null?(Qc===0&&(Qc=u1()),Qc):(n=yt,n!==0||(n=window.event,n=n===void 0?16:g1(n.type)),n)}function Qi(n,e,t,i){if(50<Il)throw Il=0,om=null,Error(me(185));ru(n,t,i),((ft&2)===0||n!==fn)&&(n===fn&&((ft&2)===0&&(Uf|=t),nn===4&&ps(n,_n)),$n(n,i),t===1&&ft===0&&(e.mode&1)===0&&(La=Yt()+500,Nf&&Rs()))}function $n(n,e){var t=n.callbackNode;KC(n,e);var i=af(n,n===fn?_n:0);if(i===0)t!==null&&tv(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&tv(t),e===1)n.tag===0?ZA(jv.bind(null,n)):F1(jv.bind(null,n)),qA(function(){(ft&6)===0&&Rs()}),t=null;else{switch(c1(i)){case 1:t=Rm;break;case 4:t=a1;break;case 16:t=of;break;case 536870912:t=l1;break;default:t=of}t=NS(t,CS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function CS(n,e){if(Kc=-1,Qc=0,(ft&6)!==0)throw Error(me(327));var t=n.callbackNode;if(xa()&&n.callbackNode!==t)return null;var i=af(n,n===fn?_n:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Tf(n,i);else{e=i;var r=ft;ft|=2;var o=LS();(fn!==n||_n!==e)&&(Rr=null,La=Yt()+500,no(n,e));do try{_L();break}catch(u){AS(n,u)}while(1);Hm(),wf.current=o,ft=r,Kt!==null?e=0:(fn=null,_n=0,e=nn)}if(e!==0){if(e===2&&(r=Ip(n),r!==0&&(i=r,e=am(n,r))),e===1)throw t=Jl,no(n,0),ps(n,i),$n(n,Yt()),t;if(e===6)ps(n,i);else{if(r=n.current.alternate,(i&30)===0&&!mL(r)&&(e=Tf(n,i),e===2&&(o=Ip(n),o!==0&&(i=o,e=am(n,o))),e===1))throw t=Jl,no(n,0),ps(n,i),$n(n,Yt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:Xs(n,Vn,Rr);break;case 3:if(ps(n,i),(i&130023424)===i&&(e=sg+500-Yt(),10<e)){if(af(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Nn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Gp(Xs.bind(null,n,Vn,Rr),e);break}Xs(n,Vn,Rr);break;case 4:if(ps(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var l=31-Ki(i);o=1<<l,l=e[l],l>r&&(r=l),i&=~o}if(i=r,i=Yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*pL(i/1960))-i,10<i){n.timeoutHandle=Gp(Xs.bind(null,n,Vn,Rr),i);break}Xs(n,Vn,Rr);break;case 5:Xs(n,Vn,Rr);break;default:throw Error(me(329))}}}return $n(n,Yt()),n.callbackNode===t?CS.bind(null,n):null}function am(n,e){var t=Dl;return n.current.memoizedState.isDehydrated&&(no(n,e).flags|=256),n=Tf(n,e),n!==2&&(e=Vn,Vn=t,e!==null&&lm(e)),n}function lm(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function mL(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],o=r.getSnapshot;r=r.value;try{if(!Ji(o(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ps(n,e){for(e&=~rg,e&=~Uf,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ki(e),i=1<<t;n[t]=-1,e&=~i}}function jv(n){if((ft&6)!==0)throw Error(me(327));xa();var e=af(n,0);if((e&1)===0)return $n(n,Yt()),null;var t=Tf(n,e);if(n.tag!==0&&t===2){var i=Ip(n);i!==0&&(e=i,t=am(n,i))}if(t===1)throw t=Jl,no(n,0),ps(n,e),$n(n,Yt()),t;if(t===6)throw Error(me(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Xs(n,Vn,Rr),$n(n,Yt()),null}function og(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(La=Yt()+500,Nf&&Rs())}}function co(n){gs!==null&&gs.tag===0&&(ft&6)===0&&xa();var e=ft;ft|=1;var t=Ai.transition,i=yt;try{if(Ai.transition=null,yt=1,n)return n()}finally{yt=i,Ai.transition=t,ft=e,(ft&6)===0&&Rs()}}function ag(){oi=fa.current,Ct(fa)}function no(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,XA(t)),Kt!==null)for(t=Kt.return;t!==null;){var i=t;switch(Gm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&hf();break;case 3:Ca(),Ct(jn),Ct(Cn),Zm();break;case 5:$m(i);break;case 4:Ca();break;case 13:Ct(zt);break;case 19:Ct(zt);break;case 10:Xm(i.type._context);break;case 22:case 23:ag()}t=t.return}if(fn=n,Kt=n=Ts(n.current,null),_n=oi=e,nn=0,Jl=null,rg=Uf=uo=0,Vn=Dl=null,Ks!==null){for(e=0;e<Ks.length;e++)if(t=Ks[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,o=t.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}t.pending=i}Ks=null}return n}function AS(n,e){do{var t=Kt;try{if(Hm(),Yc.current=Sf,yf){for(var i=Ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yf=!1}if(lo=0,cn=tn=Ut=null,Pl=!1,Zl=0,ig.current=null,t===null||t.return===null){nn=1,Jl=e,Kt=null;break}e:{var o=n,l=t.return,u=t,f=e;if(e=_n,u.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var h=f,p=u,d=p.tag;if((p.mode&1)===0&&(d===0||d===11||d===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Nv(l);if(y!==null){y.flags&=-257,Fv(y,l,u,o,e),y.mode&1&&Iv(o,h,e),e=y,f=h;var w=e.updateQueue;if(w===null){var v=new Set;v.add(f),e.updateQueue=v}else w.add(f);break e}else{if((e&1)===0){Iv(o,h,e),lg();break e}f=Error(me(426))}}else if(Dt&&u.mode&1){var _=Nv(l);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),Fv(_,l,u,o,e),Wm(Aa(f,u));break e}}o=f=Aa(f,u),nn!==4&&(nn=2),Dl===null?Dl=[o]:Dl.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var x=fS(o,f,e);bv(o,x);break e;case 1:u=f;var S=o.type,E=o.stateNode;if((o.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Ms===null||!Ms.has(E)))){o.flags|=65536,e&=-e,o.lanes|=e;var T=hS(o,u,e);bv(o,T);break e}}o=o.return}while(o!==null)}RS(t)}catch(A){e=A,Kt===t&&t!==null&&(Kt=t=t.return);continue}break}while(1)}function LS(){var n=wf.current;return wf.current=Sf,n===null?Sf:n}function lg(){(nn===0||nn===3||nn===2)&&(nn=4),fn===null||(uo&268435455)===0&&(Uf&268435455)===0||ps(fn,_n)}function Tf(n,e){var t=ft;ft|=2;var i=LS();(fn!==n||_n!==e)&&(Rr=null,no(n,e));do try{gL();break}catch(r){AS(n,r)}while(1);if(Hm(),ft=t,wf.current=i,Kt!==null)throw Error(me(261));return fn=null,_n=0,nn}function gL(){for(;Kt!==null;)PS(Kt)}function _L(){for(;Kt!==null&&!WC();)PS(Kt)}function PS(n){var e=IS(n.alternate,n,oi);n.memoizedProps=n.pendingProps,e===null?RS(n):Kt=e,ig.current=null}function RS(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=uL(t,e,oi),t!==null){Kt=t;return}}else{if(t=cL(t,e),t!==null){t.flags&=32767,Kt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Kt=null;return}}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=n}while(e!==null);nn===0&&(nn=5)}function Xs(n,e,t){var i=yt,r=Ai.transition;try{Ai.transition=null,yt=1,vL(n,e,t,i)}finally{Ai.transition=r,yt=i}return null}function vL(n,e,t,i){do xa();while(gs!==null);if((ft&6)!==0)throw Error(me(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(me(177));n.callbackNode=null,n.callbackPriority=0;var o=t.lanes|t.childLanes;if(QC(n,o),n===fn&&(Kt=fn=null,_n=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||mc||(mc=!0,NS(of,function(){return xa(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=Ai.transition,Ai.transition=null;var l=yt;yt=1;var u=ft;ft|=4,ig.current=null,hL(n,t),TS(t,n),UA(kp),lf=!!Up,kp=Up=null,n.current=t,dL(t),VC(),ft=u,yt=l,Ai.transition=o}else n.current=t;if(mc&&(mc=!1,gs=n,Ef=r),o=n.pendingLanes,o===0&&(Ms=null),qC(t.stateNode),$n(n,Yt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Mf)throw Mf=!1,n=sm,sm=null,n;return(Ef&1)!==0&&n.tag!==0&&xa(),o=n.pendingLanes,(o&1)!==0?n===om?Il++:(Il=0,om=n):Il=0,Rs(),null}function xa(){if(gs!==null){var n=c1(Ef),e=Ai.transition,t=yt;try{if(Ai.transition=null,yt=16>n?16:n,gs===null)var i=!1;else{if(n=gs,gs=null,Ef=0,(ft&6)!==0)throw Error(me(331));var r=ft;for(ft|=4,Pe=n.current;Pe!==null;){var o=Pe,l=o.child;if((Pe.flags&16)!==0){var u=o.deletions;if(u!==null){for(var f=0;f<u.length;f++){var h=u[f];for(Pe=h;Pe!==null;){var p=Pe;switch(p.tag){case 0:case 11:case 15:Rl(8,p,o)}var d=p.child;if(d!==null)d.return=p,Pe=d;else for(;Pe!==null;){p=Pe;var m=p.sibling,y=p.return;if(wS(p),p===h){Pe=null;break}if(m!==null){m.return=y,Pe=m;break}Pe=y}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}Pe=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,Pe=l;else e:for(;Pe!==null;){if(o=Pe,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Rl(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,Pe=x;break e}Pe=o.return}}var S=n.current;for(Pe=S;Pe!==null;){l=Pe;var E=l.child;if((l.subtreeFlags&2064)!==0&&E!==null)E.return=l,Pe=E;else e:for(l=S;Pe!==null;){if(u=Pe,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:zf(9,u)}}catch(A){Ht(u,u.return,A)}if(u===l){Pe=null;break e}var T=u.sibling;if(T!==null){T.return=u.return,Pe=T;break e}Pe=u.return}}if(ft=r,Rs(),ur&&typeof ur.onPostCommitFiberRoot=="function")try{ur.onPostCommitFiberRoot(Lf,n)}catch{}i=!0}return i}finally{yt=t,Ai.transition=e}}return!1}function Yv(n,e,t){e=Aa(t,e),e=fS(n,e,1),n=ws(n,e,1),e=Nn(),n!==null&&(ru(n,1,e),$n(n,e))}function Ht(n,e,t){if(n.tag===3)Yv(n,n,t);else for(;e!==null;){if(e.tag===3){Yv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ms===null||!Ms.has(i))){n=Aa(t,n),n=hS(e,n,1),e=ws(e,n,1),n=Nn(),e!==null&&(ru(e,1,n),$n(e,n));break}}e=e.return}}function xL(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Nn(),n.pingedLanes|=n.suspendedLanes&t,fn===n&&(_n&t)===t&&(nn===4||nn===3&&(_n&130023424)===_n&&500>Yt()-sg?no(n,0):rg|=t),$n(n,e)}function DS(n,e){e===0&&((n.mode&1)===0?e=1:(e=sc,sc<<=1,(sc&130023424)===0&&(sc=4194304)));var t=Nn();n=Gr(n,e),n!==null&&(ru(n,e,t),$n(n,t))}function yL(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),DS(n,t)}function SL(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),DS(n,t)}var IS;IS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||jn.current)qn=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return qn=!1,lL(n,e,t);qn=(n.flags&131072)!==0}else qn=!1,Dt&&(e.flags&1048576)!==0&&O1(e,mf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zc(n,e),n=e.pendingProps;var r=Ea(e,Cn.current);va(e,t),r=Qm(null,e,i,n,r,t);var o=Jm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yn(i)?(o=!0,df(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jm(e),r.updater=Ff,e.stateNode=r,r._reactInternals=e,Yp(e,i,n,t),e=Kp(null,e,i,!0,o,t)):(e.tag=0,Dt&&o&&Bm(e),In(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Zc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ML(i),n=Xi(i,n),r){case 0:e=Zp(null,e,i,n,t);break e;case 1:e=Uv(null,e,i,n,t);break e;case 11:e=Ov(null,e,i,n,t);break e;case 14:e=zv(null,e,i,Xi(i.type,n),t);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Zp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Uv(n,e,i,r,t);case 3:e:{if(gS(e),n===null)throw Error(me(387));i=e.pendingProps,o=e.memoizedState,r=o.element,B1(n,e),vf(e,i,null,t);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Aa(Error(me(423)),e),e=kv(n,e,i,t,r);break e}else if(i!==r){r=Aa(Error(me(424)),e),e=kv(n,e,i,t,r);break e}else for(ai=Ss(e.stateNode.containerInfo.firstChild),li=e,Dt=!0,ji=null,t=H1(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ta(),i===r){e=Wr(n,e,t);break e}In(n,e,i,t)}e=e.child}return e;case 5:return X1(e),n===null&&Xp(e),i=e.type,r=e.pendingProps,o=n!==null?n.memoizedProps:null,l=r.children,Bp(i,r)?l=null:o!==null&&Bp(i,o)&&(e.flags|=32),mS(n,e),In(n,e,l,t),e.child;case 6:return n===null&&Xp(e),null;case 13:return _S(n,e,t);case 4:return Ym(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ba(e,null,i,t):In(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Ov(n,e,i,r,t);case 7:return In(n,e,e.pendingProps,t),e.child;case 8:return In(n,e,e.pendingProps.children,t),e.child;case 12:return In(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,l=r.value,Et(gf,i._currentValue),i._currentValue=l,o!==null)if(Ji(o.value,l)){if(o.children===r.children&&!jn.current){e=Wr(n,e,t);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var f=u.firstContext;f!==null;){if(f.context===i){if(o.tag===1){f=zr(-1,t&-t),f.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?f.next=f:(f.next=p.next,p.next=f),h.pending=f}}o.lanes|=t,f=o.alternate,f!==null&&(f.lanes|=t),qp(o.return,t,e),u.lanes|=t;break}f=f.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(me(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),qp(l,t,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}In(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,va(e,t),r=Pi(r),i=i(r),e.flags|=1,In(n,e,i,t),e.child;case 14:return i=e.type,r=Xi(i,e.pendingProps),r=Xi(i.type,r),zv(n,e,i,r,t);case 15:return dS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xi(i,r),Zc(n,e),e.tag=1,Yn(i)?(n=!0,df(e)):n=!1,va(e,t),W1(e,i,r),Yp(e,i,r,t),Kp(null,e,i,!0,n,t);case 19:return vS(n,e,t);case 22:return pS(n,e,t)}throw Error(me(156,e.tag))};function NS(n,e){return o1(n,e)}function wL(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(n,e,t,i){return new wL(n,e,t,i)}function ug(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ML(n){if(typeof n=="function")return ug(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Am)return 11;if(n===Lm)return 14}return 2}function Ts(n,e){var t=n.alternate;return t===null?(t=bi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Jc(n,e,t,i,r,o){var l=2;if(i=n,typeof n=="function")ug(n)&&(l=1);else if(typeof n=="string")l=5;else e:switch(n){case ta:return io(t.children,r,o,e);case Cm:l=8,r|=8;break;case vp:return n=bi(12,t,e,r|2),n.elementType=vp,n.lanes=o,n;case xp:return n=bi(13,t,e,r),n.elementType=xp,n.lanes=o,n;case yp:return n=bi(19,t,e,r),n.elementType=yp,n.lanes=o,n;case Vy:return kf(t,r,o,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Gy:l=10;break e;case Wy:l=9;break e;case Am:l=11;break e;case Lm:l=14;break e;case fs:l=16,i=null;break e}throw Error(me(130,n==null?n:typeof n,""))}return e=bi(l,t,e,r),e.elementType=n,e.type=i,e.lanes=o,e}function io(n,e,t,i){return n=bi(7,n,i,e),n.lanes=t,n}function kf(n,e,t,i){return n=bi(22,n,i,e),n.elementType=Vy,n.lanes=t,n.stateNode={isHidden:!1},n}function Rd(n,e,t){return n=bi(6,n,null,e),n.lanes=t,n}function Dd(n,e,t){return e=bi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function EL(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hd(0),this.expirationTimes=hd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cg(n,e,t,i,r,o,l,u,f){return n=new EL(n,e,t,u,f),e===1?(e=1,o===!0&&(e|=8)):e=0,o=bi(3,null,null,e),n.current=o,o.stateNode=n,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},jm(o),n}function TL(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ea,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function FS(n){if(!n)return As;n=n._reactInternals;e:{if(go(n)!==n||n.tag!==1)throw Error(me(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(n.tag===1){var t=n.type;if(Yn(t))return N1(n,t,e)}return e}function OS(n,e,t,i,r,o,l,u,f){return n=cg(t,i,!0,n,r,o,l,u,f),n.context=FS(null),t=n.current,i=Nn(),r=Es(t),o=zr(i,r),o.callback=e!=null?e:null,ws(t,o,r),n.current.lanes=r,ru(n,r,i),$n(n,i),n}function Bf(n,e,t,i){var r=e.current,o=Nn(),l=Es(r);return t=FS(t),e.context===null?e.context=t:e.pendingContext=t,e=zr(o,l),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ws(r,e,l),n!==null&&(Qi(n,r,l,o),jc(n,r,l)),l}function bf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $v(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function fg(n,e){$v(n,e),(n=n.alternate)&&$v(n,e)}function bL(){return null}var zS=typeof reportError=="function"?reportError:function(n){console.error(n)};function hg(n){this._internalRoot=n}Gf.prototype.render=hg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(me(409));Bf(n,e,null,null)};Gf.prototype.unmount=hg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;co(function(){Bf(null,n,null,null)}),e[Br]=null}};function Gf(n){this._internalRoot=n}Gf.prototype.unstable_scheduleHydration=function(n){if(n){var e=d1();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ds.length&&e!==0&&e<ds[t].priority;t++);ds.splice(t,0,n),t===0&&m1(n)}};function dg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Wf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zv(){}function CL(n,e,t,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var h=bf(l);o.call(h)}}var l=OS(e,i,n,0,null,!1,!1,"",Zv);return n._reactRootContainer=l,n[Br]=l.current,Xl(n.nodeType===8?n.parentNode:n),co(),l}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var u=i;i=function(){var h=bf(f);u.call(h)}}var f=cg(n,0,!1,null,null,!1,!1,"",Zv);return n._reactRootContainer=f,n[Br]=f.current,Xl(n.nodeType===8?n.parentNode:n),co(function(){Bf(e,f,t,i)}),f}function Vf(n,e,t,i,r){var o=t._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var u=r;r=function(){var f=bf(l);u.call(f)}}Bf(e,l,n,r)}else l=CL(t,e,n,r,i);return bf(l)}f1=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=vl(e.pendingLanes);t!==0&&(Dm(e,t|1),$n(e,Yt()),(ft&6)===0&&(La=Yt()+500,Rs()))}break;case 13:co(function(){var i=Gr(n,1);if(i!==null){var r=Nn();Qi(i,n,1,r)}}),fg(n,1)}};Im=function(n){if(n.tag===13){var e=Gr(n,134217728);if(e!==null){var t=Nn();Qi(e,n,134217728,t)}fg(n,134217728)}};h1=function(n){if(n.tag===13){var e=Es(n),t=Gr(n,e);if(t!==null){var i=Nn();Qi(t,n,e,i)}fg(n,e)}};d1=function(){return yt};p1=function(n,e){var t=yt;try{return yt=n,e()}finally{yt=t}};Pp=function(n,e,t){switch(e){case"input":if(Mp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=If(i);if(!r)throw Error(me(90));Xy(i),Mp(i,r)}}}break;case"textarea":jy(n,t);break;case"select":e=t.value,e!=null&&pa(n,!!t.multiple,e,!1)}};e1=og;t1=co;var AL={usingClientEntryPoint:!1,Events:[ou,sa,If,Qy,Jy,og]},hl={findFiberByHostInstance:Zs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},LL={bundleType:hl.bundleType,version:hl.version,rendererPackageName:hl.rendererPackageName,rendererConfig:hl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=r1(n),n===null?null:n.stateNode},findFiberByHostInstance:hl.findFiberByHostInstance||bL,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{Lf=gc.inject(LL),ur=gc}catch{}}ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AL;ci.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dg(e))throw Error(me(200));return TL(n,e,null,t)};ci.createRoot=function(n,e){if(!dg(n))throw Error(me(299));var t=!1,i="",r=zS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cg(n,1,!1,null,null,t,!1,i,r),n[Br]=e.current,Xl(n.nodeType===8?n.parentNode:n),new hg(e)};ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(me(188)):(n=Object.keys(n).join(","),Error(me(268,n)));return n=r1(e),n=n===null?null:n.stateNode,n};ci.flushSync=function(n){return co(n)};ci.hydrate=function(n,e,t){if(!Wf(e))throw Error(me(200));return Vf(null,n,e,!0,t)};ci.hydrateRoot=function(n,e,t){if(!dg(n))throw Error(me(405));var i=t!=null&&t.hydratedSources||null,r=!1,o="",l=zS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),e=OS(e,null,n,1,t!=null?t:null,r,!1,o,l),n[Br]=e.current,Xl(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Gf(e)};ci.render=function(n,e,t){if(!Wf(e))throw Error(me(200));return Vf(null,n,e,!1,t)};ci.unmountComponentAtNode=function(n){if(!Wf(n))throw Error(me(40));return n._reactRootContainer?(co(function(){Vf(null,null,n,!1,function(){n._reactRootContainer=null,n[Br]=null})}),!0):!1};ci.unstable_batchedUpdates=og;ci.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Wf(t))throw Error(me(200));if(n==null||n._reactInternals===void 0)throw Error(me(38));return Vf(n,e,t,!1,i)};ci.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=ci})(Oy);var Kv=Oy.exports;X_.createRoot=Kv.createRoot,X_.hydrateRoot=Kv.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pg="145",zo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Uo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},PL=0,Qv=1,RL=2,US=1,DL=2,yl=3,Pa=0,Li=1,_s=2,bs=0,ya=1,um=2,Jv=3,ex=4,IL=5,Jo=100,NL=101,FL=102,tx=103,nx=104,OL=200,zL=201,UL=202,kL=203,kS=204,BS=205,BL=206,GL=207,WL=208,VL=209,HL=210,XL=0,qL=1,jL=2,cm=3,YL=4,$L=5,ZL=6,KL=7,mg=0,QL=1,JL=2,Ur=0,eP=1,tP=2,nP=3,iP=4,rP=5,GS=300,Ra=301,Da=302,fm=303,hm=304,Hf=306,dm=1e3,$i=1001,pm=1002,Hn=1003,ix=1004,rx=1005,Ti=1006,sP=1007,Xf=1008,fo=1009,oP=1010,aP=1011,WS=1012,lP=1013,Js=1014,eo=1015,eu=1016,uP=1017,cP=1018,Sa=1020,fP=1021,hP=1022,lr=1023,dP=1024,pP=1025,ro=1026,Ia=1027,mP=1028,gP=1029,_P=1030,vP=1031,xP=1033,Id=33776,Nd=33777,Fd=33778,Od=33779,sx=35840,ox=35841,ax=35842,lx=35843,yP=36196,ux=37492,cx=37496,fx=37808,hx=37809,dx=37810,px=37811,mx=37812,gx=37813,_x=37814,vx=37815,xx=37816,yx=37817,Sx=37818,wx=37819,Mx=37820,Ex=37821,Tx=36492,ho=3e3,Vt=3001,SP=3200,wP=3201,VS=0,MP=1,Dr="srgb",to="srgb-linear",zd=7680,EP=519,bx=35044,Cx="300 es",mm=1035;class _o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=Math.PI/180,Ax=180/Math.PI;function lu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function Xn(n,e,t){return Math.max(e,Math.min(t,n))}function TP(n,e){return(n%e+e)%e}function kd(n,e,t){return(1-t)*n+t*e}function Lx(n){return(n&n-1)===0&&n!==0}function gm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _c(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*r+e.x,this.y=o*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ci{constructor(){Ci.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,o,l,u,f,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=u,p[3]=t,p[4]=o,p[5]=f,p[6]=i,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,l=i[0],u=i[3],f=i[6],h=i[1],p=i[4],d=i[7],m=i[2],y=i[5],w=i[8],v=r[0],_=r[3],x=r[6],S=r[1],E=r[4],T=r[7],A=r[2],R=r[5],O=r[8];return o[0]=l*v+u*S+f*A,o[3]=l*_+u*E+f*R,o[6]=l*x+u*T+f*O,o[1]=h*v+p*S+d*A,o[4]=h*_+p*E+d*R,o[7]=h*x+p*T+d*O,o[2]=m*v+y*S+w*A,o[5]=m*_+y*E+w*R,o[8]=m*x+y*T+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*l*p-t*u*h-i*o*p+i*u*f+r*o*h-r*l*f}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8],d=p*l-u*h,m=u*f-p*o,y=h*o-l*f,w=t*d+i*m+r*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/w;return e[0]=d*v,e[1]=(r*h-p*i)*v,e[2]=(u*i-r*l)*v,e[3]=m*v,e[4]=(p*t-r*f)*v,e[5]=(r*o-u*t)*v,e[6]=y*v,e[7]=(i*f-h*t)*v,e[8]=(l*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,l,u){const f=Math.cos(o),h=Math.sin(o);return this.set(i*f,i*h,-i*(f*l+h*u)+l+e,-r*h,r*f,-r*(-h*l+f*u)+u+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,o=r[0],l=r[3],u=r[6],f=r[1],h=r[4],p=r[7];return r[0]=t*o+i*f,r[3]=t*l+i*h,r[6]=t*u+i*p,r[1]=-i*o+t*f,r[4]=-i*l+t*h,r[7]=-i*u+t*p,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function HS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function tu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function so(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ef(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Bd={[Dr]:{[to]:so},[to]:{[Dr]:ef}},Gi={legacyMode:!0,get workingColorSpace(){return to},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Bd[e]&&Bd[e][t]!==void 0){const i=Bd[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},XS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={r:0,g:0,b:0},Wi={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Gd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function xc(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gi.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=to){return this.r=e,this.g=t,this.b=i,Gi.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=to){if(e=TP(e,1),t=Xn(t,0,1),i=Xn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,l=2*i-o;this.r=Gd(l,o,e+1/3),this.g=Gd(l,o,e),this.b=Gd(l,o,e-1/3)}return Gi.toWorkingColorSpace(this,r),this}setStyle(e,t=Dr){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,Gi.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,Gi.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u)){const f=parseFloat(o[1])/360,h=parseFloat(o[2])/100,p=parseFloat(o[3])/100;return i(o[4]),this.setHSL(f,h,p,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,Gi.toWorkingColorSpace(this,t),this;if(l===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,Gi.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Dr){const i=XS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}copyLinearToSRGB(e){return this.r=ef(e.r),this.g=ef(e.g),this.b=ef(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dr){return Gi.fromWorkingColorSpace(xc(this,en),e),Xn(en.r*255,0,255)<<16^Xn(en.g*255,0,255)<<8^Xn(en.b*255,0,255)<<0}getHexString(e=Dr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=to){Gi.fromWorkingColorSpace(xc(this,en),t);const i=en.r,r=en.g,o=en.b,l=Math.max(i,r,o),u=Math.min(i,r,o);let f,h;const p=(u+l)/2;if(u===l)f=0,h=0;else{const d=l-u;switch(h=p<=.5?d/(l+u):d/(2-l-u),l){case i:f=(r-o)/d+(r<o?6:0);break;case r:f=(o-i)/d+2;break;case o:f=(i-r)/d+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=to){return Gi.fromWorkingColorSpace(xc(this,en),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Dr){return Gi.fromWorkingColorSpace(xc(this,en),e),e!==Dr?`color(${e} ${en.r} ${en.g} ${en.b})`:`rgb(${en.r*255|0},${en.g*255|0},${en.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Wi),Wi.h+=e,Wi.s+=t,Wi.l+=i,this.setHSL(Wi.h,Wi.s,Wi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(vc);const i=kd(Wi.h,vc.h,t),r=kd(Wi.s,vc.s,t),o=kd(Wi.l,vc.l,t);return this.setHSL(i,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}pt.NAMES=XS;let ko;class qS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ko===void 0&&(ko=tu("canvas")),ko.width=e.width,ko.height=e.height;const i=ko.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ko}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=so(o[l]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(so(t[i]/255)*255):t[i]=so(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jS{constructor(e=null){this.isSource=!0,this.uuid=lu(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?o.push(Wd(r[l].image)):o.push(Wd(r[l]))}else o=Wd(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Wd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bP=0;class Di extends _o{constructor(e=Di.DEFAULT_IMAGE,t=Di.DEFAULT_MAPPING,i=$i,r=$i,o=Ti,l=Xf,u=lr,f=fo,h=1,p=ho){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bP++}),this.uuid=lu(),this.name="",this.source=new jS(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ci,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==GS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dm:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case pm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dm:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case pm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Di.DEFAULT_IMAGE=null;Di.DEFAULT_MAPPING=GS;class gn{constructor(e=0,t=0,i=0,r=1){gn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*i+l[11]*r+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const f=e.elements,h=f[0],p=f[4],d=f[8],m=f[1],y=f[5],w=f[9],v=f[2],_=f[6],x=f[10];if(Math.abs(p-m)<.01&&Math.abs(d-v)<.01&&Math.abs(w-_)<.01){if(Math.abs(p+m)<.1&&Math.abs(d+v)<.1&&Math.abs(w+_)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(h+1)/2,T=(y+1)/2,A=(x+1)/2,R=(p+m)/4,O=(d+v)/4,b=(w+_)/4;return E>T&&E>A?E<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(E),r=R/i,o=O/i):T>A?T<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(T),i=R/r,o=b/r):A<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(A),i=O/o,r=b/o),this.set(i,r,o,t),this}let S=Math.sqrt((_-w)*(_-w)+(d-v)*(d-v)+(m-p)*(m-p));return Math.abs(S)<.001&&(S=1),this.x=(_-w)/S,this.y=(d-v)/S,this.z=(m-p)/S,this.w=Math.acos((h+y+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hr extends _o{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Di(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ti,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jS(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class YS extends Di{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class CP extends Di{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,l,u){let f=i[r+0],h=i[r+1],p=i[r+2],d=i[r+3];const m=o[l+0],y=o[l+1],w=o[l+2],v=o[l+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=d;return}if(u===1){e[t+0]=m,e[t+1]=y,e[t+2]=w,e[t+3]=v;return}if(d!==v||f!==m||h!==y||p!==w){let _=1-u;const x=f*m+h*y+p*w+d*v,S=x>=0?1:-1,E=1-x*x;if(E>Number.EPSILON){const A=Math.sqrt(E),R=Math.atan2(A,x*S);_=Math.sin(_*R)/A,u=Math.sin(u*R)/A}const T=u*S;if(f=f*_+m*T,h=h*_+y*T,p=p*_+w*T,d=d*_+v*T,_===1-u){const A=1/Math.sqrt(f*f+h*h+p*p+d*d);f*=A,h*=A,p*=A,d*=A}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,l){const u=i[r],f=i[r+1],h=i[r+2],p=i[r+3],d=o[l],m=o[l+1],y=o[l+2],w=o[l+3];return e[t]=u*w+p*d+f*y-h*m,e[t+1]=f*w+p*m+h*d-u*y,e[t+2]=h*w+p*y+u*m-f*d,e[t+3]=p*w-u*d-f*m-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,l=e._order,u=Math.cos,f=Math.sin,h=u(i/2),p=u(r/2),d=u(o/2),m=f(i/2),y=f(r/2),w=f(o/2);switch(l){case"XYZ":this._x=m*p*d+h*y*w,this._y=h*y*d-m*p*w,this._z=h*p*w+m*y*d,this._w=h*p*d-m*y*w;break;case"YXZ":this._x=m*p*d+h*y*w,this._y=h*y*d-m*p*w,this._z=h*p*w-m*y*d,this._w=h*p*d+m*y*w;break;case"ZXY":this._x=m*p*d-h*y*w,this._y=h*y*d+m*p*w,this._z=h*p*w+m*y*d,this._w=h*p*d-m*y*w;break;case"ZYX":this._x=m*p*d-h*y*w,this._y=h*y*d+m*p*w,this._z=h*p*w-m*y*d,this._w=h*p*d+m*y*w;break;case"YZX":this._x=m*p*d+h*y*w,this._y=h*y*d+m*p*w,this._z=h*p*w-m*y*d,this._w=h*p*d-m*y*w;break;case"XZY":this._x=m*p*d-h*y*w,this._y=h*y*d-m*p*w,this._z=h*p*w+m*y*d,this._w=h*p*d+m*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],l=t[1],u=t[5],f=t[9],h=t[2],p=t[6],d=t[10],m=i+u+d;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-f)*y,this._y=(o-h)*y,this._z=(l-r)*y}else if(i>u&&i>d){const y=2*Math.sqrt(1+i-u-d);this._w=(p-f)/y,this._x=.25*y,this._y=(r+l)/y,this._z=(o+h)/y}else if(u>d){const y=2*Math.sqrt(1+u-i-d);this._w=(o-h)/y,this._x=(r+l)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+d-i-u);this._w=(l-r)/y,this._x=(o+h)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,l=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=i*p+l*u+r*h-o*f,this._y=r*p+l*f+o*u-i*h,this._z=o*p+l*h+i*f-r*u,this._w=l*p-i*u-r*f-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,l=this._w;let u=l*e._w+i*e._x+r*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=r,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*l+t*this._w,this._x=y*i+t*this._x,this._y=y*r+t*this._y,this._z=y*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),d=Math.sin((1-t)*p)/h,m=Math.sin(t*p)/h;return this._w=l*d+this._w*m,this._x=i*d+this._x*m,this._y=r*d+this._y*m,this._z=o*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Px.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Px.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,l=e.y,u=e.z,f=e.w,h=f*t+l*r-u*i,p=f*i+u*t-o*r,d=f*r+o*i-l*t,m=-o*t-l*i-u*r;return this.x=h*f+m*-o+p*-u-d*-l,this.y=p*f+m*-l+d*-o-h*-u,this.z=d*f+m*-u+h*-l-p*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,l=t.x,u=t.y,f=t.z;return this.x=r*f-o*u,this.y=o*l-i*f,this.z=i*u-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vd.copy(this).projectOnVector(e),this.sub(Vd)}reflect(e){return this.sub(Vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vd=new q,Px=new po;class uu{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,o=-1/0,l=-1/0,u=-1/0;for(let f=0,h=e.length;f<h;f+=3){const p=e[f],d=e[f+1],m=e[f+2];p<t&&(t=p),d<i&&(i=d),m<r&&(r=m),p>o&&(o=p),d>l&&(l=d),m>u&&(u=m)}return this.min.set(t,i,r),this.max.set(o,l,u),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,o=-1/0,l=-1/0,u=-1/0;for(let f=0,h=e.count;f<h;f++){const p=e.getX(f),d=e.getY(f),m=e.getZ(f);p<t&&(t=p),d<i&&(i=d),m<r&&(r=m),p>o&&(o=p),d>l&&(l=d),m>u&&(u=m)}return this.min.set(t,i,r),this.max.set(o,l,u),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let l=0,u=o.count;l<u;l++)Gs.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint(Gs)}else i.boundingBox===null&&i.computeBoundingBox(),Hd.copy(i.boundingBox),Hd.applyMatrix4(e.matrixWorld),this.union(Hd);const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gs),Gs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dl),yc.subVectors(this.max,dl),Bo.subVectors(e.a,dl),Go.subVectors(e.b,dl),Wo.subVectors(e.c,dl),rs.subVectors(Go,Bo),ss.subVectors(Wo,Go),Ws.subVectors(Bo,Wo);let t=[0,-rs.z,rs.y,0,-ss.z,ss.y,0,-Ws.z,Ws.y,rs.z,0,-rs.x,ss.z,0,-ss.x,Ws.z,0,-Ws.x,-rs.y,rs.x,0,-ss.y,ss.x,0,-Ws.y,Ws.x,0];return!Xd(t,Bo,Go,Wo,yc)||(t=[1,0,0,0,1,0,0,0,1],!Xd(t,Bo,Go,Wo,yc))?!1:(Sc.crossVectors(rs,ss),t=[Sc.x,Sc.y,Sc.z],Xd(t,Bo,Go,Wo,yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gs.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gs).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tr=[new q,new q,new q,new q,new q,new q,new q,new q],Gs=new q,Hd=new uu,Bo=new q,Go=new q,Wo=new q,rs=new q,ss=new q,Ws=new q,dl=new q,yc=new q,Sc=new q,Vs=new q;function Xd(n,e,t,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){Vs.fromArray(n,o);const u=r.x*Math.abs(Vs.x)+r.y*Math.abs(Vs.y)+r.z*Math.abs(Vs.z),f=e.dot(Vs),h=t.dot(Vs),p=i.dot(Vs);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const AP=new uu,Rx=new q,wc=new q,qd=new q;class cu{constructor(e=new q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):AP.setFromPoints(e).getCenter(i);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qd.subVectors(e,this.center);const t=qd.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(qd.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?wc.set(0,0,1).multiplyScalar(e.radius):wc.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Rx.copy(e.center).add(wc)),this.expandByPoint(Rx.copy(e.center).sub(wc)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const br=new q,jd=new q,Mc=new q,os=new q,Yd=new q,Ec=new q,$d=new q;class gg{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.direction).multiplyScalar(t).add(this.origin),br.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jd.copy(e).add(t).multiplyScalar(.5),Mc.copy(t).sub(e).normalize(),os.copy(this.origin).sub(jd);const o=e.distanceTo(t)*.5,l=-this.direction.dot(Mc),u=os.dot(this.direction),f=-os.dot(Mc),h=os.lengthSq(),p=Math.abs(1-l*l);let d,m,y,w;if(p>0)if(d=l*f-u,m=l*u-f,w=o*p,d>=0)if(m>=-w)if(m<=w){const v=1/p;d*=v,m*=v,y=d*(d+l*m+2*u)+m*(l*d+m+2*f)+h}else m=o,d=Math.max(0,-(l*m+u)),y=-d*d+m*(m+2*f)+h;else m=-o,d=Math.max(0,-(l*m+u)),y=-d*d+m*(m+2*f)+h;else m<=-w?(d=Math.max(0,-(-l*o+u)),m=d>0?-o:Math.min(Math.max(-o,-f),o),y=-d*d+m*(m+2*f)+h):m<=w?(d=0,m=Math.min(Math.max(-o,-f),o),y=m*(m+2*f)+h):(d=Math.max(0,-(l*o+u)),m=d>0?o:Math.min(Math.max(-o,-f),o),y=-d*d+m*(m+2*f)+h);else m=l>0?-o:o,d=Math.max(0,-(l*m+u)),y=-d*d+m*(m+2*f)+h;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Mc).multiplyScalar(m).add(jd),y}intersectSphere(e,t){br.subVectors(e.center,this.origin);const i=br.dot(this.direction),r=br.dot(br)-i*i,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),u=i-l,f=i+l;return u<0&&f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,l,u,f;const h=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,r=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,r=(e.min.x-m.x)*h),p>=0?(o=(e.min.y-m.y)*p,l=(e.max.y-m.y)*p):(o=(e.max.y-m.y)*p,l=(e.min.y-m.y)*p),i>l||o>r||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),d>=0?(u=(e.min.z-m.z)*d,f=(e.max.z-m.z)*d):(u=(e.max.z-m.z)*d,f=(e.min.z-m.z)*d),i>f||u>r)||((u>i||i!==i)&&(i=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,i,r,o){Yd.subVectors(t,e),Ec.subVectors(i,e),$d.crossVectors(Yd,Ec);let l=this.direction.dot($d),u;if(l>0){if(r)return null;u=1}else if(l<0)u=-1,l=-l;else return null;os.subVectors(this.origin,e);const f=u*this.direction.dot(Ec.crossVectors(os,Ec));if(f<0)return null;const h=u*this.direction.dot(Yd.cross(os));if(h<0||f+h>l)return null;const p=-u*os.dot($d);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,o,l,u,f,h,p,d,m,y,w,v,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=o,x[5]=l,x[9]=u,x[13]=f,x[2]=h,x[6]=p,x[10]=d,x[14]=m,x[3]=y,x[7]=w,x[11]=v,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Vo.setFromMatrixColumn(e,0).length(),o=1/Vo.setFromMatrixColumn(e,1).length(),l=1/Vo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(r),h=Math.sin(r),p=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const m=l*p,y=l*d,w=u*p,v=u*d;t[0]=f*p,t[4]=-f*d,t[8]=h,t[1]=y+w*h,t[5]=m-v*h,t[9]=-u*f,t[2]=v-m*h,t[6]=w+y*h,t[10]=l*f}else if(e.order==="YXZ"){const m=f*p,y=f*d,w=h*p,v=h*d;t[0]=m+v*u,t[4]=w*u-y,t[8]=l*h,t[1]=l*d,t[5]=l*p,t[9]=-u,t[2]=y*u-w,t[6]=v+m*u,t[10]=l*f}else if(e.order==="ZXY"){const m=f*p,y=f*d,w=h*p,v=h*d;t[0]=m-v*u,t[4]=-l*d,t[8]=w+y*u,t[1]=y+w*u,t[5]=l*p,t[9]=v-m*u,t[2]=-l*h,t[6]=u,t[10]=l*f}else if(e.order==="ZYX"){const m=l*p,y=l*d,w=u*p,v=u*d;t[0]=f*p,t[4]=w*h-y,t[8]=m*h+v,t[1]=f*d,t[5]=v*h+m,t[9]=y*h-w,t[2]=-h,t[6]=u*f,t[10]=l*f}else if(e.order==="YZX"){const m=l*f,y=l*h,w=u*f,v=u*h;t[0]=f*p,t[4]=v-m*d,t[8]=w*d+y,t[1]=d,t[5]=l*p,t[9]=-u*p,t[2]=-h*p,t[6]=y*d+w,t[10]=m-v*d}else if(e.order==="XZY"){const m=l*f,y=l*h,w=u*f,v=u*h;t[0]=f*p,t[4]=-d,t[8]=h*p,t[1]=m*d+v,t[5]=l*p,t[9]=y*d-w,t[2]=w*d-y,t[6]=u*p,t[10]=v*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LP,e,PP)}lookAt(e,t,i){const r=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),as.crossVectors(i,ri),as.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),as.crossVectors(i,ri)),as.normalize(),Tc.crossVectors(ri,as),r[0]=as.x,r[4]=Tc.x,r[8]=ri.x,r[1]=as.y,r[5]=Tc.y,r[9]=ri.y,r[2]=as.z,r[6]=Tc.z,r[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,l=i[0],u=i[4],f=i[8],h=i[12],p=i[1],d=i[5],m=i[9],y=i[13],w=i[2],v=i[6],_=i[10],x=i[14],S=i[3],E=i[7],T=i[11],A=i[15],R=r[0],O=r[4],b=r[8],F=r[12],V=r[1],ce=r[5],ge=r[9],Q=r[13],$=r[2],ae=r[6],he=r[10],de=r[14],G=r[3],k=r[7],W=r[11],le=r[15];return o[0]=l*R+u*V+f*$+h*G,o[4]=l*O+u*ce+f*ae+h*k,o[8]=l*b+u*ge+f*he+h*W,o[12]=l*F+u*Q+f*de+h*le,o[1]=p*R+d*V+m*$+y*G,o[5]=p*O+d*ce+m*ae+y*k,o[9]=p*b+d*ge+m*he+y*W,o[13]=p*F+d*Q+m*de+y*le,o[2]=w*R+v*V+_*$+x*G,o[6]=w*O+v*ce+_*ae+x*k,o[10]=w*b+v*ge+_*he+x*W,o[14]=w*F+v*Q+_*de+x*le,o[3]=S*R+E*V+T*$+A*G,o[7]=S*O+E*ce+T*ae+A*k,o[11]=S*b+E*ge+T*he+A*W,o[15]=S*F+E*Q+T*de+A*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],l=e[1],u=e[5],f=e[9],h=e[13],p=e[2],d=e[6],m=e[10],y=e[14],w=e[3],v=e[7],_=e[11],x=e[15];return w*(+o*f*d-r*h*d-o*u*m+i*h*m+r*u*y-i*f*y)+v*(+t*f*y-t*h*m+o*l*m-r*l*y+r*h*p-o*f*p)+_*(+t*h*d-t*u*y-o*l*d+i*l*y+o*u*p-i*h*p)+x*(-r*u*p-t*f*d+t*u*m+r*l*d-i*l*m+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8],d=e[9],m=e[10],y=e[11],w=e[12],v=e[13],_=e[14],x=e[15],S=d*_*h-v*m*h+v*f*y-u*_*y-d*f*x+u*m*x,E=w*m*h-p*_*h-w*f*y+l*_*y+p*f*x-l*m*x,T=p*v*h-w*d*h+w*u*y-l*v*y-p*u*x+l*d*x,A=w*d*f-p*v*f-w*u*m+l*v*m+p*u*_-l*d*_,R=t*S+i*E+r*T+o*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=S*O,e[1]=(v*m*o-d*_*o-v*r*y+i*_*y+d*r*x-i*m*x)*O,e[2]=(u*_*o-v*f*o+v*r*h-i*_*h-u*r*x+i*f*x)*O,e[3]=(d*f*o-u*m*o-d*r*h+i*m*h+u*r*y-i*f*y)*O,e[4]=E*O,e[5]=(p*_*o-w*m*o+w*r*y-t*_*y-p*r*x+t*m*x)*O,e[6]=(w*f*o-l*_*o-w*r*h+t*_*h+l*r*x-t*f*x)*O,e[7]=(l*m*o-p*f*o+p*r*h-t*m*h-l*r*y+t*f*y)*O,e[8]=T*O,e[9]=(w*d*o-p*v*o-w*i*y+t*v*y+p*i*x-t*d*x)*O,e[10]=(l*v*o-w*u*o+w*i*h-t*v*h-l*i*x+t*u*x)*O,e[11]=(p*u*o-l*d*o-p*i*h+t*d*h+l*i*y-t*u*y)*O,e[12]=A*O,e[13]=(p*v*r-w*d*r+w*i*m-t*v*m-p*i*_+t*d*_)*O,e[14]=(w*u*r-l*v*r-w*i*f+t*v*f+l*i*_-t*u*_)*O,e[15]=(l*d*r-p*u*r+p*i*f-t*d*f-l*i*m+t*u*m)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,l=e.x,u=e.y,f=e.z,h=o*l,p=o*u;return this.set(h*l+i,h*u-r*f,h*f+r*u,0,h*u+r*f,p*u+i,p*f-r*l,0,h*f-r*u,p*f+r*l,o*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,l){return this.set(1,i,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,l=t._y,u=t._z,f=t._w,h=o+o,p=l+l,d=u+u,m=o*h,y=o*p,w=o*d,v=l*p,_=l*d,x=u*d,S=f*h,E=f*p,T=f*d,A=i.x,R=i.y,O=i.z;return r[0]=(1-(v+x))*A,r[1]=(y+T)*A,r[2]=(w-E)*A,r[3]=0,r[4]=(y-T)*R,r[5]=(1-(m+x))*R,r[6]=(_+S)*R,r[7]=0,r[8]=(w+E)*O,r[9]=(_-S)*O,r[10]=(1-(m+v))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=Vo.set(r[0],r[1],r[2]).length();const l=Vo.set(r[4],r[5],r[6]).length(),u=Vo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Vi.copy(this);const h=1/o,p=1/l,d=1/u;return Vi.elements[0]*=h,Vi.elements[1]*=h,Vi.elements[2]*=h,Vi.elements[4]*=p,Vi.elements[5]*=p,Vi.elements[6]*=p,Vi.elements[8]*=d,Vi.elements[9]*=d,Vi.elements[10]*=d,t.setFromRotationMatrix(Vi),i.x=o,i.y=l,i.z=u,this}makePerspective(e,t,i,r,o,l){const u=this.elements,f=2*o/(t-e),h=2*o/(i-r),p=(t+e)/(t-e),d=(i+r)/(i-r),m=-(l+o)/(l-o),y=-2*l*o/(l-o);return u[0]=f,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=h,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,o,l){const u=this.elements,f=1/(t-e),h=1/(i-r),p=1/(l-o),d=(t+e)*f,m=(i+r)*h,y=(l+o)*p;return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-d,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-m,u[2]=0,u[6]=0,u[10]=-2*p,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vo=new q,Vi=new rn,LP=new q(0,0,0),PP=new q(1,1,1),as=new q,Tc=new q,ri=new q,Dx=new rn,Ix=new po;class fu{constructor(e=0,t=0,i=0,r=fu.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],l=r[4],u=r[8],f=r[1],h=r[5],p=r[9],d=r[2],m=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(Xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Xn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Xn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,y),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Xn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ix.setFromEuler(this),this.setFromQuaternion(Ix,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}fu.DefaultOrder="XYZ";fu.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class $S{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RP=0;const Nx=new q,Ho=new po,Cr=new rn,bc=new q,pl=new q,DP=new q,IP=new po,Fx=new q(1,0,0),Ox=new q(0,1,0),zx=new q(0,0,1),NP={type:"added"},Ux={type:"removed"};class Fn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RP++}),this.uuid=lu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DefaultUp.clone();const e=new q,t=new fu,i=new po,r=new q(1,1,1);function o(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rn},normalMatrix:{value:new Ci}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Fn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Fn.DefaultMatrixWorldAutoUpdate,this.layers=new $S,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.multiply(Ho),this}rotateOnWorldAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.premultiply(Ho),this}rotateX(e){return this.rotateOnAxis(Fx,e)}rotateY(e){return this.rotateOnAxis(Ox,e)}rotateZ(e){return this.rotateOnAxis(zx,e)}translateOnAxis(e,t){return Nx.copy(e).applyQuaternion(this.quaternion),this.position.add(Nx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fx,e)}translateY(e){return this.translateOnAxis(Ox,e)}translateZ(e){return this.translateOnAxis(zx,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bc.copy(e):bc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(pl,bc,this.up):Cr.lookAt(bc,pl,this.up),this.quaternion.setFromRotationMatrix(Cr),r&&(Cr.extractRotation(r.matrixWorld),Ho.setFromRotationMatrix(Cr),this.quaternion.premultiply(Ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(NP)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ux)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ux)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pl,e,DP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pl,IP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++){const u=r[o];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const d=f[h];o(e.shapes,d)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(o(e.materials,this.material[f]));r.material=u}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];r.animations.push(o(e.animations,f))}}if(t){const u=l(e.geometries),f=l(e.materials),h=l(e.textures),p=l(e.images),d=l(e.shapes),m=l(e.skeletons),y=l(e.animations),w=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),w.length>0&&(i.nodes=w)}return i.object=r,i;function l(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Fn.DefaultUp=new q(0,1,0);Fn.DefaultMatrixAutoUpdate=!0;Fn.DefaultMatrixWorldAutoUpdate=!0;const Hi=new q,Ar=new q,Zd=new q,Lr=new q,Xo=new q,qo=new q,kx=new q,Kd=new q,Qd=new q,Jd=new q;class Nr{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Hi.subVectors(e,t),r.cross(Hi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Hi.subVectors(r,t),Ar.subVectors(i,t),Zd.subVectors(e,t);const l=Hi.dot(Hi),u=Hi.dot(Ar),f=Hi.dot(Zd),h=Ar.dot(Ar),p=Ar.dot(Zd),d=l*h-u*u;if(d===0)return o.set(-2,-1,-1);const m=1/d,y=(h*f-u*p)*m,w=(l*p-u*f)*m;return o.set(1-y-w,w,y)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Lr),Lr.x>=0&&Lr.y>=0&&Lr.x+Lr.y<=1}static getUV(e,t,i,r,o,l,u,f){return this.getBarycoord(e,t,i,r,Lr),f.set(0,0),f.addScaledVector(o,Lr.x),f.addScaledVector(l,Lr.y),f.addScaledVector(u,Lr.z),f}static isFrontFacing(e,t,i,r){return Hi.subVectors(i,t),Ar.subVectors(e,t),Hi.cross(Ar).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),Hi.cross(Ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return Nr.getUV(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Nr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let l,u;Xo.subVectors(r,i),qo.subVectors(o,i),Kd.subVectors(e,i);const f=Xo.dot(Kd),h=qo.dot(Kd);if(f<=0&&h<=0)return t.copy(i);Qd.subVectors(e,r);const p=Xo.dot(Qd),d=qo.dot(Qd);if(p>=0&&d<=p)return t.copy(r);const m=f*d-p*h;if(m<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(i).addScaledVector(Xo,l);Jd.subVectors(e,o);const y=Xo.dot(Jd),w=qo.dot(Jd);if(w>=0&&y<=w)return t.copy(o);const v=y*h-f*w;if(v<=0&&h>=0&&w<=0)return u=h/(h-w),t.copy(i).addScaledVector(qo,u);const _=p*w-y*d;if(_<=0&&d-p>=0&&y-w>=0)return kx.subVectors(o,r),u=(d-p)/(d-p+(y-w)),t.copy(r).addScaledVector(kx,u);const x=1/(_+v+m);return l=v*x,u=m*x,t.copy(i).addScaledVector(Xo,l).addScaledVector(qo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let FP=0;class Vr extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FP++}),this.uuid=lu(),this.name="",this.type="Material",this.blending=ya,this.side=Pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=kS,this.blendDst=BS,this.blendEquation=Jo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cm,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=EP,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zd,this.stencilZFail=zd,this.stencilZPass=zd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ya&&(i.blending=this.blending),this.side!==Pa&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(t){const o=r(e.textures),l=r(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ZS extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new q,Cc=new Ze;class fr{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=bx,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cc.fromBufferAttribute(this,t),Cc.applyMatrix3(e),this.setXY(t,Cc.x,Cc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_c(t,this.array)),t}setX(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_c(t,this.array)),t}setY(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_c(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_c(t,this.array)),t}setW(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),i=ii(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),i=ii(i,this.array),r=ii(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),i=ii(i,this.array),r=ii(r,this.array),o=ii(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bx&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class KS extends fr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class QS extends fr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends fr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let OP=0;const Si=new rn,ep=new Fn,jo=new q,si=new uu,ml=new uu,un=new q;class Zn extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OP++}),this.uuid=lu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(HS(e)?QS:KS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ci().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,i){return Si.makeTranslation(e,t,i),this.applyMatrix4(Si),this}scale(e,t,i){return Si.makeScale(e,t,i),this.applyMatrix4(Si),this}lookAt(e){return ep.lookAt(e),ep.updateMatrix(),this.applyMatrix4(ep.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jo).negate(),this.translate(jo.x,jo.y,jo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];si.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];ml.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(si.min,ml.min),si.expandByPoint(un),un.addVectors(si.max,ml.max),si.expandByPoint(un)):(si.expandByPoint(ml.min),si.expandByPoint(ml.max))}si.getCenter(i);let r=0;for(let o=0,l=e.count;o<l;o++)un.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(un));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)un.fromBufferAttribute(u,h),f&&(jo.fromBufferAttribute(e,h),un.add(jo)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,l=t.uv.array,u=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fr(new Float32Array(4*u),4));const f=this.getAttribute("tangent").array,h=[],p=[];for(let V=0;V<u;V++)h[V]=new q,p[V]=new q;const d=new q,m=new q,y=new q,w=new Ze,v=new Ze,_=new Ze,x=new q,S=new q;function E(V,ce,ge){d.fromArray(r,V*3),m.fromArray(r,ce*3),y.fromArray(r,ge*3),w.fromArray(l,V*2),v.fromArray(l,ce*2),_.fromArray(l,ge*2),m.sub(d),y.sub(d),v.sub(w),_.sub(w);const Q=1/(v.x*_.y-_.x*v.y);!isFinite(Q)||(x.copy(m).multiplyScalar(_.y).addScaledVector(y,-v.y).multiplyScalar(Q),S.copy(y).multiplyScalar(v.x).addScaledVector(m,-_.x).multiplyScalar(Q),h[V].add(x),h[ce].add(x),h[ge].add(x),p[V].add(S),p[ce].add(S),p[ge].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let V=0,ce=T.length;V<ce;++V){const ge=T[V],Q=ge.start,$=ge.count;for(let ae=Q,he=Q+$;ae<he;ae+=3)E(i[ae+0],i[ae+1],i[ae+2])}const A=new q,R=new q,O=new q,b=new q;function F(V){O.fromArray(o,V*3),b.copy(O);const ce=h[V];A.copy(ce),A.sub(O.multiplyScalar(O.dot(ce))).normalize(),R.crossVectors(b,ce);const Q=R.dot(p[V])<0?-1:1;f[V*4]=A.x,f[V*4+1]=A.y,f[V*4+2]=A.z,f[V*4+3]=Q}for(let V=0,ce=T.length;V<ce;++V){const ge=T[V],Q=ge.start,$=ge.count;for(let ae=Q,he=Q+$;ae<he;ae+=3)F(i[ae+0]),F(i[ae+1]),F(i[ae+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);const r=new q,o=new q,l=new q,u=new q,f=new q,h=new q,p=new q,d=new q;if(e)for(let m=0,y=e.count;m<y;m+=3){const w=e.getX(m+0),v=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(t,w),o.fromBufferAttribute(t,v),l.fromBufferAttribute(t,_),p.subVectors(l,o),d.subVectors(r,o),p.cross(d),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,v),h.fromBufferAttribute(i,_),u.add(p),f.add(p),h.add(p),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(v,f.x,f.y,f.z),i.setXYZ(_,h.x,h.y,h.z)}else for(let m=0,y=t.count;m<y;m+=3)r.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),p.subVectors(l,o),d.subVectors(r,o),p.cross(d),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,d=u.normalized,m=new h.constructor(f.length*p);let y=0,w=0;for(let v=0,_=f.length;v<_;v++){u.isInterleavedBufferAttribute?y=f[v]*u.data.stride+u.offset:y=f[v]*p;for(let x=0;x<p;x++)m[w++]=h[y++]}return new fr(m,p,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,i=this.index.array,r=this.attributes;for(const u in r){const f=r[u],h=e(f,i);t.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const f=[],h=o[u];for(let p=0,d=h.length;p<d;p++){const m=h[p],y=e(m,i);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const h=l[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const r={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let d=0,m=h.length;d<m;d++){const y=h[d];p.push(y.toJSON(e.data))}p.length>0&&(r[f]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],d=o[h];for(let m=0,y=d.length;m<y;m++)p.push(d[m].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const d=l[h];this.addGroup(d.start,d.count,d.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bx=new rn,Yo=new gg,tp=new cu,ls=new q,us=new q,cs=new q,np=new q,ip=new q,rp=new q,Ac=new q,Lc=new q,Pc=new q,Rc=new Ze,Dc=new Ze,Ic=new Ze,sp=new q,Nc=new q;class Zi extends Fn{constructor(e=new Zn,t=new ZS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),tp.copy(i.boundingSphere),tp.applyMatrix4(o),e.ray.intersectsSphere(tp)===!1)||(Bx.copy(o).invert(),Yo.copy(e.ray).applyMatrix4(Bx),i.boundingBox!==null&&Yo.intersectsBox(i.boundingBox)===!1))return;let l;const u=i.index,f=i.attributes.position,h=i.morphAttributes.position,p=i.morphTargetsRelative,d=i.attributes.uv,m=i.attributes.uv2,y=i.groups,w=i.drawRange;if(u!==null)if(Array.isArray(r))for(let v=0,_=y.length;v<_;v++){const x=y[v],S=r[x.materialIndex],E=Math.max(x.start,w.start),T=Math.min(u.count,Math.min(x.start+x.count,w.start+w.count));for(let A=E,R=T;A<R;A+=3){const O=u.getX(A),b=u.getX(A+1),F=u.getX(A+2);l=Fc(this,S,e,Yo,f,h,p,d,m,O,b,F),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const v=Math.max(0,w.start),_=Math.min(u.count,w.start+w.count);for(let x=v,S=_;x<S;x+=3){const E=u.getX(x),T=u.getX(x+1),A=u.getX(x+2);l=Fc(this,r,e,Yo,f,h,p,d,m,E,T,A),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}else if(f!==void 0)if(Array.isArray(r))for(let v=0,_=y.length;v<_;v++){const x=y[v],S=r[x.materialIndex],E=Math.max(x.start,w.start),T=Math.min(f.count,Math.min(x.start+x.count,w.start+w.count));for(let A=E,R=T;A<R;A+=3){const O=A,b=A+1,F=A+2;l=Fc(this,S,e,Yo,f,h,p,d,m,O,b,F),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const v=Math.max(0,w.start),_=Math.min(f.count,w.start+w.count);for(let x=v,S=_;x<S;x+=3){const E=x,T=x+1,A=x+2;l=Fc(this,r,e,Yo,f,h,p,d,m,E,T,A),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}}}function zP(n,e,t,i,r,o,l,u){let f;if(e.side===Li?f=i.intersectTriangle(l,o,r,!0,u):f=i.intersectTriangle(r,o,l,e.side!==_s,u),f===null)return null;Nc.copy(u),Nc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Nc);return h<t.near||h>t.far?null:{distance:h,point:Nc.clone(),object:n}}function Fc(n,e,t,i,r,o,l,u,f,h,p,d){ls.fromBufferAttribute(r,h),us.fromBufferAttribute(r,p),cs.fromBufferAttribute(r,d);const m=n.morphTargetInfluences;if(o&&m){Ac.set(0,0,0),Lc.set(0,0,0),Pc.set(0,0,0);for(let w=0,v=o.length;w<v;w++){const _=m[w],x=o[w];_!==0&&(np.fromBufferAttribute(x,h),ip.fromBufferAttribute(x,p),rp.fromBufferAttribute(x,d),l?(Ac.addScaledVector(np,_),Lc.addScaledVector(ip,_),Pc.addScaledVector(rp,_)):(Ac.addScaledVector(np.sub(ls),_),Lc.addScaledVector(ip.sub(us),_),Pc.addScaledVector(rp.sub(cs),_)))}ls.add(Ac),us.add(Lc),cs.add(Pc)}n.isSkinnedMesh&&(n.boneTransform(h,ls),n.boneTransform(p,us),n.boneTransform(d,cs));const y=zP(n,e,t,i,ls,us,cs,sp);if(y){u&&(Rc.fromBufferAttribute(u,h),Dc.fromBufferAttribute(u,p),Ic.fromBufferAttribute(u,d),y.uv=Nr.getUV(sp,ls,us,cs,Rc,Dc,Ic,new Ze)),f&&(Rc.fromBufferAttribute(f,h),Dc.fromBufferAttribute(f,p),Ic.fromBufferAttribute(f,d),y.uv2=Nr.getUV(sp,ls,us,cs,Rc,Dc,Ic,new Ze));const w={a:h,b:p,c:d,normal:new q,materialIndex:0};Nr.getNormal(ls,us,cs,w.normal),y.face=w}return y}class hu extends Zn{constructor(e=1,t=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};const u=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const f=[],h=[],p=[],d=[];let m=0,y=0;w("z","y","x",-1,-1,i,t,e,l,o,0),w("z","y","x",1,-1,i,t,-e,l,o,1),w("x","z","y",1,1,e,i,t,r,l,2),w("x","z","y",1,-1,e,i,-t,r,l,3),w("x","y","z",1,-1,e,t,i,r,o,4),w("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(f),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(d,2));function w(v,_,x,S,E,T,A,R,O,b,F){const V=T/O,ce=A/b,ge=T/2,Q=A/2,$=R/2,ae=O+1,he=b+1;let de=0,G=0;const k=new q;for(let W=0;W<he;W++){const le=W*ce-Q;for(let re=0;re<ae;re++){const _e=re*V-ge;k[v]=_e*S,k[_]=le*E,k[x]=$,h.push(k.x,k.y,k.z),k[v]=0,k[_]=0,k[x]=R>0?1:-1,p.push(k.x,k.y,k.z),d.push(re/O),d.push(1-W/b),de+=1}}for(let W=0;W<b;W++)for(let le=0;le<O;le++){const re=m+le+ae*W,_e=m+le+ae*(W+1),be=m+(le+1)+ae*(W+1),Ne=m+(le+1)+ae*W;f.push(re,_e,Ne),f.push(_e,be,Ne),G+=6}u.addGroup(y,G,F),y+=G,m+=de}}static fromJSON(e){return new hu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Na(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tn(n){const e={};for(let t=0;t<n.length;t++){const i=Na(n[t]);for(const r in i)e[r]=i[r]}return e}function UP(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const nu={clone:Na,merge:Tn};var kP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kP,this.fragmentShader=BP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Na(e.uniforms),this.uniformsGroups=UP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class JS extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yi extends JS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ax*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ax*2*Math.atan(Math.tan(Ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ud*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;o+=l.offsetX*r/f,t-=l.offsetY*i/h,r*=l.width/f,i*=l.height/h}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $o=90,Zo=1;class GP extends Fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Yi($o,Zo,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new q(1,0,0)),this.add(r);const o=new Yi($o,Zo,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new q(-1,0,0)),this.add(o);const l=new Yi($o,Zo,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(new q(0,1,0)),this.add(l);const u=new Yi($o,Zo,e,t);u.layers=this.layers,u.up.set(0,0,-1),u.lookAt(new q(0,-1,0)),this.add(u);const f=new Yi($o,Zo,e,t);f.layers=this.layers,f.up.set(0,-1,0),f.lookAt(new q(0,0,1)),this.add(f);const h=new Yi($o,Zo,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new q(0,0,-1)),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,l,u,f,h]=this.children,p=e.getRenderTarget(),d=e.toneMapping,m=e.xr.enabled;e.toneMapping=Ur,e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,l),e.setRenderTarget(i,3),e.render(t,u),e.setRenderTarget(i,4),e.render(t,f),i.texture.generateMipmaps=y,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(p),e.toneMapping=d,e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class ew extends Di{constructor(e,t,i,r,o,l,u,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Ra,super(e,t,i,r,o,l,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WP extends hr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ew(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new hu(5,5,5),o=new Ii({name:"CubemapFromEquirect",uniforms:Na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Li,blending:bs});o.uniforms.tEquirect.value=t;const l=new Zi(r,o),u=t.minFilter;return t.minFilter===Xf&&(t.minFilter=Ti),new GP(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,r);e.setRenderTarget(o)}}const op=new q,VP=new q,HP=new Ci;class qs{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=op.subVectors(i,t).cross(VP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(op),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||HP.getNormalMatrix(e),r=this.coplanarPoint(op).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ko=new cu,Oc=new q;class tw{constructor(e=new qs,t=new qs,i=new qs,r=new qs,o=new qs,l=new qs){this.planes=[e,t,i,r,o,l]}set(e,t,i,r,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(r),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],u=i[3],f=i[4],h=i[5],p=i[6],d=i[7],m=i[8],y=i[9],w=i[10],v=i[11],_=i[12],x=i[13],S=i[14],E=i[15];return t[0].setComponents(u-r,d-f,v-m,E-_).normalize(),t[1].setComponents(u+r,d+f,v+m,E+_).normalize(),t[2].setComponents(u+o,d+h,v+y,E+x).normalize(),t[3].setComponents(u-o,d-h,v-y,E-x).normalize(),t[4].setComponents(u-l,d-p,v-w,E-S).normalize(),t[5].setComponents(u+l,d+p,v+w,E+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ko.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ko)}intersectsSprite(e){return Ko.center.set(0,0,0),Ko.radius=.7071067811865476,Ko.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ko)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Oc.x=r.normal.x>0?e.max.x:e.min.x,Oc.y=r.normal.y>0?e.max.y:e.min.y,Oc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nw(){let n=null,e=!1,t=null,i=null;function r(o,l){t(o,l),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function XP(n,e){const t=e.isWebGL2,i=new WeakMap;function r(h,p){const d=h.array,m=h.usage,y=n.createBuffer();n.bindBuffer(p,y),n.bufferData(p,d,m),h.onUploadCallback();let w;if(d instanceof Float32Array)w=5126;else if(d instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)w=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=5123;else if(d instanceof Int16Array)w=5122;else if(d instanceof Uint32Array)w=5125;else if(d instanceof Int32Array)w=5124;else if(d instanceof Int8Array)w=5120;else if(d instanceof Uint8Array)w=5121;else if(d instanceof Uint8ClampedArray)w=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:y,type:w,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version}}function o(h,p,d){const m=p.array,y=p.updateRange;n.bindBuffer(d,h),y.count===-1?n.bufferSubData(d,0,m):(t?n.bufferSubData(d,y.offset*m.BYTES_PER_ELEMENT,m,y.offset,y.count):n.bufferSubData(d,y.offset*m.BYTES_PER_ELEMENT,m.subarray(y.offset,y.offset+y.count)),y.count=-1)}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(n.deleteBuffer(p.buffer),i.delete(h))}function f(h,p){if(h.isGLBufferAttribute){const m=i.get(h);(!m||m.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const d=i.get(h);d===void 0?i.set(h,r(h,p)):d.version<h.version&&(o(d.buffer,h,p),d.version=h.version)}return{get:l,remove:u,update:f}}class _g extends Zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,l=t/2,u=Math.floor(i),f=Math.floor(r),h=u+1,p=f+1,d=e/u,m=t/f,y=[],w=[],v=[],_=[];for(let x=0;x<p;x++){const S=x*m-l;for(let E=0;E<h;E++){const T=E*d-o;w.push(T,-S,0),v.push(0,0,1),_.push(E/u),_.push(1-x/f)}}for(let x=0;x<f;x++)for(let S=0;S<u;S++){const E=S+h*x,T=S+h*(x+1),A=S+1+h*(x+1),R=S+1+h*x;y.push(E,T,R),y.push(T,A,R)}this.setIndex(y),this.setAttribute("position",new $t(w,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(_,2))}static fromJSON(e){return new _g(e.width,e.height,e.widthSegments,e.heightSegments)}}var qP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,jP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YP=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$P=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QP="vec3 transformed = vec3( position );",JP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eR=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,tR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,rR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dR=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_R=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vR="gl_FragColor = linearToOutputTexel( gl_FragColor );",xR=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ER=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,RR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,NR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FR=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,OR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,UR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,BR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,GR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WR=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,XR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,YR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$R=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tD=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iD=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,oD=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,fD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,dD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,pD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,_D=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MD=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ED=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TD=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,bD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,LD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ID=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ND=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,OD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,zD=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,UD=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,kD=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,BD=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,GD=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,WD=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,VD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XD=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jD=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,YD=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$D=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ZD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nI=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_I=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vI=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,yI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,it={alphamap_fragment:qP,alphamap_pars_fragment:jP,alphatest_fragment:YP,alphatest_pars_fragment:$P,aomap_fragment:ZP,aomap_pars_fragment:KP,begin_vertex:QP,beginnormal_vertex:JP,bsdfs:eR,iridescence_fragment:tR,bumpmap_pars_fragment:nR,clipping_planes_fragment:iR,clipping_planes_pars_fragment:rR,clipping_planes_pars_vertex:sR,clipping_planes_vertex:oR,color_fragment:aR,color_pars_fragment:lR,color_pars_vertex:uR,color_vertex:cR,common:fR,cube_uv_reflection_fragment:hR,defaultnormal_vertex:dR,displacementmap_pars_vertex:pR,displacementmap_vertex:mR,emissivemap_fragment:gR,emissivemap_pars_fragment:_R,encodings_fragment:vR,encodings_pars_fragment:xR,envmap_fragment:yR,envmap_common_pars_fragment:SR,envmap_pars_fragment:wR,envmap_pars_vertex:MR,envmap_physical_pars_fragment:FR,envmap_vertex:ER,fog_vertex:TR,fog_pars_vertex:bR,fog_fragment:CR,fog_pars_fragment:AR,gradientmap_pars_fragment:LR,lightmap_fragment:PR,lightmap_pars_fragment:RR,lights_lambert_fragment:DR,lights_lambert_pars_fragment:IR,lights_pars_begin:NR,lights_toon_fragment:OR,lights_toon_pars_fragment:zR,lights_phong_fragment:UR,lights_phong_pars_fragment:kR,lights_physical_fragment:BR,lights_physical_pars_fragment:GR,lights_fragment_begin:WR,lights_fragment_maps:VR,lights_fragment_end:HR,logdepthbuf_fragment:XR,logdepthbuf_pars_fragment:qR,logdepthbuf_pars_vertex:jR,logdepthbuf_vertex:YR,map_fragment:$R,map_pars_fragment:ZR,map_particle_fragment:KR,map_particle_pars_fragment:QR,metalnessmap_fragment:JR,metalnessmap_pars_fragment:eD,morphcolor_vertex:tD,morphnormal_vertex:nD,morphtarget_pars_vertex:iD,morphtarget_vertex:rD,normal_fragment_begin:sD,normal_fragment_maps:oD,normal_pars_fragment:aD,normal_pars_vertex:lD,normal_vertex:uD,normalmap_pars_fragment:cD,clearcoat_normal_fragment_begin:fD,clearcoat_normal_fragment_maps:hD,clearcoat_pars_fragment:dD,iridescence_pars_fragment:pD,output_fragment:mD,packing:gD,premultiplied_alpha_fragment:_D,project_vertex:vD,dithering_fragment:xD,dithering_pars_fragment:yD,roughnessmap_fragment:SD,roughnessmap_pars_fragment:wD,shadowmap_pars_fragment:MD,shadowmap_pars_vertex:ED,shadowmap_vertex:TD,shadowmask_pars_fragment:bD,skinbase_vertex:CD,skinning_pars_vertex:AD,skinning_vertex:LD,skinnormal_vertex:PD,specularmap_fragment:RD,specularmap_pars_fragment:DD,tonemapping_fragment:ID,tonemapping_pars_fragment:ND,transmission_fragment:FD,transmission_pars_fragment:OD,uv_pars_fragment:zD,uv_pars_vertex:UD,uv_vertex:kD,uv2_pars_fragment:BD,uv2_pars_vertex:GD,uv2_vertex:WD,worldpos_vertex:VD,background_vert:HD,background_frag:XD,cube_vert:qD,cube_frag:jD,depth_vert:YD,depth_frag:$D,distanceRGBA_vert:ZD,distanceRGBA_frag:KD,equirect_vert:QD,equirect_frag:JD,linedashed_vert:eI,linedashed_frag:tI,meshbasic_vert:nI,meshbasic_frag:iI,meshlambert_vert:rI,meshlambert_frag:sI,meshmatcap_vert:oI,meshmatcap_frag:aI,meshnormal_vert:lI,meshnormal_frag:uI,meshphong_vert:cI,meshphong_frag:fI,meshphysical_vert:hI,meshphysical_frag:dI,meshtoon_vert:pI,meshtoon_frag:mI,points_vert:gI,points_frag:_I,shadow_vert:vI,shadow_frag:xI,sprite_vert:yI,sprite_frag:SI},Se={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ci},uv2Transform:{value:new Ci},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ci}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ci}}},or={basic:{uniforms:Tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new pt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Tn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Tn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new pt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Tn([Se.points,Se.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Tn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Tn([Se.common,Se.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Tn([Se.sprite,Se.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ci},t2D:{value:null}},vertexShader:it.background_vert,fragmentShader:it.background_frag},cube:{uniforms:Tn([Se.envmap,{opacity:{value:1}}]),vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Tn([Se.common,Se.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Tn([Se.lights,Se.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};or.physical={uniforms:Tn([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};function wI(n,e,t,i,r,o){const l=new pt(0);let u=r===!0?0:1,f,h,p=null,d=0,m=null;function y(v,_){let x=!1,S=_.isScene===!0?_.background:null;S&&S.isTexture&&(S=e.get(S));const E=n.xr,T=E.getSession&&E.getSession();T&&T.environmentBlendMode==="additive"&&(S=null),S===null?w(l,u):S&&S.isColor&&(w(S,1),x=!0),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Hf)?(h===void 0&&(h=new Zi(new hu(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Na(or.cube.uniforms),vertexShader:or.cube.vertexShader,fragmentShader:or.cube.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(p!==S||d!==S.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,p=S,d=S.version,m=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(f===void 0&&(f=new Zi(new _g(2,2),new Ii({name:"BackgroundMaterial",uniforms:Na(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:Pa,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),f.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||d!==S.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,p=S,d=S.version,m=n.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null))}function w(v,_){t.buffers.color.setClear(v.r,v.g,v.b,_,o)}return{getClearColor:function(){return l},setClearColor:function(v,_=1){l.set(v),u=_,w(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(v){u=v,w(l,u)},render:y}}function MI(n,e,t,i){const r=n.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,u={},f=_(null);let h=f,p=!1;function d($,ae,he,de,G){let k=!1;if(l){const W=v(de,he,ae);h!==W&&(h=W,y(h.object)),k=x($,de,he,G),k&&S($,de,he,G)}else{const W=ae.wireframe===!0;(h.geometry!==de.id||h.program!==he.id||h.wireframe!==W)&&(h.geometry=de.id,h.program=he.id,h.wireframe=W,k=!0)}G!==null&&t.update(G,34963),(k||p)&&(p=!1,b($,ae,he,de),G!==null&&n.bindBuffer(34963,t.get(G).buffer))}function m(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function y($){return i.isWebGL2?n.bindVertexArray($):o.bindVertexArrayOES($)}function w($){return i.isWebGL2?n.deleteVertexArray($):o.deleteVertexArrayOES($)}function v($,ae,he){const de=he.wireframe===!0;let G=u[$.id];G===void 0&&(G={},u[$.id]=G);let k=G[ae.id];k===void 0&&(k={},G[ae.id]=k);let W=k[de];return W===void 0&&(W=_(m()),k[de]=W),W}function _($){const ae=[],he=[],de=[];for(let G=0;G<r;G++)ae[G]=0,he[G]=0,de[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ae,enabledAttributes:he,attributeDivisors:de,object:$,attributes:{},index:null}}function x($,ae,he,de){const G=h.attributes,k=ae.attributes;let W=0;const le=he.getAttributes();for(const re in le)if(le[re].location>=0){const be=G[re];let Ne=k[re];if(Ne===void 0&&(re==="instanceMatrix"&&$.instanceMatrix&&(Ne=$.instanceMatrix),re==="instanceColor"&&$.instanceColor&&(Ne=$.instanceColor)),be===void 0||be.attribute!==Ne||Ne&&be.data!==Ne.data)return!0;W++}return h.attributesNum!==W||h.index!==de}function S($,ae,he,de){const G={},k=ae.attributes;let W=0;const le=he.getAttributes();for(const re in le)if(le[re].location>=0){let be=k[re];be===void 0&&(re==="instanceMatrix"&&$.instanceMatrix&&(be=$.instanceMatrix),re==="instanceColor"&&$.instanceColor&&(be=$.instanceColor));const Ne={};Ne.attribute=be,be&&be.data&&(Ne.data=be.data),G[re]=Ne,W++}h.attributes=G,h.attributesNum=W,h.index=de}function E(){const $=h.newAttributes;for(let ae=0,he=$.length;ae<he;ae++)$[ae]=0}function T($){A($,0)}function A($,ae){const he=h.newAttributes,de=h.enabledAttributes,G=h.attributeDivisors;he[$]=1,de[$]===0&&(n.enableVertexAttribArray($),de[$]=1),G[$]!==ae&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($,ae),G[$]=ae)}function R(){const $=h.newAttributes,ae=h.enabledAttributes;for(let he=0,de=ae.length;he<de;he++)ae[he]!==$[he]&&(n.disableVertexAttribArray(he),ae[he]=0)}function O($,ae,he,de,G,k){i.isWebGL2===!0&&(he===5124||he===5125)?n.vertexAttribIPointer($,ae,he,G,k):n.vertexAttribPointer($,ae,he,de,G,k)}function b($,ae,he,de){if(i.isWebGL2===!1&&($.isInstancedMesh||de.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const G=de.attributes,k=he.getAttributes(),W=ae.defaultAttributeValues;for(const le in k){const re=k[le];if(re.location>=0){let _e=G[le];if(_e===void 0&&(le==="instanceMatrix"&&$.instanceMatrix&&(_e=$.instanceMatrix),le==="instanceColor"&&$.instanceColor&&(_e=$.instanceColor)),_e!==void 0){const be=_e.normalized,Ne=_e.itemSize,J=t.get(_e);if(J===void 0)continue;const tt=J.buffer,Ue=J.type,ke=J.bytesPerElement;if(_e.isInterleavedBufferAttribute){const Le=_e.data,ct=Le.stride,qe=_e.offset;if(Le.isInstancedInterleavedBuffer){for(let Oe=0;Oe<re.locationSize;Oe++)A(re.location+Oe,Le.meshPerAttribute);$.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Oe=0;Oe<re.locationSize;Oe++)T(re.location+Oe);n.bindBuffer(34962,tt);for(let Oe=0;Oe<re.locationSize;Oe++)O(re.location+Oe,Ne/re.locationSize,Ue,be,ct*ke,(qe+Ne/re.locationSize*Oe)*ke)}else{if(_e.isInstancedBufferAttribute){for(let Le=0;Le<re.locationSize;Le++)A(re.location+Le,_e.meshPerAttribute);$.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Le=0;Le<re.locationSize;Le++)T(re.location+Le);n.bindBuffer(34962,tt);for(let Le=0;Le<re.locationSize;Le++)O(re.location+Le,Ne/re.locationSize,Ue,be,Ne*ke,Ne/re.locationSize*Le*ke)}}else if(W!==void 0){const be=W[le];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(re.location,be);break;case 3:n.vertexAttrib3fv(re.location,be);break;case 4:n.vertexAttrib4fv(re.location,be);break;default:n.vertexAttrib1fv(re.location,be)}}}}R()}function F(){ge();for(const $ in u){const ae=u[$];for(const he in ae){const de=ae[he];for(const G in de)w(de[G].object),delete de[G];delete ae[he]}delete u[$]}}function V($){if(u[$.id]===void 0)return;const ae=u[$.id];for(const he in ae){const de=ae[he];for(const G in de)w(de[G].object),delete de[G];delete ae[he]}delete u[$.id]}function ce($){for(const ae in u){const he=u[ae];if(he[$.id]===void 0)continue;const de=he[$.id];for(const G in de)w(de[G].object),delete de[G];delete he[$.id]}}function ge(){Q(),p=!0,h!==f&&(h=f,y(h.object))}function Q(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:d,reset:ge,resetDefaultState:Q,dispose:F,releaseStatesOfGeometry:V,releaseStatesOfProgram:ce,initAttributes:E,enableAttribute:T,disableUnusedAttributes:R}}function EI(n,e,t,i){const r=i.isWebGL2;let o;function l(h){o=h}function u(h,p){n.drawArrays(o,h,p),t.update(p,o,1)}function f(h,p,d){if(d===0)return;let m,y;if(r)m=n,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](o,h,p,d),t.update(p,o,d)}this.setMode=l,this.render=u,this.renderInstances=f}function TI(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(O){if(O==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let u=t.precision!==void 0?t.precision:"highp";const f=o(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=l||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),m=n.getParameter(35660),y=n.getParameter(3379),w=n.getParameter(34076),v=n.getParameter(34921),_=n.getParameter(36347),x=n.getParameter(36348),S=n.getParameter(36349),E=m>0,T=l||e.has("OES_texture_float"),A=E&&T,R=l?n.getParameter(36183):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:u,logarithmicDepthBuffer:p,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:w,maxAttributes:v,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:E,floatFragmentTextures:T,floatVertexTextures:A,maxSamples:R}}function bI(n){const e=this;let t=null,i=0,r=!1,o=!1;const l=new qs,u=new Ci,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m,y){const w=d.length!==0||m||i!==0||r;return r=m,t=p(d,y,0),i=d.length,w},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1,h()},this.setState=function(d,m,y){const w=d.clippingPlanes,v=d.clipIntersection,_=d.clipShadows,x=n.get(d);if(!r||w===null||w.length===0||o&&!_)o?p(null):h();else{const S=o?0:i,E=S*4;let T=x.clippingState||null;f.value=T,T=p(w,m,E,y);for(let A=0;A!==E;++A)T[A]=t[A];x.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(d,m,y,w){const v=d!==null?d.length:0;let _=null;if(v!==0){if(_=f.value,w!==!0||_===null){const x=y+v*4,S=m.matrixWorldInverse;u.getNormalMatrix(S),(_===null||_.length<x)&&(_=new Float32Array(x));for(let E=0,T=y;E!==v;++E,T+=4)l.copy(d[E]).applyMatrix4(S,u),l.normal.toArray(_,T),_[T+3]=l.constant}f.value=_,f.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function CI(n){let e=new WeakMap;function t(l,u){return u===fm?l.mapping=Ra:u===hm&&(l.mapping=Da),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const u=l.mapping;if(u===fm||u===hm)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new WP(f.height/2);return h.fromEquirectangularTexture(n,l),e.set(l,h),l.addEventListener("dispose",r),t(h.texture,l.mapping)}else return null}}return l}function r(l){const u=l.target;u.removeEventListener("dispose",r);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class vg extends JS{constructor(e=-1,t=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,l=i+e,u=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ha=4,Gx=[.125,.215,.35,.446,.526,.582],Ys=20,ap=new vg,Wx=new pt;let lp=null;const js=(1+Math.sqrt(5))/2,Qo=1/js,Vx=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,js,Qo),new q(0,js,-Qo),new q(Qo,0,js),new q(-Qo,0,js),new q(js,Qo,0),new q(-js,Qo,0)];class Hx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){lp=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lp),e.scissorTest=!1,zc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ra||e.mapping===Da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lp=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:eu,format:lr,encoding:ho,depthBuffer:!1},r=Xx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xx(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AI(o)),this._blurMaterial=LI(o,e,t)}return r}_compileMaterial(e){const t=new Zi(this._lodPlanes[0],e);this._renderer.compile(t,ap)}_sceneToCubeUV(e,t,i,r){const u=new Yi(90,1,t,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(Wx),p.toneMapping=Ur,p.autoClear=!1;const y=new ZS({name:"PMREM.Background",side:Li,depthWrite:!1,depthTest:!1}),w=new Zi(new hu,y);let v=!1;const _=e.background;_?_.isColor&&(y.color.copy(_),e.background=null,v=!0):(y.color.copy(Wx),v=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(u.up.set(0,f[x],0),u.lookAt(h[x],0,0)):S===1?(u.up.set(0,0,f[x]),u.lookAt(0,h[x],0)):(u.up.set(0,f[x],0),u.lookAt(0,0,h[x]));const E=this._cubeSize;zc(r,S*E,x>2?E:0,E,E),p.setRenderTarget(r),v&&p.render(w,u),p.render(e,u)}w.geometry.dispose(),w.material.dispose(),p.toneMapping=m,p.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ra||e.mapping===Da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qx());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new Zi(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;zc(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(l,ap)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Vx[(r-1)%Vx.length];this._blur(e,r-1,r,o,l)}t.autoClear=i}_blur(e,t,i,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,r,"latitudinal",o),this._halfBlur(l,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,l,u){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,d=new Zi(this._lodPlanes[r],h),m=h.uniforms,y=this._sizeLods[i]-1,w=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Ys-1),v=o/w,_=isFinite(o)?1+Math.floor(p*v):Ys;_>Ys&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ys}`);const x=[];let S=0;for(let O=0;O<Ys;++O){const b=O/v,F=Math.exp(-b*b/2);x.push(F),O===0?S+=F:O<_&&(S+=2*F)}for(let O=0;O<x.length;O++)x[O]=x[O]/S;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=x,m.latitudinal.value=l==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:E}=this;m.dTheta.value=w,m.mipInt.value=E-i;const T=this._sizeLods[r],A=3*T*(r>E-ha?r-E+ha:0),R=4*(this._cubeSize-T);zc(t,A,R,3*T,2*T),f.setRenderTarget(t),f.render(d,ap)}}function AI(n){const e=[],t=[],i=[];let r=n;const o=n-ha+1+Gx.length;for(let l=0;l<o;l++){const u=Math.pow(2,r);t.push(u);let f=1/u;l>n-ha?f=Gx[l-n+ha-1]:l===0&&(f=0),i.push(f);const h=1/(u-2),p=-h,d=1+h,m=[p,p,d,p,d,d,p,p,d,d,p,d],y=6,w=6,v=3,_=2,x=1,S=new Float32Array(v*w*y),E=new Float32Array(_*w*y),T=new Float32Array(x*w*y);for(let R=0;R<y;R++){const O=R%3*2/3-1,b=R>2?0:-1,F=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];S.set(F,v*w*R),E.set(m,_*w*R);const V=[R,R,R,R,R,R];T.set(V,x*w*R)}const A=new Zn;A.setAttribute("position",new fr(S,v)),A.setAttribute("uv",new fr(E,_)),A.setAttribute("faceIndex",new fr(T,x)),e.push(A),r>ha&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xx(n,e,t){const i=new hr(n,e,t);return i.texture.mapping=Hf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function LI(n,e,t){const i=new Float32Array(Ys),r=new q(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function qx(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function jx(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function xg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PI(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===fm||f===hm,p=f===Ra||f===Da;if(h||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let d=e.get(u);return t===null&&(t=new Hx(n)),d=h?t.fromEquirectangular(u,d):t.fromCubemap(u,d),e.set(u,d),d.texture}else{if(e.has(u))return e.get(u).texture;{const d=u.image;if(h&&d&&d.height>0||p&&d&&r(d)){t===null&&(t=new Hx(n));const m=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,m),u.addEventListener("dispose",o),m.texture}else return null}}}return u}function r(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:l}}function RI(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DI(n,e,t,i){const r={},o=new WeakMap;function l(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const w in m.attributes)e.remove(m.attributes[w]);m.removeEventListener("dispose",l),delete r[m.id];const y=o.get(m);y&&(e.remove(y),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(d,m){return r[m.id]===!0||(m.addEventListener("dispose",l),r[m.id]=!0,t.memory.geometries++),m}function f(d){const m=d.attributes;for(const w in m)e.update(m[w],34962);const y=d.morphAttributes;for(const w in y){const v=y[w];for(let _=0,x=v.length;_<x;_++)e.update(v[_],34962)}}function h(d){const m=[],y=d.index,w=d.attributes.position;let v=0;if(y!==null){const S=y.array;v=y.version;for(let E=0,T=S.length;E<T;E+=3){const A=S[E+0],R=S[E+1],O=S[E+2];m.push(A,R,R,O,O,A)}}else{const S=w.array;v=w.version;for(let E=0,T=S.length/3-1;E<T;E+=3){const A=E+0,R=E+1,O=E+2;m.push(A,R,R,O,O,A)}}const _=new(HS(m)?QS:KS)(m,1);_.version=v;const x=o.get(d);x&&e.remove(x),o.set(d,_)}function p(d){const m=o.get(d);if(m){const y=d.index;y!==null&&m.version<y.version&&h(d)}else h(d);return o.get(d)}return{get:u,update:f,getWireframeAttribute:p}}function II(n,e,t,i){const r=i.isWebGL2;let o;function l(m){o=m}let u,f;function h(m){u=m.type,f=m.bytesPerElement}function p(m,y){n.drawElements(o,y,u,m*f),t.update(y,o,1)}function d(m,y,w){if(w===0)return;let v,_;if(r)v=n,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](o,y,u,m*f,w),t.update(y,o,w)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=d}function NI(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(t.calls++,l){case 4:t.triangles+=u*(o/3);break;case 1:t.lines+=u*(o/2);break;case 3:t.lines+=u*(o-1);break;case 2:t.lines+=u*o;break;case 0:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function FI(n,e){return n[0]-e[0]}function OI(n,e){return Math.abs(e[1])-Math.abs(n[1])}function zI(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,l=new gn,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function f(h,p,d,m){const y=h.morphTargetInfluences;if(e.isWebGL2===!0){const w=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=w!==void 0?w.length:0;let _=o.get(p);if(_===void 0||_.count!==v){let ae=function(){Q.dispose(),o.delete(p),p.removeEventListener("dispose",ae)};_!==void 0&&_.texture.dispose();const E=p.morphAttributes.position!==void 0,T=p.morphAttributes.normal!==void 0,A=p.morphAttributes.color!==void 0,R=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],b=p.morphAttributes.color||[];let F=0;E===!0&&(F=1),T===!0&&(F=2),A===!0&&(F=3);let V=p.attributes.position.count*F,ce=1;V>e.maxTextureSize&&(ce=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const ge=new Float32Array(V*ce*4*v),Q=new YS(ge,V,ce,v);Q.type=eo,Q.needsUpdate=!0;const $=F*4;for(let he=0;he<v;he++){const de=R[he],G=O[he],k=b[he],W=V*ce*4*he;for(let le=0;le<de.count;le++){const re=le*$;E===!0&&(l.fromBufferAttribute(de,le),ge[W+re+0]=l.x,ge[W+re+1]=l.y,ge[W+re+2]=l.z,ge[W+re+3]=0),T===!0&&(l.fromBufferAttribute(G,le),ge[W+re+4]=l.x,ge[W+re+5]=l.y,ge[W+re+6]=l.z,ge[W+re+7]=0),A===!0&&(l.fromBufferAttribute(k,le),ge[W+re+8]=l.x,ge[W+re+9]=l.y,ge[W+re+10]=l.z,ge[W+re+11]=k.itemSize===4?l.w:1)}}_={count:v,texture:Q,size:new Ze(V,ce)},o.set(p,_),p.addEventListener("dispose",ae)}let x=0;for(let E=0;E<y.length;E++)x+=y[E];const S=p.morphTargetsRelative?1:1-x;m.getUniforms().setValue(n,"morphTargetBaseInfluence",S),m.getUniforms().setValue(n,"morphTargetInfluences",y),m.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const w=y===void 0?0:y.length;let v=i[p.id];if(v===void 0||v.length!==w){v=[];for(let T=0;T<w;T++)v[T]=[T,0];i[p.id]=v}for(let T=0;T<w;T++){const A=v[T];A[0]=T,A[1]=y[T]}v.sort(OI);for(let T=0;T<8;T++)T<w&&v[T][1]?(u[T][0]=v[T][0],u[T][1]=v[T][1]):(u[T][0]=Number.MAX_SAFE_INTEGER,u[T][1]=0);u.sort(FI);const _=p.morphAttributes.position,x=p.morphAttributes.normal;let S=0;for(let T=0;T<8;T++){const A=u[T],R=A[0],O=A[1];R!==Number.MAX_SAFE_INTEGER&&O?(_&&p.getAttribute("morphTarget"+T)!==_[R]&&p.setAttribute("morphTarget"+T,_[R]),x&&p.getAttribute("morphNormal"+T)!==x[R]&&p.setAttribute("morphNormal"+T,x[R]),r[T]=O,S+=O):(_&&p.hasAttribute("morphTarget"+T)===!0&&p.deleteAttribute("morphTarget"+T),x&&p.hasAttribute("morphNormal"+T)===!0&&p.deleteAttribute("morphNormal"+T),r[T]=0)}const E=p.morphTargetsRelative?1:1-S;m.getUniforms().setValue(n,"morphTargetBaseInfluence",E),m.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:f}}function UI(n,e,t,i){let r=new WeakMap;function o(f){const h=i.render.frame,p=f.geometry,d=e.get(f,p);return r.get(d)!==h&&(e.update(d),r.set(d,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),t.update(f.instanceMatrix,34962),f.instanceColor!==null&&t.update(f.instanceColor,34962)),d}function l(){r=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}const iw=new Di,rw=new YS,sw=new CP,ow=new ew,Yx=[],$x=[],Zx=new Float32Array(16),Kx=new Float32Array(9),Qx=new Float32Array(4);function Ua(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Yx[r];if(o===void 0&&(o=new Float32Array(r),Yx[r]=o),e!==0){i.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,n[l].toArray(o,u)}return o}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qf(n,e){let t=$x[e];t===void 0&&(t=new Int32Array(e),$x[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function BI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function GI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function WI(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function VI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Qx.set(i),n.uniformMatrix2fv(this.addr,!1,Qx),on(t,i)}}function HI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Kx.set(i),n.uniformMatrix3fv(this.addr,!1,Kx),on(t,i)}}function XI(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Zx.set(i),n.uniformMatrix4fv(this.addr,!1,Zx),on(t,i)}}function qI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jI(n,e){const t=this.cache;sn(t,e)||(n.uniform2iv(this.addr,e),on(t,e))}function YI(n,e){const t=this.cache;sn(t,e)||(n.uniform3iv(this.addr,e),on(t,e))}function $I(n,e){const t=this.cache;sn(t,e)||(n.uniform4iv(this.addr,e),on(t,e))}function ZI(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function KI(n,e){const t=this.cache;sn(t,e)||(n.uniform2uiv(this.addr,e),on(t,e))}function QI(n,e){const t=this.cache;sn(t,e)||(n.uniform3uiv(this.addr,e),on(t,e))}function JI(n,e){const t=this.cache;sn(t,e)||(n.uniform4uiv(this.addr,e),on(t,e))}function eN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||iw,r)}function tN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||sw,r)}function nN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ow,r)}function iN(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||rw,r)}function rN(n){switch(n){case 5126:return kI;case 35664:return BI;case 35665:return GI;case 35666:return WI;case 35674:return VI;case 35675:return HI;case 35676:return XI;case 5124:case 35670:return qI;case 35667:case 35671:return jI;case 35668:case 35672:return YI;case 35669:case 35673:return $I;case 5125:return ZI;case 36294:return KI;case 36295:return QI;case 36296:return JI;case 35678:case 36198:case 36298:case 36306:case 35682:return eN;case 35679:case 36299:case 36307:return tN;case 35680:case 36300:case 36308:case 36293:return nN;case 36289:case 36303:case 36311:case 36292:return iN}}function sN(n,e){n.uniform1fv(this.addr,e)}function oN(n,e){const t=Ua(e,this.size,2);n.uniform2fv(this.addr,t)}function aN(n,e){const t=Ua(e,this.size,3);n.uniform3fv(this.addr,t)}function lN(n,e){const t=Ua(e,this.size,4);n.uniform4fv(this.addr,t)}function uN(n,e){const t=Ua(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cN(n,e){const t=Ua(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fN(n,e){const t=Ua(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hN(n,e){n.uniform1iv(this.addr,e)}function dN(n,e){n.uniform2iv(this.addr,e)}function pN(n,e){n.uniform3iv(this.addr,e)}function mN(n,e){n.uniform4iv(this.addr,e)}function gN(n,e){n.uniform1uiv(this.addr,e)}function _N(n,e){n.uniform2uiv(this.addr,e)}function vN(n,e){n.uniform3uiv(this.addr,e)}function xN(n,e){n.uniform4uiv(this.addr,e)}function yN(n,e,t){const i=this.cache,r=e.length,o=qf(t,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||iw,o[l])}function SN(n,e,t){const i=this.cache,r=e.length,o=qf(t,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||sw,o[l])}function wN(n,e,t){const i=this.cache,r=e.length,o=qf(t,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||ow,o[l])}function MN(n,e,t){const i=this.cache,r=e.length,o=qf(t,r);sn(i,o)||(n.uniform1iv(this.addr,o),on(i,o));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||rw,o[l])}function EN(n){switch(n){case 5126:return sN;case 35664:return oN;case 35665:return aN;case 35666:return lN;case 35674:return uN;case 35675:return cN;case 35676:return fN;case 5124:case 35670:return hN;case 35667:case 35671:return dN;case 35668:case 35672:return pN;case 35669:case 35673:return mN;case 5125:return gN;case 36294:return _N;case 36295:return vN;case 36296:return xN;case 35678:case 36198:case 36298:case 36306:case 35682:return yN;case 35679:case 36299:case 36307:return SN;case 35680:case 36300:case 36308:case 36293:return wN;case 36289:case 36303:case 36311:case 36292:return MN}}class TN{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=rN(t.type)}}class bN{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=EN(t.type)}}class CN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const u=r[o];u.setValue(e,t[u.id],i)}}}const up=/(\w+)(\])?(\[|\.)?/g;function Jx(n,e){n.seq.push(e),n.map[e.id]=e}function AN(n,e,t){const i=n.name,r=i.length;for(up.lastIndex=0;;){const o=up.exec(i),l=up.lastIndex;let u=o[1];const f=o[2]==="]",h=o[3];if(f&&(u=u|0),h===void 0||h==="["&&l+2===r){Jx(t,h===void 0?new TN(u,n,e):new bN(u,n,e));break}else{let d=t.map[u];d===void 0&&(d=new CN(u),Jx(t,d)),t=d}}}class tf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);AN(o,l,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,l=t.length;o!==l;++o){const u=t[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in t&&i.push(l)}return i}}function ey(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let LN=0;function PN(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return i.join(`
`)}function RN(n){switch(n){case ho:return["Linear","( value )"];case Vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function ty(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+PN(n.getShaderSource(e),l)}else return r}function DN(n,e){const t=RN(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function IN(n,e){let t;switch(e){case eP:t="Linear";break;case tP:t="Reinhard";break;case nP:t="OptimizedCineon";break;case iP:t="ACESFilmic";break;case rP:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function NN(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sl).join(`
`)}function FN(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ON(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),l=o.name;let u=1;o.type===35674&&(u=2),o.type===35675&&(u=3),o.type===35676&&(u=4),t[l]={type:o.type,location:n.getAttribLocation(e,l),locationSize:u}}return t}function Sl(n){return n!==""}function ny(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zN=/^[ \t]*#include +<([\w\d./]+)>/gm;function _m(n){return n.replace(zN,UN)}function UN(n,e){const t=it[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _m(t)}const kN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ry(n){return n.replace(kN,BN)}function BN(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function sy(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GN(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===US?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===DL?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yl&&(e="SHADOWMAP_TYPE_VSM"),e}function WN(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ra:case Da:e="ENVMAP_TYPE_CUBE";break;case Hf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VN(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Da:e="ENVMAP_MODE_REFRACTION";break}return e}function HN(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mg:e="ENVMAP_BLENDING_MULTIPLY";break;case QL:e="ENVMAP_BLENDING_MIX";break;case JL:e="ENVMAP_BLENDING_ADD";break}return e}function XN(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function qN(n,e,t,i){const r=n.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const f=GN(t),h=WN(t),p=VN(t),d=HN(t),m=XN(t),y=t.isWebGL2?"":NN(t),w=FN(o),v=r.createProgram();let _,x,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[w].filter(Sl).join(`
`),_.length>0&&(_+=`
`),x=[y,w].filter(Sl).join(`
`),x.length>0&&(x+=`
`)):(_=[sy(t),"#define SHADER_NAME "+t.shaderName,w,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),x=[y,sy(t),"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?it.tonemapping_pars_fragment:"",t.toneMapping!==Ur?IN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.encodings_pars_fragment,DN("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sl).join(`
`)),l=_m(l),l=ny(l,t),l=iy(l,t),u=_m(u),u=ny(u,t),u=iy(u,t),l=ry(l),u=ry(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===Cx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=S+_+l,T=S+x+u,A=ey(r,35633,E),R=ey(r,35632,T);if(r.attachShader(v,A),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const F=r.getProgramInfoLog(v).trim(),V=r.getShaderInfoLog(A).trim(),ce=r.getShaderInfoLog(R).trim();let ge=!0,Q=!0;if(r.getProgramParameter(v,35714)===!1){ge=!1;const $=ty(r,A,"vertex"),ae=ty(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,35715)+`

Program Info Log: `+F+`
`+$+`
`+ae)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(V===""||ce==="")&&(Q=!1);Q&&(this.diagnostics={runnable:ge,programLog:F,vertexShader:{log:V,prefix:_},fragmentShader:{log:ce,prefix:x}})}r.deleteShader(A),r.deleteShader(R);let O;this.getUniforms=function(){return O===void 0&&(O=new tf(r,v)),O};let b;return this.getAttributes=function(){return b===void 0&&(b=ON(r,v)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=LN++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}let jN=0;class YN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $N(e),t.set(e,i)),i}}class $N{constructor(e){this.id=jN++,this.code=e,this.usedTimes=0}}function ZN(n,e,t,i,r,o,l){const u=new $S,f=new YN,h=[],p=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures;let y=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b,F,V,ce,ge){const Q=ce.fog,$=ge.geometry,ae=b.isMeshStandardMaterial?ce.environment:null,he=(b.isMeshStandardMaterial?t:e).get(b.envMap||ae),de=!!he&&he.mapping===Hf?he.image.height:null,G=w[b.type];b.precision!==null&&(y=r.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const k=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,W=k!==void 0?k.length:0;let le=0;$.morphAttributes.position!==void 0&&(le=1),$.morphAttributes.normal!==void 0&&(le=2),$.morphAttributes.color!==void 0&&(le=3);let re,_e,be,Ne;if(G){const ct=or[G];re=ct.vertexShader,_e=ct.fragmentShader}else re=b.vertexShader,_e=b.fragmentShader,f.update(b),be=f.getVertexShaderID(b),Ne=f.getFragmentShaderID(b);const J=n.getRenderTarget(),tt=b.alphaTest>0,Ue=b.clearcoat>0,ke=b.iridescence>0;return{isWebGL2:p,shaderID:G,shaderName:b.type,vertexShader:re,fragmentShader:_e,defines:b.defines,customVertexShaderID:be,customFragmentShaderID:Ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,instancing:ge.isInstancedMesh===!0,instancingColor:ge.isInstancedMesh===!0&&ge.instanceColor!==null,supportsVertexTextures:m,outputEncoding:J===null?n.outputEncoding:J.isXRRenderTarget===!0?J.texture.encoding:ho,map:!!b.map,matcap:!!b.matcap,envMap:!!he,envMapMode:he&&he.mapping,envMapCubeUVHeight:de,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===MP,tangentSpaceNormalMap:b.normalMapType===VS,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Vt,clearcoat:Ue,clearcoatMap:Ue&&!!b.clearcoatMap,clearcoatRoughnessMap:Ue&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Ue&&!!b.clearcoatNormalMap,iridescence:ke,iridescenceMap:ke&&!!b.iridescenceMap,iridescenceThicknessMap:ke&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===ya,alphaMap:!!b.alphaMap,alphaTest:tt,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!$.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!Q,useFog:b.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:d,skinning:ge.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:le,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:b.toneMapped?n.toneMapping:Ur,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_s,flipSided:b.side===Li,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function _(b){const F=[];if(b.shaderID?F.push(b.shaderID):(F.push(b.customVertexShaderID),F.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)F.push(V),F.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(x(F,b),S(F,b),F.push(n.outputEncoding)),F.push(b.customProgramCacheKey),F.join()}function x(b,F){b.push(F.precision),b.push(F.outputEncoding),b.push(F.envMapMode),b.push(F.envMapCubeUVHeight),b.push(F.combine),b.push(F.vertexUvs),b.push(F.fogExp2),b.push(F.sizeAttenuation),b.push(F.morphTargetsCount),b.push(F.morphAttributeCount),b.push(F.numDirLights),b.push(F.numPointLights),b.push(F.numSpotLights),b.push(F.numSpotLightMaps),b.push(F.numHemiLights),b.push(F.numRectAreaLights),b.push(F.numDirLightShadows),b.push(F.numPointLightShadows),b.push(F.numSpotLightShadows),b.push(F.numSpotLightShadowsWithMaps),b.push(F.shadowMapType),b.push(F.toneMapping),b.push(F.numClippingPlanes),b.push(F.numClipIntersection),b.push(F.depthPacking)}function S(b,F){u.disableAll(),F.isWebGL2&&u.enable(0),F.supportsVertexTextures&&u.enable(1),F.instancing&&u.enable(2),F.instancingColor&&u.enable(3),F.map&&u.enable(4),F.matcap&&u.enable(5),F.envMap&&u.enable(6),F.lightMap&&u.enable(7),F.aoMap&&u.enable(8),F.emissiveMap&&u.enable(9),F.bumpMap&&u.enable(10),F.normalMap&&u.enable(11),F.objectSpaceNormalMap&&u.enable(12),F.tangentSpaceNormalMap&&u.enable(13),F.clearcoat&&u.enable(14),F.clearcoatMap&&u.enable(15),F.clearcoatRoughnessMap&&u.enable(16),F.clearcoatNormalMap&&u.enable(17),F.iridescence&&u.enable(18),F.iridescenceMap&&u.enable(19),F.iridescenceThicknessMap&&u.enable(20),F.displacementMap&&u.enable(21),F.specularMap&&u.enable(22),F.roughnessMap&&u.enable(23),F.metalnessMap&&u.enable(24),F.gradientMap&&u.enable(25),F.alphaMap&&u.enable(26),F.alphaTest&&u.enable(27),F.vertexColors&&u.enable(28),F.vertexAlphas&&u.enable(29),F.vertexUvs&&u.enable(30),F.vertexTangents&&u.enable(31),F.uvsVertexOnly&&u.enable(32),b.push(u.mask),u.disableAll(),F.fog&&u.enable(0),F.useFog&&u.enable(1),F.flatShading&&u.enable(2),F.logarithmicDepthBuffer&&u.enable(3),F.skinning&&u.enable(4),F.morphTargets&&u.enable(5),F.morphNormals&&u.enable(6),F.morphColors&&u.enable(7),F.premultipliedAlpha&&u.enable(8),F.shadowMapEnabled&&u.enable(9),F.physicallyCorrectLights&&u.enable(10),F.doubleSided&&u.enable(11),F.flipSided&&u.enable(12),F.useDepthPacking&&u.enable(13),F.dithering&&u.enable(14),F.specularIntensityMap&&u.enable(15),F.specularColorMap&&u.enable(16),F.transmission&&u.enable(17),F.transmissionMap&&u.enable(18),F.thicknessMap&&u.enable(19),F.sheen&&u.enable(20),F.sheenColorMap&&u.enable(21),F.sheenRoughnessMap&&u.enable(22),F.decodeVideoTexture&&u.enable(23),F.opaque&&u.enable(24),b.push(u.mask)}function E(b){const F=w[b.type];let V;if(F){const ce=or[F];V=nu.clone(ce.uniforms)}else V=b.uniforms;return V}function T(b,F){let V;for(let ce=0,ge=h.length;ce<ge;ce++){const Q=h[ce];if(Q.cacheKey===F){V=Q,++V.usedTimes;break}}return V===void 0&&(V=new qN(n,F,b,o),h.push(V)),V}function A(b){if(--b.usedTimes===0){const F=h.indexOf(b);h[F]=h[h.length-1],h.pop(),b.destroy()}}function R(b){f.remove(b)}function O(){f.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:E,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:O}}function KN(){let n=new WeakMap;function e(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function t(o){n.delete(o)}function i(o,l,u){n.get(o)[l]=u}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function QN(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function oy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ay(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function l(d,m,y,w,v,_){let x=n[e];return x===void 0?(x={id:d.id,object:d,geometry:m,material:y,groupOrder:w,renderOrder:d.renderOrder,z:v,group:_},n[e]=x):(x.id=d.id,x.object=d,x.geometry=m,x.material=y,x.groupOrder=w,x.renderOrder=d.renderOrder,x.z=v,x.group=_),e++,x}function u(d,m,y,w,v,_){const x=l(d,m,y,w,v,_);y.transmission>0?i.push(x):y.transparent===!0?r.push(x):t.push(x)}function f(d,m,y,w,v,_){const x=l(d,m,y,w,v,_);y.transmission>0?i.unshift(x):y.transparent===!0?r.unshift(x):t.unshift(x)}function h(d,m){t.length>1&&t.sort(d||QN),i.length>1&&i.sort(m||oy),r.length>1&&r.sort(m||oy)}function p(){for(let d=e,m=n.length;d<m;d++){const y=n[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:u,unshift:f,finish:p,sort:h}}function JN(){let n=new WeakMap;function e(i,r){const o=n.get(i);let l;return o===void 0?(l=new ay,n.set(i,[l])):r>=o.length?(l=new ay,o.push(l)):l=o[r],l}function t(){n=new WeakMap}return{get:e,dispose:t}}function eF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new pt};break;case"SpotLight":t={position:new q,direction:new q,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function tF(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nF=0;function iF(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rF(n,e){const t=new eF,i=tF(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)r.probe.push(new q);const o=new q,l=new rn,u=new rn;function f(p,d){let m=0,y=0,w=0;for(let ce=0;ce<9;ce++)r.probe[ce].set(0,0,0);let v=0,_=0,x=0,S=0,E=0,T=0,A=0,R=0,O=0,b=0;p.sort(iF);const F=d!==!0?Math.PI:1;for(let ce=0,ge=p.length;ce<ge;ce++){const Q=p[ce],$=Q.color,ae=Q.intensity,he=Q.distance,de=Q.shadow&&Q.shadow.map?Q.shadow.map.texture:null;if(Q.isAmbientLight)m+=$.r*ae*F,y+=$.g*ae*F,w+=$.b*ae*F;else if(Q.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(Q.sh.coefficients[G],ae);else if(Q.isDirectionalLight){const G=t.get(Q);if(G.color.copy(Q.color).multiplyScalar(Q.intensity*F),Q.castShadow){const k=Q.shadow,W=i.get(Q);W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,r.directionalShadow[v]=W,r.directionalShadowMap[v]=de,r.directionalShadowMatrix[v]=Q.shadow.matrix,T++}r.directional[v]=G,v++}else if(Q.isSpotLight){const G=t.get(Q);G.position.setFromMatrixPosition(Q.matrixWorld),G.color.copy($).multiplyScalar(ae*F),G.distance=he,G.coneCos=Math.cos(Q.angle),G.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),G.decay=Q.decay,r.spot[x]=G;const k=Q.shadow;if(Q.map&&(r.spotLightMap[O]=Q.map,O++,k.updateMatrices(Q),Q.castShadow&&b++),r.spotLightMatrix[x]=k.matrix,Q.castShadow){const W=i.get(Q);W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,r.spotShadow[x]=W,r.spotShadowMap[x]=de,R++}x++}else if(Q.isRectAreaLight){const G=t.get(Q);G.color.copy($).multiplyScalar(ae),G.halfWidth.set(Q.width*.5,0,0),G.halfHeight.set(0,Q.height*.5,0),r.rectArea[S]=G,S++}else if(Q.isPointLight){const G=t.get(Q);if(G.color.copy(Q.color).multiplyScalar(Q.intensity*F),G.distance=Q.distance,G.decay=Q.decay,Q.castShadow){const k=Q.shadow,W=i.get(Q);W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,r.pointShadow[_]=W,r.pointShadowMap[_]=de,r.pointShadowMatrix[_]=Q.shadow.matrix,A++}r.point[_]=G,_++}else if(Q.isHemisphereLight){const G=t.get(Q);G.skyColor.copy(Q.color).multiplyScalar(ae*F),G.groundColor.copy(Q.groundColor).multiplyScalar(ae*F),r.hemi[E]=G,E++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=y,r.ambient[2]=w;const V=r.hash;(V.directionalLength!==v||V.pointLength!==_||V.spotLength!==x||V.rectAreaLength!==S||V.hemiLength!==E||V.numDirectionalShadows!==T||V.numPointShadows!==A||V.numSpotShadows!==R||V.numSpotMaps!==O)&&(r.directional.length=v,r.spot.length=x,r.rectArea.length=S,r.point.length=_,r.hemi.length=E,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=R+O-b,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=b,V.directionalLength=v,V.pointLength=_,V.spotLength=x,V.rectAreaLength=S,V.hemiLength=E,V.numDirectionalShadows=T,V.numPointShadows=A,V.numSpotShadows=R,V.numSpotMaps=O,r.version=nF++)}function h(p,d){let m=0,y=0,w=0,v=0,_=0;const x=d.matrixWorldInverse;for(let S=0,E=p.length;S<E;S++){const T=p[S];if(T.isDirectionalLight){const A=r.directional[m];A.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(x),m++}else if(T.isSpotLight){const A=r.spot[w];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(x),w++}else if(T.isRectAreaLight){const A=r.rectArea[v];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(x),u.identity(),l.copy(T.matrixWorld),l.premultiply(x),u.extractRotation(l),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),v++}else if(T.isPointLight){const A=r.point[y];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(x),y++}else if(T.isHemisphereLight){const A=r.hemi[_];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(x),_++}}}return{setup:f,setupView:h,state:r}}function ly(n,e){const t=new rF(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function l(d){i.push(d)}function u(d){r.push(d)}function f(d){t.setup(i,d)}function h(d){t.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function sF(n,e){let t=new WeakMap;function i(o,l=0){const u=t.get(o);let f;return u===void 0?(f=new ly(n,e),t.set(o,[f])):l>=u.length?(f=new ly(n,e),u.push(f)):f=u[l],f}function r(){t=new WeakMap}return{get:i,dispose:r}}class oF extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aF extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cF(n,e,t){let i=new tw;const r=new Ze,o=new Ze,l=new gn,u=new oF({depthPacking:wP}),f=new aF,h={},p=t.maxTextureSize,d={0:Li,1:Pa,2:_s},m=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:lF,fragmentShader:uF}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const w=new Zn;w.setAttribute("position",new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Zi(w,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=US,this.render=function(T,A,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;const O=n.getRenderTarget(),b=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),V=n.state;V.setBlending(bs),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);for(let ce=0,ge=T.length;ce<ge;ce++){const Q=T[ce],$=Q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ae=$.getFrameExtents();if(r.multiply(ae),o.copy($.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/ae.x),r.x=o.x*ae.x,$.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/ae.y),r.y=o.y*ae.y,$.mapSize.y=o.y)),$.map===null){const de=this.type!==yl?{minFilter:Hn,magFilter:Hn}:{};$.map=new hr(r.x,r.y,de),$.map.texture.name=Q.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const he=$.getViewportCount();for(let de=0;de<he;de++){const G=$.getViewport(de);l.set(o.x*G.x,o.y*G.y,o.x*G.z,o.y*G.w),V.viewport(l),$.updateMatrices(Q,de),i=$.getFrustum(),E(A,R,$.camera,Q,this.type)}$.isPointLightShadow!==!0&&this.type===yl&&x($,R),$.needsUpdate=!1}_.needsUpdate=!1,n.setRenderTarget(O,b,F)};function x(T,A){const R=e.update(v);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,y.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hr(r.x,r.y)),m.uniforms.shadow_pass.value=T.map.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,R,m,v,null),y.uniforms.shadow_pass.value=T.mapPass.texture,y.uniforms.resolution.value=T.mapSize,y.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,R,y,v,null)}function S(T,A,R,O,b,F){let V=null;const ce=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(ce!==void 0?V=ce:V=R.isPointLight===!0?f:u,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const ge=V.uuid,Q=A.uuid;let $=h[ge];$===void 0&&($={},h[ge]=$);let ae=$[Q];ae===void 0&&(ae=V.clone(),$[Q]=ae),V=ae}return V.visible=A.visible,V.wireframe=A.wireframe,F===yl?V.side=A.shadowSide!==null?A.shadowSide:A.side:V.side=A.shadowSide!==null?A.shadowSide:d[A.side],V.alphaMap=A.alphaMap,V.alphaTest=A.alphaTest,V.clipShadows=A.clipShadows,V.clippingPlanes=A.clippingPlanes,V.clipIntersection=A.clipIntersection,V.displacementMap=A.displacementMap,V.displacementScale=A.displacementScale,V.displacementBias=A.displacementBias,V.wireframeLinewidth=A.wireframeLinewidth,V.linewidth=A.linewidth,R.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(V.referencePosition.setFromMatrixPosition(R.matrixWorld),V.nearDistance=O,V.farDistance=b),V}function E(T,A,R,O,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===yl)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const ce=e.update(T),ge=T.material;if(Array.isArray(ge)){const Q=ce.groups;for(let $=0,ae=Q.length;$<ae;$++){const he=Q[$],de=ge[he.materialIndex];if(de&&de.visible){const G=S(T,de,O,R.near,R.far,b);n.renderBufferDirect(R,null,ce,G,T,he)}}}else if(ge.visible){const Q=S(T,ge,O,R.near,R.far,b);n.renderBufferDirect(R,null,ce,Q,T,null)}}const V=T.children;for(let ce=0,ge=V.length;ce<ge;ce++)E(V[ce],A,R,O,b)}}function fF(n,e,t){const i=t.isWebGL2;function r(){let B=!1;const Te=new gn;let xe=null;const ue=new gn(0,0,0,0);return{setMask:function(ye){xe!==ye&&!B&&(n.colorMask(ye,ye,ye,ye),xe=ye)},setLocked:function(ye){B=ye},setClear:function(ye,Ve,St,Ft,er){er===!0&&(ye*=Ft,Ve*=Ft,St*=Ft),Te.set(ye,Ve,St,Ft),ue.equals(Te)===!1&&(n.clearColor(ye,Ve,St,Ft),ue.copy(Te))},reset:function(){B=!1,xe=null,ue.set(-1,0,0,0)}}}function o(){let B=!1,Te=null,xe=null,ue=null;return{setTest:function(ye){ye?tt(2929):Ue(2929)},setMask:function(ye){Te!==ye&&!B&&(n.depthMask(ye),Te=ye)},setFunc:function(ye){if(xe!==ye){switch(ye){case XL:n.depthFunc(512);break;case qL:n.depthFunc(519);break;case jL:n.depthFunc(513);break;case cm:n.depthFunc(515);break;case YL:n.depthFunc(514);break;case $L:n.depthFunc(518);break;case ZL:n.depthFunc(516);break;case KL:n.depthFunc(517);break;default:n.depthFunc(515)}xe=ye}},setLocked:function(ye){B=ye},setClear:function(ye){ue!==ye&&(n.clearDepth(ye),ue=ye)},reset:function(){B=!1,Te=null,xe=null,ue=null}}}function l(){let B=!1,Te=null,xe=null,ue=null,ye=null,Ve=null,St=null,Ft=null,er=null;return{setTest:function(Lt){B||(Lt?tt(2960):Ue(2960))},setMask:function(Lt){Te!==Lt&&!B&&(n.stencilMask(Lt),Te=Lt)},setFunc:function(Lt,hi,Un){(xe!==Lt||ue!==hi||ye!==Un)&&(n.stencilFunc(Lt,hi,Un),xe=Lt,ue=hi,ye=Un)},setOp:function(Lt,hi,Un){(Ve!==Lt||St!==hi||Ft!==Un)&&(n.stencilOp(Lt,hi,Un),Ve=Lt,St=hi,Ft=Un)},setLocked:function(Lt){B=Lt},setClear:function(Lt){er!==Lt&&(n.clearStencil(Lt),er=Lt)},reset:function(){B=!1,Te=null,xe=null,ue=null,ye=null,Ve=null,St=null,Ft=null,er=null}}}const u=new r,f=new o,h=new l,p=new WeakMap,d=new WeakMap;let m={},y={},w=new WeakMap,v=[],_=null,x=!1,S=null,E=null,T=null,A=null,R=null,O=null,b=null,F=!1,V=null,ce=null,ge=null,Q=null,$=null;const ae=n.getParameter(35661);let he=!1,de=0;const G=n.getParameter(7938);G.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(G)[1]),he=de>=1):G.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),he=de>=2);let k=null,W={};const le=n.getParameter(3088),re=n.getParameter(2978),_e=new gn().fromArray(le),be=new gn().fromArray(re);function Ne(B,Te,xe){const ue=new Uint8Array(4),ye=n.createTexture();n.bindTexture(B,ye),n.texParameteri(B,10241,9728),n.texParameteri(B,10240,9728);for(let Ve=0;Ve<xe;Ve++)n.texImage2D(Te+Ve,0,6408,1,1,0,6408,5121,ue);return ye}const J={};J[3553]=Ne(3553,3553,1),J[34067]=Ne(34067,34069,6),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),tt(2929),f.setFunc(cm),Xt(!1),Nt(Qv),tt(2884),ht(bs);function tt(B){m[B]!==!0&&(n.enable(B),m[B]=!0)}function Ue(B){m[B]!==!1&&(n.disable(B),m[B]=!1)}function ke(B,Te){return y[B]!==Te?(n.bindFramebuffer(B,Te),y[B]=Te,i&&(B===36009&&(y[36160]=Te),B===36160&&(y[36009]=Te)),!0):!1}function Le(B,Te){let xe=v,ue=!1;if(B)if(xe=w.get(Te),xe===void 0&&(xe=[],w.set(Te,xe)),B.isWebGLMultipleRenderTargets){const ye=B.texture;if(xe.length!==ye.length||xe[0]!==36064){for(let Ve=0,St=ye.length;Ve<St;Ve++)xe[Ve]=36064+Ve;xe.length=ye.length,ue=!0}}else xe[0]!==36064&&(xe[0]=36064,ue=!0);else xe[0]!==1029&&(xe[0]=1029,ue=!0);ue&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function ct(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const qe={[Jo]:32774,[NL]:32778,[FL]:32779};if(i)qe[tx]=32775,qe[nx]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(qe[tx]=B.MIN_EXT,qe[nx]=B.MAX_EXT)}const Oe={[OL]:0,[zL]:1,[UL]:768,[kS]:770,[HL]:776,[WL]:774,[BL]:772,[kL]:769,[BS]:771,[VL]:775,[GL]:773};function ht(B,Te,xe,ue,ye,Ve,St,Ft){if(B===bs){x===!0&&(Ue(3042),x=!1);return}if(x===!1&&(tt(3042),x=!0),B!==IL){if(B!==S||Ft!==F){if((E!==Jo||R!==Jo)&&(n.blendEquation(32774),E=Jo,R=Jo),Ft)switch(B){case ya:n.blendFuncSeparate(1,771,1,771);break;case um:n.blendFunc(1,1);break;case Jv:n.blendFuncSeparate(0,769,0,1);break;case ex:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ya:n.blendFuncSeparate(770,771,1,771);break;case um:n.blendFunc(770,1);break;case Jv:n.blendFuncSeparate(0,769,0,1);break;case ex:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,A=null,O=null,b=null,S=B,F=Ft}return}ye=ye||Te,Ve=Ve||xe,St=St||ue,(Te!==E||ye!==R)&&(n.blendEquationSeparate(qe[Te],qe[ye]),E=Te,R=ye),(xe!==T||ue!==A||Ve!==O||St!==b)&&(n.blendFuncSeparate(Oe[xe],Oe[ue],Oe[Ve],Oe[St]),T=xe,A=ue,O=Ve,b=St),S=B,F=null}function It(B,Te){B.side===_s?Ue(2884):tt(2884);let xe=B.side===Li;Te&&(xe=!xe),Xt(xe),B.blending===ya&&B.transparent===!1?ht(bs):ht(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),f.setFunc(B.depthFunc),f.setTest(B.depthTest),f.setMask(B.depthWrite),u.setMask(B.colorWrite);const ue=B.stencilWrite;h.setTest(ue),ue&&(h.setMask(B.stencilWriteMask),h.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),h.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),mt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?tt(32926):Ue(32926)}function Xt(B){V!==B&&(B?n.frontFace(2304):n.frontFace(2305),V=B)}function Nt(B){B!==PL?(tt(2884),B!==ce&&(B===Qv?n.cullFace(1029):B===RL?n.cullFace(1028):n.cullFace(1032))):Ue(2884),ce=B}function Bt(B){B!==ge&&(he&&n.lineWidth(B),ge=B)}function mt(B,Te,xe){B?(tt(32823),(Q!==Te||$!==xe)&&(n.polygonOffset(Te,xe),Q=Te,$=xe)):Ue(32823)}function an(B){B?tt(3089):Ue(3089)}function At(B){B===void 0&&(B=33984+ae-1),k!==B&&(n.activeTexture(B),k=B)}function I(B,Te,xe){xe===void 0&&(k===null?xe=33984+ae-1:xe=k);let ue=W[xe];ue===void 0&&(ue={type:void 0,texture:void 0},W[xe]=ue),(ue.type!==B||ue.texture!==Te)&&(k!==xe&&(n.activeTexture(xe),k=xe),n.bindTexture(B,Te||J[B]),ue.type=B,ue.texture=Te)}function P(){const B=W[k];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(B){_e.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),_e.copy(B))}function Ce(B){be.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),be.copy(B))}function Ie(B,Te){let xe=d.get(Te);xe===void 0&&(xe=new WeakMap,d.set(Te,xe));let ue=xe.get(B);ue===void 0&&(ue=n.getUniformBlockIndex(Te,B.name),xe.set(B,ue))}function He(B,Te){const ue=d.get(Te).get(B);p.get(B)!==ue&&(n.uniformBlockBinding(Te,ue,B.__bindingPointIndex),p.set(B,ue))}function ot(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},k=null,W={},y={},w=new WeakMap,v=[],_=null,x=!1,S=null,E=null,T=null,A=null,R=null,O=null,b=null,F=!1,V=null,ce=null,ge=null,Q=null,$=null,_e.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:tt,disable:Ue,bindFramebuffer:ke,drawBuffers:Le,useProgram:ct,setBlending:ht,setMaterial:It,setFlipSided:Xt,setCullFace:Nt,setLineWidth:Bt,setPolygonOffset:mt,setScissorTest:an,activeTexture:At,bindTexture:I,unbindTexture:P,compressedTexImage2D:ee,texImage2D:Y,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:He,texStorage2D:Fe,texStorage3D:z,texSubImage2D:pe,texSubImage3D:ve,compressedTexSubImage2D:we,scissor:Re,viewport:Ce,reset:ot}}function hF(n,e,t,i,r,o,l){const u=r.isWebGL2,f=r.maxTextures,h=r.maxCubemapSize,p=r.maxTextureSize,d=r.maxSamples,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,P){return x?new OffscreenCanvas(I,P):tu("canvas")}function E(I,P,ee,pe){let ve=1;if((I.width>pe||I.height>pe)&&(ve=pe/Math.max(I.width,I.height)),ve<1||P===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const we=P?gm:Math.floor,Fe=we(ve*I.width),z=we(ve*I.height);v===void 0&&(v=S(Fe,z));const Y=ee?S(Fe,z):v;return Y.width=Fe,Y.height=z,Y.getContext("2d").drawImage(I,0,0,Fe,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Fe+"x"+z+")."),Y}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function T(I){return Lx(I.width)&&Lx(I.height)}function A(I){return u?!1:I.wrapS!==$i||I.wrapT!==$i||I.minFilter!==Hn&&I.minFilter!==Ti}function R(I,P){return I.generateMipmaps&&P&&I.minFilter!==Hn&&I.minFilter!==Ti}function O(I){n.generateMipmap(I)}function b(I,P,ee,pe,ve=!1){if(u===!1)return P;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let we=P;return P===6403&&(ee===5126&&(we=33326),ee===5131&&(we=33325),ee===5121&&(we=33321)),P===33319&&(ee===5126&&(we=33328),ee===5131&&(we=33327),ee===5121&&(we=33323)),P===6408&&(ee===5126&&(we=34836),ee===5131&&(we=34842),ee===5121&&(we=pe===Vt&&ve===!1?35907:32856),ee===32819&&(we=32854),ee===32820&&(we=32855)),(we===33325||we===33326||we===33327||we===33328||we===34842||we===34836)&&e.get("EXT_color_buffer_float"),we}function F(I,P,ee){return R(I,ee)===!0||I.isFramebufferTexture&&I.minFilter!==Hn&&I.minFilter!==Ti?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function V(I){return I===Hn||I===ix||I===rx?9728:9729}function ce(I){const P=I.target;P.removeEventListener("dispose",ce),Q(P),P.isVideoTexture&&w.delete(P)}function ge(I){const P=I.target;P.removeEventListener("dispose",ge),ae(P)}function Q(I){const P=i.get(I);if(P.__webglInit===void 0)return;const ee=I.source,pe=_.get(ee);if(pe){const ve=pe[P.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&$(I),Object.keys(pe).length===0&&_.delete(ee)}i.remove(I)}function $(I){const P=i.get(I);n.deleteTexture(P.__webglTexture);const ee=I.source,pe=_.get(ee);delete pe[P.__cacheKey],l.memory.textures--}function ae(I){const P=I.texture,ee=i.get(I),pe=i.get(P);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),l.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++)n.deleteFramebuffer(ee.__webglFramebuffer[ve]),ee.__webglDepthbuffer&&n.deleteRenderbuffer(ee.__webglDepthbuffer[ve]);else{if(n.deleteFramebuffer(ee.__webglFramebuffer),ee.__webglDepthbuffer&&n.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&n.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let ve=0;ve<ee.__webglColorRenderbuffer.length;ve++)ee.__webglColorRenderbuffer[ve]&&n.deleteRenderbuffer(ee.__webglColorRenderbuffer[ve]);ee.__webglDepthRenderbuffer&&n.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ve=0,we=P.length;ve<we;ve++){const Fe=i.get(P[ve]);Fe.__webglTexture&&(n.deleteTexture(Fe.__webglTexture),l.memory.textures--),i.remove(P[ve])}i.remove(P),i.remove(I)}let he=0;function de(){he=0}function G(){const I=he;return I>=f&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+f),he+=1,I}function k(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.encoding),P.join()}function W(I,P){const ee=i.get(I);if(I.isVideoTexture&&an(I),I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){const pe=I.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(ee,I,P);return}}t.bindTexture(3553,ee.__webglTexture,33984+P)}function le(I,P){const ee=i.get(I);if(I.version>0&&ee.__version!==I.version){Ue(ee,I,P);return}t.bindTexture(35866,ee.__webglTexture,33984+P)}function re(I,P){const ee=i.get(I);if(I.version>0&&ee.__version!==I.version){Ue(ee,I,P);return}t.bindTexture(32879,ee.__webglTexture,33984+P)}function _e(I,P){const ee=i.get(I);if(I.version>0&&ee.__version!==I.version){ke(ee,I,P);return}t.bindTexture(34067,ee.__webglTexture,33984+P)}const be={[dm]:10497,[$i]:33071,[pm]:33648},Ne={[Hn]:9728,[ix]:9984,[rx]:9986,[Ti]:9729,[sP]:9985,[Xf]:9987};function J(I,P,ee){if(ee?(n.texParameteri(I,10242,be[P.wrapS]),n.texParameteri(I,10243,be[P.wrapT]),(I===32879||I===35866)&&n.texParameteri(I,32882,be[P.wrapR]),n.texParameteri(I,10240,Ne[P.magFilter]),n.texParameteri(I,10241,Ne[P.minFilter])):(n.texParameteri(I,10242,33071),n.texParameteri(I,10243,33071),(I===32879||I===35866)&&n.texParameteri(I,32882,33071),(P.wrapS!==$i||P.wrapT!==$i)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,10240,V(P.magFilter)),n.texParameteri(I,10241,V(P.minFilter)),P.minFilter!==Hn&&P.minFilter!==Ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(P.type===eo&&e.has("OES_texture_float_linear")===!1||u===!1&&P.type===eu&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||i.get(P).__currentAnisotropy)&&(n.texParameterf(I,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy)}}function tt(I,P){let ee=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",ce));const pe=P.source;let ve=_.get(pe);ve===void 0&&(ve={},_.set(pe,ve));const we=k(P);if(we!==I.__cacheKey){ve[we]===void 0&&(ve[we]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,ee=!0),ve[we].usedTimes++;const Fe=ve[I.__cacheKey];Fe!==void 0&&(ve[I.__cacheKey].usedTimes--,Fe.usedTimes===0&&$(P)),I.__cacheKey=we,I.__webglTexture=ve[we].texture}return ee}function Ue(I,P,ee){let pe=3553;P.isDataArrayTexture&&(pe=35866),P.isData3DTexture&&(pe=32879);const ve=tt(I,P),we=P.source;t.bindTexture(pe,I.__webglTexture,33984+ee);const Fe=i.get(we);if(we.version!==Fe.__version||ve===!0){t.activeTexture(33984+ee),n.pixelStorei(37440,P.flipY),n.pixelStorei(37441,P.premultiplyAlpha),n.pixelStorei(3317,P.unpackAlignment),n.pixelStorei(37443,0);const z=A(P)&&T(P.image)===!1;let Y=E(P.image,z,!1,p);Y=At(P,Y);const Ee=T(Y)||u,Re=o.convert(P.format,P.encoding);let Ce=o.convert(P.type),Ie=b(P.internalFormat,Re,Ce,P.encoding,P.isVideoTexture);J(pe,P,Ee);let He;const ot=P.mipmaps,B=u&&P.isVideoTexture!==!0,Te=Fe.__version===void 0||ve===!0,xe=F(P,Y,Ee);if(P.isDepthTexture)Ie=6402,u?P.type===eo?Ie=36012:P.type===Js?Ie=33190:P.type===Sa?Ie=35056:Ie=33189:P.type===eo&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===ro&&Ie===6402&&P.type!==WS&&P.type!==Js&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Js,Ce=o.convert(P.type)),P.format===Ia&&Ie===6402&&(Ie=34041,P.type!==Sa&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Sa,Ce=o.convert(P.type))),Te&&(B?t.texStorage2D(3553,1,Ie,Y.width,Y.height):t.texImage2D(3553,0,Ie,Y.width,Y.height,0,Re,Ce,null));else if(P.isDataTexture)if(ot.length>0&&Ee){B&&Te&&t.texStorage2D(3553,xe,Ie,ot[0].width,ot[0].height);for(let ue=0,ye=ot.length;ue<ye;ue++)He=ot[ue],B?t.texSubImage2D(3553,ue,0,0,He.width,He.height,Re,Ce,He.data):t.texImage2D(3553,ue,Ie,He.width,He.height,0,Re,Ce,He.data);P.generateMipmaps=!1}else B?(Te&&t.texStorage2D(3553,xe,Ie,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,Re,Ce,Y.data)):t.texImage2D(3553,0,Ie,Y.width,Y.height,0,Re,Ce,Y.data);else if(P.isCompressedTexture){B&&Te&&t.texStorage2D(3553,xe,Ie,ot[0].width,ot[0].height);for(let ue=0,ye=ot.length;ue<ye;ue++)He=ot[ue],P.format!==lr?Re!==null?B?t.compressedTexSubImage2D(3553,ue,0,0,He.width,He.height,Re,He.data):t.compressedTexImage2D(3553,ue,Ie,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?t.texSubImage2D(3553,ue,0,0,He.width,He.height,Re,Ce,He.data):t.texImage2D(3553,ue,Ie,He.width,He.height,0,Re,Ce,He.data)}else if(P.isDataArrayTexture)B?(Te&&t.texStorage3D(35866,xe,Ie,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,Re,Ce,Y.data)):t.texImage3D(35866,0,Ie,Y.width,Y.height,Y.depth,0,Re,Ce,Y.data);else if(P.isData3DTexture)B?(Te&&t.texStorage3D(32879,xe,Ie,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,Re,Ce,Y.data)):t.texImage3D(32879,0,Ie,Y.width,Y.height,Y.depth,0,Re,Ce,Y.data);else if(P.isFramebufferTexture){if(Te)if(B)t.texStorage2D(3553,xe,Ie,Y.width,Y.height);else{let ue=Y.width,ye=Y.height;for(let Ve=0;Ve<xe;Ve++)t.texImage2D(3553,Ve,Ie,ue,ye,0,Re,Ce,null),ue>>=1,ye>>=1}}else if(ot.length>0&&Ee){B&&Te&&t.texStorage2D(3553,xe,Ie,ot[0].width,ot[0].height);for(let ue=0,ye=ot.length;ue<ye;ue++)He=ot[ue],B?t.texSubImage2D(3553,ue,0,0,Re,Ce,He):t.texImage2D(3553,ue,Ie,Re,Ce,He);P.generateMipmaps=!1}else B?(Te&&t.texStorage2D(3553,xe,Ie,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Re,Ce,Y)):t.texImage2D(3553,0,Ie,Re,Ce,Y);R(P,Ee)&&O(pe),Fe.__version=we.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function ke(I,P,ee){if(P.image.length!==6)return;const pe=tt(I,P),ve=P.source;t.bindTexture(34067,I.__webglTexture,33984+ee);const we=i.get(ve);if(ve.version!==we.__version||pe===!0){t.activeTexture(33984+ee),n.pixelStorei(37440,P.flipY),n.pixelStorei(37441,P.premultiplyAlpha),n.pixelStorei(3317,P.unpackAlignment),n.pixelStorei(37443,0);const Fe=P.isCompressedTexture||P.image[0].isCompressedTexture,z=P.image[0]&&P.image[0].isDataTexture,Y=[];for(let ue=0;ue<6;ue++)!Fe&&!z?Y[ue]=E(P.image[ue],!1,!0,h):Y[ue]=z?P.image[ue].image:P.image[ue],Y[ue]=At(P,Y[ue]);const Ee=Y[0],Re=T(Ee)||u,Ce=o.convert(P.format,P.encoding),Ie=o.convert(P.type),He=b(P.internalFormat,Ce,Ie,P.encoding),ot=u&&P.isVideoTexture!==!0,B=we.__version===void 0||pe===!0;let Te=F(P,Ee,Re);J(34067,P,Re);let xe;if(Fe){ot&&B&&t.texStorage2D(34067,Te,He,Ee.width,Ee.height);for(let ue=0;ue<6;ue++){xe=Y[ue].mipmaps;for(let ye=0;ye<xe.length;ye++){const Ve=xe[ye];P.format!==lr?Ce!==null?ot?t.compressedTexSubImage2D(34069+ue,ye,0,0,Ve.width,Ve.height,Ce,Ve.data):t.compressedTexImage2D(34069+ue,ye,He,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?t.texSubImage2D(34069+ue,ye,0,0,Ve.width,Ve.height,Ce,Ie,Ve.data):t.texImage2D(34069+ue,ye,He,Ve.width,Ve.height,0,Ce,Ie,Ve.data)}}}else{xe=P.mipmaps,ot&&B&&(xe.length>0&&Te++,t.texStorage2D(34067,Te,He,Y[0].width,Y[0].height));for(let ue=0;ue<6;ue++)if(z){ot?t.texSubImage2D(34069+ue,0,0,0,Y[ue].width,Y[ue].height,Ce,Ie,Y[ue].data):t.texImage2D(34069+ue,0,He,Y[ue].width,Y[ue].height,0,Ce,Ie,Y[ue].data);for(let ye=0;ye<xe.length;ye++){const St=xe[ye].image[ue].image;ot?t.texSubImage2D(34069+ue,ye+1,0,0,St.width,St.height,Ce,Ie,St.data):t.texImage2D(34069+ue,ye+1,He,St.width,St.height,0,Ce,Ie,St.data)}}else{ot?t.texSubImage2D(34069+ue,0,0,0,Ce,Ie,Y[ue]):t.texImage2D(34069+ue,0,He,Ce,Ie,Y[ue]);for(let ye=0;ye<xe.length;ye++){const Ve=xe[ye];ot?t.texSubImage2D(34069+ue,ye+1,0,0,Ce,Ie,Ve.image[ue]):t.texImage2D(34069+ue,ye+1,He,Ce,Ie,Ve.image[ue])}}}R(P,Re)&&O(34067),we.__version=ve.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function Le(I,P,ee,pe,ve){const we=o.convert(ee.format,ee.encoding),Fe=o.convert(ee.type),z=b(ee.internalFormat,we,Fe,ee.encoding);i.get(P).__hasExternalTextures||(ve===32879||ve===35866?t.texImage3D(ve,0,z,P.width,P.height,P.depth,0,we,Fe,null):t.texImage2D(ve,0,z,P.width,P.height,0,we,Fe,null)),t.bindFramebuffer(36160,I),mt(P)?m.framebufferTexture2DMultisampleEXT(36160,pe,ve,i.get(ee).__webglTexture,0,Bt(P)):n.framebufferTexture2D(36160,pe,ve,i.get(ee).__webglTexture,0),t.bindFramebuffer(36160,null)}function ct(I,P,ee){if(n.bindRenderbuffer(36161,I),P.depthBuffer&&!P.stencilBuffer){let pe=33189;if(ee||mt(P)){const ve=P.depthTexture;ve&&ve.isDepthTexture&&(ve.type===eo?pe=36012:ve.type===Js&&(pe=33190));const we=Bt(P);mt(P)?m.renderbufferStorageMultisampleEXT(36161,we,pe,P.width,P.height):n.renderbufferStorageMultisample(36161,we,pe,P.width,P.height)}else n.renderbufferStorage(36161,pe,P.width,P.height);n.framebufferRenderbuffer(36160,36096,36161,I)}else if(P.depthBuffer&&P.stencilBuffer){const pe=Bt(P);ee&&mt(P)===!1?n.renderbufferStorageMultisample(36161,pe,35056,P.width,P.height):mt(P)?m.renderbufferStorageMultisampleEXT(36161,pe,35056,P.width,P.height):n.renderbufferStorage(36161,34041,P.width,P.height),n.framebufferRenderbuffer(36160,33306,36161,I)}else{const pe=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ve=0;ve<pe.length;ve++){const we=pe[ve],Fe=o.convert(we.format,we.encoding),z=o.convert(we.type),Y=b(we.internalFormat,Fe,z,we.encoding),Ee=Bt(P);ee&&mt(P)===!1?n.renderbufferStorageMultisample(36161,Ee,Y,P.width,P.height):mt(P)?m.renderbufferStorageMultisampleEXT(36161,Ee,Y,P.width,P.height):n.renderbufferStorage(36161,Y,P.width,P.height)}}n.bindRenderbuffer(36161,null)}function qe(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),W(P.depthTexture,0);const pe=i.get(P.depthTexture).__webglTexture,ve=Bt(P);if(P.depthTexture.format===ro)mt(P)?m.framebufferTexture2DMultisampleEXT(36160,36096,3553,pe,0,ve):n.framebufferTexture2D(36160,36096,3553,pe,0);else if(P.depthTexture.format===Ia)mt(P)?m.framebufferTexture2DMultisampleEXT(36160,33306,3553,pe,0,ve):n.framebufferTexture2D(36160,33306,3553,pe,0);else throw new Error("Unknown depthTexture format")}function Oe(I){const P=i.get(I),ee=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");qe(P.__webglFramebuffer,I)}else if(ee){P.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(36160,P.__webglFramebuffer[pe]),P.__webglDepthbuffer[pe]=n.createRenderbuffer(),ct(P.__webglDepthbuffer[pe],I,!1)}else t.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=n.createRenderbuffer(),ct(P.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function ht(I,P,ee){const pe=i.get(I);P!==void 0&&Le(pe.__webglFramebuffer,I,I.texture,36064,3553),ee!==void 0&&Oe(I)}function It(I){const P=I.texture,ee=i.get(I),pe=i.get(P);I.addEventListener("dispose",ge),I.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=P.version,l.memory.textures++);const ve=I.isWebGLCubeRenderTarget===!0,we=I.isWebGLMultipleRenderTargets===!0,Fe=T(I)||u;if(ve){ee.__webglFramebuffer=[];for(let z=0;z<6;z++)ee.__webglFramebuffer[z]=n.createFramebuffer()}else{if(ee.__webglFramebuffer=n.createFramebuffer(),we)if(r.drawBuffers){const z=I.texture;for(let Y=0,Ee=z.length;Y<Ee;Y++){const Re=i.get(z[Y]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&I.samples>0&&mt(I)===!1){const z=we?P:[P];ee.__webglMultisampledFramebuffer=n.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ee.__webglMultisampledFramebuffer);for(let Y=0;Y<z.length;Y++){const Ee=z[Y];ee.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(36161,ee.__webglColorRenderbuffer[Y]);const Re=o.convert(Ee.format,Ee.encoding),Ce=o.convert(Ee.type),Ie=b(Ee.internalFormat,Re,Ce,Ee.encoding,I.isXRRenderTarget===!0),He=Bt(I);n.renderbufferStorageMultisample(36161,He,Ie,I.width,I.height),n.framebufferRenderbuffer(36160,36064+Y,36161,ee.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(36161,null),I.depthBuffer&&(ee.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(ee.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}}if(ve){t.bindTexture(34067,pe.__webglTexture),J(34067,P,Fe);for(let z=0;z<6;z++)Le(ee.__webglFramebuffer[z],I,P,36064,34069+z);R(P,Fe)&&O(34067),t.unbindTexture()}else if(we){const z=I.texture;for(let Y=0,Ee=z.length;Y<Ee;Y++){const Re=z[Y],Ce=i.get(Re);t.bindTexture(3553,Ce.__webglTexture),J(3553,Re,Fe),Le(ee.__webglFramebuffer,I,Re,36064+Y,3553),R(Re,Fe)&&O(3553)}t.unbindTexture()}else{let z=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(u?z=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,pe.__webglTexture),J(z,P,Fe),Le(ee.__webglFramebuffer,I,P,36064,z),R(P,Fe)&&O(z),t.unbindTexture()}I.depthBuffer&&Oe(I)}function Xt(I){const P=T(I)||u,ee=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let pe=0,ve=ee.length;pe<ve;pe++){const we=ee[pe];if(R(we,P)){const Fe=I.isWebGLCubeRenderTarget?34067:3553,z=i.get(we).__webglTexture;t.bindTexture(Fe,z),O(Fe),t.unbindTexture()}}}function Nt(I){if(u&&I.samples>0&&mt(I)===!1){const P=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],ee=I.width,pe=I.height;let ve=16384;const we=[],Fe=I.stencilBuffer?33306:36096,z=i.get(I),Y=I.isWebGLMultipleRenderTargets===!0;if(Y)for(let Ee=0;Ee<P.length;Ee++)t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,z.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,z.__webglFramebuffer);for(let Ee=0;Ee<P.length;Ee++){we.push(36064+Ee),I.depthBuffer&&we.push(Fe);const Re=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(Re===!1&&(I.depthBuffer&&(ve|=256),I.stencilBuffer&&(ve|=1024)),Y&&n.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[Ee]),Re===!0&&(n.invalidateFramebuffer(36008,[Fe]),n.invalidateFramebuffer(36009,[Fe])),Y){const Ce=i.get(P[Ee]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ce,0)}n.blitFramebuffer(0,0,ee,pe,0,0,ee,pe,ve,9728),y&&n.invalidateFramebuffer(36008,we)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let Ee=0;Ee<P.length;Ee++){t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ee,36161,z.__webglColorRenderbuffer[Ee]);const Re=i.get(P[Ee]).__webglTexture;t.bindFramebuffer(36160,z.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ee,3553,Re,0)}t.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function Bt(I){return Math.min(d,I.samples)}function mt(I){const P=i.get(I);return u&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function an(I){const P=l.render.frame;w.get(I)!==P&&(w.set(I,P),I.update())}function At(I,P){const ee=I.encoding,pe=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===mm||ee!==ho&&(ee===Vt?u===!1?e.has("EXT_sRGB")===!0&&pe===lr?(I.format=mm,I.minFilter=Ti,I.generateMipmaps=!1):P=qS.sRGBToLinear(P):(pe!==lr||ve!==fo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ee)),P}this.allocateTextureUnit=G,this.resetTextureUnits=de,this.setTexture2D=W,this.setTexture2DArray=le,this.setTexture3D=re,this.setTextureCube=_e,this.rebindTextures=ht,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=mt}function dF(n,e,t){const i=t.isWebGL2;function r(o,l=null){let u;if(o===fo)return 5121;if(o===uP)return 32819;if(o===cP)return 32820;if(o===oP)return 5120;if(o===aP)return 5122;if(o===WS)return 5123;if(o===lP)return 5124;if(o===Js)return 5125;if(o===eo)return 5126;if(o===eu)return i?5131:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(o===fP)return 6406;if(o===lr)return 6408;if(o===dP)return 6409;if(o===pP)return 6410;if(o===ro)return 6402;if(o===Ia)return 34041;if(o===mP)return 6403;if(o===hP)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(o===mm)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(o===gP)return 36244;if(o===_P)return 33319;if(o===vP)return 33320;if(o===xP)return 36249;if(o===Id||o===Nd||o===Fd||o===Od)if(l===Vt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(o===Id)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Nd)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Fd)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Od)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(o===Id)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Nd)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Fd)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Od)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===sx||o===ox||o===ax||o===lx)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(o===sx)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===ox)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===ax)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===lx)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===yP)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ux||o===cx)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(o===ux)return l===Vt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(o===cx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===fx||o===hx||o===dx||o===px||o===mx||o===gx||o===_x||o===vx||o===xx||o===yx||o===Sx||o===wx||o===Mx||o===Ex)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(o===fx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===hx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===dx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===px)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===mx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===gx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===_x)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===vx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===xx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===yx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Sx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===wx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Mx)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Ex)return l===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Tx)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(o===Tx)return l===Vt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return o===Sa?i?34042:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class pF extends Yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wl extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mF={type:"move"};class cp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,l=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i);if(h.joints[v.jointName]===void 0){const S=new wl;S.matrixAutoUpdate=!1,S.visible=!1,h.joints[v.jointName]=S,h.add(S)}const x=h.joints[v.jointName];_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=_.radius),x.visible=_!==null}const p=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],m=p.position.distanceTo(d.position),y=.02,w=.005;h.inputState.pinching&&m>y+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=y-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(mF)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),this}}class gF extends Di{constructor(e,t,i,r,o,l,u,f,h,p){if(p=p!==void 0?p:ro,p!==ro&&p!==Ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===ro&&(i=Js),i===void 0&&p===Ia&&(i=Sa),super(null,r,o,l,u,f,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Hn,this.minFilter=f!==void 0?f:Hn,this.flipY=!1,this.generateMipmaps=!1}}class _F extends _o{constructor(e,t){super();const i=this;let r=null,o=1,l=null,u="local-floor",f=null,h=null,p=null,d=null,m=null,y=null;const w=t.getContextAttributes();let v=null,_=null;const x=[],S=[],E=new Yi;E.layers.enable(1),E.viewport=new gn;const T=new Yi;T.layers.enable(2),T.viewport=new gn;const A=[E,T],R=new pF;R.layers.enable(1),R.layers.enable(2);let O=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let W=x[k];return W===void 0&&(W=new cp,x[k]=W),W.getTargetRaySpace()},this.getControllerGrip=function(k){let W=x[k];return W===void 0&&(W=new cp,x[k]=W),W.getGripSpace()},this.getHand=function(k){let W=x[k];return W===void 0&&(W=new cp,x[k]=W),W.getHandSpace()};function F(k){const W=S.indexOf(k.inputSource);if(W===-1)return;const le=x[W];le!==void 0&&le.dispatchEvent({type:k.type,data:k.inputSource})}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",ce);for(let k=0;k<x.length;k++){const W=S[k];W!==null&&(S[k]=null,x[k].disconnect(W))}O=null,b=null,e.setRenderTarget(v),m=null,d=null,p=null,r=null,_=null,G.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){u=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(k){f=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",ce),w.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?w.antialias:!0,alpha:w.alpha,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:m}),_=new hr(m.framebufferWidth,m.framebufferHeight,{format:lr,type:fo,encoding:e.outputEncoding,stencilBuffer:w.stencil})}else{let W=null,le=null,re=null;w.depth&&(re=w.stencil?35056:33190,W=w.stencil?Ia:ro,le=w.stencil?Sa:Js);const _e={colorFormat:32856,depthFormat:re,scaleFactor:o};p=new XRWebGLBinding(r,t),d=p.createProjectionLayer(_e),r.updateRenderState({layers:[d]}),_=new hr(d.textureWidth,d.textureHeight,{format:lr,type:fo,depthTexture:new gF(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:w.stencil,encoding:e.outputEncoding,samples:w.antialias?4:0});const be=e.properties.get(_);be.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(1),f=null,l=await r.requestReferenceSpace(u),G.setContext(r),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function ce(k){for(let W=0;W<k.removed.length;W++){const le=k.removed[W],re=S.indexOf(le);re>=0&&(S[re]=null,x[re].dispatchEvent({type:"disconnected",data:le}))}for(let W=0;W<k.added.length;W++){const le=k.added[W];let re=S.indexOf(le);if(re===-1){for(let be=0;be<x.length;be++)if(be>=S.length){S.push(le),re=be;break}else if(S[be]===null){S[be]=le,re=be;break}if(re===-1)break}const _e=x[re];_e&&_e.dispatchEvent({type:"connected",data:le})}}const ge=new q,Q=new q;function $(k,W,le){ge.setFromMatrixPosition(W.matrixWorld),Q.setFromMatrixPosition(le.matrixWorld);const re=ge.distanceTo(Q),_e=W.projectionMatrix.elements,be=le.projectionMatrix.elements,Ne=_e[14]/(_e[10]-1),J=_e[14]/(_e[10]+1),tt=(_e[9]+1)/_e[5],Ue=(_e[9]-1)/_e[5],ke=(_e[8]-1)/_e[0],Le=(be[8]+1)/be[0],ct=Ne*ke,qe=Ne*Le,Oe=re/(-ke+Le),ht=Oe*-ke;W.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ht),k.translateZ(Oe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const It=Ne+Oe,Xt=J+Oe,Nt=ct-ht,Bt=qe+(re-ht),mt=tt*J/Xt*It,an=Ue*J/Xt*It;k.projectionMatrix.makePerspective(Nt,Bt,mt,an,It,Xt)}function ae(k,W){W===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(W.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;R.near=T.near=E.near=k.near,R.far=T.far=E.far=k.far,(O!==R.near||b!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,b=R.far);const W=k.parent,le=R.cameras;ae(R,W);for(let _e=0;_e<le.length;_e++)ae(le[_e],W);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),k.matrix.copy(R.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const re=k.children;for(let _e=0,be=re.length;_e<be;_e++)re[_e].updateMatrixWorld(!0);le.length===2?$(R,E,T):R.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(m!==null)return m.fixedFoveation},this.setFoveation=function(k){d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let he=null;function de(k,W){if(h=W.getViewerPose(f||l),y=W,h!==null){const le=h.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let re=!1;le.length!==R.cameras.length&&(R.cameras.length=0,re=!0);for(let _e=0;_e<le.length;_e++){const be=le[_e];let Ne=null;if(m!==null)Ne=m.getViewport(be);else{const tt=p.getViewSubImage(d,be);Ne=tt.viewport,_e===0&&(e.setRenderTargetTextures(_,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(_))}let J=A[_e];J===void 0&&(J=new Yi,J.layers.enable(_e),J.viewport=new gn,A[_e]=J),J.matrix.fromArray(be.transform.matrix),J.projectionMatrix.fromArray(be.projectionMatrix),J.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),_e===0&&R.matrix.copy(J.matrix),re===!0&&R.cameras.push(J)}}for(let le=0;le<x.length;le++){const re=S[le],_e=x[le];re!==null&&_e!==void 0&&_e.update(re,W,f||l)}he&&he(k,W),y=null}const G=new nw;G.setAnimationLoop(de),this.setAnimationLoop=function(k){he=k},this.dispose=function(){}}}function vF(n,e){function t(v,_){v.fogColor.value.copy(_.color),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function i(v,_,x,S,E){_.isMeshBasicMaterial||_.isMeshLambertMaterial?r(v,_):_.isMeshToonMaterial?(r(v,_),p(v,_)):_.isMeshPhongMaterial?(r(v,_),h(v,_)):_.isMeshStandardMaterial?(r(v,_),d(v,_),_.isMeshPhysicalMaterial&&m(v,_,E)):_.isMeshMatcapMaterial?(r(v,_),y(v,_)):_.isMeshDepthMaterial?r(v,_):_.isMeshDistanceMaterial?(r(v,_),w(v,_)):_.isMeshNormalMaterial?r(v,_):_.isLineBasicMaterial?(o(v,_),_.isLineDashedMaterial&&l(v,_)):_.isPointsMaterial?u(v,_,x,S):_.isSpriteMaterial?f(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.bumpMap&&(v.bumpMap.value=_.bumpMap,v.bumpScale.value=_.bumpScale,_.side===Li&&(v.bumpScale.value*=-1)),_.displacementMap&&(v.displacementMap.value=_.displacementMap,v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap),_.normalMap&&(v.normalMap.value=_.normalMap,v.normalScale.value.copy(_.normalScale),_.side===Li&&v.normalScale.value.negate()),_.specularMap&&(v.specularMap.value=_.specularMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const x=e.get(_).envMap;if(x&&(v.envMap.value=x,v.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const T=n.physicallyCorrectLights!==!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*T}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity);let S;_.map?S=_.map:_.specularMap?S=_.specularMap:_.displacementMap?S=_.displacementMap:_.normalMap?S=_.normalMap:_.bumpMap?S=_.bumpMap:_.roughnessMap?S=_.roughnessMap:_.metalnessMap?S=_.metalnessMap:_.alphaMap?S=_.alphaMap:_.emissiveMap?S=_.emissiveMap:_.clearcoatMap?S=_.clearcoatMap:_.clearcoatNormalMap?S=_.clearcoatNormalMap:_.clearcoatRoughnessMap?S=_.clearcoatRoughnessMap:_.iridescenceMap?S=_.iridescenceMap:_.iridescenceThicknessMap?S=_.iridescenceThicknessMap:_.specularIntensityMap?S=_.specularIntensityMap:_.specularColorMap?S=_.specularColorMap:_.transmissionMap?S=_.transmissionMap:_.thicknessMap?S=_.thicknessMap:_.sheenColorMap?S=_.sheenColorMap:_.sheenRoughnessMap&&(S=_.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),v.uvTransform.value.copy(S.matrix));let E;_.aoMap?E=_.aoMap:_.lightMap&&(E=_.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),v.uv2Transform.value.copy(E.matrix))}function o(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity}function l(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function u(v,_,x,S){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*x,v.scale.value=S*.5,_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);let E;_.map?E=_.map:_.alphaMap&&(E=_.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),v.uvTransform.value.copy(E.matrix))}function f(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);let x;_.map?x=_.map:_.alphaMap&&(x=_.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),v.uvTransform.value.copy(x.matrix))}function h(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function p(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function d(v,_){v.roughness.value=_.roughness,v.metalness.value=_.metalness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function m(v,_,x){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),v.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===Li&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=x.texture,v.transmissionSamplerSize.value.set(x.width,x.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap)}function y(v,_){_.matcap&&(v.matcap.value=_.matcap)}function w(v,_){v.referencePosition.value.copy(_.referencePosition),v.nearDistance.value=_.nearDistance,v.farDistance.value=_.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function xF(n,e,t,i){let r={},o={},l=[];const u=t.isWebGL2?n.getParameter(35375):0;function f(S,E){const T=E.program;i.uniformBlockBinding(S,T)}function h(S,E){let T=r[S.id];T===void 0&&(w(S),T=p(S),r[S.id]=T,S.addEventListener("dispose",_));const A=E.program;i.updateUBOMapping(S,A);const R=e.render.frame;o[S.id]!==R&&(m(S),o[S.id]=R)}function p(S){const E=d();S.__bindingPointIndex=E;const T=n.createBuffer(),A=S.__size,R=S.usage;return n.bindBuffer(35345,T),n.bufferData(35345,A,R),n.bindBuffer(35345,null),n.bindBufferBase(35345,E,T),T}function d(){for(let S=0;S<u;S++)if(l.indexOf(S)===-1)return l.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(S){const E=r[S.id],T=S.uniforms,A=S.__cache;n.bindBuffer(35345,E);for(let R=0,O=T.length;R<O;R++){const b=T[R];if(y(b,R,A)===!0){const F=b.value,V=b.__offset;typeof F=="number"?(b.__data[0]=F,n.bufferSubData(35345,V,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):F.toArray(b.__data),n.bufferSubData(35345,V,b.__data))}}n.bindBuffer(35345,null)}function y(S,E,T){const A=S.value;if(T[E]===void 0)return typeof A=="number"?T[E]=A:T[E]=A.clone(),!0;if(typeof A=="number"){if(T[E]!==A)return T[E]=A,!0}else{const R=T[E];if(R.equals(A)===!1)return R.copy(A),!0}return!1}function w(S){const E=S.uniforms;let T=0;const A=16;let R=0;for(let O=0,b=E.length;O<b;O++){const F=E[O],V=v(F);if(F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,O>0){R=T%A;const ce=A-R;R!==0&&ce-V.boundary<0&&(T+=A-R,F.__offset=T)}T+=V.storage}return R=T%A,R>0&&(T+=A-R),S.__size=T,S.__cache={},this}function v(S){const E=S.value,T={boundary:0,storage:0};return typeof E=="number"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function _(S){const E=S.target;E.removeEventListener("dispose",_);const T=l.indexOf(E.__bindingPointIndex);l.splice(T,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete o[E.id]}function x(){for(const S in r)n.deleteBuffer(r[S]);l=[],r={},o={}}return{bind:f,update:h,dispose:x}}function yF(){const n=tu("canvas");return n.style.display="block",n}function SF(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:yF(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,l=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,u=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,f=n.powerPreference!==void 0?n.powerPreference:"default",h=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let p;t!==null?p=t.getContextAttributes().alpha:p=n.alpha!==void 0?n.alpha:!1;let d=null,m=null;const y=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ho,this.physicallyCorrectLights=!1,this.toneMapping=Ur,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const v=this;let _=!1,x=0,S=0,E=null,T=-1,A=null;const R=new gn,O=new gn;let b=null,F=e.width,V=e.height,ce=1,ge=null,Q=null;const $=new gn(0,0,F,V),ae=new gn(0,0,F,V);let he=!1;const de=new tw;let G=!1,k=!1,W=null;const le=new rn,re=new Ze,_e=new q,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return E===null?ce:1}let J=t;function tt(D,Z){for(let ne=0;ne<D.length;ne++){const j=D[ne],ie=e.getContext(j,Z);if(ie!==null)return ie}return null}try{const D={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pg}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",He,!1),e.addEventListener("webglcontextcreationerror",ot,!1),J===null){const Z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Z.shift(),J=tt(Z,D),J===null)throw tt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ue,ke,Le,ct,qe,Oe,ht,It,Xt,Nt,Bt,mt,an,At,I,P,ee,pe,ve,we,Fe,z,Y,Ee;function Re(){Ue=new RI(J),ke=new TI(J,Ue,n),Ue.init(ke),z=new dF(J,Ue,ke),Le=new fF(J,Ue,ke),ct=new NI,qe=new KN,Oe=new hF(J,Ue,Le,qe,ke,z,ct),ht=new CI(v),It=new PI(v),Xt=new XP(J,ke),Y=new MI(J,Ue,Xt,ke),Nt=new DI(J,Xt,ct,Y),Bt=new UI(J,Nt,Xt,ct),ve=new zI(J,ke,Oe),P=new bI(qe),mt=new ZN(v,ht,It,Ue,ke,Y,P),an=new vF(v,qe),At=new JN,I=new sF(Ue,ke),pe=new wI(v,ht,Le,Bt,p,l),ee=new cF(v,Bt,ke),Ee=new xF(J,ct,ke,Le),we=new EI(J,Ue,ct,ke),Fe=new II(J,Ue,ct,ke),ct.programs=mt.programs,v.capabilities=ke,v.extensions=Ue,v.properties=qe,v.renderLists=At,v.shadowMap=ee,v.state=Le,v.info=ct}Re();const Ce=new _F(v,J);this.xr=Ce,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const D=Ue.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ue.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(D){D!==void 0&&(ce=D,this.setSize(F,V,!1))},this.getSize=function(D){return D.set(F,V)},this.setSize=function(D,Z,ne){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,V=Z,e.width=Math.floor(D*ce),e.height=Math.floor(Z*ce),ne!==!1&&(e.style.width=D+"px",e.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(F*ce,V*ce).floor()},this.setDrawingBufferSize=function(D,Z,ne){F=D,V=Z,ce=ne,e.width=Math.floor(D*ne),e.height=Math.floor(Z*ne),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(R)},this.getViewport=function(D){return D.copy($)},this.setViewport=function(D,Z,ne,j){D.isVector4?$.set(D.x,D.y,D.z,D.w):$.set(D,Z,ne,j),Le.viewport(R.copy($).multiplyScalar(ce).floor())},this.getScissor=function(D){return D.copy(ae)},this.setScissor=function(D,Z,ne,j){D.isVector4?ae.set(D.x,D.y,D.z,D.w):ae.set(D,Z,ne,j),Le.scissor(O.copy(ae).multiplyScalar(ce).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(D){Le.setScissorTest(he=D)},this.setOpaqueSort=function(D){ge=D},this.setTransparentSort=function(D){Q=D},this.getClearColor=function(D){return D.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(D=!0,Z=!0,ne=!0){let j=0;D&&(j|=16384),Z&&(j|=256),ne&&(j|=1024),J.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",He,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),At.dispose(),I.dispose(),qe.dispose(),ht.dispose(),It.dispose(),Bt.dispose(),Y.dispose(),Ee.dispose(),mt.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ve),Ce.removeEventListener("sessionend",St),W&&(W.dispose(),W=null),Ft.stop()};function Ie(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const D=ct.autoReset,Z=ee.enabled,ne=ee.autoUpdate,j=ee.needsUpdate,ie=ee.type;Re(),ct.autoReset=D,ee.enabled=Z,ee.autoUpdate=ne,ee.needsUpdate=j,ee.type=ie}function ot(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function B(D){const Z=D.target;Z.removeEventListener("dispose",B),Te(Z)}function Te(D){xe(D),qe.remove(D)}function xe(D){const Z=qe.get(D).programs;Z!==void 0&&(Z.forEach(function(ne){mt.releaseProgram(ne)}),D.isShaderMaterial&&mt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,ne,j,ie,ze){Z===null&&(Z=be);const Xe=ie.isMesh&&ie.matrixWorld.determinant()<0,Ke=Zf(D,Z,ne,j,ie);Le.setMaterial(j,Xe);let je=ne.index;const gt=ne.attributes.position;if(je===null){if(gt===void 0||gt.count===0)return}else if(je.count===0)return;let at=1;j.wireframe===!0&&(je=Nt.getWireframeAttribute(ne),at=2),Y.setup(ie,j,Ke,ne,je);let lt,Pt=we;je!==null&&(lt=Xt.get(je),Pt=Fe,Pt.setIndex(lt));const pr=je!==null?je.count:gt.count,Ni=ne.drawRange.start*at,Xr=ne.drawRange.count*at,An=ze!==null?ze.start*at:0,dt=ze!==null?ze.count*at:1/0,qr=Math.max(Ni,An),Gt=Math.min(pr,Ni+Xr,An+dt)-1,Ln=Math.max(0,Gt-qr+1);if(Ln!==0){if(ie.isMesh)j.wireframe===!0?(Le.setLineWidth(j.wireframeLinewidth*Ne()),Pt.setMode(1)):Pt.setMode(4);else if(ie.isLine){let Fi=j.linewidth;Fi===void 0&&(Fi=1),Le.setLineWidth(Fi*Ne()),ie.isLineSegments?Pt.setMode(1):ie.isLineLoop?Pt.setMode(2):Pt.setMode(3)}else ie.isPoints?Pt.setMode(0):ie.isSprite&&Pt.setMode(4);if(ie.isInstancedMesh)Pt.renderInstances(qr,Ln,ie.count);else if(ne.isInstancedBufferGeometry){const Fi=Math.min(ne.instanceCount,ne._maxInstanceCount);Pt.renderInstances(qr,Ln,Fi)}else Pt.render(qr,Ln)}},this.compile=function(D,Z){function ne(j,ie,ze){j.transparent===!0&&j.side===_s?(j.side=Li,j.needsUpdate=!0,vo(j,ie,ze),j.side=Pa,j.needsUpdate=!0,vo(j,ie,ze),j.side=_s):vo(j,ie,ze)}m=I.get(D),m.init(),w.push(m),D.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(v.physicallyCorrectLights),D.traverse(function(j){const ie=j.material;if(ie)if(Array.isArray(ie))for(let ze=0;ze<ie.length;ze++){const Xe=ie[ze];ne(Xe,D,j)}else ne(ie,D,j)}),w.pop(),m=null};let ue=null;function ye(D){ue&&ue(D)}function Ve(){Ft.stop()}function St(){Ft.start()}const Ft=new nw;Ft.setAnimationLoop(ye),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(D){ue=D,Ce.setAnimationLoop(D),D===null?Ft.stop():Ft.start()},Ce.addEventListener("sessionstart",Ve),Ce.addEventListener("sessionend",St),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(Z),Z=Ce.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,Z,E),m=I.get(D,w.length),m.init(),w.push(m),le.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),de.setFromProjectionMatrix(le),k=this.localClippingEnabled,G=P.init(this.clippingPlanes,k,Z),d=At.get(D,y.length),d.init(),y.push(d),er(D,Z,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(ge,Q),G===!0&&P.beginShadows();const ne=m.state.shadowsArray;if(ee.render(ne,D,Z),G===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(d,D),m.setupLights(v.physicallyCorrectLights),Z.isArrayCamera){const j=Z.cameras;for(let ie=0,ze=j.length;ie<ze;ie++){const Xe=j[ie];Lt(d,D,Xe,Xe.viewport)}}else Lt(d,D,Z);E!==null&&(Oe.updateMultisampleRenderTarget(E),Oe.updateRenderTargetMipmap(E)),D.isScene===!0&&D.onAfterRender(v,D,Z),Y.resetDefaultState(),T=-1,A=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,y.pop(),y.length>0?d=y[y.length-1]:d=null};function er(D,Z,ne,j){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)ne=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||de.intersectsSprite(D)){j&&_e.setFromMatrixPosition(D.matrixWorld).applyMatrix4(le);const Xe=Bt.update(D),Ke=D.material;Ke.visible&&d.push(D,Xe,Ke,ne,_e.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==ct.render.frame&&(D.skeleton.update(),D.skeleton.frame=ct.render.frame),!D.frustumCulled||de.intersectsObject(D))){j&&_e.setFromMatrixPosition(D.matrixWorld).applyMatrix4(le);const Xe=Bt.update(D),Ke=D.material;if(Array.isArray(Ke)){const je=Xe.groups;for(let gt=0,at=je.length;gt<at;gt++){const lt=je[gt],Pt=Ke[lt.materialIndex];Pt&&Pt.visible&&d.push(D,Xe,Pt,ne,_e.z,lt)}}else Ke.visible&&d.push(D,Xe,Ke,ne,_e.z,null)}}const ze=D.children;for(let Xe=0,Ke=ze.length;Xe<Ke;Xe++)er(ze[Xe],Z,ne,j)}function Lt(D,Z,ne,j){const ie=D.opaque,ze=D.transmissive,Xe=D.transparent;m.setupLightsView(ne),ze.length>0&&hi(ie,Z,ne),j&&Le.viewport(R.copy(j)),ie.length>0&&Un(ie,Z,ne),ze.length>0&&Un(ze,Z,ne),Xe.length>0&&Un(Xe,Z,ne),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function hi(D,Z,ne){const j=ke.isWebGL2;W===null&&(W=new hr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?eu:fo,minFilter:Xf,samples:j&&o===!0?4:0})),v.getDrawingBufferSize(re),j?W.setSize(re.x,re.y):W.setSize(gm(re.x),gm(re.y));const ie=v.getRenderTarget();v.setRenderTarget(W),v.clear();const ze=v.toneMapping;v.toneMapping=Ur,Un(D,Z,ne),v.toneMapping=ze,Oe.updateMultisampleRenderTarget(W),Oe.updateRenderTargetMipmap(W),v.setRenderTarget(ie)}function Un(D,Z,ne){const j=Z.isScene===!0?Z.overrideMaterial:null;for(let ie=0,ze=D.length;ie<ze;ie++){const Xe=D[ie],Ke=Xe.object,je=Xe.geometry,gt=j===null?Xe.material:j,at=Xe.group;Ke.layers.test(ne.layers)&&$f(Ke,Z,ne,je,gt,at)}}function $f(D,Z,ne,j,ie,ze){D.onBeforeRender(v,Z,ne,j,ie,ze),D.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ie.onBeforeRender(v,Z,ne,j,D,ze),ie.transparent===!0&&ie.side===_s?(ie.side=Li,ie.needsUpdate=!0,v.renderBufferDirect(ne,Z,j,ie,D,ze),ie.side=Pa,ie.needsUpdate=!0,v.renderBufferDirect(ne,Z,j,ie,D,ze),ie.side=_s):v.renderBufferDirect(ne,Z,j,ie,D,ze),D.onAfterRender(v,Z,ne,j,ie,ze)}function vo(D,Z,ne){Z.isScene!==!0&&(Z=be);const j=qe.get(D),ie=m.state.lights,ze=m.state.shadowsArray,Xe=ie.state.version,Ke=mt.getParameters(D,ie.state,ze,Z,ne),je=mt.getProgramCacheKey(Ke);let gt=j.programs;j.environment=D.isMeshStandardMaterial?Z.environment:null,j.fog=Z.fog,j.envMap=(D.isMeshStandardMaterial?It:ht).get(D.envMap||j.environment),gt===void 0&&(D.addEventListener("dispose",B),gt=new Map,j.programs=gt);let at=gt.get(je);if(at!==void 0){if(j.currentProgram===at&&j.lightsStateVersion===Xe)return xo(D,Ke),at}else Ke.uniforms=mt.getUniforms(D),D.onBuild(ne,Ke,v),D.onBeforeCompile(Ke,v),at=mt.acquireProgram(Ke,je),gt.set(je,at),j.uniforms=Ke.uniforms;const lt=j.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(lt.clippingPlanes=P.uniform),xo(D,Ke),j.needsLights=Kf(D),j.lightsStateVersion=Xe,j.needsLights&&(lt.ambientLightColor.value=ie.state.ambient,lt.lightProbe.value=ie.state.probe,lt.directionalLights.value=ie.state.directional,lt.directionalLightShadows.value=ie.state.directionalShadow,lt.spotLights.value=ie.state.spot,lt.spotLightShadows.value=ie.state.spotShadow,lt.rectAreaLights.value=ie.state.rectArea,lt.ltc_1.value=ie.state.rectAreaLTC1,lt.ltc_2.value=ie.state.rectAreaLTC2,lt.pointLights.value=ie.state.point,lt.pointLightShadows.value=ie.state.pointShadow,lt.hemisphereLights.value=ie.state.hemi,lt.directionalShadowMap.value=ie.state.directionalShadowMap,lt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,lt.spotShadowMap.value=ie.state.spotShadowMap,lt.spotLightMatrix.value=ie.state.spotLightMatrix,lt.spotLightMap.value=ie.state.spotLightMap,lt.pointShadowMap.value=ie.state.pointShadowMap,lt.pointShadowMatrix.value=ie.state.pointShadowMatrix);const Pt=at.getUniforms(),pr=tf.seqWithValue(Pt.seq,lt);return j.currentProgram=at,j.uniformsList=pr,at}function xo(D,Z){const ne=qe.get(D);ne.outputEncoding=Z.outputEncoding,ne.instancing=Z.instancing,ne.skinning=Z.skinning,ne.morphTargets=Z.morphTargets,ne.morphNormals=Z.morphNormals,ne.morphColors=Z.morphColors,ne.morphTargetsCount=Z.morphTargetsCount,ne.numClippingPlanes=Z.numClippingPlanes,ne.numIntersection=Z.numClipIntersection,ne.vertexAlphas=Z.vertexAlphas,ne.vertexTangents=Z.vertexTangents,ne.toneMapping=Z.toneMapping}function Zf(D,Z,ne,j,ie){Z.isScene!==!0&&(Z=be),Oe.resetTextureUnits();const ze=Z.fog,Xe=j.isMeshStandardMaterial?Z.environment:null,Ke=E===null?v.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:ho,je=(j.isMeshStandardMaterial?It:ht).get(j.envMap||Xe),gt=j.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,at=!!j.normalMap&&!!ne.attributes.tangent,lt=!!ne.morphAttributes.position,Pt=!!ne.morphAttributes.normal,pr=!!ne.morphAttributes.color,Ni=j.toneMapped?v.toneMapping:Ur,Xr=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,An=Xr!==void 0?Xr.length:0,dt=qe.get(j),qr=m.state.lights;if(G===!0&&(k===!0||D!==A)){const xn=D===A&&j.id===T;P.setState(j,D,xn)}let Gt=!1;j.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==qr.state.version||dt.outputEncoding!==Ke||ie.isInstancedMesh&&dt.instancing===!1||!ie.isInstancedMesh&&dt.instancing===!0||ie.isSkinnedMesh&&dt.skinning===!1||!ie.isSkinnedMesh&&dt.skinning===!0||dt.envMap!==je||j.fog===!0&&dt.fog!==ze||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==P.numPlanes||dt.numIntersection!==P.numIntersection)||dt.vertexAlphas!==gt||dt.vertexTangents!==at||dt.morphTargets!==lt||dt.morphNormals!==Pt||dt.morphColors!==pr||dt.toneMapping!==Ni||ke.isWebGL2===!0&&dt.morphTargetsCount!==An)&&(Gt=!0):(Gt=!0,dt.__version=j.version);let Ln=dt.currentProgram;Gt===!0&&(Ln=vo(j,Z,ie));let Fi=!1,jr=!1,Ga=!1;const hn=Ln.getUniforms(),mr=dt.uniforms;if(Le.useProgram(Ln.program)&&(Fi=!0,jr=!0,Ga=!0),j.id!==T&&(T=j.id,jr=!0),Fi||A!==D){if(hn.setValue(J,"projectionMatrix",D.projectionMatrix),ke.logarithmicDepthBuffer&&hn.setValue(J,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),A!==D&&(A=D,jr=!0,Ga=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const xn=hn.map.cameraPosition;xn!==void 0&&xn.setValue(J,_e.setFromMatrixPosition(D.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&hn.setValue(J,"isOrthographic",D.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||ie.isSkinnedMesh)&&hn.setValue(J,"viewMatrix",D.matrixWorldInverse)}if(ie.isSkinnedMesh){hn.setOptional(J,ie,"bindMatrix"),hn.setOptional(J,ie,"bindMatrixInverse");const xn=ie.skeleton;xn&&(ke.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),hn.setValue(J,"boneTexture",xn.boneTexture,Oe),hn.setValue(J,"boneTextureSize",xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wa=ne.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0&&ke.isWebGL2===!0)&&ve.update(ie,ne,j,Ln),(jr||dt.receiveShadow!==ie.receiveShadow)&&(dt.receiveShadow=ie.receiveShadow,hn.setValue(J,"receiveShadow",ie.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(mr.envMap.value=je,mr.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),jr&&(hn.setValue(J,"toneMappingExposure",v.toneMappingExposure),dt.needsLights&&Ba(mr,Ga),ze&&j.fog===!0&&an.refreshFogUniforms(mr,ze),an.refreshMaterialUniforms(mr,j,ce,V,W),tf.upload(J,dt.uniformsList,mr,Oe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(tf.upload(J,dt.uniformsList,mr,Oe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&hn.setValue(J,"center",ie.center),hn.setValue(J,"modelViewMatrix",ie.modelViewMatrix),hn.setValue(J,"normalMatrix",ie.normalMatrix),hn.setValue(J,"modelMatrix",ie.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const xn=j.uniformsGroups;for(let yo=0,du=xn.length;yo<du;yo++)if(ke.isWebGL2){const So=xn[yo];Ee.update(So,Ln),Ee.bind(So,Ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ln}function Ba(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function Kf(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(D,Z,ne){qe.get(D.texture).__webglTexture=Z,qe.get(D.depthTexture).__webglTexture=ne;const j=qe.get(D);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=ne===void 0,j.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,Z){const ne=qe.get(D);ne.__webglFramebuffer=Z,ne.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(D,Z=0,ne=0){E=D,x=Z,S=ne;let j=!0;if(D){const je=qe.get(D);je.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(36160,null),j=!1):je.__webglFramebuffer===void 0?Oe.setupRenderTarget(D):je.__hasExternalTextures&&Oe.rebindTextures(D,qe.get(D.texture).__webglTexture,qe.get(D.depthTexture).__webglTexture)}let ie=null,ze=!1,Xe=!1;if(D){const je=D.texture;(je.isData3DTexture||je.isDataArrayTexture)&&(Xe=!0);const gt=qe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(ie=gt[Z],ze=!0):ke.isWebGL2&&D.samples>0&&Oe.useMultisampledRTT(D)===!1?ie=qe.get(D).__webglMultisampledFramebuffer:ie=gt,R.copy(D.viewport),O.copy(D.scissor),b=D.scissorTest}else R.copy($).multiplyScalar(ce).floor(),O.copy(ae).multiplyScalar(ce).floor(),b=he;if(Le.bindFramebuffer(36160,ie)&&ke.drawBuffers&&j&&Le.drawBuffers(D,ie),Le.viewport(R),Le.scissor(O),Le.setScissorTest(b),ze){const je=qe.get(D.texture);J.framebufferTexture2D(36160,36064,34069+Z,je.__webglTexture,ne)}else if(Xe){const je=qe.get(D.texture),gt=Z||0;J.framebufferTextureLayer(36160,36064,je.__webglTexture,ne||0,gt)}T=-1},this.readRenderTargetPixels=function(D,Z,ne,j,ie,ze,Xe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=qe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ke=Ke[Xe]),Ke){Le.bindFramebuffer(36160,Ke);try{const je=D.texture,gt=je.format,at=je.type;if(gt!==lr&&z.convert(gt)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=at===eu&&(Ue.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(at!==fo&&z.convert(at)!==J.getParameter(35738)&&!(at===eo&&(ke.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-j&&ne>=0&&ne<=D.height-ie&&J.readPixels(Z,ne,j,ie,z.convert(gt),z.convert(at),ze)}finally{const je=E!==null?qe.get(E).__webglFramebuffer:null;Le.bindFramebuffer(36160,je)}}},this.copyFramebufferToTexture=function(D,Z,ne=0){const j=Math.pow(2,-ne),ie=Math.floor(Z.image.width*j),ze=Math.floor(Z.image.height*j);Oe.setTexture2D(Z,0),J.copyTexSubImage2D(3553,ne,0,0,D.x,D.y,ie,ze),Le.unbindTexture()},this.copyTextureToTexture=function(D,Z,ne,j=0){const ie=Z.image.width,ze=Z.image.height,Xe=z.convert(ne.format),Ke=z.convert(ne.type);Oe.setTexture2D(ne,0),J.pixelStorei(37440,ne.flipY),J.pixelStorei(37441,ne.premultiplyAlpha),J.pixelStorei(3317,ne.unpackAlignment),Z.isDataTexture?J.texSubImage2D(3553,j,D.x,D.y,ie,ze,Xe,Ke,Z.image.data):Z.isCompressedTexture?J.compressedTexSubImage2D(3553,j,D.x,D.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Xe,Z.mipmaps[0].data):J.texSubImage2D(3553,j,D.x,D.y,Xe,Ke,Z.image),j===0&&ne.generateMipmaps&&J.generateMipmap(3553),Le.unbindTexture()},this.copyTextureToTexture3D=function(D,Z,ne,j,ie=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ze=D.max.x-D.min.x+1,Xe=D.max.y-D.min.y+1,Ke=D.max.z-D.min.z+1,je=z.convert(j.format),gt=z.convert(j.type);let at;if(j.isData3DTexture)Oe.setTexture3D(j,0),at=32879;else if(j.isDataArrayTexture)Oe.setTexture2DArray(j,0),at=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,j.flipY),J.pixelStorei(37441,j.premultiplyAlpha),J.pixelStorei(3317,j.unpackAlignment);const lt=J.getParameter(3314),Pt=J.getParameter(32878),pr=J.getParameter(3316),Ni=J.getParameter(3315),Xr=J.getParameter(32877),An=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;J.pixelStorei(3314,An.width),J.pixelStorei(32878,An.height),J.pixelStorei(3316,D.min.x),J.pixelStorei(3315,D.min.y),J.pixelStorei(32877,D.min.z),ne.isDataTexture||ne.isData3DTexture?J.texSubImage3D(at,ie,Z.x,Z.y,Z.z,ze,Xe,Ke,je,gt,An.data):ne.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(at,ie,Z.x,Z.y,Z.z,ze,Xe,Ke,je,An.data)):J.texSubImage3D(at,ie,Z.x,Z.y,Z.z,ze,Xe,Ke,je,gt,An),J.pixelStorei(3314,lt),J.pixelStorei(32878,Pt),J.pixelStorei(3316,pr),J.pixelStorei(3315,Ni),J.pixelStorei(32877,Xr),ie===0&&j.generateMipmaps&&J.generateMipmap(at),Le.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Oe.setTextureCube(D,0):D.isData3DTexture?Oe.setTexture3D(D,0):D.isDataArrayTexture?Oe.setTexture2DArray(D,0):Oe.setTexture2D(D,0),Le.unbindTexture()},this.resetState=function(){x=0,S=0,E=null,Le.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class wF extends SF{}wF.prototype.isWebGL1Renderer=!0;class aw{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=t}clone(){return new aw(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class tO extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Nl extends Vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uy=new q,cy=new q,fy=new rn,fp=new gg,Uc=new cu;class MF extends Fn{constructor(e=new Zn,t=new Nl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)uy.fromBufferAttribute(t,r-1),cy.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=uy.distanceTo(cy);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(r),Uc.radius+=o,e.ray.intersectsSphere(Uc)===!1)return;fy.copy(r).invert(),fp.copy(e.ray).applyMatrix4(fy);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=new q,p=new q,d=new q,m=new q,y=this.isLineSegments?2:1,w=i.index,_=i.attributes.position;if(w!==null){const x=Math.max(0,l.start),S=Math.min(w.count,l.start+l.count);for(let E=x,T=S-1;E<T;E+=y){const A=w.getX(E),R=w.getX(E+1);if(h.fromBufferAttribute(_,A),p.fromBufferAttribute(_,R),fp.distanceSqToSegment(h,p,m,d)>f)continue;m.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(m);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,l.start),S=Math.min(_.count,l.start+l.count);for(let E=x,T=S-1;E<T;E+=y){if(h.fromBufferAttribute(_,E),p.fromBufferAttribute(_,E+1),fp.distanceSqToSegment(h,p,m,d)>f)continue;m.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(m);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}const hy=new q,dy=new q;class vm extends MF{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)hy.fromBufferAttribute(t,r),dy.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hy.distanceTo(dy);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ml extends Vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const py=new rn,xm=new gg,kc=new cu,Bc=new q;class hp extends Fn{constructor(e=new Zn,t=new Ml){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(r),kc.radius+=o,e.ray.intersectsSphere(kc)===!1)return;py.copy(r).invert(),xm.copy(e.ray).applyMatrix4(py);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,l.start),y=Math.min(h.count,l.start+l.count);for(let w=m,v=y;w<v;w++){const _=h.getX(w);Bc.fromBufferAttribute(d,_),my(Bc,_,f,r,e,t,this)}}else{const m=Math.max(0,l.start),y=Math.min(d.count,l.start+l.count);for(let w=m,v=y;w<v;w++)Bc.fromBufferAttribute(d,w),my(Bc,w,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function my(n,e,t,i,r,o,l){const u=xm.distanceSqToPoint(n);if(u<t){const f=new q;xm.closestPointToPoint(n,f),f.applyMatrix4(i);const h=r.ray.origin.distanceTo(f);if(h<r.near||h>r.far)return;o.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,object:l})}}class EF extends Vr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=VS,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Cf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class TF{constructor(e,t,i){const r=this;let o=!1,l=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,o===!1&&r.onStart!==void 0&&r.onStart(p,l,u),o=!0},this.itemEnd=function(p){l++,r.onProgress!==void 0&&r.onProgress(p,l,u),l===u&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,d){return h.push(p,d),this},this.removeHandler=function(p){const d=h.indexOf(p);return d!==-1&&h.splice(d,2),this},this.getHandler=function(p){for(let d=0,m=h.length;d<m;d+=2){const y=h[d],w=h[d+1];if(y.global&&(y.lastIndex=0),y.test(p))return w}return null}}}const bF=new TF;class jf{constructor(e){this.manager=e!==void 0?e:bF,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Pr={};class CF extends Error{constructor(e,t){super(e),this.response=t}}class AF extends jf{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Cf.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Pr[e]!==void 0){Pr[e].push({onLoad:t,onProgress:i,onError:r});return}Pr[e]=[],Pr[e].push({onLoad:t,onProgress:i,onError:r});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=Pr[e],d=h.body.getReader(),m=h.headers.get("Content-Length"),y=m?parseInt(m):0,w=y!==0;let v=0;const _=new ReadableStream({start(x){S();function S(){d.read().then(({done:E,value:T})=>{if(E)x.close();else{v+=T.byteLength;const A=new ProgressEvent("progress",{lengthComputable:w,loaded:v,total:y});for(let R=0,O=p.length;R<O;R++){const b=p[R];b.onProgress&&b.onProgress(A)}x.enqueue(T),S()}})}}});return new Response(_)}else throw new CF(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return h.json();default:if(u===void 0)return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(u),m=d&&d[1]?d[1].toLowerCase():void 0,y=new TextDecoder(m);return h.arrayBuffer().then(w=>y.decode(w))}}}).then(h=>{Cf.add(e,h);const p=Pr[e];delete Pr[e];for(let d=0,m=p.length;d<m;d++){const y=p[d];y.onLoad&&y.onLoad(h)}}).catch(h=>{const p=Pr[e];if(p===void 0)throw this.manager.itemError(e),h;delete Pr[e];for(let d=0,m=p.length;d<m;d++){const y=p[d];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class LF extends jf{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=Cf.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l;const u=tu("img");function f(){p(),Cf.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(d){p(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(e),u.src=e,u}}class nO extends jf{constructor(e){super(e)}load(e,t,i,r){const o=new Di,l=new LF(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class PF{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gy();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gy(){return(typeof performance>"u"?Date:performance).now()}class _y{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iO extends vm{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Zn;r.setAttribute("position",new $t(t,3)),r.setAttribute("color",new $t(i,3));const o=new Nl({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,t,i){const r=new pt,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(t),r.toArray(o,6),r.toArray(o,9),r.set(i),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pg);const RF=/^[og]\s*(.+)?/,DF=/^mtllib /,IF=/^usemtl /,NF=/^usemap /,vy=/\s+/,xy=new q,dp=new q,yy=new q,Sy=new q,wi=new q,Gc=new pt;function FF(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,o){const l=this._finalize(!1);l&&(l.inherited||l.groupCount<=0)&&this.materials.splice(l.index,1);const u={index:this.materials.length,name:r||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:l!==void 0?l.smooth:this.smooth,groupStart:l!==void 0?l.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(f){const h={index:typeof f=="number"?f:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return h.clone=this.clone.bind(h),h}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),r&&this.materials.length>1)for(let l=this.materials.length-1;l>=0;l--)this.materials[l].groupCount<=0&&this.materials.splice(l,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,o=this.object.geometry.vertices;o.push(r[e+0],r[e+1],r[e+2]),o.push(r[t+0],r[t+1],r[t+2]),o.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,o=this.object.geometry.normals;o.push(r[e+0],r[e+1],r[e+2]),o.push(r[t+0],r[t+1],r[t+2]),o.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,o=this.object.geometry.normals;xy.fromArray(r,e),dp.fromArray(r,t),yy.fromArray(r,i),wi.subVectors(yy,dp),Sy.subVectors(xy,dp),wi.cross(Sy),wi.normalize(),o.push(wi.x,wi.y,wi.z),o.push(wi.x,wi.y,wi.z),o.push(wi.x,wi.y,wi.z)},addColor:function(e,t,i){const r=this.colors,o=this.object.geometry.colors;r[e]!==void 0&&o.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&o.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&o.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,o=this.object.geometry.uvs;o.push(r[e+0],r[e+1]),o.push(r[t+0],r[t+1]),o.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,o,l,u,f,h){const p=this.vertices.length;let d=this.parseVertexIndex(e,p),m=this.parseVertexIndex(t,p),y=this.parseVertexIndex(i,p);if(this.addVertex(d,m,y),this.addColor(d,m,y),u!==void 0&&u!==""){const w=this.normals.length;d=this.parseNormalIndex(u,w),m=this.parseNormalIndex(f,w),y=this.parseNormalIndex(h,w),this.addNormal(d,m,y)}else this.addFaceNormal(d,m,y);if(r!==void 0&&r!==""){const w=this.uvs.length;d=this.parseUVIndex(r,w),m=this.parseUVIndex(o,w),y=this.parseUVIndex(l,w),this.addUV(d,m,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const o=this.parseVertexIndex(e[i],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let o=0,l=e.length;o<l;o++)this.addVertexLine(this.parseVertexIndex(e[o],i));for(let o=0,l=t.length;o<l;o++)this.addUVLine(this.parseUVIndex(t[o],r))}};return n.startObject("",!1),n}class rO extends jf{constructor(e){super(e),this.materials=null}load(e,t,i,r){const o=this,l=new AF(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{t(o.parse(u))}catch(f){r?r(f):console.error(f),o.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new FF;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r=[];for(let u=0,f=i.length;u<f;u++){const h=i[u].trimStart();if(h.length===0)continue;const p=h.charAt(0);if(p!=="#")if(p==="v"){const d=h.split(vy);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(Gc.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),t.colors.push(Gc.r,Gc.g,Gc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(p==="f"){const m=h.slice(1).trim().split(vy),y=[];for(let v=0,_=m.length;v<_;v++){const x=m[v];if(x.length>0){const S=x.split("/");y.push(S)}}const w=y[0];for(let v=1,_=y.length-1;v<_;v++){const x=y[v],S=y[v+1];t.addFace(w[0],x[0],S[0],w[1],x[1],S[1],w[2],x[2],S[2])}}else if(p==="l"){const d=h.substring(1).trim().split(" ");let m=[];const y=[];if(h.indexOf("/")===-1)m=d;else for(let w=0,v=d.length;w<v;w++){const _=d[w].split("/");_[0]!==""&&m.push(_[0]),_[1]!==""&&y.push(_[1])}t.addLineGeometry(m,y)}else if(p==="p"){const m=h.slice(1).trim().split(" ");t.addPointGeometry(m)}else if((r=RF.exec(h))!==null){const d=(" "+r[0].slice(1).trim()).slice(1);t.startObject(d)}else if(IF.test(h))t.object.startMaterial(h.substring(7).trim(),t.materialLibraries);else if(DF.test(h))t.materialLibraries.push(h.substring(7).trim());else if(NF.test(h))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(r=h.split(" "),r.length>1){const m=r[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(h==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+h+'"')}}t.finalize();const o=new wl;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,f=t.objects.length;u<f;u++){const h=t.objects[u],p=h.geometry,d=h.materials,m=p.type==="Line",y=p.type==="Points";let w=!1;if(p.vertices.length===0)continue;const v=new Zn;v.setAttribute("position",new $t(p.vertices,3)),p.normals.length>0&&v.setAttribute("normal",new $t(p.normals,3)),p.colors.length>0&&(w=!0,v.setAttribute("color",new $t(p.colors,3))),p.hasUVIndices===!0&&v.setAttribute("uv",new $t(p.uvs,2));const _=[];for(let S=0,E=d.length;S<E;S++){const T=d[S],A=T.name+"_"+T.smooth+"_"+w;let R=t.materials[A];if(this.materials!==null){if(R=this.materials.create(T.name),m&&R&&!(R instanceof Nl)){const O=new Nl;Vr.prototype.copy.call(O,R),O.color.copy(R.color),R=O}else if(y&&R&&!(R instanceof Ml)){const O=new Ml({size:10,sizeAttenuation:!1});Vr.prototype.copy.call(O,R),O.color.copy(R.color),O.map=R.map,R=O}}R===void 0&&(m?R=new Nl:y?R=new Ml({size:1,sizeAttenuation:!1}):R=new EF,R.name=T.name,R.flatShading=!T.smooth,R.vertexColors=w,t.materials[A]=R),_.push(R)}let x;if(_.length>1){for(let S=0,E=d.length;S<E;S++){const T=d[S];v.addGroup(T.groupStart,T.groupCount,S)}m?x=new vm(v,_):y?x=new hp(v,_):x=new Zi(v,_)}else m?x=new vm(v,_[0]):y?x=new hp(v,_[0]):x=new Zi(v,_[0]);x.name=h.name,o.add(x)}else if(t.vertices.length>0){const u=new Ml({size:1,sizeAttenuation:!1}),f=new Zn;f.setAttribute("position",new $t(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new $t(t.colors,3)),u.vertexColors=!0);const h=new hp(f,u);o.add(h)}return o}}const wy={type:"change"},pp={type:"start"},My={type:"end"};class sO extends _o{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zo.ROTATE,MIDDLE:zo.DOLLY,RIGHT:zo.PAN},this.touches={ONE:Uo.ROTATE,TWO:Uo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",At),this._domElementKeyEvents=z},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(wy),i.update(),o=r.NONE},this.update=function(){const z=new q,Y=new po().setFromUnitVectors(e.up,new q(0,1,0)),Ee=Y.clone().invert(),Re=new q,Ce=new po,Ie=2*Math.PI;return function(){const ot=i.object.position;z.copy(ot).sub(i.target),z.applyQuaternion(Y),u.setFromVector3(z),i.autoRotate&&o===r.NONE&&F(O()),i.enableDamping?(u.theta+=f.theta*i.dampingFactor,u.phi+=f.phi*i.dampingFactor):(u.theta+=f.theta,u.phi+=f.phi);let B=i.minAzimuthAngle,Te=i.maxAzimuthAngle;return isFinite(B)&&isFinite(Te)&&(B<-Math.PI?B+=Ie:B>Math.PI&&(B-=Ie),Te<-Math.PI?Te+=Ie:Te>Math.PI&&(Te-=Ie),B<=Te?u.theta=Math.max(B,Math.min(Te,u.theta)):u.theta=u.theta>(B+Te)/2?Math.max(B,u.theta):Math.min(Te,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=h,u.radius=Math.max(i.minDistance,Math.min(i.maxDistance,u.radius)),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),z.setFromSpherical(u),z.applyQuaternion(Ee),ot.copy(i.target).add(z),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),p.set(0,0,0)),h=1,d||Re.distanceToSquared(i.object.position)>l||8*(1-Ce.dot(i.object.quaternion))>l?(i.dispatchEvent(wy),Re.copy(i.object.position),Ce.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ee),i.domElement.removeEventListener("pointerdown",ht),i.domElement.removeEventListener("pointercancel",Nt),i.domElement.removeEventListener("wheel",an),i.domElement.removeEventListener("pointermove",It),i.domElement.removeEventListener("pointerup",Xt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",At)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const l=1e-6,u=new _y,f=new _y;let h=1;const p=new q;let d=!1;const m=new Ze,y=new Ze,w=new Ze,v=new Ze,_=new Ze,x=new Ze,S=new Ze,E=new Ze,T=new Ze,A=[],R={};function O(){return 2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function F(z){f.theta-=z}function V(z){f.phi-=z}const ce=function(){const z=new q;return function(Ee,Re){z.setFromMatrixColumn(Re,0),z.multiplyScalar(-Ee),p.add(z)}}(),ge=function(){const z=new q;return function(Ee,Re){i.screenSpacePanning===!0?z.setFromMatrixColumn(Re,1):(z.setFromMatrixColumn(Re,0),z.crossVectors(i.object.up,z)),z.multiplyScalar(Ee),p.add(z)}}(),Q=function(){const z=new q;return function(Ee,Re){const Ce=i.domElement;if(i.object.isPerspectiveCamera){const Ie=i.object.position;z.copy(Ie).sub(i.target);let He=z.length();He*=Math.tan(i.object.fov/2*Math.PI/180),ce(2*Ee*He/Ce.clientHeight,i.object.matrix),ge(2*Re*He/Ce.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ce(Ee*(i.object.right-i.object.left)/i.object.zoom/Ce.clientWidth,i.object.matrix),ge(Re*(i.object.top-i.object.bottom)/i.object.zoom/Ce.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(z){i.object.isPerspectiveCamera?h/=z:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*z)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ae(z){i.object.isPerspectiveCamera?h*=z:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/z)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function he(z){m.set(z.clientX,z.clientY)}function de(z){S.set(z.clientX,z.clientY)}function G(z){v.set(z.clientX,z.clientY)}function k(z){y.set(z.clientX,z.clientY),w.subVectors(y,m).multiplyScalar(i.rotateSpeed);const Y=i.domElement;F(2*Math.PI*w.x/Y.clientHeight),V(2*Math.PI*w.y/Y.clientHeight),m.copy(y),i.update()}function W(z){E.set(z.clientX,z.clientY),T.subVectors(E,S),T.y>0?$(b()):T.y<0&&ae(b()),S.copy(E),i.update()}function le(z){_.set(z.clientX,z.clientY),x.subVectors(_,v).multiplyScalar(i.panSpeed),Q(x.x,x.y),v.copy(_),i.update()}function re(z){z.deltaY<0?ae(b()):z.deltaY>0&&$(b()),i.update()}function _e(z){let Y=!1;switch(z.code){case i.keys.UP:Q(0,i.keyPanSpeed),Y=!0;break;case i.keys.BOTTOM:Q(0,-i.keyPanSpeed),Y=!0;break;case i.keys.LEFT:Q(i.keyPanSpeed,0),Y=!0;break;case i.keys.RIGHT:Q(-i.keyPanSpeed,0),Y=!0;break}Y&&(z.preventDefault(),i.update())}function be(){if(A.length===1)m.set(A[0].pageX,A[0].pageY);else{const z=.5*(A[0].pageX+A[1].pageX),Y=.5*(A[0].pageY+A[1].pageY);m.set(z,Y)}}function Ne(){if(A.length===1)v.set(A[0].pageX,A[0].pageY);else{const z=.5*(A[0].pageX+A[1].pageX),Y=.5*(A[0].pageY+A[1].pageY);v.set(z,Y)}}function J(){const z=A[0].pageX-A[1].pageX,Y=A[0].pageY-A[1].pageY,Ee=Math.sqrt(z*z+Y*Y);S.set(0,Ee)}function tt(){i.enableZoom&&J(),i.enablePan&&Ne()}function Ue(){i.enableZoom&&J(),i.enableRotate&&be()}function ke(z){if(A.length==1)y.set(z.pageX,z.pageY);else{const Ee=Fe(z),Re=.5*(z.pageX+Ee.x),Ce=.5*(z.pageY+Ee.y);y.set(Re,Ce)}w.subVectors(y,m).multiplyScalar(i.rotateSpeed);const Y=i.domElement;F(2*Math.PI*w.x/Y.clientHeight),V(2*Math.PI*w.y/Y.clientHeight),m.copy(y)}function Le(z){if(A.length===1)_.set(z.pageX,z.pageY);else{const Y=Fe(z),Ee=.5*(z.pageX+Y.x),Re=.5*(z.pageY+Y.y);_.set(Ee,Re)}x.subVectors(_,v).multiplyScalar(i.panSpeed),Q(x.x,x.y),v.copy(_)}function ct(z){const Y=Fe(z),Ee=z.pageX-Y.x,Re=z.pageY-Y.y,Ce=Math.sqrt(Ee*Ee+Re*Re);E.set(0,Ce),T.set(0,Math.pow(E.y/S.y,i.zoomSpeed)),$(T.y),S.copy(E)}function qe(z){i.enableZoom&&ct(z),i.enablePan&&Le(z)}function Oe(z){i.enableZoom&&ct(z),i.enableRotate&&ke(z)}function ht(z){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(z.pointerId),i.domElement.addEventListener("pointermove",It),i.domElement.addEventListener("pointerup",Xt)),pe(z),z.pointerType==="touch"?I(z):Bt(z))}function It(z){i.enabled!==!1&&(z.pointerType==="touch"?P(z):mt(z))}function Xt(z){ve(z),A.length===0&&(i.domElement.releasePointerCapture(z.pointerId),i.domElement.removeEventListener("pointermove",It),i.domElement.removeEventListener("pointerup",Xt)),i.dispatchEvent(My),o=r.NONE}function Nt(z){ve(z)}function Bt(z){let Y;switch(z.button){case 0:Y=i.mouseButtons.LEFT;break;case 1:Y=i.mouseButtons.MIDDLE;break;case 2:Y=i.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case zo.DOLLY:if(i.enableZoom===!1)return;de(z),o=r.DOLLY;break;case zo.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(i.enablePan===!1)return;G(z),o=r.PAN}else{if(i.enableRotate===!1)return;he(z),o=r.ROTATE}break;case zo.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(i.enableRotate===!1)return;he(z),o=r.ROTATE}else{if(i.enablePan===!1)return;G(z),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(pp)}function mt(z){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;k(z);break;case r.DOLLY:if(i.enableZoom===!1)return;W(z);break;case r.PAN:if(i.enablePan===!1)return;le(z);break}}function an(z){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(z.preventDefault(),i.dispatchEvent(pp),re(z),i.dispatchEvent(My))}function At(z){i.enabled===!1||i.enablePan===!1||_e(z)}function I(z){switch(we(z),A.length){case 1:switch(i.touches.ONE){case Uo.ROTATE:if(i.enableRotate===!1)return;be(),o=r.TOUCH_ROTATE;break;case Uo.PAN:if(i.enablePan===!1)return;Ne(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Uo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;tt(),o=r.TOUCH_DOLLY_PAN;break;case Uo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ue(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(pp)}function P(z){switch(we(z),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ke(z),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Le(z),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;qe(z),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Oe(z),i.update();break;default:o=r.NONE}}function ee(z){i.enabled!==!1&&z.preventDefault()}function pe(z){A.push(z)}function ve(z){delete R[z.pointerId];for(let Y=0;Y<A.length;Y++)if(A[Y].pointerId==z.pointerId){A.splice(Y,1);return}}function we(z){let Y=R[z.pointerId];Y===void 0&&(Y=new Ze,R[z.pointerId]=Y),Y.set(z.pageX,z.pageY)}function Fe(z){const Y=z.pointerId===A[0].pointerId?A[1]:A[0];return R[Y.pointerId]}i.domElement.addEventListener("contextmenu",ee),i.domElement.addEventListener("pointerdown",ht),i.domElement.addEventListener("pointercancel",Nt),i.domElement.addEventListener("wheel",an,{passive:!1}),this.update()}}const Ey={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class ka{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const OF=new vg(-1,1,1,-1,0,1),yg=new Zn;yg.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3));yg.setAttribute("uv",new $t([0,2,0,0,2,0],2));class Sg{constructor(e){this._mesh=new Zi(yg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,OF)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ty extends ka{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ii?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=nu.clone(e.uniforms),this.material=new Ii({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Sg(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class by extends ka{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let l,u;this.inverse?(l=0,u=1):(l=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class zF extends ka{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class oO{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new Ze);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new hr(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Ey===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ty===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ty(Ey),this.clock=new PF}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),l.needsSwap){if(i){const u=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}by!==void 0&&(l instanceof by?i=!0:l instanceof zF&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new vg(-1,1,1,-1,0,1);const lw=new Zn;lw.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3));lw.setAttribute("uv",new $t([0,2,0,0,2,0],2));class aO extends ka{constructor(e,t,i,r,o){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let o,l;this.overrideMaterial!==void 0&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=l),e.autoClear=r}}const mp={defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new Ze(.001953125,0)},cKernel:{value:[]}},vertexShader:`

		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float cKernel[ KERNEL_SIZE_INT ];

		uniform sampler2D tDiffuse;
		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vec2 imageCoord = vUv;
			vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );

			for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {

				sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];
				imageCoord += uImageIncrement;

			}

			gl_FragColor = sum;

		}`,buildKernel:function(n){let t=2*Math.ceil(n*3)+1;t>25&&(t=25);const i=(t-1)*.5,r=new Array(t);let o=0;for(let l=0;l<t;++l)r[l]=UF(l-i,n),o+=r[l];for(let l=0;l<t;++l)r[l]/=o;return r}};function UF(n,e){return Math.exp(-(n*n)/(2*e*e))}class wa extends ka{constructor(e=1,t=25,i=4,r=256){super(),this.renderTargetX=new hr(r,r),this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new hr(r,r),this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=nu.clone(gp.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new Ii({uniforms:this.combineUniforms,vertexShader:gp.vertexShader,fragmentShader:gp.fragmentShader,blending:um,transparent:!0}),mp===void 0&&console.error("THREE.BloomPass relies on ConvolutionShader");const o=mp;this.convolutionUniforms=nu.clone(o.uniforms),this.convolutionUniforms.uImageIncrement.value=wa.blurX,this.convolutionUniforms.cKernel.value=mp.buildKernel(i),this.materialConvolution=new Ii({uniforms:this.convolutionUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new Sg(null)}render(e,t,i,r,o){o&&e.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=i.texture,this.convolutionUniforms.uImageIncrement.value=wa.blurX,e.setRenderTarget(this.renderTargetX),e.clear(),this.fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=wa.blurY,e.setRenderTarget(this.renderTargetY),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,o&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.clear&&e.clear(),this.fsQuad.render(e)}}const gp={uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float strength;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = strength * texel;

		}`};wa.blurX=new Ze(.001953125,0);wa.blurY=new Ze(0,.001953125);const Cy={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		// control parameter
		uniform float time;

		uniform bool grayscale;

		// noise effect intensity value (0 = no effect, 1 = full effect)
		uniform float nIntensity;

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		uniform float sIntensity;

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		uniform float sCount;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

		// sample the source
			vec4 cTextureScreen = texture2D( tDiffuse, vUv );

		// make some noise
			float dx = rand( vUv + time );

		// add noise
			vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );

		// get us a sine and cosine
			vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );

		// add scanlines
			cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;

		// interpolate between source and result by intensity
			cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );

		// convert to grayscale if desired
			if( grayscale ) {

				cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );

			}

			gl_FragColor =  vec4( cResult, cTextureScreen.a );

		}`};class lO extends ka{constructor(e,t,i,r){super(),Cy===void 0&&console.error("THREE.FilmPass relies on FilmShader");const o=Cy;this.uniforms=nu.clone(o.uniforms),this.material=new Ii({uniforms:this.uniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),r!==void 0&&(this.uniforms.grayscale.value=r),e!==void 0&&(this.uniforms.nIntensity.value=e),t!==void 0&&(this.uniforms.sIntensity.value=t),i!==void 0&&(this.uniforms.sCount.value=i),this.fsQuad=new Sg(this.material)}render(e,t,i,r){this.uniforms.tDiffuse.value=i.texture,this.uniforms.time.value+=r,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}}const uO={uniforms:{tDiffuse:{value:null},screenWidth:{value:1024},screenHeight:{value:1024},sampleDistance:{value:.94},waveFactor:{value:.00125}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float screenWidth;
		uniform float screenHeight;
		uniform float sampleDistance;
		uniform float waveFactor;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 color, org, tmp, add;
			float sample_dist, f;
			vec2 vin;
			vec2 uv = vUv;

			add = color = org = texture2D( tDiffuse, uv );

			vin = ( uv - vec2( 0.5 ) ) * vec2( 1.4 );
			sample_dist = dot( vin, vin ) * 2.0;

			f = ( waveFactor * 100.0 + sample_dist ) * sampleDistance * 4.0;

			vec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2( f );

			add += tmp = texture2D( tDiffuse, uv + vec2( 0.111964, 0.993712 ) * sampleSize );
			if( tmp.b < color.b ) color = tmp;

			add += tmp = texture2D( tDiffuse, uv + vec2( 0.846724, 0.532032 ) * sampleSize );
			if( tmp.b < color.b ) color = tmp;

			add += tmp = texture2D( tDiffuse, uv + vec2( 0.943883, -0.330279 ) * sampleSize );
			if( tmp.b < color.b ) color = tmp;

			add += tmp = texture2D( tDiffuse, uv + vec2( 0.330279, -0.943883 ) * sampleSize );
			if( tmp.b < color.b ) color = tmp;

			add += tmp = texture2D( tDiffuse, uv + vec2( -0.532032, -0.846724 ) * sampleSize );
			if( tmp.b < color.b ) color = tmp;

			add += tmp = texture2D( tDiffuse, uv + vec2( -0.993712, -0.111964 ) * sampleSize );
			if( tmp.b < color.b ) color = tmp;

			add += tmp = texture2D( tDiffuse, uv + vec2( -0.707107, 0.707107 ) * sampleSize );
			if( tmp.b < color.b ) color = tmp;

			color = color * vec4( 2.0 ) - ( add / vec4( 8.0 ) );
			color = color + ( add / vec4( 8.0 ) - color ) * ( vec4( 1.0 ) - vec4( sample_dist * 0.5 ) );

			gl_FragColor = vec4( color.rgb * color.rgb * vec3( 0.95 ) + color.rgb, 1.0 );

		}`};var Fl={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}},Back:{In:function(n){var e=1.70158;return n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}},Bounce:{In:function(n){return 1-Fl.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Fl.Bounce.In(n*2)*.5:Fl.Bounce.Out(n*2-1)*.5+.5}}},El;typeof self>"u"&&typeof process<"u"&&process.hrtime?El=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?El=self.performance.now.bind(self.performance):Date.now!==void 0?El=Date.now:El=function(){return new Date().getTime()};var $s=El,uw=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=$s()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var o=this._tweens[i[r]],l=!t;o&&o.update(e,l)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),da={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),o=da.Utils.Linear;return e<0?o(n[0],n[1],i):e>1?o(n[t],n[t-1],t-i):o(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,o=da.Utils.Bernstein,l=0;l<=i;l++)t+=r(1-e,i-l)*r(e,l)*n[l]*o(i,l);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),o=da.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),o(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(o(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(o(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):o(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=da.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var o=(t-n)*.5,l=(i-e)*.5,u=r*r,f=r*u;return(2*e-2*t+o+l)*f+(-3*e+3*t-2*o-l)*u+o*r+e}}},wg=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),cw=new uw,kF=function(){function n(e,t){t===void 0&&(t=cw),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Fl.Linear.None,this._interpolationFunction=da.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=wg.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?$s()+parseFloat(e):e:$s(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},n.prototype._setupProperties=function(e,t,i,r){for(var o in i){var l=e[o],u=Array.isArray(l),f=u?"array":typeof l,h=!u&&Array.isArray(i[o]);if(!(f==="undefined"||f==="function")){if(h){var p=i[o];if(p.length===0)continue;p=p.map(this._handleRelativeValue.bind(this,l)),i[o]=[l].concat(p)}if((f==="object"||u)&&l&&!h){t[o]=u?[]:{};for(var d in l)t[o][d]=l[d];r[o]=u?[]:{},this._setupProperties(l,t[o],i[o],r[o])}else typeof t[o]>"u"&&(t[o]=l),u||(t[o]*=1),h?r[o]=i[o].slice().reverse():r[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=$s()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=$s()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return this._group=e,this},n.prototype.delay=function(e){return this._delayTime=e,this},n.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return this._yoyo=e,this},n.prototype.easing=function(e){return this._easingFunction=e,this},n.prototype.interpolation=function(e){return this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=$s()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var l=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,l),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var u=0,f=this._chainedTweens.length;u<f;u++)this._chainedTweens[u].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var o in i)if(t[o]!==void 0){var l=t[o]||0,u=i[o],f=Array.isArray(e[o]),h=Array.isArray(u),p=!f&&h;p?e[o]=this._interpolationFunction(u,r):typeof u=="object"&&u?this._updateProperties(e[o],l,u,r):(u=this._handleRelativeValue(l,u),typeof u=="number"&&(e[o]=l+(u-l)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),BF="18.6.4",GF=wg.nextId,dr=cw,WF=dr.getAll.bind(dr),VF=dr.removeAll.bind(dr),HF=dr.add.bind(dr),XF=dr.remove.bind(dr),qF=dr.update.bind(dr),cO={Easing:Fl,Group:uw,Interpolation:da,now:$s,Sequence:wg,nextId:GF,Tween:kF,VERSION:BF,getAll:WF,removeAll:VF,add:HF,remove:XF,update:qF},Ol=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(p){p.preventDefault(),i(++n%e.children.length)},!1);function t(p){return e.appendChild(p.dom),p}function i(p){for(var d=0;d<e.children.length;d++)e.children[d].style.display=d===p?"block":"none";n=p}var r=(performance||Date).now(),o=r,l=0,u=t(new Ol.Panel("FPS","#0ff","#002")),f=t(new Ol.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new Ol.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){l++;var p=(performance||Date).now();if(f.update(p-r,200),p>=o+1e3&&(u.update(l*1e3/(p-o),100),o=p,l=0,h)){var d=performance.memory;h.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return p},update:function(){r=this.end()},domElement:e,setMode:i}};Ol.Panel=function(n,e,t){var i=1/0,r=0,o=Math.round,l=o(window.devicePixelRatio||1),u=80*l,f=48*l,h=3*l,p=2*l,d=3*l,m=15*l,y=74*l,w=30*l,v=document.createElement("canvas");v.width=u,v.height=f,v.style.cssText="width:80px;height:48px";var _=v.getContext("2d");return _.font="bold "+9*l+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=t,_.fillRect(0,0,u,f),_.fillStyle=e,_.fillText(n,h,p),_.fillRect(d,m,y,w),_.fillStyle=t,_.globalAlpha=.9,_.fillRect(d,m,y,w),{dom:v,update:function(x,S){i=Math.min(i,x),r=Math.max(r,x),_.fillStyle=t,_.globalAlpha=1,_.fillRect(0,0,u,m),_.fillStyle=e,_.fillText(o(x)+" "+n+" ("+o(i)+"-"+o(r)+")",h,p),_.drawImage(v,d+l,m,y-l,w,d,m,y-l,w),_.fillRect(d+y-l,m,l,w),_.fillStyle=t,_.globalAlpha=.9,_.fillRect(d+y-l,m,l,o((1-x/S)*w))}}};const fO=Ol;var Ay={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(n,e){(function(){var t,i="4.17.21",r=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",d=1,m=2,y=4,w=1,v=2,_=1,x=2,S=4,E=8,T=16,A=32,R=64,O=128,b=256,F=512,V=30,ce="...",ge=800,Q=16,$=1,ae=2,he=3,de=1/0,G=9007199254740991,k=17976931348623157e292,W=0/0,le=4294967295,re=le-1,_e=le>>>1,be=[["ary",O],["bind",_],["bindKey",x],["curry",E],["curryRight",T],["flip",F],["partial",A],["partialRight",R],["rearg",b]],Ne="[object Arguments]",J="[object Array]",tt="[object AsyncFunction]",Ue="[object Boolean]",ke="[object Date]",Le="[object DOMException]",ct="[object Error]",qe="[object Function]",Oe="[object GeneratorFunction]",ht="[object Map]",It="[object Number]",Xt="[object Null]",Nt="[object Object]",Bt="[object Promise]",mt="[object Proxy]",an="[object RegExp]",At="[object Set]",I="[object String]",P="[object Symbol]",ee="[object Undefined]",pe="[object WeakMap]",ve="[object WeakSet]",we="[object ArrayBuffer]",Fe="[object DataView]",z="[object Float32Array]",Y="[object Float64Array]",Ee="[object Int8Array]",Re="[object Int16Array]",Ce="[object Int32Array]",Ie="[object Uint8Array]",He="[object Uint8ClampedArray]",ot="[object Uint16Array]",B="[object Uint32Array]",Te=/\b__p \+= '';/g,xe=/\b(__p \+=) '' \+/g,ue=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ye=/&(?:amp|lt|gt|quot|#39);/g,Ve=/[&<>"']/g,St=RegExp(ye.source),Ft=RegExp(Ve.source),er=/<%-([\s\S]+?)%>/g,Lt=/<%([\s\S]+?)%>/g,hi=/<%=([\s\S]+?)%>/g,Un=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$f=/^\w*$/,vo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xo=/[\\^$.*+?()[\]{}|]/g,Zf=RegExp(xo.source),Ba=/^\s+/,Kf=/\s/,D=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Z=/\{\n\/\* \[wrapped with (.+)\] \*/,ne=/,? & /,j=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ie=/[()=,{}\[\]\/\s]/,ze=/\\(\\)?/g,Xe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ke=/\w*$/,je=/^[-+]0x[0-9a-f]+$/i,gt=/^0b[01]+$/i,at=/^\[object .+?Constructor\]$/,lt=/^0o[0-7]+$/i,Pt=/^(?:0|[1-9]\d*)$/,pr=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ni=/($^)/,Xr=/['\n\r\u2028\u2029\\]/g,An="\\ud800-\\udfff",dt="\\u0300-\\u036f",qr="\\ufe20-\\ufe2f",Gt="\\u20d0-\\u20ff",Ln=dt+qr+Gt,Fi="\\u2700-\\u27bf",jr="a-z\\xdf-\\xf6\\xf8-\\xff",Ga="\\xac\\xb1\\xd7\\xf7",hn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",mr="\\u2000-\\u206f",Wa=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xn="A-Z\\xc0-\\xd6\\xd8-\\xde",yo="\\ufe0e\\ufe0f",du=Ga+hn+mr+Wa,So="['\u2019]",hw="["+An+"]",Mg="["+du+"]",pu="["+Ln+"]",Eg="\\d+",dw="["+Fi+"]",Tg="["+jr+"]",bg="[^"+An+du+Eg+Fi+jr+xn+"]",Qf="\\ud83c[\\udffb-\\udfff]",pw="(?:"+pu+"|"+Qf+")",Cg="[^"+An+"]",Jf="(?:\\ud83c[\\udde6-\\uddff]){2}",eh="[\\ud800-\\udbff][\\udc00-\\udfff]",wo="["+xn+"]",Ag="\\u200d",Lg="(?:"+Tg+"|"+bg+")",mw="(?:"+wo+"|"+bg+")",Pg="(?:"+So+"(?:d|ll|m|re|s|t|ve))?",Rg="(?:"+So+"(?:D|LL|M|RE|S|T|VE))?",Dg=pw+"?",Ig="["+yo+"]?",gw="(?:"+Ag+"(?:"+[Cg,Jf,eh].join("|")+")"+Ig+Dg+")*",_w="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vw="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ng=Ig+Dg+gw,xw="(?:"+[dw,Jf,eh].join("|")+")"+Ng,yw="(?:"+[Cg+pu+"?",pu,Jf,eh,hw].join("|")+")",Sw=RegExp(So,"g"),ww=RegExp(pu,"g"),th=RegExp(Qf+"(?="+Qf+")|"+yw+Ng,"g"),Mw=RegExp([wo+"?"+Tg+"+"+Pg+"(?="+[Mg,wo,"$"].join("|")+")",mw+"+"+Rg+"(?="+[Mg,wo+Lg,"$"].join("|")+")",wo+"?"+Lg+"+"+Pg,wo+"+"+Rg,vw,_w,Eg,xw].join("|"),"g"),Ew=RegExp("["+Ag+An+Ln+yo+"]"),Tw=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,bw=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Cw=-1,Tt={};Tt[z]=Tt[Y]=Tt[Ee]=Tt[Re]=Tt[Ce]=Tt[Ie]=Tt[He]=Tt[ot]=Tt[B]=!0,Tt[Ne]=Tt[J]=Tt[we]=Tt[Ue]=Tt[Fe]=Tt[ke]=Tt[ct]=Tt[qe]=Tt[ht]=Tt[It]=Tt[Nt]=Tt[an]=Tt[At]=Tt[I]=Tt[pe]=!1;var Mt={};Mt[Ne]=Mt[J]=Mt[we]=Mt[Fe]=Mt[Ue]=Mt[ke]=Mt[z]=Mt[Y]=Mt[Ee]=Mt[Re]=Mt[Ce]=Mt[ht]=Mt[It]=Mt[Nt]=Mt[an]=Mt[At]=Mt[I]=Mt[P]=Mt[Ie]=Mt[He]=Mt[ot]=Mt[B]=!0,Mt[ct]=Mt[qe]=Mt[pe]=!1;var Aw={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Lw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pw={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Rw={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Dw=parseFloat,Iw=parseInt,Fg=typeof rl=="object"&&rl&&rl.Object===Object&&rl,Nw=typeof self=="object"&&self&&self.Object===Object&&self,dn=Fg||Nw||Function("return this")(),nh=e&&!e.nodeType&&e,Ds=nh&&!0&&n&&!n.nodeType&&n,Og=Ds&&Ds.exports===nh,ih=Og&&Fg.process,di=function(){try{var H=Ds&&Ds.require&&Ds.require("util").types;return H||ih&&ih.binding&&ih.binding("util")}catch{}}(),zg=di&&di.isArrayBuffer,Ug=di&&di.isDate,kg=di&&di.isMap,Bg=di&&di.isRegExp,Gg=di&&di.isSet,Wg=di&&di.isTypedArray;function Kn(H,te,K){switch(K.length){case 0:return H.call(te);case 1:return H.call(te,K[0]);case 2:return H.call(te,K[0],K[1]);case 3:return H.call(te,K[0],K[1],K[2])}return H.apply(te,K)}function Fw(H,te,K,Ae){for(var Ye=-1,_t=H==null?0:H.length;++Ye<_t;){var Qt=H[Ye];te(Ae,Qt,K(Qt),H)}return Ae}function pi(H,te){for(var K=-1,Ae=H==null?0:H.length;++K<Ae&&te(H[K],K,H)!==!1;);return H}function Ow(H,te){for(var K=H==null?0:H.length;K--&&te(H[K],K,H)!==!1;);return H}function Vg(H,te){for(var K=-1,Ae=H==null?0:H.length;++K<Ae;)if(!te(H[K],K,H))return!1;return!0}function Yr(H,te){for(var K=-1,Ae=H==null?0:H.length,Ye=0,_t=[];++K<Ae;){var Qt=H[K];te(Qt,K,H)&&(_t[Ye++]=Qt)}return _t}function mu(H,te){var K=H==null?0:H.length;return!!K&&Mo(H,te,0)>-1}function rh(H,te,K){for(var Ae=-1,Ye=H==null?0:H.length;++Ae<Ye;)if(K(te,H[Ae]))return!0;return!1}function Rt(H,te){for(var K=-1,Ae=H==null?0:H.length,Ye=Array(Ae);++K<Ae;)Ye[K]=te(H[K],K,H);return Ye}function $r(H,te){for(var K=-1,Ae=te.length,Ye=H.length;++K<Ae;)H[Ye+K]=te[K];return H}function sh(H,te,K,Ae){var Ye=-1,_t=H==null?0:H.length;for(Ae&&_t&&(K=H[++Ye]);++Ye<_t;)K=te(K,H[Ye],Ye,H);return K}function zw(H,te,K,Ae){var Ye=H==null?0:H.length;for(Ae&&Ye&&(K=H[--Ye]);Ye--;)K=te(K,H[Ye],Ye,H);return K}function oh(H,te){for(var K=-1,Ae=H==null?0:H.length;++K<Ae;)if(te(H[K],K,H))return!0;return!1}var Uw=ah("length");function kw(H){return H.split("")}function Bw(H){return H.match(j)||[]}function Hg(H,te,K){var Ae;return K(H,function(Ye,_t,Qt){if(te(Ye,_t,Qt))return Ae=_t,!1}),Ae}function gu(H,te,K,Ae){for(var Ye=H.length,_t=K+(Ae?1:-1);Ae?_t--:++_t<Ye;)if(te(H[_t],_t,H))return _t;return-1}function Mo(H,te,K){return te===te?Qw(H,te,K):gu(H,Xg,K)}function Gw(H,te,K,Ae){for(var Ye=K-1,_t=H.length;++Ye<_t;)if(Ae(H[Ye],te))return Ye;return-1}function Xg(H){return H!==H}function qg(H,te){var K=H==null?0:H.length;return K?uh(H,te)/K:W}function ah(H){return function(te){return te==null?t:te[H]}}function lh(H){return function(te){return H==null?t:H[te]}}function jg(H,te,K,Ae,Ye){return Ye(H,function(_t,Qt,wt){K=Ae?(Ae=!1,_t):te(K,_t,Qt,wt)}),K}function Ww(H,te){var K=H.length;for(H.sort(te);K--;)H[K]=H[K].value;return H}function uh(H,te){for(var K,Ae=-1,Ye=H.length;++Ae<Ye;){var _t=te(H[Ae]);_t!==t&&(K=K===t?_t:K+_t)}return K}function ch(H,te){for(var K=-1,Ae=Array(H);++K<H;)Ae[K]=te(K);return Ae}function Vw(H,te){return Rt(te,function(K){return[K,H[K]]})}function Yg(H){return H&&H.slice(0,Qg(H)+1).replace(Ba,"")}function Qn(H){return function(te){return H(te)}}function fh(H,te){return Rt(te,function(K){return H[K]})}function Va(H,te){return H.has(te)}function $g(H,te){for(var K=-1,Ae=H.length;++K<Ae&&Mo(te,H[K],0)>-1;);return K}function Zg(H,te){for(var K=H.length;K--&&Mo(te,H[K],0)>-1;);return K}function Hw(H,te){for(var K=H.length,Ae=0;K--;)H[K]===te&&++Ae;return Ae}var Xw=lh(Aw),qw=lh(Lw);function jw(H){return"\\"+Rw[H]}function Yw(H,te){return H==null?t:H[te]}function Eo(H){return Ew.test(H)}function $w(H){return Tw.test(H)}function Zw(H){for(var te,K=[];!(te=H.next()).done;)K.push(te.value);return K}function hh(H){var te=-1,K=Array(H.size);return H.forEach(function(Ae,Ye){K[++te]=[Ye,Ae]}),K}function Kg(H,te){return function(K){return H(te(K))}}function Zr(H,te){for(var K=-1,Ae=H.length,Ye=0,_t=[];++K<Ae;){var Qt=H[K];(Qt===te||Qt===p)&&(H[K]=p,_t[Ye++]=K)}return _t}function _u(H){var te=-1,K=Array(H.size);return H.forEach(function(Ae){K[++te]=Ae}),K}function Kw(H){var te=-1,K=Array(H.size);return H.forEach(function(Ae){K[++te]=[Ae,Ae]}),K}function Qw(H,te,K){for(var Ae=K-1,Ye=H.length;++Ae<Ye;)if(H[Ae]===te)return Ae;return-1}function Jw(H,te,K){for(var Ae=K+1;Ae--;)if(H[Ae]===te)return Ae;return Ae}function To(H){return Eo(H)?tM(H):Uw(H)}function Oi(H){return Eo(H)?nM(H):kw(H)}function Qg(H){for(var te=H.length;te--&&Kf.test(H.charAt(te)););return te}var eM=lh(Pw);function tM(H){for(var te=th.lastIndex=0;th.test(H);)++te;return te}function nM(H){return H.match(th)||[]}function iM(H){return H.match(Mw)||[]}var rM=function H(te){te=te==null?dn:bo.defaults(dn.Object(),te,bo.pick(dn,bw));var K=te.Array,Ae=te.Date,Ye=te.Error,_t=te.Function,Qt=te.Math,wt=te.Object,dh=te.RegExp,sM=te.String,mi=te.TypeError,vu=K.prototype,oM=_t.prototype,Co=wt.prototype,xu=te["__core-js_shared__"],yu=oM.toString,xt=Co.hasOwnProperty,aM=0,Jg=function(){var s=/[^.]+$/.exec(xu&&xu.keys&&xu.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Su=Co.toString,lM=yu.call(wt),uM=dn._,cM=dh("^"+yu.call(xt).replace(xo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),wu=Og?te.Buffer:t,Kr=te.Symbol,Mu=te.Uint8Array,e0=wu?wu.allocUnsafe:t,Eu=Kg(wt.getPrototypeOf,wt),t0=wt.create,n0=Co.propertyIsEnumerable,Tu=vu.splice,i0=Kr?Kr.isConcatSpreadable:t,Ha=Kr?Kr.iterator:t,Is=Kr?Kr.toStringTag:t,bu=function(){try{var s=Us(wt,"defineProperty");return s({},"",{}),s}catch{}}(),fM=te.clearTimeout!==dn.clearTimeout&&te.clearTimeout,hM=Ae&&Ae.now!==dn.Date.now&&Ae.now,dM=te.setTimeout!==dn.setTimeout&&te.setTimeout,Cu=Qt.ceil,Au=Qt.floor,ph=wt.getOwnPropertySymbols,pM=wu?wu.isBuffer:t,r0=te.isFinite,mM=vu.join,gM=Kg(wt.keys,wt),Jt=Qt.max,yn=Qt.min,_M=Ae.now,vM=te.parseInt,s0=Qt.random,xM=vu.reverse,mh=Us(te,"DataView"),Xa=Us(te,"Map"),gh=Us(te,"Promise"),Ao=Us(te,"Set"),qa=Us(te,"WeakMap"),ja=Us(wt,"create"),Lu=qa&&new qa,Lo={},yM=ks(mh),SM=ks(Xa),wM=ks(gh),MM=ks(Ao),EM=ks(qa),Pu=Kr?Kr.prototype:t,Ya=Pu?Pu.valueOf:t,o0=Pu?Pu.toString:t;function C(s){if(Wt(s)&&!$e(s)&&!(s instanceof rt)){if(s instanceof gi)return s;if(xt.call(s,"__wrapped__"))return a_(s)}return new gi(s)}var Po=function(){function s(){}return function(a){if(!Ot(a))return{};if(t0)return t0(a);s.prototype=a;var c=new s;return s.prototype=t,c}}();function Ru(){}function gi(s,a){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=t}C.templateSettings={escape:er,evaluate:Lt,interpolate:hi,variable:"",imports:{_:C}},C.prototype=Ru.prototype,C.prototype.constructor=C,gi.prototype=Po(Ru.prototype),gi.prototype.constructor=gi;function rt(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=le,this.__views__=[]}function TM(){var s=new rt(this.__wrapped__);return s.__actions__=kn(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=kn(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=kn(this.__views__),s}function bM(){if(this.__filtered__){var s=new rt(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function CM(){var s=this.__wrapped__.value(),a=this.__dir__,c=$e(s),g=a<0,M=c?s.length:0,L=kE(0,M,this.__views__),N=L.start,U=L.end,X=U-N,se=g?U:N-1,oe=this.__iteratees__,fe=oe.length,Me=0,De=yn(X,this.__takeCount__);if(!c||!g&&M==X&&De==X)return P0(s,this.__actions__);var Ge=[];e:for(;X--&&Me<De;){se+=a;for(var Je=-1,We=s[se];++Je<fe;){var nt=oe[Je],ut=nt.iteratee,ti=nt.type,Dn=ut(We);if(ti==ae)We=Dn;else if(!Dn){if(ti==$)continue e;break e}}Ge[Me++]=We}return Ge}rt.prototype=Po(Ru.prototype),rt.prototype.constructor=rt;function Ns(s){var a=-1,c=s==null?0:s.length;for(this.clear();++a<c;){var g=s[a];this.set(g[0],g[1])}}function AM(){this.__data__=ja?ja(null):{},this.size=0}function LM(s){var a=this.has(s)&&delete this.__data__[s];return this.size-=a?1:0,a}function PM(s){var a=this.__data__;if(ja){var c=a[s];return c===f?t:c}return xt.call(a,s)?a[s]:t}function RM(s){var a=this.__data__;return ja?a[s]!==t:xt.call(a,s)}function DM(s,a){var c=this.__data__;return this.size+=this.has(s)?0:1,c[s]=ja&&a===t?f:a,this}Ns.prototype.clear=AM,Ns.prototype.delete=LM,Ns.prototype.get=PM,Ns.prototype.has=RM,Ns.prototype.set=DM;function gr(s){var a=-1,c=s==null?0:s.length;for(this.clear();++a<c;){var g=s[a];this.set(g[0],g[1])}}function IM(){this.__data__=[],this.size=0}function NM(s){var a=this.__data__,c=Du(a,s);if(c<0)return!1;var g=a.length-1;return c==g?a.pop():Tu.call(a,c,1),--this.size,!0}function FM(s){var a=this.__data__,c=Du(a,s);return c<0?t:a[c][1]}function OM(s){return Du(this.__data__,s)>-1}function zM(s,a){var c=this.__data__,g=Du(c,s);return g<0?(++this.size,c.push([s,a])):c[g][1]=a,this}gr.prototype.clear=IM,gr.prototype.delete=NM,gr.prototype.get=FM,gr.prototype.has=OM,gr.prototype.set=zM;function _r(s){var a=-1,c=s==null?0:s.length;for(this.clear();++a<c;){var g=s[a];this.set(g[0],g[1])}}function UM(){this.size=0,this.__data__={hash:new Ns,map:new(Xa||gr),string:new Ns}}function kM(s){var a=Hu(this,s).delete(s);return this.size-=a?1:0,a}function BM(s){return Hu(this,s).get(s)}function GM(s){return Hu(this,s).has(s)}function WM(s,a){var c=Hu(this,s),g=c.size;return c.set(s,a),this.size+=c.size==g?0:1,this}_r.prototype.clear=UM,_r.prototype.delete=kM,_r.prototype.get=BM,_r.prototype.has=GM,_r.prototype.set=WM;function Fs(s){var a=-1,c=s==null?0:s.length;for(this.__data__=new _r;++a<c;)this.add(s[a])}function VM(s){return this.__data__.set(s,f),this}function HM(s){return this.__data__.has(s)}Fs.prototype.add=Fs.prototype.push=VM,Fs.prototype.has=HM;function zi(s){var a=this.__data__=new gr(s);this.size=a.size}function XM(){this.__data__=new gr,this.size=0}function qM(s){var a=this.__data__,c=a.delete(s);return this.size=a.size,c}function jM(s){return this.__data__.get(s)}function YM(s){return this.__data__.has(s)}function $M(s,a){var c=this.__data__;if(c instanceof gr){var g=c.__data__;if(!Xa||g.length<r-1)return g.push([s,a]),this.size=++c.size,this;c=this.__data__=new _r(g)}return c.set(s,a),this.size=c.size,this}zi.prototype.clear=XM,zi.prototype.delete=qM,zi.prototype.get=jM,zi.prototype.has=YM,zi.prototype.set=$M;function a0(s,a){var c=$e(s),g=!c&&Bs(s),M=!c&&!g&&ns(s),L=!c&&!g&&!M&&No(s),N=c||g||M||L,U=N?ch(s.length,sM):[],X=U.length;for(var se in s)(a||xt.call(s,se))&&!(N&&(se=="length"||M&&(se=="offset"||se=="parent")||L&&(se=="buffer"||se=="byteLength"||se=="byteOffset")||Sr(se,X)))&&U.push(se);return U}function l0(s){var a=s.length;return a?s[Ch(0,a-1)]:t}function ZM(s,a){return Xu(kn(s),Os(a,0,s.length))}function KM(s){return Xu(kn(s))}function _h(s,a,c){(c!==t&&!Ui(s[a],c)||c===t&&!(a in s))&&vr(s,a,c)}function $a(s,a,c){var g=s[a];(!(xt.call(s,a)&&Ui(g,c))||c===t&&!(a in s))&&vr(s,a,c)}function Du(s,a){for(var c=s.length;c--;)if(Ui(s[c][0],a))return c;return-1}function QM(s,a,c,g){return Qr(s,function(M,L,N){a(g,M,c(M),N)}),g}function u0(s,a){return s&&nr(a,ln(a),s)}function JM(s,a){return s&&nr(a,Gn(a),s)}function vr(s,a,c){a=="__proto__"&&bu?bu(s,a,{configurable:!0,enumerable:!0,value:c,writable:!0}):s[a]=c}function vh(s,a){for(var c=-1,g=a.length,M=K(g),L=s==null;++c<g;)M[c]=L?t:Qh(s,a[c]);return M}function Os(s,a,c){return s===s&&(c!==t&&(s=s<=c?s:c),a!==t&&(s=s>=a?s:a)),s}function _i(s,a,c,g,M,L){var N,U=a&d,X=a&m,se=a&y;if(c&&(N=M?c(s,g,M,L):c(s)),N!==t)return N;if(!Ot(s))return s;var oe=$e(s);if(oe){if(N=GE(s),!U)return kn(s,N)}else{var fe=Sn(s),Me=fe==qe||fe==Oe;if(ns(s))return I0(s,U);if(fe==Nt||fe==Ne||Me&&!M){if(N=X||Me?{}:Q0(s),!U)return X?PE(s,JM(N,s)):LE(s,u0(N,s))}else{if(!Mt[fe])return M?s:{};N=WE(s,fe,U)}}L||(L=new zi);var De=L.get(s);if(De)return De;L.set(s,N),C_(s)?s.forEach(function(We){N.add(_i(We,a,c,We,s,L))}):T_(s)&&s.forEach(function(We,nt){N.set(nt,_i(We,a,c,nt,s,L))});var Ge=se?X?Uh:zh:X?Gn:ln,Je=oe?t:Ge(s);return pi(Je||s,function(We,nt){Je&&(nt=We,We=s[nt]),$a(N,nt,_i(We,a,c,nt,s,L))}),N}function eE(s){var a=ln(s);return function(c){return c0(c,s,a)}}function c0(s,a,c){var g=c.length;if(s==null)return!g;for(s=wt(s);g--;){var M=c[g],L=a[M],N=s[M];if(N===t&&!(M in s)||!L(N))return!1}return!0}function f0(s,a,c){if(typeof s!="function")throw new mi(l);return nl(function(){s.apply(t,c)},a)}function Za(s,a,c,g){var M=-1,L=mu,N=!0,U=s.length,X=[],se=a.length;if(!U)return X;c&&(a=Rt(a,Qn(c))),g?(L=rh,N=!1):a.length>=r&&(L=Va,N=!1,a=new Fs(a));e:for(;++M<U;){var oe=s[M],fe=c==null?oe:c(oe);if(oe=g||oe!==0?oe:0,N&&fe===fe){for(var Me=se;Me--;)if(a[Me]===fe)continue e;X.push(oe)}else L(a,fe,g)||X.push(oe)}return X}var Qr=U0(tr),h0=U0(yh,!0);function tE(s,a){var c=!0;return Qr(s,function(g,M,L){return c=!!a(g,M,L),c}),c}function Iu(s,a,c){for(var g=-1,M=s.length;++g<M;){var L=s[g],N=a(L);if(N!=null&&(U===t?N===N&&!ei(N):c(N,U)))var U=N,X=L}return X}function nE(s,a,c,g){var M=s.length;for(c=Qe(c),c<0&&(c=-c>M?0:M+c),g=g===t||g>M?M:Qe(g),g<0&&(g+=M),g=c>g?0:L_(g);c<g;)s[c++]=a;return s}function d0(s,a){var c=[];return Qr(s,function(g,M,L){a(g,M,L)&&c.push(g)}),c}function pn(s,a,c,g,M){var L=-1,N=s.length;for(c||(c=HE),M||(M=[]);++L<N;){var U=s[L];a>0&&c(U)?a>1?pn(U,a-1,c,g,M):$r(M,U):g||(M[M.length]=U)}return M}var xh=k0(),p0=k0(!0);function tr(s,a){return s&&xh(s,a,ln)}function yh(s,a){return s&&p0(s,a,ln)}function Nu(s,a){return Yr(a,function(c){return wr(s[c])})}function zs(s,a){a=es(a,s);for(var c=0,g=a.length;s!=null&&c<g;)s=s[ir(a[c++])];return c&&c==g?s:t}function m0(s,a,c){var g=a(s);return $e(s)?g:$r(g,c(s))}function Pn(s){return s==null?s===t?ee:Xt:Is&&Is in wt(s)?UE(s):KE(s)}function Sh(s,a){return s>a}function iE(s,a){return s!=null&&xt.call(s,a)}function rE(s,a){return s!=null&&a in wt(s)}function sE(s,a,c){return s>=yn(a,c)&&s<Jt(a,c)}function wh(s,a,c){for(var g=c?rh:mu,M=s[0].length,L=s.length,N=L,U=K(L),X=1/0,se=[];N--;){var oe=s[N];N&&a&&(oe=Rt(oe,Qn(a))),X=yn(oe.length,X),U[N]=!c&&(a||M>=120&&oe.length>=120)?new Fs(N&&oe):t}oe=s[0];var fe=-1,Me=U[0];e:for(;++fe<M&&se.length<X;){var De=oe[fe],Ge=a?a(De):De;if(De=c||De!==0?De:0,!(Me?Va(Me,Ge):g(se,Ge,c))){for(N=L;--N;){var Je=U[N];if(!(Je?Va(Je,Ge):g(s[N],Ge,c)))continue e}Me&&Me.push(Ge),se.push(De)}}return se}function oE(s,a,c,g){return tr(s,function(M,L,N){a(g,c(M),L,N)}),g}function Ka(s,a,c){a=es(a,s),s=n_(s,a);var g=s==null?s:s[ir(xi(a))];return g==null?t:Kn(g,s,c)}function g0(s){return Wt(s)&&Pn(s)==Ne}function aE(s){return Wt(s)&&Pn(s)==we}function lE(s){return Wt(s)&&Pn(s)==ke}function Qa(s,a,c,g,M){return s===a?!0:s==null||a==null||!Wt(s)&&!Wt(a)?s!==s&&a!==a:uE(s,a,c,g,Qa,M)}function uE(s,a,c,g,M,L){var N=$e(s),U=$e(a),X=N?J:Sn(s),se=U?J:Sn(a);X=X==Ne?Nt:X,se=se==Ne?Nt:se;var oe=X==Nt,fe=se==Nt,Me=X==se;if(Me&&ns(s)){if(!ns(a))return!1;N=!0,oe=!1}if(Me&&!oe)return L||(L=new zi),N||No(s)?$0(s,a,c,g,M,L):OE(s,a,X,c,g,M,L);if(!(c&w)){var De=oe&&xt.call(s,"__wrapped__"),Ge=fe&&xt.call(a,"__wrapped__");if(De||Ge){var Je=De?s.value():s,We=Ge?a.value():a;return L||(L=new zi),M(Je,We,c,g,L)}}return Me?(L||(L=new zi),zE(s,a,c,g,M,L)):!1}function cE(s){return Wt(s)&&Sn(s)==ht}function Mh(s,a,c,g){var M=c.length,L=M,N=!g;if(s==null)return!L;for(s=wt(s);M--;){var U=c[M];if(N&&U[2]?U[1]!==s[U[0]]:!(U[0]in s))return!1}for(;++M<L;){U=c[M];var X=U[0],se=s[X],oe=U[1];if(N&&U[2]){if(se===t&&!(X in s))return!1}else{var fe=new zi;if(g)var Me=g(se,oe,X,s,a,fe);if(!(Me===t?Qa(oe,se,w|v,g,fe):Me))return!1}}return!0}function _0(s){if(!Ot(s)||qE(s))return!1;var a=wr(s)?cM:at;return a.test(ks(s))}function fE(s){return Wt(s)&&Pn(s)==an}function hE(s){return Wt(s)&&Sn(s)==At}function dE(s){return Wt(s)&&Ku(s.length)&&!!Tt[Pn(s)]}function v0(s){return typeof s=="function"?s:s==null?Wn:typeof s=="object"?$e(s)?S0(s[0],s[1]):y0(s):B_(s)}function Eh(s){if(!tl(s))return gM(s);var a=[];for(var c in wt(s))xt.call(s,c)&&c!="constructor"&&a.push(c);return a}function pE(s){if(!Ot(s))return ZE(s);var a=tl(s),c=[];for(var g in s)g=="constructor"&&(a||!xt.call(s,g))||c.push(g);return c}function Th(s,a){return s<a}function x0(s,a){var c=-1,g=Bn(s)?K(s.length):[];return Qr(s,function(M,L,N){g[++c]=a(M,L,N)}),g}function y0(s){var a=Bh(s);return a.length==1&&a[0][2]?e_(a[0][0],a[0][1]):function(c){return c===s||Mh(c,s,a)}}function S0(s,a){return Wh(s)&&J0(a)?e_(ir(s),a):function(c){var g=Qh(c,s);return g===t&&g===a?Jh(c,s):Qa(a,g,w|v)}}function Fu(s,a,c,g,M){s!==a&&xh(a,function(L,N){if(M||(M=new zi),Ot(L))mE(s,a,N,c,Fu,g,M);else{var U=g?g(Hh(s,N),L,N+"",s,a,M):t;U===t&&(U=L),_h(s,N,U)}},Gn)}function mE(s,a,c,g,M,L,N){var U=Hh(s,c),X=Hh(a,c),se=N.get(X);if(se){_h(s,c,se);return}var oe=L?L(U,X,c+"",s,a,N):t,fe=oe===t;if(fe){var Me=$e(X),De=!Me&&ns(X),Ge=!Me&&!De&&No(X);oe=X,Me||De||Ge?$e(U)?oe=U:qt(U)?oe=kn(U):De?(fe=!1,oe=I0(X,!0)):Ge?(fe=!1,oe=N0(X,!0)):oe=[]:il(X)||Bs(X)?(oe=U,Bs(U)?oe=P_(U):(!Ot(U)||wr(U))&&(oe=Q0(X))):fe=!1}fe&&(N.set(X,oe),M(oe,X,g,L,N),N.delete(X)),_h(s,c,oe)}function w0(s,a){var c=s.length;if(!!c)return a+=a<0?c:0,Sr(a,c)?s[a]:t}function M0(s,a,c){a.length?a=Rt(a,function(L){return $e(L)?function(N){return zs(N,L.length===1?L[0]:L)}:L}):a=[Wn];var g=-1;a=Rt(a,Qn(Be()));var M=x0(s,function(L,N,U){var X=Rt(a,function(se){return se(L)});return{criteria:X,index:++g,value:L}});return Ww(M,function(L,N){return AE(L,N,c)})}function gE(s,a){return E0(s,a,function(c,g){return Jh(s,g)})}function E0(s,a,c){for(var g=-1,M=a.length,L={};++g<M;){var N=a[g],U=zs(s,N);c(U,N)&&Ja(L,es(N,s),U)}return L}function _E(s){return function(a){return zs(a,s)}}function bh(s,a,c,g){var M=g?Gw:Mo,L=-1,N=a.length,U=s;for(s===a&&(a=kn(a)),c&&(U=Rt(s,Qn(c)));++L<N;)for(var X=0,se=a[L],oe=c?c(se):se;(X=M(U,oe,X,g))>-1;)U!==s&&Tu.call(U,X,1),Tu.call(s,X,1);return s}function T0(s,a){for(var c=s?a.length:0,g=c-1;c--;){var M=a[c];if(c==g||M!==L){var L=M;Sr(M)?Tu.call(s,M,1):Ph(s,M)}}return s}function Ch(s,a){return s+Au(s0()*(a-s+1))}function vE(s,a,c,g){for(var M=-1,L=Jt(Cu((a-s)/(c||1)),0),N=K(L);L--;)N[g?L:++M]=s,s+=c;return N}function Ah(s,a){var c="";if(!s||a<1||a>G)return c;do a%2&&(c+=s),a=Au(a/2),a&&(s+=s);while(a);return c}function et(s,a){return Xh(t_(s,a,Wn),s+"")}function xE(s){return l0(Fo(s))}function yE(s,a){var c=Fo(s);return Xu(c,Os(a,0,c.length))}function Ja(s,a,c,g){if(!Ot(s))return s;a=es(a,s);for(var M=-1,L=a.length,N=L-1,U=s;U!=null&&++M<L;){var X=ir(a[M]),se=c;if(X==="__proto__"||X==="constructor"||X==="prototype")return s;if(M!=N){var oe=U[X];se=g?g(oe,X,U):t,se===t&&(se=Ot(oe)?oe:Sr(a[M+1])?[]:{})}$a(U,X,se),U=U[X]}return s}var b0=Lu?function(s,a){return Lu.set(s,a),s}:Wn,SE=bu?function(s,a){return bu(s,"toString",{configurable:!0,enumerable:!1,value:td(a),writable:!0})}:Wn;function wE(s){return Xu(Fo(s))}function vi(s,a,c){var g=-1,M=s.length;a<0&&(a=-a>M?0:M+a),c=c>M?M:c,c<0&&(c+=M),M=a>c?0:c-a>>>0,a>>>=0;for(var L=K(M);++g<M;)L[g]=s[g+a];return L}function ME(s,a){var c;return Qr(s,function(g,M,L){return c=a(g,M,L),!c}),!!c}function Ou(s,a,c){var g=0,M=s==null?g:s.length;if(typeof a=="number"&&a===a&&M<=_e){for(;g<M;){var L=g+M>>>1,N=s[L];N!==null&&!ei(N)&&(c?N<=a:N<a)?g=L+1:M=L}return M}return Lh(s,a,Wn,c)}function Lh(s,a,c,g){var M=0,L=s==null?0:s.length;if(L===0)return 0;a=c(a);for(var N=a!==a,U=a===null,X=ei(a),se=a===t;M<L;){var oe=Au((M+L)/2),fe=c(s[oe]),Me=fe!==t,De=fe===null,Ge=fe===fe,Je=ei(fe);if(N)var We=g||Ge;else se?We=Ge&&(g||Me):U?We=Ge&&Me&&(g||!De):X?We=Ge&&Me&&!De&&(g||!Je):De||Je?We=!1:We=g?fe<=a:fe<a;We?M=oe+1:L=oe}return yn(L,re)}function C0(s,a){for(var c=-1,g=s.length,M=0,L=[];++c<g;){var N=s[c],U=a?a(N):N;if(!c||!Ui(U,X)){var X=U;L[M++]=N===0?0:N}}return L}function A0(s){return typeof s=="number"?s:ei(s)?W:+s}function Jn(s){if(typeof s=="string")return s;if($e(s))return Rt(s,Jn)+"";if(ei(s))return o0?o0.call(s):"";var a=s+"";return a=="0"&&1/s==-de?"-0":a}function Jr(s,a,c){var g=-1,M=mu,L=s.length,N=!0,U=[],X=U;if(c)N=!1,M=rh;else if(L>=r){var se=a?null:NE(s);if(se)return _u(se);N=!1,M=Va,X=new Fs}else X=a?[]:U;e:for(;++g<L;){var oe=s[g],fe=a?a(oe):oe;if(oe=c||oe!==0?oe:0,N&&fe===fe){for(var Me=X.length;Me--;)if(X[Me]===fe)continue e;a&&X.push(fe),U.push(oe)}else M(X,fe,c)||(X!==U&&X.push(fe),U.push(oe))}return U}function Ph(s,a){return a=es(a,s),s=n_(s,a),s==null||delete s[ir(xi(a))]}function L0(s,a,c,g){return Ja(s,a,c(zs(s,a)),g)}function zu(s,a,c,g){for(var M=s.length,L=g?M:-1;(g?L--:++L<M)&&a(s[L],L,s););return c?vi(s,g?0:L,g?L+1:M):vi(s,g?L+1:0,g?M:L)}function P0(s,a){var c=s;return c instanceof rt&&(c=c.value()),sh(a,function(g,M){return M.func.apply(M.thisArg,$r([g],M.args))},c)}function Rh(s,a,c){var g=s.length;if(g<2)return g?Jr(s[0]):[];for(var M=-1,L=K(g);++M<g;)for(var N=s[M],U=-1;++U<g;)U!=M&&(L[M]=Za(L[M]||N,s[U],a,c));return Jr(pn(L,1),a,c)}function R0(s,a,c){for(var g=-1,M=s.length,L=a.length,N={};++g<M;){var U=g<L?a[g]:t;c(N,s[g],U)}return N}function Dh(s){return qt(s)?s:[]}function Ih(s){return typeof s=="function"?s:Wn}function es(s,a){return $e(s)?s:Wh(s,a)?[s]:o_(vt(s))}var EE=et;function ts(s,a,c){var g=s.length;return c=c===t?g:c,!a&&c>=g?s:vi(s,a,c)}var D0=fM||function(s){return dn.clearTimeout(s)};function I0(s,a){if(a)return s.slice();var c=s.length,g=e0?e0(c):new s.constructor(c);return s.copy(g),g}function Nh(s){var a=new s.constructor(s.byteLength);return new Mu(a).set(new Mu(s)),a}function TE(s,a){var c=a?Nh(s.buffer):s.buffer;return new s.constructor(c,s.byteOffset,s.byteLength)}function bE(s){var a=new s.constructor(s.source,Ke.exec(s));return a.lastIndex=s.lastIndex,a}function CE(s){return Ya?wt(Ya.call(s)):{}}function N0(s,a){var c=a?Nh(s.buffer):s.buffer;return new s.constructor(c,s.byteOffset,s.length)}function F0(s,a){if(s!==a){var c=s!==t,g=s===null,M=s===s,L=ei(s),N=a!==t,U=a===null,X=a===a,se=ei(a);if(!U&&!se&&!L&&s>a||L&&N&&X&&!U&&!se||g&&N&&X||!c&&X||!M)return 1;if(!g&&!L&&!se&&s<a||se&&c&&M&&!g&&!L||U&&c&&M||!N&&M||!X)return-1}return 0}function AE(s,a,c){for(var g=-1,M=s.criteria,L=a.criteria,N=M.length,U=c.length;++g<N;){var X=F0(M[g],L[g]);if(X){if(g>=U)return X;var se=c[g];return X*(se=="desc"?-1:1)}}return s.index-a.index}function O0(s,a,c,g){for(var M=-1,L=s.length,N=c.length,U=-1,X=a.length,se=Jt(L-N,0),oe=K(X+se),fe=!g;++U<X;)oe[U]=a[U];for(;++M<N;)(fe||M<L)&&(oe[c[M]]=s[M]);for(;se--;)oe[U++]=s[M++];return oe}function z0(s,a,c,g){for(var M=-1,L=s.length,N=-1,U=c.length,X=-1,se=a.length,oe=Jt(L-U,0),fe=K(oe+se),Me=!g;++M<oe;)fe[M]=s[M];for(var De=M;++X<se;)fe[De+X]=a[X];for(;++N<U;)(Me||M<L)&&(fe[De+c[N]]=s[M++]);return fe}function kn(s,a){var c=-1,g=s.length;for(a||(a=K(g));++c<g;)a[c]=s[c];return a}function nr(s,a,c,g){var M=!c;c||(c={});for(var L=-1,N=a.length;++L<N;){var U=a[L],X=g?g(c[U],s[U],U,c,s):t;X===t&&(X=s[U]),M?vr(c,U,X):$a(c,U,X)}return c}function LE(s,a){return nr(s,Gh(s),a)}function PE(s,a){return nr(s,Z0(s),a)}function Uu(s,a){return function(c,g){var M=$e(c)?Fw:QM,L=a?a():{};return M(c,s,Be(g,2),L)}}function Ro(s){return et(function(a,c){var g=-1,M=c.length,L=M>1?c[M-1]:t,N=M>2?c[2]:t;for(L=s.length>3&&typeof L=="function"?(M--,L):t,N&&Rn(c[0],c[1],N)&&(L=M<3?t:L,M=1),a=wt(a);++g<M;){var U=c[g];U&&s(a,U,g,L)}return a})}function U0(s,a){return function(c,g){if(c==null)return c;if(!Bn(c))return s(c,g);for(var M=c.length,L=a?M:-1,N=wt(c);(a?L--:++L<M)&&g(N[L],L,N)!==!1;);return c}}function k0(s){return function(a,c,g){for(var M=-1,L=wt(a),N=g(a),U=N.length;U--;){var X=N[s?U:++M];if(c(L[X],X,L)===!1)break}return a}}function RE(s,a,c){var g=a&_,M=el(s);function L(){var N=this&&this!==dn&&this instanceof L?M:s;return N.apply(g?c:this,arguments)}return L}function B0(s){return function(a){a=vt(a);var c=Eo(a)?Oi(a):t,g=c?c[0]:a.charAt(0),M=c?ts(c,1).join(""):a.slice(1);return g[s]()+M}}function Do(s){return function(a){return sh(U_(z_(a).replace(Sw,"")),s,"")}}function el(s){return function(){var a=arguments;switch(a.length){case 0:return new s;case 1:return new s(a[0]);case 2:return new s(a[0],a[1]);case 3:return new s(a[0],a[1],a[2]);case 4:return new s(a[0],a[1],a[2],a[3]);case 5:return new s(a[0],a[1],a[2],a[3],a[4]);case 6:return new s(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new s(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var c=Po(s.prototype),g=s.apply(c,a);return Ot(g)?g:c}}function DE(s,a,c){var g=el(s);function M(){for(var L=arguments.length,N=K(L),U=L,X=Io(M);U--;)N[U]=arguments[U];var se=L<3&&N[0]!==X&&N[L-1]!==X?[]:Zr(N,X);if(L-=se.length,L<c)return X0(s,a,ku,M.placeholder,t,N,se,t,t,c-L);var oe=this&&this!==dn&&this instanceof M?g:s;return Kn(oe,this,N)}return M}function G0(s){return function(a,c,g){var M=wt(a);if(!Bn(a)){var L=Be(c,3);a=ln(a),c=function(U){return L(M[U],U,M)}}var N=s(a,c,g);return N>-1?M[L?a[N]:N]:t}}function W0(s){return yr(function(a){var c=a.length,g=c,M=gi.prototype.thru;for(s&&a.reverse();g--;){var L=a[g];if(typeof L!="function")throw new mi(l);if(M&&!N&&Vu(L)=="wrapper")var N=new gi([],!0)}for(g=N?g:c;++g<c;){L=a[g];var U=Vu(L),X=U=="wrapper"?kh(L):t;X&&Vh(X[0])&&X[1]==(O|E|A|b)&&!X[4].length&&X[9]==1?N=N[Vu(X[0])].apply(N,X[3]):N=L.length==1&&Vh(L)?N[U]():N.thru(L)}return function(){var se=arguments,oe=se[0];if(N&&se.length==1&&$e(oe))return N.plant(oe).value();for(var fe=0,Me=c?a[fe].apply(this,se):oe;++fe<c;)Me=a[fe].call(this,Me);return Me}})}function ku(s,a,c,g,M,L,N,U,X,se){var oe=a&O,fe=a&_,Me=a&x,De=a&(E|T),Ge=a&F,Je=Me?t:el(s);function We(){for(var nt=arguments.length,ut=K(nt),ti=nt;ti--;)ut[ti]=arguments[ti];if(De)var Dn=Io(We),ni=Hw(ut,Dn);if(g&&(ut=O0(ut,g,M,De)),L&&(ut=z0(ut,L,N,De)),nt-=ni,De&&nt<se){var jt=Zr(ut,Dn);return X0(s,a,ku,We.placeholder,c,ut,jt,U,X,se-nt)}var ki=fe?c:this,Er=Me?ki[s]:s;return nt=ut.length,U?ut=QE(ut,U):Ge&&nt>1&&ut.reverse(),oe&&X<nt&&(ut.length=X),this&&this!==dn&&this instanceof We&&(Er=Je||el(Er)),Er.apply(ki,ut)}return We}function V0(s,a){return function(c,g){return oE(c,s,a(g),{})}}function Bu(s,a){return function(c,g){var M;if(c===t&&g===t)return a;if(c!==t&&(M=c),g!==t){if(M===t)return g;typeof c=="string"||typeof g=="string"?(c=Jn(c),g=Jn(g)):(c=A0(c),g=A0(g)),M=s(c,g)}return M}}function Fh(s){return yr(function(a){return a=Rt(a,Qn(Be())),et(function(c){var g=this;return s(a,function(M){return Kn(M,g,c)})})})}function Gu(s,a){a=a===t?" ":Jn(a);var c=a.length;if(c<2)return c?Ah(a,s):a;var g=Ah(a,Cu(s/To(a)));return Eo(a)?ts(Oi(g),0,s).join(""):g.slice(0,s)}function IE(s,a,c,g){var M=a&_,L=el(s);function N(){for(var U=-1,X=arguments.length,se=-1,oe=g.length,fe=K(oe+X),Me=this&&this!==dn&&this instanceof N?L:s;++se<oe;)fe[se]=g[se];for(;X--;)fe[se++]=arguments[++U];return Kn(Me,M?c:this,fe)}return N}function H0(s){return function(a,c,g){return g&&typeof g!="number"&&Rn(a,c,g)&&(c=g=t),a=Mr(a),c===t?(c=a,a=0):c=Mr(c),g=g===t?a<c?1:-1:Mr(g),vE(a,c,g,s)}}function Wu(s){return function(a,c){return typeof a=="string"&&typeof c=="string"||(a=yi(a),c=yi(c)),s(a,c)}}function X0(s,a,c,g,M,L,N,U,X,se){var oe=a&E,fe=oe?N:t,Me=oe?t:N,De=oe?L:t,Ge=oe?t:L;a|=oe?A:R,a&=~(oe?R:A),a&S||(a&=~(_|x));var Je=[s,a,M,De,fe,Ge,Me,U,X,se],We=c.apply(t,Je);return Vh(s)&&i_(We,Je),We.placeholder=g,r_(We,s,a)}function Oh(s){var a=Qt[s];return function(c,g){if(c=yi(c),g=g==null?0:yn(Qe(g),292),g&&r0(c)){var M=(vt(c)+"e").split("e"),L=a(M[0]+"e"+(+M[1]+g));return M=(vt(L)+"e").split("e"),+(M[0]+"e"+(+M[1]-g))}return a(c)}}var NE=Ao&&1/_u(new Ao([,-0]))[1]==de?function(s){return new Ao(s)}:rd;function q0(s){return function(a){var c=Sn(a);return c==ht?hh(a):c==At?Kw(a):Vw(a,s(a))}}function xr(s,a,c,g,M,L,N,U){var X=a&x;if(!X&&typeof s!="function")throw new mi(l);var se=g?g.length:0;if(se||(a&=~(A|R),g=M=t),N=N===t?N:Jt(Qe(N),0),U=U===t?U:Qe(U),se-=M?M.length:0,a&R){var oe=g,fe=M;g=M=t}var Me=X?t:kh(s),De=[s,a,c,g,M,oe,fe,L,N,U];if(Me&&$E(De,Me),s=De[0],a=De[1],c=De[2],g=De[3],M=De[4],U=De[9]=De[9]===t?X?0:s.length:Jt(De[9]-se,0),!U&&a&(E|T)&&(a&=~(E|T)),!a||a==_)var Ge=RE(s,a,c);else a==E||a==T?Ge=DE(s,a,U):(a==A||a==(_|A))&&!M.length?Ge=IE(s,a,c,g):Ge=ku.apply(t,De);var Je=Me?b0:i_;return r_(Je(Ge,De),s,a)}function j0(s,a,c,g){return s===t||Ui(s,Co[c])&&!xt.call(g,c)?a:s}function Y0(s,a,c,g,M,L){return Ot(s)&&Ot(a)&&(L.set(a,s),Fu(s,a,t,Y0,L),L.delete(a)),s}function FE(s){return il(s)?t:s}function $0(s,a,c,g,M,L){var N=c&w,U=s.length,X=a.length;if(U!=X&&!(N&&X>U))return!1;var se=L.get(s),oe=L.get(a);if(se&&oe)return se==a&&oe==s;var fe=-1,Me=!0,De=c&v?new Fs:t;for(L.set(s,a),L.set(a,s);++fe<U;){var Ge=s[fe],Je=a[fe];if(g)var We=N?g(Je,Ge,fe,a,s,L):g(Ge,Je,fe,s,a,L);if(We!==t){if(We)continue;Me=!1;break}if(De){if(!oh(a,function(nt,ut){if(!Va(De,ut)&&(Ge===nt||M(Ge,nt,c,g,L)))return De.push(ut)})){Me=!1;break}}else if(!(Ge===Je||M(Ge,Je,c,g,L))){Me=!1;break}}return L.delete(s),L.delete(a),Me}function OE(s,a,c,g,M,L,N){switch(c){case Fe:if(s.byteLength!=a.byteLength||s.byteOffset!=a.byteOffset)return!1;s=s.buffer,a=a.buffer;case we:return!(s.byteLength!=a.byteLength||!L(new Mu(s),new Mu(a)));case Ue:case ke:case It:return Ui(+s,+a);case ct:return s.name==a.name&&s.message==a.message;case an:case I:return s==a+"";case ht:var U=hh;case At:var X=g&w;if(U||(U=_u),s.size!=a.size&&!X)return!1;var se=N.get(s);if(se)return se==a;g|=v,N.set(s,a);var oe=$0(U(s),U(a),g,M,L,N);return N.delete(s),oe;case P:if(Ya)return Ya.call(s)==Ya.call(a)}return!1}function zE(s,a,c,g,M,L){var N=c&w,U=zh(s),X=U.length,se=zh(a),oe=se.length;if(X!=oe&&!N)return!1;for(var fe=X;fe--;){var Me=U[fe];if(!(N?Me in a:xt.call(a,Me)))return!1}var De=L.get(s),Ge=L.get(a);if(De&&Ge)return De==a&&Ge==s;var Je=!0;L.set(s,a),L.set(a,s);for(var We=N;++fe<X;){Me=U[fe];var nt=s[Me],ut=a[Me];if(g)var ti=N?g(ut,nt,Me,a,s,L):g(nt,ut,Me,s,a,L);if(!(ti===t?nt===ut||M(nt,ut,c,g,L):ti)){Je=!1;break}We||(We=Me=="constructor")}if(Je&&!We){var Dn=s.constructor,ni=a.constructor;Dn!=ni&&"constructor"in s&&"constructor"in a&&!(typeof Dn=="function"&&Dn instanceof Dn&&typeof ni=="function"&&ni instanceof ni)&&(Je=!1)}return L.delete(s),L.delete(a),Je}function yr(s){return Xh(t_(s,t,c_),s+"")}function zh(s){return m0(s,ln,Gh)}function Uh(s){return m0(s,Gn,Z0)}var kh=Lu?function(s){return Lu.get(s)}:rd;function Vu(s){for(var a=s.name+"",c=Lo[a],g=xt.call(Lo,a)?c.length:0;g--;){var M=c[g],L=M.func;if(L==null||L==s)return M.name}return a}function Io(s){var a=xt.call(C,"placeholder")?C:s;return a.placeholder}function Be(){var s=C.iteratee||nd;return s=s===nd?v0:s,arguments.length?s(arguments[0],arguments[1]):s}function Hu(s,a){var c=s.__data__;return XE(a)?c[typeof a=="string"?"string":"hash"]:c.map}function Bh(s){for(var a=ln(s),c=a.length;c--;){var g=a[c],M=s[g];a[c]=[g,M,J0(M)]}return a}function Us(s,a){var c=Yw(s,a);return _0(c)?c:t}function UE(s){var a=xt.call(s,Is),c=s[Is];try{s[Is]=t;var g=!0}catch{}var M=Su.call(s);return g&&(a?s[Is]=c:delete s[Is]),M}var Gh=ph?function(s){return s==null?[]:(s=wt(s),Yr(ph(s),function(a){return n0.call(s,a)}))}:sd,Z0=ph?function(s){for(var a=[];s;)$r(a,Gh(s)),s=Eu(s);return a}:sd,Sn=Pn;(mh&&Sn(new mh(new ArrayBuffer(1)))!=Fe||Xa&&Sn(new Xa)!=ht||gh&&Sn(gh.resolve())!=Bt||Ao&&Sn(new Ao)!=At||qa&&Sn(new qa)!=pe)&&(Sn=function(s){var a=Pn(s),c=a==Nt?s.constructor:t,g=c?ks(c):"";if(g)switch(g){case yM:return Fe;case SM:return ht;case wM:return Bt;case MM:return At;case EM:return pe}return a});function kE(s,a,c){for(var g=-1,M=c.length;++g<M;){var L=c[g],N=L.size;switch(L.type){case"drop":s+=N;break;case"dropRight":a-=N;break;case"take":a=yn(a,s+N);break;case"takeRight":s=Jt(s,a-N);break}}return{start:s,end:a}}function BE(s){var a=s.match(Z);return a?a[1].split(ne):[]}function K0(s,a,c){a=es(a,s);for(var g=-1,M=a.length,L=!1;++g<M;){var N=ir(a[g]);if(!(L=s!=null&&c(s,N)))break;s=s[N]}return L||++g!=M?L:(M=s==null?0:s.length,!!M&&Ku(M)&&Sr(N,M)&&($e(s)||Bs(s)))}function GE(s){var a=s.length,c=new s.constructor(a);return a&&typeof s[0]=="string"&&xt.call(s,"index")&&(c.index=s.index,c.input=s.input),c}function Q0(s){return typeof s.constructor=="function"&&!tl(s)?Po(Eu(s)):{}}function WE(s,a,c){var g=s.constructor;switch(a){case we:return Nh(s);case Ue:case ke:return new g(+s);case Fe:return TE(s,c);case z:case Y:case Ee:case Re:case Ce:case Ie:case He:case ot:case B:return N0(s,c);case ht:return new g;case It:case I:return new g(s);case an:return bE(s);case At:return new g;case P:return CE(s)}}function VE(s,a){var c=a.length;if(!c)return s;var g=c-1;return a[g]=(c>1?"& ":"")+a[g],a=a.join(c>2?", ":" "),s.replace(D,`{
/* [wrapped with `+a+`] */
`)}function HE(s){return $e(s)||Bs(s)||!!(i0&&s&&s[i0])}function Sr(s,a){var c=typeof s;return a=a==null?G:a,!!a&&(c=="number"||c!="symbol"&&Pt.test(s))&&s>-1&&s%1==0&&s<a}function Rn(s,a,c){if(!Ot(c))return!1;var g=typeof a;return(g=="number"?Bn(c)&&Sr(a,c.length):g=="string"&&a in c)?Ui(c[a],s):!1}function Wh(s,a){if($e(s))return!1;var c=typeof s;return c=="number"||c=="symbol"||c=="boolean"||s==null||ei(s)?!0:$f.test(s)||!Un.test(s)||a!=null&&s in wt(a)}function XE(s){var a=typeof s;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?s!=="__proto__":s===null}function Vh(s){var a=Vu(s),c=C[a];if(typeof c!="function"||!(a in rt.prototype))return!1;if(s===c)return!0;var g=kh(c);return!!g&&s===g[0]}function qE(s){return!!Jg&&Jg in s}var jE=xu?wr:od;function tl(s){var a=s&&s.constructor,c=typeof a=="function"&&a.prototype||Co;return s===c}function J0(s){return s===s&&!Ot(s)}function e_(s,a){return function(c){return c==null?!1:c[s]===a&&(a!==t||s in wt(c))}}function YE(s){var a=$u(s,function(g){return c.size===h&&c.clear(),g}),c=a.cache;return a}function $E(s,a){var c=s[1],g=a[1],M=c|g,L=M<(_|x|O),N=g==O&&c==E||g==O&&c==b&&s[7].length<=a[8]||g==(O|b)&&a[7].length<=a[8]&&c==E;if(!(L||N))return s;g&_&&(s[2]=a[2],M|=c&_?0:S);var U=a[3];if(U){var X=s[3];s[3]=X?O0(X,U,a[4]):U,s[4]=X?Zr(s[3],p):a[4]}return U=a[5],U&&(X=s[5],s[5]=X?z0(X,U,a[6]):U,s[6]=X?Zr(s[5],p):a[6]),U=a[7],U&&(s[7]=U),g&O&&(s[8]=s[8]==null?a[8]:yn(s[8],a[8])),s[9]==null&&(s[9]=a[9]),s[0]=a[0],s[1]=M,s}function ZE(s){var a=[];if(s!=null)for(var c in wt(s))a.push(c);return a}function KE(s){return Su.call(s)}function t_(s,a,c){return a=Jt(a===t?s.length-1:a,0),function(){for(var g=arguments,M=-1,L=Jt(g.length-a,0),N=K(L);++M<L;)N[M]=g[a+M];M=-1;for(var U=K(a+1);++M<a;)U[M]=g[M];return U[a]=c(N),Kn(s,this,U)}}function n_(s,a){return a.length<2?s:zs(s,vi(a,0,-1))}function QE(s,a){for(var c=s.length,g=yn(a.length,c),M=kn(s);g--;){var L=a[g];s[g]=Sr(L,c)?M[L]:t}return s}function Hh(s,a){if(!(a==="constructor"&&typeof s[a]=="function")&&a!="__proto__")return s[a]}var i_=s_(b0),nl=dM||function(s,a){return dn.setTimeout(s,a)},Xh=s_(SE);function r_(s,a,c){var g=a+"";return Xh(s,VE(g,JE(BE(g),c)))}function s_(s){var a=0,c=0;return function(){var g=_M(),M=Q-(g-c);if(c=g,M>0){if(++a>=ge)return arguments[0]}else a=0;return s.apply(t,arguments)}}function Xu(s,a){var c=-1,g=s.length,M=g-1;for(a=a===t?g:a;++c<a;){var L=Ch(c,M),N=s[L];s[L]=s[c],s[c]=N}return s.length=a,s}var o_=YE(function(s){var a=[];return s.charCodeAt(0)===46&&a.push(""),s.replace(vo,function(c,g,M,L){a.push(M?L.replace(ze,"$1"):g||c)}),a});function ir(s){if(typeof s=="string"||ei(s))return s;var a=s+"";return a=="0"&&1/s==-de?"-0":a}function ks(s){if(s!=null){try{return yu.call(s)}catch{}try{return s+""}catch{}}return""}function JE(s,a){return pi(be,function(c){var g="_."+c[0];a&c[1]&&!mu(s,g)&&s.push(g)}),s.sort()}function a_(s){if(s instanceof rt)return s.clone();var a=new gi(s.__wrapped__,s.__chain__);return a.__actions__=kn(s.__actions__),a.__index__=s.__index__,a.__values__=s.__values__,a}function e2(s,a,c){(c?Rn(s,a,c):a===t)?a=1:a=Jt(Qe(a),0);var g=s==null?0:s.length;if(!g||a<1)return[];for(var M=0,L=0,N=K(Cu(g/a));M<g;)N[L++]=vi(s,M,M+=a);return N}function t2(s){for(var a=-1,c=s==null?0:s.length,g=0,M=[];++a<c;){var L=s[a];L&&(M[g++]=L)}return M}function n2(){var s=arguments.length;if(!s)return[];for(var a=K(s-1),c=arguments[0],g=s;g--;)a[g-1]=arguments[g];return $r($e(c)?kn(c):[c],pn(a,1))}var i2=et(function(s,a){return qt(s)?Za(s,pn(a,1,qt,!0)):[]}),r2=et(function(s,a){var c=xi(a);return qt(c)&&(c=t),qt(s)?Za(s,pn(a,1,qt,!0),Be(c,2)):[]}),s2=et(function(s,a){var c=xi(a);return qt(c)&&(c=t),qt(s)?Za(s,pn(a,1,qt,!0),t,c):[]});function o2(s,a,c){var g=s==null?0:s.length;return g?(a=c||a===t?1:Qe(a),vi(s,a<0?0:a,g)):[]}function a2(s,a,c){var g=s==null?0:s.length;return g?(a=c||a===t?1:Qe(a),a=g-a,vi(s,0,a<0?0:a)):[]}function l2(s,a){return s&&s.length?zu(s,Be(a,3),!0,!0):[]}function u2(s,a){return s&&s.length?zu(s,Be(a,3),!0):[]}function c2(s,a,c,g){var M=s==null?0:s.length;return M?(c&&typeof c!="number"&&Rn(s,a,c)&&(c=0,g=M),nE(s,a,c,g)):[]}function l_(s,a,c){var g=s==null?0:s.length;if(!g)return-1;var M=c==null?0:Qe(c);return M<0&&(M=Jt(g+M,0)),gu(s,Be(a,3),M)}function u_(s,a,c){var g=s==null?0:s.length;if(!g)return-1;var M=g-1;return c!==t&&(M=Qe(c),M=c<0?Jt(g+M,0):yn(M,g-1)),gu(s,Be(a,3),M,!0)}function c_(s){var a=s==null?0:s.length;return a?pn(s,1):[]}function f2(s){var a=s==null?0:s.length;return a?pn(s,de):[]}function h2(s,a){var c=s==null?0:s.length;return c?(a=a===t?1:Qe(a),pn(s,a)):[]}function d2(s){for(var a=-1,c=s==null?0:s.length,g={};++a<c;){var M=s[a];g[M[0]]=M[1]}return g}function f_(s){return s&&s.length?s[0]:t}function p2(s,a,c){var g=s==null?0:s.length;if(!g)return-1;var M=c==null?0:Qe(c);return M<0&&(M=Jt(g+M,0)),Mo(s,a,M)}function m2(s){var a=s==null?0:s.length;return a?vi(s,0,-1):[]}var g2=et(function(s){var a=Rt(s,Dh);return a.length&&a[0]===s[0]?wh(a):[]}),_2=et(function(s){var a=xi(s),c=Rt(s,Dh);return a===xi(c)?a=t:c.pop(),c.length&&c[0]===s[0]?wh(c,Be(a,2)):[]}),v2=et(function(s){var a=xi(s),c=Rt(s,Dh);return a=typeof a=="function"?a:t,a&&c.pop(),c.length&&c[0]===s[0]?wh(c,t,a):[]});function x2(s,a){return s==null?"":mM.call(s,a)}function xi(s){var a=s==null?0:s.length;return a?s[a-1]:t}function y2(s,a,c){var g=s==null?0:s.length;if(!g)return-1;var M=g;return c!==t&&(M=Qe(c),M=M<0?Jt(g+M,0):yn(M,g-1)),a===a?Jw(s,a,M):gu(s,Xg,M,!0)}function S2(s,a){return s&&s.length?w0(s,Qe(a)):t}var w2=et(h_);function h_(s,a){return s&&s.length&&a&&a.length?bh(s,a):s}function M2(s,a,c){return s&&s.length&&a&&a.length?bh(s,a,Be(c,2)):s}function E2(s,a,c){return s&&s.length&&a&&a.length?bh(s,a,t,c):s}var T2=yr(function(s,a){var c=s==null?0:s.length,g=vh(s,a);return T0(s,Rt(a,function(M){return Sr(M,c)?+M:M}).sort(F0)),g});function b2(s,a){var c=[];if(!(s&&s.length))return c;var g=-1,M=[],L=s.length;for(a=Be(a,3);++g<L;){var N=s[g];a(N,g,s)&&(c.push(N),M.push(g))}return T0(s,M),c}function qh(s){return s==null?s:xM.call(s)}function C2(s,a,c){var g=s==null?0:s.length;return g?(c&&typeof c!="number"&&Rn(s,a,c)?(a=0,c=g):(a=a==null?0:Qe(a),c=c===t?g:Qe(c)),vi(s,a,c)):[]}function A2(s,a){return Ou(s,a)}function L2(s,a,c){return Lh(s,a,Be(c,2))}function P2(s,a){var c=s==null?0:s.length;if(c){var g=Ou(s,a);if(g<c&&Ui(s[g],a))return g}return-1}function R2(s,a){return Ou(s,a,!0)}function D2(s,a,c){return Lh(s,a,Be(c,2),!0)}function I2(s,a){var c=s==null?0:s.length;if(c){var g=Ou(s,a,!0)-1;if(Ui(s[g],a))return g}return-1}function N2(s){return s&&s.length?C0(s):[]}function F2(s,a){return s&&s.length?C0(s,Be(a,2)):[]}function O2(s){var a=s==null?0:s.length;return a?vi(s,1,a):[]}function z2(s,a,c){return s&&s.length?(a=c||a===t?1:Qe(a),vi(s,0,a<0?0:a)):[]}function U2(s,a,c){var g=s==null?0:s.length;return g?(a=c||a===t?1:Qe(a),a=g-a,vi(s,a<0?0:a,g)):[]}function k2(s,a){return s&&s.length?zu(s,Be(a,3),!1,!0):[]}function B2(s,a){return s&&s.length?zu(s,Be(a,3)):[]}var G2=et(function(s){return Jr(pn(s,1,qt,!0))}),W2=et(function(s){var a=xi(s);return qt(a)&&(a=t),Jr(pn(s,1,qt,!0),Be(a,2))}),V2=et(function(s){var a=xi(s);return a=typeof a=="function"?a:t,Jr(pn(s,1,qt,!0),t,a)});function H2(s){return s&&s.length?Jr(s):[]}function X2(s,a){return s&&s.length?Jr(s,Be(a,2)):[]}function q2(s,a){return a=typeof a=="function"?a:t,s&&s.length?Jr(s,t,a):[]}function jh(s){if(!(s&&s.length))return[];var a=0;return s=Yr(s,function(c){if(qt(c))return a=Jt(c.length,a),!0}),ch(a,function(c){return Rt(s,ah(c))})}function d_(s,a){if(!(s&&s.length))return[];var c=jh(s);return a==null?c:Rt(c,function(g){return Kn(a,t,g)})}var j2=et(function(s,a){return qt(s)?Za(s,a):[]}),Y2=et(function(s){return Rh(Yr(s,qt))}),$2=et(function(s){var a=xi(s);return qt(a)&&(a=t),Rh(Yr(s,qt),Be(a,2))}),Z2=et(function(s){var a=xi(s);return a=typeof a=="function"?a:t,Rh(Yr(s,qt),t,a)}),K2=et(jh);function Q2(s,a){return R0(s||[],a||[],$a)}function J2(s,a){return R0(s||[],a||[],Ja)}var eT=et(function(s){var a=s.length,c=a>1?s[a-1]:t;return c=typeof c=="function"?(s.pop(),c):t,d_(s,c)});function p_(s){var a=C(s);return a.__chain__=!0,a}function tT(s,a){return a(s),s}function qu(s,a){return a(s)}var nT=yr(function(s){var a=s.length,c=a?s[0]:0,g=this.__wrapped__,M=function(L){return vh(L,s)};return a>1||this.__actions__.length||!(g instanceof rt)||!Sr(c)?this.thru(M):(g=g.slice(c,+c+(a?1:0)),g.__actions__.push({func:qu,args:[M],thisArg:t}),new gi(g,this.__chain__).thru(function(L){return a&&!L.length&&L.push(t),L}))});function iT(){return p_(this)}function rT(){return new gi(this.value(),this.__chain__)}function sT(){this.__values__===t&&(this.__values__=A_(this.value()));var s=this.__index__>=this.__values__.length,a=s?t:this.__values__[this.__index__++];return{done:s,value:a}}function oT(){return this}function aT(s){for(var a,c=this;c instanceof Ru;){var g=a_(c);g.__index__=0,g.__values__=t,a?M.__wrapped__=g:a=g;var M=g;c=c.__wrapped__}return M.__wrapped__=s,a}function lT(){var s=this.__wrapped__;if(s instanceof rt){var a=s;return this.__actions__.length&&(a=new rt(this)),a=a.reverse(),a.__actions__.push({func:qu,args:[qh],thisArg:t}),new gi(a,this.__chain__)}return this.thru(qh)}function uT(){return P0(this.__wrapped__,this.__actions__)}var cT=Uu(function(s,a,c){xt.call(s,c)?++s[c]:vr(s,c,1)});function fT(s,a,c){var g=$e(s)?Vg:tE;return c&&Rn(s,a,c)&&(a=t),g(s,Be(a,3))}function hT(s,a){var c=$e(s)?Yr:d0;return c(s,Be(a,3))}var dT=G0(l_),pT=G0(u_);function mT(s,a){return pn(ju(s,a),1)}function gT(s,a){return pn(ju(s,a),de)}function _T(s,a,c){return c=c===t?1:Qe(c),pn(ju(s,a),c)}function m_(s,a){var c=$e(s)?pi:Qr;return c(s,Be(a,3))}function g_(s,a){var c=$e(s)?Ow:h0;return c(s,Be(a,3))}var vT=Uu(function(s,a,c){xt.call(s,c)?s[c].push(a):vr(s,c,[a])});function xT(s,a,c,g){s=Bn(s)?s:Fo(s),c=c&&!g?Qe(c):0;var M=s.length;return c<0&&(c=Jt(M+c,0)),Qu(s)?c<=M&&s.indexOf(a,c)>-1:!!M&&Mo(s,a,c)>-1}var yT=et(function(s,a,c){var g=-1,M=typeof a=="function",L=Bn(s)?K(s.length):[];return Qr(s,function(N){L[++g]=M?Kn(a,N,c):Ka(N,a,c)}),L}),ST=Uu(function(s,a,c){vr(s,c,a)});function ju(s,a){var c=$e(s)?Rt:x0;return c(s,Be(a,3))}function wT(s,a,c,g){return s==null?[]:($e(a)||(a=a==null?[]:[a]),c=g?t:c,$e(c)||(c=c==null?[]:[c]),M0(s,a,c))}var MT=Uu(function(s,a,c){s[c?0:1].push(a)},function(){return[[],[]]});function ET(s,a,c){var g=$e(s)?sh:jg,M=arguments.length<3;return g(s,Be(a,4),c,M,Qr)}function TT(s,a,c){var g=$e(s)?zw:jg,M=arguments.length<3;return g(s,Be(a,4),c,M,h0)}function bT(s,a){var c=$e(s)?Yr:d0;return c(s,Zu(Be(a,3)))}function CT(s){var a=$e(s)?l0:xE;return a(s)}function AT(s,a,c){(c?Rn(s,a,c):a===t)?a=1:a=Qe(a);var g=$e(s)?ZM:yE;return g(s,a)}function LT(s){var a=$e(s)?KM:wE;return a(s)}function PT(s){if(s==null)return 0;if(Bn(s))return Qu(s)?To(s):s.length;var a=Sn(s);return a==ht||a==At?s.size:Eh(s).length}function RT(s,a,c){var g=$e(s)?oh:ME;return c&&Rn(s,a,c)&&(a=t),g(s,Be(a,3))}var DT=et(function(s,a){if(s==null)return[];var c=a.length;return c>1&&Rn(s,a[0],a[1])?a=[]:c>2&&Rn(a[0],a[1],a[2])&&(a=[a[0]]),M0(s,pn(a,1),[])}),Yu=hM||function(){return dn.Date.now()};function IT(s,a){if(typeof a!="function")throw new mi(l);return s=Qe(s),function(){if(--s<1)return a.apply(this,arguments)}}function __(s,a,c){return a=c?t:a,a=s&&a==null?s.length:a,xr(s,O,t,t,t,t,a)}function v_(s,a){var c;if(typeof a!="function")throw new mi(l);return s=Qe(s),function(){return--s>0&&(c=a.apply(this,arguments)),s<=1&&(a=t),c}}var Yh=et(function(s,a,c){var g=_;if(c.length){var M=Zr(c,Io(Yh));g|=A}return xr(s,g,a,c,M)}),x_=et(function(s,a,c){var g=_|x;if(c.length){var M=Zr(c,Io(x_));g|=A}return xr(a,g,s,c,M)});function y_(s,a,c){a=c?t:a;var g=xr(s,E,t,t,t,t,t,a);return g.placeholder=y_.placeholder,g}function S_(s,a,c){a=c?t:a;var g=xr(s,T,t,t,t,t,t,a);return g.placeholder=S_.placeholder,g}function w_(s,a,c){var g,M,L,N,U,X,se=0,oe=!1,fe=!1,Me=!0;if(typeof s!="function")throw new mi(l);a=yi(a)||0,Ot(c)&&(oe=!!c.leading,fe="maxWait"in c,L=fe?Jt(yi(c.maxWait)||0,a):L,Me="trailing"in c?!!c.trailing:Me);function De(jt){var ki=g,Er=M;return g=M=t,se=jt,N=s.apply(Er,ki),N}function Ge(jt){return se=jt,U=nl(nt,a),oe?De(jt):N}function Je(jt){var ki=jt-X,Er=jt-se,G_=a-ki;return fe?yn(G_,L-Er):G_}function We(jt){var ki=jt-X,Er=jt-se;return X===t||ki>=a||ki<0||fe&&Er>=L}function nt(){var jt=Yu();if(We(jt))return ut(jt);U=nl(nt,Je(jt))}function ut(jt){return U=t,Me&&g?De(jt):(g=M=t,N)}function ti(){U!==t&&D0(U),se=0,g=X=M=U=t}function Dn(){return U===t?N:ut(Yu())}function ni(){var jt=Yu(),ki=We(jt);if(g=arguments,M=this,X=jt,ki){if(U===t)return Ge(X);if(fe)return D0(U),U=nl(nt,a),De(X)}return U===t&&(U=nl(nt,a)),N}return ni.cancel=ti,ni.flush=Dn,ni}var NT=et(function(s,a){return f0(s,1,a)}),FT=et(function(s,a,c){return f0(s,yi(a)||0,c)});function OT(s){return xr(s,F)}function $u(s,a){if(typeof s!="function"||a!=null&&typeof a!="function")throw new mi(l);var c=function(){var g=arguments,M=a?a.apply(this,g):g[0],L=c.cache;if(L.has(M))return L.get(M);var N=s.apply(this,g);return c.cache=L.set(M,N)||L,N};return c.cache=new($u.Cache||_r),c}$u.Cache=_r;function Zu(s){if(typeof s!="function")throw new mi(l);return function(){var a=arguments;switch(a.length){case 0:return!s.call(this);case 1:return!s.call(this,a[0]);case 2:return!s.call(this,a[0],a[1]);case 3:return!s.call(this,a[0],a[1],a[2])}return!s.apply(this,a)}}function zT(s){return v_(2,s)}var UT=EE(function(s,a){a=a.length==1&&$e(a[0])?Rt(a[0],Qn(Be())):Rt(pn(a,1),Qn(Be()));var c=a.length;return et(function(g){for(var M=-1,L=yn(g.length,c);++M<L;)g[M]=a[M].call(this,g[M]);return Kn(s,this,g)})}),$h=et(function(s,a){var c=Zr(a,Io($h));return xr(s,A,t,a,c)}),M_=et(function(s,a){var c=Zr(a,Io(M_));return xr(s,R,t,a,c)}),kT=yr(function(s,a){return xr(s,b,t,t,t,a)});function BT(s,a){if(typeof s!="function")throw new mi(l);return a=a===t?a:Qe(a),et(s,a)}function GT(s,a){if(typeof s!="function")throw new mi(l);return a=a==null?0:Jt(Qe(a),0),et(function(c){var g=c[a],M=ts(c,0,a);return g&&$r(M,g),Kn(s,this,M)})}function WT(s,a,c){var g=!0,M=!0;if(typeof s!="function")throw new mi(l);return Ot(c)&&(g="leading"in c?!!c.leading:g,M="trailing"in c?!!c.trailing:M),w_(s,a,{leading:g,maxWait:a,trailing:M})}function VT(s){return __(s,1)}function HT(s,a){return $h(Ih(a),s)}function XT(){if(!arguments.length)return[];var s=arguments[0];return $e(s)?s:[s]}function qT(s){return _i(s,y)}function jT(s,a){return a=typeof a=="function"?a:t,_i(s,y,a)}function YT(s){return _i(s,d|y)}function $T(s,a){return a=typeof a=="function"?a:t,_i(s,d|y,a)}function ZT(s,a){return a==null||c0(s,a,ln(a))}function Ui(s,a){return s===a||s!==s&&a!==a}var KT=Wu(Sh),QT=Wu(function(s,a){return s>=a}),Bs=g0(function(){return arguments}())?g0:function(s){return Wt(s)&&xt.call(s,"callee")&&!n0.call(s,"callee")},$e=K.isArray,JT=zg?Qn(zg):aE;function Bn(s){return s!=null&&Ku(s.length)&&!wr(s)}function qt(s){return Wt(s)&&Bn(s)}function e3(s){return s===!0||s===!1||Wt(s)&&Pn(s)==Ue}var ns=pM||od,t3=Ug?Qn(Ug):lE;function n3(s){return Wt(s)&&s.nodeType===1&&!il(s)}function i3(s){if(s==null)return!0;if(Bn(s)&&($e(s)||typeof s=="string"||typeof s.splice=="function"||ns(s)||No(s)||Bs(s)))return!s.length;var a=Sn(s);if(a==ht||a==At)return!s.size;if(tl(s))return!Eh(s).length;for(var c in s)if(xt.call(s,c))return!1;return!0}function r3(s,a){return Qa(s,a)}function s3(s,a,c){c=typeof c=="function"?c:t;var g=c?c(s,a):t;return g===t?Qa(s,a,t,c):!!g}function Zh(s){if(!Wt(s))return!1;var a=Pn(s);return a==ct||a==Le||typeof s.message=="string"&&typeof s.name=="string"&&!il(s)}function o3(s){return typeof s=="number"&&r0(s)}function wr(s){if(!Ot(s))return!1;var a=Pn(s);return a==qe||a==Oe||a==tt||a==mt}function E_(s){return typeof s=="number"&&s==Qe(s)}function Ku(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=G}function Ot(s){var a=typeof s;return s!=null&&(a=="object"||a=="function")}function Wt(s){return s!=null&&typeof s=="object"}var T_=kg?Qn(kg):cE;function a3(s,a){return s===a||Mh(s,a,Bh(a))}function l3(s,a,c){return c=typeof c=="function"?c:t,Mh(s,a,Bh(a),c)}function u3(s){return b_(s)&&s!=+s}function c3(s){if(jE(s))throw new Ye(o);return _0(s)}function f3(s){return s===null}function h3(s){return s==null}function b_(s){return typeof s=="number"||Wt(s)&&Pn(s)==It}function il(s){if(!Wt(s)||Pn(s)!=Nt)return!1;var a=Eu(s);if(a===null)return!0;var c=xt.call(a,"constructor")&&a.constructor;return typeof c=="function"&&c instanceof c&&yu.call(c)==lM}var Kh=Bg?Qn(Bg):fE;function d3(s){return E_(s)&&s>=-G&&s<=G}var C_=Gg?Qn(Gg):hE;function Qu(s){return typeof s=="string"||!$e(s)&&Wt(s)&&Pn(s)==I}function ei(s){return typeof s=="symbol"||Wt(s)&&Pn(s)==P}var No=Wg?Qn(Wg):dE;function p3(s){return s===t}function m3(s){return Wt(s)&&Sn(s)==pe}function g3(s){return Wt(s)&&Pn(s)==ve}var _3=Wu(Th),v3=Wu(function(s,a){return s<=a});function A_(s){if(!s)return[];if(Bn(s))return Qu(s)?Oi(s):kn(s);if(Ha&&s[Ha])return Zw(s[Ha]());var a=Sn(s),c=a==ht?hh:a==At?_u:Fo;return c(s)}function Mr(s){if(!s)return s===0?s:0;if(s=yi(s),s===de||s===-de){var a=s<0?-1:1;return a*k}return s===s?s:0}function Qe(s){var a=Mr(s),c=a%1;return a===a?c?a-c:a:0}function L_(s){return s?Os(Qe(s),0,le):0}function yi(s){if(typeof s=="number")return s;if(ei(s))return W;if(Ot(s)){var a=typeof s.valueOf=="function"?s.valueOf():s;s=Ot(a)?a+"":a}if(typeof s!="string")return s===0?s:+s;s=Yg(s);var c=gt.test(s);return c||lt.test(s)?Iw(s.slice(2),c?2:8):je.test(s)?W:+s}function P_(s){return nr(s,Gn(s))}function x3(s){return s?Os(Qe(s),-G,G):s===0?s:0}function vt(s){return s==null?"":Jn(s)}var y3=Ro(function(s,a){if(tl(a)||Bn(a)){nr(a,ln(a),s);return}for(var c in a)xt.call(a,c)&&$a(s,c,a[c])}),R_=Ro(function(s,a){nr(a,Gn(a),s)}),Ju=Ro(function(s,a,c,g){nr(a,Gn(a),s,g)}),S3=Ro(function(s,a,c,g){nr(a,ln(a),s,g)}),w3=yr(vh);function M3(s,a){var c=Po(s);return a==null?c:u0(c,a)}var E3=et(function(s,a){s=wt(s);var c=-1,g=a.length,M=g>2?a[2]:t;for(M&&Rn(a[0],a[1],M)&&(g=1);++c<g;)for(var L=a[c],N=Gn(L),U=-1,X=N.length;++U<X;){var se=N[U],oe=s[se];(oe===t||Ui(oe,Co[se])&&!xt.call(s,se))&&(s[se]=L[se])}return s}),T3=et(function(s){return s.push(t,Y0),Kn(D_,t,s)});function b3(s,a){return Hg(s,Be(a,3),tr)}function C3(s,a){return Hg(s,Be(a,3),yh)}function A3(s,a){return s==null?s:xh(s,Be(a,3),Gn)}function L3(s,a){return s==null?s:p0(s,Be(a,3),Gn)}function P3(s,a){return s&&tr(s,Be(a,3))}function R3(s,a){return s&&yh(s,Be(a,3))}function D3(s){return s==null?[]:Nu(s,ln(s))}function I3(s){return s==null?[]:Nu(s,Gn(s))}function Qh(s,a,c){var g=s==null?t:zs(s,a);return g===t?c:g}function N3(s,a){return s!=null&&K0(s,a,iE)}function Jh(s,a){return s!=null&&K0(s,a,rE)}var F3=V0(function(s,a,c){a!=null&&typeof a.toString!="function"&&(a=Su.call(a)),s[a]=c},td(Wn)),O3=V0(function(s,a,c){a!=null&&typeof a.toString!="function"&&(a=Su.call(a)),xt.call(s,a)?s[a].push(c):s[a]=[c]},Be),z3=et(Ka);function ln(s){return Bn(s)?a0(s):Eh(s)}function Gn(s){return Bn(s)?a0(s,!0):pE(s)}function U3(s,a){var c={};return a=Be(a,3),tr(s,function(g,M,L){vr(c,a(g,M,L),g)}),c}function k3(s,a){var c={};return a=Be(a,3),tr(s,function(g,M,L){vr(c,M,a(g,M,L))}),c}var B3=Ro(function(s,a,c){Fu(s,a,c)}),D_=Ro(function(s,a,c,g){Fu(s,a,c,g)}),G3=yr(function(s,a){var c={};if(s==null)return c;var g=!1;a=Rt(a,function(L){return L=es(L,s),g||(g=L.length>1),L}),nr(s,Uh(s),c),g&&(c=_i(c,d|m|y,FE));for(var M=a.length;M--;)Ph(c,a[M]);return c});function W3(s,a){return I_(s,Zu(Be(a)))}var V3=yr(function(s,a){return s==null?{}:gE(s,a)});function I_(s,a){if(s==null)return{};var c=Rt(Uh(s),function(g){return[g]});return a=Be(a),E0(s,c,function(g,M){return a(g,M[0])})}function H3(s,a,c){a=es(a,s);var g=-1,M=a.length;for(M||(M=1,s=t);++g<M;){var L=s==null?t:s[ir(a[g])];L===t&&(g=M,L=c),s=wr(L)?L.call(s):L}return s}function X3(s,a,c){return s==null?s:Ja(s,a,c)}function q3(s,a,c,g){return g=typeof g=="function"?g:t,s==null?s:Ja(s,a,c,g)}var N_=q0(ln),F_=q0(Gn);function j3(s,a,c){var g=$e(s),M=g||ns(s)||No(s);if(a=Be(a,4),c==null){var L=s&&s.constructor;M?c=g?new L:[]:Ot(s)?c=wr(L)?Po(Eu(s)):{}:c={}}return(M?pi:tr)(s,function(N,U,X){return a(c,N,U,X)}),c}function Y3(s,a){return s==null?!0:Ph(s,a)}function $3(s,a,c){return s==null?s:L0(s,a,Ih(c))}function Z3(s,a,c,g){return g=typeof g=="function"?g:t,s==null?s:L0(s,a,Ih(c),g)}function Fo(s){return s==null?[]:fh(s,ln(s))}function K3(s){return s==null?[]:fh(s,Gn(s))}function Q3(s,a,c){return c===t&&(c=a,a=t),c!==t&&(c=yi(c),c=c===c?c:0),a!==t&&(a=yi(a),a=a===a?a:0),Os(yi(s),a,c)}function J3(s,a,c){return a=Mr(a),c===t?(c=a,a=0):c=Mr(c),s=yi(s),sE(s,a,c)}function eb(s,a,c){if(c&&typeof c!="boolean"&&Rn(s,a,c)&&(a=c=t),c===t&&(typeof a=="boolean"?(c=a,a=t):typeof s=="boolean"&&(c=s,s=t)),s===t&&a===t?(s=0,a=1):(s=Mr(s),a===t?(a=s,s=0):a=Mr(a)),s>a){var g=s;s=a,a=g}if(c||s%1||a%1){var M=s0();return yn(s+M*(a-s+Dw("1e-"+((M+"").length-1))),a)}return Ch(s,a)}var tb=Do(function(s,a,c){return a=a.toLowerCase(),s+(c?O_(a):a)});function O_(s){return ed(vt(s).toLowerCase())}function z_(s){return s=vt(s),s&&s.replace(pr,Xw).replace(ww,"")}function nb(s,a,c){s=vt(s),a=Jn(a);var g=s.length;c=c===t?g:Os(Qe(c),0,g);var M=c;return c-=a.length,c>=0&&s.slice(c,M)==a}function ib(s){return s=vt(s),s&&Ft.test(s)?s.replace(Ve,qw):s}function rb(s){return s=vt(s),s&&Zf.test(s)?s.replace(xo,"\\$&"):s}var sb=Do(function(s,a,c){return s+(c?"-":"")+a.toLowerCase()}),ob=Do(function(s,a,c){return s+(c?" ":"")+a.toLowerCase()}),ab=B0("toLowerCase");function lb(s,a,c){s=vt(s),a=Qe(a);var g=a?To(s):0;if(!a||g>=a)return s;var M=(a-g)/2;return Gu(Au(M),c)+s+Gu(Cu(M),c)}function ub(s,a,c){s=vt(s),a=Qe(a);var g=a?To(s):0;return a&&g<a?s+Gu(a-g,c):s}function cb(s,a,c){s=vt(s),a=Qe(a);var g=a?To(s):0;return a&&g<a?Gu(a-g,c)+s:s}function fb(s,a,c){return c||a==null?a=0:a&&(a=+a),vM(vt(s).replace(Ba,""),a||0)}function hb(s,a,c){return(c?Rn(s,a,c):a===t)?a=1:a=Qe(a),Ah(vt(s),a)}function db(){var s=arguments,a=vt(s[0]);return s.length<3?a:a.replace(s[1],s[2])}var pb=Do(function(s,a,c){return s+(c?"_":"")+a.toLowerCase()});function mb(s,a,c){return c&&typeof c!="number"&&Rn(s,a,c)&&(a=c=t),c=c===t?le:c>>>0,c?(s=vt(s),s&&(typeof a=="string"||a!=null&&!Kh(a))&&(a=Jn(a),!a&&Eo(s))?ts(Oi(s),0,c):s.split(a,c)):[]}var gb=Do(function(s,a,c){return s+(c?" ":"")+ed(a)});function _b(s,a,c){return s=vt(s),c=c==null?0:Os(Qe(c),0,s.length),a=Jn(a),s.slice(c,c+a.length)==a}function vb(s,a,c){var g=C.templateSettings;c&&Rn(s,a,c)&&(a=t),s=vt(s),a=Ju({},a,g,j0);var M=Ju({},a.imports,g.imports,j0),L=ln(M),N=fh(M,L),U,X,se=0,oe=a.interpolate||Ni,fe="__p += '",Me=dh((a.escape||Ni).source+"|"+oe.source+"|"+(oe===hi?Xe:Ni).source+"|"+(a.evaluate||Ni).source+"|$","g"),De="//# sourceURL="+(xt.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Cw+"]")+`
`;s.replace(Me,function(We,nt,ut,ti,Dn,ni){return ut||(ut=ti),fe+=s.slice(se,ni).replace(Xr,jw),nt&&(U=!0,fe+=`' +
__e(`+nt+`) +
'`),Dn&&(X=!0,fe+=`';
`+Dn+`;
__p += '`),ut&&(fe+=`' +
((__t = (`+ut+`)) == null ? '' : __t) +
'`),se=ni+We.length,We}),fe+=`';
`;var Ge=xt.call(a,"variable")&&a.variable;if(!Ge)fe=`with (obj) {
`+fe+`
}
`;else if(ie.test(Ge))throw new Ye(u);fe=(X?fe.replace(Te,""):fe).replace(xe,"$1").replace(ue,"$1;"),fe="function("+(Ge||"obj")+`) {
`+(Ge?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(U?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var Je=k_(function(){return _t(L,De+"return "+fe).apply(t,N)});if(Je.source=fe,Zh(Je))throw Je;return Je}function xb(s){return vt(s).toLowerCase()}function yb(s){return vt(s).toUpperCase()}function Sb(s,a,c){if(s=vt(s),s&&(c||a===t))return Yg(s);if(!s||!(a=Jn(a)))return s;var g=Oi(s),M=Oi(a),L=$g(g,M),N=Zg(g,M)+1;return ts(g,L,N).join("")}function wb(s,a,c){if(s=vt(s),s&&(c||a===t))return s.slice(0,Qg(s)+1);if(!s||!(a=Jn(a)))return s;var g=Oi(s),M=Zg(g,Oi(a))+1;return ts(g,0,M).join("")}function Mb(s,a,c){if(s=vt(s),s&&(c||a===t))return s.replace(Ba,"");if(!s||!(a=Jn(a)))return s;var g=Oi(s),M=$g(g,Oi(a));return ts(g,M).join("")}function Eb(s,a){var c=V,g=ce;if(Ot(a)){var M="separator"in a?a.separator:M;c="length"in a?Qe(a.length):c,g="omission"in a?Jn(a.omission):g}s=vt(s);var L=s.length;if(Eo(s)){var N=Oi(s);L=N.length}if(c>=L)return s;var U=c-To(g);if(U<1)return g;var X=N?ts(N,0,U).join(""):s.slice(0,U);if(M===t)return X+g;if(N&&(U+=X.length-U),Kh(M)){if(s.slice(U).search(M)){var se,oe=X;for(M.global||(M=dh(M.source,vt(Ke.exec(M))+"g")),M.lastIndex=0;se=M.exec(oe);)var fe=se.index;X=X.slice(0,fe===t?U:fe)}}else if(s.indexOf(Jn(M),U)!=U){var Me=X.lastIndexOf(M);Me>-1&&(X=X.slice(0,Me))}return X+g}function Tb(s){return s=vt(s),s&&St.test(s)?s.replace(ye,eM):s}var bb=Do(function(s,a,c){return s+(c?" ":"")+a.toUpperCase()}),ed=B0("toUpperCase");function U_(s,a,c){return s=vt(s),a=c?t:a,a===t?$w(s)?iM(s):Bw(s):s.match(a)||[]}var k_=et(function(s,a){try{return Kn(s,t,a)}catch(c){return Zh(c)?c:new Ye(c)}}),Cb=yr(function(s,a){return pi(a,function(c){c=ir(c),vr(s,c,Yh(s[c],s))}),s});function Ab(s){var a=s==null?0:s.length,c=Be();return s=a?Rt(s,function(g){if(typeof g[1]!="function")throw new mi(l);return[c(g[0]),g[1]]}):[],et(function(g){for(var M=-1;++M<a;){var L=s[M];if(Kn(L[0],this,g))return Kn(L[1],this,g)}})}function Lb(s){return eE(_i(s,d))}function td(s){return function(){return s}}function Pb(s,a){return s==null||s!==s?a:s}var Rb=W0(),Db=W0(!0);function Wn(s){return s}function nd(s){return v0(typeof s=="function"?s:_i(s,d))}function Ib(s){return y0(_i(s,d))}function Nb(s,a){return S0(s,_i(a,d))}var Fb=et(function(s,a){return function(c){return Ka(c,s,a)}}),Ob=et(function(s,a){return function(c){return Ka(s,c,a)}});function id(s,a,c){var g=ln(a),M=Nu(a,g);c==null&&!(Ot(a)&&(M.length||!g.length))&&(c=a,a=s,s=this,M=Nu(a,ln(a)));var L=!(Ot(c)&&"chain"in c)||!!c.chain,N=wr(s);return pi(M,function(U){var X=a[U];s[U]=X,N&&(s.prototype[U]=function(){var se=this.__chain__;if(L||se){var oe=s(this.__wrapped__),fe=oe.__actions__=kn(this.__actions__);return fe.push({func:X,args:arguments,thisArg:s}),oe.__chain__=se,oe}return X.apply(s,$r([this.value()],arguments))})}),s}function zb(){return dn._===this&&(dn._=uM),this}function rd(){}function Ub(s){return s=Qe(s),et(function(a){return w0(a,s)})}var kb=Fh(Rt),Bb=Fh(Vg),Gb=Fh(oh);function B_(s){return Wh(s)?ah(ir(s)):_E(s)}function Wb(s){return function(a){return s==null?t:zs(s,a)}}var Vb=H0(),Hb=H0(!0);function sd(){return[]}function od(){return!1}function Xb(){return{}}function qb(){return""}function jb(){return!0}function Yb(s,a){if(s=Qe(s),s<1||s>G)return[];var c=le,g=yn(s,le);a=Be(a),s-=le;for(var M=ch(g,a);++c<s;)a(c);return M}function $b(s){return $e(s)?Rt(s,ir):ei(s)?[s]:kn(o_(vt(s)))}function Zb(s){var a=++aM;return vt(s)+a}var Kb=Bu(function(s,a){return s+a},0),Qb=Oh("ceil"),Jb=Bu(function(s,a){return s/a},1),eC=Oh("floor");function tC(s){return s&&s.length?Iu(s,Wn,Sh):t}function nC(s,a){return s&&s.length?Iu(s,Be(a,2),Sh):t}function iC(s){return qg(s,Wn)}function rC(s,a){return qg(s,Be(a,2))}function sC(s){return s&&s.length?Iu(s,Wn,Th):t}function oC(s,a){return s&&s.length?Iu(s,Be(a,2),Th):t}var aC=Bu(function(s,a){return s*a},1),lC=Oh("round"),uC=Bu(function(s,a){return s-a},0);function cC(s){return s&&s.length?uh(s,Wn):0}function fC(s,a){return s&&s.length?uh(s,Be(a,2)):0}return C.after=IT,C.ary=__,C.assign=y3,C.assignIn=R_,C.assignInWith=Ju,C.assignWith=S3,C.at=w3,C.before=v_,C.bind=Yh,C.bindAll=Cb,C.bindKey=x_,C.castArray=XT,C.chain=p_,C.chunk=e2,C.compact=t2,C.concat=n2,C.cond=Ab,C.conforms=Lb,C.constant=td,C.countBy=cT,C.create=M3,C.curry=y_,C.curryRight=S_,C.debounce=w_,C.defaults=E3,C.defaultsDeep=T3,C.defer=NT,C.delay=FT,C.difference=i2,C.differenceBy=r2,C.differenceWith=s2,C.drop=o2,C.dropRight=a2,C.dropRightWhile=l2,C.dropWhile=u2,C.fill=c2,C.filter=hT,C.flatMap=mT,C.flatMapDeep=gT,C.flatMapDepth=_T,C.flatten=c_,C.flattenDeep=f2,C.flattenDepth=h2,C.flip=OT,C.flow=Rb,C.flowRight=Db,C.fromPairs=d2,C.functions=D3,C.functionsIn=I3,C.groupBy=vT,C.initial=m2,C.intersection=g2,C.intersectionBy=_2,C.intersectionWith=v2,C.invert=F3,C.invertBy=O3,C.invokeMap=yT,C.iteratee=nd,C.keyBy=ST,C.keys=ln,C.keysIn=Gn,C.map=ju,C.mapKeys=U3,C.mapValues=k3,C.matches=Ib,C.matchesProperty=Nb,C.memoize=$u,C.merge=B3,C.mergeWith=D_,C.method=Fb,C.methodOf=Ob,C.mixin=id,C.negate=Zu,C.nthArg=Ub,C.omit=G3,C.omitBy=W3,C.once=zT,C.orderBy=wT,C.over=kb,C.overArgs=UT,C.overEvery=Bb,C.overSome=Gb,C.partial=$h,C.partialRight=M_,C.partition=MT,C.pick=V3,C.pickBy=I_,C.property=B_,C.propertyOf=Wb,C.pull=w2,C.pullAll=h_,C.pullAllBy=M2,C.pullAllWith=E2,C.pullAt=T2,C.range=Vb,C.rangeRight=Hb,C.rearg=kT,C.reject=bT,C.remove=b2,C.rest=BT,C.reverse=qh,C.sampleSize=AT,C.set=X3,C.setWith=q3,C.shuffle=LT,C.slice=C2,C.sortBy=DT,C.sortedUniq=N2,C.sortedUniqBy=F2,C.split=mb,C.spread=GT,C.tail=O2,C.take=z2,C.takeRight=U2,C.takeRightWhile=k2,C.takeWhile=B2,C.tap=tT,C.throttle=WT,C.thru=qu,C.toArray=A_,C.toPairs=N_,C.toPairsIn=F_,C.toPath=$b,C.toPlainObject=P_,C.transform=j3,C.unary=VT,C.union=G2,C.unionBy=W2,C.unionWith=V2,C.uniq=H2,C.uniqBy=X2,C.uniqWith=q2,C.unset=Y3,C.unzip=jh,C.unzipWith=d_,C.update=$3,C.updateWith=Z3,C.values=Fo,C.valuesIn=K3,C.without=j2,C.words=U_,C.wrap=HT,C.xor=Y2,C.xorBy=$2,C.xorWith=Z2,C.zip=K2,C.zipObject=Q2,C.zipObjectDeep=J2,C.zipWith=eT,C.entries=N_,C.entriesIn=F_,C.extend=R_,C.extendWith=Ju,id(C,C),C.add=Kb,C.attempt=k_,C.camelCase=tb,C.capitalize=O_,C.ceil=Qb,C.clamp=Q3,C.clone=qT,C.cloneDeep=YT,C.cloneDeepWith=$T,C.cloneWith=jT,C.conformsTo=ZT,C.deburr=z_,C.defaultTo=Pb,C.divide=Jb,C.endsWith=nb,C.eq=Ui,C.escape=ib,C.escapeRegExp=rb,C.every=fT,C.find=dT,C.findIndex=l_,C.findKey=b3,C.findLast=pT,C.findLastIndex=u_,C.findLastKey=C3,C.floor=eC,C.forEach=m_,C.forEachRight=g_,C.forIn=A3,C.forInRight=L3,C.forOwn=P3,C.forOwnRight=R3,C.get=Qh,C.gt=KT,C.gte=QT,C.has=N3,C.hasIn=Jh,C.head=f_,C.identity=Wn,C.includes=xT,C.indexOf=p2,C.inRange=J3,C.invoke=z3,C.isArguments=Bs,C.isArray=$e,C.isArrayBuffer=JT,C.isArrayLike=Bn,C.isArrayLikeObject=qt,C.isBoolean=e3,C.isBuffer=ns,C.isDate=t3,C.isElement=n3,C.isEmpty=i3,C.isEqual=r3,C.isEqualWith=s3,C.isError=Zh,C.isFinite=o3,C.isFunction=wr,C.isInteger=E_,C.isLength=Ku,C.isMap=T_,C.isMatch=a3,C.isMatchWith=l3,C.isNaN=u3,C.isNative=c3,C.isNil=h3,C.isNull=f3,C.isNumber=b_,C.isObject=Ot,C.isObjectLike=Wt,C.isPlainObject=il,C.isRegExp=Kh,C.isSafeInteger=d3,C.isSet=C_,C.isString=Qu,C.isSymbol=ei,C.isTypedArray=No,C.isUndefined=p3,C.isWeakMap=m3,C.isWeakSet=g3,C.join=x2,C.kebabCase=sb,C.last=xi,C.lastIndexOf=y2,C.lowerCase=ob,C.lowerFirst=ab,C.lt=_3,C.lte=v3,C.max=tC,C.maxBy=nC,C.mean=iC,C.meanBy=rC,C.min=sC,C.minBy=oC,C.stubArray=sd,C.stubFalse=od,C.stubObject=Xb,C.stubString=qb,C.stubTrue=jb,C.multiply=aC,C.nth=S2,C.noConflict=zb,C.noop=rd,C.now=Yu,C.pad=lb,C.padEnd=ub,C.padStart=cb,C.parseInt=fb,C.random=eb,C.reduce=ET,C.reduceRight=TT,C.repeat=hb,C.replace=db,C.result=H3,C.round=lC,C.runInContext=H,C.sample=CT,C.size=PT,C.snakeCase=pb,C.some=RT,C.sortedIndex=A2,C.sortedIndexBy=L2,C.sortedIndexOf=P2,C.sortedLastIndex=R2,C.sortedLastIndexBy=D2,C.sortedLastIndexOf=I2,C.startCase=gb,C.startsWith=_b,C.subtract=uC,C.sum=cC,C.sumBy=fC,C.template=vb,C.times=Yb,C.toFinite=Mr,C.toInteger=Qe,C.toLength=L_,C.toLower=xb,C.toNumber=yi,C.toSafeInteger=x3,C.toString=vt,C.toUpper=yb,C.trim=Sb,C.trimEnd=wb,C.trimStart=Mb,C.truncate=Eb,C.unescape=Tb,C.uniqueId=Zb,C.upperCase=bb,C.upperFirst=ed,C.each=m_,C.eachRight=g_,C.first=f_,id(C,function(){var s={};return tr(C,function(a,c){xt.call(C.prototype,c)||(s[c]=a)}),s}(),{chain:!1}),C.VERSION=i,pi(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){C[s].placeholder=C}),pi(["drop","take"],function(s,a){rt.prototype[s]=function(c){c=c===t?1:Jt(Qe(c),0);var g=this.__filtered__&&!a?new rt(this):this.clone();return g.__filtered__?g.__takeCount__=yn(c,g.__takeCount__):g.__views__.push({size:yn(c,le),type:s+(g.__dir__<0?"Right":"")}),g},rt.prototype[s+"Right"]=function(c){return this.reverse()[s](c).reverse()}}),pi(["filter","map","takeWhile"],function(s,a){var c=a+1,g=c==$||c==he;rt.prototype[s]=function(M){var L=this.clone();return L.__iteratees__.push({iteratee:Be(M,3),type:c}),L.__filtered__=L.__filtered__||g,L}}),pi(["head","last"],function(s,a){var c="take"+(a?"Right":"");rt.prototype[s]=function(){return this[c](1).value()[0]}}),pi(["initial","tail"],function(s,a){var c="drop"+(a?"":"Right");rt.prototype[s]=function(){return this.__filtered__?new rt(this):this[c](1)}}),rt.prototype.compact=function(){return this.filter(Wn)},rt.prototype.find=function(s){return this.filter(s).head()},rt.prototype.findLast=function(s){return this.reverse().find(s)},rt.prototype.invokeMap=et(function(s,a){return typeof s=="function"?new rt(this):this.map(function(c){return Ka(c,s,a)})}),rt.prototype.reject=function(s){return this.filter(Zu(Be(s)))},rt.prototype.slice=function(s,a){s=Qe(s);var c=this;return c.__filtered__&&(s>0||a<0)?new rt(c):(s<0?c=c.takeRight(-s):s&&(c=c.drop(s)),a!==t&&(a=Qe(a),c=a<0?c.dropRight(-a):c.take(a-s)),c)},rt.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},rt.prototype.toArray=function(){return this.take(le)},tr(rt.prototype,function(s,a){var c=/^(?:filter|find|map|reject)|While$/.test(a),g=/^(?:head|last)$/.test(a),M=C[g?"take"+(a=="last"?"Right":""):a],L=g||/^find/.test(a);!M||(C.prototype[a]=function(){var N=this.__wrapped__,U=g?[1]:arguments,X=N instanceof rt,se=U[0],oe=X||$e(N),fe=function(nt){var ut=M.apply(C,$r([nt],U));return g&&Me?ut[0]:ut};oe&&c&&typeof se=="function"&&se.length!=1&&(X=oe=!1);var Me=this.__chain__,De=!!this.__actions__.length,Ge=L&&!Me,Je=X&&!De;if(!L&&oe){N=Je?N:new rt(this);var We=s.apply(N,U);return We.__actions__.push({func:qu,args:[fe],thisArg:t}),new gi(We,Me)}return Ge&&Je?s.apply(this,U):(We=this.thru(fe),Ge?g?We.value()[0]:We.value():We)})}),pi(["pop","push","shift","sort","splice","unshift"],function(s){var a=vu[s],c=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",g=/^(?:pop|shift)$/.test(s);C.prototype[s]=function(){var M=arguments;if(g&&!this.__chain__){var L=this.value();return a.apply($e(L)?L:[],M)}return this[c](function(N){return a.apply($e(N)?N:[],M)})}}),tr(rt.prototype,function(s,a){var c=C[a];if(c){var g=c.name+"";xt.call(Lo,g)||(Lo[g]=[]),Lo[g].push({name:a,func:c})}}),Lo[ku(t,x).name]=[{name:"wrapper",func:t}],rt.prototype.clone=TM,rt.prototype.reverse=bM,rt.prototype.value=CM,C.prototype.at=nT,C.prototype.chain=iT,C.prototype.commit=rT,C.prototype.next=sT,C.prototype.plant=aT,C.prototype.reverse=lT,C.prototype.toJSON=C.prototype.valueOf=C.prototype.value=uT,C.prototype.first=C.prototype.head,Ha&&(C.prototype[Ha]=oT),C},bo=rM();Ds?((Ds.exports=bo)._=bo,nh._=bo):dn._=bo}).call(rl)})(Ay,Ay.exports);var jF={exports:{}},Yf={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YF=Af.exports,$F=Symbol.for("react.element"),ZF=Symbol.for("react.fragment"),KF=Object.prototype.hasOwnProperty,QF=YF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JF={key:!0,ref:!0,__self:!0,__source:!0};function fw(n,e,t){var i,r={},o=null,l=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)KF.call(e,i)&&!JF.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$F,type:n,key:o,ref:l,props:r,_owner:QF.current}}Yf.Fragment=ZF;Yf.jsx=fw;Yf.jsxs=fw;(function(n){n.exports=Yf})(jF);export{iO as A,wa as B,oO as E,aw as F,rO as O,Yi as P,aO as R,tO as S,nO as T,q as V,SF as W,Af as _,sO as a,DL as b,fO as c,lO as d,Ty as e,uO as f,Ml as g,um as h,Zn as i,fr as j,cO as k,$t as l,hp as m,Ay as n,jF as o,X_ as p,eO as q};
