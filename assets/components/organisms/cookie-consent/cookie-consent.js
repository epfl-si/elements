/* globals jQuery */

let bannerElement
function cookieConsent(opt_visible) {
  if (bannerElement) {
    setVisibility(bannerElement, opt_visible)
  } else {
    window.cookieconsent.initialise(
      get_cookieconsent_config(),
      (popup) => {
        bannerElement = popup.element
        setVisibility(bannerElement, opt_visible)
      },
      (err) => console.error(err)
    )
    window.cookieconsent.initialise = (() => { })
  }
}

jQuery.fn.extend({ cookieConsent })
export default cookieConsent

function setVisibility(cookieBanner, visible) {
  if (visible === true) {
    jQuery(cookieBanner).show().removeClass("cc-invisible")
  } else if (visible === false) {
    jQuery(cookieBanner).hide().addClass("cc-invisible")
  }
}

function get_cookieconsent_config() {
  // Translation
  const cookieI18n = {
    en: {
      msg: 'When you access EPFL websites, we may set cookies on your '
        + 'devices and process personal data about you in accordance with '
        + 'our <a tabindex="0" class="cc-link" target="_blank" '
        + 'href="//go.epfl.ch/privacy-policy">privacy policy</a>. '
        + 'You can block cookies by using your browser settings.'
    },
    fr: {
      msg: 'Lorsque vous accédez aux sites web de l\'EPFL, nous pouvons '
        + 'installer des cookies sur vos appareils et traiter des données '
        + 'personnelles vous concernant conformément à notre '
        + '<a tabindex="0" class="cc-link" target="_blank" '
        + 'href="//go.epfl.ch/protection-des-donnees">'
        + 'politique de confidentialité</a>. Vous pouvez bloquer les '
        + 'cookies à l\'aide des paramètres de votre navigateur.'
    },
    de: {
      msg: 'Die Navigation auf dieser Seite verwendet Cookies zur '
        + 'Verbesserung Ihrer Benutzererfahrung und zur Durchführung von Besucherstatistiken.',
      link: 'Datenschutzerklärung lesen',
      href: '//go.epfl.ch/privacy-policy'
    }
  };
  // Retrieve language, default 'fr'
  const langAttribute = document.documentElement.lang;
  let lang = langAttribute.substring(0, 2);
  if (!cookieI18n[lang]) {
    lang = 'fr';
  }

  // Retrieve the domain
  // Don't work with google.co.uk for example
  let domain_name = 'epfl.ch';
  const hostame = window.location.hostname;
  if (hostame === 'localhost' || hostame === '127.0.0.1') {
    domain_name = hostame;
  } else {
    const hostParts = hostame.split('.').reverse();
    if (hostParts[0] !== undefined && hostParts[1] !== undefined) {
      domain_name = `${hostParts[1]}.${hostParts[0]}`;
    }
  }

  const config = {
    theme: 'classic',
    palette: {
      popup: {
        background: 'rgba(69, 69, 69, 0.96)'
      },
      button: {
        background: '#b51f1f'
      }
    },
    content: {
      message: cookieI18n[lang].msg,
      dismiss: 'OK',
    },
    showLink: false,
    cookie: {
      name: 'petitpois', // Chosen by a magical unicorn!
      domain: domain_name,
      autoAttach: false // attach it manually to the end, or SEO will crawl it before any content
    }
  }
  return config;
}
