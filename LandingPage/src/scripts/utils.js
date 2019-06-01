import { header, links } from '../scripts/constants';

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

export {
    unhideHeader,
    unhideContent,
    deactivateLinks,
    reactivateLinks
};
