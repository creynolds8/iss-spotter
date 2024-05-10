const { nextISSTimesForMyLocation, printTimes, } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) return console.log('It didnt work', error);
  printTimes(passTimes);
});

// fetchMyIP((err, ip) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   return ip;
// });

// fetchCoordsByIP('184.66.5.236', (err, data) => {
//   if (err) return console.log(err);
//   return data;
// });

// fetchISSFLyoverTimes({ lat: 48.7786908, lng: -123.7079417 }, (err, data) => {
//   if (err) return console.log(err);
//   console.log(data);
// });