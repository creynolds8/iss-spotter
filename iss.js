const needle = require('needle');

const fetchMyIP = function(callback) {
  needle.get('https://api.ipify.org?format=json', (err, response, body) => {
    if (err) {
      callback(err);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code: ${response.statusCode} when fetching IP. Response: ${body}.`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.stringify(body);
    callback(null, ip);
  });
};

module.exports = { fetchMyIP };