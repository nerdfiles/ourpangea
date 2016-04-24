/***
 * @ngdoc overview
 * @description
 * Boot Configuration.
 */

require.config({
  baseUrl: "scripts/",
  paths: {
    "angular"                   : "ext/angular.min",
    "angular-route"             : "ext/angular-route.min",
    "angularAMD"                : "ext/angularAMD.min",
    "ngload"                    : "ext/ngload.min",
    "angular-animate"           : "ext/angular-animate.min",
    "angular-cookies"           : "ext/angular-cookies.min",
    "angular-resource"          : "ext/angular-resource.min",
    "angular-sanitize"          : "ext/angular-sanitize.min",
    "angular-touch"             : "ext/angular-touch.min",
    "angular-aria"              : "ext/angular-aria.min",
    "angular-messages"          : "ext/angular-messages.min",
    "angular-material"          : "ext/angular-material.min",
    "leaflet"                   : "ext/leaflet",
    "angular-leaflet-directive" : "ext/angular-leaflet-directive.min",

    "interface"                 : "interface",
    "directives/ngHideAuth"     : "components/version/ngHideAuth",
    "directives/ngShowAuth"     : "components/version/ngShowAuth",
    "directives/ngSearchAction" : "components/search/ngSearchAction",
    "filters/reverse"           : "components/version/filter-reverse",

    "routes/setup"              : "routes/setup",
    "routes/authenticate"       : "routes/authenticate",
    "routes/initialize"         : "routes/initialize",
    "routes/secured"            : "routes/secured",

    "firebase"                  : "ext/firebase",
    "angularfire"               : "ext/angularfire.min",

    "ramda"                     : "ext/ramda.min"
  },

  shim: {
    "leaflet": {
      "deps": [
        "angular"
      ],
      "exports": "L"
    },
    "angular": {
      "exports": "angular"
    },
    "angular-material": [
      'angular'
    ],
    "angularfire": [
      "angular",
      "firebase"
    ],
    "angular-leaflet-directive": [

      "angular",
      "leaflet"
    ],
    "angular-route": [
        "angular"
    ],
    "angular-aria": [
        "angular"
    ],
    "angular-messages": [
        "angular"
    ],
    "angularAMD": [
        "angular"
    ],
    "ngload": [
        "angularAMD"
    ],
    "angular-animate": [
        "angular"
    ],
    "angular-cookies": [
        "angular"
    ],
    "angular-resource": [
        "angular"
    ],
    "angular-sanitize": [
        "angular"
    ],
    "angular-touch": [
        "angular"
    ]
  },

  deps: ['interface']

});
