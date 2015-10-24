
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  var webpackConfig = require('./webpack.config');

  grunt.initConfig({

    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/ColorPicker.js': 'src/ColorPicker.js',
          'dist/FloatingLabelinput.js': 'src/FloatingLabelinput.js',
          'dist/Switch.js': 'src/Switch.js',
          'dist/TagsInput.js': 'src/TagsInput.js',
          'dist/VimeoVideo.js': 'src/VimeoVideo.js',
          'dist/YoutubeVideo.js': 'src/YoutubeVideo.js',
        }
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

    webpack: {
      app: webpackConfig
    }

  });

  grunt.registerTask('default', ['babel', 'sass:dist', 'postcss',]);
}
