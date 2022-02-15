#!/usr/bin/env node

// Disables code splitting into chunks
// See https://github.com/facebook/create-react-app/issues/5306#issuecomment-433425838

const rewire = require("rewire");
const defaults = rewire("react-scripts/scripts/build.js");
let config = defaults.__get__("config");


// Avoid minification
config.optimization.minimize = false

config.plugins[0].options.minify = {
  removeComments: false,
  collapseWhitespace: false,
  removeRedundantAttributes: false,
  useShortDoctype: false,
  removeEmptyAttributes: false,
  removeStyleLinkTypeAttributes: false,
  keepClosingSlash: false,
  minifyJS: false,
  minifyCSS: false,
  minifyURLs: false
}

// Consolidate chunk files instead
config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};
// Move runtime into bundle instead of separate file
config.optimization.runtimeChunk = false;
