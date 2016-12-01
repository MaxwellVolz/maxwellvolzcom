// Define a new module for our app
var app = angular.module("gSpreadsheet", []);


var googleSpreadsheetPublicKey = "1Lw_fenLHDIkkdHwUwgbs90ggz6goRtJudkrECkYrmtg";
//1VZA5ls0rEEWB1GZqt59y93gAQsnoFUGbr-MUng4e124

// this your public key found in your Published Google Spreadsheet url
//
//Example:
// https://docs.google.com/spreadsheets/d/1Lw_fenLHDIkkdHwUwgbs90ggz6goRtJudkrECkYrmtg/pubhtml
//
//Public Key is:
// 1Lw_fenLHDIkkdHwUwgbs90ggz6goRtJudkrECkYrmtg

var gUrl = "https://spreadsheets.google.com/feeds/cells/" + googleSpreadsheetPublicKey + "/od6/public/basic?hl=en_US&alt=json";

//Allows cross origin requests for the google doc api
app
    .config(function($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });


//template config for comments page
app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/app', {
				templateUrl: 'htmls/home.html',
				controller: 'gComments'
			}).
			when('/about', {
				templateUrl: 'htmls/aboutPage.html',
				controller: 'gComments'
			}).
			otherwise({
				templateUrl: 'htmls/aboutPage.html',
				controller: 'gComments'
			});
}]);


//simple google spreadsheet controller that pulls the cells in order and assigns them to $scope objects
app.controller('gSpreadsheet', function($scope, $http) {

    
    $http.get(gUrl).
    success(function(data, status, headers, config) {
        //var json = data.getContentText();
        //var parsedData = JSON.parse(data);
        var gObj = data.feed.entry;
        var posts = [];

        for (i = 0; i < gObj.length; i++) {
            posts[i] = data.feed.entry[i].content.$t;
        }
        //$scope.posts = data.feed.entry;

        $scope.title = data.feed.entry[0].content.$t;
        posts.shift();
		//remove title from array
        $scope.events = posts;
        //var json = JSON.parse(data);
        //$scope.posts = data;
        //console.log(headers);
        console.log(posts);



    }).
    error(function(data, status, headers, config) {
        // log error
        $scope.events = ["There was a problem loading the Events list. Please check back later."];
    });


});


//slightly more complex spreadsheet controller that gets comments input thru a google form
var googleCommentsPublicKey = "1VZA5ls0rEEWB1GZqt59y93gAQsnoFUGbr-MUng4e124";
var cUrl = "https://spreadsheets.google.com/feeds/cells/" + googleCommentsPublicKey + "/1/public/basic?hl=en_US&alt=json";

//needed again?
app
    .config(function($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });
	
app.controller('gComments', function($scope, $http) {


	$http.get(cUrl).
   success(function(data, status, headers, config) {
		//var json = data.getContentText();
		//var parsedData = JSON.parse(data);
		var glsbcObj = data.feed.entry;
		var glsbcEvents = [];
		for (i = 0; i < glsbcObj.length; i++) {
			glsbcEvents[i] = data.feed.entry[i].content.$t;
		}
		
		//$scope.glsbcEvents = data.feed.entry;
		
		//$scope.title= data.feed.entry[0].content.$t;
		
		
		//have raw spreadsheet data and read to sort
		glsbcEvents.splice(0,4);
		//chop off first row
		
		var commentAmount = glsbcEvents.length/4;
		var comments = [];
		
		var size = 4;
		while (glsbcEvents.length > 0)
			comments.push(glsbcEvents.splice(0, 4));
		
		for (i = 0; i < commentAmount; i++) {
			
			comments[i].time = comments[i][0];
			comments[i].name = comments[i][1];
			comments[i].theySaid = comments[i][2];
			comments[i].iow = comments[i][3];

			
		}
	
		//$scope.c = comments[1].name;
		//console.log(comments);
		
		$scope.comments = comments;
		//var json = JSON.parse(data);
		//$scope.posts = data;
		//console.log(headers);
		//console.log(glsbcEvents);
		console.log($scope.comments);
		
		
    }).
    error(function(data, status, headers, config) {
      // log error
	  $scope.events = ["There was a problem loading the Chiefs. Please check back later."];
    });
	
});

