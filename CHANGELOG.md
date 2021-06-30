# CHANGELOG

*2.26.1* (2021-06-30)
- Fix problematic dependencies

*2.26.0* (2021-06-30)
- Add 'study plan: course' page template #508

*2.25.0* (2021-06-17)
- Dependency overhaul - 0 critical, 6 high vulnerabilities found by `yarn audit` (compared to 361 high and 2 critical)
- No functional changes

*2.24.0* (2021-06-09)
- Add margin to category breadcrumb #515

*2.23.0* (2021-04-14)
- Small german + footer updates #502
- Allow overflow:visible on the dropdown component #504
- Add "all events" link underneath a list of events #493
- Update "study plan" templates #506
- Update some packages (y18n and elliptic)

*2.22.1* (2021-04-12)
- Fix gallery nav being unresponsive the first time loaded, by rewriting the JS #505

*2.22.0* (2021-04-08)
- Add DE translation for CookieConsent
- Revert and set flickity to version to 2.2.1 to fix strange dev behavior

*2.21.0* (2021-03-24)
- Update URLs for footer and header #501
- Fix social icons having the wrong url  6c714a5
- Update url for twitter 6c714a5
- Set language from GE to DE #500
- Add page template for Study plan #499

*2.20.0* (2021-03-10)
- Improve study plan #495
- Fix rangeslider check missing aae43fb

*2.19.0* (2021-03-03)
- Fix icon position for flickity buttons (fullscreen and center) a665280
- Improve display of 'nav lang' and 'nav toggle' buttons #497

*2.19.0* (2021-02-24)
- Fix custom range input for non-firefox browsers #494
- Update campus names in footer b6f6b72

*2.18.4* (2021-02-02)
- Remove "overflow: hidden" from .header-light-content on small screens #492

*2.18.4* (2021-01-20)
- Fix position of the icon for the navlang on multiple languages #491

*2.18.3* (2021-01-13)
- Fix icon position inisde navlang #489

*2.18.2* (2020-12-16)
- Fix error when there is no range in the DOM

*2.18.1* (2020-12-16)
- Set a dynamic nutriscore for restauration

*2.18.0* (2020-12-15)
- Add german language for header and footer
- Add slider
- Rework the organism 'restauration'

*2.17.2* (2020-12-09)
- Add link to legal footer

*2.17.1* (2020-11-25)
- Fix icons position #483

*2.17.0* (2020-11-18)
- Add posts navigation to the blog detail #480 #481
- Fix contact columns alignment #478
- Fix browse button in async mode #477

*2.16.1* (2020-10-13)
- Fix loading jQuery in a non-http server
- Fix contact list data
- Improve contacts column data

*2.16.0* (2020-10-07)
  - Add FAQ organism #473
  - Remove spacing between full containers with coloured background #475
  - Use googleapis instead of code.jquery for fetching jquery lib  

*2.15.0* (2020-09-03)
  - Add project-list #469

*2.14.3* (2020-08-26)
  - Fix carousel bugs #468

*2.14.2* (2020-08-19)
  - Differents fixes for Boostrap 

*2.14.1* (2020-08-12)
  - Fix the original select list being visible on multiple select atom

*2.14.0* (2020-08-11)
  - Update versions, Bootstrap, Jquery, ... #454

*2.13.0* (2020-08-05)
  - Add the carousel feature #462

*2.12.0* (2020-07-28)
  - Use lighter gray for separation lines #464
  - Add border around the whole link card #463

*2.11.0* (2020-06-25)
  - Fix header shrinking in Safari #461
  - Add login link (atom) #460

*2.10.0* (2020-06-17)
  - Make the footer stick to the bottom of the page #455
  - Fix display of fullscreen gallery #457
  - Update html for publication #459
  - Change support destination in doc
  - Remove package-lock.json #456

*2.9.0* (2020-05-06)
  - Improve mini cards display #453
  - Fix drawer animation #452

*2.8.0* (2020-04-15)
  - Allow multiple memento sliders per page #449

*2.7.2* (2020-04-07)
  - Remove unused Open font loading #447
  - Fix visual identity link #446

*2.7.1* (2020-03-25)
  - Set background color to gray for fullwidth teaser horizontal #442
  - Fix name and paths in site webmanifest #443

*2.7.0* (2020-03-11)
  - ✨ New implementations
    - Add Feather icons #424
  - 🛠 Fixes & other
    - Fix height of nav-main #412
    - Fix bullet alignment #408
    - Fix typo in docs #423
    - Fix layout with drawer open and header light #405
    - Fix datepicker selected day #402

*2.6.0* (2020-03-11)
  - ✨ New implementations
    - Mini-cards (#440)
  - 🛠 Fixes & other
    - Improve gallery (#439)
    - Improve search result teasers (#441)

*2.5.1* (2020-02-12)
  - 🛠 Fixes & other
    - Remove link from teaser block and add it only on title and image (#434)
    - Feature/people mobile search (#438)
    - Move repository from epfl-idevelop to epfl-si

*2.5.0* (2020-02-11)
  - ✨ New implementations
    - Back to top on pages (#436)
    - Add map to footer
  - 🛠 Fixes & other
    - Fix an occasional display bug of the card deck on smartphones (#433)
    - Partial collapse: rotate arrow when the element is "uncollapsed" (#435)

*2.4.1* (2020-01-22)
  - 🛠 Fixes & other
    - Lateral margins on hero content (#432)
    - Add lateral margins to the content on small devices
    - Add spacing between content and image on small devices
    - Update title and links for footer

*2.4.0* (2020-01-06)
  - ✨ New implementations
    - People detail page (#430)
  - 🛠 Fixes & other
    - Move padding from 'table-boxed' class to 'table' class  (#431)

*2.3.1* (2019-12-13)
  - 🛠 Fixes & other
    - Update markup according to WordPress standards (#429)

*2.3.0* (2019-12-10)
  - ✨ New implementations
    - Blog pages design (#425)

*2.2.1* (2019-11-13)
  - 🛠 Fixes & other
    - Fix multiple select image (#401)

*2.2.0* (2019-10-30)
  - 🛠 Fixes & other
    - Add nofollow to some external links in the footer (#410)
    - Improve text size and space (#415)
    - Evolve some links in footer
    - Fixes for styleguide presentation:
      - Fix styleint for study plan (#404)
      - Fix social icons missing (#407)
      - Fix link to cover from popover(#409)
      - Fix missing translation in header (#416)

*2.1.0* (2019-07-03)
  - 🛠 Fixes & other
    - Fix lateral scroll issue (#394)
    - Fix display of social media feeds for smaller screens (#394)
    - Add overflow to Hero (#395)
    - Apply min-height property only for screens larger or equal to 768 px (#396)
    - Update footer and cookie consent links

*2.0.6* (2019-05-28)
  - 🛠 Fixes & other
    - Fix for the header light (#392)

*2.0.5* (2019-05-28)
  - ✨ New implementations
    - Improve the display of search and language selection for small screen devices

*2.0.4* (2019-05-13)
  - 🛠 Fixes & other
    - Set a generic name for theme light top menu (#387)

*2.0.3* (2019-05-08)
  - 🛠 Fixes & other
    - Fix breadcrumb x-scroll overflow (#383)
    - Fix title for study plan (#383)
    - Fix doc on font (#385)
    - Update dependancies

*2.0.2* (2019-04-23)
  - 🛠 Fixes & other
    - Fix breadcrumb folding (#379)

*2.0.1* (2019-04-04)
  - 🛠 Fixes & other
    - Add speaker to event content-type
    - Add some missing À
    - Fix viewport jumping when clicking on collapse (#374)
    - Fix doc for collapse (Thanks ponsfrilus)

*2.0.0* (2019-03-18)
  - ✨ New implementations
    - New logo, new colors!
  - 🛠 Fixes & other
    - Fix missing label for IC in the footer

*1.3.9* (2019-03-07)
  - ✨ New implementations
    - Add modal
  - 🛠 Fixes & other
    - Update header links

*1.3.8* (2018-12-18)
  - 🛠 Fixes & other
    - fix lists multiline alignment
    - fix manifest favicons
    - update manifest

*1.3.7* (2018-12-18)
  - 🛠 Fixes & other
    - update footer links
    - update cookie consent link
    - align datepicker
    - remove padding
    - fix mobile fancy datepicker behaviour
    - lists spacing and padding
    - fix duo card link
    - fix header light mobile
    - fix fullwidth teaser categories style on mobile
    - fix list-group
    - document header current menu item
    - fix menu and dropdown active state + doc
    - fix favicon
    - fix footer alignment

*1.3.6* (2018-12-10)
  - 🛠 Fixes & other
    - Move cookie consent window to the end of the page
    - Fix z-index for cookie-consent
    - Fix linkedin icon
    - Change french typo from E to É
    - Move urls from www2018.epfl.ch to www.epfl.ch

*1.3.5* (2018-11-29)
  - 🛠 Fixes & other
    - Fix youtube in social icon
    - Fix anchor javascript that were throwing error in styleguide

*1.3.4* (2018-11-21)
  - ✨ New implementations
    - Set the header and the footer in french and english version
    - Update the footer to have the correct URLs
    - Rework design on contact, to show in a multiple column style

  - 🛠 Fixes & other
    - Google analytics doc had a wrong ID
    - Fix the simple navigation being broken with 1.3.1
    - Remove the planet icon on all dropdown for language switcher
    - Fix cookie consent popup being triggred on every page

*1.3.3* (2018-10-22)
  - ✨ New implementations
    - Implement contact-list

*1.3.2* (2018-10-18)
  - 🛠 Fixes & other
    - hotfix z-index ordering

*1.3.1* (2018-10-18)
  - ✨ New implementations
    - new language switcher for 3+ languages (see atoms/nav-lang)
    - Add a howto for google analytics
    - implement cookie consent popup
    - add popover version on hero component

  - 🛠 Fixes & other
    - center images that are not wide enough for the grid column
    - stop too wide components to widen the text column
    - add favicon and theme colors
    - make anchor links work in styleguide
    - reset zindex management
    - enhance header light to display logo and long titles

*1.3.0* (2018-09-10)
  - ⚠️ breaking markup changes
      - **Search** now search and search mobile are different html tag to include in your header. desktop search has been taken out of the menu to ease integration in third party apps
      - **Event detail page** has been revamped with new markup

  - ✨ New implementations
    - molecules/quote
    - content-type/coursebook-program
    - content-type/coursebook-reference-week
    - content-type/coursebook-legend
    - molecules/metabox
    - social icon: linkedin
    - collapse partial and helper classes

  - 🛠 Fixes & other
    - no useless image is shipped in the `dist/frontend` branch anymore
    - refactor all "faculty" into "school"
    - fix buttons focus scaling to prevent horizontal scroll when button is full width
    - fix popover button so the box shadow doesnt get cut off
    - fix popover over animation

*1.2.1* (2018-08-29)
  - ⚠️ breaking markup changes
    - none

  - ✨ New implementations
    - d3304126e8429eb7f907c58c767c390177b5017a card-deck looks beeter when on grey background
    - card deck variants

  - 🛠 Fixes & other
    - 5e5daf8fb350f96b90f1af6adfb6c9ffb39b6275 faculties page: 3 columns instead of 2
    - prevent margin between two followed gray containers
    - added key numbers on example pages


*1.2.0* (2018-08-27)
  - ⚠️ breaking markup changes
    - **Organisms** :
      - **[footer light:](https://epfl-si.github.io/elements/#/organisms/footer)** margin improvement
      - **[Contact & variants](https://epfl-si.github.io/elements/#/organisms/contact):** Add schema attributes and refactor default background
    - **Content-type** :
      - **[science question:](https://epfl-si.github.io/elements/#/content-types/science-question)** New design
      - **[bachelor project](https://epfl-si.github.io/elements/#/content-types/bachelor-project):** refactor bachelor-project content-type
      - **[event & variants](https://epfl-si.github.io/elements/#/content-types/event):** Add schema attributes
      - **[news & variants](https://epfl-si.github.io/elements/#/content-types/news):** Add schema attributes
    - **Pages** :
      - **[Association homepage](https://epfl-si.github.io/elements/#/pages/association-homepage):** Update footer for the light variant
      - **[Blog homepage](https://epfl-si.github.io/elements/#/pages/blog-homepage):** Update footer for the light variant
      - **[Event detail page](https://epfl-si.github.io/elements/#/pages/event-detail):** Overhaul of the header and the content
      - **[Event homepage](https://epfl-si.github.io/elements/#/pages/event-homepage):** Update footer for the light variant
      - **[Faculties page](https://epfl-si.github.io/elements/#/pages/facultes):** Update the side navigation content
      - **[Lab homepage](https://epfl-si.github.io/elements/#/pages/lab-homepage):** Update the usage of the contact organism
      - **[News detail page](https://epfl-si.github.io/elements/#/pages/news-detail):** Add schema attributes
      - **[News homepage](https://epfl-si.github.io/elements/#/pages/news-homepage):** Update pagination wrapper
      - **[People list page](https://epfl-si.github.io/elements/#/pages/people-list):** Update the header and breadcrumb

  - ✨ New implementations
    - add function for async loading toggle
    - add better release documentation and process
    - **Atoms** :
      - add **[loader](https://epfl-si.github.io/elements/#/atoms/loader)** and [browse button async state](https://epfl-si.github.io/elements/#/atoms/nav-toggle)
    - **Molecules** :
      - **[Key number](https://epfl-si.github.io/elements/#/molecules/key-number)**
    - **Organisms** :
      - **[Key numbers group](https://epfl-si.github.io/elements/#/organisms/key-number-group)**
    - **Content-types** :
      - **[Study plan](https://epfl-si.github.io/elements/#/content-types/study-plan)** content type
    - **Pages** :
      - add **[about](https://epfl-si.github.io/elements/#/pages/about)** page
      - add **[education](https://epfl-si.github.io/elements/#/pages/education)** page
      - add **[innovation](https://epfl-si.github.io/elements/#/pages/innovation)** page

  - 🛠 Fixes & other
    - error messages cleaning
    - fix missing round option on social-icon variant
    - add default profile picture for people details page #182
    - fix IE grid issue with minmax and sizes
    - centralise z-index management. cleanup dead code

*1.1.2* (2018-08-20)
  - Add documentation new structure
  - Add branding pages
  - Add how to use the styleguide in your project
  - Add illustrations to styleguide homepage
  - add publication with left image
  - Refactor collapse and lists component

*1.1.1* (2018-08-13)
  - contact compact component
  - add date in headline
  - fix visual regression on headline
  - implement header dropdown
  - enhance hero component and image size

*1.1.0* (2018-08-10)
  - implement Taggable breadcrumb
  - implement headlines
  - refactor homepage and full-width teaser usage
  - use object-fit property for fullwidth teasers
  - decrease fullwidth teaser content width
  - add fallback grey background for highlights without image
  - implement card-deck component
  - Create the following pages:
    - Association homepage
    - Association list
    - Basic page
    - Blog homepage
    - Campus
    - Event detail
    - Event homepage
    - Event list
    - Facultés
    - Lab homepage
    - News detail
    - News homepage
    - People detail
    - People list
    - Programs
    - Research
  - implement nice focus for collapse component
  - add close icon for browse button
  - document the layout system via a page (Layout demo)
  - fix missing tablesaw css
  - implement card deck special design with 1 or 2 cards
  - visual improvement to hero component
  - fine tunng main nav visual
  - allow iframe and embed to be full width in container-grid
  - implement left highlight

*1.0.0* (2018-07-25)
  - First release with all the current state
