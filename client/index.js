(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './MainContainer'], factory);
    }
})(function (require, exports) {
    'use strict';
    var MainContainer_1 = require('./MainContainer');
    exports.MainContainer = MainContainer_1.default;
});
//# sourceMappingURL=index.js.map