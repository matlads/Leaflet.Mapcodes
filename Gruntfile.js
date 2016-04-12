module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-rename');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint:{
            all: [
                'Gruntfile.js',
                'src/<%= pkg.name %>.js'
            ],
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            target: {
                files:[{
                    expand: true,
                    cwd: 'src/',
                    src: ['<%= pkg.name %>.css'],
                    dest: 'dist/',
                    ext: '.min.css'
                }]
            }
        },
        rename: {
            main: {
                files: [
                    {src: 'dist/Leaflet.min.css', dest: 'dist/<%= pkg.name %>.min.css'},
                ]
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['jshint', 'uglify', 'cssmin', 'rename']);
};
