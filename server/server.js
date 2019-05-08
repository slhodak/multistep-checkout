const express = require('express');
const path = require('path');

const app = express();

app.listen(process.env.PORT || 9000);
console.log('Listening on port ' + (process.env.PORT || 9000));

app.use(express.static(path.join(__dirname, path.normalize('../public'))));

