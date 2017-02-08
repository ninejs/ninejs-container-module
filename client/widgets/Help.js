var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "ninejs/core/i18n!../i18n.json", "ninejs/ui/utils/append", "ninejs/config", "ninejs/ui/utils/setText", "./Skin/Help", "ninejs/ui/Widget"], factory);
    }
})(function (require, exports) {
    'use strict';
    var append_1 = require("ninejs/ui/utils/append");
    var config_1 = require("ninejs/config");
    var setText_1 = require("ninejs/ui/utils/setText");
    var Help_1 = require("./Skin/Help");
    var Widget_1 = require("ninejs/ui/Widget");
    var i18n = require('ninejs/core/i18n!../i18n.json');
    var Help = (function (_super) {
        __extends(Help, _super);
        function Help() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.skin = Help_1.default;
            return _this;
        }
        Help.prototype.loadHelp = function (helpNode) {
            var node;
            var template = helpNode;
            var fn = helpNode;
            var w = helpNode;
            if (template && (typeof (template.compileDom) === 'function')) {
                fn = template.compileDom(true);
            }
            if (typeof (fn) === 'function') {
                node = fn({ config: config_1.default, i18n: function (v) { return i18n[v] || ''; } }).domNode;
            }
            else if (w && w.domNode) {
                node = w.domNode;
            }
            setText_1.default.emptyNode(this.helpContent);
            if (!helpNode) {
                return null;
            }
            return append_1.default(this.helpContent, node);
        };
        return Help;
    }(Widget_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Help;
});
//# sourceMappingURL=Help.js.map