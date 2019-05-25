import '../styles/_normalize.scss';
import '../styles/_variables.scss';
import '../styles/_vertical-rhythm.scss';
import '../styles/index.scss';
import barba from '@barba/core';
import { TweenMax } from "gsap/all";

const navbar = document.getElementsByTagName('nav')[0];
const links = document.querySelectorAll('a[href]');

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
    for (var index = 0; index < links.length; index++) {
        links[index].addEventListener('click', disableCurrentPageReload);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    barba.init({
        transitions: [
            {
                // Default value
                sync: false,

                // This does not return anything and uses the 'this.async()' pattern
                leave({ current }) {
                    containerOutAnimation(current.container, this.async());
                },

                // Return a promise
                enter: ({ next }) => containerInAnimation(next.container)
            }
        ]
    });
});

// The 'async' callback is passed
function containerOutAnimation(element, done) {
    // Prevent the links from being active during the transition effect
    if (links) {
        for (let index = 0; index < links.length; index++) {
            links[index].style.pointerEvents = "none";
        }
    }

    TweenMax.to(element, 1, { height: 0, y: "-200", autoAlpha: 0, onComplete: done });
}

// Return a promise
function containerInAnimation(element) {
    return new Promise(resolve => {
        const services = document.querySelector('#services');
        const staff = document.querySelector('#staff');
        const contact = document.querySelector('#contact');
        const video = document.querySelector('#video');

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

        // Reactivate the links after the transition has taken place
        if (links) {
            setTimeout(() => {
                for (let index = 0; index < links.length; index++) {
                    links[index].style.pointerEvents = "auto";
                }
            }, 1000);
        }

        TweenMax.fromTo(element, 1, { opacity: 0 }, { opacity: 1, onComplete: resolve });
    });
}
