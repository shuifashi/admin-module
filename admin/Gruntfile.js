module.exports = function(grunt) {
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       log: {
          foo: [1, 2, 3],
          bar: 'hello world',
          baz: false
},

       sass: {
       	 tests: {
       	 	expand: true,
       	 	cwd: 'src/sass/',
       	 	src: ['*.sass'],
       	 	dest: 'build/sass',
       	 	ext: '.css'
       	 }
       },
       
       livescript: {
       	 des: {
       	 	expand: true,
       	 	cwd: 'src/ls/',
       	 	src: ['*.ls'],
       	 	dest: 'build/js',
       	 	ext: '.js'
       	 }
       },

       jade: {
       	 tests: {
       	 	expand: true,
       	 	cwd: 'src/jade/',
       	 	src: ['*.jade'],
       	 	dest: 'build/html',
       	 	ext: '.html'
       	 }
       }
});
     grunt.loadNpmTasks('grunt-livescript');
     grunt.loadNpmTasks('grunt-sass');
     grunt.loadNpmTasks('grunt-contrib-jade');


     grunt.registerTask('default', ['jade', 'sass', 'livescript']);
};

