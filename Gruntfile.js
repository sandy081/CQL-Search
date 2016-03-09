module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-antlr4');
    grunt.loadNpmTasks('grunt-npm-install');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        antlr4: {
            cql: {
                grammar: 'grammar/flights/Cql.g4', 
                options: {
                    o: 'dist/cql/generated', //output directory 
                    grammarLevel: {
                        language: 'JavaScript' //generated code language 
                    },
                    flags: [
                        'visitor' //enable visitor generation 
                    ]
                }
            }
        }
    });
    
};