var flickrOptions = {
        user_id: '19471305@N00',
        api_key: 'b290d589cf5e1c4cf25583d1351aadbd',
        secret: '6cbd57c81b16d67a',
        access_token: '72157664472522302-8c0471c02d7e843c',
        access_token_secret: '21be06c81ad94901',
        progress: false
   };

var Flickr = require("flickrapi");

Flickr.authenticate(flickrOptions, Flickr.downsync("nigel", true));
