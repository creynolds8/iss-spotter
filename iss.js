const needle = require('needle')

const fetchMyIP = function(callback) {
  needle.get('https://api.ipify.org?format=json', (err, response, body) => {
    if (err) {
      callback(err);
      return;
    }
    const ip = JSON.stringify(body);
    callback(null, ip);
  })
};

module.exports = { fetchMyIP };