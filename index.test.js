import test from 'ava';

const postcss = require('postcss');

const plugin = require('./');

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ])
        .process(input)
        .then((result) => {
            t.deepEqual(result.css.replace(/ /g, ''), output.replace(/ /g, ''));
        });
}

test('convert ltr properties', (t) => {
    return run(t,
        'a { -ltr-float:right; }',
        'a { float:right; }',
        { direction: 'ltr' });
});

test('convert rtl properties', (t) => {
    return run(t,
        'a { -rtl-float:right; }',
        'a { }',
        { direction: 'ltr' });
});

test('convert custom properties', (t) => {
    return run(t,
        'a { -custom-float:right; }',
        'a { float:right; }',
        { direction: 'custom' });
});

test('convert user option but remove other supported properties', (t) => {
    return run(t,
        'a { -ltr-float:right; -rtl-float:left; }',
        'a { float:right; }',
        { direction: 'ltr' });
});

test('dont affect classes with ltr or rtl in them', (t) => {
    return run(t,
        '.hello-ltr-world { -ltr-float:right; -rtl-float:left; }' +
        '.hello-rtl-world { -ltr-float:right; -rtl-float:left; }',
        '.hello-ltr-world { float:right; } .hello-rtl-world { float:right; }',
        { direction: 'ltr' });
});
