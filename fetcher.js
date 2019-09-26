// Implement a small command line node app called fetcher.js 
// which should take a URL as a command-line argument as well 
// as a local file
//  path and download the resource to the specified path.
// > node fetcher.js http://www.example.com/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html


const request = require('request');
const fs = require('fs');


const inputRequest = process.argv.slice(2);

request(inputRequest[0], (error, response, body) => {
  const byteTotal = fs.statSync(inputRequest[1]);
  const fileSize = byteTotal.size;
  fs.writeFile(inputRequest[1], body, (err) => {
    if (err) {
      throw err;
    }


    console.log(`Downloaded and saved ${fileSize} bytes to ${inputRequest[1]}`);
  });
});





  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log('error:', error); // Print the error if one occurred