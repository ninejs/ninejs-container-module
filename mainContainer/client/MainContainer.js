var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'ninejs/core/ext/Properties', 'ninejs/core/ext/Evented', './widgets/MainContainer', 'ninejs/core/deferredUtils'], factory);
    }
})(function (require, exports) {
    'use strict';
    var Properties_1 = require('ninejs/core/ext/Properties');
    var Evented_1 = require('ninejs/core/ext/Evented');
    var MainContainer_1 = require('./widgets/MainContainer');
    var deferredUtils_1 = require('ninejs/core/deferredUtils');
    var MainContainerUnit = (function (_super) {
        __extends(MainContainerUnit, _super);
        function MainContainerUnit(config, router, frame, auth) {
            var _this = this;
            _super.call(this, config);
            this.config = config;
            var singlePageContainer = frame, self = this;
            var mainContainer = new MainContainer_1.default({ router: router, config: config, auth: auth });
            var loadDefer = deferredUtils_1.defer();
            var loadPromise = loadDefer.promise;
            mainContainer.show().then(function (domNode) {
                singlePageContainer.addChild(mainContainer);
                _this.Content = mainContainer.Content;
                self.domNode = domNode;
                mainContainer.on('updatedSkin', function () {
                    loadDefer.resolve(true);
                });
            });
            this.init = function () {
                return loadPromise;
            };
        }
        MainContainerUnit.prototype.on = function (type, listener) {
            return Evented_1.default.on(type, listener);
        };
        MainContainerUnit.prototype.emit = function (type, data) {
            return Evented_1.default.emit(type, data);
        };
        MainContainerUnit.prototype.addContent = function () {
            return this.mainContainer.addContent.apply(this.mainContainer, arguments);
        };
        MainContainerUnit.prototype.activate = function () {
            return this.mainContainer.activate.apply(this.mainContainer, arguments);
        };
        MainContainerUnit.prototype.addMenu = function () {
            return this.mainContainer.addMenu.apply(this.mainContainer, arguments);
        };
        MainContainerUnit.prototype.addMenuItem = function () {
            return this.mainContainer.addMenuItem.apply(this.mainContainer, arguments);
        };
        MainContainerUnit.prototype.contentSetter = function () {
            var p = ['content'].concat(Array.prototype.slice.call(arguments, 0));
            return this.mainContainer.set.apply(this.mainContainer, p);
        };
        return MainContainerUnit;
    })(Properties_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MainContainerUnit;
});
//# sourceMappingURL=MainContainer.js.map