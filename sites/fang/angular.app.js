var app = angular.module('simpleChat', ['firebase']);
var ref = new Firebase("https://fangchat2.firebaseio.com/");


app.controller('MessagesCtrl', 
            function($scope, $firebase) {
			
			var obj = $firebase(ref).$asObject();
			obj.$bindTo($scope, "data");

			$scope.login = function() {
				ref.authWithOAuthPopup("facebook", function(error, authData) {});
			};
			
				
			$scope.handleKeyup = function handleKeyup(e) {
				if (e.keyCode == 13) {
					$scope.newMessage.author = ref.getAuth().facebook.displayName;
					$scope.newMessage.time = Firebase.ServerValue.TIMESTAMP;
					ref.child("messages").push($scope.newMessage);
					
					$scope.newMessage = {};
					
					
				}
			}
});


app.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});



	
	
