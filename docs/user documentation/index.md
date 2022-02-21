# How to use Elements

Because Elements strives to be framework or environment agnostic, you should be able to use it within any frontend Web project. It consists only of **HTML**, **CSS** and a tiny bit of **JavaScript** like many other style packages.

You have **two options** :
- You can get the sources and include it on your own frontend infrastructure (advanced users)
- or simply get the build and linked them to your project (recommended)

## Get the sources

Because you're supposed to be an advanced user, you can do whatever you want and include Elements as a Git submodule or as a symlink in your project. Then the Sass and javascript’s entry points are in `assets/components/base.[scss, js]`

⚠️ This method can cause some conflict with your own project and the stability cannot be ensured.

## Get the builds (recommended)

Under the [releases tab](https://github.com/epfl-si/elements/releases), you will find all the releases of Elements and the related changes.

**To download the last release's build**, you can [download this zip](https://github.com/epfl-si/elements/archive/dist/frontend.zip) which always reflect the last release state of Elements. If you feel more comfortable with Github, the branch `dist/frontend` is the build location.

Now that you've downloaded the build archive, you will find every CSS, Javascript and assets files required to apply Elements design on your project.

### A recommended way to use Elements

1. Unarchive the builds under something like `./vendors/elements`
2. In your base HTML template, include the following code
  ```html
  <head>
    <!-- [...] -->

    <!-- Elements CSS -->
    <link rel="stylesheet" href="./vendors/elements/css/vendors.min.css">
    <link rel="stylesheet" href="./vendors/elements/css/elements.min.css">

    <!-- [...] -->
  </head>
  <body>
    <!-- [...] -->

    <!-- jQuery through CDN is not already present -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

    <!-- Elements JS -->
    <script src="./vendors/elements/js/vendors.min.js"></script>
    <script src="./vendors/elements/js/elements.min.js"></script>
  </body>
  ```

## Something is wrong ?

Feel free to use the [support and request page](#/doc/contribute--support-and-request.html) or to open an issue on the [Github repository](https://github.com/epfl-si/elements/issues).
