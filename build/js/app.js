$( "#doctors" ).on( "click", function( event ) {
    listDoctors()
})

$( "#users" ).on( "click", function( event ) {
    listUsers()
})

$( "#restaurants" ).on( "click", function( event ) {
    listRestaurants()
})

console.log("A")

var oauth = OAuth({
    consumer: {
        public: '84KVVg4XymO_ESQUjSftwQ',
        secret: 'skTNBNjcDxO1hHJc3zSKV494yNI'
    },
    signature_method: 'HMAC-SHA1'
});

var request_data = {
    url: 'http://api.yelp.com/v2/search?term=food&location=San+Francisco',
    method: 'GET'
};

var token = {
    public: 'LTgCFj8B1d4CZlRPfF6LL5k8JxLH6G2X',
    secret: 'SvKX5YUsyZ0vHKSUbsKjRes6Ky0'
};


$.ajax({
    url: request_data.url,
    type: request_data.method,
    data: oauth.authorize(request_data, token),
    headers: {"Access-Control-Allow-Origin": "localhost:8080"}
}).done(function(data) {
    console.log("I got the data: " + data)
});


// var auth = { 
//     consumerKey: "84KVVg4XymO_ESQUjSftwQ", 
//     consumerSecret: "skTNBNjcDxO1hHJc3zSKV494yNI",
//     accessToken: "LTgCFj8B1d4CZlRPfF6LL5k8JxLH6G2X",
//     accessTokenSecret: "SvKX5YUsyZ0vHKSUbsKjRes6Ky0",
//   };

//   var terms = 'food';
//   var near = 'San+Francisco';

//   var accessor = {
//     consumerSecret: auth.consumerSecret,
//     tokenSecret: auth.accessTokenSecret
//   };

//   var parameters = [];
//   parameters.push(['term', terms]);
//   parameters.push(['location', near]);
//   parameters.push(['oauth_consumer_key', auth.consumerKey]);
//   parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
//   parameters.push(['oauth_token', auth.accessToken]);

//   var message = { 
//     'action': 'http://api.yelp.com/v2/search',
//     'method': 'GET',
//     'parameters': parameters 
//   };

//   OAuth.setTimestampAndNonce(message);  

//   OAuth.SignatureMethod.sign(message, accessor);

//   var parameterMap = OAuth.getParameterMap(message.parameters);
//   parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)

//   var url = OAuth.addToURL(message.action,parameterMap);
//   var response = UrlFetchApp.fetch(url).getContentText();
//   var responseObject = Utilities.jsonParse(response);
  //have my JSON object, do whatever we want here, like add to spreadsheets