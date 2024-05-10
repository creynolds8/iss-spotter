const needle = require('needle');

const fetchMyIP = function() {
  return needle('get', 'https://api.ipify.org?format=json')
    .then((response) => {
      return response.body.ip;
    })
    .catch((error) => {
      return error.errno, error.code;
    })
};

const fetchCoordsByIP = function(ip) {
  return needle('get', `http://ipwho.is/${ip}`)
    .then((response) => {
      const coordsObj = {
        lat: response.body.latitude,
        lng: response.body.longitude,
      }
      return coordsObj;
    })
    .catch((error) => {
      return error.errno, error.code;
    })
};

module.exports = { fetchMyIP, fetchCoordsByIP };