/// <amd-dependency path="ninejs/core/i18n!../i18n.json" />
'use strict';

import append from 'ninejs/ui/utils/append'
import config from 'ninejs/config'
import setText from 'ninejs/ui/utils/setText'
import defaultSkin from './Skin/Help'
import Widget from 'ninejs/ui/Widget'
import Skin from 'ninejs/ui/Skin'
import { Template } from 'ninejs/nineplate'

declare var require: any;

let i18n = require('ninejs/core/i18n!../i18n.json');



class Help extends Widget {
	skin: Skin = defaultSkin;
	helpContent: HTMLElement;
	loadHelp (helpNode: HTMLElement | Widget | Template | Function) {
		var node: HTMLElement;
		let template: Template = helpNode as Template;
		let fn: Function = helpNode as Function;
		let w: Widget = helpNode as Widget;
		if (template && (typeof(template.compileDom) === 'function')) {
			fn = template.compileDom(true);
		}
		if (typeof(fn) === 'function') {
			node = fn({ config: config, i18n: function(v: string) { return i18n[v] || ''; } }).domNode;
		}
		else if (w && w.domNode) {
			node = w.domNode as HTMLElement;
		}
		setText.emptyNode(this.helpContent);
		if (!helpNode) {
			return null;
		}
		return append(this.helpContent, node);
	}
}

export default Help