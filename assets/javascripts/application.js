// JSLint settings:
/*global
  alert,
  console,
  jQuery,
  Zepto
*/

var APP = (function($, window, document, undefined) {
  $(document).ready(function() {
    APP.go();
  });

  // "Private constant" vars.
  var body;

  return {
    // APP.go
    go: function() {
      var i, j = APP.init;

      for (i in j) {
        // Run everything in APP.init
        j.hasOwnProperty(i) && j[i]();
      }
    },
    // APP.init
    init: {
      // APP.init.assign_dom_vars
      assign_dom_vars: function() {
        body = $(document.body);
      }
    },
    // APP.util
    util: {
      // APP.util.do_something
      do_something: function() {
        // Not run on page load, but used later?
      }
    }
  };

// Parameters: Zepto/jQuery, window, document.
})(typeof Zepto === 'function' ? Zepto : jQuery, this, this.document);