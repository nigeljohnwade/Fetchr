var config = require("./../config.js");
var Flickr = require("flickrapi");

function searchFlickr(){
    console.log('searching...');
    Flickr.tokenOnly(config.flickrOptions, function(error, flickr) {
        if(error){
            console.log(error);
        }
        flickr.photos.search({
          user_id: '19471305@N00'
        }, function(err, result) {
            if(err){
                console.log('Error');
                console.log(err)
            }else{
                console.log(result);
                for(var i = 0 ; i < result.photos.photo.length ; i++){
                    currentImg = result.photos.photo[i];
                    var imgTarget = document.getElementById('picture-panel');
                    tempImg = document.createElement('img');
                    tempImg.setAttribute('src', 'https://farm' + currentImg.farm + '.staticflickr.com/' + currentImg.server + '/' + currentImg.id + '_' + currentImg.secret + '_t.jpg');
                    tempImg.setAttribute('title', result.photos.photo[i].title);
                    imgTarget.appendChild(tempImg);
                }
            }
        });
    });
}

document.addEventListener('click', function(){
    searchFlickr();
});
console.log('End');