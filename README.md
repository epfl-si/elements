# Elements
#### *EPFL Web Styleguide*

#### [👉 View online](https://epfl-si.github.io/elements)

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
$ git clone git@github.com:epfl-si/elements.git
$ cd ./elements
$ yarn
$ npx gulp -f node_modules/epfl-elements-toolbox-utils/gulpfile.js prepare --project=$PWD
```

(The latter command creates and populates your `~/.toolbox/` directory)

Docker variant:

```bash
$ git clone git@github.com:epfl-si/elements.git
$ cd ./elements
$ docker-compose up builder
```

## Run locally

As listed in the `package.json`, the following commands are available:

- `$ yarn start` : Will launch a live reloaded server to help you **during development**
- `$ yarn build` : Will build your assets for **production usage**

With Docker, you can run:
- `$ docker-compose up server` same as `$ yarn start` but in containers
- `$ docker-compose up builder` same as `$ yarn build` but in containers

### Troubleshooting local install

- Error: `You don't have any local Toolbox Reader bundles to use... Please connecte yourlsef before retrying`
  - Faulty node_modules/toolbox-utils/tasks/prepare.js, Line 17
  - Fix with:
    - `mkdir ~/.toolbox && cd ~/.toolbox`
    - `wget https://cdn.jsdelivr.net/gh/frontend/toolbox-reader@2.2.2/build/static/css/main.css`
    - `wget https://cdn.jsdelivr.net/gh/frontend/toolbox-reader@2.2.2/build/static/js/main.js`

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

Because the previous command will normally push your release commits and tag, simply **go on Github\* and copy/paste the release's changelog content** in the release's description. (go directly using `https://github.com/epfl-si/elements/releases/edit/x.x.x`)

#### 4. Publish the builds

Complete every commit and tag message if needed. Then put yourself in your local **`master`** branch and type the following command to **start the build publishing task** :

```bash
$ git checkout master
$ sh publish.sh x.x.x
```

That's it ! If everything went fine, **the new release's build is available on the `dist/frontend`** branch thanks to you !

##### 4.1 Note on build images
Not all images in the styleguide are needed in the `dist/frontend` branch. Most of them only serve a presentation purpose and would be a burden for the production builds. For this reason **the WHOLE `/images/styleguide/` FOLDER** is **removed** during publishing, in the `publish.sh` script.

If you want to ship images to the production build, just make shure they are in the `/images/` folder or any subfolder, as long as it is not named `/images/styleguide/`.

All the images in the `/images/styleguide/` folder will remain available when running `yarn start` or deploying the styleguide on a gh-page.

#### 5. Update github.io
- A `$ yarn deploy` should **deploy the styleguide** in the dedicated [`gh-pages`](https://epfl-si.github.io/elements)

## Contribute

The project is using the **Gitflow workflow**. It defines a strict branching model designed around the project release.

You can learn more on the following resources :
- [Vincent Driessen's post](http://nvie.com/posts/a-successful-git-branching-model/)
- [Gitflow Workflow guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
