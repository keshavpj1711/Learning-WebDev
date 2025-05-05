const fs = require("fs");

// fs.writeFile(file, data[, options], callback)
fs.writeFile("message.txt", "Hello from NodeJS", (err) => {
  if (err) {
    throw err;
  };
  console.log("The file has been saved!");
});

// What is a callback?
// A fn which is being called after fs.writeFile() tries to write the data to the file.

// Reading from a file
fs.readFile("./messageToRead.txt", "utf-8", (err, data) => {
  // utf-8 specifies the encoding 
  // if no encoding specified, raw buffer is returned
  if(err) {
    throw err;
  };
  console.log("File Read Successfully, See Below!! \n");
  console.log(data);
})