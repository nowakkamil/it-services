// GitHub Pages URL scheme
const githubPagesHostname = 'nowakkamil.github.io';
const githubPagesRepo = '/it-services/';

// Elements of the DOM
const body = document.body;
const navbar = document.querySelector('nav');
const navbarLogoWrapper = document.querySelector('.nav__logo-wrapper');
const navbarToggler = document.querySelector('.nav__toggler');
const navbarOverlay = document.querySelector('.nav__overlay');
const navbarLinksWrapper = document.querySelector('.nav__link-wrapper-container');
const header = document.querySelector('.header');
const headerOverlay = document.querySelector('.header__overlay');
const headerLogo = document.querySelector('.header__logo-wrapper');
const links = document.querySelectorAll('a[href]');
const linkLanding = document.querySelector('#link-landing');
const linkServices = document.querySelector('#link-services');
const linkServicesFromLanding = document.querySelector('.landing-section-right__link-services');
const linkStaff = document.querySelector('#link-staff');
const linkContact = document.querySelector('#link-contact');
const sectionLinks = [linkLanding, linkServices, linkStaff, linkContact];
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
const navbarLinkOverlayClass = 'nav__link--overlay';

// Client properties
const isDesktop = () => document.documentElement.clientWidth > 600;

export {
    githubPagesHostname,
    githubPagesRepo,
    body,
    navbar,
    navbarLogoWrapper,
    navbarToggler,
    navbarOverlay,
    navbarLinksWrapper,
    header,
    headerOverlay,
    headerLogo,
    links,
    linkLanding,
    linkServices,
    linkServicesFromLanding,
    linkStaff,
    linkContact,
    sectionLinks,
    navbarLinks,
    navbarLinkLandingClass,
    navbarLinkServicesClass,
    navbarLinkStaffClass,
    navbarLinkContactClass,
    navbarLinkOverlayClass,
    isDesktop
};
