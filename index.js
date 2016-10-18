/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-iframe-resizer',
  init: function(name) {
    this._super.init && this._super.init.apply(this, arguments);

    var assets_path = require('path').join('iframe-resizer','index.js');
    this.treePaths['vendor'] = require.resolve('iframe-resizer').replace(assets_path, '');
  },
  included: function(app) {
    var options = this.app.options.iframeResizerOptions || {enabled: true};
    if (options.enabled) {
      this.app.import('vendor/iframe-resizer/js/iframeResizer.js');
      this.app.import('vendor/iframe-resizer/js/iframeResizer.contentWindow.js');
    }
  }
};
