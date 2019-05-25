import '../styles/_normalize.scss';
import '../styles/_variables.scss';
import '../styles/_vertical-rhythm.scss';
import '../styles/index.scss';

const navbar = document.getElementsByTagName('nav')[0];

// Reset the style if the JavaScript is enabled
navbar.classList.remove('nav--no-js');

// Initialise services section
(() => {
    let request = new XMLHttpRequest();

    request.open('GET', '/services.html', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let response = request.responseText;

            document.querySelector('#services').innerHTML = response;
        }
    };

    request.send();
})();

// Initialise staff section
(() => {
    let request = new XMLHttpRequest();

    request.open('GET', '/staff.html', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let response = request.responseText;

            document.querySelector('#staff').innerHTML = response;
        }
    };

    request.send();
})();

// Initialise contact section
(() => {
    let request = new XMLHttpRequest();

    request.open('GET', '/contact.html', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let response = request.responseText;

            document.querySelector('#contact').innerHTML = response;
        }
    };

    request.send();
})();
