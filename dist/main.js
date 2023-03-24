(()=>{"use strict";var e,t,n,o,r,a,c,s,i,d,l,u,p,m,h={28:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"* {\n\tbackground-color: #181818;\n\tcolor: aliceblue;\n}\n\nbody {\n\theight: 100%;\n\twidth: 95%;\n\tmargin: 5;\n\tpadding: 0;\n}\n\nh1 {\n\ttext-decoration: underline;\n}\n\n.topLabel {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.addProject {\n\tborder-radius: 50%;\n\theight: 8vh;\n\twidth: 8vh;\n\tmargin: 1rem;\n\tfont-size: large;\n\tfont-weight: bold;\n\tcursor: pointer;\n\tbackground-color: #e9e9ed;\n\tcolor: black;\n\ttransform: scale(1);\n\ttransition: 100ms;\n}\n\n.addProject:hover {\n\ttransform: scale(1.05);\n\ttransition: 100ms;\n\tborder: green 3px solid;\n}\n\nbutton {\n\tborder: none;\n\tcolor: rgb(0, 0, 0);\n\tborder-radius: 10px;\n\tfont-size: 2vh;\n\tmargin: 0.5vh;\n\tcursor: pointer;\n\ttransition: 100ms;\n\tfont-weight: bold;\n\twidth: fit-content;\n\theight: 3vh;\n\tbackground-color: #d1cfcf;\n\tmargin-bottom: 0.5vh;\n}\n\nbutton:hover {\n\ttransform: scale(1.1);\n\ttransition: 100ms;\n}\n\n.button-selected {\n\tbackground-color: rgb(93, 230, 93);\n}\n",""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],d=o.base?i[0]+o.base:i[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=n(a[c]);t[s].references--}for(var i=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},f={};function v(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={id:e,exports:{}};return h[e](n,n.exports,v),n.exports}v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),v.nc=void 0,e=v(379),t=v.n(e),n=v(795),o=v.n(n),r=v(569),a=v.n(r),c=v(565),s=v.n(c),i=v(216),d=v.n(i),l=v(589),u=v.n(l),p=v(28),(m={}).styleTagTransform=u(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,(()=>{const e=document.querySelector("body"),t=document.querySelector(".modal");t.style.display="none";const n=document.createElement("div");n.className="header";const o=document.createElement("h1");o.className="topLabel",o.textContent="Projects:",n.appendChild(o);const r=document.createElement("button");r.className="addProject",r.textContent="+",o.appendChild(r),r.addEventListener("click",(()=>{t.style.display="block"})),e.appendChild(n);const a=document.createElement("div");a.className="projectInformation";const c=document.createElement("div");c.className="description";const s=document.createElement("h1");s.textContent="Description",c.appendChild(s);const i=document.createElement("p");i.className="projectDescription",c.appendChild(i),a.appendChild(c);const d=document.createElement("div");d.className="priority";const l=document.createElement("h1");l.textContent="Priority",d.appendChild(l);const u=document.createElement("div");u.className="projectPriority",d.appendChild(u),a.appendChild(d),e.appendChild(a);const p=document.createElement("div");p.className="Tasks";const m=document.createElement("div");m.className="taskLabel";const h=document.createElement("h1");h.textContent="Tasks:",m.appendChild(h),p.appendChild(m);const f=document.createElement("div");f.className="taskContainer";const v=document.createElement("div");v.className="task";const y=document.createElement("p");y.className="taskOne",v.appendChild(y);const b=document.createElement("p");b.className="taskTwo",v.appendChild(b);const g=document.createElement("p");g.className="taskThree",v.appendChild(g);const C=document.createElement("p");C.className="taskFour",v.appendChild(C),f.appendChild(v),p.appendChild(f),e.appendChild(p)})(),(()=>{class e{constructor(e,t,n,o,r,a,c){this.title=e,this.description=t,this.priority=n,this.taskOne=o,this.taskTwo=r,this.taskThree=a,this.taskFour=c}}let t=new e("Practice Melee","daily SSBM practice","Medium","Practice moving around each stage and its platforms","Practice SHFFLing on a target","Practice character specific tech (shine grabs, shine OOS, laser grab)","Practice comboing a character on various stages"),n=new e("Practice Piano","Learning Piano","Low","Practice your scales","Listen to a new song and learn to play the chord progression","Re-harmonize the song","Practice playing a piece of your choice"),o=[];function r(e){const t=document.querySelector(".header"),n=document.createElement("button");n.className=e.title,n.textContent=e.title,t.appendChild(n),n.addEventListener("click",(()=>{var e;e=n,document.querySelectorAll("button").forEach((e=>{e.classList.remove("button-selected")})),e.classList.add("button-selected"),document.querySelectorAll("button").forEach((e=>{if(e.classList.contains("button-selected")){let t=e.innerText;const n=o.findIndex((e=>e.title===t));document.querySelector(".projectDescription").textContent=o[n].description,document.querySelector(".projectPriority").textContent=o[n].priority,document.querySelector(".taskOne").textContent="•  "+o[n].taskOne,document.querySelector(".taskTwo").textContent="• "+o[n].taskTwo,document.querySelector(".taskThree").textContent="• "+o[n].taskThree,document.querySelector(".taskFour").textContent="• "+o[n].taskFour}}))}))}o.push(t),o.push(n),r(t),r(n),console.table(o),document.querySelector(".modal"),document.querySelector(".addTodoToArray").addEventListener("click",(()=>{!function(){const t=document.querySelector("#projectName"),n=document.querySelector("#description"),a=document.querySelector("#priority"),c=document.querySelector("#task1"),s=document.querySelector("#task2"),i=document.querySelector("#task3"),d=document.querySelector("#task4"),l=new e(t.value,n.value,a.value,c.value,s.value,i.value,d.value);o.push(l),console.table(o),r(l),document.querySelectorAll("input").forEach((e=>{e.value=""}))}()}))})()})();