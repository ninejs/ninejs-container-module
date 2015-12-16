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
        define(["require", "exports", 'ninejs/ui/utils/append', 'ninejs/core/deferredUtils', 'ninejs/ui/Widget', './Skin/MenuItem', 'ninejs/core/on', 'ninejs/ui/utils/setClass'], factory);
    }
})(function (require, exports) {
    'use strict';
    var append_1 = require('ninejs/ui/utils/append');
    var deferredUtils_1 = require('ninejs/core/deferredUtils');
    var Widget_1 = require('ninejs/ui/Widget');
    var MenuItem_1 = require('./Skin/MenuItem');
    var on_1 = require('ninejs/core/on');
    var setClass_1 = require('ninejs/ui/utils/setClass');
    var MenuItem = (function (_super) {
        __extends(MenuItem, _super);
        function MenuItem() {
            _super.apply(this, arguments);
            this.skin = MenuItem_1.default;
            this.anchorClass = 'auto';
            this.icon = 'i i-dot';
        }
        MenuItem.prototype.onUpdatedSkin = function () {
            _super.prototype.onUpdatedSkin.call(this);
            var domNode = this.domNode;
            if (this.action) {
                this.own(on_1.default(domNode, 'click', this.action));
            }
        };
        MenuItem.prototype.remove = function () {
            deferredUtils_1.when(this.domNode, function (domNode) {
                if (domNode.parentNode) {
                    domNode.parentNode.removeChild(domNode);
                }
            });
            _super.prototype.remove.call(this);
            return true;
        };
        MenuItem.prototype.addSubMenu = function (text, badgeValue, tabKey, action, cls, index) {
            var _this = this;
            var item = new MenuItem({
                badgeValue: badgeValue,
                text: text,
                action: action,
                'class': cls || '',
                key: tabKey
            });
            setClass_1.default(this.caretNode, 'fa-caret-right');
            return item.show().then(function (domNode) {
                append_1.default.toIndex(_this.childrenContainer, domNode, index);
                return item;
            });
        };
        return MenuItem;
    })(Widget_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MenuItem;
});
//# sourceMappingURL=MenuItem.js.map