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
    "leaflet"                   : "ext/leaflet",
    "angular-leaflet-directive" : "ext/angular-leaflet-directive.min",
  },

  shim: {
    "leaflet": {
      "deps": [
        "angular"
      ],
      "exports": "L"
    },
    "angular-leaflet-directive": [
      "angular",
      "leaflet"
    ],
    "angular-leaflet-directive": [
        "angular"
    ],
    "angular-route": [
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

  deps: ['app']

});
