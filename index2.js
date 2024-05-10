const { fetchMyIP } = require('./issPromised');

fetchMyIP()
  .then((response) => console.log(response))
