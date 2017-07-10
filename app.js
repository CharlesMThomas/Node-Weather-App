const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=6010%20Drexel%20Lane%20Fort%20Myers',
    json: true
}, (error, response, body) => {
    console.log(body);
});