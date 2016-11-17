/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'admin-forum-ember',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    i18n: {
	   defaultLocale: 'en'
    },
    pace: {
        theme: 'flash',
        /* theme-list:
         barber-shop, big-counter, bounce, center-atom, center-circle, center-radar, center-simple, corner-indicator, fill-left, flash, flat-top, loading-bar, mac-osx, minimal
         */
        color: 'purple' 
        /* color-list:
         black, blue, green, orange, pink, purple, red, silver, white, yellow
         */
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
      ENV.locationType = 'hash' //very important
  }

  return ENV;
};
