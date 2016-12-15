module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: ['stylesheets/reset.css', 'stylesheets/styles960.css','stylesheets/styles480.css','stylesheets/styles320.css' ],
                dest: 'stylesheets/styles.main.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);

};