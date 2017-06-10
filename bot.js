var twit = require('twit');
var config = require('./config');

var Twitter = new twit(config);

var stream = Twitter.stream('statuses/filter', { track: '#HoCRT,#hocrt,#HOCRT' })

stream.on('tweet', function(tweet) {
    likeAndRetweet(tweet.id_str)
})

var likeAndRetweet = function(idStr) {
    
    Twitter.post('statuses/retweet/:id', { id: idStr}, function(err, data, response) {

    });

    Twitter.post('favorites/create', { id : idStr}, function(err, data, response) {

    })

}