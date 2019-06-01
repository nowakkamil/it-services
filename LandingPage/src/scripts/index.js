import '../styles/index.scss';

import { CSSPlugin, AttrPlugin } from "gsap/all";

import { githubPagesRepo, body, navbar, navbarToggler, header, headerLogo, links, navbarLinkLandingClass, navbarLinkServicesClass, navbarLinkStaffClass, navbarLinkContactClass } from '../scripts/constants';
import { barbaInit } from '../scripts/barba';
import { hideheaderOnWindowLoad, unhideNavbarOverlayIfHidden, landingEnterPromise, servicesEnterPromise, staffEnterPromise, contactEnterPromise } from '../scripts/gsap';
import { unhideContent, addModifierClassToNavbarLink } from '../scripts/utils';

// Prevent the webpack from performing tree shaking
const plugins = [CSSPlugin, AttrPlugin];

// Store window pathname in a separate variable to later normalize it if necessary
let windowPathname = window.location.pathname;

// Assign event handlers
document.addEventListener("DOMContentLoaded", barbaInit);
window.onload = windowOnLoad;
navbarToggler.addEventListener("click", unhideNavbarOverlayIfHidden);

function windowOnLoad() {
    adjustWindowPathname();
    resetNavbarStyle();
    removeInlineStyleOnWindowLoad();
    disableCurrentPageReload();
    hideheaderOnWindowLoad();
    animateOnWindowLoad();
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

// Display an appropriate animation when the user enters the page for the first time
function animateOnWindowLoad() {
    // Display the landing section animation
    if (windowPathname === '/') {
        addModifierClassToNavbarLink(navbarLinkLandingClass);
        unhideContent();
        landingEnterPromise(document.querySelector('#landing'), null, false);
    }
    // Display the services section animation
    else if (windowPathname.includes('services')) {
        addModifierClassToNavbarLink(navbarLinkServicesClass);
        unhideContent();
        servicesEnterPromise(null, false);
    }
    // Display the staff section animation
    else if (windowPathname.includes('staff')) {
        addModifierClassToNavbarLink(navbarLinkStaffClass);
        unhideContent();
        staffEnterPromise(document.querySelector('#staff'), null, false);
    }
    // Display the contact section animation
    else if (windowPathname.includes('contact')) {
        addModifierClassToNavbarLink(navbarLinkContactClass);
        unhideContent();
        contactEnterPromise(null, false);
    }
    // Redirect the user to the landing section when the URL doesn't match any of the above paths
    else {
        window.location.pathname = '/';
    }
}
