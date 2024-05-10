const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./issPromised');

fetchMyIP()
  .then((response) => fetchCoordsByIP(response))
  .then((response) => fetchISSFlyOverTimes(response))
  .then((response) => { console.log(response) })
