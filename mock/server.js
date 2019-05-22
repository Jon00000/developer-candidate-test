const express = require('express');
const app = express();
const Datastore = require('nedb'),
  db = new Datastore({
    filename: './mock/db.json',
    autoload: true
  });

// Deal with CORS
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/people', function (req, res) {
  // console.log(req.query)
  let { gender, age } = req.query;

  //generate selector
  let selector = {};
  if (gender !== 'all') {
    selector.gender = gender;
  }
  switch (age) {
    case 'under30': { selector.age = { $lt: 30 }; break; }
    case 'over30': { selector.age = { $gte: 30 }; break; }
  }

  // find data with selector
  db.find(selector, (err, docs) => {
    res.contentType('application/json');
    res.status(200).send(docs);
  });
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!')
});

