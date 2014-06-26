module.exports = function(grunt) {
  console.log();
  console.log("    -----------------");
  console.log("Welcome to Spice Boys, home of the Spice Boys, how may I");
  console.log("take your Spiiiiiiice Boys?");
  console.log("    -----------------");
  console.log();
  grunt.initConfig({    
    
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        }
      },
      files: {
        expand: true,
          cwd: 'scss/',
          src: '*.scss',
          dest: 'css/',
          ext: '.css'
      }  
    },

    jshint: {
      all: {
        src: ['**/**.js', '!js/lib/**', '!node_modules/**', '!bower_components/**']
      }
    },

    watch: {
      grunt: { 
        files: ['Gruntfile.js'] 
      },
      js: {
        files: ['**/**.js', '!node_modules/**'],
        tasks: ['jshint']
      },
      sass: {
        files: 'scss/*.scss',
        tasks: ['sass']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'jshint']);
  grunt.registerTask('default', ['watch']);
};