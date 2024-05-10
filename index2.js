const { fetchMyIP, fetchCoordsByIP } = require('./issPromised');

fetchMyIP()
  .then((response) => fetchCoordsByIP(response))
  .then((response) => { console.log(response) })
