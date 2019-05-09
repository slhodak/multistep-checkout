const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const db = require('./db');

const app = express();

app.listen(process.env.PORT || 3000);
console.log('Listening on port ' + (process.env.PORT || 3000));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.static(path.join(__dirname, path.normalize('../public'))));

app.post('/submitData', (req, res, next) => {
  res.status(200);
  if (req.body.email) {
    Models.createRecord(req.body, (err, record) => {
      if (err) {
        res.send('error: ' + err);
      } else {
        res.cookie('id', record.id);
        res.end();
      }
    });
  } else {
    Models.updateRecord(req.cookies.id, req.body, (err, record) => {
      if (err) {
        res.send('error: ' + err);
      } else {
        res.cookie('id', record.id);
        res.end();
      }
    })
    res.send('you didn\'t send an email address');
  }
});

const Models = {
  createRecord: (data, callback) => {
    db.Cart.findOrCreate({
      where: {email: data.email},
      defaults: {
        name: data.name, 
        password: data.password
      }
    })
    .then(([record, created]) => {
      console.log(record.get({plain:true}))
      callback(null, record.get({
        plain: true
      }));
    })
    .catch(err => {
      callback(err);
    });
  },
  updateRecord: (id, data, callback) => {
    var updateParams = {};
    for (var key in data) {
      console.log(key);
      whereStatement[key] = data[key];
    }
    db.Cart.upsert(updateParams,
    {
      where: {
        id: id
      }
    })
    .then(([record, updated]) => {
      callback(null, record);
    })
    .catch(err => {
      callback(err);
    })
  }
}