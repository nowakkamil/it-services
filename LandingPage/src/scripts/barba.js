import barba from '@barba/core';

import {
    githubPagesRepo,
    navbarLinkLandingClass,
    navbarLinkServicesClass,
    navbarLinkStaffClass,
    navbarLinkContactClass
} from './constants';
import {
    landingEnterPromise,
    servicesEnterPromise,
    staffEnterPromise,
    contactEnterPromise,
    containerOutAnimation,
    headerInAnimation
} from '../scripts/gsap';
import {
    unhideContent,
    hideNavbarOverlayIfVisible,
    normaliseTrigger,
    normaliseServicesLink,
    deactivateLinks,
    reactivateLinks,
    setNavbarLinkModifierClass,
    adjustThemeColor,
    completeEachSectionAnimation,
    deactivateOnWheel,
    activateOnWheel,
    deactivateOnSwipe,
    activateOnSwipe,
    deactivateScrollIndicator
} from '../scripts/utils';
import colors from './../styles/_variables.scss';

function barbaInit() {
    barba.hooks.before(() => deactivateLinks());

    barba.hooks.beforeLeave(() => {
        deactivateOnWheel();
        deactivateOnSwipe();
        deactivateScrollIndicator();
    });

    barba.hooks.afterLeave(() => headerInAnimation());

    barba.hooks.beforeEnter(() => {
        hideNavbarOverlayIfVisible();
        completeEachSectionAnimation();
    });

    barba.hooks.enter(() => unhideContent());

    barba.hooks.after(() => {
        activateOnWheel();
        activateOnSwipe();
        reactivateLinks();
    });

    barba.init({
        transitions: [
            {
                name: 'many-to-landing',

                custom: ({ trigger }) => {
                    let normalisedTrigger = normaliseTrigger(trigger);

                    return normalisedTrigger === "/" || normalisedTrigger === githubPagesRepo;
                },

                // This does not return anything and uses the 'this.async()' pattern
                leave({ current }) {
                    containerOutAnimation(current.container, this.async());
                },

                beforeEnter: () => {
                    setNavbarLinkModifierClass(navbarLinkLandingClass);
                    normaliseServicesLink();
                    adjustThemeColor(colors.mineShaftDarker);
                },

                // Return a promise
                enter: ({ next }) => landingEnterAnimation(next.container)
            },
            {
                name: 'many-to-services',

                custom: ({ trigger }) => {
                    let normalisedTrigger = normaliseTrigger(trigger);

                    return normalisedTrigger.includes("services");
                },

                // This does not return anything and uses the 'this.async()' pattern
                leave({ current }) {
                    containerOutAnimation(current.container, this.async());
                },

                beforeEnter: () => {
                    setNavbarLinkModifierClass(navbarLinkServicesClass);
                    adjustThemeColor(colors.brightSun);
                },

                // Return a promise
                enter: () => servicesEnterAnimation()
            },
            {
                name: 'many-to-staff',

                custom: ({ trigger }) => {
                    let normalisedTrigger = normaliseTrigger(trigger);

                    return normalisedTrigger.includes("staff");
                },

                // This does not return anything and uses the 'this.async()' pattern
                leave({ current }) {
                    containerOutAnimation(current.container, this.async());
                },

                beforeEnter: () => {
                    setNavbarLinkModifierClass(navbarLinkStaffClass);
                    adjustThemeColor(colors.mineShaft);
                },

                // Return a promise
                enter: ({ next }) => staffEnterAnimation(next.container)
            },
            {
                name: 'many-to-contact',

                custom: ({ trigger }) => {
                    let normalisedTrigger = normaliseTrigger(trigger);

                    return normalisedTrigger.includes("contact");
                },

                // This does not return anything and uses the 'this.async()' pattern
                leave({ current }) {
                    containerOutAnimation(current.container, this.async());
                },

                beforeEnter: () => {
                    setNavbarLinkModifierClass(navbarLinkContactClass);
                    adjustThemeColor(colors.black);
                },

                // Return a promise
                enter: () => contactEnterAnimation()
            }
        ]
        // Uncomment the following two lines to enable logging
        // debug: true,
        // logLevel: 4,
    });
}

function landingEnterAnimation(element) {
    return new Promise(resolve => landingEnterPromise(element, resolve));
}

function servicesEnterAnimation() {
    return new Promise(resolve => servicesEnterPromise(resolve));
}

function staffEnterAnimation(element) {
    return new Promise(resolve => staffEnterPromise(element, resolve));
}

function contactEnterAnimation() {
    return new Promise(resolve => contactEnterPromise(resolve));
}

export {
    barbaInit,
    landingEnterAnimation,
    servicesEnterAnimation,
    staffEnterAnimation,
    contactEnterAnimation
};
