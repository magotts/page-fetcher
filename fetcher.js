const request = require("request");
const fs = require("fs");

let content = process.argv.slice(2);
//content = ["http://www.example.edu/", "./index.html"];
let output1 = content[0].toString();
let output2 = content[1].toString();

// node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

request(output1, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(output2, body, function(err) {
    if (err) {
      return console.log(err);
    }
    const stats = fs.statSync(output2);
    const fileSizeInBytes = stats.size;
    console.log(fileSizeInBytes);
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${output2}`);
    //console.log("file successfully written");
  
  });
});

