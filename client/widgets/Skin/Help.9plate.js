(function (factory) {
					if (typeof module === 'object' && typeof module.exports === 'object') { 

						var v = factory(require, exports); if (v !== undefined) module.exports = v; 

					} 

					else if (typeof define === 'function' && define.amd) { 

						define(['require', 'module', 'ninejs/_nineplate/utils/functions'], factory); 

					} 

				})(function (require, module) {
/* jshint -W074 */
/* globals window: true */
'use strict';
var r = function anonymous(context,document
/**/) {
'use strict';
var fn = require('ninejs/_nineplate/utils/functions'),
    r = {},
    nodes = [],
    node,
    att,
    txn,
    attachTemp,
    putValue,
    x,
    ctxTemp,
    y,
    e = (fn.tst()?fn.e:fn.ae),
    ens = (fn.tst()?fn.ens:fn.aens),
    aens = fn.aens,
    a = fn.a,
    t = fn.t,
    av,
    result,
    v;
if (!document){
	document = window.document;

}
node = document.createElement('div');
nodes.push(node);
av = '';
av = av + 'help';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'col-xs-10';
node.className = av;
attachTemp = r['helpContent'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['helpContent'] = [attachTemp,node];

	}

} else {
	r['helpContent'] = node;

}
node = nodes.pop();
node = nodes.pop();
r.domNode = node;
return r;

};
module.exports = r;	});
