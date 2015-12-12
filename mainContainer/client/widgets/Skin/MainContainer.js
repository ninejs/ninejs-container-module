(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "jQuery/jquery", "./MainContainer.9plate", "./MainContainer.ncss", "../../resources/css/core.ncss", "../../resources/css/forms.ncss", "../../resources/css/theme.ncss", "../../resources/css/entypo.ncss", "../../resources/css/font-awesome.ncss", 'ninejs/ui/Skin', 'ninejs/ui/utils/setClass', 'ninejs/core/on', 'ninejs/ui/bootstrap/bootstrap'], factory);
    }
})(function (require, exports) {
    'use strict';
    var Skin_1 = require('ninejs/ui/Skin');
    var setClass_1 = require('ninejs/ui/utils/setClass');
    var on_1 = require('ninejs/core/on');
    var bootstrap_1 = require('ninejs/ui/bootstrap/bootstrap');
    var template = require('./MainContainer.9plate');
    var css = require('./MainContainer.ncss');
    ['../../resources/css/core.css!enable',
        '../../resources/css/forms.css!enable',
        '../../resources/css/theme.css!enable',
        '../../resources/css/entypo.css!enable',
        '../../resources/css/font-awesome.css!enable'
    ].map(require).forEach(function (m) {
        m.enable();
    });
    bootstrap_1.default.enable('vresponsive');
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Skin_1.default({
        cssList: [css],
        template: template,
        updated: function (control) {
            var act = function () {
                setClass_1.default(window.document.body, 'page-fade', 'page-body');
            };
            var deact = function () {
                setClass_1.default(window.document.body, '!page-fade', '!page-body');
            };
            control.own(control.on('njsActivated', act), on_1.default(control.domNode, 'njsActivated', act), control.on('njsDeactivated', deact), on_1.default(control.domNode, 'njsDeactivated', deact));
        }
    });
});
//# sourceMappingURL=MainContainer.js.map