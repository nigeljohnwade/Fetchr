var config = require("./../config.js");
var Flickr = require("flickrapi");

Flickr.tokenOnly(config.flickrOptions, function(error, flickr) {
	if(error){
		console.log(error);
	}
	flickr.photos.search({
	  user_id: '19471305@N00',
	  page: 1,
	  per_page: 5
	}, function(err, result) {
		if(err){
			console.log('Error');
			console.log(err)
		}else{
			console.log(result);
			document.write(result.photos.total);
			document.write('\n');
			for(var i = 0 ; i < result.photos.photo.length ; i++){
				document.write(result.photos.photo[i].title);
				document.write('\n');
			}
		}
	});
});

console.log('End');