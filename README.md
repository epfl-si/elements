# Elements
#### *EPFL Web Styleguide*

#### [👉 View online](https://epfl-idevelop.github.io/elements)

## Install

To contribute and run the styleguide, you will need few things :
- [🔀 Git](https://git-scm.com/) - Version control system 
- [📗 NodeJS 8+](https://nodejs.org/en/) - JavaScript runtime used to build the project
- [🐈 Yarn](https://yarnpkg.com/lang/en/) - Dependency manager built on top of the NPM registry

Then, to install the project on your environment :

```bash
$ git clone git@github.com:epfl-idevelop/elements.git
$ cd ./elements
$ yarn
```

## Run locally

As listed in the `package.json` you have **3 commands** available :

- `$ yarn start` : Will launch a live reloaded server to help you **during development**
- `$ yarn build` : Will build your assets for **production usage**
- `$ yarn deploy` : Will **deploy the styleguide** in the dedicated [`gh-pages`](https://epfl-idevelop.github.io/elements)

With Docker, you can run:
- `$ docker-compose up elements-build` same as `$ yarn build` but in containers
- `$ docker-compose up elements-serve` same as `$ yarn start` but in containers

## Contribute

The project is using the **Gitflow workflow**. It defines a strict branching model designed around the project release.

You can learn more on the following resources :
- [Vincent Driessen's post](http://nvie.com/posts/a-successful-git-branching-model/)
- [Gitflow Workflow guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
