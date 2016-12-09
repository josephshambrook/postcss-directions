var postcss = require('postcss');

module.exports = postcss.plugin('postcss-directions', (options = {}) => {
    var direction = options.direction || 'ltr';
    var supportedDirections = ['-ltr-', '-rtl-'];
    var directionSelector = `-${direction}-`;
    return function (css) {
        css.walkDecls(dec => {
            if (dec.prop.indexOf(directionSelector) > -1) {
                dec.prop = dec.prop.replace(directionSelector, '');
            }

            supportedDirections.forEach(prop => {
                if (dec.prop.indexOf(prop) > -1 && prop !== direction) {
                    dec.remove();
                }
            });
        });
    };
});
