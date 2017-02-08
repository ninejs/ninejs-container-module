(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "ninejs/modules/moduleDefine", "./MainContainer"], factory);
    }
})(function (require, exports) {
    'use strict';
    var moduleDefine_1 = require("ninejs/modules/moduleDefine");
    var MainContainer_1 = require("./MainContainer");
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = moduleDefine_1.define(['router', 'singlePageContainer', 'ninejs/auth', 'container'], function (provide) {
        provide('ninejs/mainContainer', function (config, router, frame, auth, container) {
            var admin = new MainContainer_1.default(config, router, frame, auth, container);
            return admin;
        });
    });
});
//# sourceMappingURL=module.js.map