module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      less: {
        files: ['less/*.less'],
        tasks: ['less', 'autoprefixer']
      },
      jsx: {
        files: ['jsx/*.jsx'],
        tasks: ['react', 'browserify']
      },
      browserify: {
        files: ['demo.js'],
        tasks: ['browserify']
      }
    },
    less: {
      dist: {
        files: {
          "build/bundle.css": "less/*.less",
          "css/media_object.css": "less/media_object.less",
          "css/floating_label_input.css": "less/floating_label_input.less",
          "css/tags_input.css": "less/tags_input.less"
        }
      },
    },
    autoprefixer: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css/'
      }
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
  grunt.loadNpmTasks('grunt-autoprefixer');
  // Default task(s).
  grunt.registerTask('default', ['less', 'autoprefixer', 'react', 'browserify']);

};
