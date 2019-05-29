import '../styles/_normalize.scss';
import '../styles/_variables.scss';
import '../styles/_vertical-rhythm.scss';
import '../styles/index.scss';
import barba from '@barba/core';
import { TweenMax, TimelineMax, Power4 } from "gsap/all";

const githubPagesRepo = 'it-services';
const navbar = document.querySelector('nav');
const links = document.querySelectorAll('a[href]');
let windowPathname = window.location.pathname;

// Reset the style if the JavaScript is enabled
if (navbar) {
    navbar.classList.remove('nav--no-js');
}

// Disable page reload when the user clicks on a link with the same url as the current page
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

// Test for the URL scheme of GitHub Pages and normalize window path if necessary
if (windowPathname.includes(githubPagesRepo)) {
    windowPathname =
        windowPathname
            .replace(/\//, '')
            .replace(githubPagesRepo, '');
}

// Display the landing section animation when the user enters the page for the first time
if (windowPathname === '/') {
    unhideContent();
    landingEnterPromise(document.querySelector('#landing'));
}

function landingEnterPromise(landing, resolve) {
    let rightColumn = document.querySelector('.landing-section-right');
    let rightColumnLeftText = document.querySelector('.landing-section-right__text-container-left');
    let bokeh = document.querySelector('.landing-section-left__image-overlay');

    new TimelineMax({ onComplete: resolve })
        .from(landing, 2, { opacity: 0, ease: Power4.easeInOut })
        .from(rightColumn, 1.5, { x: 300, opacity: 0, ease: Power4.easeOut, clearProps: "all" }, "-=1")
        .from(rightColumnLeftText, 1.5, { left: 100, opacity: 0, ease: Power4.easeOut }, "-=0.9")
        .from(bokeh, 3, { left: 300, opacity: 0, ease: Power4.easeOut }, "-=0.9");
}

document.addEventListener("DOMContentLoaded", function () {
    barba.hooks.leave(() => {
        deactivateLinks();
    });

    barba.hooks.enter(() => {
        unhideContent();
    });

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
                enter: ({ next }) => landingEnterAnimation(next.container).then(reactivateLinks)
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
                enter: ({ next }) => containerInAnimation(next.container).then(reactivateLinks)
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
                enter: ({ next }) => containerInAnimation(next.container).then(reactivateLinks)
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
                enter: ({ next }) => containerInAnimation(next.container).then(reactivateLinks)
            }
        ],
        debug: true,
        logLevel: 4,
    });
});

// The 'async' callback is passed
function containerOutAnimation(element, done) {
    TweenMax.to(element, 1, { height: 0, y: "-200", autoAlpha: 0, onComplete: done });
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
