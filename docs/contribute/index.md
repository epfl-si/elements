# Contribute to Elements

## How to install
Refer to our readme file in [the project repository](https://github.com/epfl-si/elements)

## Contribute to the documentation
This chapter is about writing documentation for the Elements project.

## File structure

The Git repository contains the following major subdirectories:
- `./assets/` contains the bits and pieces of HTML, JS and (S)CSS that compose the EPFL Web visual identity, along with usage examples (in Twig format) metadata (YAML) and documentation (in Markdown)
- `./reader/` contains a theming-neutral React Web app to showcase these graphical elements
- `./docs/` contains general-purpose documentation to help you use epfl-elements in your Web site or app.

## Contributing

#### Locally
1. Clone the [repository](https://github.com/epfl-si/elements)
2. Create a new `doc/YOUR_BRANCHS_NAME` branch
3. **Add** _or_ **edit** your documentation file under `./docs`
4. **Commit** and **push** all your changes
5. **Create** a pull request

#### Online
_⚠️ Github UI doesn't provide branch creation, so it will be harder to review._
1. Go to the Github [repository](https://github.com/epfl-si/elements)
2. **Add** _or_ **edit** your documentation file under `./docs`
3. **Save** (will do a commit)

## Republish

The documentation can be directly seen inside the `./docs` directory by navigating in the **Github code tab**.

To see the newly edited documentation **in the styleguide**, a **build** and **deploy** is required after merging the related pull requests. **Locally** you just have to `$ yarn deploy` to re-deploy the documentation.
