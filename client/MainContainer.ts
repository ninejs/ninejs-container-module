/// <amd-dependency path="jQuery/jquery" name="jQuery" />
'use strict';
import Properties from 'ninejs/core/ext/Properties'
import Evented from 'ninejs/core/ext/Evented'
import MainContainer from './widgets/MainContainer'
import { when, defer, resolve, PromiseType } from 'ninejs/core/deferredUtils'
import { Router } from 'ninejs/client/router'
import Frame from 'ninejs/modules/client/FullScreenFrame'
import { Container } from 'ninejs/modules/client/container'
import { Widget } from 'ninejs/ui/Widget'
import { MenuItemArgs } from './widgets/MenuItem'
import append from 'ninejs/ui/utils/append'
import setClass from 'ninejs/ui/utils/setClass'

declare var jQuery: any;

export interface Modal {
	modal: any;
	show: (args: any, contentArgs: any) => void;
	close: () => void;
}

class MainContainerUnit extends Properties {
	config: any;
	mainContainer: MainContainer;
	Content: HTMLElement;
	domNode: HTMLElement;
	init: () => any;
	modals: { [name: string]: Modal };
	on(type: string, listener: (e: any) => any) {
		return Evented.on(type, listener);
	}
	emit(type: string, data: any) {
		return Evented.emit(type, data);
	}
	addContent (content: Widget, idx?: number) {
		return this.mainContainer.addContent.apply(this.mainContainer, arguments);
	}
	activate () {
		return this.mainContainer.activate.apply(this.mainContainer, arguments);
	}
	addMenu (menuId: string, node: HTMLElement) {
		return this.mainContainer.addMenu.apply(this.mainContainer, arguments);
	}
	addMenuItem (menuId: string, item: MenuItemArgs, parentNode?: HTMLElement) {
		return this.mainContainer.addMenuItem.apply(this.mainContainer, arguments);
	}
	contentSetter (content: Widget) {
		var p = ['content'].concat(Array.prototype.slice.call(arguments, 0));
		return this.mainContainer.set.apply(this.mainContainer, p);
	}
	addModal (name: string, content: Widget) : Modal {
		let div = setClass(append(window.document.body, 'div'), 'modal', 'fade', 'in');
		content.show(div);
		div.style.display = 'none';
		let modal = jQuery(div);
		let r: Modal = {
			modal: modal,
			show: (args: any, contentArgs: any) => {
				let widget: any = content;
				let d: PromiseType<any>;
				if (typeof(widget.load) === 'function') {
					d = resolve(widget.load(contentArgs));
				}
				else {
					d = resolve(true);
				}
				return d.then(() => {
					modal.modal('show', args);
				});
			},
			close: () => {
				modal.modal('close', {});
			}
		};
		this.modals[name] = r;
		return r;
	}
	getModal (name: string) : Modal {
		return this.modals[name];
	}
	constructor (config: any, router: Router, frame: Frame, auth: any, container: Container) {
		super(config);
		this.modals = {};
		this.config = config;
		let singlePageContainer = frame,
				self = this;
		let mainContainer = new MainContainer({ router: router, config: config, auth: auth, frameMode: config.frameMode || 'flexFrame' });
		this.mainContainer = mainContainer;
		let loadDefer = defer();
		let loadPromise = loadDefer.promise;
		mainContainer.show().then((domNode) => {
			singlePageContainer.addChild(mainContainer);
			container.setContainer('footer', mainContainer.footer);
			container.setContainer('header', mainContainer.header);
			this.Content = mainContainer.Content;
			self.domNode = domNode;

			mainContainer.on('updatedSkin', function () {
				loadDefer.resolve(true);
			});
		});

		this.init = () => {
			return loadPromise;
		}
	}
}

export default MainContainerUnit;