
# CHANGELOG

*1.3.0* (2018-xx-xx)
- ⚠️ breaking markup changes
    - **Search** now search and search mobile are different html tag to include in your header. desktop search has been taken out of the menu to ease integration in third party apps

  - ✨ New implementations
    - molecules/quote
    - social icon: linkedin

  - 🛠 Fixes & other
    - no useless image is shipped in the `dist/frontend` branch anymore
    - refactor all "faculty" into "school"
    - fix buttons focus scaling to prevent horizontal scroll when button is full width

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
      - **[footer light:](https://epfl-idevelop.github.io/elements/#/organisms/footer)** margin improvement
      - **[Contact & variants](https://epfl-idevelop.github.io/elements/#/organisms/contact):** Add schema attributes and refactor default background
    - **Content-type** :
      - **[science question:](https://epfl-idevelop.github.io/elements/#/content-types/science-question)** New design
      - **[bachelor project](https://epfl-idevelop.github.io/elements/#/content-types/bachelor-project):** refactor bachelor-project content-type
      - **[event & variants](https://epfl-idevelop.github.io/elements/#/content-types/event):** Add schema attributes
      - **[news & variants](https://epfl-idevelop.github.io/elements/#/content-types/news):** Add schema attributes
    - **Pages** :
      - **[Association homepage](https://epfl-idevelop.github.io/elements/#/pages/association-homepage):** Update footer for the light variant
      - **[Blog homepage](https://epfl-idevelop.github.io/elements/#/pages/blog-homepage):** Update footer for the light variant
      - **[Event detail page](https://epfl-idevelop.github.io/elements/#/pages/event-detail):** Overhaul of the header and the content
      - **[Event homepage](https://epfl-idevelop.github.io/elements/#/pages/event-homepage):** Update footer for the light variant
      - **[Faculties page](https://epfl-idevelop.github.io/elements/#/pages/facultes):** Update the side navigation content
      - **[Lab homepage](https://epfl-idevelop.github.io/elements/#/pages/lab-homepage):** Update the usage of the contact organism
      - **[News detail page](https://epfl-idevelop.github.io/elements/#/pages/news-detail):** Add schema attributes
      - **[News homepage](https://epfl-idevelop.github.io/elements/#/pages/news-homepage):** Update pagination wrapper
      - **[People list page](https://epfl-idevelop.github.io/elements/#/pages/people-list):** Update the header and breadcrumb

  - ✨ New implementations
    - add function for async loading toggle
    - add better release documentation and process
    - **Atoms** :
      - add **[loader](https://epfl-idevelop.github.io/elements/#/atoms/loader)** and [browse button async state](https://epfl-idevelop.github.io/elements/#/atoms/nav-toggle)
    - **Molecules** :
      - **[Key number](https://epfl-idevelop.github.io/elements/#/molecules/key-number)**
    - **Organisms** :
      - **[Key numbers group](https://epfl-idevelop.github.io/elements/#/organisms/key-number-group)**
    - **Content-types** :
      - **[Study plan](https://epfl-idevelop.github.io/elements/#/content-types/study-plan)** content type
    - **Pages** :
      - add **[about](https://epfl-idevelop.github.io/elements/#/pages/about)** page
      - add **[education](https://epfl-idevelop.github.io/elements/#/pages/education)** page
      - add **[innovation](https://epfl-idevelop.github.io/elements/#/pages/innovation)** page

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
