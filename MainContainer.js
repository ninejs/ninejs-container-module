(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "path"], factory);
    }
})(function (require, exports) {
    'use strict';
    const path = require("path");
    class MainContainer {
        constructor(config, ninejs, server) {
            this.config = config;
            this.ninejs = ninejs;
            this.server = server;
        }
        init() {
            this.server.clientSetup((utils) => {
                utils.addAmdPath('mainContainer/client', path.resolve(__dirname, 'client'));
                utils.addAmdPath('bootstrap', path.resolve(__dirname, 'node_modules', 'bootstrap', 'dist'));
                utils.addAmdPath('jQuery', path.resolve(__dirname, 'node_modules', 'jquery', 'src'));
                utils.addBoot('jQuery/jquery');
                utils.addAmdPath('jqueryui', path.resolve(__dirname, 'node_modules', 'jquery-ui', 'js'));
                utils.addModule('mainContainer/client/module', { 'ninejs/mainContainer': {} });
            });
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MainContainer;
});
//# sourceMappingURL=MainContainer.js.map