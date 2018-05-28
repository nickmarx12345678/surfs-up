const request = require('request');

const surfableStates = ['Fair', 'Fair-Good', 'Good']
 
request('http://api.spitcast.com/api/spot/forecast/120', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);

  tomorrowForecast = body[0]; //TODO

  if surfableStates.includes(tomorrowForecast.shape_full) {
    console.log('lookin good!');
  }
});


