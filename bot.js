var twit = require('twit');
var config = require('./config');

var Twitter = new twit(config);

var params = {
        q: '#HoCRT, #hocrt, #HOCRT',
        result_type: 'recent',
        lang: 'en'
    }

var run = function() {

    Twitter.get('search/tweets', params)

        .catch(function(err) {
            console.log(err);
        })

        .then (function (tweets) {

            tweets = tweets.data.statuses;

            for (var i = 0; i < tweets.length; i++) {
                //console.log(tweets[i].id_str);
                Twitter.post('statuses/retweet/:id', { id: tweets[i].id_str})
                        
                        .catch(function(err) {
                            console.log('retweeted already')
                        })

                        .then(function(response) {
                            console.log(response)
                        })

            }

        })

}


run();
//likeAndRetweet(retweet, 900000);*/