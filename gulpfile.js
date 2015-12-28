var elixir = require('laravel-elixir');

  var path = {
      node:       '/node_modules/',
      bower:      '/bower_components/',
      foundation: '/foundation-sites/',
      motionui:   '/motion-ui/',
  };

elixir.config.sourcemaps = process.env.APP_DEBUG;

elixir(function(mix) {
    mix.sass('angodev.scss');

    mix.styles([
      '/public/css/angodev.css'
    ], 'public/css/angodev-final.css', './');

    mix.scripts([
      // vendor
      path.node + 'jquery/dist/jquery.js',
      path.node + 'underscore/underscore.js',
      path.node + 'what-input/what-input.js',

      // foundation core
      path.node + path.foundation + 'js/foundation.core.js',
      path.node + path.foundation + 'js/foundation.util.*.js',
      // foundation plug-ins
      path.node + path.foundation + 'js/foundation.*.js',
      path.node + path.motionui + 'dist/motion-ui.js',
      '/public/js/angodev.js'
    ], 'public/js/angodev-final.js', './');

    mix.version([
      'public/css/angodev-final.css', 'public/js/angodev-final.js'
    ]);
});
