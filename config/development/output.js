const path = require('path');
const output = require('../base/output');

output.path = undefined;
output.pathinfo = true;
output.filename = 'static/js/bundle.js';
output.chunkFilename = 'static/js/[name].chunk.js';
output.devtoolModuleFilenameTemplate = (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'));

module.exports = output;
