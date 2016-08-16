function TweetFormatter(userName, userId, userLocation, userImg, postTime, post) {
	this.userName = userName;
	this.userId = userId;
	this.userLoc = userLocation;
	this.userImg = userImg;
	this.postTime = postTime;
	this.post = post;
}

//method to get time reference as prototype
// TweetFormatter.prototype.getTimeSince = function(now) {
// 	//time difference in seconds
// 	var timeSince = (now - this.postTime) / 1000;
	
// 	//time difference conversion
// 	var secondsInYr = 60 * 60 * 24 * 
// 	if (timeSince > secondsInYr) {
// 		var textToPost = Math.floor(timeSince/secondsInYr);
// 	}
// 	return (now - this.postTime) / 1000;
// };

// tweet1.getTimeSince(Date.now());
// tweet2.getTimeSince(Date.now());
