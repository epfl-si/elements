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

  > 💡 Instead of running the steps below on your workstation, you may want to have GitHub actions do the same for you in the cloud. See the next paragraph.

To run a side-by-side comparison between the original state of Elements and your changes using Backstop, you need to have a locally-running Elements Web app as per the previous §. Then:

1. Make sure all your changes are committed to git (not necessarily pushed)
1. Run `yarn test:prepare`<br/>💡 **Do not** stop the EPFL-Elements Web app to type in this command! Use a new terminal window instead.
1. Check out the upstream branch for your work (typically `origin/dev`): <pre>git checkout origin/dev</pre>
1. Run `yarn test:reference`
1. Check out your working branch again, e.g. <pre>git checkout feature/myfeature</pre>
1. Run `yarn test:changes`
1. The report should open in your browser automatically. If not, just open the `tests/backstop/html_report/index.html` file in your browser

## Backstop tests (GitHub actions)

Whenever one creates or updates (pushes to the underlying branch of) a GitHub pull request, a set of GitHub actions kicks off to perform the same visual regression testing as described in the previous paragraph, except that the processing happens in the cloud.

1. Push your work to a feature branch
1. If not already done, create a GitHub pull request out of that feature branch
1. Wait a few minutes for the GitHub actions to terminate. <br/> 💡 If you are feeling impatient and/or bored, browse the [repository's Actions tab](https://github.com/epfl-si/elements/actions) and click your way through the yellow spinning icons to look at the logs while the GitHub actions are in progress.
1. If all goes well, the GitHub actions' bots should append two new comments to the pull request's review thread. The second one contains a link to the Backstop report, which is a rather large (~150 Mb) file. In order to take a look at the report:
  1. Download it by clicking the link
  1. Unzip the file (💡 Depending on your browser's configuration, this may happen automatically)
  1. Open the file `backstop-report/html_report/index.html` within the unzipped directory with your browser
1. If you want to perform additional changes (e.g. to repair regressions spotted by Backstop), just push (or force-push) to the feature branch. When done, the GitHub actions will update the same two review messages in the PR thread (instead of creating new ones).

## Create a new release

1. [Ensure](https://github.com/lerna/lerna/issues/896#issuecomment-311894609) that your `~/.yarnrc` contains a line like <pre>registry "https://registry.npmjs.org/"
</pre>
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
