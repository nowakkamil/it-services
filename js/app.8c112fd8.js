!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;a.push([109,1]),n()}({109:function(e,t,n){"use strict";n.r(t);n(71),n(29),n(24),n(49),n(25),n(27),n(89);var r=n(40),o=(n(57),n(60),document.body),a=document.querySelector("nav"),i=document.querySelector(".nav__logo-wrapper"),c=document.querySelector(".nav__toggler"),l=document.querySelector(".nav__overlay"),u=(document.querySelector(".nav__link-wrapper-container"),document.querySelector(".header")),s=document.querySelector(".header__overlay"),f=document.querySelector(".header__logo-wrapper"),d=document.querySelector(".scroll-indicator"),m=document.querySelectorAll("a[href]"),p=document.querySelector("#link-landing"),v=document.querySelector("#link-services"),y=document.querySelector(".landing-section-right__link-services"),h=[p,v,document.querySelector("#link-staff"),document.querySelector("#link-contact")],g=Array.from(a.querySelectorAll("a[href]")),b=Array.from(a.querySelectorAll("a[href]")).filter((function(e){return!e.className.includes("logo")})),w=function(){return document.documentElement.clientWidth>600},S=n(6),_=n.n(S),k=n(0),O=n(39);n(96),n(101),n(102),n(104),n(61),n(106);function x(){if(c)return c.checked}function q(){c&&(c.disabled=!c.disabled)}function P(){K.headerOut.timeline=(new k.g).set(s,{visibility:"hidden"}).to(u,1,{top:"110%",clearProps:"all",ease:k.c.easeIn}).set(u,{visibility:"hidden",top:0})}function E(){var e=document.querySelector("#landing"),t=document.querySelector("#services"),n=document.querySelector("#staff"),r=document.querySelector("#contact"),o=document.querySelector("#video");e&&(e.style.visibility="visible"),t&&(t.style.visibility="visible"),n&&(n.style.visibility="visible"),r&&(r.style.visibility="visible"),o&&o.play()}function L(e){var t=e.getAttribute("href");return t.includes("/it-services/")&&(t=t.replace("/it-services/","/")),t}function A(){if(y&&window.location.pathname.includes("/it-services/")){var e=y.getAttribute("href");e.includes(".html")&&y.setAttribute("href",e.replace(".html",""))}}function C(e){b&&b.forEach((function(t){t.classList=Array.from(t.classList).filter((function(e){return!e.includes("--")})),t.classList.add(e)}))}function T(e){b&&b.forEach((function(t){t.classList.add(e)}))}function j(e){b&&b.forEach((function(t){t.classList.contains(e)&&t.classList.remove(e)}))}function I(e){if(x()){var t=e.target.getAttribute("href"),n=function(e){return e.includes("/it-services/")}(window.location.pathname),r=n?function(e){return e.replace("/it-services/","/")}(window.location.pathname):window.location.pathname,o=n&&M(window.location.pathname,t);(M(r,t)||o)&&c.click()}}function M(e,t){return e.includes(t)}function F(e){document.querySelector('meta[name="theme-color"]').setAttribute("content",e)}function Y(e){return e.split("-").pop()}function D(e,t){var n=Y(document.querySelector("section").id),r=h.findIndex((function(e){return Y(e.id)===n}));e<-t?0===r?r=h.length-1:--r:e>t&&(r===h.length-1?r=0:++r),h[r].click()}function R(e){Math.abs(e.deltaY)<=50||!w()&&function(e){var t=document.querySelector(".services-section__card-container");if(!t)return!1;var n=t.scrollHeight-t.clientHeight,r=e>0&&0===t.scrollTop,o=e<0&&t.scrollTop===n,a=0<t.scrollTop&&t.scrollTop<n;return r||o||a}(e.deltaY)||D(e.deltaY,50)}var H=null;function J(e){var t=e.touches[0];H=t.clientY}function W(e){if(H){var t=e.touches[0].clientY,n=H-t;Math.abs(n)<=80||(D(n,80),H=null)}}function N(){window.onwheel=R}function z(){window.addEventListener("touchstart",J,!1),window.addEventListener("touchmove",W,!1)}function B(){d.style.opacity="1",d.style.visibility="visible",window.addEventListener("click",G)}function G(){d.style.opacity="0",setTimeout((function(){return d.style=null}),1e3),window.removeEventListener("click",G)}var K={headerIn:{timeline:new k.g},headerOut:{timeline:new k.g},landing:{timeline:new k.g},services:{timeline:new k.g},staff:{timeline:new k.g},contact:{timeline:new k.g}};function Q(e,t){setTimeout((function(){return t()}),400),O.a.to(e,1,{height:0,autoAlpha:0,ease:k.c.easeOut})}function U(){return new Promise((function(e){u&&(u.style.visibility="visible"),K.headerIn.timeline=(new k.g).fromTo(s,1,{autoAlpha:1,top:"-100%",ease:k.a.easeInOut},{top:"100%",ease:k.a.easeInOut}).from(u,1,{autoAlpha:1,top:"-100%",ease:k.a.easeInOut,onComplete:e},"-=1").to(u,1,{top:"110%",ease:k.a.easeInOut},"-=0.2").set(u,{visibility:"hidden",top:0}).timeScale(.82)}))}var V=n(4),X=n.n(V);function Z(e){return new Promise((function(t){return function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(w()){var r=document.querySelector(".landing-section-right"),o=document.querySelector(".landing-section-right__text-container-left"),a=document.querySelector(".landing-section-right__text-description"),c=document.querySelector(".landing-section-right__text-container-right"),l=document.querySelector(".landing-section-right__read-more-container"),u=document.querySelector(".landing-section-left__image-overlay"),s=n?null:"+=0.48";K.landing.timeline=new k.g({onComplete:t}).from(e,2.2,{opacity:0,ease:k.e.easeInOut},s).from(r,1.5,{opacity:0,x:300,ease:k.e.easeOut,clearProps:"all"},"-=1").addLabel("headerStart","-=1").from(o,1.5,{opacity:0,y:"-100%",ease:k.d.easeOut,clearProps:"all"},"headerStart").from(c,1.5,{opacity:0,y:"100%",ease:k.e.easeOut,onComplete:t,clearProps:"all"},"headerStart").staggerFrom(b,1.2,{opacity:0,left:80,ease:k.e.easeOut,clearProps:"all"},-.2,"-=1").addLabel("rightColumnText","-=1").from(a,1.6,{opacity:0,x:"-30%",ease:k.d.easeOut,clearProps:"all"},"rightColumnText").from(l,1.6,{opacity:0,x:"-30%",ease:k.d.easeOut,clearProps:"all"},"rightColumnText").from(i,2,{opacity:0,x:10,ease:k.c.easeOut,clearProps:"all"},"rightColumnText+=0.4").from(u,4,{opacity:0,left:300,ease:k.a.easeOut,clearProps:"all"},"rightColumnText")}else{var f=document.querySelector(".landing-section-right__text-container-mobile"),d=document.querySelector(".landing-section-right__text-description-wrapper"),m=n?"+=0.6":"+=0.9";K.landing.timeline=new k.g({onComplete:t}).from(f,1.4,{opacity:0,y:"-140%",ease:k.d.easeOut,clearProps:"all"},m).from(d,1.1,{opacity:0,y:"100%",ease:k.e.easeOut,clearProps:"all"},"-=0.7")}}(e,t)}))}function $(){return new Promise((function(e){return function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.querySelectorAll(".services-section__card"),r=t?"+=0.62":"+=0.86",o=new k.g({onComplete:e}).staggerFrom(n,1.8,{opacity:0,y:"-34%",ease:k.e.easeOut,onComplete:e,clearProps:"all"},.38,r).addLabel("navbarStart","-=1.16").staggerFrom(b,1.4,{opacity:0,y:"-160%",ease:k.e.easeOut,clearProps:"all",onComplete:e},.28,"navbarStart");w()&&o.from(i,2.4,{opacity:0,y:"-60%",ease:k.e.easeOut,onComplete:e,clearProps:"all"},"navbarStart+=0.82"),K.services.timeline=o}(e)}))}function ee(e){return new Promise((function(t){return function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=document.querySelector(".staff-section__card-staff-container"),o=document.querySelectorAll(".staff-section__card-staff-member-container"),a=document.querySelector(".staff-section__title"),c=document.documentElement.clientWidth<=600,l=c?-.3:.3,u=n?.62:.9,s=(new k.g).from(e,4.86,{opacity:0,ease:k.d.easeOut,onComplete:t},u).staggerFrom(o,1.5,{opacity:0,y:"50%",ease:k.a.easeOut},l,"-=4.4").from(a,2,{opacity:0,y:"80%",ease:k.e.easeOut,onComplete:t,clearProps:"all"},"-=2.62").addLabel("titleStart","-=1.8").from(r,4,{boxShadow:"none",ease:k.d.easeInOut,onComplete:t},"-=2.2").staggerFrom(b,1.4,{opacity:0,y:"40%",ease:k.e.easeOut,onComplete:t,clearProps:"all"},.24,"titleStart");w()&&s.from(i,2,{opacity:0,y:16,ease:k.e.easeOut,clearProps:"all"},"titleStart+=0.8"),K.staff.timeline=s}(e,t)}))}function te(){return new Promise((function(e){return function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.querySelectorAll(".contact-section__card"),r=n[0],o=n[1],a=document.querySelector(".contact-section__card-container"),c=document.querySelector(".contact-section__footer"),l=t?"+=0.66":"+=1.22",u=new k.g({onComplete:e}).set(a,{overflowY:"hidden"}).from(r,1.7,{opacity:0,y:w()?"-20%":"-26%",ease:k.d.easeOut},l).from(o,w()?1.7:1.8,{opacity:0,y:w()?"20%":"-32%",ease:w()?k.d.easeOut:k.c.easeOut},w()?"-=1.7":"-=1.44").from(c,.9,{opacity:0,y:"100%",ease:k.d.easeOut,onComplete:e},"-=0.4").set(a,{clearProps:"all"}).addLabel("navbarStart","-=1.22").staggerFrom(b,1.46,{opacity:0,y:"-160%",ease:k.e.easeOut,onComplete:e,clearProps:"all"},.3,"navbarStart").staggerTo(b,1.2,{color:"#fff",textShadow:"0px 0px 0px #fff",ease:k.a.easeOut,clearProps:"all"},.34,"navbarStart+=2");w()&&u.from(i,2.4,{opacity:0,y:"-60%",ease:k.e.easeOut,clearProps:"all"},"navbarStart+=1.12"),K.contact.timeline=u}(e)}))}function ne(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function re(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){ne(a,r,o,i,c,"next",e)}function c(e){ne(a,r,o,i,c,"throw",e)}i(void 0)}))}}r.a;var oe=window.location.pathname;function ae(){return(ae=re(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie(window),le(),ue(),se(),fe(),P(),ce(),e.next=9,me();case 9:de(),N(),z(),B();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){var t=e.document;if(!e.navigator.standalone&&!location.hash&&e.addEventListener){e.scrollTo(0,1);var n=1,r=function(){return e.pageYOffset||"CSS1Compat"===t.compatMode&&t.documentElement.scrollTop||t.body.scrollTop||0},o=setInterval((function(){t.body&&(clearInterval(o),n=r(),e.scrollTo(0,1===n?0:1))}),15);e.addEventListener("load",(function(){setTimeout((function(){r()<20&&e.scrollTo(0,1===n?0:1)}),0)}),!1)}}function ce(){oe.includes("/it-services/")&&(oe=oe.replace("/it-services/","/"))}function le(){window.location.pathname.includes("/it-services/")&&h.forEach((function(e){var t=e.getAttribute("href");t.includes("/")?e.setAttribute("href","/it-services/"):t.includes(".html")&&e.setAttribute("href",t.replace(".html",""))}))}function ue(){a&&a.classList.remove("nav--no-js")}function se(){o&&o.removeAttribute("style"),u&&u.removeAttribute("style"),f&&u.removeAttribute("style")}function fe(){var e=function(e){e.currentTarget.href===window.location.href&&(e.preventDefault(),e.stopPropagation())};if(m)for(var t=0;t<m.length;t++)m[t].addEventListener("click",e)}function de(){g.forEach((function(e){return e.addEventListener("click",I)}))}function me(){return pe.apply(this,arguments)}function pe(){return(pe=re(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("/"!==oe){e.next=9;break}return A(),T("nav__link--landing"),E(),e.next=6,Z(document.querySelector("#landing"));case 6:F(X.a.mineShaftDarker),e.next=31;break;case 9:if(!oe.includes("services")){e.next=17;break}return T("nav__link--services"),E(),e.next=14,$();case 14:F(X.a.brightSun),e.next=31;break;case 17:if(!oe.includes("staff")){e.next=25;break}return T("nav__link--staff"),E(),e.next=22,ee(document.querySelector("#staff"));case 22:F(X.a.mineShaft),e.next=31;break;case 25:if(!oe.includes("contact")){e.next=31;break}return T("nav__link--contact"),E(),e.next=30,te();case 30:F(X.a.black);case 31:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){_.a.hooks.beforeLeave((function(){window.onwheel=null,window.removeEventListener("touchstart",J,!1),window.removeEventListener("touchmove",W,!1),G()})),_.a.hooks.leave((function(){return function(){if(m)for(var e=0;e<m.length;e++)m[e].style.pointerEvents="none"}()})),_.a.hooks.afterLeave((function(){return U()})),_.a.hooks.beforeEnter((function(){c&&"none"!==window.getComputedStyle(l,null).display&&(c.click(),j("nav__link--overlay")),Object.keys(K).filter((function(e){return!e.includes("header")})).forEach((function(e){return K[e].timeline.time(K[e].timeline.duration())}))})),_.a.hooks.enter((function(){return E()})),_.a.hooks.afterEnter((function(){return function(){if(m)for(var e=0;e<m.length;e++)m[e].style.pointerEvents="auto"}()})),_.a.hooks.after((function(){N(),z()})),_.a.init({transitions:[{name:"many-to-landing",custom:function(e){var t=L(e.trigger);return"/"===t||"/it-services/"===t},leave:function(e){Q(e.current.container,this.async())},beforeEnter:function(){C("nav__link--landing"),A(),F(X.a.mineShaftDarker)},enter:function(e){return Z(e.next.container)}},{name:"many-to-services",custom:function(e){return L(e.trigger).includes("services")},leave:function(e){Q(e.current.container,this.async())},beforeEnter:function(){C("nav__link--services"),F(X.a.brightSun)},enter:function(){return $()}},{name:"many-to-staff",custom:function(e){return L(e.trigger).includes("staff")},leave:function(e){Q(e.current.container,this.async())},beforeEnter:function(){C("nav__link--staff"),F(X.a.mineShaft)},enter:function(e){return ee(e.next.container)}},{name:"many-to-contact",custom:function(e){return L(e.trigger).includes("contact")},leave:function(e){Q(e.current.container,this.async())},beforeEnter:function(){C("nav__link--contact"),F(X.a.black)},enter:function(){return te()}}]})})),window.onload=function(){return ae.apply(this,arguments)},c.addEventListener("click",(function(){x()?(q(),T("nav__link--overlay"),Object.values(K).forEach((function(e){return e.timeline.time(e.timeline.duration())})),(new k.g).from(l,1,{y:"-100%",ease:k.d.easeOut}).staggerFrom(b,1.2,{autoAlpha:0,y:"-68%",ease:k.e.easeOut},.2,"-=0.5").set([l,b],{clearProps:"all"}).call(q)):j("nav__link--overlay")}))},4:function(e,t,n){e.exports={brightSun:"#ffda38",mineShaft:"#212121",mineShaftDarker:"#1f1f1f",black:"black"}},89:function(e,t,n){e.exports={brightSun:"#ffda38",mineShaft:"#212121",mineShaftDarker:"#1f1f1f",black:"black"}}});
//# sourceMappingURL=app.8c112fd8.js.map