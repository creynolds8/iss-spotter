const needle = require('needle');

const fetchMyIP = function() {
  needle('get', 'https://api.ipify.rg?format=json')
    .then((response) => {
      return response.body.ip;
    })
    .catch((error) => {
      return error.errno, error.code;
    })
};

module.exports = { fetchMyIP, };