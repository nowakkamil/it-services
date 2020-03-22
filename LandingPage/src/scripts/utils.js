import { githubPagesRepo, navbarToggler, navbarOverlay, header, links, linkServicesFromLanding, navbarLinksWithoutLogo, navbarLinkOverlayClass } from '../scripts/constants';
import { headerOutAnimation, navbarOverlayInAnimation, timelines } from '../scripts/gsap';

function isNavbarTogglerChecked() {
    if (navbarToggler) {
        return navbarToggler.checked;
    }
}

function unhideNavbarOverlayIfHidden() {
    if (isNavbarTogglerChecked()) {
        toggleNavbarTogglerDisability();
        addModifierClassToNavbarLink(navbarLinkOverlayClass);
        navbarOverlayInAnimation();
    } else {
        removeModifierClassFromNavbarLink(navbarLinkOverlayClass);
    }
}

function hideNavbarOverlayIfVisible() {
    if (navbarToggler && window.getComputedStyle(navbarOverlay, null).display !== "none") {
        navbarToggler.click();
        removeModifierClassFromNavbarLink(navbarLinkOverlayClass);
    }
}

function toggleNavbarTogglerDisability() {
    if (navbarToggler) {
        navbarToggler.disabled = !navbarToggler.disabled;
    }
}

function hideheaderOnWindowLoad() {
    headerOutAnimation();
}

function unhideHeader() {
    if (header) {
        header.style.visibility = "visible";
    }
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

function normaliseTrigger(trigger) {
    let normalisedTrigger = trigger.getAttribute("href");

    if (normalisedTrigger.includes(githubPagesRepo)) {
        normalisedTrigger =
            normalisedTrigger
                .replace(githubPagesRepo, '/');
    }

    return normalisedTrigger;
}

function normaliseServicesLink() {
    if (linkServicesFromLanding
        && window.location.pathname.includes(githubPagesRepo)) {
        let linkHrefAttribute = linkServicesFromLanding.getAttribute('href');

        if (linkHrefAttribute.includes('.html')) {
            linkServicesFromLanding.setAttribute('href', linkHrefAttribute.replace('.html', ''));
        }
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

// This method doesn't result in removing the ::after pseudo element of the navbar link.
// The base class is intact
function setNavbarLinkModifierClass(modifierClass) {
    if (navbarLinksWithoutLogo) {
        navbarLinksWithoutLogo.forEach(link => {
            link.classList =
                Array
                    .from(link.classList)
                    // Remove each modifier class from the link's classList collection
                    .filter((className) => !className.includes('--'));

            link.classList.add(modifierClass);
        });
    }
}

function addModifierClassToNavbarLink(modifierClass) {
    if (navbarLinksWithoutLogo) {
        navbarLinksWithoutLogo.forEach(link => {
            link.classList.add(modifierClass);
        });
    }
}

function removeModifierClassFromNavbarLink(modifierClass) {
    if (navbarLinksWithoutLogo) {
        navbarLinksWithoutLogo.forEach(link => {
            if (link.classList.contains(modifierClass)) {
                link.classList.remove(modifierClass);
            }
        });
    }
}

function closeNavbarOverlayIfTargetMatchesCurrent(e) {
    if (!isNavbarTogglerChecked()) {
        return;
    }

    let { target } = e;
    let linkHrefAttribute = target.getAttribute("href");
    let windowPathname = adjustWindowPathname(window.location.pathname);

    console.log(`linkHrefAttribute: ${linkHrefAttribute}`);
    console.log(`windowPathname:    ${windowPathname}`);
    console.log(`location.pathname: ${window.location.pathname}`);

    let targetMatchesLandingAfterAdjustment =
        windowPathnameAdjustmentRequired(windowPathname)
        && CheckIfTargetMatchesCurrent(window.location.pathname, linkHrefAttribute);

    if (CheckIfTargetMatchesCurrent(windowPathname, linkHrefAttribute)
        || targetMatchesLandingAfterAdjustment) {
        navbarToggler.click();
    }
}

function CheckIfTargetMatchesCurrent(windowPathname, linkHrefAttribute) {
    return windowPathname.includes(linkHrefAttribute);
}

function windowPathnameAdjustmentRequired(windowPathname) {
    return windowPathname.includes(githubPagesRepo);
}

// Test for the URL scheme of GitHub Pages and normalise window path if necessary
function adjustWindowPathname(windowPathname) {
    if (windowPathnameAdjustmentRequired(windowPathname)) {
        windowPathname =
            windowPathname
                .replace(githubPagesRepo, '/');
    }

    return windowPathname;
}

function adjustThemeColor(color) {
    document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
}

// Complete all the animations so far, so that the to-be-animated elements won't get
// interfered by the previous animations (that otherwise might still be playing out)
function completeAllAnimations() {
    Object.values(timelines)
        .forEach(t => t.timeline.time(t.timeline.duration()));
}

// Complete each section animation, so that the to-be-animated elements won't get
// interfered by the previous animation (that otherwise might still be playing out)
function completeEachSectionAnimation() {
    Object.keys(timelines)
        .filter(key => !key.includes('header'))
        .forEach(key => timelines[key].timeline.time(timelines[key].timeline.duration()));
}

export {
    isNavbarTogglerChecked,
    unhideNavbarOverlayIfHidden,
    hideNavbarOverlayIfVisible,
    toggleNavbarTogglerDisability,
    hideheaderOnWindowLoad,
    unhideHeader,
    unhideContent,
    normaliseTrigger,
    normaliseServicesLink,
    deactivateLinks,
    reactivateLinks,
    setNavbarLinkModifierClass,
    addModifierClassToNavbarLink,
    removeModifierClassFromNavbarLink,
    closeNavbarOverlayIfTargetMatchesCurrent,
    adjustThemeColor,
    completeAllAnimations,
    completeEachSectionAnimation
};
