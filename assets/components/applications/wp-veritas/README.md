# WP-Veritas

An example of a business application (*application métier*) that builds on
EPFL Elements but needs more functional space than a content website, plus
the menus, filters and controls that a web application requires.

WP-Veritas is the tool used to manage EPFL's fleet of around 850 WordPress
websites: it holds the inventory of sites, their URLs, owners, categories
and themes, and drives their provisioning. The production instance is at
<https://wp-veritas.epfl.ch/> and the sources are on
[GitHub][wp-veritas-sources].

## What it demonstrates

The example shows how a web application can look once it uses the
corporate visual identity:

- a full-width layout (`container-fluid`) rather than the centred content
  column of the institutional websites;
- the light header (`header-light`) with an application title next to the
  EPFL logo;
- an application menu in the side navigation (`nav-aside`);
- the user area in the header: login link, avatar and account dropdown;
- the short language switcher (`nav-lang-short`);
- a filter form and a sortable data table (`table-sortable`), the two
  workhorses of most business applications.

## How to use it

This is a starting kit, not a specification. Applications are not
required to look like this one, but reusing this skeleton saves
integration time, and its rendering has been validated by the EPFL
Communication team (MEDIACOM), so it is corporate-compliant.

Copy the parts you need, keep the class names, and replace the sample
data with your own.

## Status

The example is a skeleton: the menus, dropdowns, filters and table
controls are inert, and none of the data is real. That is enough to show
what a web application looks like when it uses full-width layout,
application menus, login and log-off, vertical scrolling and dense
tabular content.

Work in progress: `wp-veritas.twig` currently renders a single heading
only. The complete reference markup sits next to it, in
`wp-veritas.html`, and still has to be ported to the Twig template.

[wp-veritas-sources]: https://github.com/epfl-si/wp-veritas
