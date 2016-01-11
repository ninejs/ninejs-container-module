/// <amd-dependency path="ninejs/core/i18n!../i18n.json" />

'use strict';
import Help from './Help'
import config from 'ninejs/config'
import { when } from 'ninejs/core/deferredUtils'
import Widget from 'ninejs/ui/Widget'
import defaultSkin from './Skin/MainContainer'
import append from 'ninejs/ui/utils/append'
import setClass from 'ninejs/ui/utils/setClass'
import setText from 'ninejs/ui/utils/setText'
import { default as MenuItem, MenuItemArgs } from './MenuItem'
import Skin from 'ninejs/ui/Skin';
import { Router } from 'ninejs/client/router'

declare var require: any;
let i18nResource = require('ninejs/core/i18n!../i18n.json');


function i18n (n: string) {
	return i18nResource.resource[n] || n;
}
function addContent (parent: HTMLElement, w: Widget, idx?: number) {
	var parentContainer = parent;
	if (typeof(idx) === 'number')  {
		when(w.show(), function () {
			var current = parentContainer.firstChild,
				cnt = 0;
			while ((cnt < idx) && current) {
				cnt += 1;
				current = current.nextSibling;
			}
			if (!current) {
				when (w.domNode, (domNode) => {
					parentContainer.appendChild(domNode);
				});
			}
			else {
				when (w.domNode, (domNode) => {
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
			let domNode = w.domNode as HTMLElement;
			append.remove(domNode);
		}
	};
}

export interface ParentContainer {
	set: (prop: string, obj: any) => void;
}

class MainContainer extends Widget {
	skin: Skin;
	i18n: (name: string) => string = i18n;
	config: any = config;
	auth: { logout: () => void };
	router: Router;
	slimScroll: HTMLElement;
	mainMenuNode: HTMLElement;
	header: HTMLElement;
	footer: HTMLElement;
	parentContainer: ParentContainer;
	Content: HTMLElement;
	content: Widget;
	helpWidget: Help;
	frameMode: string;
	mainMenuMap: { [name: string]: { node: HTMLElement, items: MenuItem[] }};
	fixResize () {
		this.slimScroll.style.height = (window.innerHeight - this.header.clientHeight - this.footer.clientHeight - this.slimScroll.offsetTop) + 'px';
	}
	onUpdatedSkin () {
		super.onUpdatedSkin();
		this.addMenu('mainMenu', this.mainMenuNode);
	}
	activate () {
		this.parentContainer.set('selected', this);
	}
	toggleCollapseSidebar () {
		let domNode = this.domNode as HTMLElement;
		setClass(domNode, '~sidebar-collapsed');
	}
	addContent (content: Widget, idx?: number) {
		return addContent(this.Content, content, idx);
	}
	addMenu (menuId: string, node: HTMLElement) {
		this.mainMenuMap[menuId] = { node: node, items: [] };
	}
	addMenuItem (menuId: string, item: MenuItemArgs, parentNode?: HTMLElement) {
		var menuItem = new MenuItem(item),
			self = this,
			cl: string[] = [];
		if (!parentNode) {
			parentNode = this.mainMenuMap[menuId].node;
			this.mainMenuMap[menuId].items.push(menuItem);
			cl.push('root-level');
		}
		var domNode = menuItem.show(parentNode),
			children = (menuItem.children || []);
		if (children.length) {
			cl.push('has-sub');
			when(domNode, function (domNode) {
				cl.forEach(function (c) {
					setClass(domNode, c);
				});
				setClass(domNode, 'has-sub');
				children.forEach(function (child: MenuItem) {
					self.addMenuItem(menuId, child, domNode);
				});
			});
		}
		return menuItem;
	}
	contentSetter (content: Widget) {
		var old = this.content;
		if (this.content) {
			this.content.emit('deactivating', {});
		}
		setText.emptyNode(this.Content);
		if (old) {
			old.emit('deactivated', {});
		}
		this.content = content;
		content.show(this.Content);
		this.content.emit('activated', {});
	}
	logoClick () {
		this.router.go('/', false);
	}
	logout () {
		this.auth.logout();
		this.router.go('/login', false);
	}
	constructor (args: any) {
		super(args);
		this.helpWidget = new Help({});
		this.mainMenuMap = {};
	}
}

MainContainer.prototype.skin =  defaultSkin;
export default MainContainer