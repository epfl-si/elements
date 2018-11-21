/* globals $ */

// Show it when we are in Toolbox
document.addEventListener('ToolboxReady', () => {
    // Open it in the cookie consent page only for toolbox
    if (window.location.href.includes('cookie-consent')) {
        if (!window.cookie_consent_popup) {
          window.cookie_consent_popup = cookieconsent(get_cookieconsent_config());
        }
        window.cookie_consent_popup.open();
    } else {
        // Force close if we are not on the correct page
        if (window.cookie_consent_popup) {
            window.cookie_consent_popup.close();
        }
    }
});

function get_cookieconsent_config() {
    // Translation
    var cookieI18n = {
        en: {
        msg: 'By continuing your browsing on this site, you agree to the use ' +
            'of cookies to improve your user experience and to make statistics ' +
            'of visits.',
        link: 'Read the legal notice',
        href: '//mediacom.epfl.ch/disclaimer'
        },
        fr: {
        msg: 'En poursuivant votre navigation sur ce site, vous acceptez ' +
            'l\'utilisation de cookies pour am&eacute;liorer votre ' +
            'exp&eacute;rience utilisateur et r&eacute;aliser des statistiques ' +
            'de visites.',
        link: 'Lire les mentions l&eacute;gales',
        href: '//mediacom.epfl.ch/mentions-legales'
        }
    };
    // Retrieve language, default 'fr'
    var langAttribute = document.documentElement.lang;
    var lang = langAttribute.substring(0, 2);
    if (! cookieI18n[lang]) {
        lang = 'fr';
    }

    // Retrieve the domain
    // Don't work with google.co.uk for example
    var domain_name = 'epfl.ch';
    var hostame = window.location.hostname;
    if ( hostame === 'localhost' || hostame === '127.0.0.1') {
        domain_name = hostame;
    } else {
        var hostParts = hostame.split('.').reverse();
        if (hostParts[0] !== undefined && hostParts[1] !== undefined) {
            domain_name = hostParts[1] + '.' + hostParts[0];
        }
    }

    var config = {
        "theme": "classic",
        "palette": {
        "popup": {
            "background": "rgba(69, 69, 69, 0.96)"
        },
        "button": {
            "background": "#e2001a"
        }
        },
        "content": {
        "message": cookieI18n[lang].msg,
        "dismiss": "OK",
        "link": cookieI18n[lang].link,
        "href": cookieI18n[lang].href
        },
        "cookie": {
        "name": "petitpois", // Chosen by a magical unicorn!
        "domain": domain_name
        }
    }
    return config;
}

const cookieconsent = (cookieconsent_config) => {
    var p;
    // Init cookieconsent
    window.cookieconsent.initialise(cookieconsent_config, function (popup) {
        p = popup;
      }, function (err) {
        console.error(err);
      }
    );
    return p;
};

export default cookieconsent;
export {get_cookieconsent_config};
