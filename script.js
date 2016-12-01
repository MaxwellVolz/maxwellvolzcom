$(function() {
    // Handler for .ready() called.

    // inital positioning of canvas
    // console.log($("body").css("width"));
    d3blocks();

});

$( window ).resize(function() {
  var jumboHeight = $("div.jumbotron").outerHeight() + "px";

  $("div.bgAnim").css("height",jumboHeight);

});

function prepContactPage(){
    $("#emailCopy").on("click",function(e){
        var clipboard = new Clipboard(".copy-button");
        console.info('Text:', e.text);
    });
    

}

function scrollTarget(){
    $(".readMore").on("click",function(){
        var scrollSpot = $(this).attr("data-scrollTar");
        $('html, body').animate({
            scrollTop: $(scrollSpot).offset().top -64
        }, 1000);
    })

    $(".scrollTop").on("click",function(){
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    })
}

function d3blocks(){

    // window.clearTimeout(redrawTimer);
    // mbostock/4248145

    $("div.bgAnim").empty();
    // d3.select(".bgAnim").attr("opacity",0);

    var margin = {top: -20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var randomX = d3.random.normal(width / 2, 80),
        randomY = d3.random.normal(height / 2, 60),
        points = d3.range(2000).map(function() { return [randomX(), randomY()]; });

    var color = d3.scale.linear()
        .domain([0, 20])
        .range(["#E8F8FF", "#B4DCED"])
        .interpolate(d3.interpolateLab);

    var hexbin = d3.hexbin()
        .size([width, height])
        .radius(20);

    var x = d3.scale.identity()
        .domain([0, width]);

    var y = d3.scale.linear()
        .domain([0, height])
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickSize(6, -height);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickSize(6, -width);

    var svg = d3.select(".bgAnim").append("svg")

        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("clipPath")
        .attr("id", "clip")
      .append("rect")
        .attr("class", "mesh")
        .attr("width", width)
        .attr("height", height);

    svg.append("g")
        .attr("clip-path", "url(#clip)")
      .selectAll(".hexagon")
        .data(hexbin(points))
      .enter().append("path")
        .attr("class", "hexagon")
        .attr("d", hexbin.hexagon())
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
        .style("fill", function(d) { return color(d.length); });

    // svg.append("g")
    //     .attr("class", "y axis")
    //     .call(yAxis);

    // svg.append("g")
    //     .attr("class", "x axis")
    //     .attr("transform", "translate(0," + height + ")")
    //     .call(xAxis);
    var jumboHeight = $("div.jumbotron").outerHeight() + "px";

    $("div.bgAnim").css("height",jumboHeight);

    // var redrawTimer = window.setTimeout(d3blocks, 5000);

    if(false){



    // $("div.bgAnim").empty();

    // var n = 125;

    // var whiteblue = d3.interpolateRgb("#eee", "steelblue"),
    // blueorange = d3.interpolateRgb("steelblue", "orange"),
    // orangewhite = d3.interpolateRgb("orange", "#eee"),
    // blackred = d3.interpolateRgb("black", "red"),
    // redgreen = d3.interpolateRgb("red", "green"),
    // ralph1 = d3.interpolateRgb("#E8F8FF","#B4DCED"),
    // ralph2 = d3.interpolateRgb("#B4DCED","#91C9E8"),
    // ralph3 = d3.interpolateRgb("#91C9E8","#67B8DE"),
    // ralph4 = d3.interpolateRgb("#67B8DE","#3399CC"),
    // ralph5 = d3.interpolateRgb("#3399CC","#E8F8FF");

    // console.log("ralph1",ralph1);

    

    // d3.select("div.bgAnim").selectAll("div")
    // .data(d3.range(n))
    // .enter().append("div")
    // .transition()
    // .delay(function(d, i) { return i + Math.random() * n * 150; })
    // .ease(d3.easeLinear)
    // .on("start", function repeat() {
    //     d3.active(this)
    //     .styleTween("background-color", function() { return ralph1; })
    //     .transition()
    //     .delay(1200)
    //     .styleTween("background-color", function() { return ralph2; })
    //     .transition()
    //     .delay(1200)
    //     .styleTween("background-color", function() { return ralph3; })
    //     .transition()
    //     .delay(1200)
    //     .styleTween("background-color", function() { return ralph4; })
    //     .transition()
    //     .delay(1200)
    //     .styleTween("background-color", function() { return ralph5; })
    //     .transition()
    //     .delay(1200)
    //     .on("start", repeat);
    // }); 

 

    // var jumboHeight = $("div.jumbotron").outerHeight() + "px";

    // $("div.bgAnim").css("height",jumboHeight);

    // var blockHeight = $("div.jumbotron").outerHeight() / 5 + "px";
    // $("div.bgAnim > div").css("height",blockHeight);

    }

}

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
    d3blocks();
});

mvolzApp.controller('aboutController', function($scope) {
    d3blocks();
});

mvolzApp.controller('projectController', function($scope) {
    d3blocks();
    scrollTarget();
});

mvolzApp.controller('contactController', function($scope) {
    d3blocks();
    prepContactPage();

    $scope.message = 'Contact us! JK. This is just a demo.';
});
