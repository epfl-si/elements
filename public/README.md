This is where you should put the HTML of the style guide you are
running the toolbox-reader for, if you wish to use the latter's
“hot-reload” capability.

Therefore, feel free to
```
rm -rf public/
ln -s ../../where/ever/your/toolbox/based/project/lives/public .
```

The empty index.html is here just so that the build can complete when
using epfl-elements-toolbox-reader as an ordinary npm package.
