# PostCSS Directions [![Build Status][ci-img]][ci]

[PostCSS] plugin to convert properties between rtl and ltr. Just prefix usual CSS properties with `-ltr-` or `-rtl-`.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/josephshambrook/postcss-directions.svg
[ci]:      https://travis-ci.org/josephshambrook/postcss-directions

```css
.float-left {
    -ltr-float:left;
    -rtl-float:right;
}
```

```css
.float-left {
    float:left;
}
```

## Install

```js
npm i --save-dev postcss-directions
```

## Usage

```js
postcss([ require('postcss-directions') ])
```

## Options
- *direction* - what prefixed properties to output. Default - `ltr`

See [PostCSS] docs for examples for your environment.
