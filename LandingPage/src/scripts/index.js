import '../styles/index.scss';

import { CSSPlugin } from "gsap/all";

import {
    githubPagesRepo,
    body,
    navbar,
    navbarToggler,
    header,
    headerLogo,
    links,
    sectionLinks,
    navbarLinkLandingClass,
    navbarLinks,
    navbarLinkServicesClass,
    navbarLinkStaffClass,
    navbarLinkContactClass
} from '../scripts/constants';
import {
    barbaInit,
    landingEnterAnimation,
    servicesEnterAnimation,
    staffEnterAnimation,
    contactEnterAnimation
} from '../scripts/barba';
import {
    unhideNavbarOverlayIfHidden,
    hideheaderOnWindowLoad,
    unhideContent,
    normaliseServicesLink,
    closeNavbarOverlayIfTargetMatchesCurrent,
    addModifierClassToNavbarLink,
    adjustThemeColor,
    activateOnWheel,
    activateOnSwipe,
    activateScrollIndicator
} from '../scripts/utils';

import colors from '../styles/_variables.scss';

// Prevent the webpack from performing tree shaking
const plugin = CSSPlugin;

// Store window pathname in a separate variable to later normalize it if necessary
let windowPathname = window.location.pathname;

// Assign event handlers
document.addEventListener("DOMContentLoaded", barbaInit);
window.onload = windowOnLoad;
navbarToggler.addEventListener("click", unhideNavbarOverlayIfHidden);

async function windowOnLoad() {
    hideAddressBar(window);
    adjustSectionLinks();
    resetNavbarStyle();
    removeInlineStyleOnWindowLoad();
    disableCurrentPageReload();
    hideheaderOnWindowLoad();
    adjustWindowPathname();
    await animateOnWindowLoad();
    addEventListenerToNavbarLinks();
    activateOnWheel();
    activateOnSwipe();
    activateScrollIndicator();
}

function hideAddressBar(win) {
    let doc = win.document;

    // If there's a hash, or addEventListener is undefined, stop here
    if (win.navigator.standalone || location.hash || !win.addEventListener) {
        return;
    }

    // Scroll to 1
    win.scrollTo(0, 1);
    let scrollTop = 1;
    let getScrollTop = () =>
        win.pageYOffset || doc.compatMode === "CSS1Compat"
        && doc.documentElement.scrollTop || doc.body.scrollTop || 0;

    // Reset to 0 on bodyready, if needed
    let bodycheck = setInterval(() => {
        if (!doc.body) {
            return;
        }

        clearInterval(bodycheck);
        scrollTop = getScrollTop();
        win.scrollTo(0, scrollTop === 1 ? 0 : 1);
    }, 15);

    win.addEventListener("load", () => {
        setTimeout(() => {
            // At load, if user hasn't scrolled more than 20
            if (getScrollTop() < 20) {
                // Reset to hide address bar at onload
                win.scrollTo(0, scrollTop === 1 ? 0 : 1);
            }
        }, 0);
    }, false);
}

// Test for the URL scheme of GitHub Pages and normalise window path if necessary.
// Run only once
function adjustWindowPathname() {
    if (windowPathname.includes(githubPagesRepo)) {
        windowPathname =
            windowPathname
                .replace(githubPagesRepo, '/');
    }
}

// Test for the URL scheme of GitHub Pages and make necessary adjustments
function adjustSectionLinks() {
    if (window.location.pathname.includes(githubPagesRepo)) {
        sectionLinks.forEach((link) => {
            let linkHrefAttribute = link.getAttribute('href');

            if (linkHrefAttribute.includes('/')) {
                link.setAttribute('href', githubPagesRepo);

                return;
            }

            if (linkHrefAttribute.includes('.html')) {
                link.setAttribute('href', linkHrefAttribute.replace('.html', ''));
            }
        });
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

function addEventListenerToNavbarLinks() {
    navbarLinks.forEach(n => n.addEventListener("click", closeNavbarOverlayIfTargetMatchesCurrent));
}

// Display an appropriate animation when the user enters the page for the first time
async function animateOnWindowLoad() {
    // Display the landing section animation
    if (windowPathname === '/') {
        normaliseServicesLink();
        addModifierClassToNavbarLink(navbarLinkLandingClass);
        unhideContent();
        await landingEnterAnimation(document.querySelector('#landing'));
        adjustThemeColor(colors.mineShaftDarker);
    }
    // Display the services section animation
    else if (windowPathname.includes('services')) {
        addModifierClassToNavbarLink(navbarLinkServicesClass);
        unhideContent();
        await servicesEnterAnimation();
        adjustThemeColor(colors.brightSun);
    }
    // Display the staff section animation
    else if (windowPathname.includes('staff')) {
        addModifierClassToNavbarLink(navbarLinkStaffClass);
        unhideContent();
        await staffEnterAnimation(document.querySelector('#staff'));
        adjustThemeColor(colors.mineShaft);
    }
    // Display the contact section animation
    else if (windowPathname.includes('contact')) {
        addModifierClassToNavbarLink(navbarLinkContactClass);
        unhideContent();
        await contactEnterAnimation();
        adjustThemeColor(colors.black);
    }
}
