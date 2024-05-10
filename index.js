const { fetchMyIP, fetchCoordsByIP } = require('./iss');


fetchMyIP((err, ip) => {
  if (err) {
    console.log('IP fail');
    return;
  }
  return ip;
});

fetchCoordsByIP('184.66.5.236', (err, data) => {
  if (err) return console.log('Coord fail');
  console.log(data);
});