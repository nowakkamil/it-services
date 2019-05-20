import '../styles/_normalize.scss';
import '../styles/_variables.scss';
import '../styles/_vertical-rhythm.scss';
import '../styles/index.scss';

const navbar = document.getElementsByTagName('nav')[0];

// Reset the style if the JavaScript is enabled
navbar.classList.remove('nav--no-js');
