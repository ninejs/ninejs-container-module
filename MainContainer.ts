'use strict';
import Evented from 'ninejs/core/ext/Evented'
import { NineJs } from 'ninejs/modules/ninejs-server'
import WebServer from 'ninejs/modules/webserver/WebServer'
import path = require('path')


class MainContainer {
	config: any;
	ninejs: NineJs;
	server: WebServer;
	constructor (config: any, ninejs: NineJs, server: WebServer) {
		this.config = config;
		this.ninejs = ninejs;
		this.server = server;
	}
	init () {
		this.server.clientSetup((utils) => {
			utils.addAmdPath('mainContainer/client', path.resolve(__dirname, 'client'));
			utils.addAmdPath('bootstrap', path.resolve(__dirname, 'node_modules', 'bootstrap', 'dist'));
			utils.addAmdPath('jQuery', path.resolve(__dirname, 'node_modules', 'jquery', 'src'));
			utils.addBoot('jQuery/jquery');
			utils.addAmdPath('jqueryui', path.resolve(__dirname, 'node_modules', 'jquery-ui', 'js'));
			utils.addModule('mainContainer/client/module', { 'ninejs/mainContainer': { }});
		});
	}
}
export default MainContainer;