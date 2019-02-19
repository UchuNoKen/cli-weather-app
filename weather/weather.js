const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/dd8b8947a0379ac0baa2cb62a88a5b5b/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
    
     if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
        }else{
            callback('Unable to fetch weather.');
        }
        
        // callback(undefined, {
        //     address: body.results[0].formatted_address,
        //     latitude: body.results[0].geometry.location.lat, 
        //     longitude: body.results[0].geometry.location.lng
        // });
    
    });
}

module.exports.getWeather = getWeather;