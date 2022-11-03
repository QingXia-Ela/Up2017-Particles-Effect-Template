var F=Object.defineProperty;var O=(d,e,t)=>e in d?F(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var a=(d,e,t)=>(O(d,typeof e!="symbol"?e+"":e,t),t);import{O as G,a as R,S as W,F as z,P as k,V as B,A as j,W as V,b as Y,c as X,E as K,R as $,B as q,d as Z,e as J,f as Q,T as x,g as P,h as _,i as w,j as N,k as g,l as L,m as T,n as ee,o as U,_ as S,p as te,q as se}from"./vendor.43b10a39.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const ne="_layout_a6b8l_1",oe={layout:ne},ae="_index_page_1lbrh_1",ie="_canvas_wrapper_1lbrh_6",re="_list_1lbrh_14",le="_function_list_1lbrh_15",M={index_page:ae,canvas_wrapper:ie,list:re,function_list:le},b="/up2017-particle-effect/assets/gradient.2d7d71df.png";function ce(d){const e=new Set;let t=[];for(let s=0;s<d.length;s++)t.push(d[s]),s%3===2&&(e.add(t.join(",")),t=[]);const o=[];return e.forEach(s=>{o.push(...s.split(",").map(i=>Number(i)))}),new Float32Array(o)}const de=["position","normal","uv","color","skinIndex","skinWeight","instanceMatri","morphTarget0","morphTarget1","morphTarget2","morphTarget3","morphTarget4","morphTarget5","morphTarget6","morphTarget7","morphNormal0","morphNormal1","morphNormal2","morphNormal3"];function A(d,e){return Math.random()*(e-d)+d}class he{constructor(e){a(this,"CanvasWrapper");a(this,"modelList");a(this,"_LOAD_COUNT_");a(this,"ModelPointer");a(this,"maxParticlesCount");a(this,"WIDTH");a(this,"HEIGHT");a(this,"orbitControls");a(this,"stats");a(this,"scene");a(this,"camera");a(this,"renderer");a(this,"composer");a(this,"PointMaterial");a(this,"AnimateEffectParticle");a(this,"AnimateDuration");a(this,"mouseV");a(this,"mouseK");a(this,"hadListenMouseMove");a(this,"MainParticleGroup");a(this,"defaultLoader");a(this,"ParticleAnimeMap");a(this,"Models");a(this,"addons");a(this,"onModelsFinishedLoad");a(this,"onRendering");a(this,"CurrentUseModelName");a(this,"LastUseModelName");a(this,"handleWindowResize",()=>{var e,t;this.HEIGHT=window.innerHeight,this.WIDTH=window.innerWidth,(e=this.renderer)==null||e.setSize(this.WIDTH,this.HEIGHT),(t=this.composer)==null||t.reset(),this.camera!=null&&(this.camera.aspect=this.WIDTH/this.HEIGHT,this.camera.updateProjectionMatrix())});a(this,"rotateScene",ee.exports.throttle(e=>{this.mouseV=3e-4*(e.clientX-this.WIDTH/2),this.mouseK=1e-4*(e.clientY-this.HEIGHT/2)},100));const{AnimateDuration:t,onModelsFinishedLoad:o}=e;this.CanvasWrapper=e.CanvasWrapper,this.addons=e.addons!=null?e.addons:[],this.Models=new Map;for(const s of e.Models)this.Models.set(s.name,s);this.AnimateDuration=typeof t=="number"?t:1500,this.onModelsFinishedLoad=o,this.defaultLoader=new G,this.ParticleAnimeMap=[],this.HEIGHT=window.innerHeight,this.WIDTH=window.innerWidth,this.modelList=new Map,this._LOAD_COUNT_=0,this.ModelPointer=0,this.maxParticlesCount=0,this.createScene(),this.initStats(),this._addModels(),this.createEffect(),this.orbitControls=new R(this.camera,this.renderer.domElement),this.mouseK=0,this.mouseV=0,this.update(0)}createScene(){this.scene=new W,this.scene.fog=new z(328972,5e-4);const e=100,t=this.WIDTH/this.HEIGHT,o=1,s=5e4;this.camera=new k(e,t,o,s),this.camera.position.set(0,0,1e3),this.camera.lookAt(new B(0,0,0));const i=new j(500);this.scene.add(i),this.addons!=null&&this.addons.forEach(r=>{var l;(l=this.scene)==null||l.add(r.Geometry)}),this.renderer=new V({alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(this.scene.fog.color),this.renderer.setSize(this.WIDTH,this.HEIGHT),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Y,this.CanvasWrapper.appendChild(this.renderer.domElement),window.addEventListener("resize",this.handleWindowResize,!1)}initStats(){this.stats=X(),this.stats!=null&&(this.stats.domElement.style.position="absolute",this.stats.domElement.style.bottom="0px",this.stats.domElement.style.top="0px",this.stats.domElement.style.zIndex="100",this.CanvasWrapper.appendChild(this.stats.domElement))}createEffect(){this.composer=new K(this.renderer);const e=new $(this.scene,this.camera),t=new q(.75),o=new Z(.5,.5,1500,0),s=new J(Q);s.uniforms.screenWidth.value=window.innerWidth,s.uniforms.screenHeight.value=window.innerHeight,s.uniforms.sampleDistance.value=.4,s.renderToScreen=!0,this.composer.addPass(e),this.composer.addPass(t),this.composer.addPass(o),this.composer.addPass(s)}_addModels(){const e=new x;e.crossOrigin="",this.PointMaterial=new P({size:5,sizeAttenuation:!0,transparent:!0,opacity:1,blending:_,depthWrite:!1,map:e.load(b)}),this.Models.forEach(t=>{let o,s=new Float32Array([]);const i=()=>{var r;this.modelList.set(t.name,o),(r=t.onLoadComplete)==null||r.call(this,o),this._LOAD_COUNT_++,this._LOAD_COUNT_===this.Models.size&&this._finishLoadModal()};if(typeof t.path=="string")if(t.loader!=null){const{loaderInstance:r,load:l}=t.loader;r.load(t.path,m=>{o=l(m),i()})}else this.defaultLoader.load(t.path,r=>{for(const l of r.children){const m=l.geometry.attributes.position.array;s=new Float32Array([...s,...m])}t.NeedRemoveDuplicateParticle!==!1&&(s=ce(s)),o=new w,o.setAttribute("position",new N(s,3)),t.geometry=o,i()});else t.geometry instanceof w&&(o=t.geometry,i())})}_finishLoadModal(){var i,r;let e=0;this.modelList.forEach(l=>{e=Math.max(e,l.attributes.position.count)}),this.maxParticlesCount=e;const t=[],o=1500;this.MainParticleGroup=new g.Group;for(let l=0;l<e;l++){const m=A(-1*o,o),h=A(-1*o,o),c=A(-1*o,o);t.push(m,h,c);const u={x:m,y:h,z:c,isPlaying:!0};u.tweenctx=new g.Tween(u,this.MainParticleGroup).easing(g.Easing.Exponential.In).onComplete(n=>{n.tweenctx._valuesStart.x=n.x,n.tweenctx._valuesStart.y=n.y,n.tweenctx._valuesStart.z=n.z,n.isPlaying=!1}).onStart(n=>{n.tweenctx._valuesStart.x=n.x,n.tweenctx._valuesStart.y=n.y,n.tweenctx._valuesStart.z=n.z,n.isPlaying=!0}),this.ParticleAnimeMap[l]=u}const s=new w;s.setAttribute("position",new L(t,3,!1)),this.AnimateEffectParticle=new T(s,this.PointMaterial),(i=this.scene)==null||i.add(this.AnimateEffectParticle),(r=this.onModelsFinishedLoad)==null||r.call(this,this.AnimateEffectParticle,this.scene)}ChangeModel(e,t=this.AnimateDuration){var m,h;const o=this.modelList.get(e);if(o==null){console.warn("\u672A\u627E\u5230\u6307\u5B9A\u540D\u5B57\u7684\u6A21\u578B\uFF0C\u6539\u53D8\u64CD\u4F5C\u5DF2\u7EC8\u6B62\uFF01\u4F20\u5165\u7684\u540D\u5B57\uFF1A"+e.toString());return}const s=this.Models.get(e);this.CurrentUseModelName!==void 0&&(this.LastUseModelName=this.CurrentUseModelName),this.CurrentUseModelName=e,(m=s.onEnterStart)==null||m.call(this,this.AnimateEffectParticle);const i=o.getAttribute("position"),r=this.AnimateEffectParticle.geometry.getAttribute("position"),l=setTimeout(()=>{var c;(c=s.onEnterEnd)==null||c.call(this,this.AnimateEffectParticle)},t*2);for(let c=0;c<this.maxParticlesCount;c++){const u=this.ParticleAnimeMap[c];this.ParticleAnimeMap[c].isPlaying=!0;const n=c%i.count;u.x=r.getX(c),u.y=r.getY(c),u.z=r.getZ(c),u.tweenctx.stop().to({x:i.array[n*3],y:i.array[n*3+1],z:i.array[n*3+2]},t).delay(t*Math.random()).onUpdate(p=>{r.setXYZ(c,p.x,p.y,p.z),r.needsUpdate=!0}).onStop(p=>{clearTimeout(l)}).start()}(h=this.addons)==null||h.forEach(c=>{var u;(u=c.ChangeModel)==null||u.call(this)})}ListenMouseMove(){this.hadListenMouseMove!==!0&&(window.addEventListener("mousemove",this.rotateScene),this.hadListenMouseMove=!0)}StopListenMouseMove(){this.hadListenMouseMove===!0&&(window.removeEventListener("mousemove",this.rotateScene),this.hadListenMouseMove=!1)}AlignCameraCenter(e=!1){if(e&&this.scene!=null){this.scene.rotation.x=0,this.scene.rotation.y=0,this.mouseV=0,this.mouseK=0;return}const t=new MouseEvent("click",{clientX:this.WIDTH/2,clientY:this.HEIGHT/2});this.rotateScene(t)}_updateRotation(){this.scene!=null&&(this.scene.rotation.y+=(this.mouseV-this.scene.rotation.y)/50,this.scene.rotation.x+=(this.mouseK-this.scene.rotation.x)/50)}update(e){var t,o,s,i,r;g.update(),(t=this.MainParticleGroup)==null||t.update(),(o=this.onRendering)==null||o.call(this,e),(s=this.stats)==null||s.update(),this._updateRotation(),this.Models.forEach(l=>{var m,h;if(l.name===this.CurrentUseModelName&&l.onAnimationFrameUpdate!=null&&l.onAnimationFrameUpdate(this.AnimateEffectParticle,this.ParticleAnimeMap,l.geometry)===!0)for(const c of de){const u=(h=(m=this.AnimateEffectParticle)==null?void 0:m.geometry)==null?void 0:h.getAttribute(c);u!=null&&(u.needsUpdate=!0)}}),(i=this.addons)==null||i.forEach(l=>{l.update()}),(r=this.composer)==null||r.render(),requestAnimationFrame(l=>{this.update(l)})}}class ue{constructor(){a(this,"Geometry");a(this,"update");a(this,"ChangeModel")}}const H=new x;H.crossOrigin="";const me=new P({size:7,map:H.load(b),blending:_,depthWrite:!1,transparent:!0});function C(d,e){return Math.random()*(e-d)+d}class E extends ue{constructor(t){var h;super();a(this,"longestDistance");a(this,"particleSum");a(this,"renderUpdate");a(this,"onChangeModel");a(this,"callback");a(this,"Geometry");a(this,"update",()=>{var t;(t=this.renderUpdate)==null||t.call(this,this.Geometry)});a(this,"ChangeModel",()=>{var t;(t=this.onChangeModel)==null||t.call(this,this.Geometry)});const{longestDistance:o,particleSum:s,renderUpdate:i,onChangeModel:r}=t;this.longestDistance=o,this.particleSum=s,this.renderUpdate=i,this.onChangeModel=r;const l=[];for(let c=0;c<this.particleSum;c++){const u=C(-1*o,o),n=C(-1*o,o),p=C(-1*o,o);l.push(u,n,p)}const m=new w;m.setAttribute("position",new L(l,3)),this.Geometry=new T(m,me),(h=t.callback)==null||h.call(this,this.Geometry)}}function pe(){const s=new Float32Array(7500),i=new Float32Array(2500);let r=0;const l=new x,m=new P({size:5,sizeAttenuation:!0,transparent:!0,opacity:1,blending:_,depthWrite:!1,map:l.load(b)});for(let n=0;n<50;n++)for(let p=0;p<50;p++)s[r]=n*100-50*100/2,s[r+1]=-300,s[r+2]=p*100-50*100/2,r+=3;const h=new w;h.setAttribute("position",new L(s,3)),h.setAttribute("scale",new N(i,1));const u=new T(h,m).geometry;return u.attributes.position.needsUpdate=!0,u}const f=U.exports.jsx,v=U.exports.jsxs;function fe(){const d=S.exports.useRef(null);let e=null;const t={firefly:.002},o=1500,s=new g.Tween(t).easing(g.Easing.Exponential.In),i=new g.Tween(t).easing(g.Easing.Exponential.In),r=new E({longestDistance:o,particleSum:500,renderUpdate:n=>{n.rotation.x-=t.firefly},callback:n=>{n.position.z=-1*o},onChangeModel:()=>{s.stop(),i.stop().to({firefly:.04},1500).chain(s),s.to({firefly:.002},1500),i.start()}}),l=new E({longestDistance:o,particleSum:500,renderUpdate:n=>{n.rotation.y+=t.firefly},callback:n=>{n.position.y=-.2*o,n.position.z=-1*o}}),m=new E({longestDistance:o,particleSum:500,renderUpdate:n=>{n.rotation.z+=t.firefly/2},callback:n=>{n.position.z=-1.2*o}}),h=600;let c=0;const u=[{name:"cube",path:new URL("/up2017-particle-effect/assets/cube.586cf881.obj",self.location).href,onLoadComplete(n){n.scale(400,400,400)}},{name:"ball",path:new URL("/up2017-particle-effect/assets/ball.4e1d00af.obj",self.location).href,onLoadComplete(n){n.scale(h,h,h),n.translate(-600,0,-100)},onEnterStart(n){console.log("ball enter start")},onEnterEnd(n){console.log("ball enter end")}},{name:"wave",geometry:pe(),onAnimationFrameUpdate(n,p,Me){const I=n.geometry.getAttribute("position");return p.forEach((D,y)=>{D.isPlaying===!1&&I.setY(y,Math.sin((y+1+c)*.3)*50+Math.sin((y+c)*.5)*50-500)}),c+=.08,!0}},{name:"cone",path:new URL("/up2017-particle-effect/assets/cone.6a275bf6.obj",self.location).href,onLoadComplete(n){n.scale(h,h,h),n.translate(-600,100,-100)}}];return window.changeModel=n=>{e!=null&&e.ChangeModel(n)},S.exports.useEffect(()=>{e==null&&d.current!=null&&(e=new he({CanvasWrapper:d.current,Models:u,addons:[r,l,m],onModelsFinishedLoad:n=>{e==null||e.ListenMouseMove()}}))}),v("div",{className:M.index_page,children:[f("div",{className:M.canvas_wrapper,ref:d}),f("ul",{className:M.list,children:u.map(n=>f("li",{onClick:()=>e==null?void 0:e.ChangeModel(n.name),children:n.name},n.name))}),v("ul",{className:M.function_list,children:[f("li",{onClick:()=>e==null?void 0:e.ListenMouseMove(),children:"ListenMouseMove"}),f("li",{onClick:()=>e==null?void 0:e.StopListenMouseMove(),children:"StopListenMouseMove"}),f("li",{onClick:()=>e==null?void 0:e.AlignCameraCenter(),children:"AlignCameraCenter"}),f("li",{onClick:()=>e==null?void 0:e.AlignCameraCenter(!0),children:"AlignCameraCenter(immediately)"})]})]})}function ge(){return f("div",{className:oe.layout,children:f(fe,{})})}function we(){return f(ge,{})}te.createRoot(document.getElementById("root")).render(f(se.StrictMode,{children:f(we,{})}));
