twtApp.controller('homeCtrl', function($scope, $http, $location, $routeParams) {
	
	$scope.tweets = [];
	$scope.searchInput = [];
	
	//limiting # of searchKeywords, disabling the button
	$scope.searchFull = false;
	var srchInputArr = $scope.searchInput;
	if (srchInputArr.length === 8) {
		$scope.searchFull = true;
	} else {
		$scope.searchFull = false;
	}
	//no serach keyword = no submit 
	$scope.noKeyword = false;
	if ($scope.searchKeyword === "") {
		$scope.noKeyword = true;
	} else {
		$scope.noKeyword = false;
	}

	$scope.addSearchKeyword = function() {

		$location.path('/' + $scope.searchKeyword);
		console.log($location);
		//add the keyword to searchInput array
		srchInputArr.push($scope.searchKeyword);
		console.log($scope.searchKeyword);
		//reset the input box 
		$scope.searchKeyword = "";
		//call getTweets function
		console.dir($routeParams);
		console.log($route.current.params);
		getTweets();
	};

	$scope.removeSearchKeyword = function(index) {
		srchInputArr.splice(index, 1);
		getTweets();
	};

	function getTweets() {
		console.log(srchInputArr);
		//set the first keyword for search
		var query = srchInputArr[0];
		//if more than one, set the rest of keywords 
		if (srchInputArr.length > 1) {
			for (var i = 1; i < srchInputArr.length; i++) {
				query += "%20OR%20" + srchInputArr[i];
			}
		}
		//Go for tweets!
		$http({
			method: 'GET',
			url: 'http://digitalcrafts.com/students/twitter/hashtag.php?hash=' + $routeParams.searchTerm
		}).then(function successFunc(response) {
			var twtData = response.data.statuses;
			for (var i = 0; i < twtData.length; i++) {
				var name = twtData[i].user.name;
				var id = twtData[i].user.screen_name;
				var loc = twtData[i].user.location;
				var img = twtData[i].user.profile_banner_url;
				var postTime = twtData[i].created_at;
				var post = twtData[i].text;
				$scope.tweets.push(new TweetFormatter(name, id, loc, img, postTime, post));
			}
		}, function failFunc(response) {
			console.log("Failed due to " + response.status);
		});
		console.log($scope.tweets);

	}
	
});