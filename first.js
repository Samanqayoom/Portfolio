const express = require('express');
const app = express();
const port = 3000;

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});














/*console.log("Hello World")
const { log } = require("console");
const fs=require("fs")
fs.writeFile("output.txt","Writing File",(err)=>
{
  if (err)
    console.log("Error Occured");
  else 
     console.log("file write Successfully!");
     
})*/