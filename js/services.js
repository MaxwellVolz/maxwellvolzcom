'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

function featureChevrons(){
	$("button.descButton").on("click",function(){
		var theChevron = $(this)[0].previousElementSibling;

		if($(theChevron).hasClass("glyphicon")){

			if($(theChevron).hasClass("glyphicon-chevron-down")){
				$(theChevron).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
			}
			else{
				$(theChevron).removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");

			}
		}
	});
}

function scrollTarget(){

	$("#otherGif").on("click",function(){
		var opacityCheck = $("#otherGif > img").css("opacity");

		if(opacityCheck < 0.5){
			$("#otherGif > img").animate({
				opacity: 1
			}, 100);
		}
		else{
			$("#otherGif > img").animate({
				opacity: 0
			}, 100);
		}

	})

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


    var jumboHeight = $("div.jumbotron").outerHeight() + "px";

    $("div.bgAnim").css("height",jumboHeight);

}
