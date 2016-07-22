/**
 * Created by rolly_000 on 7/12/2016.
 */

var camelCase = require('lodash.camelcase');
var upperFirst = require('lodash.upperfirst');

module.exports= {
    entry: "./app/app.js",
    output: {
        path: __dirname + "/www/build/js",
        filename: "app-bundle.js"
    },
    target: 'web',
    devtool: 'source-map',
    externals:['cordova',resolveExternals]
};

function resolveExternals(context, request, callback) {
    return meteorPack(request, callback) ||
        cordovaPlugin(request, callback) ||
        callback();
}

function meteorPack(request, callback) {
    var match = request.match(/^meteor\/(.+)$/);
    var pack = match && match[1];

    if (pack) {
        callback(null, 'window.Package && Package["' + pack + '"]' );
        return true;
    }
}

function cordovaPlugin(request, callback) {
    var match = request.match(/^cordova\/(.+)$/);
    var plugin = match && match[1];

    if (plugin) {
        plugin = camelCase(plugin);
        plugin = upperFirst(plugin);
        callback(null, 'window.cordova && cordova.plugins && cordova.plugins.' + plugin);
        return true;
    }
}
