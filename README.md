# Elements
#### *EPFL Web Styleguide*

#### [👉 View online](https://epfl-si.github.io/elements)

## Install

To contribute and run the styleguide, you will need few things :
- [🔀 Git](https://git-scm.com/) - Version control system
- either:

  - [📗 NodeJS 14+](https://nodejs.org/en/) - JavaScript runtime used to build the project
  - [🐈 Yarn](https://yarnpkg.com/lang/en/) - Dependency manager built on top of the NPM registry

- or:
  - [🐳 Docker](https://www.docker.com/) - Container platform provider
  - [🐳 docker-compose](https://www.docker.com/) - Tool for defining and running multi-container Docker applications

Then, to install the project onto your workstation:

```bash
$ git clone git@github.com:epfl-si/elements.git
$ cd ./elements
$ yarn
```

## Run locally

As listed in the `package.json`, the following commands are available:

- `$ yarn start` : Will launch a live reloaded server to help you **during development**
- `$ yarn build` : Will build your assets for **production usage**

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

### 1. Create a Git tag

1. Pick a new version number for the release in accordance with the [semver](https://semver.org/) principles
1. Append a fragment to CHANGELOG.md and commit
1. Use `git tag` to create a tag with the chosen version number
1. Push everything: <pre>
git push
git push --tags
</pre>

### 2. Create a GitHub release

Not functioning yet — To be documented.

#### 3. Update github.io

Not functioning yet — To be documented.

## Contribute

The project is using the **Gitflow workflow**. It defines a strict branching model designed around the project release.

You can learn more on the following resources :
- [Vincent Driessen's post](http://nvie.com/posts/a-successful-git-branching-model/)
- [Gitflow Workflow guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
