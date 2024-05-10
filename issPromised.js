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
fetchMyIP()
module.exports = { fetchMyIP, };