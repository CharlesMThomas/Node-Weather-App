const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=515%20Parkside%20St%20Lehigh%20Acres',
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lon: ${body.results[0].geometry.location.lng}`);
});