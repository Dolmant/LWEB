module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                  ["babelify", {
                     loose: "all"
                  }]
               ]
            },
            files: {
               // if the source file has an extension of es6 then
               // we change the name of the source file accordingly.
               // The result file's extension is always .js
               "./assets/js/bundle.js": ["./assets/jssource/hightide.js"],
            }
         }
      },
      sass: {
         dist: {
            files: {
               "./assets/css/style.css": ["./assets/scss/style.scss"]
            }
         }
      },

      watch: {
         scripts: {
            files: ["./assets/jssource/*.js", "./assets/scss/*.scss"],
            tasks: ["browserify", "sass"]
         }
      }
   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");
   grunt.loadNpmTasks('grunt-contrib-sass');

   grunt.registerTask("default", ["watch"]);
   grunt.registerTask("build", ["browserify"]);
   grunt.registerTask("build_sass", ["sass"]);
};