import { TweenMax, TimelineMax, Power2, Power3, Power4, Expo } from "gsap/all";

import { navbarOverlay, navbarLinksWrapper, header, headerOverlay } from '../scripts/constants';
import { unhideHeader, toggleNavbarTogglerDisability } from '../scripts/utils';

function headerOutAnimation() {
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

function navbarOverlayInAnimation() {
    new TimelineMax()
        .from(navbarOverlay, 0.6, {
            autoAlpha: 0,
            y: "-20%",
            ease: Power4.easeOut
        })
        .from(navbarLinksWrapper, 1, {
            autoAlpha: 0,
            y: "-16%",
            ease: Power3.easeOut
        }, '-=0.36')
        .set([navbarOverlay, navbarLinksWrapper], {
            clearProps: "all"
        })
        .call(toggleNavbarTogglerDisability);
}

function landingEnterPromise(landing, resolve, isBarbaTriggering = true) {
    const rightColumn =
        document.querySelector('.landing-section-right');

    const rightColumnLeftText =
        document.querySelector('.landing-section-right__text-container-left');

    const bokeh =
        document.querySelector('.landing-section-left__image-overlay');

    let timelineDelay = (isBarbaTriggering) ? null : "+=0.48";

    new TimelineMax()
        .from(landing, 2.2, {
            opacity: 0,
            ease: Power4.easeInOut
        }, timelineDelay)
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

function servicesEnterPromise(resolve, isBarbaTriggering = true) {
    const cards =
        document.querySelectorAll('.services-section__card');

    let timelineDelay = (isBarbaTriggering) ? 0.62 : 0.86;

    new TimelineMax()
        .staggerFrom(cards, 1.4, {
            opacity: 0,
            y: "-20%",
            ease: Power4.easeOut,
            clearProps: "all",
            onComplete: resolve
        }, 0.3)
        .delay(timelineDelay);
}

function staffEnterPromise(staff, resolve, isBarbaTriggering = true) {
    const cardsContainer =
        document.querySelector('.staff-section__card-staff-container');

    const cards =
        document.querySelectorAll('.staff-section__card-staff-member-container');

    const title =
        document.querySelector('.staff-section__title');

    let timelineDelay = (isBarbaTriggering) ? 0.62 : 0.9;

    new TimelineMax()
        .from(staff, 4.86, {
            opacity: 0,
            ease: Power3.easeOut
        }, timelineDelay)
        .staggerFrom(cards, 1.5, {
            opacity: 0,
            y: "50%",
            ease: Expo.easeOut
        }, 0.3, "-=4.4")
        .from(title, 2, {
            opacity: 0,
            y: "80%",
            ease: Power4.easeOut,
            clearProps: "all",
            onComplete: resolve
        }, "-=2.62")
        .from(cardsContainer, 4, {
            boxShadow: "none",
            ease: Power3.easeInOut
        }, "-=2.2");
}

function contactEnterPromise(resolve, isBarbaTriggering = true) {
    const cards =
        document.querySelectorAll('.contact-section__card');

    const pricesCard = cards[0];
    const contactCard = cards[1];

    const cardsContainer =
        document.querySelector('.contact-section__card-container');

    const footer =
        document.querySelector('.contact-section__footer');

    let timelineDelay = (isBarbaTriggering) ? "+=0.66" : "+=1.22";

    new TimelineMax()
        .set(cardsContainer, {
            overflowY: "hidden"
        })
        .from(pricesCard, 1.7, {
            opacity: 0,
            y: "-20%",
            ease: Power3.easeOut,
        }, timelineDelay)
        .from(contactCard, 1.7, {
            opacity: 0,
            y: "20%",
            ease: Power3.easeOut,
            onComplete: resolve
        }, "-=1.7")
        .from(footer, 0.9, {
            opacity: 0,
            y: "100%",
            ease: Power3.easeOut
        }, "-=0.4")
        .set(cardsContainer, {
            clearProps: "all"
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

export {
    headerOutAnimation,
    navbarOverlayInAnimation,
    landingEnterPromise,
    servicesEnterPromise,
    staffEnterPromise,
    contactEnterPromise,
    containerOutAnimation,
    headerInAnimation
};
