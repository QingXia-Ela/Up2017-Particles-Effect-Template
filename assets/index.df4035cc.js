var O=Object.defineProperty;var G=(d,e,t)=>e in d?O(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var i=(d,e,t)=>(G(d,typeof e!="symbol"?e+"":e,t),t);import{O as W,a as z,S as B,F as k,P as j,V,A as X,W as Y,b as K,c as $,E as q,R as Z,B as J,d as Q,e as ee,f as te,T as _,g as b,h as T,i as w,j as F,k as g,l as A,m as S,n as se,o as H,_ as N,p as ne,q as oe,r as ae}from"./vendor.33813b5a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const ie="_layout_a6b8l_1",re={layout:ie},le="_index_page_1lbrh_1",ce="_canvas_wrapper_1lbrh_6",de="_list_1lbrh_14",he="_function_list_1lbrh_15",M={index_page:le,canvas_wrapper:ce,list:de,function_list:he},v=""+new URL("gradient.2d7d71df.png",import.meta.url).href;function I(d){const e=new Set;let t=[];for(let s=0;s<d.length;s++)t.push(d[s]),s%3===2&&(e.add(t.join(",")),t=[]);const o=[];return e.forEach(s=>{o.push(...s.split(",").map(a=>Number(a)))}),new Float32Array(o)}const ue=["position","normal","uv","color","skinIndex","skinWeight","instanceMatri","morphTarget0","morphTarget1","morphTarget2","morphTarget3","morphTarget4","morphTarget5","morphTarget6","morphTarget7","morphNormal0","morphNormal1","morphNormal2","morphNormal3"];function x(d,e){return Math.random()*(e-d)+d}class me{constructor(e){i(this,"CanvasWrapper");i(this,"modelList");i(this,"_LOAD_COUNT_");i(this,"ModelPointer");i(this,"maxParticlesCount");i(this,"WIDTH");i(this,"HEIGHT");i(this,"orbitControls");i(this,"stats");i(this,"scene");i(this,"camera");i(this,"renderer");i(this,"composer");i(this,"manager");i(this,"PointMaterial");i(this,"AnimateEffectParticle");i(this,"AnimateDuration");i(this,"mouseV");i(this,"mouseK");i(this,"hadListenMouseMove");i(this,"MainParticleGroup");i(this,"defaultLoader");i(this,"ParticleAnimeMap");i(this,"Models");i(this,"addons");i(this,"onModelsFinishedLoad");i(this,"onRendering");i(this,"CurrentUseModelName");i(this,"LastUseModelName");i(this,"handleWindowResize",()=>{var e,t;this.HEIGHT=window.innerHeight,this.WIDTH=window.innerWidth,(e=this.renderer)==null||e.setSize(this.WIDTH,this.HEIGHT),(t=this.composer)==null||t.reset(),this.camera!=null&&(this.camera.aspect=this.WIDTH/this.HEIGHT,this.camera.updateProjectionMatrix())});i(this,"rotateScene",se.exports.throttle(e=>{this.mouseV=3e-4*(e.clientX-this.WIDTH/2),this.mouseK=1e-4*(e.clientY-this.HEIGHT/2)},100));const{AnimateDuration:t,onModelsFinishedLoad:o,LoadingManager:s}=e;this.CanvasWrapper=e.CanvasWrapper,this.addons=e.addons!=null?e.addons:[],this.Models=new Map;for(const a of e.Models)this.Models.set(a.name,a);this.AnimateDuration=typeof t=="number"?t:1500,this.onModelsFinishedLoad=o,this.manager=s,this.defaultLoader=new W(this.manager),this.ParticleAnimeMap=[],this.HEIGHT=window.innerHeight,this.WIDTH=window.innerWidth,this.modelList=new Map,this._LOAD_COUNT_=0,this.ModelPointer=0,this.maxParticlesCount=0,this.createScene(),this.initStats(),this._addModels(),this.createEffect(),this.orbitControls=new z(this.camera,this.renderer.domElement),this.mouseK=0,this.mouseV=0,this.update(0)}createScene(){this.scene=new B,this.scene.fog=new k(328972,5e-4);const e=100,t=this.WIDTH/this.HEIGHT,o=1,s=5e4;this.camera=new j(e,t,o,s),this.camera.position.set(0,0,1e3),this.camera.lookAt(new V(0,0,0));const a=new X(500);this.scene.add(a),this.addons!=null&&this.addons.forEach(r=>{var l;(l=this.scene)==null||l.add(r.Geometry)}),this.renderer=new Y({alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(this.scene.fog.color),this.renderer.setSize(this.WIDTH,this.HEIGHT),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=K,this.CanvasWrapper.appendChild(this.renderer.domElement),window.addEventListener("resize",this.handleWindowResize,!1)}initStats(){this.stats=$(),this.stats!=null&&(this.stats.domElement.style.position="absolute",this.stats.domElement.style.bottom="0px",this.stats.domElement.style.top="0px",this.stats.domElement.style.zIndex="100",this.CanvasWrapper.appendChild(this.stats.domElement))}createEffect(){this.composer=new q(this.renderer);const e=new Z(this.scene,this.camera),t=new J(.75),o=new Q(.5,.5,1500,0),s=new ee(te);s.uniforms.screenWidth.value=window.innerWidth,s.uniforms.screenHeight.value=window.innerHeight,s.uniforms.sampleDistance.value=.4,s.renderToScreen=!0,this.composer.addPass(e),this.composer.addPass(t),this.composer.addPass(o),this.composer.addPass(s)}_addModels(){const e=new _;e.crossOrigin="",this.PointMaterial=new b({size:5,sizeAttenuation:!0,transparent:!0,opacity:1,blending:T,depthWrite:!1,map:e.load(v)}),this.Models.forEach(t=>{let o,s=new Float32Array([]);const a=()=>{var r;this.modelList.set(t.name,o),(r=t.onLoadComplete)==null||r.call(this,o),this._LOAD_COUNT_++,this._LOAD_COUNT_===this.Models.size&&this._finishLoadModal()};if(typeof t.path=="string")if(t.loader!=null){const{loaderInstance:r,load:l}=t.loader;r.load(t.path,m=>{o=l(m),a()})}else this.defaultLoader.load(t.path,r=>{for(const l of r.children){const m=l.geometry.attributes.position.array;s=new Float32Array([...s,...m])}t.NeedRemoveDuplicateParticle!==!1&&(s=I(s)),o=new w,o.setAttribute("position",new F(s,3)),t.geometry=o,a()});else t.geometry instanceof w&&(o=t.geometry,a())})}_finishLoadModal(){var a,r;let e=0;this.modelList.forEach(l=>{e=Math.max(e,l.attributes.position.count)}),this.maxParticlesCount=e;const t=[],o=1500;this.MainParticleGroup=new g.Group;for(let l=0;l<e;l++){const m=x(-1*o,o),h=x(-1*o,o),c=x(-1*o,o);t.push(m,h,c);const u={x:m,y:h,z:c,isPlaying:!0};u.tweenctx=new g.Tween(u,this.MainParticleGroup).easing(g.Easing.Exponential.In).onComplete(n=>{n.tweenctx._valuesStart.x=n.x,n.tweenctx._valuesStart.y=n.y,n.tweenctx._valuesStart.z=n.z,n.isPlaying=!1}).onStart(n=>{n.tweenctx._valuesStart.x=n.x,n.tweenctx._valuesStart.y=n.y,n.tweenctx._valuesStart.z=n.z,n.isPlaying=!0}),this.ParticleAnimeMap[l]=u}const s=new w;s.setAttribute("position",new A(t,3,!1)),this.AnimateEffectParticle=new S(s,this.PointMaterial),(a=this.scene)==null||a.add(this.AnimateEffectParticle),(r=this.onModelsFinishedLoad)==null||r.call(this,this.AnimateEffectParticle,this.scene)}ChangeModel(e,t=this.AnimateDuration){var m,h;const o=this.modelList.get(e);if(o==null){console.warn("\u672A\u627E\u5230\u6307\u5B9A\u540D\u5B57\u7684\u6A21\u578B\uFF0C\u6539\u53D8\u64CD\u4F5C\u5DF2\u7EC8\u6B62\uFF01\u4F20\u5165\u7684\u540D\u5B57\uFF1A"+e.toString());return}const s=this.Models.get(e);this.CurrentUseModelName!==void 0&&(this.LastUseModelName=this.CurrentUseModelName),this.CurrentUseModelName=e,(m=s.onEnterStart)==null||m.call(this,this.AnimateEffectParticle);const a=o.getAttribute("position"),r=this.AnimateEffectParticle.geometry.getAttribute("position"),l=setTimeout(()=>{var c;(c=s.onEnterEnd)==null||c.call(this,this.AnimateEffectParticle)},t*2);for(let c=0;c<this.maxParticlesCount;c++){const u=this.ParticleAnimeMap[c];this.ParticleAnimeMap[c].isPlaying=!0;const n=c%a.count;u.x=r.getX(c),u.y=r.getY(c),u.z=r.getZ(c),u.tweenctx.stop().to({x:a.array[n*3],y:a.array[n*3+1],z:a.array[n*3+2]},t).delay(t*Math.random()).onUpdate(p=>{r.setXYZ(c,p.x,p.y,p.z),r.needsUpdate=!0}).onStop(p=>{clearTimeout(l)}).start()}(h=this.addons)==null||h.forEach(c=>{var u;(u=c.ChangeModel)==null||u.call(this)})}ListenMouseMove(){this.hadListenMouseMove!==!0&&(window.addEventListener("mousemove",this.rotateScene),this.hadListenMouseMove=!0)}StopListenMouseMove(){this.hadListenMouseMove===!0&&(window.removeEventListener("mousemove",this.rotateScene),this.hadListenMouseMove=!1)}AlignCameraCenter(e=!1){if(e&&this.scene!=null){this.scene.rotation.x=0,this.scene.rotation.y=0,this.mouseV=0,this.mouseK=0;return}const t=new MouseEvent("click",{clientX:this.WIDTH/2,clientY:this.HEIGHT/2});this.rotateScene(t)}VerticesDuplicateRemove(e){const t=new Set;let o=[];for(let a=0;a<e.length;a++)o.push(e[a]),a%3===2&&(t.add(o.join(",")),o=[]);const s=[];return t.forEach(a=>{s.push(...a.split(",").map(r=>Number(r)))}),new Float32Array(s)}_updateRotation(){this.scene!=null&&(this.scene.rotation.y+=(this.mouseV-this.scene.rotation.y)/50,this.scene.rotation.x+=(this.mouseK-this.scene.rotation.x)/50)}update(e){var t,o,s,a,r;g.update(),(t=this.MainParticleGroup)==null||t.update(),(o=this.onRendering)==null||o.call(this,e),(s=this.stats)==null||s.update(),this._updateRotation(),this.Models.forEach(l=>{var m,h;if(l.name===this.CurrentUseModelName&&l.onAnimationFrameUpdate!=null&&l.onAnimationFrameUpdate(this.AnimateEffectParticle,this.ParticleAnimeMap,l.geometry)===!0)for(const c of ue){const u=(h=(m=this.AnimateEffectParticle)==null?void 0:m.geometry)==null?void 0:h.getAttribute(c);u!=null&&(u.needsUpdate=!0)}}),(a=this.addons)==null||a.forEach(l=>{l.update()}),(r=this.composer)==null||r.render(),requestAnimationFrame(l=>{this.update(l)})}}class pe{constructor(){i(this,"Geometry");i(this,"update");i(this,"ChangeModel")}}const R=new _;R.crossOrigin="";const fe=new b({size:7,map:R.load(v),blending:T,depthWrite:!1,transparent:!0});function L(d,e){return Math.random()*(e-d)+d}class P extends pe{constructor(t){var h;super();i(this,"longestDistance");i(this,"particleSum");i(this,"renderUpdate");i(this,"onChangeModel");i(this,"callback");i(this,"Geometry");i(this,"update",()=>{var t;(t=this.renderUpdate)==null||t.call(this,this.Geometry)});i(this,"ChangeModel",()=>{var t;(t=this.onChangeModel)==null||t.call(this,this.Geometry)});const{longestDistance:o,particleSum:s,renderUpdate:a,onChangeModel:r}=t;this.longestDistance=o,this.particleSum=s,this.renderUpdate=a,this.onChangeModel=r;const l=[];for(let c=0;c<this.particleSum;c++){const u=L(-1*o,o),n=L(-1*o,o),p=L(-1*o,o);l.push(u,n,p)}const m=new w;m.setAttribute("position",new A(l,3)),this.Geometry=new S(m,fe),(h=t.callback)==null||h.call(this,this.Geometry)}}function ge(){const s=new Float32Array(7500),a=new Float32Array(2500);let r=0;const l=new _,m=new b({size:5,sizeAttenuation:!0,transparent:!0,opacity:1,blending:T,depthWrite:!1,map:l.load(v)});for(let n=0;n<50;n++)for(let p=0;p<50;p++)s[r]=n*100-50*100/2,s[r+1]=-300,s[r+2]=p*100-50*100/2,r+=3;const h=new w;h.setAttribute("position",new A(s,3)),h.setAttribute("scale",new F(a,1));const u=new S(h,m).geometry;return u.attributes.position.needsUpdate=!0,u}const f=H.exports.jsx,U=H.exports.jsxs;function we(){const d=N.exports.useRef(null);let e=null;const t={firefly:.002},o=1500,s=new g.Tween(t).easing(g.Easing.Exponential.In),a=new g.Tween(t).easing(g.Easing.Exponential.In),r=new P({longestDistance:o,particleSum:500,renderUpdate:n=>{n.rotation.x-=t.firefly},callback:n=>{n.position.z=-1*o},onChangeModel:()=>{s.stop(),a.stop().to({firefly:.04},1500).chain(s),s.to({firefly:.002},1500),a.start()}}),l=new P({longestDistance:o,particleSum:500,renderUpdate:n=>{n.rotation.y+=t.firefly},callback:n=>{n.position.y=-.2*o,n.position.z=-1*o}}),m=new P({longestDistance:o,particleSum:500,renderUpdate:n=>{n.rotation.z+=t.firefly/2},callback:n=>{n.position.z=-1.2*o}}),h=600;let c=0;const u=[{name:"cube",path:new URL(""+new URL("cube.a177850e.fbx",import.meta.url).href,self.location).href,onLoadComplete(n){n.scale(400,400,400)},loader:{loaderInstance:new ne,load(n){const p=new w;console.log(n);let y=new Float32Array([]);for(const C of n.children)y=new Float32Array([...y,...C.geometry.attributes.position.array]);return p.setAttribute("position",new A(I(y),3)),p}}},{name:"ball",path:new URL(""+new URL("ball.f680aeec.obj",import.meta.url).href,self.location).href,onLoadComplete(n){n.scale(h,h,h),n.translate(-600,0,-100)},onEnterStart(n){console.log("ball enter start")},onEnterEnd(n){console.log("ball enter end")}},{name:"wave",geometry:ge(),onAnimationFrameUpdate(n,p,y){const C=n.geometry.getAttribute("position");return p.forEach((D,E)=>{D.isPlaying===!1&&C.setY(E,Math.sin((E+1+c)*.3)*50+Math.sin((E+c)*.5)*50-500)}),c+=.08,!0}},{name:"cone",path:new URL(""+new URL("cone.6a8c2bce.obj",import.meta.url).href,self.location).href,onLoadComplete(n){n.scale(h,h,h),n.translate(600,100,-100)}}];return window.changeModel=n=>{e!=null&&e.ChangeModel(n)},N.exports.useEffect(()=>{e==null&&d.current!=null&&(e=new me({CanvasWrapper:d.current,Models:u,addons:[r,l,m],onModelsFinishedLoad:n=>{e==null||e.ListenMouseMove()}}))}),U("div",{className:M.index_page,children:[f("div",{className:M.canvas_wrapper,ref:d}),f("ul",{className:M.list,children:u.map(n=>f("li",{onClick:()=>e==null?void 0:e.ChangeModel(n.name),children:n.name},n.name))}),U("ul",{className:M.function_list,children:[f("li",{onClick:()=>e==null?void 0:e.ListenMouseMove(),children:"ListenMouseMove"}),f("li",{onClick:()=>e==null?void 0:e.StopListenMouseMove(),children:"StopListenMouseMove"}),f("li",{onClick:()=>e==null?void 0:e.AlignCameraCenter(),children:"AlignCameraCenter"}),f("li",{onClick:()=>e==null?void 0:e.AlignCameraCenter(!0),children:"AlignCameraCenter(immediately)"})]})]})}function ye(){return f("div",{className:re.layout,children:f(we,{})})}function Me(){return f(ye,{})}oe.createRoot(document.getElementById("root")).render(f(ae.StrictMode,{children:f(Me,{})}));