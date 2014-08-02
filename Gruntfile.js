module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      less: {
        files: ['less/*.less'],
        tasks: ['less']
      },
      jsx: {
        files: ['jsx/*.jsx'],
        tasks: ['react', 'browserify']
      }
    },
    less: {
      dist: {
        files: {
          "build/bundle.css": "less/*.less",
          "css/media_object.css": "less/media_object.less",
          "css/slider.css": "less/slider.less",
          "css/floating_label_input.css": "less/floating_label_input.less",
        }
      },
    },
    browserify: {
      dist: {
        files: {
          'build/bundle.js': ['demo.js'],
        },
        options: {

        }
      }
    },
    react: {
      dynamic_mappings: {
        files: [{
          expand: true,
          cwd: 'jsx/',
          src: ['**/*.jsx'],
          dest: '.',
          ext: '.js'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['less', 'react', 'browserify']);

};
