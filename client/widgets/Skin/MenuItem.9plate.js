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
    v,
    _0 = 	function () {
/* Here starts a live expression */ 
node = e(node,'span',node.ownerDocument);
av = '';
putValue = context['textClass'];
if (putValue !== undefined){
	av = putValue;

} else {
	av = '';

}
node.className = av;
txn = t(node,'',node.ownerDocument);
putValue = context['text'];
if (((putValue !== undefined)) && (putValue !== null)){
	if (putValue['$njsWidget']){
		putValue.show(node);

	} else 	if (putValue.domNode){
		node.appendChild(putValue.domNode);

	}
 else 	if (putValue.tagName){
		node.appendChild(putValue);
		txn = t(node,'',node.ownerDocument);

	}
 else 	if ((putValue !== undefined)){
		txn.nodeValue = txn.nodeValue + ((putValue !== undefined)? putValue:'');

	}


}
return node;
/* Here ends the live expression */ 

},
    _1,
    _2;
if (!document){
	document = window.document;

}
node = document.createElement('li');
nodes.push(node);
av = '';
putValue = context['key'];
if (putValue !== undefined){
	av = putValue;

} else {
	av = '';

}
node.setAttribute('data-tabKey',av);
nodes.push(node);
node = e(node,'a',node.ownerDocument);
av = '';
putValue = context['anchorClass'];
if (putValue !== undefined){
	av = putValue;

} else {
	av = '';

}
node.className = av;
nodes.push(node);
node = e(node,'i',node.ownerDocument);
av = '';
putValue = context['icon'];
if (av !== ''){
	av = av + ((putValue) || '');

} else {
	av = ((putValue) || '');

}
av = av + ' ';
putValue = context['iconClass'];
if (av !== ''){
	av = av + ((putValue) || '');

} else {
	av = ((putValue) || '');

}
node.className = av;
node = nodes.pop();
nodes.push(node);
_1 = _0();
/* Add trigger events here */ 
_2 = 	function () {
	var freeze = {},
	    freezeNode = _1,
	    wfn = 		function (name,oldValue,newValue) {
		var temps = {},
		    t,
		    p;
		if (!(oldValue === newValue)){
			for (p in freeze){
			if (freeze.hasOwnProperty(p)) {
				temps[p] = context[p];
				context[p] = freeze[p];

			}
			}			t = _0();
			freezeNode.parentNode.replaceChild(t,freezeNode);
			freezeNode = t;
			for (p in freeze){
			if (freeze.hasOwnProperty(p)) {
				context[p] = temps[p];

			}
			}
		}

};
	return wfn;

};
ctxTemp = context;
if (ctxTemp.watch){
	ctxTemp.watch('text',_2());

}
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'ul',node.ownerDocument);
attachTemp = r['childrenContainer'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['childrenContainer'] = [attachTemp,node];

	}

} else {
	r['childrenContainer'] = node;

}
node = nodes.pop();
node = nodes.pop();
r.domNode = node;
return r;

};
module.exports = r;	});
