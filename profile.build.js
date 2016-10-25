/* jshint unused: false */
'use strict';
var amdExclude = [
	'coverage', 
	'node_modules', 
	'Gruntfile.js', 
	'tests/'
];
var amdIgnore = [
	'9js.config.json',
	'tsconfig.json',
	'tsd.json',
	'mainContainer/Gruntfile',
	'mainContainer/profile.build',
	'mainContainer/module',
	'mainContainer/MainContainer'
];

var profile = {
	resourceTags: {
		ignore: function(filename, mid) {
			var t = (/node_modules/).test(mid);
			if (!t) {
				var cnt, excluded = !(/\.js(on)?$/).test(filename);
				for (cnt=0;(cnt < amdIgnore.length) && !excluded; cnt += 1){
					if (mid.indexOf(amdIgnore[cnt]) === 0) {
						excluded = true;
					}
				}
				t = excluded;
			}
		
			return t;
		},
		amd: function (filename/*, mid*/) {
			var cnt, excluded = !(/\.js$/).test(filename);
			for (cnt=0;(cnt < amdExclude.length) && !excluded; cnt += 1){
				if (filename.indexOf(amdExclude[cnt]) >= 0) {
					excluded = true;
				}
			}
			return !excluded;
		}
	}
};