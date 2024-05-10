const needle = require('needle');

const fetchMyIP = function(callback) {
  needle.get('https://api.ipify.org?format=json', (err, response, body) => {
    if (err) return callback(err, null);
    if (response.statusCode !== 200) {
      const msg = `Status code: ${response.statusCode} when fetching IP. Response: ${body}.`;
      callback(Error(msg), null);
      return;
    }
    const ip = body.ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  needle.get(`http://ipwho.is/${ip}`, (err, response, body) => {
    if (err) return callback(err, null);
    if (!body.success) {
      const msg = `Status code: ${response.statusCode} when fetching IP. Response: ${body}.`;
      callback(Error(msg), null);
      return;
    }
    const coordsObj = {
      lat: body.latitude,
      lng: body.longitude,
    };
    callback(null, coordsObj);
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
};