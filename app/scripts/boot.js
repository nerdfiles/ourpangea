require.config({
  baseUrl: "scripts/",
  paths: {
    "angular"                   : "ext/angular",
    "angular-route"             : "ext/angular-route",
    "angularAMD"                : "ext/angularAMD",
    "ngload"                    : "ext/ngload",
    "angular-animate"           : "ext/angular-animate",
    "angular-cookies"           : "ext/angular-cookies",
    "angular-resource"          : "ext/angular-resource",
    "angular-sanitize"          : "ext/angular-sanitize",
    "angular-touch"             : "ext/angular-touch",
    "angular-aria"              : "ext/angular-aria",
    "angular-messages"          : "ext/angular-messages",
    "angular-material"          : "ext/angular-material",
    "leaflet"                   : "ext/leaflet",
    "angular-leaflet-directive" : "ext/angular-leaflet-directive.min",

    "interface"                 : "interface",
    "directives/ngHideAuth"     : "directives/ngHideAuth",
    "directives/ngShowAuth"     : "directives/ngShowAuth",
    "directives/ngSearchAction" : "directives/ngSearchAction",
    "filters/reverse"           : "filters/reverse",

    "routes/setup"              : "routes/setup",
    "routes/authenticate"       : "routes/authenticate",
    "routes/initialize"         : "routes/initialize",
    "routes/secured"            : "routes/secured",

    "firebase"                  : "ext/firebase",
    "angularfire"               : "ext/angularfire"

  },

  shim: {
    "leaflet": {
      "deps": [
        "angular"
      ],
      "exports": "L"
    },
    "lodash": {
      "exports": "_"
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
