/// <amd-dependency path="./MenuItem.9plate" />

'use strict';
import Skin from 'ninejs/ui/Skin'

declare var require: any;

let template = require('./MenuItem.9plate');

export default new Skin({
	cssList: [],
	template: template
});