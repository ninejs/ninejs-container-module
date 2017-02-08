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
    const moduleDefine_1 = require("ninejs/modules/moduleDefine");
    const MainContainer_1 = require("./MainContainer");
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = moduleDefine_1.define(['ninejs', 'webserver'], function (provide) {
        provide('ninejs/mainContainer', function (config, ninejs, webserver) {
            var admin = new MainContainer_1.default(config, ninejs, webserver);
            return admin;
        });
    });
});
//# sourceMappingURL=module.js.map