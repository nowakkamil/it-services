// GitHub Pages URL scheme
const githubPagesRepo = 'it-services';

// Elements of the DOM
const body = document.body;
const navbar = document.querySelector('nav');
const header = document.querySelector('.header');
const headerOverlay = document.querySelector('.header__overlay');
const headerLogo = document.querySelector('.header__logo-wrapper');
const links = document.querySelectorAll('a[href]');
const navbarLinks = navbar.querySelectorAll('a[href]');

// Custom classes
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
    navbarLinkServicesClass,
    navbarLinkStaffClass,
    navbarLinkContactClass
};
