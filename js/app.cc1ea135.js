!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],f=0,d=[];f<c.length;f++)i=c[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;a.push([85,1]),n()}({64:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);n(32),n(20),n(21),n(64);var r=n(88),o=n(89),a=(n(37),n(40),"/it-services/"),i=document.body,c=document.querySelector("nav"),l=document.querySelector(".nav__logo-wrapper"),u=document.querySelector(".nav__toggler"),s=document.querySelector(".nav__overlay"),f=(document.querySelector(".nav__link-wrapper-container"),document.querySelector(".header")),d=document.querySelector(".header__overlay"),m=document.querySelector(".header__logo-wrapper"),y=document.querySelectorAll("a[href]"),p=[document.querySelector("#link-landing"),document.querySelector("#link-services"),document.querySelector("#link-staff"),document.querySelector("#link-contact")],v=Array.from(c.querySelectorAll("a[href]")).filter(function(e){return!e.className.includes("logo")}),h="nav__link--landing",g="nav__link--services",_="nav__link--staff",b="nav__link--contact",S="nav__link--overlay",w=(n(45),n(48),n(4)),q=n.n(w),O=n(90),P=n(0),x=n(86),k=n(87);function A(){u&&(u.disabled=!u.disabled)}function E(){(new O.a).set(d,{visibility:"hidden"}).to(f,1,{top:"110%",clearProps:"all",ease:P.c.easeIn}).set(f,{visibility:"hidden",top:0})}function L(){var e=document.querySelector("#landing"),t=document.querySelector("#services"),n=document.querySelector("#staff"),r=document.querySelector("#contact"),o=document.querySelector("#video");e&&(e.style.visibility="visible"),t&&(t.style.visibility="visible"),n&&(n.style.visibility="visible"),r&&(r.style.visibility="visible"),o&&o.play()}function C(e){var t=e.getAttribute("href");return t.includes(a)&&(t=t.replace(a,"/")),t}function T(e){v&&v.forEach(function(t){t.classList=Array.from(t.classList).filter(function(e){return!e.includes("--")}),t.classList.add(e)})}function j(e){v&&v.forEach(function(t){t.classList.add(e)})}function I(e){v&&v.forEach(function(t){t.classList.contains(e)&&t.classList.remove(e)})}function M(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(document.documentElement.clientWidth>600){var r=document.querySelector(".landing-section-right"),o=document.querySelector(".landing-section-right__text-container-left"),a=document.querySelector(".landing-section-right__text-description"),i=document.querySelector(".landing-section-right__text-container-right"),c=document.querySelector(".landing-section-right__read-more-container"),u=document.querySelector(".landing-section-left__image-overlay"),s=n?null:"+=0.48";(new O.a).from(e,2.2,{opacity:0,ease:P.e.easeInOut},s).from(r,1.5,{opacity:0,x:300,ease:P.e.easeOut,clearProps:"all"},"-=1").addLabel("headerStart","-=1").from(o,1.5,{opacity:0,y:"-100%",ease:P.d.easeOut,clearProps:"all"},"headerStart").from(i,1.5,{opacity:0,y:"2%",ease:P.e.easeOut,clearProps:"all"},"headerStart").staggerFrom(v,1.2,{opacity:0,left:80,ease:P.e.easeOut,onComplete:t,clearProps:"all"},-.2,"-=1").addLabel("rightColumnText","-=1").from(a,1.6,{opacity:0,x:"-30%",ease:P.d.easeOut,clearProps:"all"},"rightColumnText").from(c,1.6,{opacity:0,x:"-30%",ease:P.d.easeOut,clearProps:"all"},"rightColumnText").from(l,2,{opacity:0,x:10,ease:P.c.easeOut,clearProps:"all"},"rightColumnText+=0.4").from(u,4,{opacity:0,left:300,ease:x.a.easeOut,clearProps:"all"},"rightColumnText").timeScale(1.02)}else{var f=document.querySelector(".landing-section-right__text-container-mobile"),d=document.querySelector(".landing-section-right__text-description-wrapper"),m=n?"+=0.6":"+=0.9";(new O.a).from(f,1.4,{opacity:0,y:"-140%",ease:P.d.easeOut,clearProps:"all"},m).from(d,1.1,{opacity:0,y:"100%",ease:P.e.easeOut,onComplete:t,clearProps:"all"},"-=0.7")}}function F(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.querySelectorAll(".services-section__card"),r=t?.62:.86;(new O.a).staggerFrom(n,1.4,{opacity:0,y:"-20%",ease:P.e.easeOut,clearProps:"all",onComplete:e},.3).delay(r)}function D(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=document.querySelector(".staff-section__card-staff-container"),o=document.querySelectorAll(".staff-section__card-staff-member-container"),a=document.querySelector(".staff-section__title"),i=n?.62:.9;(new O.a).from(e,4.86,{opacity:0,ease:P.d.easeOut},i).staggerFrom(o,1.5,{opacity:0,y:"50%",ease:x.a.easeOut},.3,"-=4.4").from(a,2,{opacity:0,y:"80%",ease:P.e.easeOut,clearProps:"all",onComplete:t},"-=2.62").from(r,4,{boxShadow:"none",ease:P.d.easeInOut},"-=2.2")}function J(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.querySelectorAll(".contact-section__card"),r=n[0],o=n[1],a=document.querySelector(".contact-section__card-container"),i=document.querySelector(".contact-section__footer"),c=t?"+=0.66":"+=1.22";(new O.a).set(a,{overflowY:"hidden"}).from(r,1.7,{opacity:0,y:"-20%",ease:P.d.easeOut},c).from(o,1.7,{opacity:0,y:"20%",ease:P.d.easeOut,onComplete:e},"-=1.7").from(i,.9,{opacity:0,y:"100%",ease:P.d.easeOut},"-=0.4").set(a,{clearProps:"all"})}function N(e,t){setTimeout(function(){return t()},400),k.a.to(e,1,{height:0,autoAlpha:0,ease:P.c.easeOut})}function W(){return new Promise(function(e){f&&(f.style.visibility="visible"),(new O.a).fromTo(d,1,{autoAlpha:1,top:"-100%",ease:x.a.easeInOut},{top:"100%",ease:x.a.easeInOut}).from(f,1,{autoAlpha:1,top:"-100%",ease:x.a.easeInOut,onComplete:e},"-=1").to(f,1,{top:"110%",ease:x.a.easeInOut},"-=0.2").set(f,{visibility:"hidden",top:0}).timeScale(.82)})}r.a,o.a;var Y=window.location.pathname;document.addEventListener("DOMContentLoaded",function(){q.a.hooks.leave(function(){return function(){if(y)for(var e=0;e<y.length;e++)y[e].style.pointerEvents="none"}()}),q.a.hooks.afterLeave(function(){return W()}),q.a.hooks.beforeEnter(function(){u&&"none"!==window.getComputedStyle(s,null).display&&(u.click(),I(S))}),q.a.hooks.enter(function(){return L()}),q.a.hooks.afterEnter(function(){return function(){if(y)for(var e=0;e<y.length;e++)y[e].style.pointerEvents="auto"}()}),q.a.init({transitions:[{name:"many-to-landing",custom:function(e){var t=C(e.trigger);return"/"===t||t===a},leave:function(e){N(e.current.container,this.async())},beforeEnter:function(){return T(h)},enter:function(e){var t,n=e.next;return t=n.container,new Promise(function(e){return M(t,e)})}},{name:"many-to-services",custom:function(e){return C(e.trigger).includes("services")},leave:function(e){N(e.current.container,this.async())},beforeEnter:function(){return T(g)},enter:function(){return new Promise(function(e){return F(e)})}},{name:"many-to-staff",custom:function(e){return C(e.trigger).includes("staff")},leave:function(e){N(e.current.container,this.async())},beforeEnter:function(){return T(_)},enter:function(e){var t,n=e.next;return t=n.container,new Promise(function(e){return D(t,e)})}},{name:"many-to-contact",custom:function(e){return C(e.trigger).includes("contact")},leave:function(e){N(e.current.container,this.async())},beforeEnter:function(){return T(b)},enter:function(){return new Promise(function(e){return J(e)})}}],debug:!0,logLevel:4})}),window.onload=function(){window.scrollTo(0,1),window.location.pathname.includes(a)&&p.forEach(function(e){var t=e.getAttribute("href");t.includes("/")?e.setAttribute("href",a):t.includes(".html")&&e.setAttribute("href",t.replace(".html",""))}),c&&c.classList.remove("nav--no-js"),function(){i&&i.removeAttribute("style");f&&f.removeAttribute("style");m&&f.removeAttribute("style")}(),function(){var e=function(e){e.currentTarget.href===window.location.href&&(e.preventDefault(),e.stopPropagation())};if(y)for(var t=0;t<y.length;t++)y[t].addEventListener("click",e)}(),E(),Y.includes(a)&&(Y=Y.replace(a,"/")),"/"===Y?(j(h),L(),M(document.querySelector("#landing"),null,!1)):Y.includes("services")?(j(g),L(),F(null,!1)):Y.includes("staff")?(j(_),L(),D(document.querySelector("#staff"),null,!1)):Y.includes("contact")&&(j(b),L(),J(null,!1))},u.addEventListener("click",function(){!function(){if(u)return u.checked}()?I(S):(A(),j(S),(new O.a).from(s,1,{y:"-100%",ease:P.d.easeOut}).staggerFrom(v,1.2,{autoAlpha:0,y:"-68%",ease:P.e.easeOut},.2,"-=0.5").set([s,v],{clearProps:"all"}).call(A))})}});
//# sourceMappingURL=app.cc1ea135.js.map