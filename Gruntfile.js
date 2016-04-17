
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  var webpackConfig = require('./webpack.config');

  grunt.initConfig({

    clean: [
      'dist/'
    ],

    babel: {
      options: {
        babelrc: '.babelrc'
      },
      dist: {
        files: [{
          "expand": true,
          "cwd": "src/",
          "src": ["**/*.js", "!**/main.js", "!**/stories/*.js"],
          "dest": "dist/",
          "ext": ".js"
        }]
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },

    postcss: {
      options: {
        map: {
            inline: false,
            annotation: 'dist/css/'
        },

        processors: [
          require('autoprefixer')({browsers: 'last 3 versions'}),
        ]
      },
      dist: {
        src: 'dist/css/*.css'
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'styles/img/',
            src: ['**'],
            dest: 'dist/css/img/',
            filter: 'isFile'
          }
        ]
      }
    },

    webpack: {
      app: webpackConfig
    }

  });

  grunt.registerTask('default', ['clean', 'babel', 'sass:dist', 'postcss', 'copy']);
};
