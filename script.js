$(function() {
    // Handler for .ready() called.

    // inital positioning of canvas
    // console.log($("body").css("width"));

    var n = 2016;

    var whiteblue = d3.interpolateRgb("#eee", "steelblue"),
        blueorange = d3.interpolateRgb("steelblue", "orange"),
        orangewhite = d3.interpolateRgb("orange", "#eee"),
        blackred = d3.interpolateRgb("black", "red"),
        redgreen = d3.interpolateRgb("red", "green"),
        ralph1 = d3.interpolateRgb("#703030","#2F343B"),
        ralph2 = d3.interpolateRgb("#2F343B","#7E827A"),
        ralph3 = d3.interpolateRgb("#7E827A","#E3CDA4"),
        ralph4 = d3.interpolateRgb("#E3CDA4","#C77966"),
        ralph5 = d3.interpolateRgb("#C77966","#703030");

    console.log("ralph1",ralph1);

    d3.select("div.bgAnim").selectAll("div")
        .data(d3.range(n))
        .enter().append("div")
        .transition()
        .delay(function(d, i) { return i + Math.random() * n; })
        .ease(d3.easeLinear)
        .on("start", function repeat() {
        d3.active(this)
            .styleTween("background-color", function() { return ralph1; })
          .transition()
            .delay(1200)
            .styleTween("background-color", function() { return ralph2; })
          .transition()
            .delay(1200)
            .styleTween("background-color", function() { return ralph3; })
          .transition()
            .delay(1200)
            .styleTween("background-color", function() { return ralph4; })
          .transition()
            .delay(1200)
            .styleTween("background-color", function() { return ralph5; })
          .transition()
            .delay(1200)
            .on("start", repeat);
        }); 

});

var mvolzApp = angular.module('mvolzApp', ['ngRoute']);

// create the controller and inject Angular's $scope

// configure our routes
mvolzApp.config(function($routeProvider) {
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

    // .when('/knights', {
    //     templateUrl: 'otherSites/knights/index.html'
    //     // controller: 'projectController'
    // })

    // route for the contact page
    .when('/agarioClone', {
        templateUrl: 'pages/agarioClone.html',
        controller: 'contactController'
    });
});

// create the controller and inject Angular's $scope
mvolzApp.controller('mvolzController', function($scope) {
    $scope.message = 'Hey, listen!';
});

mvolzApp.controller('aboutController', function($scope) {
    $scope.message = 'Look!';
});

mvolzApp.controller('projectController', function($scope) {
    $scope.message = 'Wooooow.';
});

mvolzApp.controller('contactController', function($scope) {
    $scope.email = 'MaxwellVolz@gmail';

    $scope.message = 'Contact us! JK. This is just a demo.';
});
