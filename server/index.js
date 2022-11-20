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

fs.writeFile("./testi.txt", generateString(1000), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

app.get('/download', function(req, res){
  const file = `testi.txt`;
  res.download(file);
});

app.listen(port, () => {
console.log(`Server is running on port ${port}.`);
});