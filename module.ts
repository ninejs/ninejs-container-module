'use strict';
import { define } from 'ninejs/modules/moduleDefine'
import MainContainer from './MainContainer'

export default define(['ninejs', 'webserver'], function (provide) {
	provide('ninejs/mainContainer', function (config, ninejs, webserver) {
		var admin = new MainContainer(config, ninejs, webserver);
		return admin;
	});
});
