!function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,d=[];f<c.length;f++)i=c[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;a.push([85,1]),n()}({64:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);n(49),n(20),n(21),n(64);var r=n(88),o=n(89),a=(n(36),n(39),"it-services"),i=document.body,c=document.querySelector("nav"),u=document.querySelector(".nav__logo-wrapper"),l=document.querySelector(".nav__toggler"),s=document.querySelector(".nav__overlay"),f=(document.querySelector(".nav__link-wrapper-container"),document.querySelector(".header")),d=document.querySelector(".header__overlay"),y=document.querySelector(".header__logo-wrapper"),m=document.querySelectorAll("a[href]"),p=Array.from(c.querySelectorAll("a[href]")).filter(function(e){return!e.className.includes("logo")}),v="nav__link--landing",g="nav__link--services",h="nav__link--staff",_="nav__link--contact",b="nav__link--overlay",S=(n(44),n(47),n(4)),w=n.n(S),O=n(90),q=n(0),P=n(86),x=n(87);function A(){l&&(l.disabled=!l.disabled)}function k(){(new O.a).set(d,{visibility:"hidden"}).to(f,1,{top:"110%",clearProps:"all",ease:q.c.easeIn}).set(f,{visibility:"hidden",top:0})}function E(){var e=document.querySelector("#landing"),t=document.querySelector("#services"),n=document.querySelector("#staff"),r=document.querySelector("#contact"),o=document.querySelector("#video");e&&(e.style.visibility="visible"),t&&(t.style.visibility="visible"),n&&(n.style.visibility="visible"),r&&(r.style.visibility="visible"),o&&o.play()}function L(e){p&&p.forEach(function(t){t.classList=Array.from(t.classList).filter(function(e){return!e.includes("--")}),t.classList.add(e)})}function C(e){p&&p.forEach(function(t){t.classList.add(e)})}function T(e){p&&p.forEach(function(t){t.classList.contains(e)&&t.classList.remove(e)})}function j(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(document.documentElement.clientWidth>600){var r=document.querySelector(".landing-section-right"),o=document.querySelector(".landing-section-right__text-container-left"),a=document.querySelector(".landing-section-right__text-description"),i=document.querySelector(".landing-section-right__text-container-right"),c=document.querySelector(".landing-section-right__read-more-container"),l=document.querySelector(".landing-section-left__image-overlay"),s=n?null:"+=0.48";(new O.a).from(e,2.2,{opacity:0,ease:q.e.easeInOut},s).from(r,1.5,{opacity:0,x:300,ease:q.e.easeOut,clearProps:"all"},"-=1").addLabel("headerStart","-=1").from(o,1.5,{opacity:0,y:"-100%",ease:q.d.easeOut,clearProps:"all"},"headerStart").from(i,1.5,{opacity:0,y:"2%",ease:q.e.easeOut,clearProps:"all"},"headerStart").staggerFrom(p,1.2,{opacity:0,left:80,ease:q.e.easeOut,onComplete:t,clearProps:"all"},-.2,"-=1").addLabel("rightColumnText","-=1").from(a,1.6,{opacity:0,x:"-30%",ease:q.d.easeOut,clearProps:"all"},"rightColumnText").from(c,1.6,{opacity:0,x:"-30%",ease:q.d.easeOut,clearProps:"all"},"rightColumnText").from(u,2,{opacity:0,x:10,ease:q.c.easeOut,clearProps:"all"},"rightColumnText+=0.4").from(l,4,{opacity:0,left:300,ease:P.a.easeOut,clearProps:"all"},"rightColumnText").timeScale(1.02)}else{var f=document.querySelector(".landing-section-right__text-container-mobile"),d=document.querySelector(".landing-section-right__text-description-wrapper"),y=n?"+=0.6":"+=0.9";(new O.a).from(f,1.4,{opacity:0,y:"-140%",ease:q.d.easeOut,clearProps:"all"},y).from(d,1.1,{opacity:0,y:"100%",ease:q.e.easeOut,onComplete:t,clearProps:"all"},"-=0.7")}}function I(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.querySelectorAll(".services-section__card"),r=t?.62:.86;(new O.a).staggerFrom(n,1.4,{opacity:0,y:"-20%",ease:q.e.easeOut,clearProps:"all",onComplete:e},.3).delay(r)}function M(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=document.querySelector(".staff-section__card-staff-container"),o=document.querySelectorAll(".staff-section__card-staff-member-container"),a=document.querySelector(".staff-section__title"),i=n?.62:.9;(new O.a).from(e,4.86,{opacity:0,ease:q.d.easeOut},i).staggerFrom(o,1.5,{opacity:0,y:"50%",ease:P.a.easeOut},.3,"-=4.4").from(a,2,{opacity:0,y:"80%",ease:q.e.easeOut,clearProps:"all",onComplete:t},"-=2.62").from(r,4,{boxShadow:"none",ease:q.d.easeInOut},"-=2.2")}function F(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.querySelectorAll(".contact-section__card"),r=n[0],o=n[1],a=document.querySelector(".contact-section__card-container"),i=document.querySelector(".contact-section__footer"),c=t?"+=0.66":"+=1.22";(new O.a).set(a,{overflowY:"hidden"}).from(r,1.7,{opacity:0,y:"-20%",ease:q.d.easeOut},c).from(o,1.7,{opacity:0,y:"20%",ease:q.d.easeOut,onComplete:e},"-=1.7").from(i,.9,{opacity:0,y:"100%",ease:q.d.easeOut},"-=0.4").set(a,{clearProps:"all"})}function D(e,t){setTimeout(function(){return t()},400),x.a.to(e,1,{height:0,autoAlpha:0,ease:q.c.easeOut})}function J(){return new Promise(function(e){f&&(f.style.visibility="visible"),(new O.a).fromTo(d,1,{autoAlpha:1,top:"-100%",ease:P.a.easeInOut},{top:"100%",ease:P.a.easeInOut}).from(f,1,{autoAlpha:1,top:"-100%",ease:P.a.easeInOut,onComplete:e},"-=1").to(f,1,{top:"110%",ease:P.a.easeInOut},"-=0.2").set(f,{visibility:"hidden",top:0}).timeScale(.82)})}r.a,o.a;var N=window.location.pathname;document.addEventListener("DOMContentLoaded",function(){w.a.hooks.leave(function(){return function(){if(m)for(var e=0;e<m.length;e++)m[e].style.pointerEvents="none"}()}),w.a.hooks.afterLeave(function(){return J()}),w.a.hooks.beforeEnter(function(){l&&"none"!==window.getComputedStyle(s,null).display&&(l.click(),T(b))}),w.a.hooks.enter(function(){return E()}),w.a.hooks.afterEnter(function(){return function(){if(m)for(var e=0;e<m.length;e++)m[e].style.pointerEvents="auto"}()}),w.a.init({transitions:[{name:"many-to-landing",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("/")},leave:function(e){D(e.current.container,this.async())},beforeEnter:function(){return L(v)},enter:function(e){var t,n=e.next;return t=n.container,new Promise(function(e){return j(t,e)})}},{name:"many-to-services",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("services")},leave:function(e){D(e.current.container,this.async())},beforeEnter:function(){return L(g)},enter:function(){return new Promise(function(e){return I(e)})}},{name:"many-to-staff",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("staff")},leave:function(e){D(e.current.container,this.async())},beforeEnter:function(){return L(h)},enter:function(e){var t,n=e.next;return t=n.container,new Promise(function(e){return M(t,e)})}},{name:"many-to-contact",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("contact")},leave:function(e){D(e.current.container,this.async())},beforeEnter:function(){return L(_)},enter:function(){return new Promise(function(e){return F(e)})}}],debug:!0,logLevel:4})}),window.onload=function(){N.includes(a)&&(N=N.replace(/\//,"").replace(a,"")),c&&c.classList.remove("nav--no-js"),function(){i&&i.removeAttribute("style");f&&f.removeAttribute("style");y&&f.removeAttribute("style")}(),function(){var e=function(e){e.currentTarget.href===window.location.href&&(e.preventDefault(),e.stopPropagation())};if(m)for(var t=0;t<m.length;t++)m[t].addEventListener("click",e)}(),k(),"/"===N?(C(v),E(),j(document.querySelector("#landing"),null,!1)):N.includes("services")?(C(g),E(),I(null,!1)):N.includes("staff")?(C(h),E(),M(document.querySelector("#staff"),null,!1)):N.includes("contact")?(C(_),E(),F(null,!1)):window.location.pathname="/"},l.addEventListener("click",function(){!function(){if(l)return l.checked}()?T(b):(A(),C(b),(new O.a).from(s,1,{y:"-100%",ease:q.d.easeOut}).staggerFrom(p,1.2,{autoAlpha:0,y:"-68%",ease:q.e.easeOut},.2,"-=0.5").set([s,p],{clearProps:"all"}).call(A))})}});
//# sourceMappingURL=app.7ee26ce3.js.map