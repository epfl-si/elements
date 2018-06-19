# ♿️ Accessibility

## Guidelines 
 
We are following the [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21). They must be applied in the best way possible and follow the **level AA** recommendations.
 
Have a look at all the [recommendations](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_customize&levels=aaa) and techniques to pass all the requirements for AA accessibility.  

## General recommendations

In any EPFL project, you need to be thoughtful about accessibility: this does not only concern people browsing the web with a screen reader, but also people using the keyboard only, people that may be color blind, people that don't understand the language, etc.

Have a look at the [Colors page](/#/colors) to have a better idea about color contrast in the project.

### HTML5

Use HTML5 as much as possible, don't use a basic `<div>` everywhere but prefer the correct and semantic elements instead.

### Aria
Use Aria tags whenever it's needed, but remember **it's better to not use an aria tag than to use the wrong one**. 

### Skip links (Access nav)

Don't forget to add the [skip links](/#/utilities/access-nav) to your integration. They should allow the user to more easily get to the main areas of the website. 

For that:

- Set main area to `<main role="main" id="main">`
- Set main navigation to `<nav class="nav-main" id="main-navigation" role="navigation">`
- Set search field to `<input type="text" class="form-control" id="search" placeholder="Rechercher">`
- Set a contact email
