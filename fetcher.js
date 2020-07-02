const input = process.argv.slice(2);
const fs = require('fs');
const request = require('request');


request(input[0], (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code 
  //console.log('body:', body);

  fs.writeFile(input[1], body, (err) => {
    if (err) {
      throw err;
    };
    console.log(`Downloaded and saved ${body.length} bytes to ${input[1]}`);
    if (!input[1]) {
      throw err;
    }
  });
});


// returns true if input[1] file alreay exists
// const dlTest = fs.access(input[1], fs.F_OK, (err) => {
//   if (err) { throw err;}
// });