import{t as C,y as b,A as D,d as q,av as Gt,ah as Ht,aw as F,o as X,b as Y,e as vt,f as wt,h as dt,ac as qt,F as Xt,g as Ft,a8 as Yt,ax as Zt,l as lt,i as Qt,v as Jt,P as Wt,S as ht,ay as te,J as ee,az as se,n as ne,D as re}from"../modules/vue-DN_7CjgO.js";import{X as ie,a as Tt,a0 as St,S as bt,z as Pt,A as Et,Y as ae,a1 as oe,_ as Kt,a2 as le,a3 as he,a4 as ue,a5 as ce,a6 as de,v as ft,a7 as fe,a8 as pe,a9 as ut,aa as Mt,ab as ge,Q as me}from"../index-BE4xdenT.js";function ve(t){var e;return{info:C(((e=ie(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const ct={};function ls(t){function e(s){return ct[s]??(ct[s]=ve(s))}return{info:b({get(){return e(D(t)).info.value},set(s){e(D(t)).info.value=s}}),update:async(s,n)=>{const i=e(n??D(t)),r=await i.update(s);return r&&(i.info.value=r),r}}}const ye=["id"],xe=["id"],_e=q({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{isPrintMode:s}=Tt(),n=C(null),i=Gt(n),r=C(null),o=b(()=>e.width??i.width.value),a=b(()=>e.width?e.width/St.value:i.height.value),l=b(()=>bt.value&&!s.value?+bt.value:Math.min(o.value/Pt.value,a.value/Et.value)),p=b(()=>({height:`${Et.value}px`,width:`${Pt.value}px`,transform:`translate(-50%, -50%) scale(${l.value})`,"--slidev-slide-scale":l.value})),y=b(()=>e.width?{width:`${e.width}px`,height:`${e.width/St.value}px`}:{});return e.isMain&&Ht(b(()=>`:root { --slidev-slide-scale: ${l.value}; }`)),F(ae,l),F(oe,r),(v,S)=>(X(),Y("div",{id:t.isMain?"slide-container":void 0,ref_key:"container",ref:n,class:"slidev-slide-container",style:dt(y.value)},[vt("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:r,class:"slidev-slide-content",style:dt(p.value)},[wt(v.$slots,"default",{},void 0,!0)],12,xe),wt(v.$slots,"controls",{},void 0,!0)],12,ye))}}),hs=Kt(_e,[["__scopeId","data-v-d7d8f842"]]),we={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},Se=vt("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),be=vt("div",null,"Loading slide...",-1),Pe=q({__name:"SlideLoading",setup(t){const e=C(!1);return qt(()=>{setTimeout(()=>{e.value=!0},200)}),(s,n)=>(X(),Y("div",we,[e.value?(X(),Y(Xt,{key:0},[Se,be],64)):Ft("v-if",!0)]))}}),us={render:()=>[]},cs={render:()=>[]},Ee={render:()=>[]},Me={render:()=>[]},Le=["data-slidev-no"],Ce=q({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,s=b(()=>{var o,a;return((a=(o=e.route.meta)==null?void 0:o.slide)==null?void 0:a.frontmatter.zoom)??1});F(le,e.route),F(he,e.route.meta.slide.frontmatter),F(ue,C(e.route.no)),F(ce,C(e.renderContext)),F(de,Yt(e,"clicksContext")),F(fe,s);const n=b(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),i=b(()=>({...n.value,"user-select":ft.selectable?void 0:"none"})),r=b(()=>e.route&&Zt({loader:async()=>{var a,l;const o=await e.route.component();return q({mounted:(a=e.clicksContext)==null?void 0:a.onMounted,unmounted:(l=e.clicksContext)==null?void 0:l.onUnmounted,render:()=>Jt(o.default)})},delay:300,loadingComponent:Pe}));return(o,a)=>(X(),Y("div",{"data-slidev-no":e.route.no,class:Qt(D(pe)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:dt(i.value)},[lt(D(Me)),lt(D(r)),lt(D(Ee))],14,Le))}}),ds=Kt(Ce,[["__scopeId","data-v-c1ee9710"]]);var ke=Object.defineProperty,Lt=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,Ct=(t,e,s)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,pt=(t,e)=>{for(var s in e||(e={}))De.call(e,s)&&Ct(t,s,e[s]);if(Lt)for(var s of Lt(e))Ie.call(e,s)&&Ct(t,s,e[s]);return t},Ne=()=>({emit(t,...e){for(let s=0,n=this.events[t]||[],i=n.length;s<i;s++)n[s](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}});function kt(t,e,s,n=i=>i){return t*n(.5-e*(.5-s))}function $e(t){return[-t[0],-t[1]]}function L(t,e){return[t[0]+e[0],t[1]+e[1]]}function P(t,e){return[t[0]-e[0],t[1]-e[1]]}function M(t,e){return[t[0]*e,t[1]*e]}function Ae(t,e){return[t[0]/e,t[1]/e]}function B(t){return[t[1],-t[0]]}function Dt(t,e){return t[0]*e[0]+t[1]*e[1]}function Fe(t,e){return t[0]===e[0]&&t[1]===e[1]}function Te(t){return Math.hypot(t[0],t[1])}function Ke(t){return t[0]*t[0]+t[1]*t[1]}function It(t,e){return Ke(P(t,e))}function zt(t){return Ae(t,Te(t))}function ze(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function G(t,e,s){let n=Math.sin(s),i=Math.cos(s),r=t[0]-e[0],o=t[1]-e[1],a=r*i-o*n,l=r*n+o*i;return[a+e[0],l+e[1]]}function gt(t,e,s){return L(t,M(P(e,t),s))}function Nt(t,e,s){return L(t,M(e,s))}var{min:R,PI:je}=Math,$t=.275,H=je+1e-4;function Re(t,e={}){let{size:s=16,smoothing:n=.5,thinning:i=.5,simulatePressure:r=!0,easing:o=u=>u,start:a={},end:l={},last:p=!1}=e,{cap:y=!0,easing:v=u=>u*(2-u)}=a,{cap:S=!0,easing:f=u=>--u*u*u+1}=l;if(t.length===0||s<=0)return[];let d=t[t.length-1].runningLength,c=a.taper===!1?0:a.taper===!0?Math.max(s,d):a.taper,E=l.taper===!1?0:l.taper===!0?Math.max(s,d):l.taper,j=Math.pow(s*n,2),I=[],h=[],x=t.slice(0,10).reduce((u,w)=>{let g=w.pressure;if(r){let m=R(1,w.distance/s),it=R(1,1-m);g=R(1,u+(it-u)*(m*$t))}return(u+g)/2},t[0].pressure),_=kt(s,i,t[t.length-1].pressure,o),et,st=t[0].vector,U=t[0].point,Z=U,T=U,K=Z,nt=!1;for(let u=0;u<t.length;u++){let{pressure:w}=t[u],{point:g,vector:m,distance:it,runningLength:V}=t[u];if(u<t.length-1&&d-V<3)continue;if(i){if(r){let A=R(1,it/s),ot=R(1,1-A);w=R(1,x+(ot-x)*(A*$t))}_=kt(s,i,w,o)}else _=s/2;et===void 0&&(et=_);let Ut=V<c?v(V/c):1,Vt=d-V<E?f((d-V)/E):1;_=Math.max(.01,_*Math.min(Ut,Vt));let yt=(u<t.length-1?t[u+1]:t[u]).vector,at=u<t.length-1?Dt(m,yt):1,Bt=Dt(m,st)<0&&!nt,xt=at!==null&&at<0;if(Bt||xt){let A=M(B(st),_);for(let ot=1/13,J=0;J<=1;J+=ot)T=G(P(g,A),g,H*J),I.push(T),K=G(L(g,A),g,H*-J),h.push(K);U=T,Z=K,xt&&(nt=!0);continue}if(nt=!1,u===t.length-1){let A=M(B(m),_);I.push(P(g,A)),h.push(L(g,A));continue}let _t=M(B(gt(yt,m,at)),_);T=P(g,_t),(u<=1||It(U,T)>j)&&(I.push(T),U=T),K=L(g,_t),(u<=1||It(Z,K)>j)&&(h.push(K),Z=K),x=w,st=m}let N=t[0].point.slice(0,2),$=t.length>1?t[t.length-1].point.slice(0,2):L(t[0].point,[1,1]),rt=[],Q=[];if(t.length===1){if(!(c||E)||p){let u=Nt(N,zt(B(P(N,$))),-(et||_)),w=[];for(let g=1/13,m=g;m<=1;m+=g)w.push(G(u,N,H*2*m));return w}}else{if(!(c||E&&t.length===1))if(y)for(let w=1/13,g=w;g<=1;g+=w){let m=G(h[0],N,H*g);rt.push(m)}else{let w=P(I[0],h[0]),g=M(w,.5),m=M(w,.51);rt.push(P(N,g),P(N,m),L(N,m),L(N,g))}let u=B($e(t[t.length-1].vector));if(E||c&&t.length===1)Q.push($);else if(S){let w=Nt($,u,_);for(let g=1/29,m=g;m<1;m+=g)Q.push(G(w,$,H*3*m))}else Q.push(L($,M(u,_)),L($,M(u,_*.99)),P($,M(u,_*.99)),P($,M(u,_)))}return I.concat(Q,h.reverse(),rt)}function Oe(t,e={}){var s;let{streamline:n=.5,size:i=16,last:r=!1}=e;if(t.length===0)return[];let o=.15+(1-n)*.85,a=Array.isArray(t[0])?t:t.map(({x:f,y:d,pressure:c=.5})=>[f,d,c]);if(a.length===2){let f=a[1];a=a.slice(0,-1);for(let d=1;d<5;d++)a.push(gt(a[0],f,d/4))}a.length===1&&(a=[...a,[...L(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,y=0,v=l[0],S=a.length-1;for(let f=1;f<a.length;f++){let d=r&&f===S?a[f].slice(0,2):gt(v.point,a[f],o);if(Fe(v.point,d))continue;let c=ze(d,v.point);if(y+=c,f<S&&!p){if(y<i)continue;p=!0}v={point:d,pressure:a[f][2]>=0?a[f][2]:.5,vector:zt(P(v.point,d)),distance:c,runningLength:y},l.push(v)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function Ue(t,e={}){return Re(Oe(t,e),e)}function W(t,e){return t-e}function Ve(t){return t<0?-1:1}function tt(t){return[Math.abs(t),Ve(t)]}function jt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Be=2,k=Be,O=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,n;const i=this.drauu.el,r=(e=this.drauu.options.coordinateScale)!=null?e:1,o=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-a.left+o.x)*r,y:(t.pageY-a.top+o.y)*r,pressure:t.pressure}}else{const a=this.drauu.svgPoint;a.x=t.clientX+o.x,a.y=t.clientY+o.y;const l=a.matrixTransform((n=i.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*r,y:l.y*r,pressure:t.pressure}}}createElement(t,e){var s;const n=document.createElementNS("http://www.w3.org/2000/svg",t),i=e?pt(pt({},this.brush),e):this.brush;return n.setAttribute("fill",(s=i.fill)!=null?s:"transparent"),n.setAttribute("stroke",i.color),n.setAttribute("stroke-width",i.size.toString()),n.setAttribute("stroke-linecap","round"),i.dasharray&&n.setAttribute("stroke-dasharray",i.dasharray),n}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(k))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Ge=class Rt extends O{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return Rt.getSvgData(e,this.brush)}static getSvgData(e,s){const n=Ue(e,pt({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!n.length)return"";const i=n.reduce((r,[o,a],l,p)=>{const[y,v]=p[(l+1)%p.length];return r.push(o,a,(o+y)/2,(a+v)/2),r},["M",...n[0],"Q"]);return i.push("Z"),i.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},He=class extends O{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=tt(t.x-this.start.x),[n,i]=tt(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(e,n);e=r,n=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",n);else{const[r,o]=[this.start.x,this.start.x+e*s].sort(W),[a,l]=[this.start.y,this.start.y+n*i].sort(W);this.attr("cx",(r+o)/2),this.attr("cy",(a+l)/2),this.attr("rx",(o-r)/2),this.attr("ry",(l-a)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ot(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",e),n.setAttribute("id",t),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(i),s.appendChild(n),s}var qe=class extends O{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=jt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Ot(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const n=t.x-this.start.x,i=t.y-this.start.y;if(i!==0){let r=n/i;r=Math.round(r),Math.abs(r)<=1?(e=this.start.x+i*r,s=this.start.y+i):(e=this.start.x+n,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},Xe=class extends O{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=tt(t.x-this.start.x),[n,i]=tt(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(e,n);e=r,n=r}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-n),this.attr("width",e*2),this.attr("height",n*2);else{const[r,o]=[this.start.x,this.start.x+e*s].sort(W),[a,l]=[this.start.y,this.start.y+n*i].sort(W);this.attr("x",r),this.attr("y",a),this.attr("width",o-r),this.attr("height",l-a)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ye(t,e){const s=t.x-e.x,n=t.y-e.y;return s*s+n*n}function Ze(t,e,s){let n=e.x,i=e.y,r=s.x-n,o=s.y-i;if(r!==0||o!==0){const a=((t.x-n)*r+(t.y-i)*o)/(r*r+o*o);a>1?(n=s.x,i=s.y):a>0&&(n+=r*a,i+=o*a)}return r=t.x-n,o=t.y-i,r*r+o*o}function Qe(t,e){let s=t[0];const n=[s];let i;for(let r=1,o=t.length;r<o;r++)i=t[r],Ye(i,s)>e&&(n.push(i),s=i);return s!==i&&i&&n.push(i),n}function mt(t,e,s,n,i){let r=n,o=0;for(let a=e+1;a<s;a++){const l=Ze(t[a],t[e],t[s]);l>r&&(o=a,r=l)}r>n&&(o-e>1&&mt(t,e,o,n,i),i.push(t[o]),s-o>1&&mt(t,o,s,n,i))}function Je(t,e){const s=t.length-1,n=[t[0]];return mt(t,0,s,e,n),n.push(t[s]),n}function At(t,e,s=!1){if(t.length<=2)return t;const n=e*e;return t=s?t:Qe(t,n),t=Je(t,n),t}var We=class z extends O{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=jt();const s=Ot(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=At(this.points,1,!0),this.count=0),this.attr("d",z.toSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",z.toSvgData(At(this.points,1,!0))),!e.getTotalLength()))}static line(e,s){const n=s.x-e.x,i=s.y-e.y;return{length:Math.sqrt(n**2+i**2),angle:Math.atan2(i,n)}}static controlPoint(e,s,n,i){const r=s||e,o=n||e,a=.2,l=z.line(r,o),p=l.angle+(i?Math.PI:0),y=l.length*a,v=e.x+Math.cos(p)*y,S=e.y+Math.sin(p)*y;return{x:v,y:S}}static bezierCommand(e,s,n){const i=z.controlPoint(n[s-1],n[s-2],e),r=z.controlPoint(e,n[s-1],n[s+1],!0);return`C ${i.x.toFixed(k)},${i.y.toFixed(k)} ${r.x.toFixed(k)},${r.y.toFixed(k)} ${e.x.toFixed(k)},${e.y.toFixed(k)}`}static toSvgData(e){return e.reduce((s,n,i,r)=>i===0?`M ${n.x.toFixed(k)},${n.y.toFixed(k)}`:`${s} ${z.bezierCommand(n,i,r)}`,"")}},ts=class extends O{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,n)=>{if(s&&s.length)for(let i=0;i<s.length;i++){const r=s[i];if(r.getTotalLength){const o=r.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const l=r.getPointAtLength(o*a/this.pathSubFactor),p=r.getPointAtLength(o*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:p.x,y1:l.y,y2:p.y,segment:a,element:n||r})}}else r.children&&e(r.children,r)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,n=t.x2,i=e.x1,r=e.x2,o=t.y1,a=t.y2,l=e.y1,p=e.y2,y=(s-n)*(l-p)-(o-a)*(i-r),v=(s*a-o*n)*(i-r)-(s-n)*(i*p-l*r),S=(s*a-o*n)*(l-p)-(o-a)*(i*p-l*r),f=(d,c,E)=>d>=c&&d<=E?!0:d>=E&&d<=c;if(y===0)return!1;{const d={x:v/y,y:S/y};return f(d.x,s,n)&&f(d.y,o,a)&&f(d.x,i,r)&&f(d.y,l,p)}}};function es(t){return{draw:new We(t),stylus:new Ge(t),line:new qe(t),rectangle:new Xe(t),ellipse:new He(t),eraseLine:new ts(t)}}var ss=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Ne(),this._originalPointerId=null,this._models=es(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(e)||this.el,i=this.eventStart.bind(this),r=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",i,{passive:!1}),s.addEventListener("pointermove",r,{passive:!1}),s.addEventListener("pointerup",o,{passive:!1}),s.addEventListener("pointercancel",o,{passive:!1}),s.addEventListener("keydown",a,!1),s.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",i),s.removeEventListener("pointermove",r),s.removeEventListener("pointerup",o),s.removeEventListener("pointercancel",o),s.removeEventListener("keydown",a,!1),s.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)})}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const n=this._elements[s];if(n){n.after(t);return}}this.el.prepend(t)}};function ns(t){return new ss(t)}const rs=Wt(()=>{const{currentSlideNo:t,isPresenter:e}=Tt(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],n=ht("slidev-drawing-enabled",!1),i=ht("slidev-drawing-pinned",!1),r=te(ht("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),o=C(!1),a=C(!1),l=C(!1),p=C(!1),y=C("stylus"),v=b(()=>ft.drawings.syncAll||e.value);let S=!1;const f=b({get(){return y.value},set(h){y.value=h,h==="arrow"?(c.mode="line",r.arrowEnd=!0):(c.mode=h,r.arrowEnd=!1)}}),d=ee({brush:r,acceptsInputTypes:b(()=>n.value&&(!ft.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=se(ns(d));function E(){c.clear(),v.value&&Mt(t.value,"")}function j(){var h;l.value=c.canRedo(),a.value=c.canUndo(),p.value=!!((h=c.el)!=null&&h.children.length)}function I(h){S=!0;const x=ut[h||t.value];x!=null?c.load(x):c.clear(),j(),S=!1}return c.on("changed",()=>{if(j(),!S){const h=c.dump(),x=t.value;(ut[x]||"")!==h&&v.value&&Mt(x,c.dump())}}),ge(h=>{S=!0,h[t.value]!=null&&c.load(h[t.value]||""),S=!1,j()}),ne(()=>{re(t,()=>{c.mounted&&I()},{immediate:!0})}),c.on("start",()=>o.value=!0),c.on("end",()=>o.value=!1),window.addEventListener("keydown",h=>{if(!n.value||me.value)return;const x=!h.ctrlKey&&!h.altKey&&!h.shiftKey&&!h.metaKey;let _=!0;h.code==="KeyZ"&&(h.ctrlKey||h.metaKey)?h.shiftKey?c.redo():c.undo():h.code==="Escape"?n.value=!1:h.code==="KeyL"&&x?f.value="line":h.code==="KeyA"&&x?f.value="arrow":h.code==="KeyS"&&x?f.value="stylus":h.code==="KeyR"&&x?f.value="rectangle":h.code==="KeyE"&&x?f.value="ellipse":h.code==="KeyC"&&x?E():h.code.startsWith("Digit")&&x&&+h.code[5]<=s.length?r.color=s[+h.code[5]-1]:_=!1,_&&(h.preventDefault(),h.stopPropagation())},!1),{brush:r,brushColors:s,canClear:p,canRedo:l,canUndo:a,clear:E,drauu:c,drauuOptions:d,drawingEnabled:n,drawingMode:f,drawingPinned:i,drawingState:ut,isDrawing:o,loadCanvas:I}}),is=["innerHTML"],fs=q({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=rs();return(s,n)=>D(e)[s.page]?(X(),Y("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:D(e)[s.page]},null,8,is)):Ft("v-if",!0)}});export{cs as G,ds as S,fs as _,hs as a,ve as b,rs as c,us as d,ls as u};
