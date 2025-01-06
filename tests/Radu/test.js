//Requires node.js
//Run the script with node test.js

//Download location and source file
const downloadlocation = "https://file-examples.com/storage/fe602ed48f677b2319947f8/2017/10/file-sample_150kB.pdf";
const downloadedfile = "sourcefile.pdf";

// Source file path and destination file path
const sourceFile = 'E:/Playwright/tests/sourcefile.pdf';
const destFile = 'E:/Playwright/tests/Copie/destinationfile.pdf';

// File system 
const fs = require('fs');

//Timeout between download and copy so that the file is properly saved
async function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
//Download the file
async function downloadfile(){
    if (fs.existsSync(sourceFile)) {
        console.log('File exists!');
      } 
    else {
        console.log('File does not exist. The download starts...');
        const http = require('https'); // or 'https' for https:// URLs 
        const file = fs.createWriteStream(downloadedfile);   
        const request = http.get(downloadlocation, function(response) {
        response.pipe(file);  
        // after download completed close filestream
        file.on("finish", () => {
           file.close();
           console.log("Download Completed");
        });
     });
    }   
}


// Copy the file
async function copyfile(){   
fs.copyFile(sourceFile, destFile, (err) => {
  if (err) {
    console.error('Error copying the file:', err);
  } else {
    console.log('File copied successfully');
  }
});
}

//Run the previous functions
async function run(){
    downloadfile();
    await sleep(4000);
    copyfile();
    }

run();
