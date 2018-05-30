console.log("Loading function");

var request = require('request');
var AWS = require("aws-sdk");

var surfableStates = ['Fair', 'Fair-Good', 'Good']
 

exports.handle = function(event, context) {
  var sns = new AWS.SNS();
  var params = {
      Message: "Shaka braaaaaah", 
      Subject: "Git er done",
      TopicArn: "arn:aws:sns:us-east-1:606748693934:surfs-lookin-good"
  };

  request('http://api.spitcast.com/api/spot/forecast/120', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);

    var tomorrowForecast = body[0]; //TODO

    if (surfableStates.includes(tomorrowForecast.shape_full)) {
      console.log('lookin good!');
      sns.publish(params, context.done);
    } else {
      console.log('not today buddy');
    }

  });
};


