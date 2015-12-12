/// <amd-dependency path="./Help.ncss" />
/// <amd-dependency path="./Help.9plate" />

'use strict';

import Skin from 'ninejs/ui/Skin'

declare var require: any;

let css = require ('./Help.ncss');
let template = require ('./Help.9plate');

export default new Skin({
	cssList: [css],
	template: template
})
