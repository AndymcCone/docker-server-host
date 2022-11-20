const { createHash } = require('crypto');

const express = require('express');
const fs = require("fs");
const app = express();
const port = 80;
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}

responsetext = generateString(1000)
hashtext = hash(responsetext)

fs.writeFile("./response.txt", responsetext, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

fs.writeFile("./checksum.txt", hashtext, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

app.get('/download', function(req, res){
  const file = `response.txt`;
  res.download(file);
});

app.get('/checksum', function(req, res){
  const file = `checksum.txt`;
  res.download(file);
});

app.listen(port, () => {
console.log(`Server is running on port ${port}.`);
});