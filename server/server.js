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
  console.log(req.body);
  // for (var item in JSON.parse(req.body)) {
  //   console.log(item + ': ' + this.state[item]);
  // }
  res.status(200);
  res.send('hear you');
});