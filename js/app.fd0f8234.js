!function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([31,1]),n()}({31:function(e,t,n){"use strict";n.r(t);n(32),n(53),n(54),n(62),n(68),n(72),n(73),n(74),n(75);var r=n(5),o=n.n(r),i=n(78),a=n(79),u=n(10),c=n(0),s=n(9),l=n(80),f=(i.a,a.a,"it-services"),d=window.location.pathname,v=document.body,y=document.querySelector("nav"),p=document.querySelector(".header"),m=document.querySelector(".header__overlay"),g=document.querySelector(".header__logo-wrapper"),h=document.querySelectorAll("a[href]");function b(e,t){var n=document.querySelector(".landing-section-right"),r=document.querySelector(".landing-section-right__text-container-left"),o=document.querySelector(".landing-section-left__image-overlay");(new u.a).from(e,2.2,{opacity:0,ease:c.d.easeInOut}).from(n,1.5,{opacity:0,x:300,ease:c.d.easeOut,clearProps:"all"},"-=1").from(r,1.5,{opacity:0,left:100,ease:c.d.easeOut,onComplete:t},"-=1").from(o,4,{opacity:0,left:300,ease:s.a.easeOut,clearProps:"all"},"-=1")}function w(e){var t=document.querySelectorAll(".services-section__card");(new u.a).staggerFrom(t,1.4,{opacity:0,y:"-20%",ease:c.d.easeOut,stagger:.3,onComplete:e}).delay(.85)}function S(e,t){setTimeout(function(){return t()},400),l.a.to(e,1,{height:0,autoAlpha:0,ease:c.c.easeOut})}function O(e){return new Promise(function(t){new u.a({onComplete:t}).fromTo(e,1,{opacity:0},{opacity:1})})}function A(){var e=document.querySelector("#landing"),t=document.querySelector("#services"),n=document.querySelector("#staff"),r=document.querySelector("#contact"),o=document.querySelector("#video");e&&(e.style.visibility="visible"),t&&(t.style.visibility="visible"),n&&(n.style.visibility="visible"),r&&(r.style.visibility="visible"),o&&o.play()}document.addEventListener("DOMContentLoaded",function(){o.a.hooks.leave(function(){return function(){if(h)for(var e=0;e<h.length;e++)h[e].style.pointerEvents="none"}()}),o.a.hooks.afterLeave(function(){return new Promise(function(e){p&&(p.style.visibility="visible"),(new u.a).fromTo(m,1,{autoAlpha:1,top:"-100%",ease:s.a.easeInOut},{top:"100%",ease:s.a.easeInOut}).from(p,1,{autoAlpha:1,top:"-100%",ease:s.a.easeInOut,onComplete:e},"-=1").to(p,1,{top:"110%",ease:s.a.easeInOut},"-=0.2").set(p,{visibility:"hidden",top:0}).timeScale(.82)})}),o.a.hooks.enter(function(){return A()}),o.a.hooks.afterEnter(function(){return function(){if(h)for(var e=0;e<h.length;e++)h[e].style.pointerEvents="auto"}()}),o.a.init({transitions:[{name:"many-to-landing",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("/")},leave:function(e){var t=e.current;S(t.container,this.async())},enter:function(e){var t,n=e.next;return t=n.container,new Promise(function(e){return b(t,e)})}},{name:"many-to-services",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("services")},leave:function(e){var t=e.current;S(t.container,this.async())},enter:function(){return new Promise(function(e){return w(e)})}},{name:"many-to-staff",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("staff")},leave:function(e){var t=e.current;S(t.container,this.async())},enter:function(e){var t=e.next;return O(t.container)}},{name:"many-to-contact",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("contact")},leave:function(e){var t=e.current;S(t.container,this.async())},enter:function(e){var t=e.next;return O(t.container)}}],debug:!0,logLevel:4})}),window.onload=function(){d.includes(f)&&(d=d.replace(/\//,"").replace(f,"")),y&&y.classList.remove("nav--no-js"),function(){v&&v.removeAttribute("style");p&&p.removeAttribute("style");g&&p.removeAttribute("style")}(),function(){var e=function(e){e.currentTarget.href===window.location.href&&(e.preventDefault(),e.stopPropagation())};if(h)for(var t=0;t<h.length;t++)h[t].addEventListener("click",e)}(),(new u.a).set(m,{visibility:"hidden"}).to(p,1,{top:"110%",clearProps:"all",ease:c.c.easeIn}).set(p,{visibility:"hidden",top:0}),"/"===d?(A(),b(document.querySelector("#landing"))):d.includes("services")&&(A(),w())}},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){}});
//# sourceMappingURL=app.fd0f8234.js.map