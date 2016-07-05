
module.exports = function (wallaby) {
    return {

        files: [

            {pattern: 'packages/**/*.ts'},
            {pattern: 'packages/**/test/specs/*.spec.ts',  ignore:true},
            {pattern: 'packages/**/test/*.spec.ts',  ignore:true},
            {pattern: 'typings/**/*.ts'}
        ],
        tests: [
            {pattern: 'packages/**/test/*.spec.ts'},
            {pattern: 'packages/**/test/specs/*.spec.ts'}
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