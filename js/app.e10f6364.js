!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);d.length;)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;o.push([94,1]),n()}({3:function(e,t,n){e.exports={brightSun:"#ffda38",mineShaft:"#212121",mineShaftDarker:"#1f1f1f",black:"black"}},68:function(e,t,n){e.exports={brightSun:"#ffda38",mineShaft:"#212121",mineShaftDarker:"#1f1f1f",black:"black"}},94:function(e,t,n){"use strict";n.r(t);n(36),n(24),n(26),n(68);var r=n(97),a=n(98),o=(n(41),n(45),document.body),i=document.querySelector("nav"),c=document.querySelector(".nav__logo-wrapper"),l=document.querySelector(".nav__toggler"),u=document.querySelector(".nav__overlay"),s=(document.querySelector(".nav__link-wrapper-container"),document.querySelector(".header")),f=document.querySelector(".header__overlay"),d=document.querySelector(".header__logo-wrapper"),m=document.querySelectorAll("a[href]"),y=document.querySelector("#link-landing"),p=document.querySelector("#link-services"),v=document.querySelector(".landing-section-right__link-services"),h=[y,p,document.querySelector("#link-staff"),document.querySelector("#link-contact")],g=Array.from(i.querySelectorAll("a[href]")),b=Array.from(i.querySelectorAll("a[href]")).filter((function(e){return!e.className.includes("logo")})),S=function(){return document.documentElement.clientWidth>600},_=(n(50),n(35),n(7)),w=n.n(_),O=n(99),k=n(0),q=n(95),P=n(96);n(85),n(87),n(53),n(89);function x(){if(l)return l.checked}function A(){l&&(l.disabled=!l.disabled)}function E(){W.headerOut.timeline=(new O.a).set(f,{visibility:"hidden"}).to(s,1,{top:"110%",clearProps:"all",ease:k.c.easeIn}).set(s,{visibility:"hidden",top:0})}function L(){var e=document.querySelector("#landing"),t=document.querySelector("#services"),n=document.querySelector("#staff"),r=document.querySelector("#contact"),a=document.querySelector("#video");e&&(e.style.visibility="visible"),t&&(t.style.visibility="visible"),n&&(n.style.visibility="visible"),r&&(r.style.visibility="visible"),a&&a.play()}function T(e){var t=e.getAttribute("href");return t.includes("/it-services/")&&(t=t.replace("/it-services/","/")),t}function C(){if(v&&window.location.pathname.includes("/it-services/")){var e=v.getAttribute("href");e.includes(".html")&&v.setAttribute("href",e.replace(".html",""))}}function j(e){b&&b.forEach((function(t){t.classList=Array.from(t.classList).filter((function(e){return!e.includes("--")})),t.classList.add(e)}))}function I(e){b&&b.forEach((function(t){t.classList.add(e)}))}function F(e){b&&b.forEach((function(t){t.classList.contains(e)&&t.classList.remove(e)}))}function D(e){if(x()){var t=e.target.getAttribute("href"),n=function(e){return e.includes("/it-services/")}(window.location.pathname),r=n?function(e){return e.replace("/it-services/","/")}(window.location.pathname):window.location.pathname,a=n&&M(window.location.pathname,t);(M(r,t)||a)&&l.click()}}function M(e,t){return e.includes(t)}function J(e){document.querySelector('meta[name="theme-color"]').setAttribute("content",e)}var W={headerIn:{timeline:new O.a},headerOut:{timeline:new O.a},landing:{timeline:new O.a},services:{timeline:new O.a},staff:{timeline:new O.a},contact:{timeline:new O.a}};function Y(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(S()){var r=document.querySelector(".landing-section-right"),a=document.querySelector(".landing-section-right__text-container-left"),o=document.querySelector(".landing-section-right__text-description"),i=document.querySelector(".landing-section-right__text-container-right"),l=document.querySelector(".landing-section-right__read-more-container"),u=document.querySelector(".landing-section-left__image-overlay"),s=n?null:"+=0.48";W.landing.timeline=(new O.a).from(e,2.2,{opacity:0,ease:k.e.easeInOut},s).from(r,1.5,{opacity:0,x:300,ease:k.e.easeOut,clearProps:"all"},"-=1").addLabel("headerStart","-=1").from(a,1.5,{opacity:0,y:"-100%",ease:k.d.easeOut,clearProps:"all"},"headerStart").from(i,1.5,{opacity:0,y:"2%",ease:k.e.easeOut,clearProps:"all"},"headerStart").staggerFrom(b,1.2,{opacity:0,left:80,ease:k.e.easeOut,onComplete:t,clearProps:"all"},-.2,"-=1").addLabel("rightColumnText","-=1").from(o,1.6,{opacity:0,x:"-30%",ease:k.d.easeOut,clearProps:"all"},"rightColumnText").from(l,1.6,{opacity:0,x:"-30%",ease:k.d.easeOut,clearProps:"all"},"rightColumnText").from(c,2,{opacity:0,x:10,ease:k.c.easeOut,clearProps:"all"},"rightColumnText+=0.4").from(u,4,{opacity:0,left:300,ease:q.a.easeOut,clearProps:"all"},"rightColumnText")}else{var f=document.querySelector(".landing-section-right__text-container-mobile"),d=document.querySelector(".landing-section-right__text-description-wrapper"),m=n?"+=0.6":"+=0.9";W.landing.timeline=(new O.a).from(f,1.4,{opacity:0,y:"-140%",ease:k.d.easeOut,clearProps:"all"},m).from(d,1.1,{opacity:0,y:"100%",ease:k.e.easeOut,onComplete:t,clearProps:"all"},"-=0.7")}}function N(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.querySelectorAll(".services-section__card"),r=t?"+=0.62":"+=0.86",a=(new O.a).staggerFrom(n,1.8,{opacity:0,y:"-34%",ease:k.e.easeOut,clearProps:"all",onComplete:e},.38,r).addLabel("navbarStart","-=1.16").staggerFrom(b,1.4,{opacity:0,y:"-160%",ease:k.e.easeOut,clearProps:"all"},.28,"navbarStart");S()&&a.from(c,2.4,{opacity:0,y:"-60%",ease:k.e.easeOut,clearProps:"all"},"navbarStart+=0.82"),W.services.timeline=a}function z(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=document.querySelector(".staff-section__card-staff-container"),a=document.querySelectorAll(".staff-section__card-staff-member-container"),o=document.querySelector(".staff-section__title"),i=document.documentElement.clientWidth<=600,l=i?-.3:.3,u=n?.62:.9,s=(new O.a).from(e,4.86,{opacity:0,ease:k.d.easeOut},u).staggerFrom(a,1.5,{opacity:0,y:"50%",ease:q.a.easeOut},l,"-=4.4").from(o,2,{opacity:0,y:"80%",ease:k.e.easeOut,clearProps:"all"},"-=2.62").addLabel("titleStart","-=1.8").from(r,4,{boxShadow:"none",ease:k.d.easeInOut},"-=2.2").staggerFrom(b,1.4,{opacity:0,y:"40%",ease:k.e.easeOut,onComplete:t,clearProps:"all"},.24,"titleStart");S()&&s.from(c,2,{opacity:0,y:16,ease:k.e.easeOut,clearProps:"all"},"titleStart+=0.8"),W.staff.timeline=s}function B(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.querySelectorAll(".contact-section__card"),r=n[0],a=n[1],o=document.querySelector(".contact-section__card-container"),i=document.querySelector(".contact-section__footer"),l=t?"+=0.66":"+=1.22",u=(new O.a).set(o,{overflowY:"hidden"}).from(r,1.7,{opacity:0,y:S()?"-20%":"-26%",ease:k.d.easeOut},l).from(a,S()?1.7:1.8,{opacity:0,y:S()?"20%":"-32%",ease:S()?k.d.easeOut:k.c.easeOut,onComplete:e},S()?"-=1.7":"-=1.44").from(i,.9,{opacity:0,y:"100%",ease:k.d.easeOut},"-=0.4").set(o,{clearProps:"all"}).addLabel("navbarStart","-=1.22").staggerFrom(b,1.46,{opacity:0,y:"-160%",ease:k.e.easeOut,clearProps:"all"},.3,"navbarStart").staggerTo(b,1.2,{color:"#fff",textShadow:"0px 0px 0px #fff",ease:q.a.easeOut,clearProps:"all"},.34,"navbarStart+=2");S()&&u.from(c,2.4,{opacity:0,y:"-60%",ease:k.e.easeOut,clearProps:"all"},"navbarStart+=1.12"),W.contact.timeline=u}function G(e,t){setTimeout((function(){return t()}),400),P.a.to(e,1,{height:0,autoAlpha:0,ease:k.c.easeOut})}function H(){return new Promise((function(e){s&&(s.style.visibility="visible"),W.headerIn.timeline=(new O.a).fromTo(f,1,{autoAlpha:1,top:"-100%",ease:q.a.easeInOut},{top:"100%",ease:q.a.easeInOut}).from(s,1,{autoAlpha:1,top:"-100%",ease:q.a.easeInOut,onComplete:e},"-=1").to(s,1,{top:"110%",ease:q.a.easeInOut},"-=0.2").set(s,{visibility:"hidden",top:0}).timeScale(.82)}))}var K=n(3),Q=n.n(K);r.a,a.a;var R=window.location.pathname;document.addEventListener("DOMContentLoaded",(function(){w.a.hooks.leave((function(){return function(){if(m)for(var e=0;e<m.length;e++)m[e].style.pointerEvents="none"}()})),w.a.hooks.afterLeave((function(){return H()})),w.a.hooks.beforeEnter((function(){l&&"none"!==window.getComputedStyle(u,null).display&&(l.click(),F("nav__link--overlay")),Object.keys(W).filter((function(e){return!e.includes("header")})).forEach((function(e){return W[e].timeline.time(W[e].timeline.duration())}))})),w.a.hooks.enter((function(){return L()})),w.a.hooks.afterEnter((function(){return function(){if(m)for(var e=0;e<m.length;e++)m[e].style.pointerEvents="auto"}()})),w.a.init({transitions:[{name:"many-to-landing",custom:function(e){var t=T(e.trigger);return"/"===t||"/it-services/"===t},leave:function(e){G(e.current.container,this.async())},beforeEnter:function(){j("nav__link--landing"),C(),J(Q.a.mineShaftDarker)},enter:function(e){var t,n=e.next;return t=n.container,new Promise((function(e){return Y(t,e)}))}},{name:"many-to-services",custom:function(e){return T(e.trigger).includes("services")},leave:function(e){G(e.current.container,this.async())},beforeEnter:function(){j("nav__link--services"),J(Q.a.brightSun)},enter:function(){return new Promise((function(e){return N(e)}))}},{name:"many-to-staff",custom:function(e){return T(e.trigger).includes("staff")},leave:function(e){G(e.current.container,this.async())},beforeEnter:function(){j("nav__link--staff"),J(Q.a.mineShaft)},enter:function(e){var t,n=e.next;return t=n.container,new Promise((function(e){return z(t,e)}))}},{name:"many-to-contact",custom:function(e){return T(e.trigger).includes("contact")},leave:function(e){G(e.current.container,this.async())},beforeEnter:function(){j("nav__link--contact"),J(Q.a.black)},enter:function(){return new Promise((function(e){return B(e)}))}}]})})),window.onload=function(){(function(e){var t=e.document;if(e.navigator.standalone||location.hash||!e.addEventListener)return;e.scrollTo(0,1);var n=1,r=function(){return e.pageYOffset||"CSS1Compat"===t.compatMode&&t.documentElement.scrollTop||t.body.scrollTop||0},a=setInterval((function(){t.body&&(clearInterval(a),n=r(),e.scrollTo(0,1===n?0:1))}),15);e.addEventListener("load",(function(){setTimeout((function(){r()<20&&e.scrollTo(0,1===n?0:1)}),0)}),!1)})(window),window.location.pathname.includes("/it-services/")&&h.forEach((function(e){var t=e.getAttribute("href");t.includes("/")?e.setAttribute("href","/it-services/"):t.includes(".html")&&e.setAttribute("href",t.replace(".html",""))})),i&&i.classList.remove("nav--no-js"),function(){o&&o.removeAttribute("style");s&&s.removeAttribute("style");d&&s.removeAttribute("style")}(),function(){var e=function(e){e.currentTarget.href===window.location.href&&(e.preventDefault(),e.stopPropagation())};if(m)for(var t=0;t<m.length;t++)m[t].addEventListener("click",e)}(),E(),R.includes("/it-services/")&&(R=R.replace("/it-services/","/")),"/"===R?(C(),I("nav__link--landing"),L(),Y(document.querySelector("#landing"),null,!1),J(Q.a.mineShaftDarker)):R.includes("services")?(I("nav__link--services"),L(),N(null,!1),J(Q.a.brightSun)):R.includes("staff")?(I("nav__link--staff"),L(),z(document.querySelector("#staff"),null,!1),J(Q.a.mineShaft)):R.includes("contact")&&(I("nav__link--contact"),L(),B(null,!1),J(Q.a.black)),g.forEach((function(e){return e.addEventListener("click",D)}))},l.addEventListener("click",(function(){x()?(A(),I("nav__link--overlay"),Object.values(W).forEach((function(e){return e.timeline.time(e.timeline.duration())})),(new O.a).from(u,1,{y:"-100%",ease:k.d.easeOut}).staggerFrom(b,1.2,{autoAlpha:0,y:"-68%",ease:k.e.easeOut},.2,"-=0.5").set([u,b],{clearProps:"all"}).call(A)):F("nav__link--overlay")}))}});
//# sourceMappingURL=app.e10f6364.js.map