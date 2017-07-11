const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/49527ad19bc2c83b6d50590d75027aae/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to fetch weather.');
        }
    });
}

module.exports = {
    getWeather
}