import { githubPagesRepo, navbarToggler, navbarOverlay, header, links, linkServicesFromLanding, navbarLinks, navbarLinkOverlayClass } from '../scripts/constants';
import { headerOutAnimation, navbarOverlayInAnimation } from '../scripts/gsap';

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
    if (navbarLinks) {
        navbarLinks.forEach(link => {
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
    if (navbarLinks) {
        navbarLinks.forEach(link => {
            link.classList.add(modifierClass);
        });
    }
}

function removeModifierClassFromNavbarLink(modifierClass) {
    if (navbarLinks) {
        navbarLinks.forEach(link => {
            if (link.classList.contains(modifierClass)) {
                link.classList.remove(modifierClass);
            }
        });
    }
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
    removeModifierClassFromNavbarLink
};
