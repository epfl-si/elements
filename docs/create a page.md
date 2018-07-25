# Create a page

## Bootstrap based

Elements is entirely **based on the [Bootstrap 4](https://getbootstrap.com/) framework**. It means that when you have to build a page, you can use all the **[grid](https://getbootstrap.com/docs/4.1/layout/grid/)** and **[spacing](https://getbootstrap.com/docs/4.1/utilities/spacing/) classes**.

### The grid

Based on **12 columns**, the grid is pretty easy to use. For example, **if you want to add 2 teasers on the same row** you can do something like :

```html
<div class="row">
  <div class="col-6">
    [TEASER HERE]
  </div>
  <div class="col-6">
    [TEASER HERE]
  </div>
</div>
```

Read the [documentation](https://getbootstrap.com/docs/4.1/layout/grid/) to learn more about the grid.

### Spacing

Like with the grid, **Bootstrap provides some very useful classes to refine spacing** between the components. For example, if you want to **increase the margin after a wrapper** :

```html
<div id="my-wrapper" class="mb-4">
  [CONTENT HERE]
</div>
```

Read the [documentation](https://getbootstrap.com/docs/4.1/utilities/spacing/) to learn more about the spacing classes.

## Page types

Depending on your use case, **you can pick a page types**. For each of the following page type example, **there is a complete tour** to show you how the page is built and which component you can use to reproduce it.

- [Laboratory page](#/pages/lab)
