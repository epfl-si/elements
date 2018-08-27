# Elements
#### *EPFL Web Styleguide*

#### [👉 View online](https://epfl-idevelop.github.io/elements)

## Install

To contribute and run the styleguide, you will need few things :
- [🔀 Git](https://git-scm.com/) - Version control system 
- either:

  - [📗 NodeJS 8+](https://nodejs.org/en/) - JavaScript runtime used to build the project
  - [🐈 Yarn](https://yarnpkg.com/lang/en/) - Dependency manager built on top of the NPM registry

- or:
  - [🐳 Docker](https://www.docker.com/) - Container platform provider
  - [🐳 docker-compose](https://www.docker.com/) - Tool for defining and running multi-container Docker applications

Then, to install the project on your environment :

```bash
$ git clone git@github.com:epfl-idevelop/elements.git
$ cd ./elements
$ yarn
```

Docker variant:

```bash
$ git clone git@github.com:epfl-idevelop/elements.git
$ cd ./elements
$ docker-compose up builder
```

## Run locally

As listed in the `package.json` you have **3 commands** available :

- `$ yarn start` : Will launch a live reloaded server to help you **during development**
- `$ yarn build` : Will build your assets for **production usage**
- `$ yarn deploy` : Will **deploy the styleguide** in the dedicated [`gh-pages`](https://epfl-idevelop.github.io/elements)

With Docker, you can run:
- `$ docker-compose up builder` same as `$ yarn build` but in containers
- `$ docker-compose up server` same as `$ yarn start` but in containers

## Create a new release

#### 1. Git release

This project follows the [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/)'s guidelines. It means you must use the following command to start a new release from your local **`dev`** branch :

```bash
$ git flow release start x.x.x
```

#### 2. Changelog & versions

Because a new release can impact a lot of projects who use *Element*, **you must precisely list\* all the updates made on the components markup** in the **`CHANGELOG.md`**.

**Check previous versions to give you an idea of how to write it the right way*

Then, don't forget to **update the version number** in the `VERSION` and the `package.json` files.

Commit everything !

#### 3. Complete the release

First, you must complete the [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/) release process with the following command :

```bash
$ git flow release finish -p 'x.x.x'
```

Complete every commit and tag message if needed. Then put yourself in your local **`master`** branch and type the following command to **start the build publishing task** :

```bash
$ sh publish.sh x.x.x
```

That's it ! If everything went fine, **the new release's build is available on the `dist/frontend`** branch thanks to you !


## Contribute

The project is using the **Gitflow workflow**. It defines a strict branching model designed around the project release.

You can learn more on the following resources :
- [Vincent Driessen's post](http://nvie.com/posts/a-successful-git-branching-model/)
- [Gitflow Workflow guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
