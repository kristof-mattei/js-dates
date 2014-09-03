module.exports = function(grunt) {
    // Do grunt-related things in here

    grunt.initConfig(
        {
            jasmine: {
                test: {
                    // src: 'scripts/*.js',
                    options: {
                        specs: 'test/*.spec.js'
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask("default", ["jasmine"]);
};