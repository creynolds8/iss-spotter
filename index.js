const { fetchMyIP } = require('./iss');

fetchMyIP((err, ip) => {
  if (err) {
    console.log('failed');
    return;
  }
  console.log(ip);
});