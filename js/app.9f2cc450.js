(function(){"use strict";var n={2792:function(n,e,t){var o=t(9242),r=t(3396);function i(n,e,t,o,i,c){const u=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.j4)(u)}var c=t(4870),u=t(1114),l={__name:"HelloWorld",setup(n){const e=(0,c.iH)(null);return(0,r.bv)((()=>{console.log("mounted");const n=new u.CP7;n.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(n.domElement),window.addEventListener("resize",(()=>{n.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(n.domElement)}));const t=new u.xsS;t.background=new u.Ilk(16777215);const o=new u.cPb(75,window.innerWidth/window.innerHeight,1,1e3);o.lookAt(-5,-3,-10),o.position.set(5,7,10);const r=new u.Ox3(16777215);function i(){const n=new u.DvJ(1,1,1),e=new u.Wid({color:5636095}),t=new u.Kj0(n,e);return t}r.position.set(-1,1,1).normalize(),t.add(r);for(let e=0;e<3;e++)for(let n=0;n<3;n++){const o=i();o.position.set(1.1*n,.5+1.1*e,0),t.add(o)}const c=new u.Kj0(new u._12(50,50),new u.vBJ({color:13421772,side:u.ehD}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,t.add(c);const l=new u.iMs,d=new u.FM8;function s(e){d.x=e.clientX/window.innerWidth*2-1,d.y=-e.clientY/window.innerHeight*2+1,l.setFromCamera(d,o);const r=l.intersectObjects(t.children);r.length>0&&"BoxGeometry"===r[0].object.geometry.type&&(16711680===r[0].object.material.color.getHex()?r[0].object.material.color.set(5636095):r[0].object.material.color.set(16711680)),n.render(t,o)}window.addEventListener("click",s),n.render(t,o)})),(n,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"container",ref_key:"screenDom",ref:e},null,512))}};const d=l;var s=d,a={name:"App",components:{HelloWorld:s}},f=t(89);const w=(0,f.Z)(a,[["render",i]]);var p=w;(0,o.ri)(p).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,i){if(!o){var c=1/0;for(s=0;s<n.length;s++){o=n[s][0],r=n[s][1],i=n[s][2];for(var u=!0,l=0;l<o.length;l++)(!1&i||c>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[l])}))?o.splice(l--,1):(u=!1,i<c&&(c=i));if(u){n.splice(s--,1);var d=r();void 0!==d&&(e=d)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[o,r,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,i,c=o[0],u=o[1],l=o[2],d=0;if(c.some((function(e){return 0!==n[e]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(l)var s=l(t)}for(e&&e(o);d<c.length;d++)i=c[d],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},o=self["webpackChunk_3dproject"]=self["webpackChunk_3dproject"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2792)}));o=t.O(o)})();
//# sourceMappingURL=app.9f2cc450.js.map