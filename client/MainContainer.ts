'use strict';
import Properties from 'ninejs/core/ext/Properties'
import Evented from 'ninejs/core/ext/Evented'
import MainContainer from './widgets/MainContainer'
import { when, defer } from 'ninejs/core/deferredUtils'
import { Router } from 'ninejs/client/router'
import Frame from 'ninejs/modules/client/FullScreenFrame'
import { Container } from 'ninejs/modules/client/container'

class MainContainerUnit extends Properties {
	config: any;
	mainContainer: MainContainer;
	Content: HTMLElement;
	domNode: HTMLElement;
	init: () => any;
	on(type: string, listener: (e: any) => any) {
		return Evented.on(type, listener);
	}
	emit(type: string, data: any) {
		return Evented.emit(type, data);
	}
	addContent () {
		return this.mainContainer.addContent.apply(this.mainContainer, arguments);
	}
	activate () {
		return this.mainContainer.activate.apply(this.mainContainer, arguments);
	}
	addMenu () {
		return this.mainContainer.addMenu.apply(this.mainContainer, arguments);
	}
	addMenuItem () {
		return this.mainContainer.addMenuItem.apply(this.mainContainer, arguments);
	}
	contentSetter () {
		var p = ['content'].concat(Array.prototype.slice.call(arguments, 0));
		return this.mainContainer.set.apply(this.mainContainer, p);
	}
	constructor (config: any, router: Router, frame: Frame, auth: any, container: Container) {
		super(config);
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