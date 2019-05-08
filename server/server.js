const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.listen(process.env.PORT || 9000);
console.log('Listening on port ' + (process.env.PORT || 9000));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.static(path.join(__dirname, path.normalize('../public'))));

//  handle post requests
app.post('/submitData', (req, res, next) => {
  //  request body comes in parsed
  for (var item in req.body) {
    console.log(item + ': ' + req.body[item]);
  }
  res.status(200);
  res.send('hear you');
});

// const Models = {
//   parseAndSeparateData: (data) => {
    
//     return JSON.parse(data);
//   }
// }