'use strict';
import { define } from 'ninejs/modules/moduleDefine'
import { default as MainContainer, Modal } from './MainContainer'

export { Modal };

export default define(['router', 'singlePageContainer', 'ninejs/auth', 'container'], function (provide) {
	provide('ninejs/mainContainer', function (config, router, frame, auth, container) {
		var admin = new MainContainer(config, router, frame, auth, container);
		return admin;
	});
});