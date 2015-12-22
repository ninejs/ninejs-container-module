/*
 * ninejs grunt configuration file
 */
function exports(grunt) {
	'use strict';

	var tsfiles = ['**/*.ts', '!**/*.d.ts', '!node_modules/**/*.ts', '!**/node_modules/**/*.ts'],
		stylusFiles = [ '**/*.styl', '!node_modules/**' ];

	require('load-grunt-tasks')(grunt);
	// Project configuration.
	grunt.initConfig({
		ts: {
			serverCheck : {
				tsconfig: './tsconfig.json',
				options: {
					"compiler": "./node_modules/typescript/bin/tsc",
					"noEmit": true
				}
			},
			server : {
				tsconfig: './tsconfig.json',
				options: {
					"compiler": "./node_modules/typescript/bin/tsc",
					"noResolve": true,
					"declaration": true,
					"failOnTypeErrors": false
				}
			},
			clientCheck: {
				tsconfig: './client/tsconfig.json',
				options: {
					"compiler": "./node_modules/typescript/bin/tsc",
					"noEmit": true
				}
			},
			client: {
				tsconfig: './client/tsconfig.json',
				options: {
					"compiler": "./node_modules/typescript/bin/tsc",
					"noResolve": true,
					"declaration": true,
					"failOnTypeErrors": false
				}
			}
		},
		tsd: {

		},
		stylus:
		{
			files: stylusFiles,
			options:
			{
				urlfunc: 'url', // use embedurl('test.png') in our code to trigger Data URI
				compress: true
			}
		},
		nineplate: {
			html: {
				mode: 'html',
				pattern: '\\.html$',
				src: [
					'client'
				]
			},
			css: {
				mode: 'css',
				pattern: '\\.css$',
				extension: 'ncss.js',
				sizeLimit: 100000,
				src: [
					'client'
				]
			}
		}
	});

	grunt.registerTask('tsd','Install TypeScript definitions', function() {
		var done = this.async(),
			command = 'node',
			path = require('path'),
			cliPath = path.resolve(__dirname, 'node_modules', 'tsd', 'build', 'cli.js');

		var childProcess = require('child_process');
		var tsdProcess = childProcess.spawn(command, [cliPath, 'install'], { stdio: 'inherit' });
		tsdProcess.on('exit', function(code) {
			done(code);
		});
	});

	var childProcess = require('child_process'),
			path = require('path');

	grunt.registerMultiTask('nineplate', 'Generates nineplate and css functions', function () {
		console.log('Running nineplate ');
		var done = this.async();
		var files = this.filesSrc;
		var pattern = '';
		var extension = '';
		var data = this.data;
		if (this.data.pattern) {
			pattern = ' --pattern=' + this.data.pattern;
		}
		if (this.data.extension) {
			extension = ' --extension=' + this.data.extension;
		}

		console.log('nineplate ' + files.length + ' files');

		files.forEach(function(file) {
			var cmdline = 'node ./node_modules/ninejs/bin/nineplate ' + file + ' --target=amd --toBase64 --sizeLimit=' + (data.sizeLimit || 50000) + ' --css --baseUrl=' + path.resolve(process.cwd(), '9js', 'modules', 'hexagon') + pattern + extension;
			console.log(cmdline);
			childProcess.execSync(cmdline, {
				stdio: 'inherit'
			});
		});
		done();
	});

	// Default task.
	grunt.registerTask('default', ['tsd', 'stylus', 'nineplate', 'ts']);

}

module.exports = exports;