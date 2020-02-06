var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	name = request.query.name;
	description = request.query.description;
	friend = 
	{
		"name": name,
		"description": description,
		"imageURL": "http://lorempixel.com/400/400/people"	
	};

	data.friends.push(friend);
 };
