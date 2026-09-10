# Applications

This directory collects real-life examples of internal EPFL web
applications. Unlike the other categories of the styleguide, its entries
are not reusable building blocks: each one is a complete, ready-to-copy
skeleton, meant to be used as a starter kit for a new EPFL web
application.

## Why this category exists

Atoms, molecules, organisms and content types describe pieces that a
developer is expected to assemble; pages show the canonical assembly of
those pieces for an institutional website. But a business application
(*application métier*) is not a website: it needs more functional space,
an application menu, a user area, filters, dense tables and forms. Left
alone with the component list, every team has to work out that assembly
again, and each arrives at a slightly different answer.

The entries here provide that missing layer: a working arrangement of
Elements components for an application, taken from a service that
actually runs in production.

An entry in this category is therefore useful to:

- give a new project a skeleton to start from, instead of a blank page;
- reassure a team that the layout it ships is corporate-compliant, when
  the example has been validated by the EPFL Communication team
  (MEDIACOM), as `wp-veritas/` has;
- serve as a realistic integration test for the CSS, beyond the tidy
  demos of the other categories;
- expose the gaps, so that recurring application-specific patterns can
  eventually be promoted to a proper atom, molecule or organism.

## How to use them

These examples are a starting point, not a specification. No application
is required to look like them, but reusing one saves a substantial amount
of integration and review time.

- Copy the markup you need and keep the class names: that is what ties
  the result to the visual identity.
- Replace the sample content with your own data and wire it to your
  framework of choice. Elements is deliberately framework-agnostic.
- Expect a skeleton. Menus, dropdowns and table controls are inert, and
  the data is fictitious; the examples demonstrate structure and
  appearance, not behaviour.

Because these examples mirror production, they may contain markup or
inline styles that do not come from Elements — an email template has no
choice, for instance. Where that happens, treat it as a gap to report
rather than a pattern to spread.

## Current entries

- `email/` — the parking authorisation confirmation sent by the EPFL
  Parking service. A complete, standalone bilingual HTML document with
  inline styles, as mail clients require.
- `wp-veritas/` — WP-Veritas, the tool used to manage EPFL's fleet of
  around 850 WordPress websites. The reference skeleton for a business
  application: full-width layout, light header, application menu, user
  area, filters and a sortable table. Production instance at
  <https://wp-veritas.epfl.ch/>, sources at [epfl-si/wp-veritas][veritas].
  Work in progress: the template currently renders a single heading and
  none of the actual application.

## Adding a new application

An entry follows the same conventions as any other component of the
styleguide:

```text
applications/<name>/
  <name>.yml    # required: registers the component
  <name>.twig   # required: the rendering
  <name>.scss   # optional
  <name>.js     # optional
```

1. Create the directory. The folder name, the file basenames and the
   `name` key of the YAML file must all match.
2. Write `<name>.yml` with at least a `title` and a `name`. The optional
   `notes` key accepts Markdown and is the only prose that the reader
   displays, so anything a user should read belongs there rather than in
   a README.
3. Write `<name>.twig`. Add a `{# … #}` header comment stating what the
   application does, its production URL and where its sources live, as
   `wp-veritas.twig` does.
4. Prefer existing Elements classes over new ones. An example that
   invents its own markup is of little use as a starter kit.
5. Run `yarn start` and check the entry under *Applications* in the
   sidebar.

The list of categories is hardcoded in `webpack.config.js`, in the
`AssetComponentsPlugin` call; `applications` is already part of it, so a
new directory is picked up without touching the build configuration.

## A note on README files

The reader does not render the README files that live under `assets/`:
Markdown is only loaded from `docs/`, and the component views display the
`notes` field of the YAML file. This document is therefore addressed to
contributors reading the repository, not to users browsing the
styleguide.

[veritas]: https://github.com/epfl-si/wp-veritas
