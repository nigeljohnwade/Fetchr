var flickrOptions = {
        user_id: '19471305@N00',
        api_key: 'b290d589cf5e1c4cf25583d1351aadbd',
        api_secret: '6cbd57c81b16d67a',
        access_token: '72157664472522302-8c0471c02d7e843c',
        access_token_secret: '21be06c81ad94901',
        progress: false
    };
var Flickr = require("flickrapi");
var config = require("../config.js");
function searchFlickr(query){
    console.log('searching...');
    Flickr.tokenOnly(flickrOptions, function(error, flickr) {
        if(error){
            console.log(error);
        }
        flickr.photos.search(query, function(err, result) {
            if(err){
                console.log('Error');
                console.log(err);
            }else{
                console.log(result);
                for(var i = 0 ; i < result.photos.photo.length ; i++){
                    var  currentImg = result.photos.photo[i];
                    var imgTarget = document.getElementById('picture-panel');
                    var tempImg = document.createElement('img');
                    tempImg.setAttribute('src', 'https://farm' + currentImg.farm + '.staticflickr.com/' + currentImg.server + '/' + currentImg.id + '_' + currentImg.secret + '_t.jpg');
                    tempImg.setAttribute('title', result.photos.photo[i].title);
                    imgTarget.appendChild(tempImg);
                }
            }
        });
    });
}
var searchTrigger = document.getElementById('search');
searchTrigger.addEventListener('click', function(e){
    if(document.querySelector('#user_id').value.length > 1){
        searchFlickr({
            'user_id': document.querySelector('#user_id').value,
            'text': document.querySelector('#free_text').value});
    }else{
        console.log('No parameters');
        document.querySelector('#user_id').className = 'error';
    }
});