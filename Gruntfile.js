module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  var gruntConfig = grunt.file.readJSON('Gruntconfig.json');

  grunt.initConfig({
    cvars: gruntConfig.configVars,
    bower: {
      setup: {
        options: { install: true, copy: false }
      }
    },
    copy: {
      setup: {
        files: [
          {
            cwd: 'bower_components', expand: true, flatten: true,
            dest: '<%= cvars.app %>/<%= cvars.appjs %>/ext/',
            src: gruntConfig.bowerFiles
          },
          {
            cwd: 'bower_components', expand: true, flatten: true,
            dest: '<%= cvars.app %>/<%= cvars.appcss %>/ext/',
            src: gruntConfig.cssFiles
          }
        ]
      },
      build: {
        files: [
          {
            cwd: '<%= cvars.app %>/', expand: true,
            dest: '<%= cvars.build %>/',
            src: gruntConfig.buildFiles
          }
        ]
      },
      deploy: {
        files: [
          {
            cwd: '<%= cvars.build %>/', expand: true,
            dest: '<%= cvars.dist %>/',
            src: ['css/**', 'images/**', 'data/**']
          }
        ]
      }
    },
    clean: {
      options: { force: true },
      build: ['<%= cvars.build %>'],
      deploy: [
        '<%= cvars.dist %>/*'
      ]
    },
    cssmin: {
      build: {
        files: {
          '<%= cvars.build %>/<%= cvars.appcss %>/style.css': [
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            '<%= cvars.app %>/<%= cvars.appcss %>/style.css'
          ]
        }
      }
    },
    preprocess: {
      build: {
        src : '<%= cvars.app %>/index.html',
        dest : '<%= cvars.build %>/index.build.html'
      }
    },
    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          removeEmptyElements: false
        },
        files: [
          { '<%= cvars.build %>/index.html': '<%= cvars.build %>/index.build.html' },
          {
            cwd: '<%= cvars.app %>/view/', expand: true, flatten: false,
            dest: '<%= cvars.build %>/view/',
            src: ['*.html']
          }
        ]
      },
      deploy: {
        options: {
          collapseWhitespace: true
        },
        files: [
          { '<%= cvars.dist %>/index.html': '<%= cvars.build %>/index.html' },
          {
            cwd: '<%= cvars.build %>/js/directive/template/', expand: true, flatten: false,
            dest: '<%= cvars.dist %>/js/directive/template/',
            src: ['*.html']
          },
          {
            cwd: '<%= cvars.build %>/view/', expand: true, flatten: false,
            dest: '<%= cvars.dist %>/view/',
            src: ['*.html']
          }
        ]

      }
    },
    requirejs: {
      build: {
        options: {
          baseUrl: '<%= cvars.app %>/js',
          mainConfigFile: '<%= cvars.app %>/js/main.js',
          removeCombined: true,
          findNestedDependencies: true,
          optimize: 'none',
          dir: '<%= cvars.build %>/js/',
          modules: [
            { name: 'main' },
            {
              name: 'controller/home_ctrl',
              exclude: ['main']
            },
            {
              name: 'controller/matches_ctrl',
              exclude: ['main']
            },
            {
              name: 'controller/match_ctrl',
              exclude: ['main']
            },
            {
              name: 'controller/players_ctrl',
              exclude: ['main']
            },
            {
              name: 'controller/player_ctrl',
              exclude: ['main']
            },
            {
              name: 'controller/teams_ctrl',
              exclude: ['main']
            },
            {
              name: 'controller/team_ctrl',
              exclude: ['main']
            }
          ]
        }
      }
    },
    uglify: {
      deploy: {
        options: {
          preserveComments: 'some'
        },
        files: [
          {
            cwd: '<%= cvars.build %>/js/', expand: true,
            dest: '<%= cvars.dist %>/js/',
            src: ['*.js', 'ext/require.js', 'controller/*.js']
          }
        ]
      }
    },
    jshint: {
      build: {
        options: {
          jshintrc: '<%= cvars.app %>/js/jshintrc.json'
        },
        files: {
          src: [
            '<%= cvars.app %>/js/*.js',
            '<%= cvars.app %>/js/controller/*.js',
            '<%= cvars.app %>/js/directive/*.js',
            '<%= cvars.app %>/js/provider/*.js'
          ]
        }
      }
    },

    watch: {
      www: {
        files: ['<%= cvars.app %>/**/*'],
        tasks: [],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },
    connect: {
      server: {
        livereload: true,
        options: {
          port: gruntConfig.configVars.port,
          base: '<%= cvars.app %>'
        }
      }
    }
  });


  grunt.registerTask('setup', ['bower:setup', 'copy:setup']);


  grunt.registerTask('devel', [
    'connect:server', 'watch:www'
  ]);

  grunt.registerTask('build', [
    'jshint:build',
    'clean:build',
    'preprocess:build',
    'htmlmin:build',
    'cssmin:build',
    'requirejs:build',
    'copy:build'
  ]);


  grunt.registerTask('deploy', [
    'build',
    'clean:deploy',
    'htmlmin:deploy',
    'uglify:deploy',
    'copy:deploy'
  ]);

};
