const { nextISSTimesForMyLocation, printTimes } = require('./issPromised');

nextISSTimesForMyLocation()
  .then((passTimes) => printTimes(passTimes))
  .catch((error) => console.log('There was an error', error.message));