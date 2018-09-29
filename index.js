const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const mongoDB =
  'mongodb://kcheung:2UjpkG5s7xpnLHc@ds119273.mlab.com:19273/mre-db';

mongoose
  .connect(
    mongoDB,
    { useNewUrlParser: true }
  )
  .then(() => console.log('DB connected'))
  .catch(error => console.log(err));

app.get('/', function(req, res) {
  res.send('Hello Dev!');
});
//
//                     // Listen to port 5000
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
