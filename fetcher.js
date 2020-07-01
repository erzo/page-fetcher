const input = process.argv.slice(2);
const fs = require('fs');
const request = require('request');


request(input[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code 
  //console.log('body:', body);
  fs.writeFile(input[1], body, (err) => {
    if (err) throw err;
    console.log('Replaced!');
    // if (!input[1]) {
    //   throw err;
    // }
  });
});
