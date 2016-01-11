'use strict';

import append from 'ninejs/ui/utils/append'
import { when } from 'ninejs/core/deferredUtils'
import { default as Widget, WidgetArgs } from 'ninejs/ui/Widget'
import defaultSkin from './Skin/MenuItem'
import on from 'ninejs/core/on'
import setClass from 'ninejs/ui/utils/setClass'
import Skin from 'ninejs/ui/Skin';


export interface MenuItemArgs extends WidgetArgs {
	badgeValue?: string | number;
	text?: string;
	action?: (evt: any) => any;
	class?: string;
	key?: string;
	icon?: string;
	anchorClass?: string;
}

class MenuItem extends Widget {
	skin: Skin = defaultSkin;
	anchorClass: string;
	icon: string;
	action: (evt: any) => void;
	caretNode: HTMLElement;
	childrenContainer: HTMLElement;
	children: MenuItem[];
	onUpdatedSkin () {
		super.onUpdatedSkin();
		let domNode = this.domNode as HTMLElement;
		if (this.action) {
			this.own(
				on(domNode, 'click', this.action)
			);
		}
	}
	remove () {
		when (this.domNode, (domNode) => {
			if (domNode.parentNode) {
				domNode.parentNode.removeChild(domNode);
			}
		});
		super.remove();
		return true;
	}

	addSubMenu (/* i18n text key */ text: string, /* {Number} - badge value */ badgeValue: number, tabKey: string, /* on click action */ action: (evt: any) => any, /* class applied to DOM element */ cls: string, /* index position */ index: number){
		var item = new MenuItem({
			badgeValue: badgeValue,
			text: text,
			action: action,
			'class': cls || '',
			key: tabKey
		});
		setClass(this.caretNode, 'fa-caret-right');
		return item.show().then((domNode) => {
			append.toIndex(this.childrenContainer, domNode, index);
			return item;
		});
	}
	constructor (args: MenuItemArgs) {
		super(args);
	}
}
MenuItem.prototype.icon = 'i i-dot';
MenuItem.prototype.anchorClass = 'auto';
export default MenuItem;