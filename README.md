# Toolbox Reader 👓

## Install and run

Make sure you have the `/public` directory correctly set up before you start working on Toolbox Reader. Our recommendation is to start off another styleguide. When you're done, just run (replace `base-styleguide` by your base styleguide path:

```bash
ln -s `pwd`/../base-styleguide/build `pwd`/public
```

Then, to install and run Toolbox Reader locally:

```bash
$ yarn
$ yarn start
```

## Concept

The idea is to **remove all the styleguide's related build processes and dependencies** from any project to keep them clean and simple. With this approach, a standard project will contain only his own build processes.

**The styleguide will be only visible using the bundle of the reader via CDN**. This offer a common, single and easy to maintain styleguide reader who will fits to all our project.

The data and the components will be defined aside of the reader; check `public/index.html`.
