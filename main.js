(()=>{"use strict";var e,t,o,r,n={497:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var r=o(386),n=document.querySelector(".popup_type_edit"),c=document.querySelector(".popup_type_new-card"),a=document.querySelector(".popup_type_image"),u=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),p=document.querySelector(".profile__image"),l=document.querySelector(".profile__title"),d=document.querySelector(".profile__description"),s=document.querySelector(".popup_type_new-card").querySelector(".popup__form"),_=s.querySelector(".popup__input_type_card-name"),m=s.querySelector(".popup__input_type_url"),y=document.getElementById("card-template").content,f=document.querySelector(".places__list");function L(e){e.classList.add("popup_is-opened")}function w(e){e.classList.remove("popup_is-opened")}u.addEventListener("click",(function(){L(n)})),i.addEventListener("click",(function(){L(c)})),n.querySelector(".popup__close").addEventListener("click",(function(){w(n)})),c.querySelector(".popup__close").addEventListener("click",(function(){w(c)})),a.querySelector(".popup__close").addEventListener("click",(function(){w(a)}));var v=n.querySelector(".popup__form"),h=c.querySelector(".popup__form"),S=(a.querySelector(".popup__form"),document.querySelector(".popup__input_type_name")),b=document.querySelector(".popup__input_type_description");function x(e){e.preventDefault(),l.textContent=S.value,d.textContent=b.value,(0,r.oS)(S.value,b.value),w(n)}function C(e,t,o){var r=document.getElementById(e+"_error");document.getElementById(e).classList.add("popup__error_active"),r.classList.add("popup__error_active"),r.textContent=t,console.log(o),document.getElementById(o+"-btn").disabled=!0}function j(e,t){var o,r;t.validity.valid?(o=t.id,t.validationMessage,r=e.getAttribute("name"),document.getElementById(o+"_error").classList.remove("popup__error_active"),document.getElementById(o).classList.remove("popup__error_active"),document.getElementById(r+"-btn").disabled=!1,console.log(e.getAttribute("name"))):C(t.id,t.validationMessage,e.getAttribute("name"))}v.addEventListener("submit",x),s.addEventListener("submit",(function(e){e.preventDefault(),console.log(),B(_.value,m.value)}));var g=function(e){Array.from(e.querySelectorAll(".popup__input")).forEach((function(t){t.addEventListener("input",(function(){j(e,t)}))}))};function B(e,t,o){var n=document.importNode(y,!0);n.querySelector(".card__title").textContent=e,n.querySelector(".card__image").src=t,n.querySelector(".card__image").alt=e,n.querySelector(".places__count-like").textContent=o+"";var c=n.querySelector(".card__like-button");c.addEventListener("click",(function(){c.classList.toggle("card__like-button_is-active")})),n.querySelector(".card__image").addEventListener("click",(function(){var o=document.querySelector(".popup_type_image");o.querySelector(".popup__image").src=t,o.querySelector(".popup__caption").textContent=e,L(o)})),f.insertBefore(n,f.firstChild),(0,r.t_)(e,t)}g(v),g(h),document.addEventListener("keydown",(function(e){27===e.keyCode&&w(document.querySelector(".popup_is-opened"))})),document.addEventListener("click",(function(e){e.target===n?w(n):e.target===c?w(c):e.target===a&&w(a)}));var q=(0,r.ug)(),E=await q.then((function(e){return e})).catch((function(e){console.log(e)}));p.style.backgroundImage="url("+E.avatar+")",l.textContent=E.name,d.textContent=E.about;var k=(0,r.Eg)();(await k.then((function(e){return e})).catch((function(e){console.error(e)}))).forEach((function(e){console.log(e.likes.length),B(e.name,e.link,e.likes.length)})),document.querySelector(".card__like-button"),t()}catch(I){t(I)}}),1)},386:(e,t,o)=>{o.d(t,{Eg:()=>c,oS:()=>a,t_:()=>u,ug:()=>n});var r={baseUrl:"https://nomoreparties.co/v1/frontend-st-cohort-201",headers:{authorization:"1cace896-5555-4ba3-9648-32305f14f2e7","Content-Type":"application/json"}},n=function(){return fetch("".concat(r.baseUrl,"/users/me"),{method:"GET",headers:r.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))},c=function(){return fetch("".concat(r.baseUrl,"/cards"),{method:"GET",headers:r.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))},a=function(e,t){fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:r.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})})},u=function(e,t){fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:{authorization:r.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})})}}},c={};function a(e){var t=c[e];if(void 0!==t)return t.exports;var o=c[e]={exports:{}};return n[e](o,o.exports,a),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a.a=(n,c,a)=>{var u;a&&((u=[]).d=-1);var i,p,l,d=new Set,s=n.exports,_=new Promise(((e,t)=>{l=t,p=e}));_[t]=s,_[e]=e=>(u&&e(u),d.forEach(e),_.catch((e=>{}))),n.exports=_,c((n=>{var c;i=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var c=[];c.d=0,n.then((e=>{a[t]=e,r(c)}),(e=>{a[o]=e,r(c)}));var a={};return a[e]=e=>e(c),a}}var u={};return u[e]=e=>{},u[t]=n,u})))(n);var a=()=>i.map((e=>{if(e[o])throw e[o];return e[t]})),p=new Promise((t=>{(c=()=>t(a)).r=0;var o=e=>e!==u&&!d.has(e)&&(d.add(e),e&&!e.d&&(c.r++,e.push(c)));i.map((t=>t[e](o)))}));return c.r?p:a()}),(e=>(e?l(_[o]=e):p(s),r(u)))),u&&u.d<0&&(u.d=0)},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a(497)})();