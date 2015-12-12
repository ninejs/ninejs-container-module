(function (deps, factory) { 
	if (typeof module === 'object' && typeof module.exports === 'object') { 
		var v = factory(require, exports); if (v !== undefined) module.exports = v; 
	} 
	else if (typeof define === 'function' && define.amd) { 
		define(deps, factory); 
	} 
})(['require', 'module', 'ninejs/_nineplate/utils/functions','ninejs/_nineplate/utils/functions'], function (require, module) {
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
node = e(node,'strong',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
putValue = context['auth']['data']['username'];
txn.nodeValue = txn.nodeValue + ((putValue !== undefined)? putValue:'');
return node;
/* Here ends the live expression */ 

},
    _1,
    _2;
if (!document){
	document = window.document;

}
node = document.createElement('div');
nodes.push(node);
av = '';
av = av + 'page-container tableFrame';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'sidebar-menu';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'sidebar-menu-inner';
node.className = av;
nodes.push(node);
node = e(node,'header',node.ownerDocument);
av = '';
av = av + 'logo-env';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'logo';
node.className = av;
nodes.push(node);
node = e(node,'a',node.ownerDocument);
node.addEventListener('click',	function () {
	context.logoClick.apply(context,arguments);

});
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'mainContainerLogo';
node.className = av;
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'sidebar-collapse';
node.className = av;
nodes.push(node);
node = e(node,'a',node.ownerDocument);
av = '';
av = av + 'sidebar-collapse-icon';
node.className = av;
node.addEventListener('click',	function () {
	context.toggleCollapseSidebar.apply(context,arguments);

});
nodes.push(node);
node = e(node,'i',node.ownerDocument);
av = '';
av = av + 'entypo-menu';
node.className = av;
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'sidebar-mobile-menu visible-xs';
node.className = av;
nodes.push(node);
node = e(node,'a',node.ownerDocument);
av = '';
av = av + '#';
node.setAttribute('href',av);
av = '';
av = av + 'with-animation';
node.className = av;
nodes.push(node);
node = e(node,'i',node.ownerDocument);
av = '';
av = av + 'entypo-menu';
node.className = av;
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'ul',node.ownerDocument);
av = '';
av = av + 'main-menu';
node.className = av;
attachTemp = r['mainMenuNode'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['mainMenuNode'] = [attachTemp,node];

	}

} else {
	r['mainMenuNode'] = node;

}
nodes.push(node);
node = e(node,'li',node.ownerDocument);
av = '';
av = av + 'active opened active';
node.className = av;
nodes.push(node);
node = e(node,'a',node.ownerDocument);
node.addEventListener('click',	function () {
	context.logoClick.apply(context,arguments);

});
nodes.push(node);
node = e(node,'i',node.ownerDocument);
av = '';
av = av + 'entypo-gauge';
node.className = av;
node = nodes.pop();
nodes.push(node);
node = e(node,'span',node.ownerDocument);
av = '';
av = av + 'title';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Dashboard';
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'main-content';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'row';
node.className = av;
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'col-md-6 col-sm-8 clearfix';
node.className = av;
nodes.push(node);
node = e(node,'ul',node.ownerDocument);
av = '';
av = av + 'user-info pull-left pull-none-xsm';
node.className = av;
nodes.push(node);
node = e(node,'li',node.ownerDocument);
av = '';
av = av + 'profile-info dropdown';
node.className = av;
nodes.push(node);
node = e(node,'a',node.ownerDocument);
nodes.push(node);
node = e(node,'span',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
putValue = (x = context['i18n'].apply(context,['Welcome']));
txn.nodeValue = txn.nodeValue + ((putValue !== undefined)? putValue:'');
node = nodes.pop();
nodes.push(node);
node = e(node,'span',node.ownerDocument);
av = '';
av = av + 'ml';
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
ctxTemp = ctxTemp['auth'];
ctxTemp = ctxTemp['data'];
if (ctxTemp.watch){
	ctxTemp.watch('username',_2());

}
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'col-md-6 col-sm-4 clearfix hidden-xs';
node.className = av;
nodes.push(node);
node = e(node,'ul',node.ownerDocument);
av = '';
av = av + 'list-inline links-list pull-right';
node.className = av;
nodes.push(node);
node = e(node,'li',node.ownerDocument);
av = '';
av = av + 'sep';
node.className = av;
node = nodes.pop();
nodes.push(node);
node = e(node,'li',node.ownerDocument);
nodes.push(node);
node = e(node,'a',node.ownerDocument);
node.addEventListener('click',	function () {
	context.logout.apply(context,arguments);

});
nodes.push(node);
node = e(node,'span',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
putValue = (x = context['i18n'].apply(context,['Logout']));
txn.nodeValue = txn.nodeValue + ((putValue !== undefined)? putValue:'');
node = nodes.pop();
nodes.push(node);
node = e(node,'i',node.ownerDocument);
av = '';
av = av + 'entypo-logout right';
node.className = av;
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
nodes.push(node);
node = e(node,'hr',node.ownerDocument);
node = nodes.pop();
nodes.push(node);
node = e(node,'div',node.ownerDocument);
av = '';
av = av + 'row';
node.className = av;
attachTemp = r['Content'];
if (attachTemp){
	if (Object.prototype.toString.call(attachTemp) === '[object Array]'){
		attachTemp.push(node);

	} else {
		r['Content'] = [attachTemp,node];

	}

} else {
	r['Content'] = node;

}
node = nodes.pop();
nodes.push(node);
node = e(node,'br',node.ownerDocument);
node = nodes.pop();
nodes.push(node);
node = e(node,'footer',node.ownerDocument);
av = '';
av = av + 'main';
node.className = av;
nodes.push(node);
node = e(node,'span',node.ownerDocument);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + '©';
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + '2015';
node = nodes.pop();
nodes.push(node);
node = e(node,'strong',node.ownerDocument);
av = '';
av = av + 'ml';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'NineJS';
node = nodes.pop();
nodes.push(node);
node = e(node,'span',node.ownerDocument);
av = '';
av = av + 'ml';
node.className = av;
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'by';
node = nodes.pop();
nodes.push(node);
node = e(node,'a',node.ownerDocument);
av = '';
av = av + 'ml';
node.className = av;
av = '';
av = av + 'http://www.eduardoburgos.com/';
node.setAttribute('href',av);
av = '';
av = av + '_blank';
node.setAttribute('target',av);
txn = t(node,'',node.ownerDocument);
txn.nodeValue = txn.nodeValue + 'Eduardo Burgos';
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
node = nodes.pop();
r.domNode = node;
return r;

};
module.exports = r;	});
