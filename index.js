const { nextISSTimesForMyLocation, printTimes, } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) return console.log('It didnt work', error);
  printTimes(passTimes);
});