import { TweenMax, TimelineMax, Power2, Power3, Power4, Expo } from "gsap/all";

import { navbarLogoWrapper, navbarOverlay, navbarLinksWithoutLogo, header, headerOverlay, isDesktop } from '../scripts/constants';
import { unhideHeader, toggleNavbarTogglerDisability, completeAllAnimations } from '../scripts/utils';

let timelines = {
    headerIn: {
        timeline: new TimelineMax()
    },
    headerOut: {
        timeline: new TimelineMax()
    },
    landing: {
        timeline: new TimelineMax()
    },
    services: {
        timeline: new TimelineMax()
    },
    staff: {
        timeline: new TimelineMax()
    },
    contact: {
        timeline: new TimelineMax()
    }
};

function headerOutAnimation() {
    timelines.headerOut.timeline = new TimelineMax()
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
    completeAllAnimations();

    new TimelineMax()
        .from(navbarOverlay, 1, {
            y: "-100%",
            ease: Power3.easeOut
        })
        .staggerFrom(navbarLinksWithoutLogo, 1.2, {
            autoAlpha: 0,
            y: "-68%",
            ease: Power4.easeOut
        }, 0.2, "-=0.5")
        .set([navbarOverlay, navbarLinksWithoutLogo], {
            clearProps: "all"
        })
        .call(toggleNavbarTogglerDisability);
}

function landingEnterPromise(landing, resolve, isBarbaTriggering = true) {
    if (isDesktop()) {
        const rightColumn =
            document.querySelector('.landing-section-right');

        const rightColumnLeftText =
            document.querySelector('.landing-section-right__text-container-left');

        const rightColumnDescriptionText =
            document.querySelector('.landing-section-right__text-description');

        const rightColumnRightText =
            document.querySelector('.landing-section-right__text-container-right');

        const rightColumnReadMoreContainer =
            document.querySelector('.landing-section-right__read-more-container');

        const bokeh =
            document.querySelector('.landing-section-left__image-overlay');

        let timelineDelay = (isBarbaTriggering) ? null : "+=0.48";

        timelines.landing.timeline = new TimelineMax({ onComplete: resolve })
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
            .addLabel("headerStart", "-=1")
            .from(rightColumnLeftText, 1.5, {
                opacity: 0,
                y: "-100%",
                ease: Power3.easeOut,
                clearProps: "all"
            }, "headerStart")
            .from(rightColumnRightText, 1.5, {
                opacity: 0,
                y: "100%",
                ease: Power4.easeOut,
                onComplete: resolve,
                clearProps: "all"
            }, "headerStart")
            .staggerFrom(navbarLinksWithoutLogo, 1.2, {
                opacity: 0,
                left: 80,
                ease: Power4.easeOut
            }, -0.2, "-=1")
            .addLabel("rightColumnText", "-=1")
            .from(rightColumnDescriptionText, 1.6, {
                opacity: 0,
                x: "-30%",
                ease: Power3.easeOut,
                clearProps: "all"
            }, "rightColumnText")
            .from(rightColumnReadMoreContainer, 1.6, {
                opacity: 0,
                x: "-30%",
                ease: Power3.easeOut,
                clearProps: "all"
            }, "rightColumnText")
            .from(navbarLogoWrapper, 2, {
                opacity: 0,
                x: 10,
                ease: Power2.easeOut
            }, "rightColumnText+=0.4")
            .from(bokeh, 4, {
                opacity: 0,
                left: 300,
                ease: Expo.easeOut,
                clearProps: "all"
            }, "rightColumnText");
    } else {
        const mobileText =
            document.querySelector('.landing-section-right__text-container-mobile');

        const mobileDescriptionText =
            document.querySelector('.landing-section-right__text-description-wrapper');

        let mobileTimelineDelay = (isBarbaTriggering) ? "+=0.6" : "+=0.9";

        timelines.landing.timeline = new TimelineMax({ onComplete: resolve })
            .from(mobileText, 1.4, {
                opacity: 0,
                y: "-140%",
                ease: Power3.easeOut,
                clearProps: "all"
            }, mobileTimelineDelay)
            .from(mobileDescriptionText, 1.1, {
                opacity: 0,
                y: "100%",
                ease: Power4.easeOut,
                clearProps: "all"
            }, "-=0.7");
    }
}

function servicesEnterPromise(resolve, isBarbaTriggering = true) {
    const cards =
        document.querySelectorAll('.services-section__card');

    let timelineDelay = (isBarbaTriggering) ? "+=0.62" : "+=0.86";

    let timeline = new TimelineMax({ onComplete: resolve })
        .staggerFrom(cards, 1.8, {
            opacity: 0,
            y: "-34%",
            ease: Power4.easeOut,
            onComplete: resolve,
            clearProps: "all"
        }, 0.38, timelineDelay)
        .addLabel("navbarStart", "-=1.16")
        .staggerFrom(navbarLinksWithoutLogo, 1.4, {
            opacity: 0,
            y: "-160%",
            ease: Power4.easeOut,
            onComplete: resolve
        }, 0.28, "navbarStart");

    if (isDesktop()) {
        timeline.from(navbarLogoWrapper, 2.4, {
            opacity: 0,
            y: "-60%",
            ease: Power4.easeOut,
            onComplete: resolve
        }, "navbarStart+=0.82");
    }

    timelines.services.timeline = timeline;
}

function staffEnterPromise(staff, resolve, isBarbaTriggering = true) {
    const cardsContainer =
        document.querySelector('.staff-section__card-staff-container');

    const cards =
        document.querySelectorAll('.staff-section__card-staff-member-container');

    const title =
        document.querySelector('.staff-section__title');

    let isOnMobile = document.documentElement.clientWidth <= 600;
    let staggerOrder = isOnMobile ? -0.3 : 0.3;

    let timelineDelay = (isBarbaTriggering) ? 0.62 : 0.9;

    let timeline = new TimelineMax()
        .from(staff, 4.86, {
            opacity: 0,
            ease: Power3.easeOut,
            onComplete: resolve
        }, timelineDelay)
        .staggerFrom(cards, 1.5, {
            opacity: 0,
            y: "50%",
            ease: Expo.easeOut
        }, staggerOrder, "-=4.4")
        .from(title, 2, {
            opacity: 0,
            y: "80%",
            ease: Power4.easeOut,
            onComplete: resolve,
            clearProps: "all"
        }, "-=2.62")
        .addLabel("titleStart", "-=1.8")
        .from(cardsContainer, 4, {
            boxShadow: "none",
            ease: Power3.easeInOut,
            onComplete: resolve
        }, "-=2.2")
        .staggerFrom(navbarLinksWithoutLogo, 1.4, {
            opacity: 0,
            y: "40%",
            ease: Power4.easeOut,
            onComplete: resolve
        }, 0.24, "titleStart");

    if (isDesktop()) {
        timeline.from(navbarLogoWrapper, 2, {
            opacity: 0,
            y: 16,
            ease: Power4.easeOut
        }, "titleStart+=0.8");
    }

    timelines.staff.timeline = timeline;
}

function contactEnterPromise(resolve, isBarbaTriggering = true) {
    const cards =
        document.querySelectorAll('.contact-section__card');

    const pricesCard = cards[0];
    const contactCard = cards[1];

    const cardsContainer =
        document.querySelector('.contact-section__card-container');

    const icons =
        document.querySelectorAll('.contact-section__icon');

    const footer =
        document.querySelector('.contact-section__footer');

    let timelineDelay = (isBarbaTriggering) ? "+=0.66" : "+=1.22";

    let timeline = new TimelineMax({ onComplete: resolve })
        .set(cardsContainer, {
            overflowY: "hidden"
        })
        .from(pricesCard, 1.7, {
            opacity: 0,
            y: isDesktop() ? "-20%" : "-26%",
            ease: Power3.easeOut
        }, timelineDelay)
        .from(contactCard, isDesktop() ? 1.7 : 1.8, {
            opacity: 0,
            y: isDesktop() ? "20%" : "-32%",
            ease: isDesktop() ? Power3.easeOut : Power2.easeOut
        }, isDesktop() ? "-=1.7" : "-=1.44")
        .from(footer, 0.9, {
            opacity: 0,
            y: "100%",
            ease: Power3.easeOut,
            onComplete: resolve
        }, "-=0.4")
        .set(cardsContainer, {
            clearProps: "all"
        })
        .addLabel("navbarStart", "-=1.22")
        .from(icons, 2.6, {
            opacity: 0,
            ease: Expo.easeOut,
            clearProps: "all"
        }, "navbarStart+=1")
        .staggerFrom(navbarLinksWithoutLogo, 1.46, {
            opacity: 0,
            y: "-160%",
            ease: Power4.easeOut,
            onComplete: resolve
        }, 0.3, "navbarStart")
        .staggerTo(navbarLinksWithoutLogo, 1.2, {
            color: "#fff",
            textShadow: "0px 0px 0px #fff",
            ease: Expo.easeOut,
            clearProps: "color,textShadow"
        }, 0.34, "navbarStart+=2");

    if (isDesktop()) {
        timeline.from(navbarLogoWrapper, 2.4, {
            opacity: 0,
            y: "-60%",
            ease: Power4.easeOut
        }, "navbarStart+=1.12");
    }

    timelines.contact.timeline = timeline;
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

        timelines.headerIn.timeline = new TimelineMax()
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
    headerInAnimation,
    timelines
};
