var app = require("express")();
var querystring = require('querystring');
var OAuth   = require('oauth').OAuth;
var cors = require("cors");

var Client = function(oauth_config) {
  this.oauthToken = oauth_config.token;
  this.oauthTokenSecret = oauth_config.token_secret;
  
  this.oauth = new OAuth(
    null,
    null,
    oauth_config.consumer_key,
    oauth_config.consumer_secret,
    oauth_config.version || "1.0",
    null,
    'HMAC-SHA1'
  );

  return this;
};

app.use(cors());

var base_url = "http://api.yelp.com";

Client.prototype.get = function(resource, params, callback) {

  console.log(base_url + resource);
  return this.oauth.get(
    base_url + resource,
    this.oauthToken, 
    this.oauthTokenSecret, 
    function(error, data, response) {
      callback(error, data, response);
    }
  );
}

var authentication = {

	token: "qcd7k87kfnnmfAGUnRXyy7UJ078SviSl",
	token_secret: "zAhJFS3mXv2yYMzTm8dj3BYqK8I",
	consumer_key: "kw2F6nbsFEHamXZQ1fJuhQ",
	consumer_secret: "PwKdCWD67xBDjRlT2SpEYEnzuYs"

};

app.set('port', (process.env.PORT || 3000))

var server = app.listen(app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
})

var yelpClient = new Client(authentication);

app.get("/*", function(req, res) {
	
	try
	{

		yelpClient.get(req.url, null, function(error, data, response){
			res.send(data);
		});

	}
	catch(err) {
		console.log("a");
	}
});