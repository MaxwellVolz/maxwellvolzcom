'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('homeCtrl', [function() {
		d3blocks();
	}])
.controller('projectsCtrl', [function() {
		scrollTarget();
		featureChevrons();
		d3blocks();
	}])
.controller('contactCtrl', [function() {
		d3blocks();
	}])
.controller('tvCtrl', [function() {
        d3blocks();
    }])

$( window ).resize(function() {
	$("div.bgAnim").fadeOut( "fast" );
	lazyBlocks();
});

var lazyBlocks = _.debounce(function(){
	$("div.bgAnim").fadeIn( "slow" );
	d3blocks();
}, 200);
