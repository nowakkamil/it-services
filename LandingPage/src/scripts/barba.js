import barba from '@barba/core';

import { githubPagesRepo, navbarLinkLandingClass, navbarLinkServicesClass, navbarLinkStaffClass, navbarLinkContactClass } from './constants';
import { landingEnterPromise, servicesEnterPromise, staffEnterPromise, contactEnterPromise, containerOutAnimation, headerInAnimation } from '../scripts/gsap';
import { unhideContent, hideNavbarOverlayIfVisible, normaliseTrigger, deactivateLinks, reactivateLinks, setNavbarLinkModifierClass } from '../scripts/utils';

function barbaInit() {
    barba.hooks.leave(() => deactivateLinks());

    barba.hooks.afterLeave(() => headerInAnimation());

    barba.hooks.beforeEnter(() => hideNavbarOverlayIfVisible());

    barba.hooks.enter(() => unhideContent());

    barba.hooks.afterEnter(() => reactivateLinks());

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

                beforeEnter: () => setNavbarLinkModifierClass(navbarLinkLandingClass),

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

                beforeEnter: () => setNavbarLinkModifierClass(navbarLinkServicesClass),

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

                beforeEnter: () => setNavbarLinkModifierClass(navbarLinkStaffClass),

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

                beforeEnter: () => setNavbarLinkModifierClass(navbarLinkContactClass),

                // Return a promise
                enter: () => contactEnterAnimation()
            }
        ],
        debug: true,
        logLevel: 4,
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
    barbaInit
};
