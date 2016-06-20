var express= require('express');
var app= express();
var request = require('request');

var port= 3000;
var ip= "127.0.0.1";

app.listen(port, function(){console.log('listening on port: ', port)});

app.get('/tsa', function(req, res) {
request('http://apps.tsa.dhs.gov/MyTSAWebService/GetWaitTimes.ashx?ap=LAX&output=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      // do more stuff
      res.send(info);
    }
  })
});

app.post('/google', function(req, res){
	var dataStr= '';
	req.on('data', function(data){
      dataStr += data;
	})
	req.on('end', function (){
		console.log(dataStr);
	request.post('https://maps.googleapis.com/maps/api/directions/json?origin='+dataStr+'&destination=place_id:ChIJsYC5DCyxwoARn4RMcIy9sSs&key=AIzaSyANP9kpB75a-eKRlvXSOlG7sLzC5ylsfyo', function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var info = JSON.parse(body)
      // do more stuff
      res.send(info);
    }
  });
	})
})

