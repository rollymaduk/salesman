
module.exports = function (wallaby) {
    return {

        files: [

            {pattern: 'library/**/*.ts'},
            {pattern: 'library/**/test/specs/*.spec.ts',  ignore:true},
            {pattern: 'library/**/test/*.spec.ts',  ignore:true},
            {pattern: 'typings/**/*.ts'}
        ],
        tests: [
            {pattern: 'library/**/test/*.spec.ts'},
            {pattern: 'library/**/test/specs/*.spec.ts'}
        ],
        debug: true,
        maxConsoleMessagesPerTest: 10000,
        env:{
            type:'node'
        },
        setup:()=>{
            require('testdouble').reset();
        }
    };
};