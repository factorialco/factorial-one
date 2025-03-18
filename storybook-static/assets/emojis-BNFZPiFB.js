import{j as X}from"./jsx-runtime-Cf8x2fCZ.js";import{c as Id}from"./index-Cwk_nZHn.js";import{r as Pd}from"./index-B6o7_jwP.js";import{u as Fd}from"./a11y-GqbGs7UY.js";import{m as Y}from"./proxy-CqNJYjyK.js";var Z={};(function g(b,y,I,P){var R=!!(b.Worker&&b.Blob&&b.Promise&&b.OffscreenCanvas&&b.OffscreenCanvasRenderingContext2D&&b.HTMLCanvasElement&&b.HTMLCanvasElement.prototype.transferControlToOffscreen&&b.URL&&b.URL.createObjectURL),N=typeof Path2D=="function"&&typeof DOMMatrix=="function",k=function(){if(!b.OffscreenCanvas)return!1;var u=new OffscreenCanvas(1,1),d=u.getContext("2d");d.fillRect(0,0,1,1);var f=u.transferToImageBitmap();try{d.createPattern(f,"no-repeat")}catch{return!1}return!0}();function B(){}function M(u){var d=y.exports.Promise,f=d!==void 0?d:b.Promise;return typeof f=="function"?new f(u):(u(B,B),null)}var m=function(u,d){return{transform:function(f){if(u)return f;if(d.has(f))return d.get(f);var c=new OffscreenCanvas(f.width,f.height),a=c.getContext("2d");return a.drawImage(f,0,0),d.set(f,c),c},clear:function(){d.clear()}}}(k,new Map),x=function(){var u=Math.floor(16.666666666666668),d,f,c={},a=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(d=function(r){var n=Math.random();return c[n]=requestAnimationFrame(function e(t){a===t||a+u-1<t?(a=t,delete c[n],r()):c[n]=requestAnimationFrame(e)}),n},f=function(r){c[r]&&cancelAnimationFrame(c[r])}):(d=function(r){return setTimeout(r,u)},f=function(r){return clearTimeout(r)}),{frame:d,cancel:f}}(),_=function(){var u,d,f={};function c(a){function r(n,e){a.postMessage({options:n||{},callback:e})}a.init=function(e){var t=e.transferControlToOffscreen();a.postMessage({canvas:t},[t])},a.fire=function(e,t,o){if(d)return r(e,null),d;var h=Math.random().toString(36).slice(2);return d=M(function(s){function v(p){p.data.callback===h&&(delete f[h],a.removeEventListener("message",v),d=null,m.clear(),o(),s())}a.addEventListener("message",v),r(e,h),f[h]=v.bind(null,{data:{callback:h}})}),d},a.reset=function(){a.postMessage({reset:!0});for(var e in f)f[e](),delete f[e]}}return function(){if(u)return u;if(!I&&R){var a=["var CONFETTI, SIZE = {}, module = {};","("+g.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{u=new Worker(URL.createObjectURL(new Blob([a])))}catch(r){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",r),null}c(u)}return u}}(),j={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function A(u,d){return d?d(u):u}function L(u){return u!=null}function l(u,d,f){return A(u&&L(u[d])?u[d]:j[d],f)}function z(u){return u<0?0:Math.floor(u)}function D(u,d){return Math.floor(Math.random()*(d-u))+u}function V(u){return parseInt(u,16)}function ad(u){return u.map(rd)}function rd(u){var d=String(u).replace(/[^0-9a-f]/gi,"");return d.length<6&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),{r:V(d.substring(0,2)),g:V(d.substring(2,4)),b:V(d.substring(4,6))}}function nd(u){var d=l(u,"origin",Object);return d.x=l(d,"x",Number),d.y=l(d,"y",Number),d}function td(u){u.width=document.documentElement.clientWidth,u.height=document.documentElement.clientHeight}function id(u){var d=u.getBoundingClientRect();u.width=d.width,u.height=d.height}function od(u){var d=document.createElement("canvas");return d.style.position="fixed",d.style.top="0px",d.style.left="0px",d.style.pointerEvents="none",d.style.zIndex=u,d}function sd(u,d,f,c,a,r,n,e,t){u.save(),u.translate(d,f),u.rotate(r),u.scale(c,a),u.arc(0,0,1,n,e,t),u.restore()}function ld(u){var d=u.angle*(Math.PI/180),f=u.spread*(Math.PI/180);return{x:u.x,y:u.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:u.startVelocity*.5+Math.random()*u.startVelocity,angle2D:-d+(.5*f-Math.random()*f),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:u.color,shape:u.shape,tick:0,totalTicks:u.ticks,decay:u.decay,drift:u.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:u.gravity*3,ovalScalar:.6,scalar:u.scalar,flat:u.flat}}function bd(u,d){d.x+=Math.cos(d.angle2D)*d.velocity+d.drift,d.y+=Math.sin(d.angle2D)*d.velocity+d.gravity,d.velocity*=d.decay,d.flat?(d.wobble=0,d.wobbleX=d.x+10*d.scalar,d.wobbleY=d.y+10*d.scalar,d.tiltSin=0,d.tiltCos=0,d.random=1):(d.wobble+=d.wobbleSpeed,d.wobbleX=d.x+10*d.scalar*Math.cos(d.wobble),d.wobbleY=d.y+10*d.scalar*Math.sin(d.wobble),d.tiltAngle+=.1,d.tiltSin=Math.sin(d.tiltAngle),d.tiltCos=Math.cos(d.tiltAngle),d.random=Math.random()+2);var f=d.tick++/d.totalTicks,c=d.x+d.random*d.tiltCos,a=d.y+d.random*d.tiltSin,r=d.wobbleX+d.random*d.tiltCos,n=d.wobbleY+d.random*d.tiltSin;if(u.fillStyle="rgba("+d.color.r+", "+d.color.g+", "+d.color.b+", "+(1-f)+")",u.beginPath(),N&&d.shape.type==="path"&&typeof d.shape.path=="string"&&Array.isArray(d.shape.matrix))u.fill(vd(d.shape.path,d.shape.matrix,d.x,d.y,Math.abs(r-c)*.1,Math.abs(n-a)*.1,Math.PI/10*d.wobble));else if(d.shape.type==="bitmap"){var e=Math.PI/10*d.wobble,t=Math.abs(r-c)*.1,o=Math.abs(n-a)*.1,h=d.shape.bitmap.width*d.scalar,s=d.shape.bitmap.height*d.scalar,v=new DOMMatrix([Math.cos(e)*t,Math.sin(e)*t,-Math.sin(e)*o,Math.cos(e)*o,d.x,d.y]);v.multiplySelf(new DOMMatrix(d.shape.matrix));var p=u.createPattern(m.transform(d.shape.bitmap),"no-repeat");p.setTransform(v),u.globalAlpha=1-f,u.fillStyle=p,u.fillRect(d.x-h/2,d.y-s/2,h,s),u.globalAlpha=1}else if(d.shape==="circle")u.ellipse?u.ellipse(d.x,d.y,Math.abs(r-c)*d.ovalScalar,Math.abs(n-a)*d.ovalScalar,Math.PI/10*d.wobble,0,2*Math.PI):sd(u,d.x,d.y,Math.abs(r-c)*d.ovalScalar,Math.abs(n-a)*d.ovalScalar,Math.PI/10*d.wobble,0,2*Math.PI);else if(d.shape==="star")for(var i=Math.PI/2*3,w=4*d.scalar,C=8*d.scalar,E=d.x,F=d.y,S=5,T=Math.PI/S;S--;)E=d.x+Math.cos(i)*C,F=d.y+Math.sin(i)*C,u.lineTo(E,F),i+=T,E=d.x+Math.cos(i)*w,F=d.y+Math.sin(i)*w,u.lineTo(E,F),i+=T;else u.moveTo(Math.floor(d.x),Math.floor(d.y)),u.lineTo(Math.floor(d.wobbleX),Math.floor(a)),u.lineTo(Math.floor(r),Math.floor(n)),u.lineTo(Math.floor(c),Math.floor(d.wobbleY));return u.closePath(),u.fill(),d.tick<d.totalTicks}function hd(u,d,f,c,a){var r=d.slice(),n=u.getContext("2d"),e,t,o=M(function(h){function s(){e=t=null,n.clearRect(0,0,c.width,c.height),m.clear(),a(),h()}function v(){I&&!(c.width===P.width&&c.height===P.height)&&(c.width=u.width=P.width,c.height=u.height=P.height),!c.width&&!c.height&&(f(u),c.width=u.width,c.height=u.height),n.clearRect(0,0,c.width,c.height),r=r.filter(function(p){return bd(n,p)}),r.length?e=x.frame(v):s()}e=x.frame(v),t=s});return{addFettis:function(h){return r=r.concat(h),o},canvas:u,promise:o,reset:function(){e&&x.cancel(e),t&&t()}}}function H(u,d){var f=!u,c=!!l(d||{},"resize"),a=!1,r=l(d,"disableForReducedMotion",Boolean),n=R&&!!l(d||{},"useWorker"),e=n?_():null,t=f?td:id,o=u&&e?!!u.__confetti_initialized:!1,h=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,s;function v(i,w,C){for(var E=l(i,"particleCount",z),F=l(i,"angle",Number),S=l(i,"spread",Number),T=l(i,"startVelocity",Number),pd=l(i,"decay",Number),yd=l(i,"gravity",Number),Md=l(i,"drift",Number),J=l(i,"colors",ad),wd=l(i,"ticks",Number),G=l(i,"shapes"),xd=l(i,"scalar"),Cd=!!l(i,"flat"),K=nd(i),Q=E,q=[],Ed=u.width*K.x,Td=u.height*K.y;Q--;)q.push(ld({x:Ed,y:Td,angle:F,spread:S,startVelocity:T,color:J[Q%J.length],shape:G[D(0,G.length)],ticks:wd,decay:pd,gravity:yd,drift:Md,scalar:xd,flat:Cd}));return s?s.addFettis(q):(s=hd(u,q,t,w,C),s.promise)}function p(i){var w=r||l(i,"disableForReducedMotion",Boolean),C=l(i,"zIndex",Number);if(w&&h)return M(function(T){T()});f&&s?u=s.canvas:f&&!u&&(u=od(C),document.body.appendChild(u)),c&&!o&&t(u);var E={width:u.width,height:u.height};e&&!o&&e.init(u),o=!0,e&&(u.__confetti_initialized=!0);function F(){if(e){var T={getBoundingClientRect:function(){if(!f)return u.getBoundingClientRect()}};t(T),e.postMessage({resize:{width:T.width,height:T.height}});return}E.width=E.height=null}function S(){s=null,c&&(a=!1,b.removeEventListener("resize",F)),f&&u&&(document.body.contains(u)&&document.body.removeChild(u),u=null,o=!1)}return c&&!a&&(a=!0,b.addEventListener("resize",F,!1)),e?e.fire(i,E,S):v(i,E,S)}return p.reset=function(){e&&e.reset(),s&&s.reset()},p}var W;function $(){return W||(W=H(null,{useWorker:!0,resize:!0})),W}function vd(u,d,f,c,a,r,n){var e=new Path2D(u),t=new Path2D;t.addPath(e,new DOMMatrix(d));var o=new Path2D;return o.addPath(t,new DOMMatrix([Math.cos(n)*a,Math.sin(n)*a,-Math.sin(n)*r,Math.cos(n)*r,f,c])),o}function md(u){if(!N)throw new Error("path confetti are not supported in this browser");var d,f;typeof u=="string"?d=u:(d=u.path,f=u.matrix);var c=new Path2D(d),a=document.createElement("canvas"),r=a.getContext("2d");if(!f){for(var n=1e3,e=n,t=n,o=0,h=0,s,v,p=0;p<n;p+=2)for(var i=0;i<n;i+=2)r.isPointInPath(c,p,i,"nonzero")&&(e=Math.min(e,p),t=Math.min(t,i),o=Math.max(o,p),h=Math.max(h,i));s=o-e,v=h-t;var w=10,C=Math.min(w/s,w/v);f=[C,0,0,C,-Math.round(s/2+e)*C,-Math.round(v/2+t)*C]}return{type:"path",path:d,matrix:f}}function gd(u){var d,f=1,c="#000000",a='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof u=="string"?d=u:(d=u.text,f="scalar"in u?u.scalar:f,a="fontFamily"in u?u.fontFamily:a,c="color"in u?u.color:c);var r=10*f,n=""+r+"px "+a,e=new OffscreenCanvas(r,r),t=e.getContext("2d");t.font=n;var o=t.measureText(d),h=Math.ceil(o.actualBoundingBoxRight+o.actualBoundingBoxLeft),s=Math.ceil(o.actualBoundingBoxAscent+o.actualBoundingBoxDescent),v=2,p=o.actualBoundingBoxLeft+v,i=o.actualBoundingBoxAscent+v;h+=v+v,s+=v+v,e=new OffscreenCanvas(h,s),t=e.getContext("2d"),t.font=n,t.fillStyle=c,t.fillText(d,p,i);var w=1/f;return{type:"bitmap",bitmap:e.transferToImageBitmap(),matrix:[w,0,0,w,-h*w/2,-s*w/2]}}y.exports=function(){return $().apply(this,arguments)},y.exports.reset=function(){$().reset()},y.exports.create=H,y.exports.shapeFromPath=md,y.exports.shapeFromText=gd})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Z,!1);const dd=Z.exports;Z.exports.create;var O={},U={},ud;function Rd(){return ud||(ud=1,Object.defineProperty(U,"__esModule",{value:!0}),U.default=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g),U}var fd;function _d(){if(fd)return O;fd=1,Object.defineProperty(O,"__esModule",{value:!0}),O.TypeName=void 0,O.parse=P,O.toCodePoints=B;var g=Rd(),b=y(g);function y(M){return M&&M.__esModule?M:{default:M}}var I=O.TypeName="emoji";function P(M,m){var x=m&&m.assetType?m.assetType:"svg",_=m&&m.buildUrl?m.buildUrl:function(z,D){return D==="png"?"https://twemoji.maxcdn.com/v/latest/72x72/"+z+".png":"https://twemoji.maxcdn.com/v/latest/svg/"+z+".svg"},j=[];for(b.default.lastIndex=0;;){var A=b.default.exec(M);if(!A)break;var L=A[0],l=B(k(L)).join("-");j.push({url:l?_(l,x):"",indices:[A.index,b.default.lastIndex],text:L,type:I})}return j}var R=/\uFE0F/g,N="‍",k=function(m){return m.indexOf(N)<0?m.replace(R,""):m};function B(M){for(var m=[],x=0,_=0,j=0;j<M.length;)x=M.charCodeAt(j++),_?(m.push((65536+(_-55296<<10)+(x-56320)).toString(16)),_=0):x>55296&&x<=56319?_=x:m.push(x.toString(16));return m}return O}var jd=_d();const Sd=Id({variants:{size:{xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6"}},defaultVariants:{size:"sm"}});function ed({emoji:g,size:b}){const y=Od(g),I={initial:{scale:.75},animate:{scale:1},exit:{scale:.75},transition:{duration:.6,ease:[.175,.885,.32,1.275]}};return y?X.jsx(Y.img,{src:y.url,alt:g,className:Sd({size:b}),draggable:!1,...I},y.url):X.jsx(Y.span,{...I,children:g},g)}const Od=g=>{const[b]=jd.parse(g,{buildUrl:y=>`https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${y}.svg`});return b||null};function cd(g){return`${g} emoji`}const zd=()=>{const g=Fd();return{fireEmojiConfetti:Pd.useCallback((y,I)=>{const P=I.current;if(P){const R=P.getBoundingClientRect(),N=R.left+R.width/2,k=R.top;dd({particleCount:20,gravity:0,spread:360,startVelocity:10,ticks:50,origin:{x:N/window.innerWidth,y:k/window.innerHeight},shapes:[dd.shapeFromText({text:y,scalar:2})],scalar:2,disableForReducedMotion:g})}},[g])}};try{ed.displayName="EmojiImage",ed.__docgenInfo={description:"",displayName:"EmojiImage",props:{emoji:{defaultValue:null,description:"",name:"emoji",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}try{cd.displayName="getEmojiLabel",cd.__docgenInfo={description:"",displayName:"getEmojiLabel",props:{}}}catch{}export{ed as E,dd as c,cd as g,zd as u};
