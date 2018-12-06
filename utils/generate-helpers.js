// Extracted from the polymer-build library. Please keep this file in a "postinstall" script.
// https://github.com/Polymer/tools/blob/f33b658/packages/build/scripts/generate-helpers.js
const babelCore = require('@babel/core');
const path = require('path');
const fs = require('fs');

const helperWhitelist = require('./helper-whitelist');

const babelPresetMinify = require('babel-preset-minify')(
	{},
	{simplifyComparisons: false}
);

minifyAndWriteJs(
	babelCore.buildExternalHelpers(helperWhitelist),
	'babel-helpers.min.js'
);

/**
 * @param {string} js
 * @param {string} filename
 */
function minifyAndWriteJs(js, filename) {
	const output = babelCore.transform(js, {
		presets: [babelPresetMinify]
	}).code;
	const vendor = path.join(__dirname, '..', 'src', 'vendor');
	try {
		fs.mkdirSync(vendor);
	} catch (e) {
		/* don't care */
	}
	fs.writeFileSync(path.join(vendor, filename), output, {
		encoding: 'utf-8'
	});
}
