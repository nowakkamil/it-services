!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],f=0,d=[];f<c.length;f++)i=c[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;a.push([85,1]),n()}({64:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);n(49),n(20),n(21),n(64);var r=n(88),o=n(89),a=(n(36),n(39),"/it-services"),i=document.body,c=document.querySelector("nav"),l=document.querySelector(".nav__logo-wrapper"),u=document.querySelector(".nav__toggler"),s=document.querySelector(".nav__overlay"),f=(document.querySelector(".nav__link-wrapper-container"),document.querySelector(".header")),d=document.querySelector(".header__overlay"),m=document.querySelector(".header__logo-wrapper"),y=document.querySelectorAll("a[href]"),p=[document.querySelector("#link-landing"),document.querySelector("#link-services"),document.querySelector("#link-staff"),document.querySelector("#link-contact")],v=Array.from(c.querySelectorAll("a[href]")).filter(function(e){return!e.className.includes("logo")}),h="nav__link--landing",g="nav__link--services",b="nav__link--staff",_="nav__link--contact",S="nav__link--overlay",w=(n(44),n(47),n(4)),O=n.n(w),q=n(90),A=n(0),P=n(86),k=n(87);function x(){u&&(u.disabled=!u.disabled)}function E(){(new q.a).set(d,{visibility:"hidden"}).to(f,1,{top:"110%",clearProps:"all",ease:A.c.easeIn}).set(f,{visibility:"hidden",top:0})}function L(){var e=document.querySelector("#landing"),t=document.querySelector("#services"),n=document.querySelector("#staff"),r=document.querySelector("#contact"),o=document.querySelector("#video");e&&(e.style.visibility="visible"),t&&(t.style.visibility="visible"),n&&(n.style.visibility="visible"),r&&(r.style.visibility="visible"),o&&o.play()}function C(e){v&&v.forEach(function(t){t.classList=Array.from(t.classList).filter(function(e){return!e.includes("--")}),t.classList.add(e)})}function j(e){v&&v.forEach(function(t){t.classList.add(e)})}function T(e){v&&v.forEach(function(t){t.classList.contains(e)&&t.classList.remove(e)})}function I(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(document.documentElement.clientWidth>600){var r=document.querySelector(".landing-section-right"),o=document.querySelector(".landing-section-right__text-container-left"),a=document.querySelector(".landing-section-right__text-description"),i=document.querySelector(".landing-section-right__text-container-right"),c=document.querySelector(".landing-section-right__read-more-container"),u=document.querySelector(".landing-section-left__image-overlay"),s=n?null:"+=0.48";(new q.a).from(e,2.2,{opacity:0,ease:A.e.easeInOut},s).from(r,1.5,{opacity:0,x:300,ease:A.e.easeOut,clearProps:"all"},"-=1").addLabel("headerStart","-=1").from(o,1.5,{opacity:0,y:"-100%",ease:A.d.easeOut,clearProps:"all"},"headerStart").from(i,1.5,{opacity:0,y:"2%",ease:A.e.easeOut,clearProps:"all"},"headerStart").staggerFrom(v,1.2,{opacity:0,left:80,ease:A.e.easeOut,onComplete:t,clearProps:"all"},-.2,"-=1").addLabel("rightColumnText","-=1").from(a,1.6,{opacity:0,x:"-30%",ease:A.d.easeOut,clearProps:"all"},"rightColumnText").from(c,1.6,{opacity:0,x:"-30%",ease:A.d.easeOut,clearProps:"all"},"rightColumnText").from(l,2,{opacity:0,x:10,ease:A.c.easeOut,clearProps:"all"},"rightColumnText+=0.4").from(u,4,{opacity:0,left:300,ease:P.a.easeOut,clearProps:"all"},"rightColumnText").timeScale(1.02)}else{var f=document.querySelector(".landing-section-right__text-container-mobile"),d=document.querySelector(".landing-section-right__text-description-wrapper"),m=n?"+=0.6":"+=0.9";(new q.a).from(f,1.4,{opacity:0,y:"-140%",ease:A.d.easeOut,clearProps:"all"},m).from(d,1.1,{opacity:0,y:"100%",ease:A.e.easeOut,onComplete:t,clearProps:"all"},"-=0.7")}}function M(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.querySelectorAll(".services-section__card"),r=t?.62:.86;(new q.a).staggerFrom(n,1.4,{opacity:0,y:"-20%",ease:A.e.easeOut,clearProps:"all",onComplete:e},.3).delay(r)}function F(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=document.querySelector(".staff-section__card-staff-container"),o=document.querySelectorAll(".staff-section__card-staff-member-container"),a=document.querySelector(".staff-section__title"),i=n?.62:.9;(new q.a).from(e,4.86,{opacity:0,ease:A.d.easeOut},i).staggerFrom(o,1.5,{opacity:0,y:"50%",ease:P.a.easeOut},.3,"-=4.4").from(a,2,{opacity:0,y:"80%",ease:A.e.easeOut,clearProps:"all",onComplete:t},"-=2.62").from(r,4,{boxShadow:"none",ease:A.d.easeInOut},"-=2.2")}function D(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.querySelectorAll(".contact-section__card"),r=n[0],o=n[1],a=document.querySelector(".contact-section__card-container"),i=document.querySelector(".contact-section__footer"),c=t?"+=0.66":"+=1.22";(new q.a).set(a,{overflowY:"hidden"}).from(r,1.7,{opacity:0,y:"-20%",ease:A.d.easeOut},c).from(o,1.7,{opacity:0,y:"20%",ease:A.d.easeOut,onComplete:e},"-=1.7").from(i,.9,{opacity:0,y:"100%",ease:A.d.easeOut},"-=0.4").set(a,{clearProps:"all"})}function J(e,t){setTimeout(function(){return t()},400),k.a.to(e,1,{height:0,autoAlpha:0,ease:A.c.easeOut})}function W(){return new Promise(function(e){f&&(f.style.visibility="visible"),(new q.a).fromTo(d,1,{autoAlpha:1,top:"-100%",ease:P.a.easeInOut},{top:"100%",ease:P.a.easeInOut}).from(f,1,{autoAlpha:1,top:"-100%",ease:P.a.easeInOut,onComplete:e},"-=1").to(f,1,{top:"110%",ease:P.a.easeInOut},"-=0.2").set(f,{visibility:"hidden",top:0}).timeScale(.82)})}r.a,o.a;var N=window.location.pathname,Y=!1;console.log("original pathname: ",window.location.pathname),document.addEventListener("DOMContentLoaded",function(){O.a.hooks.leave(function(){return function(){if(y)for(var e=0;e<y.length;e++)y[e].style.pointerEvents="none"}()}),O.a.hooks.afterLeave(function(){return W()}),O.a.hooks.beforeEnter(function(){u&&"none"!==window.getComputedStyle(s,null).display&&(u.click(),T(S))}),O.a.hooks.enter(function(){return L()}),O.a.hooks.afterEnter(function(){return function(){if(y)for(var e=0;e<y.length;e++)y[e].style.pointerEvents="auto"}()}),O.a.init({transitions:[{name:"many-to-landing",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("/")},leave:function(e){J(e.current.container,this.async())},beforeEnter:function(){return C(h)},enter:function(e){var t,n=e.next;return t=n.container,new Promise(function(e){return I(t,e)})}},{name:"many-to-services",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("services")},leave:function(e){J(e.current.container,this.async())},beforeEnter:function(){return C(g)},enter:function(){return new Promise(function(e){return M(e)})}},{name:"many-to-staff",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("staff")},leave:function(e){J(e.current.container,this.async())},beforeEnter:function(){return C(b)},enter:function(e){var t,n=e.next;return t=n.container,new Promise(function(e){return F(t,e)})}},{name:"many-to-contact",custom:function(e){var t=e.trigger;return t.getAttribute("href")&&t.getAttribute("href").includes("contact")},leave:function(e){J(e.current.container,this.async())},beforeEnter:function(){return C(_)},enter:function(){return new Promise(function(e){return D(e)})}}],debug:!0,logLevel:4})}),window.onload=function(){window.scrollTo(0,1),function(){p.forEach(function(e){console.log("before adjustSectionLinks(): ",e.getAttribute("href"))}),!Y&&window.location.pathname.includes(a)&&p.forEach(function(e){var t=e.getAttribute("href");if(t.includes("/"))return e.setAttribute("href",a),void console.log("updated landing section href: ",e.getAttribute("href"));t.includes(".html")&&e.setAttribute("href",t.replace(".html",""))});p.forEach(function(e){console.log("after adjustSectionLinks(): ",e.getAttribute("href"))})}(),N.includes(a)&&(N=N.replace(a,""),Y=!0,console.log("normalised pathname: ",N)),c&&c.classList.remove("nav--no-js"),function(){i&&i.removeAttribute("style");f&&f.removeAttribute("style");m&&f.removeAttribute("style")}(),function(){var e=function(e){e.currentTarget.href===window.location.href&&(e.preventDefault(),e.stopPropagation())};if(y)for(var t=0;t<y.length;t++)y[t].addEventListener("click",e)}(),E(),console.log("pathname in animateOnWindowLoad(): ",N),"/"===N?(j(h),L(),I(document.querySelector("#landing"),null,!1)):N.includes("services")?(j(g),L(),M(null,!1)):N.includes("staff")?(j(b),L(),F(document.querySelector("#staff"),null,!1)):N.includes("contact")&&(j(_),L(),D(null,!1))},u.addEventListener("click",function(){!function(){if(u)return u.checked}()?T(S):(x(),j(S),(new q.a).from(s,1,{y:"-100%",ease:A.d.easeOut}).staggerFrom(v,1.2,{autoAlpha:0,y:"-68%",ease:A.e.easeOut},.2,"-=0.5").set([s,v],{clearProps:"all"}).call(x))})}});
//# sourceMappingURL=app.7aa67f4e.js.map