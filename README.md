# Elements
#### *EPFL Web Styleguide*

#### [👉 View online](https://epfl-si.github.io/elements)

## Install

To contribute and run the styleguide, you will need few things :
- [🔀 Git](https://git-scm.com/) - Version control system
- [📗 NodeJS 14+](https://nodejs.org/en/) - JavaScript runtime used to build the project
- [🐈 Yarn](https://yarnpkg.com/lang/en/) - Dependency manager built on top of the NPM registry

Then, to install the project onto your workstation:

```bash
$ git clone git@github.com:epfl-si/elements.git
$ cd ./elements
$ yarn
```

## Run locally

As listed in the `package.json`, the following commands are available:

- `$ yarn start` : Will launch a live reloaded server to help you **during development**
- `$ yarn dist` : Will build your assets for **production usage** into the `dist/` directory

## Backstop tests (local)

EPFL-Elements uses [backstop.js](https://github.com/garris/BackstopJS#backstopjs) to perform visual regression testing.

To run a side-by-side comparison between the original state of Elements and your changes using Backstop, you need to have a locally-running Elements Web app as per the previous §. Then:

1. Make sure all your changes are committed to git (not necessarily pushed)
1. Run `yarn test:prepare`<br/>💡 **Do not** stop the EPFL-Elements Web app to type in this command! Use a new terminal window instead.
1. Check out the upstream branch for your work (typically `origin/dev`): <pre>git checkout origin/dev</pre>
1. Run `yarn test:reference`
1. Check out your working branch again, e.g. <pre>git checkout feature/myfeature</pre>
1. Run `yarn test:changes`
1. The report should open in your browser automatically. If not, just open the `tests/backstop/html_report/index.html` file in your browser

## Create a new release

1. Ensure that all the desired changes have been merged into the main (`dev`) branch on GitHub
1. Type <pre>yarn release</pre> and follow the interactive instructions.

The last step will cause the following things to happen:
- Ensure that you are on the `dev` branch (or bail out if not)
- Bump version number
- Commit, tag and push

... And in turn, *that* last step will cause the following things to happen *server-side*, using GitHub Actions:
- Create a release on GitHub in .zip format
- Update the [online demo on GitHub pages](https://epfl-si.github.io/elements/)
- Update the [`dist/frontend` branch](https://github.com/epfl-si/elements/tree/dist/frontend)
