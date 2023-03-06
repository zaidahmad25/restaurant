(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#menu-content,\n#about-content {\n    display: none;\n}\n\nbody {\n    font-family: "Roboto", sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 100px;\n    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);\n}\n\n.logo h2 {\n    font-weight: 300;\n    font-size: 38px;\n}\n\n.links {\n    display: flex;\n    list-style-type: none;\n}\n\n.links a {\n    text-decoration: none;\n    margin-left: 100px;\n    color: black;\n    font-size: 21px;\n}\n\n.hero {\n    margin-top: 2%;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.hero img {\n    width: 750px;\n    height: auto;\n}\n\n.text {\n    width: 40%;\n    font-size: 24px;\n    line-height: 1.4;\n}\n\n.text p {\n    font-size: 18px;\n    color: #333333cd;\n}\n\n.text button {\n    width: 20%;\n    height: 40px;\n    margin-top: 10%;\n    font-size: medium;\n    border: 1px solid dodgerblue;\n    border-radius: 3px;\n    color: dodgerblue;\n    background-color: #fff;\n    cursor: pointer;\n    transition: .2s;\n}\n\n.text button:hover {\n    background-color: dodgerblue;\n    color: #fff;\n}\n\n#collage {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n\n#collage h2 {\n    font-size: 28px;\n    text-transform: uppercase;\n    font-weight: lighter;\n    padding: 2%;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    width: 86%;\n    height: 100vh;\n    grid-gap: 10px;\n}\n\n.grid-item1 {\n    background-image: url("https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n    grid-column: 1/4;\n    grid-row: 1/2;\n}\n\n.grid-item2 {\n    background-image: url("https://cdn.pixabay.com/photo/2019/04/22/08/37/burger-4145977_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n    grid-column: 1/2;\n    grid-row: 2/5;\n}\n\n.grid-item3 {\n    background-image: url("https://cdn.pixabay.com/photo/2014/11/05/16/00/thai-food-518035_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n    grid-column: 1/5;\n    grid-row: 5/5;\n}\n\n.grid-item4 {\n    background-image: url("https://cdn.pixabay.com/photo/2018/09/14/11/12/food-3676796_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n    grid-column: 2/4;\n    grid-row: 2/5;\n}\n\n.grid-item5 {\n    background-image: url("https://cdn.pixabay.com/photo/2019/09/05/19/58/nachos-4454941_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n    grid-column: 4/6;\n    grid-row: 1/3;\n}\n\n.grid-item6 {\n    background-image: url("https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n    grid-column: 4/5;\n    grid-row: 3/5;\n}\n\n.grid-item7 {\n    background-image: url("https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n    grid-column: 5/6;\n    grid-row: 3/6;\n}\n\n.grid-item8 {\n    background-image: url("https://cdn.pixabay.com/photo/2016/02/04/03/22/lasagne-1178514_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n    grid-column: 6/8;\n    grid-row: 1/6;\n}\n\nfooter {\n    margin-top: auto;\n    height: 80px;\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter a {\n    color: white;\n}\n\n#about-content {\n    text-align: center;\n    padding-top: 3%;\n}\n\n#about-content h2 {\n    font-size: 32px;\n    padding-bottom: 3%;\n}\n\n.paras {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 18px;\n}\n\n.para {\n    border: 1px solid #333333cd;\n    border-radius: 3px;\n    padding: 3%;\n    margin: 2%;\n    width: 550px;\n}\n\n.menu-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 2.5rem;\n}\n\n.menu-container h2 {\n    font-size: 32px;\n    text-align: center;\n}\n\n.menu-container .item {\n    display: grid;\n    grid-template-columns: auto auto;\n    width: 905px;\n    padding-top: 2.5rem;\n}\n\n.item-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.item-text h2 {\n    font-size: 24px;\n}\n\n.item-text p {\n    font-size: 16px;\n    color: #333333b6;\n}\n\n.img1 {\n    background-image: url("https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n}\n\n.img2 {\n    background-image: url("https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n}\n\n.img3 {\n    background-image: url("https://cdn.pixabay.com/photo/2016/08/25/00/22/chicken-1618459_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n}\n\n.img4 {\n    background-image: url("https://cdn.pixabay.com/photo/2015/03/05/18/30/spaghetti-660748_960_720.jpg");\n    background-size: cover;\n    background-position: center;\n}\n\n.img5 {\n    background-image: url("https://pbs.twimg.com/media/B_uVzHaUsAAZouX.jpg");\n    background-size: cover;\n    background-position: center;\n}\n\n.img6 {\n    background-image: url("https://hips.hearstapps.com/hmg-prod/images/delish-191112-risotto-rice-0151-landscape-pf-1574723947.jpg?crop=1xw:0.8435280189423836xh;center,top");\n    background-size: cover;\n    background-position: center;\n}',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],p=i[d]||0,u="".concat(d," ").concat(p);i[d]=p+1;var l=t(u),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(g);else{var m=r(g,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var p=t(i[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),p=t.n(d),u=t(589),l=t.n(u),g=t(426),m={};m.styleTagTransform=l(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),e()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;const h=t.p+"f44b7a4d08f5d579d252.jpg",f=document.querySelector(".hero"),b=document.querySelector("#home"),y=document.querySelector("#about"),x=document.querySelector("#menu"),v=document.querySelector("#btn"),k=document.querySelector("#home-content"),w=document.querySelector("#about-content"),z=document.querySelector("#menu-content"),_=()=>{k.style.display="none",w.style.display="none",z.style.display="none"},j=()=>{z.style.display="block"};b.addEventListener("click",(()=>{_(),k.style.display="block"})),y.addEventListener("click",(()=>{_(),w.style.display="block"})),x.addEventListener("click",(()=>{_(),j()})),v.addEventListener("click",(()=>{_(),j()})),(()=>{const n=document.createElement("div");n.classList.add("img");const e=new Image;e.src=h,n.appendChild(e),f.appendChild(n)})()})()})();