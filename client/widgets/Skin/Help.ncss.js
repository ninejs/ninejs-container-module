define(['ninejs/css', 'ninejs/config'], function(style, config) {
var result = {path:"../../../client/widgets/Skin/Help.css",children:[]};
result.data = "\n"; 
if (config.default.applicationUrl) { result.path = config.default.applicationUrl + result.path; }

return style.style(result);
});