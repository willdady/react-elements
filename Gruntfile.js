
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

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
          'expand': true,
          'cwd': 'src/',
          'src': ['**/*.js', '**/*.jsx', '!**/main.js', '!**/stories/*.js'],
          'dest': 'dist/',
          'ext': '.js'
        }]
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.scss', '!mixins.scss'],
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
          require('autoprefixer')({browsers: 'last 3 versions'})
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
    }

  });

  grunt.registerTask('default', ['clean', 'babel', 'sass:dist', 'postcss', 'copy']);
  grunt.registerTask('build', ['default']);
};
