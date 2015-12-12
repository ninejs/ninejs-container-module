'use strict';
import { define } from 'ninejs/modules/moduleDefine'
import MainContainer from './MainContainer'

export default define(['router', 'singlePageContainer', 'ninejs/auth'], function (provide) {
	provide('ninejs/mainContainer', function (config, router, frame, auth) {
		var admin = new MainContainer(config, router, frame, auth);
		return admin;
	});
});