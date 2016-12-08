/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'app',
    'routes'
], function (require, ng) {
    'use strict';

    console.log("!domReady");
    require(['domReady!'], function (document) {
    	console.log("domReady!");
        ng.bootstrap(document, ['app']);
    });
});