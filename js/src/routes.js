define(['./app'], function (app) {
    'use strict';
    return app.config(function($routeProvider) {
        $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mvolzController'
        })
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'mvolzController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })

        .when('/projects', {
            templateUrl: 'pages/projects.html',
            controller: 'projectController'
        })
        // route for the contact page
        .when('/agarioClone', {
            templateUrl: 'pages/agarioClone.html',
            controller: 'contactController'
        });
    });
});