import '../styles/_normalize.scss';
import '../styles/_variables.scss';
import '../styles/_vertical-rhythm.scss';
import '../styles/index.scss';
import barba from '@barba/core';
import { CSSPlugin, AttrPlugin, TweenMax, TimelineMax, Power2, Power4, Expo } from "gsap/all";

// Prevent the webpack from performing tree shaking
const plugins = [CSSPlugin, AttrPlugin];
const githubPagesRepo = 'it-services';
let windowPathname = window.location.pathname;

// Elements of the DOM
const body = document.body;
const navbar = document.querySelector('nav');
const header = document.querySelector('.header');
const headerOverlay = document.querySelector('.header__overlay');
const headerLogo = document.querySelector('.header__logo-wrapper');
const links = document.querySelectorAll('a[href]');

// Assign event handlers
document.addEventListener("DOMContentLoaded", barbaInit);
window.onload = windowOnLoad;

function windowOnLoad() {
    adjustWindowPathname();
    resetNavbarStyle();
    removeInlineStyleOnWindowLoad();
    disableCurrentPageReload();
    hideheaderOnWindowLoad();
    setTimeout(() => animateOnWindowLoad(), 360);
}

// Reset the style if the JavaScript is enabled
function resetNavbarStyle() {
    if (navbar) {
        navbar.classList.remove('nav--no-js');
    }
}

function removeInlineStyleOnWindowLoad() {
    if (body) {
        body.removeAttribute('style');
    }
    if (header) {
        header.removeAttribute('style');
    }
    if (headerLogo) {
        header.removeAttribute('style');
    }
}

function hideheaderOnWindowLoad() {
    new TimelineMax()
        .set(headerOverlay, {
            visibility: "hidden"
        })
        .to(header, 1, {
            top: "110%",
            clearProps: "all",
            ease: Power2.easeIn
        })
        .set(header, {
            visibility: "hidden",
            top: 0
        });
}

function unhideHeader() {
    if (header) {
        header.style.visibility = "visible";
    }
}

// Disable page reload when the user clicks on a link with the same url as the current page
function disableCurrentPageReload() {
    let disableCurrentPageReload = function (e) {
        if (e.currentTarget.href === window.location.href) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    if (links) {
        for (let index = 0; index < links.length; index++) {
            links[index].addEventListener('click', disableCurrentPageReload);
        }
    }
}

// Test for the URL scheme of GitHub Pages and normalize window path if necessary
function adjustWindowPathname() {
    if (windowPathname.includes(githubPagesRepo)) {
        windowPathname =
            windowPathname
                .replace(/\//, '')
                .replace(githubPagesRepo, '');
    }
}

function animateOnWindowLoad() {
    // Display the landing section animation when the user enters the page for the first time
    if (windowPathname === '/') {
        unhideContent();
        landingEnterPromise(document.querySelector('#landing'));
    }
}

function landingEnterPromise(landing, resolve) {
    let rightColumn =
        document.querySelector('.landing-section-right');
    let rightColumnLeftText =
        document.querySelector('.landing-section-right__text-container-left');
    let bokeh =
        document.querySelector('.landing-section-left__image-overlay');

    new TimelineMax()
        .from(landing, 1.8, {
            opacity: 0,
            ease: Power4.easeInOut
        })
        .from(rightColumn, 1.5, {
            opacity: 0,
            x: 300,
            ease: Power4.easeOut,
            clearProps: "all"
        }, "-=1")
        .from(rightColumnLeftText, 1.5, {
            opacity: 0,
            left: 100,
            ease: Power4.easeOut,
            onComplete: resolve
        }, "-=1")
        .from(bokeh, 4, {
            opacity: 0,
            left: 300,
            ease: Expo.easeOut,
            clearProps: "all"
        }, "-=1");
}

function barbaInit() {
    barba.hooks.leave(() => deactivateLinks());

    barba.hooks.afterLeave(() => headerInAnimation());

    barba.hooks.enter(() => unhideContent());

    barba.hooks.afterEnter(() => reactivateLinks());

    barba.init({
        transitions: [
            {
                name: 'many-to-landing',

                custom: ({ trigger }) => {
                    return trigger.getAttribute("href") && trigger.getAttribute("href").includes("/");
                },

                // This does not return anything and uses the 'this.async()' pattern
                leave({ current }) {
                    containerOutAnimation(current.container, this.async());
                },

                // Return a promise
                enter: ({ next }) => landingEnterAnimation(next.container)
            },
            {
                name: 'many-to-services',

                custom: ({ trigger }) => {
                    return trigger.getAttribute("href") && trigger.getAttribute("href").includes("services");
                },

                // This does not return anything and uses the 'this.async()' pattern
                leave({ current }) {
                    containerOutAnimation(current.container, this.async());
                },

                // Return a promise
                enter: ({ next }) => containerInAnimation(next.container)
            },
            {
                name: 'many-to-staff',

                custom: ({ trigger }) => {
                    return trigger.getAttribute("href") && trigger.getAttribute("href").includes("staff");
                },

                // This does not return anything and uses the 'this.async()' pattern
                leave({ current }) {
                    containerOutAnimation(current.container, this.async());
                },

                // Return a promise
                enter: ({ next }) => containerInAnimation(next.container)
            },
            {
                name: 'many-to-contact',

                custom: ({ trigger }) => {
                    return trigger.getAttribute("href") && trigger.getAttribute("href").includes("contact");
                },

                // This does not return anything and uses the 'this.async()' pattern
                leave({ current }) {
                    containerOutAnimation(current.container, this.async());
                },

                // Return a promise
                enter: ({ next }) => containerInAnimation(next.container)
            }
        ],
        debug: true,
        logLevel: 4,
    });
}

// The 'async' callback is passed
function containerOutAnimation(element, done) {
    // Timeout is used to enable execution of the next barba hook before this transition has finished
    setTimeout(() => done(), 400);

    TweenMax.to(element, 1, {
        height: 0,
        autoAlpha: 0,
        ease: Power2.easeOut
    });
}

// Return a promise
function headerInAnimation() {
    return new Promise(resolve => {
        unhideHeader();

        new TimelineMax()
            .fromTo(headerOverlay, 1, {
                autoAlpha: 1,
                top: "-100%",
                ease: Expo.easeInOut,
            }, {
                    top: "100%",
                    ease: Expo.easeInOut,
                })
            .from(header, 1, {
                autoAlpha: 1,
                top: "-100%",
                ease: Expo.easeInOut,
                onComplete: resolve
            }, '-=1')
            .to(header, 1, {
                top: "110%",
                ease: Expo.easeInOut
            }, '-=0.2')
            .set(header, {
                visibility: "hidden",
                top: 0
            })
            .timeScale(0.82);
    });
}

// Return a promise
function containerInAnimation(element) {
    return new Promise(resolve => {
        new TimelineMax({ onComplete: resolve })
            .fromTo(element, 1, { opacity: 0 }, { opacity: 1 });
    });
}

function landingEnterAnimation(element) {
    return new Promise(resolve => landingEnterPromise(element, resolve));
}

function unhideContent() {
    const landing = document.querySelector('#landing');
    const services = document.querySelector('#services');
    const staff = document.querySelector('#staff');
    const contact = document.querySelector('#contact');
    const video = document.querySelector('#video');

    if (landing) {
        landing.style.visibility = "visible";
    }
    if (services) {
        services.style.visibility = "visible";
    }
    if (staff) {
        staff.style.visibility = "visible";
    }
    if (contact) {
        contact.style.visibility = "visible";
    }
    if (video) {
        video.play();
    }
}

// Prevent the links from being active during the transition effect
function deactivateLinks() {
    if (links) {
        for (let index = 0; index < links.length; index++) {
            links[index].style.pointerEvents = "none";
        }
    }
}

// Reactivate the links after the transition has taken place
function reactivateLinks() {
    if (links) {
        for (let index = 0; index < links.length; index++) {
            links[index].style.pointerEvents = "auto";
        }
    }
}
