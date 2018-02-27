# Documentation

This chapter is about writing documentation for the Element project.

## File structure

Everything is under the `./docs` directory. [Toolbox-reader](https://github.com/frontend/toolbox-reader) that we are using to render the full Styleguide keeps the file structure as defined. It accept the following file formats.
- `.md` : [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- `.html` : HTML markup content, no `head`/`body` required.

This an example of how this will work :

````plain
.
∟ docs/
  ⊢ index.md          👈 Styleguide's homepage
  ⊢ typography.html   👈 Documentation page
  ⊢ guidelines/       👈 Sub directory
    ∟ code.md         👈 Sub documentation page
  ∟ CI/               👈 Sub directory
    ⊢ index.md        👈 CI directory documentation page
    ⊢ deploy.md       👈 Sub documentation page
    ∟ testing.html    👈 Sub documentation page
````

There is no depth limitation, but try to keep things **simple** and **understandable**.

## Contributing

#### Locally
1. Clone the [repository](https://github.com/epfl-idevelop/elements)
2. Create a new `doc/YOUR_BRANCHS_NAME` branch
3. **Add** _or_ **edit** your documentation file under `./docs`
4. **Commit** and **push** all your changes
5. **Create** a pull request

#### Online
_⚠️ Github UI doesn't provide branch creation, so it will be harder to review._
1. Go to the Github [repository](https://github.com/epfl-idevelop/elements)
2. **Add** _or_ **edit** your documentation file under `./docs`
3. **Save** (will do a commit)

## Republish

The documentation can be directly seen inside the `./docs` directory by navigating in the **Github code tab**.

To see the newly edited documentation **in the styleguide**, a **build** and **deploy** is required after merging the related pull requests. **Locally** you just have to `$ yarn deploy` to re-deploy the documentation. 
