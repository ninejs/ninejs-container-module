/// <amd-dependency path="jQuery/jquery" />
/// <amd-dependency path="./MainContainer.9plate" />
/// <amd-dependency path="./MainContainer.ncss" />
/// <amd-dependency path="../../resources/css/core.ncss" />
/// <amd-dependency path="../../resources/css/forms.ncss" />
/// <amd-dependency path="../../resources/css/theme.ncss" />
/// <amd-dependency path="../../resources/css/entypo.ncss" />
/// <amd-dependency path="../../resources/css/font-awesome.ncss" />

'use strict';

import Skin from 'ninejs/ui/Skin'
import Widget from 'ninejs/ui/Widget'
import setClass from 'ninejs/ui/utils/setClass'
import on from 'ninejs/core/on'
import bootstrap from 'ninejs/ui/bootstrap/bootstrap'

declare var require: any;

let template = require ('./MainContainer.9plate');
let css = require('./MainContainer.ncss');

[	'../../resources/css/core.ncss',
	'../../resources/css/forms.ncss',
	'../../resources/css/theme.ncss',
	'../../resources/css/entypo.ncss',
	'../../resources/css/font-awesome.ncss'
].map(require).forEach(function (m: any) {
	m.enable();
});


bootstrap.enable('vresponsive');
export default new Skin({
	cssList: [css],
	template: template,
	updated: function(control: Widget) {
		var act = function() {
			setClass(window.document.body, 'page-fade', 'page-body');
		};
		var deact = function() {
			setClass(window.document.body, '!page-fade', '!page-body');
		};
		control.own(
			control.on('njsActivated', act),
			on(control.domNode, 'njsActivated', act),
			control.on('njsDeactivated', deact),
			on(control.domNode, 'njsDeactivated', deact)
		);
	}
})