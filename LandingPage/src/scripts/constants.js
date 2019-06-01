// GitHub Pages URL scheme
const githubPagesRepo = 'it-services';

// Elements of the DOM
const body = document.body;
const navbar = document.querySelector('nav');
const header = document.querySelector('.header');
const headerOverlay = document.querySelector('.header__overlay');
const headerLogo = document.querySelector('.header__logo-wrapper');
const links = document.querySelectorAll('a[href]');
const navbarLinks =
    Array
        .from(navbar.querySelectorAll('a[href]'))
        // Remove clickable logo link from the navbarLinks collection
        .filter((link) => !link.className.includes('logo'));

// Modifier classes
const navbarLinkLandingClass = 'nav__link--landing';
const navbarLinkServicesClass = 'nav__link--services';
const navbarLinkStaffClass = 'nav__link--staff';
const navbarLinkContactClass = 'nav__link--contact';

export {
    githubPagesRepo,
    body,
    navbar,
    header,
    headerOverlay,
    headerLogo,
    links,
    navbarLinks,
    navbarLinkLandingClass,
    navbarLinkServicesClass,
    navbarLinkStaffClass,
    navbarLinkContactClass
};
