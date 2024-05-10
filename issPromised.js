const needle = require('needle');

const fetchMyIP = function() {
  return needle('get', 'https://api.ipify.org?format=json')
    .then((response) => {
      return response.body.ip;
    });
};

const fetchCoordsByIP = function(ip) {
  return needle('get', `http://ipwho.is/${ip}`)
    .then((response) => {
      const coordsObj = {
        lat: response.body.latitude,
        lng: response.body.longitude,
      };
      return coordsObj;
    });
};

const fetchISSFlyOverTimes = function(coords) {
  return needle('get', `https://iss-flyover.herokuapp.com/json/?lat=${coords.lat}&lon=${coords.lng}`)
    .then((response) => {
      return response.body.response;
    });
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then((response) => fetchCoordsByIP(response))
    .then((response) => fetchISSFlyOverTimes(response))
    .then((response) => {
      return response;
    });
};

const printTimes = function(passTimes) {
  for (let i = 0; i < passTimes.length; i++) {
    const date = new Date(passTimes[i].risetime * 1000).toDateString();
    const time = new Date(passTimes[i].risetime * 1000).toTimeString();
    const output = `Next pass at ${date} ${time} for ${passTimes[i].duration} seconds!`;
    console.log(output);
  }
};

module.exports = { nextISSTimesForMyLocation, printTimes };