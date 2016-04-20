require.config({
  baseUrl: "scripts/",

  // alias libraries paths.  Must set 'angular'
  paths: {
    "angular": "ext/angular",
    "angular-route": "ext/angular-route",
    "angularAMD": "ext/angularAMD",
    "ngload": "ext/ngload",
    "angular-animate": "ext/angular-animate",
    "angular-cookies": "ext/angular-cookies",
    "angular-resource": "ext/angular-resource",
    "angular-sanitize": "ext/angular-sanitize",
    "angular-touch": "ext/angular-touch"
},

  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
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

  // kick start application
  deps: ['app']
});
