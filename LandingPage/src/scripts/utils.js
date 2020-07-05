import { githubPagesRepo, navbarToggler, navbarOverlay, header, scrollIndicator, links, linkServicesFromLanding, navbarLinksWithoutLogo, navbarLinkOverlayClass, sectionLinks, isDesktop } from '../scripts/constants';
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
    let windowPathnameAdjustmentRequired = checkIfWindowPathnameAdjustmentRequired(window.location.pathname);
    let windowPathname = windowPathnameAdjustmentRequired
        ? adjustWindowPathname(window.location.pathname)
        : window.location.pathname;

    let targetMatchesLandingAfterAdjustment =
        windowPathnameAdjustmentRequired
        && checkIfTargetMatchesCurrent(window.location.pathname, linkHrefAttribute);

    if (checkIfTargetMatchesCurrent(windowPathname, linkHrefAttribute)
        || targetMatchesLandingAfterAdjustment) {
        navbarToggler.click();
    }
}

function checkIfTargetMatchesCurrent(windowPathname, linkHrefAttribute) {
    return windowPathname.includes(linkHrefAttribute);
}

function checkIfWindowPathnameAdjustmentRequired(windowPathname) {
    return windowPathname.includes(githubPagesRepo);
}

// Test for the URL scheme of GitHub Pages and normalise window path if necessary
function adjustWindowPathname(windowPathname) {
    return windowPathname.replace(githubPagesRepo, '/');
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

function getSubstringAfterLastHyphen(input) {
    return input.split('-').pop();
}

function redirectToAppropriateSection(delta, threshold) {
    let sectionElement = document.querySelector('section');
    let sectionName = getSubstringAfterLastHyphen(sectionElement.id);
    let linkIndex = sectionLinks.findIndex(link => getSubstringAfterLastHyphen(link.id) === sectionName);

    if (delta < -threshold) {
        if (linkIndex === 0) {
            linkIndex = sectionLinks.length - 1;
        } else {
            --linkIndex;
        }
    } else if (delta > threshold) {
        if (linkIndex === sectionLinks.length - 1) {
            linkIndex = 0;
        } else {
            ++linkIndex;
        }
    }

    sectionLinks[linkIndex].click();
}

function isElementScrollable(element, delta) {
    if (!element) {
        return false;
    }

    let difference = element.scrollHeight - element.clientHeight;

    let isScrollPositionOnTopAndPositiveDelta = delta > 0
        && 0 === element.scrollTop;
    let isScrollPositionOnBottomAndNegativeDelta = delta < 0
        && element.scrollTop === difference;
    let isScrollPositionInRange = 0 < element.scrollTop
        && element.scrollTop < difference;

    return isScrollPositionOnTopAndPositiveDelta
        || isScrollPositionOnBottomAndNegativeDelta
        || isScrollPositionInRange;
}

function isScrollable(delta) {
    let servicesSectionCardContainer = document.querySelector('.services-section__card-container');
    let contactSectionCardContainer = document.querySelector('.contact-section__card-container');
    let elements = [servicesSectionCardContainer, contactSectionCardContainer];

    if (elements.every(e => !e)) {
        return false;
    }

    return elements.some(e => isElementScrollable(e, delta));
}

function handleWindowOnWheel(e) {
    let deltaThreshold = 50;

    if (Math.abs(e.deltaY) <= deltaThreshold) {
        return;
    }

    if (!isDesktop() && isScrollable(e.deltaY)) {
        return;
    }

    redirectToAppropriateSection(e.deltaY, deltaThreshold);
}

// This variable is used to handle the swipe movement and shared
// between 'touchstart' and 'touchmove' event handlers
var yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!yDown) {
        return;
    }

    let yUp = evt.touches[0].clientY;
    let yDiff = yDown - yUp;
    let deltaThreshold = 100;

    if (Math.abs(yDiff) <= deltaThreshold) {
        return;
    }

    if (isScrollable(yDiff)) {
        return;
    }

    redirectToAppropriateSection(yDiff, deltaThreshold);

    yDown = null;
}

function deactivateOnWheel() {
    window.onwheel = null;
}

function deactivateOnSwipe() {
    window.removeEventListener('touchstart', handleTouchStart, false);
    window.removeEventListener('touchmove', handleTouchMove, false);
}

function activateOnWheel() {
    window.onwheel = handleWindowOnWheel;
}

function activateOnSwipe() {
    window.addEventListener('touchstart', handleTouchStart, false);
    window.addEventListener('touchmove', handleTouchMove, false);
}

function activateScrollIndicator() {
    scrollIndicator.style.opacity = "1";
    scrollIndicator.style.visibility = "visible";
    window.addEventListener('click', deactivateScrollIndicator);
}

function deactivateScrollIndicator() {
    scrollIndicator.style.opacity = "0";
    setTimeout(() => scrollIndicator.style = null, 1000);
    window.removeEventListener('click', deactivateScrollIndicator);
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
    completeEachSectionAnimation,
    deactivateOnWheel,
    activateOnWheel,
    deactivateOnSwipe,
    activateOnSwipe,
    activateScrollIndicator,
    deactivateScrollIndicator
};
