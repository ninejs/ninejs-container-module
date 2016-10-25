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
        define(["require", "exports", "ninejs/core/i18n!../i18n.json", './Help', 'ninejs/config', 'ninejs/core/deferredUtils', 'ninejs/ui/Widget', './Skin/MainContainer', 'ninejs/ui/utils/append', 'ninejs/ui/utils/setClass', 'ninejs/ui/utils/setText', './MenuItem'], factory);
    }
})(function (require, exports) {
    'use strict';
    var Help_1 = require('./Help');
    var config_1 = require('ninejs/config');
    var deferredUtils_1 = require('ninejs/core/deferredUtils');
    var Widget_1 = require('ninejs/ui/Widget');
    var MainContainer_1 = require('./Skin/MainContainer');
    var append_1 = require('ninejs/ui/utils/append');
    var setClass_1 = require('ninejs/ui/utils/setClass');
    var setText_1 = require('ninejs/ui/utils/setText');
    var MenuItem_1 = require('./MenuItem');
    var i18nResource = require('ninejs/core/i18n!../i18n.json');
    function i18n(n) {
        return i18nResource.resource[n] || n;
    }
    function addContent(parent, w, idx) {
        var parentContainer = parent;
        if (typeof (idx) === 'number') {
            deferredUtils_1.when(w.show(), function () {
                var current = parentContainer.firstChild, cnt = 0;
                while ((cnt < idx) && current) {
                    cnt += 1;
                    current = current.nextSibling;
                }
                if (!current) {
                    deferredUtils_1.when(w.domNode, function (domNode) {
                        parentContainer.appendChild(domNode);
                    });
                }
                else {
                    deferredUtils_1.when(w.domNode, function (domNode) {
                        parentContainer.insertBefore(domNode, current);
                    });
                }
            });
        }
        else {
            w.show(parent);
        }
        return {
            remove: function () {
                var domNode = w.domNode;
                append_1.default.remove(domNode);
            }
        };
    }
    var MainContainer = (function (_super) {
        __extends(MainContainer, _super);
        function MainContainer(args) {
            _super.call(this, args);
            this.i18n = i18n;
            this.config = config_1.default;
            this.helpWidget = new Help_1.default({});
            this.mainMenuMap = {};
        }
        MainContainer.prototype.fixResize = function () {
            this.slimScroll.style.height = (window.innerHeight - this.header.clientHeight - this.footer.clientHeight - this.slimScroll.offsetTop) + 'px';
        };
        MainContainer.prototype.onUpdatedSkin = function () {
            _super.prototype.onUpdatedSkin.call(this);
            this.addMenu('mainMenu', this.mainMenuNode);
        };
        MainContainer.prototype.activate = function () {
            this.parentContainer.set('selected', this);
        };
        MainContainer.prototype.toggleCollapseSidebar = function () {
            var domNode = this.domNode;
            setClass_1.default(domNode, '~sidebar-collapsed');
        };
        MainContainer.prototype.addContent = function (content, idx) {
            return addContent(this.Content, content, idx);
        };
        MainContainer.prototype.addMenu = function (menuId, node) {
            this.mainMenuMap[menuId] = { node: node, items: [] };
        };
        MainContainer.prototype.addMenuItem = function (menuId, item, parentNode) {
            var menuItem = new MenuItem_1.default(item), self = this, cl = [];
            if (!parentNode) {
                parentNode = this.mainMenuMap[menuId].node;
                this.mainMenuMap[menuId].items.push(menuItem);
                cl.push('root-level');
            }
            var domNode = menuItem.show(parentNode), children = (menuItem.children || []);
            if (children.length) {
                cl.push('has-sub');
                deferredUtils_1.when(domNode, function (domNode) {
                    cl.forEach(function (c) {
                        setClass_1.default(domNode, c);
                    });
                    setClass_1.default(domNode, 'has-sub');
                    children.forEach(function (child) {
                        self.addMenuItem(menuId, child, domNode);
                    });
                });
            }
            return menuItem;
        };
        MainContainer.prototype.contentSetter = function (content) {
            var old = this.content;
            if (this.content) {
                this.content.emit('deactivating', {});
            }
            setText_1.default.emptyNode(this.Content);
            if (old) {
                old.emit('deactivated', {});
            }
            this.content = content;
            content.show(this.Content);
            this.content.emit('activated', {});
        };
        MainContainer.prototype.logoClick = function () {
            this.router.go('/', false);
        };
        MainContainer.prototype.logout = function () {
            this.auth.logout();
            this.router.go('/login', false);
        };
        return MainContainer;
    })(Widget_1.default);
    MainContainer.prototype.skin = MainContainer_1.default;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MainContainer;
});
//# sourceMappingURL=MainContainer.js.map