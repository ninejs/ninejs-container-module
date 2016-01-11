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
        define(["require", "exports", "jQuery/jquery", 'ninejs/core/ext/Properties', 'ninejs/core/ext/Evented', './widgets/MainContainer', 'ninejs/core/deferredUtils', 'ninejs/ui/utils/append', 'ninejs/ui/utils/setClass'], factory);
    }
})(function (require, exports, jQuery) {
    'use strict';
    var Properties_1 = require('ninejs/core/ext/Properties');
    var Evented_1 = require('ninejs/core/ext/Evented');
    var MainContainer_1 = require('./widgets/MainContainer');
    var deferredUtils_1 = require('ninejs/core/deferredUtils');
    var append_1 = require('ninejs/ui/utils/append');
    var setClass_1 = require('ninejs/ui/utils/setClass');
    var MainContainerUnit = (function (_super) {
        __extends(MainContainerUnit, _super);
        function MainContainerUnit(config, router, frame, auth, container) {
            var _this = this;
            _super.call(this, config);
            this.modals = {};
            this.config = config;
            var singlePageContainer = frame, self = this;
            var mainContainer = new MainContainer_1.default({ router: router, config: config, auth: auth, frameMode: config.frameMode || 'flexFrame' });
            this.mainContainer = mainContainer;
            var loadDefer = deferredUtils_1.defer();
            var loadPromise = loadDefer.promise;
            mainContainer.show().then(function (domNode) {
                singlePageContainer.addChild(mainContainer);
                container.setContainer('footer', mainContainer.footer);
                container.setContainer('header', mainContainer.header);
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
        MainContainerUnit.prototype.addContent = function (content, idx) {
            return this.mainContainer.addContent.apply(this.mainContainer, arguments);
        };
        MainContainerUnit.prototype.activate = function () {
            return this.mainContainer.activate.apply(this.mainContainer, arguments);
        };
        MainContainerUnit.prototype.addMenu = function (menuId, node) {
            return this.mainContainer.addMenu.apply(this.mainContainer, arguments);
        };
        MainContainerUnit.prototype.addMenuItem = function (menuId, item, parentNode) {
            return this.mainContainer.addMenuItem.apply(this.mainContainer, arguments);
        };
        MainContainerUnit.prototype.contentSetter = function (content) {
            var p = ['content'].concat(Array.prototype.slice.call(arguments, 0));
            return this.mainContainer.set.apply(this.mainContainer, p);
        };
        MainContainerUnit.prototype.addModal = function (name, content) {
            var div = setClass_1.default(append_1.default(window.document.body, 'div'), 'modal', 'fade', 'in');
            content.show(div);
            div.style.display = 'none';
            var modal = jQuery(div);
            var r = {
                modal: modal,
                show: function (args, contentArgs) {
                    var widget = content;
                    var d;
                    if (typeof (widget.load) === 'function') {
                        d = deferredUtils_1.resolve(widget.load(contentArgs));
                    }
                    else {
                        d = deferredUtils_1.resolve(true);
                    }
                    return d.then(function () {
                        modal.modal('show', args);
                    });
                },
                close: function () {
                    modal.modal('close', {});
                }
            };
            this.modals[name] = r;
            return r;
        };
        MainContainerUnit.prototype.getModal = function (name) {
            return this.modals[name];
        };
        return MainContainerUnit;
    })(Properties_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MainContainerUnit;
});
//# sourceMappingURL=MainContainer.js.map